import React, { Component, Fragment } from 'react'
import axios from './../../axios-orders'

import Burger from '../../components/Burger/Burger'
import BuildControls from './../../components/Burger/BulidControls/BuildControls'
import Modal from './../../components/UI/Modal/Modal'
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary'
import Spinner from './../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    isDisabled: false,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }, 0)

    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })

    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })

    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  modalClose = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    // this.setState({ loading: true })

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Molly',
    //     address: {
    //       street: 'Teststreet 1',
    //       zipCode: '23432',
    //       country: 'Peru'
    //     },
    //     email: 'test@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // }

    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false  })
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false })
    //   })

    const queryParams = [];

    for(let i in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`)
    }

    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryParams.join('&')}`
    })
  }

  componentDidMount() {
    axios.get('/ingredients.json')
    .then(response => {
      this.setState({ingredients: response.data});
    })
    .catch((error) => this.setState({error: true}))
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    const {
      ingredients,
      totalPrice,
      isDisabled,
      purchasable,
      purchasing,
      loading,
      error
    } = this.state

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = loading ? <Spinner /> : null;

    ingredients && (
      orderSummary = <OrderSummary
        ingredients={ingredients}
        totalPrice={totalPrice}
        cancel={this.modalClose}
        continue={this.purchaseContinueHandler} />
    )

    let burger = error ? <p>Ingredients can't be loaded.</p> : <Spinner />;

    ingredients && (
      burger = (
        <Fragment>
          <Burger ingredients={ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            isDisabled={isDisabled}
            disabled={disabledInfo}
            totalPrice={totalPrice}
            purchasable={purchasable}
            ordered={this.purchaseHandler} />
        </Fragment>
      )
    )

    return (
      <Fragment>
        <Modal show={purchasing} modalClose={this.modalClose}>
          { orderSummary }
        </Modal>

        {burger}
      </Fragment>
    )
  }
}

export default BurgerBuilder
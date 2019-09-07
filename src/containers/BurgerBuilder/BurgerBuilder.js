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
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    isDisabled: false,
    purchasable: false,
    purchasing: false,
    loading: false
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
    this.setState({ loading: true })

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Molly',
        address: {
          street: 'Teststreet 1',
          zipCode: '23432',
          country: 'Peru'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({ loading: false, purchasing: false  })
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      totalPrice={this.state.totalPrice}
      cancel={this.modalClose}
      continue={this.purchaseContinueHandler} />

    if(this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClose={this.modalClose}>
          {orderSummary }
        </Modal>

        <Burger ingredients = {this.state.ingredients} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          isDisabled={this.state.isDisabled}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler} />
      </Fragment>
    )
  }
}

export default BurgerBuilder
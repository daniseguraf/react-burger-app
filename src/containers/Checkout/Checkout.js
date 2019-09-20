import React, { Component, Fragment } from 'react'

import { Route } from 'react-router-dom'

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  cancel = () => {
    this.props.history.goBack()
  }

  continue = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)

    const ingredients = {};

    for(let el of query.entries()) {
      ingredients[el[0]] = +el[1]
    }

    this.setState({ingredients: ingredients})



  }

  render() {
    return (
      <Fragment>
        <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancel} continue={this.continue} />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
      </Fragment>
    )
  }
}

export default Checkout;
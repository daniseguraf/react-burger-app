import React, { Component } from 'react'

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary'

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
    console.log('cancel');

    this.props.history.goBack()
  }

  continue = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  componentDidMount() {
    console.log(this.props);

  }

  render() {
    return <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancel} continue={this.continue} />
  }
}

export default Checkout;
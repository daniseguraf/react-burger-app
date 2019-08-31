import React, { Component, Fragment } from 'react'

import Button from './../../UI/Button/Button'

class OrderSummary extends Component {
  render() {
    let ingredientSummary = Object.entries(this.props.ingredients).map(el => {
      return (
        <li key={el[0]}><span style={{ textTransform: 'capitalize' }}>
          {el[0]}</span>: {el[1]}
        </li>
      )
    })

    return (
      <Fragment>
        <h3>Your order</h3>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button type="Danger" clicked={this.props.cancel}>CANCEL</Button>
        <Button type="Success" clicked={this.props.continue}>CONTINUE</Button>
      </Fragment>
    )
  }
}

export default OrderSummary
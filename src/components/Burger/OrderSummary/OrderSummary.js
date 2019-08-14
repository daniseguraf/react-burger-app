import React, { Fragment } from 'react'

import Button from './../../UI/Button/Button'

const orderSummary = (props) => {
  let ingredientSummary = Object.entries(props.ingredients).map(el => {
    return (
      <li key={el[0]}><span style={{textTransform: 'capitalize'}}>
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
      <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button type="Danger" clicked={props.cancel}>CANCEL</Button>
      <Button type="Success" clicked={props.continue}>CONTINUE</Button>
    </Fragment>
  )
}


export default orderSummary
import React, { Fragment } from 'react'

const orderSummary = (props) => {
  let ingredientSummary = Object.entries(props.ingredients).map(el => {
    return (
      <li key={el[0]}><span style={{textTransform: 'capitalize'}}>
        {el[0]}</span>: {el[1]}
      </li>
    )
  })

  console.log(ingredientSummary);

  return (
    <Fragment>
      <h3>Your order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total price: {props.totalPrice.toFixed(2)}</p>
      <p>Continue to checkout?</p>
    </Fragment>
  )
}


export default orderSummary
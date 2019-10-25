import React from 'react'
import Burger from './../../Burger/Burger'
import Button from './../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const checkoutSummary = ({ ingredients, cancel, next }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients} />
      </div>
      <Button type="Danger" clicked={cancel}>CANCEL</Button>
      <Button type="Success" clicked={next}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary
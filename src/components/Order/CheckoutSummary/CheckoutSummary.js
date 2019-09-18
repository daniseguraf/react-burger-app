import React from 'react'
import Burger from './../../Burger/Burger'
import Button from './../../UI/Button/Button'

const checkoutSummary = (props) => {
  return (
    <div className={}>
      <h1>We hope it states well!</h1>
      <div style={{width: '300px', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>

    </div>
  )
}

export default checkoutSummary
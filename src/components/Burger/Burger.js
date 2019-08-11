import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
  let transformedIngredients = 'Seleccione ingredientes';

  if (props.ingredients) {
    transformedIngredients = Object.keys(props.ingredients).map((keyIg) => {
      console.log( [...Array(props.ingredients[keyIg])] );
      return [...Array(props.ingredients[keyIg])].map((_, i) => {
        return (<BurgerIngredient key={keyIg + i} type={keyIg} />)
      })
    })
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
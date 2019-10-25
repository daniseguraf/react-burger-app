import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients).map((keyIg) => {
    return [...Array(ingredients[keyIg])].map((_, i) => {
      return (<BurgerIngredient key={keyIg + i} type={keyIg} />)
    })
  })
  .reduce((prevValue, currentValue) => {
    return prevValue.concat(currentValue)
  }, []);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient key="top" type="bread-top"/>
      {transformedIngredients.length === 0 ? <p>Please start adding ingredients!</p> : transformedIngredients }
      <BurgerIngredient key="bottom" type="bread-bottom" />
    </div>
  )
}

export default burger
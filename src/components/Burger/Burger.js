import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients).map((keyIg) => {
    return [...Array(props.ingredients[keyIg])].map((_, i) => {
      return (<BurgerIngredient key={keyIg + i} type={keyIg} />)
    })
  })
  .reduce((prevValue, current) => {
    return prevValue.concat(current)
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;

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
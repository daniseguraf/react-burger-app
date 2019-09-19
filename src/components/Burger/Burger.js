import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  console.log(props);

  let transformedIngredients = Object.keys(props.ingredients).map((keyIg) => {
    return [...Array(props.ingredients[keyIg])].map((_, i) => {
      return (<BurgerIngredient key={keyIg + i} type={keyIg} />)
    })
  })
  .reduce((prevValue, currentValue) => {
    return prevValue.concat(currentValue)
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient key="top" type="bread-top"/>
      {transformedIngredients }
      <BurgerIngredient key="bottom" type="bread-bottom" />
    </div>
  )
}

export default burger
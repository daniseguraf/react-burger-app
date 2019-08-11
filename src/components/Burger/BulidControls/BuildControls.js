import React from 'react'

import styles from './BuildControls.module.css'

import BuildControl from './BuildControl/BuilControl'

const controls = [
  { label: "Salad", type: 'salad' },
  { label: "Meat", type: 'meat' },
  { label: "Bacon", type: 'bacon' },
  { label: "Cheese", type: 'cheese' },
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map(el => (
      <BuildControl
        key={el.label}
        label={el.label}
        type={el.type}
        added={ () => props.ingredientAdded(el.type)}
      />))
    }
  </div>
)

export default buildControls
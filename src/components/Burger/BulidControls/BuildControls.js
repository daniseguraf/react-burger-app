import React from 'react'

import styles from './BuildControls.module.css'

import BuildControl from './BuildControl/BuilControl'

const buildControls = () => (
  <div className={styles.BuildControls}>
    <BuildControl />
  </div>
)

export default buildControls
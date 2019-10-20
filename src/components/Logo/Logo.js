import React from 'react'

import img from './../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

export default () => (
  <div className={classes.Logo}>
    <img src={img} alt="Logo" />
  </div>
)

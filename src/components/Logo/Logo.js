import React from 'react'

import img from './../../assets/images/burger-logo.png'

import classes from './Logo.module.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={img} alt="Logo" />
  </div>
)

export default logo
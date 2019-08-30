import React from 'react'

import img from './../../assets/images/burger-logo.png'

import classes from './Logo.module.css'

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={img} alt="Logo" />
  </div>
)

export default logo
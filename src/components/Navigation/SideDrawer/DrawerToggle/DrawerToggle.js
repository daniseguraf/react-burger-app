import React from 'react'

import classes from './DrawerToggle.module.css'

export default ({sideDrawerHandler}) => (
  <div className={classes.DrawerToggle} onClick={sideDrawerHandler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

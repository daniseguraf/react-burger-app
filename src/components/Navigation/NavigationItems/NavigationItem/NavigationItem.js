import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module.css'

export default ({ link, active, children }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={link} className={active ? classes.active : null}>{children}</NavLink>
  </li>
)

import React from 'react'

import NavigationItems from './../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

import Logo from './../../Logo/Logo'
import classes from './Toolbar.module.css';

export default ({sideDrawerHandler}) => (
  <header className={classes.Toolbar}>
    <DrawerToggle sideDrawerHandler={sideDrawerHandler} />

    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DisplayNone}>
      <NavigationItems />
    </nav>
  </header>
)

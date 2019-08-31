import React from 'react'

import Logo from './../../Logo/Logo'

import NavigationItems from './../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

import styles from './Toolbar.module.css'
import classes from './Toolbar.module.css';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle sideDrawerHandler={props.sideDrawerHandler} />

    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DisplayNone}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
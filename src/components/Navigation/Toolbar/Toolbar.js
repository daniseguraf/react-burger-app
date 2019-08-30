import React from 'react'

import Logo from './../../Logo/Logo'

import NavigationItems from './../NavigationItems/NavigationItems'

import styles from './Toolbar.module.css'
import classes from './Toolbar.module.css';

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
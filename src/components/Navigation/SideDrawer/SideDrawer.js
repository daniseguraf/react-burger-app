import React, { Fragment } from 'react'

import Logo from './../../Logo/Logo'
import NavigationItems from './../NavigationItems/NavigationItems'
import Backdrop from './../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
  return (
    <Fragment>
      <div className={[classes.SideDrawer, props.isOpen ? classes.Open : classes.Close ].join(' ')} >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <Backdrop show={props.isOpen}  close={props.close} />
    </Fragment>
  )
}

export default sideDrawer
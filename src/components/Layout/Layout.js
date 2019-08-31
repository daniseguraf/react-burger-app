import React, { Component, Fragment } from 'react'

import Toolbar from './../Navigation/Toolbar/Toolbar'
import SideDrawer from './../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.module.css'

class Layout extends Component {
  state = {
    isOpen: false
  }

  open = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }
    })
  }

  sideDrawerClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Fragment>
        <Toolbar sideDrawerHandler={this.open} />
        <SideDrawer isOpen={this.state.isOpen} close={this.sideDrawerClose} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout
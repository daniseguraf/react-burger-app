import React, { Component } from 'react'
import axios from 'axios'

import Button from './../../../components/UI/Button/Button'
import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  orderHandler = (e) => {
    e.preventDefault()
    // const {bacon} = this.props

    const order = {
      ingredients: this.props,
      price: this.state.totalPrice,
      customer: {
        name: 'Molly',
        address: {
          street: 'Teststreet 1',
          zipCode: '23432',
          country: 'Peru'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false  })
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      })
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />

          <Button type="Success" clicked={this.orderHandler}>Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
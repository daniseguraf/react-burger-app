import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} exact />
      </Switch>
    </Layout>
  );
}

export default App;

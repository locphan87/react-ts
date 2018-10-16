import React from 'react'
import Helmet from 'react-helmet'
import { Link, Route, Switch } from 'react-router-dom'

import Pages from './Navigator.page'
import Routes from './Navigator.route'

const Navigator = () => (
  <div>
    <Helmet defaultTitle="Banking" titleTemplate="%s | Banking" />
    <Switch>
      <Route exact={true} path={Routes.Home} component={Pages.Home} />
      <Route path={Routes.About} component={Pages.About} />
    </Switch>
    <div style={{ textAlign: 'center', padding: '2em 0' }}>
      <Link to="/" style={{ marginRight: '0.75em' }}>
        Home
      </Link>
      <Link to="/about-us">About us</Link>
    </div>
  </div>
)

export default Navigator

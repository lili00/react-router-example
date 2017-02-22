import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './containers/App'
import Contact from './containers/Contact'
import About from './containers/About'
import Home from './containers/Home'

const router = (
  <Router history={ browserHistory }>
    <Route path="/" components={ App }>
    	<IndexRoute component={ Home } /> 
    	<Route path="contact" components={ Contact } />
    	<Route path="/about/:message" components={ About } />
    	<Redirect from="about" to="about/react"/>
    </Route>
  </Router>
)


//  about -> App + About

render(router, document.getElementById('app'))

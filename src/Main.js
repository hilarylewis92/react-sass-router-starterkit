import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import PageNotFound from './components/PageNotFound'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
      <Route path='*' component={PageNotFound}/>
    </Switch>
  </main>
)

export default Main

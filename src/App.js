import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './components/Join/Join.js'
import Chat from './components/Chat/Chat.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/chat' component={Chat} />
        <Route path='/' exact component={Join} />
      </Switch>
    </Router>
  )
}

export default App

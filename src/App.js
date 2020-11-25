import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Quiz} from './pages/Quiz'
import {Navigation} from './components/Navigation'
import {Alert} from './components/Alert'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

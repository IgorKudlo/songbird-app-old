import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.scss'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Quiz} from './pages/Quiz'
import {Navigation} from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
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

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render(){
    return (
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

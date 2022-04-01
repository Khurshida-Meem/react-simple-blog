import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          {/* <Route path='/post/:post_id'>
            <Post />
          </Route> */}
          <Route exact path="/post/:post_id" render={props => <Post {...props.match.params} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;

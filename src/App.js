import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={AboutMe}></Route>
      </Switch>

    </Router>
  );
}

export default App;

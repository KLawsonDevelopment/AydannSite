import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>

    </Router>
  );
}

export default App;

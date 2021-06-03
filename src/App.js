import React from 'react';
import Navbar from './components/formats/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MainSite from './components/Pages/MainSite';


function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={MainSite}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
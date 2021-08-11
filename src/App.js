import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/formats/Navbar';
import MainSite from './components/Pages/MainSite';
import Error404 from './components/Pages/Error404';
import './App.css';

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={MainSite}/>
          <Route path='/*' element={<Error404 />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
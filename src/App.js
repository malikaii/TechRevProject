import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/HomePage';
import JCOLEPage from './components/Pages/JCOLEPage';
import signup from './components/signup';
import Profile from './components/Profile';
import Search from './components/Pages/SearchPage';
import AW from './components/Pages/AW';
import INFO1 from './components/Pages/INFO1';
import Frank from './components/Pages/Frank';


function App() {
  return (
  <>

    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/JCOLE' exact component={JCOLEPage}/>
        <Route path='/sign-up' exact component={signup}/>
        <Route path='/about' exact component={Profile}/>
        <Route path='/SearchPage' exact component={Search}/>
        <Route path='/AmyWinehouse' exact component={AW}/>
        <Route path='/INFO' exact component={INFO1}/>
        <Route path='/Frank' exact component={Frank}/>
      </Switch>
    </Router>
  </>




  );
}

export default App;

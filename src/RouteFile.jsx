import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Header from './Component/Header/Header';
import Recent from './Component/Recent/Recent';
import Component1 from './contextBranch/Component1';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

export default function RouteFile(){
  return(
    <Router>
        <Header/>
        <Footer/>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/recent" >
          <Recent/>
        </Route>
        <Route path="/favorite" >
          <Component1/>
        </Route>
        <Route path="/nearby" >
          <Component1/>
        </Route>
      </Switch>
        
    </Router>
  );
}
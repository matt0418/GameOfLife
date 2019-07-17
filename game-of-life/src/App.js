import React from 'react';
import Game from './gameComponents/Game'
import { withRouter, Route } from 'react-router'
import Informational from './views/Informational'
import Header from './informationalComponents/Header'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Header}/>
      <Route exact path="/" component={Informational}/>
      <Route path ="/game" component={Game}/>
    </div>
  );
}


export default withRouter(App);

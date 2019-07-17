import React from 'react';
import Game from './gameComponents/Game'
import { withRouter, Route } from 'react-router'
import Informational from './views/Informational'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Informational}/>
      <Route path ="/game" component={Game}/>
    </div>
  );
}


export default withRouter(App);

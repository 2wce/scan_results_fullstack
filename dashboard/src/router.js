import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, CreateResult } from './components';

console.log('herre')
class AppRouter extends Component {
   render() {
      return (
         <Router>
               <Switch>
                  <Route exact path='/' component={App} />
                  <Route exact path='/results/:id' component={App} />
                  <Route exact path='/results/new' component={CreateResult} />
               </Switch>
         </Router>
      );
   }
}

export default AppRouter;
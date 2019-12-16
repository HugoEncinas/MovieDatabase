import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home';
import FavoritesList from '../containers/FavoritesList';
import Login from '../containers/Login';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Login}/>
          <Route exact path="/gallery" component={Home}/>
          <Route exact path="/favorites" component={FavoritesList}/>
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;
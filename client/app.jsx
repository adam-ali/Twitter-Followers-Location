/**
 * Created by adam on 18/01/17.
 */
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Index from './pages/index.jsx'
import ReactDOM from 'react-dom';


var App = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index} />
      </Router>
    )
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
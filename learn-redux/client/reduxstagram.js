// let's go!

// import libraries
import React from 'react';
import { render } from 'react-dom'; // import functins in react-dom

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const NotFound = () => (
  <div>404.. This page is not found!</div>
);

// React Router keeps your UI in sync with the URL
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
    <Route path='*' component={NotFound} />    
  </Router>
);

render(
  router,
  document.getElementById('root')
);

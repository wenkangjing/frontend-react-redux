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

// import store
import store, { history } from './store';

// wire up React with Redux
// wrap entire <Router>(from React) and pass store (from Redux) in
// pass history(Redux) to <Router>
import { Provider } from 'react-redux'; 


const NotFound = () => (
  <div>404.. This page is not found!</div>
);

/*
React Router keeps your UI in sync with the URL

without Redux: 
  <Router history={browserHistory}>

with Redux: 
  <Router history={history}>
  exported history object has been wired up to browserHistory

*/
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
      <Route path='*' component={NotFound} />    
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);

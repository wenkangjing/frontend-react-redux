import { createStore, compose } from 'redux';
import { syncHistoryWithStore  } from 'react-router-redux'; // why react-router is not enough
import { browserHistory } from 'react-router'; // why need this in in store

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

/*
create default object from default data, same as 
const defaultState = {
  posts: post,
  comments: comments
}
*/
const defaultState = {
  posts,
  comments
};

/*
Need 2 things: 
- reducer - which is a pure function
- the inital state

*/
const store = createStore(rootReducer, defaultState);

/*
browserHistory: the urls that explorers my web app
wire it up to store object, so that we can access in other files

wire up browserHistory to store
*/
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
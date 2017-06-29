/*

this is the root reducer

in Redux, we can only have one reducer, so need this root reducer to combine all reducers into one big reducer

*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;

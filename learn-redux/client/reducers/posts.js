/*

a reducer takes in 2 things

1. the action (info about what happend)
2. copy of current state 

a reducer returns 

1. a brand new copy of (action + currernt state)

*/


function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
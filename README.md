### Links

[Redux Doc](http://redux.js.org/)

[Notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes)

[React official Scaffold](https://github.com/facebookincubator/create-react-app)

[get start (short free videos)](https://egghead.io/courses/getting-started-with-redux)

[react redux (short free videos)](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)



### Projects

[practice projects](https://github.com/reactjs/redux/tree/master/examples)
[description](https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md)

[ReactJs/Redux](https://github.com/reactjs/redux)


### To scaffold a React Redux project

- create react app
```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
- `npm install --save redux`

### Notes

> Single source of truth **app state = redux store**
> `The state of your whole application is stored in an object tree within a single store.`
> 
> State is read-only **store.dispatch({action object})**
> `The only way to change the state is to emit an action, an object describing what happened.` 
> 
> Changes are made with pure functions **pure reducers**
> `To specify how the state tree is transformed by actions, you write pure reducers.`


State 
- = `Any`
- a state tree
- a single state value
- managed by `store`
- returned by `getState()`

Action
-  = `Object`
- string + payload

Reducer
- = `Pure function`

actionCreators
- a factory of action + payload
- `store.dispatch(action)` to `store's reducer`


Modern React with Redux - Part 2
---------------------------

- Section 3: Modeling Application State
- Section 4: Managing App State with Redux

http://redux.js.org/

### What is Redux?

![GUI Mockup](./redux_mockup.png)

![Data and View](./redux_diagram.png)

- Redux (data)
  + a state container
  + application level state
  + a collection of all the data to describe the app
  + **a single object**

- React (view)
  + a collection of views
  + user interaction

### Reducer
- a function that returns the **current application state**
- app could contain **multiple reducers** working on muptile piece of application state

1. create a reducer `export a function returns a state`
2. wire it into an application 
  - combine into one reducer `combineReducers`, **key: reducer**
  - promote a component as **container** 

### Container

> A **container** is a react component that has a direct connection to the state managed by Redux. e.g. the `App` or `BookList`

- is a **container**, aka **smart component**
- to bridge the 2 seperate libs
- **inject state into the container**

```
 ------------                 -------------
|Book List   |               | List View   |
|Current book|               | Detail View |
 ------------                 ------------ 
    (redux)                      (react)
             \           /
                  App 
              (react-redux)
```

Smart Component
- the Container
- a direct connection to Redux

Damn Component
- no direct connection to Redux

### Which Component to be the Container?
- in general, the most parent component that carry data

### react-redux

in Container
1. `import { connect } from 'react-redux';`
  - container is the glue of react and redux
  - using a glue lib called `react-redux`
2. `mapStateToProps(state)`
  - take the application state
  - Whatever is returned will show up as props inside of the container
  - it returns the content of `this.props`
3. export the Container
  - `export default connect(mapStateToProps)(BookList)`

> Facts that using react-redux `connect` to create a container
> 
> whenever the application **state changes**, 
>   1. container/component will **re-render**
>   2. state will assign to this component `this.props`


### summary of react and redux

- React provide the view
- Redux stores the application level state
- use react-redux `connect` to get a connection between React and Redux

- **application state are generated by reducer functions**
  - a bookReducer always returns an array of book
  - use redux `combineReducer` to combine reducer to a single `rootReducer`

- promote a component to a container
  - import `connect` from `react-redux
  - define `mapStateToProps(state)` to return an object (`this.props`)
  - `connect` mapStateToProps to the Component, make this component a container 


> Redux generated a state object and map that state as props to component
>
> A container is a normal react component that get bounded to the application state, connect together
>
> Whenever the application state changes, the container will re-render 

### Action

- **An action is an object with a type property** and a payload
- A type is always a **UPPER_CASE** string

Tips: 
- pull out to a separate file
- use const

### Action Creator

An Action Creator returns an action

![action, actionCreator, reducer, app state, props, render](./redux_action.png)
A function that returns an action (an object)

1. UI -> start
- -> user click calls action creator **me**
- -> actionCreator returns an `action/object` 
- -> action automatically sent to `all reducers` **redux**
- -> reducers `return a new state` or current state depending on what the action is **me**
- -> application state got updated **redux**
- -> notify related containers **redux**
- -> containers render with new props **react**
1. UI -> re render

### Wire up Action Creator to Redux
- `import { bindActionCreators } from 'redux';`
- ensure action flow through all the reducers

The connect() function takes two primary arguments, both optional. 
- The first, `mapStateToProps`, is a function you provide to **pull data from the store** when it changes, and **pass those values as props to your component**. 
-  The second, `mapDispatchToProps`, is a function you provide to make use of the store's dispatch function, usually by creating pre-bound versions of action creators that will **automatically dispatch their actions** as soon as they are called.

> `mapStateToProps` to map redux state -> react props, display to the browser
>
> `mapDispatchToProps` to map action -> props, handle user interaction
>
> `connect` to bind *StateToProps + DispatchToProps + Component*


reducer function
- 2 parameters: `(state, action)`
- `state` argument is not application state, only the state this reducer is responsible for
- redux not allow reducer returns `undefined`, need a initial state
- **never mutate state, always return a fresh object**

initial state
- send booting up action to all reducers

### libraries

react
- ``

redux
- `combineReducers.js`
- `bindActionCreators.js`
- `applyMiddleware.js`
- `compose.js`
- `createStore.js`

react-redux
- `connect`
- `Provider` `{createProvider}`

### Review

- `Redux` is in charge of managing application state
- `application stat`e is a single plain javascript object
- application state vs component state **completely different**
- `all reducers` tie together via `combineReducers`
  - key: the state property
  - value: a reducer
- `reducer` change application state overtime using `action`
- whenever a `action` dispatched, flow through `all reducers`
- `actionCreator` is a simple function that returns an `action`
- `action` is a plain javascript object with type property


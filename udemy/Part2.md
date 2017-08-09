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
  - combine into one reducer `combineReducers`
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

Intermediate Redux: Middleware
------------------------------

weather app
![weather app component structure](./weatheapp_component_structure);

### Split the UI

Q1: Container or Component?
- Container (user interaction)
  - `mapStateToProps(state)`
  - `mapDispatchToProps(dispatch)`
  - then bind `this.props.action` to element callback to talk to redux

- Component (show data)
  -  `mapStateToProps(state)` 
  - then show `this.props` in render()

Q2: Component State vs Application State (Redux)
- Component State - between elements inside the component
- Application State (Redux) - between Components, either
  - pass data to children component, or
  - dispatch action

Q3: Context Lost in callback function
- arrow function
- bind(this)

// check bootstrap doc for styling
// 
- [] SearchBar
- [] 


### Form 
- `form` `onSubmit` `event.preventDefault()`

### Open Weather

openweathermap.org


### Middleware

> Middleware are functions that take an action -> **middleware** -> reducer
>
> before reaching any reducers
> - pass through
> - manipulate it
> - log it
> - stop it

**Redux Promise**

https://www.npmjs.com/package/redux-promise

How to apply middleware?
- in root index.js
- `import { createStore, applyMiddleware } from 'redux';` // redux supports middleware
- `const createStoreWithMiddleware = applyMiddleware()(createStore);`
- import `redux-promise` as 3rd party middleware

Define action type as const
- export: single source of definition
- avoid typo

Ajax call with Redux
- expect jQuery `$.get()`
- `axios.get()` returns a request
- store the axios request as action payload

### Summary of React with Redux

```js
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Action to Props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Application State (Redux) to Props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// export the connected Component with Application State and Action
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
```
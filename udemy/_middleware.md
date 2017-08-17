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

[Ajax/Http Library Comparasion](http://andrewhfarmer.com/ajax-libraries/)

- fetch() is the new standard. It's already supported in Chrome and Firefox - so if don't need IE or Safari support you can use it today without any library at all. I suggest you start here.

- If you need support for more browsers I suggest GitHub's Fetch polyfill. You get to use the new standard now, and eventually you can delete the polyfill library when more browsers support Fetch.

- If you're using node.js you can still use Fetch, but you need the node-fetch library.

- If your code is universal there's a Fetch library for that too: isomorphic-fetch. It wraps both node-fetch and the Fetch polyfill.

- If you are already using jQuery, just use $.get or $.ajax. No additional libraries needed, and you'll have good support in most browsers. Using the Fetch polyfill would add unnecessary k-weight to your code.

CORS (Cross-origin resource sharing)

- http://www.ruanyifeng.com/blog/2016/04/cors.html

- http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/

- CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。


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


### Redux Promise

Redux Promise is a middleware, which can stop and minipulate actions before they hit any reducers.

Redux Promise see this incoming `action`, looks at specifically the `payload` property. If the payload is a `Promise`, Redux Promise stops the action, wait until the promise resolved, then dispatche a new action of the same type but wiath a payload of of the resolved requst.

![Redux Promise Middleware](./redux_promise_middleware.png)

Without Redux Promise
- need 2 actions `fetchWeather` and `receiveWeather`
- dispatch `receiveWeather` in promise.then()
- handle `receiveWeather` in reducer

### Increamental build up state
to store all forecast to state, in reducer

never manipulate redux state


```js
case FETCH_WEATHER:
  return state.concat[[action.payload.data]]; // return a new concat array 
  // or
  return [ action.payload.data, ...state ]; // concat a new array with ES6
```



### Redux Promise vs Redux Thunk



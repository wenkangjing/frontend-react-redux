Modern React with Redux
---------------------------

https://www.udemy.com/react-redux/learn/v4/t/lecture/4224604?start=0

https://github.com/StephenGrider/ReduxCasts

![boilerplate](./boilerplate.png)

```
js files + react + redux
|
Webpack + Babel
|
JSX + ES6 -> ES5
|
html, js, css
| 
browser;
```

### Hello World (React and ReactDOM)

seperate into 2 libs
- import React from 'react';
- import ReactDOM from 'react-dom';

#### 1. Create a new component. This component should produce some HTML

App is a function (component class) not a instance
```js
const App = function() {
  return <div>Hi</div>;
} 
// ES6
const App = () => {
  return <div>Hi</div>;
}
```

Babel will transform it to vanilla js
```js
var App = function App() {
  return React.createElement(
    "div",
    null,
    "Hi"
  );  
};
```

`<App />` or `<App> </App>` -> `React.createElement(App, null);`

#### 2. Take this component's generated HTML and put it on the page (in the DOM)
needs 2 params: 
- component instance: the generated html
- a DOM element: whare to render to
- `ReactDOM.render(<App/>, document.querySelector('.container'));`



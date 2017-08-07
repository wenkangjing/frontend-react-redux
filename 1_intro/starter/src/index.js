import React from 'react';
import ReactDOM from 'react-dom';

// 1. Create a new component. This component should produce some HTML

// App is a function (component class) not a instance

// const App = function() {
//   return <div>Hi</div>;
// }

// Babel will transform it to vanilla js
// var App = function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hi"
//   );
// };

// ES6
const App = () => {
  return <div>Hi</div>;
}

// <App /> or <App> </App> returns a instance


// 2. Take this component's generated HTML and put it on the page (in the DOM)
// needs 2 params: 
// - component instance: the generated html
// - a DOM element: whare to render to
ReactDOM.render(<App/>, document.querySelector('.container'));

// React.render is deprecated, use ReactDOM. Seperate React and ReactDOM


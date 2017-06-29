# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

## Notes

Redux DevTools
- time traval
- trace down 

Object shorthand
  ```js
  // properties
  var foo = {
      x: x,
      y: y,
      z: z,
  };

  var foo = {x, y, z}; // ES6 equivalents:

  // methods
  var foo = {
      a: function() {},
      b: function() {}
  };

  var foo = {
      a() {},
      b() {}
  };
  ```

export vs export default

how to wire up React to Redux
- import { Provider } from 'react-redux';
- make <Provider> wrap the entire <Router>

React DevTools
- `$r`: current selected React Component
- `$r.store` attached store
- `$r.store.getState()`

7/20


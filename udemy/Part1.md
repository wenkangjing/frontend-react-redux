Modern React with Redux
---------------------------
- Section 1: An intro to React
- Section 2: Ajax Requsts with React

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

### Component Structure
- bottom up: details -> one big container
- nested: item as a component, list as another one
- reuse component
- always one component per file

![Component Structure](./react_component_structure.png)

### Export Component
- component can be nested
- a outer-most component import children component
- outer component: `import`
- inner component: `export`

```js
export default SearchBar;
export {SearchBar}
```

Default exports
- `export default`
- to export a single value

Named exports
- `export { SearchBar }`
- `export const foo = Math.sqrt(2);`


### Import Component
- import our files `import SearchBar from './search_bar';`
- import libary `import react from 'react'`
- `import React, { Component } from 'react';` same as `const Component = React.Component`

### NodeJS requre vs ES6 import/export

https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export#31367852

> Keep in mind that there is no JavaScript engine yet that natively supports ES6 modules. You said yourself that you are using Babel. Babel converts import and export declaration to CommonJS (require/module.exports) by default anyway. So even if you use ES6 module syntax, you will be using CommonJS under the hood if you run the code in Node.


### Component
- always start with functional component, refactory it when needed

functional component
- without a state
- just return some jsx
- can contain class-based component

```js
const SearchBar = () => {
  return <input /> // React.createElement still need 'react'
};
export default SearchBar;
```

class-based component
- when we need a state
- date changing overtime

```js
class SearchBar extends React.Component {
  render() {
    return (
      <input type="text"/>
    )
  }
}
export default SearchBar;
```

### Event Handler

```js
render() {
  return (
    <input type="text" onChange={this.onInputChange}/>
  );
}

onInputChange(event) {
  console.log(event.target.value);
}

// or in ES6
render() {
  return (
    <input type="text" onChange={(event => console.log(event.target.value))}/>
  );
}
```

### State

- each *class-based* component has its own state, a plain JS object
- initialize in constructor `this.state = { bala }` 
- any state change trigger itself and its descendant render

#### Manipulate state

control -> state
- element callback = this.setState 
- `<input type="text" onChange={event => this.setState({ term: event.target.value })}/>`
- `this.setState({ bala })` to inform react state is changing

state -> control
- this.state -> control value
- `<input value={this.state.term} />`

> use `{}` to wrap js in jsx

### Data flow

- downward data flow via **props**
- only the most parent component should be responsible for fetching data

> ES6 shorthand `{ videos: videos }` equals to `{ videos }`


### Pass data from parent component to its children
- passing data via `props`
- `<VideoList videos={this.state.videos}/>`
- in functional component, use `props` as a param `const VideoList = (props) => {props.video}`
- in class component, use `this.props` as a member `this.props.videos`

### Inform parent component from children
- define `onVideoSelect` in parent component
- pass `onVideoSelect` down via `props`
- bind `onVideoSelect` to element event 
- so that `onVideoSelect` can be triggered by element event

### Iterating array in jsx
- ger rid of for loop, use `map`
- **key** child component of an array, consistent, one per record, for component

> Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`. See https://fb.me/react-warning-keys for more information.

```js
const VideoListItem = (props) => {
  const video = props.video; // shorthand in ES6
  return (
    <li>Video</li>
  );
};

// same as
const VideoListItem = ({video}) => {
  return (
    <li>Video</li>
  );
}

```

### string interpulation

 - `const url = 'https://www.youtube.com/embed/${videoId}';`
 - `const url = 'https://www.youtube.com/embed/' + videoId;`

### Embedded youtube video iframe
```js
const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};
```

### Initial state 

- before ajax callback
- state.bala is `undefined`
- put a guard statement at beginning of render()

```js
if (!video) {
  return <div>Loading...</div>;
}
```

### Select item
- hold *video object* instead of index/id
- easy to access `this.state.selected`
- **pass function to props**
  + pass function all the way down to the control 
  + App > VideoList > VideoListItem
  + bind to element event handler

### Styling component
- give a top level element a className, same as component name, lowercase with dash

### Throttling

- use lodash
- debounced function

```js
// get a new version of videoSearch that can only be called every 300 ms
const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
```

### React summary

- component level state, localized
  + App state: videos, selectedVideo
  + SearchBar state: term
  
- SearchBar state impacts App state via *callbacks*

but in Redux
- state is more App level
- hold a global state
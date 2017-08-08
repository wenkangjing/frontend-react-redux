import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

let API_KEY = 'AIzaSyAl27b69z7ojI35RvT56SzNKTYQ7OykKJA';

// 1. Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// 2. Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));



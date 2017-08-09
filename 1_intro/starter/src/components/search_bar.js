import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'n/a' };
  }
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <label>{this.state.term}</label>
      </div>
    );
  }
}

export default SearchBar;
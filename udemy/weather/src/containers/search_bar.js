import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event)}/>
          <span className="input-group-btn">
            <button type="button" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}
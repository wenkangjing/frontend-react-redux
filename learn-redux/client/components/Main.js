import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}

      </div>
    )
  }
});

// to make sure it can import in other js fiels
// or to move in front of `const Main`
export default Main; 
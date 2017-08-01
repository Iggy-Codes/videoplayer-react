import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    // return <input onChange={this.onInputChange} />;
    return <input onChange={event => console.log(event.target.value)} />;
  }

  //event is by convention
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
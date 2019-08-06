import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  handleChange = (event) => {
    const query = event.target.value;
    this.props.search(query);
    // console.log(event.target.value);

  };


  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    )
  }
}

export default SearchBar;

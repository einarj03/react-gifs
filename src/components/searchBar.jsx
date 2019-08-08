import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'homer thinking'
    };
  }

  componentWillMount() {
    this.props.search(this.state.query);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.query !== nextState.query;
  }

  handleChange = (event) => {

    this.setState({
      query: event.target.value
    });
    this.props.search(this.state.query);
  };

  render() {
    return (
      <input value={this.state.query} type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;

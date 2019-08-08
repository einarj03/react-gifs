import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'homer thinking'
    };
  }

  componentWillMount() {
    const { search } = this.props;
    const { query } = this.state;
    search(query);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { query } = this.state;
    return query !== nextState.query;
  }

  handleChange = (event) => {
    const { search } = this.props;
    const { query } = this.state;
    this.setState({
      query: event.target.value
    });
    search(query);
  };

  render() {
    return (
      <input value={this.state.query} type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;

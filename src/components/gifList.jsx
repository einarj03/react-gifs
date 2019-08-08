import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.gifs !== nextProps.gifs;
  }

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} updateSelectedGif={this.props.updateSelectedGif} />)}
      </div>
    )
  }
}

export default GifList;

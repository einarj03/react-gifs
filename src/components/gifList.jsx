import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.gifs !== nextProps.gifs;
  }

  render() {
    const { gifs, updateSelectedGif } = this.props;
    return (
      <div className="gif-list">
        {gifs.map(gif => <Gif id={gif.id} key={gif.id} updateSelectedGif={updateSelectedGif} />)}
      </div>
    )
  }
}

export default GifList;

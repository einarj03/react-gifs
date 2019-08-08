import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }

  handleClick = () => {
    const { id, updateSelectedGif } = this.props;
    if (updateSelectedGif) {
      updateSelectedGif(id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

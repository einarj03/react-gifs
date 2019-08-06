import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.updateSelectedGif) {
      this.props.updateSelectedGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

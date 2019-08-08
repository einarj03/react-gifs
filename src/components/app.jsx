import React, { Component } from 'react';

import giphy from 'giphy-api';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "BBkKEBJkmFbTG"
    };
  }

  updateList = (err, res) => {
    this.setState({
      gifs: res.data
    });
  }

  updateSelectedGif = (newGifId) => {
    this.setState({
      selectedGif: newGifId
    });
  }

  search = (query) => {
    giphy('HbD8ItEDZhTOMJNOyCxKad5EH5K9QmMT').search({
      q: query,
      limit: 12,
      rating: 'g'
    }, this.updateList);
  }

  // updateList = (query) => {

  // }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
        </div>
      </div>
    )
  }
}

export default App;

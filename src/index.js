import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBlk2NfU0x2cNcx2JhKbBjn2h_3g4PH9T0';

// Create a new component. This component should produce some html 
class App extends Component {

  constructor(props) {
    super(props);
    this.state({ videos: []})

    YTSearch({key: API_KEY, term: 'michele nasti'}, (videos) => {
      this.setState({videos});
    });
  }

  render() { 
  <div>
      <SearchBar />
  </div>
  }
}

console.log(App);

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render( < App / > , document.querySelector('.container'));
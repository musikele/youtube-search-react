import React, {
  Component
} from 'react';

// //functional component
// const SearchBar = () => {
//   return <input />;
// }

//class based
class SearchBar extends Component {

  constructor(props) {
    super(props);

    //solo nel costruttore si setta lo stato in questo modo 
    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return ( 
      <div> 
        <input value={this.state.term}
          //when the state changes, the component gets rerendered
          //always manipulate the state using this.setState({...})
        onChange = {
          event => this.setState({
            term: event.target.value
          })
        } />
      </div>
    );
  }
}

export default SearchBar;
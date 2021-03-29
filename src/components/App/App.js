import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import yelp from '../../util/Yelp';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYELP = this.searchYELP.bind(this);
  }

  searchYELP(term, location, sortBy){
    yelp.search(term, location, sortBy).then(
      businesses => {
        this.setState({
          businesses: businesses
        })
      }
    )
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYELP={this.searchYELP}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

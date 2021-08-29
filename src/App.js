import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    arrayOfBeer: []
  }
}

// componentDidMount is a react method that is called as soon as this app component has mounted. 
componentDidMount() {
  axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
    })
}


render() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index} name={beer.name} image_url={beer.image_url}/>
          )
        })}</ol>
      </header>
    </div>
  );
}
}

export default App;

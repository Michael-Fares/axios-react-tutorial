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

likeHandler = (index) => {
  console.log("was clicked", index)
  let arrayOfBeerCopy = this.state.arrayOfBeer
  let likedBeers = arrayOfBeerCopy.filter((beer, beerIndex) => beerIndex === index)
  // console.log(likedBeers, index)
  this.setState({likedBeers: [...likedBeers]})
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index} name={beer.name} image_url={beer.image_url} tagline={beer.tagline}
            first_brewed ={beer.first_brewed} description={beer.description} abv={beer.abv}
            index={index} like={this.likeHandler}/>
          )
        })}</ol>
      </header>
    </div>
  );
}
}

export default App;

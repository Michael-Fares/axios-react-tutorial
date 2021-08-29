import React, {Component} from 'react';
import axios from 'axios';

import './App.css';



import BeerCard from './BeerCard';

class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    arrayOfBeer: [],
    likedBeer: []
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
  if(!this.state.likedBeer.includes(index)) {
  this.setState({likedBeer: [...this.state.likedBeer, index]})
  } else {
    let copy = this.state.likedBeer
    copy.splice(index, 1)
    this.setState({likedBeer: [...copy]})
  }
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index} name={beer.name} image_url={beer.image_url} tagline={beer.tagline}
            first_brewed ={beer.first_brewed} description={beer.description} abv={beer.abv}
            index={index} like={this.likeHandler} 
            isliked={this.state.likedBeer.includes(index) ? true : false}/>
          )
        })}</ol>
      </header>
    </div>
  );
}
}

export default App;

import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./App.css";

import BeerCard from "./BeerCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfBeer: [],
      likedBeer: [],
      search: null
    };
  }

  // componentDidMount is a react method that is called as soon as this app component has mounted.
  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  likeHandler = (index) => {
    console.log("was clicked", index);
    if (!this.state.likedBeer.includes(index)) {
      this.setState({ likedBeer: [...this.state.likedBeer, index] });
    } else {
      let copy = [...this.state.likedBeer];
      console.log("copy", copy);
      if (copy.length === 1) {
        copy.length = 0;
      } else {
        // splice the index for liked beers, NOT the index from the original beer list stored in liked beers
        copy.splice(copy.indexOf(index), 1);
        console.log(index);
      }
      this.setState({ likedBeer: [...copy] });
    }
  };

  handleSearch = (e) => {
    e.preventDefault()
    this.setState({search: e.target.value})
  }

  filterSearch = (term) => {
    // returns the callback to be put into the filter method
    return (item) => {
      return item.name.toLowerCase().includes(term.toLowerCase())
    }
  }

  render() {
    return (
      <>
      <div className="nav-container">
        <h1 className="title flexgrow shadow">Beer Brothers Brews</h1>  
        <Link style={{ textDecoration: "none" }} to="/">
          <h3 className="link shadow">Home</h3>
        </Link>
      </div>
      <div className="flex-container">
        <input className="outfit" style={{
          marginTop: "1rem", 
          width: "40vw",
          fontSize: "1rem"}} 
          placeholder="search by beer name" type="text" value={this.state.search}onChange={this.handleSearch}></input>
      </div>
        <ol className="flex-container">
          {!this.state.search ?
          this.state.arrayOfBeer.map((beer, index) => {
            return (
              <BeerCard
                key={index}
                name={beer.name}
                image_url={beer.image_url}
                tagline={beer.tagline}
                first_brewed={beer.first_brewed}
                description={beer.description}
                abv={beer.abv}
                index={index}
                like={this.likeHandler}
                isLiked={this.state.likedBeer.includes(index) ? true : false}
              />
            ) 
          })
          :
          this.state.arrayOfBeer.filter(this.filterSearch(this.state.search)).map((beer, index) => {
            return (
              <BeerCard
                key={index}
                name={beer.name}
                image_url={beer.image_url}
                tagline={beer.tagline}
                first_brewed={beer.first_brewed}
                description={beer.description}
                abv={beer.abv}
                index={index}
                like={this.likeHandler}
                isLiked={this.state.likedBeer.includes(index) ? true : false}
              />
            ) 
          })};
        </ol>
     
      </>
    );
  }
}

export default App;

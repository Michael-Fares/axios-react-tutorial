import React from 'react'

function BeerCard(props) {
    const {name, tagline, first_brewed, description, image_url, abv} = props
    return (
        <li style={{ 
         listStyle: "none",
         border: "2px solid black", 
         padding: "10px",
         marginBottom: "5px",
         backgroundColor: "lightblue",
         display: "flex"
        }}>
           
            <img style={{height: "200px" }} src={image_url} />
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: "40px"
            }}>
            <h3 style={{color: "darkslategrey"}}>{name}<span style={{color: "green", marginLeft: "30px"}}>{first_brewed}</span></h3>
            <h4>{tagline}</h4>
            <p style={{fontSize: "15px", textAlign: "left"}}><span style={{marginRight: "30px", color: "red"}}>{abv}% ABV</span>{description}</p>
            </div>
        </li>
    )
}

export default BeerCard
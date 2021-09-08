import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function BeerCard(props) {
    const {name, tagline, first_brewed, description, image_url, abv, index, like, isLiked} = props
    return (
        <li style={{ 
         listStyle: "none",
         border: "2px solid black", 
         padding: "10px",
         marginBottom: "20px",
         backgroundColor: "lightblue",
         display: "flex",
         position: "relative",
         boxShadow: "2px 2px 2px black",
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
           
            <FontAwesomeIcon className={`${isLiked ? "heart-red" : "heart-grey"}`} icon={faHeart} style={{
                position:"absolute",
                marginLeft: "20px",
                right: "20px",
                top: "20px",
                cursor: "pointer",
                fontSize: "40px"
                }} onClick={() => {like(index)}} />
                  
            </div>
        </li>
    )
}

export default BeerCard
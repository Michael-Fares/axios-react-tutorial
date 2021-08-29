import React from 'react'

function BeerCard(props) {
    const {name, tagline, first_brewed, description, image_url, abv} = props
    return (
        <li style={{ listStyle: "none" }}>
            <img style={{height: "200px" }} src={image_url} />
            {name}
        </li>
    )
}

export default BeerCard
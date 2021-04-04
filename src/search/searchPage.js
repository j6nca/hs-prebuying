import React, {useEffect, useState} from "react";
import {SERVER} from "../constants";
import './search.css'
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export function SearchPage() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(SERVER + '/list')
      .then(res => {
        console.log(res)
        return res.json()
      }).then(listings => {
        setListings(listings)
    })
  })

  return (
    <div className='center-page'>
      <div className='search-wrapper'>
        <h1>Search Results: </h1>
        <div className='sub-title'>89 Homes we think you'll love in Waterloo, Ontario</div>
        <div className='listing-container'>
          { listings?.map(l => <Listing data={l}/>)}
        </div>
      </div>
    </div>
  )
}

function Listing(props) {

  const [listing, setListing] = useState(props.data)

  return (
    <Link className='listing-wrapper' to={ '/page/external/' + listing.MlsNumber }>
      <img className='listing-photo' src={ listing.LowResPhoto }/>
      <div className='description-wrapper'>
        <div>
          <h2>{ listing.Price }</h2>
          <p>{ listing.Address }</p>
        </div>
        <Button className='like-button' variant='outlined' disableElevation color='primary'>Like</Button>
      </div>

    </Link>
  )
}
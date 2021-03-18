import React, {useEffect, useState} from "react";
import {SERVER} from "../constants";
import './search.css'
import {Link} from "react-router-dom";

export function SearchPage() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(SERVER + '/search')
      .then(res => {
        return res.json()
      }).then(listings => {
        setListings(listings)
    })
  })

  return (
    <div className='center-page'>
      <div className='search-wrapper'>
        <h1>Search Results: </h1>
        <h3>89 Homes we think you'll love in Waterloo, Ontario</h3>
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
    <Link to={ '/page/' + listing.MlsNumber }>
      <img className='listing-photo' src={ listing.LowResPhoto }/>
      <div>{ listing.Price }</div>
      <div>{ listing.Address }</div>
    </Link>
  )
}
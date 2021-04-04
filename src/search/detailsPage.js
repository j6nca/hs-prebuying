import React, {useEffect, useState} from "react";
import {SERVER} from "../constants";
import {useParams} from "react-router-dom";
import './details.css'

export function DetailsPage(props) {

  const { mlsNumber } = useParams()
  const [details, setDetails] = useState({});

  console.log(mlsNumber)

  useEffect(() => {
    fetch(SERVER + '/page/' + mlsNumber)
      .then(res => res.json())
      .then(details => setDetails(details))
  }, [])

  return (
    <div className='center-page'>
      <div className='details-wrapper'>
        <h2 className='main-heading'>{ details.Address }</h2>
        <p>MLS Number: { details.MlsNumber }</p>
        <img className='carousel-photo' src={details.LowResPhoto}/>
        <h3 className='sub-heading'>Features</h3>
        <p className='description-text'>
          Addess: { details.Address }<br/>
          Price: { details.Price}<br/>
          MLS Number: { details.MlsNumber }<br/>
          Bathrooms: { details.Bathrooms }<br/>
          Bedrooms: { details.Bedrooms }<br/>
          Interior Size: { details.InteriorSize }<br/>
          Amenities: { details.Ammenities }
        </p>
        <h3 className='sub-heading'>Description</h3>
        <p className='description-text'>{details.PublicRemarks}</p>
      </div>
    </div>
  )

}
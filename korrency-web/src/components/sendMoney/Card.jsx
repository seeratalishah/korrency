import React from 'react'

const Card = ({flagImage, countryName}) => {
  return (
    <div className='card'>
      <img src={flagImage} alt="flag" />
      <p>{countryName}</p>
    </div>
  )
}

export default Card;

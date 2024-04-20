import React from 'react'

const Card = ({ flagImage, countryName }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <img src={flagImage} alt="flag" />
      <p>{countryName}</p>
    </div>
  )
}

export default Card;

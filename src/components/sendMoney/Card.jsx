import React from 'react'

const Card = ({ flagImage, countryName }) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <img src={flagImage} alt="flag" style={{width: "100px"}} />
      <p>{countryName}</p>
    </div>
  )
}

export default Card;

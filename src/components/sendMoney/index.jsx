import React from 'react'
import SectionHeading from '../sectionHeading'
import Card from './Card'
import { flagArray } from '../../data/data'

const SendMoney = () => {
  return (
    <div className='send-money-section'>
      <SectionHeading heading="Where You Can" blueHeading="Send Money" />
      <div className='cards-container'>
      {
        flagArray.map((item, index) => <Card key={index} flagImage={item.flagImage} countryName={item.countryName}/>)
      }
      </div>
      <a href='/'>More countries to follow</a> 
    </div>
  )
}

export default SendMoney

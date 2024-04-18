import React from 'react'

const SectionHeading = ({heading, blueHeading}) => {
  return (
    <h2 className='section-heading'> <span>{heading} {blueHeading}</span></h2>
  )
}

export default SectionHeading;

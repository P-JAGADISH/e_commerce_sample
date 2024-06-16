import React from 'react'
import './Offers.css'
import exclusive_image  from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
<h1>Don't Miss </h1>
<h1>Out on Exclusive Deals!</h1>
<p>Best Sellers Just for You!</p>
<button>Take a Look</button>
        </div>
      <div className="offers-right">
    <img src= {exclusive_image}alt="" />
      </div>
    </div>
  )
}


export default Offers
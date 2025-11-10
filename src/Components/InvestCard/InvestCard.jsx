// import React from 'react'
import img1 from '../assets/parthner icon.png'
import './InvestCard.css';

const InvestCard = () =>  {
  return (
    <div>
        <div className="">
            <div className='text-center'>
                <img src={img1} alt="" />
            </div>
            <p>
                Agreement Letter
            </p>

            <div className='text-center'>
                <button className='border border-0 rounded-pill px-3 text-light invst-btn'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default InvestCard
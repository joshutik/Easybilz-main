// import React from 'react'
import img1 from '../assets/parthner icon.png'
import './InvestCard.css';

const InvestCard = () =>  {
  return (
    <div>
        <div className="text-center w-75 mx-auto">
            <div className='text-center'>
                <img src={img1} alt="" />
            </div>
            <p>
                Agreement Letter
            </p>

            <div className='text-center'>
                <button className='border border-0 rounded-pill px-3 py-1 text-light invst-btn'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default InvestCard
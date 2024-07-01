// import React from 'react'
import './Calltoaction.css'
import { Link } from 'react-router-dom'

const Calltoaction = () => {
  return (
    <div className="container-fluid py-5 CTA">
        <div className="container text-center">
            <h2 className="">
                Become our member today and open doors to great opportunities.
            </h2>
            <div className='my-3'>
                <Link to={'/register'} className='btn btn-primary btn-lg border-0 w-50 py-4 rounded-pill cta-btn'>Register</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Calltoaction

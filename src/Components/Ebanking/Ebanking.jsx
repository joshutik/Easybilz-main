// import React from 'react'
import './Ebanking.css'
import { Link } from 'react-router-dom'

const Calltoaction = () => {
  return (
    <div className="container-fluid py-5 CTA">
      <div className="container text-center">
        <h2 className="">
          Click the the link to get started with our e-banking services
        </h2>
        <div className='my-3 ms-auto'>
          <Link to={'https://easybillscoopebanking.bankplus.live/login'} className='btn btn-primary text-center btn-lg border-0 w-50 py-4 rounded-pill cta-btn '>E-banking

            {/* <svg xmlns="http://www.w3.org/2000/svg" className="bi text-center" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg> */}
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Calltoaction

import React from 'react'
import { Form } from 'react-router-dom'
import img1 from '../assets/person icon-3.png';
import img2 from '../assets/cash icon.png';
import img3 from '../assets/parthner icon.png';
import img4 from '../assets/person icon-2.png';
import './Forms.css'






const Forms = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">

                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card text-center py-">
                            <div className="card-img-top text-center mt-3">
                                <img src={img1} alt="Form Image" className="img-fluid" />
                            </div>

                            <div className=" text-center mt-3">
                                <h5 className="card-title">Registration / Membership Form</h5>
                                <div className="d-flex flex-column text-center gap-3">
                                    <button className="edit-btn rounded-pill w-50 mx-auto bg-transparent">Edit Form</button>
                                    <button className="download-btn rounded-pill w-75 border-0 py-1 mx-auto">Download Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-img-top text-center mt-3">
                                <div className="card-img-top text-center mt-3">
                                    <img src={img2} alt="Form Image" className="img-fluid" />
                                </div>
                                <div className=" text-center mt-3">
                                    <h5 className="card-title">Loan Application Form</h5>
                                    <div className="d-flex flex-column text-center gap-3">
                                        <button className="edit-btn rounded-pill w-50 mx-auto bg-transparent">Edit Form</button>
                                        <button className="download-btn rounded-pill w-75 border-0 py-1 mx-auto">Download Form</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card my-3">
                            <div className="card-img-top text-center mt-3">
                                <img src={img3} alt="Form Image" className="img-fluid guarator-icon" />
                            </div>
                            <div className=" text-center mt-3 text-center">
                                <h5 className="card-title">Guarntor's Form</h5>
                                <div className="d-flex flex-column text-center gap-3">
                                    <button className="edit-btn rounded-pill w-50 mx-auto bg-transparent">Edit Form</button>
                                    <button className="download-btn rounded-pill w-75 border-0 py-1 mx-auto">Download Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card my-3">
                            <div className="card-img-top text-center mt-3">
                                <img src={img4} alt="Form Image" className="img-fluid" />
                            </div>
                            <div className=" text-center mt-3">
                                <h5 className="card-title">Consent Form</h5>
                                <div className="d-flex flex-column text-center gap-3">
                                    <button className="edit-btn rounded-pill w-50 mx-auto bg-transparent">Edit Form</button>
                                    <button className="download-btn rounded-pill w-75 border-0 py-1 mx-auto">Download Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Forms;
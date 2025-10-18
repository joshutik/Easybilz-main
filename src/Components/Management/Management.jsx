import React from 'react'
import img1 from '../assets/Kadesh.png';
import img2 from '../assets/chairman.jpg';
import img3 from '../assets/Ene.png';
import img4 from '../assets/Barr.png';
import img5 from '../assets/NDA.png';
import img6 from '../assets/josh.jpg';
import './Management.css';


function Management() {
    return (
        <div className='bg-body-tetiary my-5 pt-4'>
            <h2 className='text-center mt-5'>Meet The Management Team</h2>
            <p className='text-center'>
                Here are the person who make the
            </p>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row gx-2 justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-12 align-self-start text-center">
                                    <div className='card-img'>
                                        <img src={img2} alt="" className='img-fluid rounded border border-primary card-image' />
                                    </div>
                                </div>

                                <div className="col-lg-9 col-md-6 col-sm-12 align-self-end">

                                    <div className="card-body">
                                        <h2>Gboma Mitchel</h2>
                                        <em> ~ Chairman</em>
                                        <p className='mt-3'>
                                            Mitchell Gbomaa is an investor, business and data analyst
                                            and a serial entrepreneur
                                            he is currently the chairman and head of operations
                                            he is a graduate of biochemistry, a safty abd environment professional, finicial and data analyst and owns a post graduate degree in banking and financial (corporate finance).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row gx-2 justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-12 align-self-start text-center">
                                    <div className='card-img text-center'>
                                        <img src={img4} alt="" className='img-fluid rounded border border-primary card-image' />
                                    </div>
                                </div>

                                <div className="col-lg-9 col-md-6 col-sm-12 align-self-end">
                                    <div className="card-body">
                                        <h2>Barr. Alexander Barisua Waah</h2>
                                        <em> ~ Secretary and Head of Legal counsel and compliance</em>
                                        <p>
                                            Barr. Alex is a legal practitioner and a business developer.

                                            He is the secretary and head of legal and compliance with eazybillz cooperative where he ensures compliance amongst members, legal risk management and as the business development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row justify-content-center ">
                                <div className='col-lg-3 col-md-6 align-self-start col-sm-12 text-center'>
                                    <div className='card-img '>
                                        <img src={img3} alt="" className='img-fluid rounded card-image' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12 align-self-end'>
                                    <div className="card-body">
                                        <h2>Ene Josefh Juliet</h2>
                                        <em> ~ Head of Admisnistration and Management</em>
                                        <p>
                                            Juliet is a professional office technology and manager, a serial entrepreneur.
                                            she is the head of management and administration with Easybillz
                                            where she manages all admistrative and manegerial portfolio.
                                            she holds a degree in office technology and management and currently pursuing a master's degree in management from the prestigious rivers state university.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row justify-content-center welcom ">
                                <div className='col-lg-3 col-md-6 align-self-start col-sm-12 text-center'>
                                    <div className='card-img '>
                                        <img src={img6} alt="" className='img-fluid rounded card-image' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12 align-self-end'>
                                    <div className="card-body">
                                        <h2> Joshua Utik</h2>
                                        <em> ~ Head of Tech and Product Development</em>
                                        <p>
                                            Head of tech. and product development.
                                            He a Frontend Developer, passionate about building smart, user-focused, and scalable digital products.
                                            He's the head of tech and digital products development and implementation arm of easybillz cooperative.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row justify-content-center welcom ">
                                <div className='col-lg-3 col-md-6 col- align-self-startsm-12 text-center'>
                                    <div className='card-img '>
                                        <img src={img1} alt="" className='img-fluid rounded card-image' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12 align-self-end'>
                                    <div className="card-body">
                                        <h2>Atuwosi Kadesh</h2>
                                        <em> ~ Portfolio and Product Manager</em>
                                        <p>
                                            Kadesh is a Business Relationship personnel, educationist and counsellor.
                                            she is the portfolio and product manager, in charge of offline operations of all our products and services. she's a graduate of Business Education from the prestigious River State university.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card member-card p-4 shadow-lg mb-5 bg-body rounded'>
                            <div className="row justify-content-center welcom ">
                                <div className='col-lg-3 col-md-6 col- align-self-startsm-12 text-center'>
                                    <div className='card-img '>
                                        <img src={img5} alt="" className='img-fluid rounded card-image' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-6 col-sm-12 align-self-end'>
                                    <div className="card-body">
                                        <h2>Prince Godwin Ndalukee jnr</h2>
                                        <em> ~ Graphic Designer/ Brand Strategist </em>
                                        <p>
                                            Princ is a highly creative and detailed-orientend graphic Designer
                                            with 8 years of experience in carfting visually stunning and effective designs.
                                            He creates all our advert/publicity designs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Management
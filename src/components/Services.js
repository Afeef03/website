import React from 'react'
import './Services.css'
import images from './img/service-img.jpg'

const Services = () => {
    return (
        <div>
            <section className="mt-10 mb-5">
                <div className="container">
                    <div className="row">
                        {/* ===========================1==================== */}
                        <div className="col-md-6">
                            <h3 className='fw-bold'>Welcome to WebHub: Crafting Cutting-Edge Websites for the Digital World</h3>
                            <p className="mt-3 text-muted">
                                Welcome to WebHub, a leading web development company dedicated to unleashing the full potential of your online presence. At WebHub, we specialize in crafting engaging and innovative web solutions that empower businesses to thrive in the digital world.
                            </p>
                            <p className="mt-2 text-muted">
                                With a team of talented designers, developers, and digital strategists, we have the expertise and passion to transform your ideas into stunning digital experiences.
                            </p>

                            <div className="row">
                                {/* =================1================ */}
                                <div className="col-md-4">
                                    <div className="inner-col">
                                        <i className="fas fa-lightbulb"></i>
                                        <h5>we plan</h5>
                                    </div>
                                </div>
                                {/* =================2================ */}
                                <div className="col-md-4">
                                    <div className="inner-col">
                                        <i className="fas fa-lightbulb"></i>
                                        <h5>we plan</h5>
                                    </div>
                                </div>
                                {/* =================3================ */}
                                <div className="col-md-4">
                                    <div className="inner-col">
                                        <i className="fas fa-lightbulb"></i>
                                        <h5>we plan</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-md mt-3 text-light btn-warning">Know More</button>
                        </div>
                        {/* =======================2================ */}
                        <div className="col-md-6" id='col'>
                            <img src={images} className='img-fluid' alt="img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <div className="container">
                    <div className="text">
                        <h6 className='text-muted fw-bold'>Our Services</h6>
                        <h2 className='fw-bold'>CHECK OUR SERVICES</h2>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="inner-box">
                                <div className="icon">
                                    <i className="fab fa-wordpress"></i>
                                </div>
                                <h3>Website Development</h3>
                                <p className="mt-3">
                                    Our web development associates promote the functionality and navigation of the primary website, graphics and finally formatting and storing the content to the actual website. We provide an extensive, best quality services and works along with flexible features which allow you to implement your own special strengths and also in-house features to create customized websites.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inner-box">
                                <div className="icon">
                                <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h3>mobile app Development</h3>
                                <p className="mt-3">
                                    Our web development associates promote the functionality and navigation of the primary website, graphics and finally formatting and storing the content to the actual website. We provide an extensive, best quality services and works along with flexible features which allow you to implement your own special strengths and also in-house features to create customized websites.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="inner-box">
                                <div className="icon">
                                    <i className="fab fa-wordpress"></i>
                                </div>
                                <h3>digital marketting</h3>
                                <p className="mt-3">
                                    Our web development associates promote the functionality and navigation of the primary website, graphics and finally formatting and storing the content to the actual website. We provide an extensive, best quality services and works along with flexible features which allow you to implement your own special strengths and also in-house features to create customized websites.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inner-box">
                                <div className="icon">
                                <i className="fas fa-desktop"></i>
                                </div>
                                <h3>Software Development</h3>
                                <p className="mt-3">
                                    Our web development associates promote the functionality and navigation of the primary website, graphics and finally formatting and storing the content to the actual website. We provide an extensive, best quality services and works along with flexible features which allow you to implement your own special strengths and also in-house features to create customized websites.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <div className="bg">
                <div className="text-center text-light text-bg">
                    <h2 className='fw-bold'>Call Us Now</h2>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse illum repellat vero placeat fugit enim, minus possimus provident, error dolore ducimus aliquid.</p>
                    <button className="mt-2 btn-in">Call Us Now</button>
                </div>
            </div>
        </div>
    )
}

export default Services

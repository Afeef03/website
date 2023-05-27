import React from 'react'
import './Slider.css'
import sliderImage from './img/slider-2.avif';
import sliderImage1 from './img/slider-1.avif';


const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={sliderImage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='display-5 fw-bold'>Crafting Engaging and Innovative <br /> Web Solutions</h1>
                            <div className="buttons">
                                <button className="btn-custom text-light fw-bold mt-1">Know More</button>
                                <button className="text-light fw-bold mt-1 sucess">Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={sliderImage1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='display-5 fw-bold'>Crafting Engaging and Innovative <br /> Web Solutions</h1>
                            <div className="buttons">
                                <button className="btn-custom text-light fw-bold mt-1">Know More</button>
                                <button className="text-light fw-bold mt-1 sucess">Contact Us</button>
                            </div>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider

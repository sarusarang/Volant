import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Slider.css'

function Slider() {




    return (


        <>







            <section className='container-fluid  Slider-main p-3 pt-5'>


                <div className='row'>


                    <div className='col-md-6'>


                        <Carousel data-bs-theme="dark" controls={false} indicators={false} slide={true}>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/baner(790x680)-01.jpg"
                                    alt="First slide"
                                    loading='lazy'
                                />


                            </Carousel.Item>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/baner(790x680)-02.jpg"
                                    alt="Second slide"
                                    loading='lazy'
                                />

                            </Carousel.Item>



                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/baner(790x680)-03.jpg"
                                    alt="Third slide"
                                    loading='lazy'
                                />

                            </Carousel.Item>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/baner(790x680)-04.jpg"
                                    alt="Third slide"
                                    loading='lazy'
                                />

                            </Carousel.Item>



                        </Carousel>



                    </div>



                    <div className='col-md-6'>

                        <div className='row'>


                            <div className='col-md-6 Slide-hover slider-margin'>

                                <Link className='nav-link' to={'/doctors'}>

                                    <img src="/sidebaner-ladies-(385x330)-01.jpg" loading='lazy' className='img-fluid' alt="" />

                                    <div className='text-over'>

                                        <h4 className='text-center'>Ladies</h4>
                                        <p>Best Footwares For Ladies</p>

                                    </div>


                                </Link>



                            </div>


                            <div className='col-md-6 Slide-hover slider-margin'>

                                <Link className='nav-link' to={'/ai'}>

                                    <img src="/sidebaner-gents-(385x330)-02.jpg" loading='lazy' className='img-fluid' alt="" />

                                    <div className='text-over'>

                                        <h4  className='text-center'>Gents</h4>
                                        <p>Best Footwares For Gents</p>

                                    </div>

                                </Link>

                            </div>


                            <div className='col-md-6 Slide-hover' style={{ marginTop: '1.3rem' }} >

                                <Link className='nav-link' to={'/doctors'}>

                                    <img src="/sidebaner-bg-(385x330)-03.jpg" loading='lazy' className='img-fluid' alt="" />

                                    <div className='text-over'>

                                        <h4  className='text-center'>Boys & Girls</h4>
                                        <p>Best Footwares For Boys & Girls</p>

                                    </div>

                                </Link>

                            </div>


                            <div className='col-md-6 Slide-hover' style={{ marginTop: '1.3rem' }}>

                                <Link className='nav-link' to={'/stress'}>

                                    <img src="/sidebaner-kids-(385x330)-04.jpg" loading='lazy' className='img-fluid' alt="" />


                                    <div className='text-over'>

                                        <h4 className='text-center'>Kids</h4>
                                        <p>Best Footwares For Kids</p>

                                    </div>

                                </Link>

                            </div>


                        </div>


                    </div>


                </div>





            </section>






        </>



    )


}

export default Slider
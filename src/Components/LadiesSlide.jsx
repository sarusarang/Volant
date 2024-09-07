import React from 'react'
import { useState } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Skeleton } from '@mui/material'
import './ProductSlide.css'

function LadiesSlide() {



    const [Loading, SetLoading] = useState(false)



    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }





    return (


        <>

            <section className='product-slide pt-5' >


                <div className='container p-3'>

                    <div className='ms-3 Product-head'>

                        <h2>Ladies Latest</h2>
                        <p>Discover unparalleled comfort and sleek designs</p>

                    </div>


                    <Carousel responsive={responsive}>


                        {/* Array.from({ length: 3 }).map((item) => (


                    <div className='me-3 mt-3'>

                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

                        <Skeleton animation="wave" height={20} style={{ marginBottom: 6, marginTop: '1rem' }} />

                        <Skeleton animation="wave" height={20} width="80%" />

                    </div>

                )) */}









                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">


                                    <div className="row">


                                        <div className="el-wrapper">


                                            <div className="box-up">

                                                <img className="img-fluid img" loading='lazy' src="https://server.mocs.in/media/product_images/3504_BROWN_5-8_359.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">FootWare</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>



                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">

                                                    <span className="price">Just ₹1000</span>

                                                    <span className="add-to-cart" >

                                                        <span className="txt" >Add in cart</span>


                                                    </span>

                                                </a>

                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>





                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">


                                    <div className="row">


                                        <div className="el-wrapper">


                                            <div className="box-up">

                                                <img className="img-fluid img" loading='lazy' src="https://server.mocs.in/media/product_images/3504_BROWN_5-8_359.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">FootWare</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">

                                                    <span className="price">Just ₹1000</span>

                                                    <span className="add-to-cart" >

                                                        <span className="txt" >Add in cart</span>


                                                    </span>

                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>




                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">


                                    <div className="row">


                                        <div className="el-wrapper">


                                            <div className="box-up">

                                                <img className="img-fluid img" loading='lazy' src="https://server.mocs.in/media/product_images/3504_BROWN_5-8_359.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">FootWare</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">

                                                    <span className="price">Just ₹1000</span>

                                                    <span className="add-to-cart" >

                                                        <span className="txt" >Add in cart</span>


                                                    </span>

                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>




                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">


                                    <div className="row">


                                        <div className="el-wrapper">


                                            <div className="box-up">

                                                <img className="img-fluid img" loading='lazy' src="https://server.mocs.in/media/product_images/3504_BROWN_5-8_359.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">FootWare</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">

                                                    <span className="price">Just ₹1000</span>

                                                    <span className="add-to-cart" >

                                                        <span className="txt" >Add in cart</span>


                                                    </span>

                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>




                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">


                                    <div className="row">


                                        <div className="el-wrapper">


                                            <div className="box-up">

                                                <img className="img-fluid img" loading='lazy' src="https://server.mocs.in/media/product_images/3504_BROWN_5-8_359.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">FootWare</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">

                                                    <span className="price">Just ₹1000</span>

                                                    <span className="add-to-cart" >

                                                        <span className="txt" >Add in cart</span>


                                                    </span>

                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>





                    </Carousel>


                </div>


            </section>



        </>



    )



}

export default LadiesSlide
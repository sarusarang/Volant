import React from 'react'
import './Hero.css'

function Hero() {




    return (



        <>

            <section className='container p-5 mt-5'>




                <div className='row'>


                    <div className='col-md-6 hero2-text'>

                        <h2>“Every Step Tells a Story”</h2>

                        <p>OWe create and deliver high-quality and attractive, stylish footwears designed for active lifestyles. Combining advanced technology with premium materials, our footwear offers exceptional comfort, durability, and support. The Volant Footwear is Perfect for occasional, athletes and casual wearers alike, Volant ensures every step you take is a step towards excellence. Explore innovation, and embrace movement with Volant.</p>


                    </div>



                    <div className='col-md-6 p-5 pt-0 pb-2'>


                        <div className='row'>


                            <div className='col-md-6 hero2-margin' >

                                <div className='hero2-logo d-flex flex-column'>


                                    <h3>Shoes</h3>
                                    <p className='text-center'>Effortless elegance and all-day <br /> comfort</p>


                                </div>

                            </div>



                            <div className='col-md-6' style={{ cursor: 'pointer' }}>

                                <img src="/explore(263x263)-01.jpg" loading='lazy' className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4' style={{ cursor: 'pointer' }}>

                                <img src="/explore(263x263)-02.jpg" loading='lazy' className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4 hover'  >

                                <div className='hero2-logo d-flex flex-column'>

                                    <h3>School Edition</h3>
                                    <p className='text-center'>Smart Footwear for every student</p>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>



            </section>




        </>



    )



}

export default Hero
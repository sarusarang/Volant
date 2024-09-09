import React from 'react'
import Slider from '../Components/Slider'
import GentsSlide from '../Components/GentsSlide'
import LadiesSlide from '../Components/LadiesSlide'
import BoysSlide from '../Components/BoysSlide'
import Hero from '../Components/Hero'
import WhatsApp from '../Components/WhatsApp'

function Landing() {



    return (




        <>


            <section className='w-100'>


                {/* Slider */}
                <div className=''>

                    <Slider />

                </div>


                {/* Gents slide */}
                <div className=''>

                    <GentsSlide />

                </div>



                {/* Ladies Slides */}
                <div className=''>

                    <LadiesSlide />

                </div>


                {/* Boys Slide */}
                <div className=''>

                    <BoysSlide />

                </div>


                {/* Hero */}
                <div className=''>

                    <Hero />

                </div>


                {/* WhatsApp Logo */}
                <div className='Whats-app'>

                    <WhatsApp />

                </div>




            </section>




        </>





    )







}

export default Landing
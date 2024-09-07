import React from 'react'
import Slider from '../Components/Slider'
import GentsSlide from '../Components/GentsSlide'
import LadiesSlide from '../Components/LadiesSlide'
import BoysSlide from '../Components/BoysSlide'
import Hero from '../Components/Hero'

function Landing() {



    return (




        <>


            <section className='w-100'>


                <div className=''>

                    <Slider />

                </div>


                <div className=''>

                    <GentsSlide />

                </div>

                <div className=''>

                    <LadiesSlide />

                </div>


                <div className=''>

                    <BoysSlide />

                </div>


                <div className=''>

                    <Hero />

                </div>




            </section>




        </>





    )







}

export default Landing
import React from 'react'
import { useEffect } from 'react';
import './About.css'

function AboutUs() {



  useEffect(() => {


    // TO MOUNT ON THE TOP LEVEL 
    window.scrollTo(0, 0);


  }, []);


  return (



    <>


      <section className='about pt-5'>


        <div className='About-hero row mb-5'>

          <h2 className='text-center'>About Us</h2>

        </div>


 
        <div className='container mt-5 pt-5'>


          <div className='row'>


            <div className='col-md-6'>

              <img loading='lazy' src="/aboutshop-01.jpg" className='img-fluid' alt="about" />


            </div>


            <div className='col-md-6 about-head pt-3 p-5' style={{ marginTop: '7rem' }}>


              <h2>About Us</h2>

              <p>Volant Footwear is a dynamic company dedicated to crafting high-quality, stylish, and comfortable footwear for all occasions. Our innovative designs prioritize both aesthetics and functionality,
                ensuring that every step our customers take is supported and fashionable. Committed to sustainability, we use eco-friendly
                materials and ethical production practices. Volant Footwear blends cutting-edge technology with timeless style, offering a diverse range of products that cater to the modern, conscious consumer. <br /> <br />

              </p>


              <div className='about-social pt-4'>

                <a href="https://www.facebook.com/volantfootwears" target='_blank' className='btn-about btn'><i class="fa-brands fa-facebook-f"></i></a>

                <a href="https://www.instagram.com/volantfootwears/" target='_blank' className='btn-about btn'><i class="fa-brands fa-instagram"></i></a>

                <a href="https://x.com/volantfootwears" className='btn-about btn' target='_blank'><i class="fa-brands fa-x-twitter"></i></a>

                <a href="https://in.pinterest.com/volantfootwears/" target='_blank' className='btn-about btn'><i class="fa-brands fa-pinterest"></i></a>

              </div>


            </div>



          </div>


        </div>







      </section>


    </>


  )

}

export default AboutUs
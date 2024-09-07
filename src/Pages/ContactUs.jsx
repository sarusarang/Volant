import React from 'react'
import { useEffect } from 'react';
import './Contact.css'

function ContactUs() {




  useEffect(() => {


    // TO MOUNT ON THE TOP LEVEL 
    window.scrollTo(0, 0);


  }, []);




  return (



    <>


      <section className='contact container'>



        <div className='Contact-hero row'>

          <h2 className='text-center'>Contact Us</h2>

        </div>



        <div className='contact-form row  mt-5'>


          {/* Contact Deatils */}
          <div className='col-md-6 get-in'>

            <h3 className='mb-4'>Contact Us</h3>


            <p><i class="fa-solid fa-house me-2"></i>10/391 , Kakkanchery , Chelembra (P.O),Malappuaram , 673634, Kerala, INDIA</p>

            <p>

              <a href="https://wa.me/+9185898 83308" className='nav-link' target='_blank'> <i class="fa-solid fa-phone me-2"></i>+91 8589883308</a>


            </p>

            <p>

              <a href="mailto:volantshoes@gmail.com" className='nav-link' target='_blank'><i class="fa-solid fa-envelope me-2"></i> volantshoes@gmail.com</a>


            </p>



            <p>

              <a href="www.volantfootwear.com" className='nav-link' target='_blank'><i class="fa-solid fa-earth-americas me-2"></i>www.volantfootwear.com</a>

            </p>


          </div>



          {/* Contact Form */}
          <div className='col-md-6 margin-get'>

            <h3>Get In Touch</h3>

            <form onSubmit={(e) => { e.preventDefault() }} className='pt-3'>


              <input type="text" className='form-control mb-4' placeholder='Name' />


              <input type="text" className='form-control mb-4' placeholder='Email' />


              <input type="text" className='form-control mb-4' placeholder='Phone' />


              <input type="text" className='form-control mb-4' placeholder='Subject' />


              <textarea name="" placeholder='Your Message' className='form-control' id=""></textarea>

              <button type='submit' className='btn btn-dark w-50 mt-4'>Send</button>


            </form>


          </div>


        </div>



        <div className='map pt-5 mb-5'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7084.765580971796!2d75.888235!3d11.153507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6516a024f7351%3A0x250e6b32957347c4!2sVolant%20Shoes%20PVT%20Limited!5e1!3m2!1sen!2sin!4v1725683579062!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>


      </section>



    </>




  )




}

export default ContactUs
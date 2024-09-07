import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'







function Footer() {



  return (



    <>


      <footer className="text-center text-lg-start text-white py-1 px-5">

        <section className="p-5 pt-0" style={{ borderBottom: '1px solid #414141' }}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">


              {/* Navigation */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Navigation
                </h6>

                <p className='mb-3'>

                  <Link to={'/'} className='text-reset foot-link'>Home</Link>

                </p>

                <p className='mb-3'>

                  <Link to={'/'} className='text-reset foot-link'>Gents</Link>

                </p>


                <p className='mb-3'>

                  <Link to={'/'} className='text-reset foot-link'>Ladies</Link>

                </p>

                <p className='mb-3'>

                  <Link to={'/'} className='text-reset foot-link'>Boys & Girls</Link>

                </p>

                <p className='mb-3'>

                  <Link to={'/'} className='text-reset foot-link'>Kids</Link>

                </p>

              </div>



              {/* About */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 foot-res">


                <div className='foot-logo'>

                  <img src="/logowhite-01.png" loading='lazy' className='img-fluid' alt="" />

                </div>


                <p style={{ fontSize: '15px' }}><i className="fas fa-home me-3"></i>10/391 , Kakkanchery , Chelembra (P.O),Malappuaram ,
                673634</p>


                <p className='text-start'>

                  <a href='mailto:volantfootwears@gmail.com' className='foot-link' style={{ fontSize: '15px' }} target='_blank'>

                    <i className="fas fa-envelope me-3 mb-2"></i>
                    volantfootwears@gmail.com


                  </a>

                </p>


                <p className='w-100'>

                  <a href={`https://wa.me/+918589883308?text=Hi`} className='foot-link' target='_blank' style={{ fontSize: '15px' }} > <i className="fas fa-phone me-3"></i>+91 8589883308</a>

                </p>




              </div>


              {/* Pages */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Shopping & Categories
                </h6>


                <p className='mb-3'>

                  <Link to={'/about'} className='text-reset foot-link'>Gent's Shopping</Link>

                </p>


                <p  className='mb-3'>

                  <Link to={'/contact'} className='text-reset foot-link'>Ladie's Shopping</Link>

                </p>


                <p  className='mb-3'>

                  <Link to={'/contact'} className='text-reset foot-link'>Kids's Shopping</Link>

                </p>

                <p  className='mb-3'>

                  <Link to={'/contact'} className='text-reset foot-link'>Boyss & Girls Shopping</Link>

                </p>



              </div>

            </div>

          </div>

        </section>


        <div class="text-center p-4 pb-0" style={{ color: '#ccc' }}>


          <p> Copyright © 2024 Volant All Rights Reserved. </p>

          <p>Powered by <a href="" className='foot-link'>exmedia.in</a></p>


          <div className='d-flex justify-content-center'>

            <p><Link className='nav-link foot-link me-3' to={'/pirvacy'}> Privacy & Policy</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/terms'}>Terms & Conditions</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/refund'}>Refund Policy</Link></p>

          </div>


        </div>




        {/* Socail Media Links */}
        <section class="d-flex justify-content-center pb-3">

          <a data-mdb-ripple-init class="btn m-1" href="https://www.facebook.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fab fa-facebook-f text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn m-1" href="https://x.com/happycouplesolu" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-x-twitter text-white"></i></a>

          <a data-mdb-ripple-init class="btn  m-1" href="https://www.instagram.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fab fa-instagram text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn m-1" href="https://www.youtube.com/@happycouplesolution" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-youtube text-white"></i></a>




          <a data-mdb-ripple-init class="btn  m-1" href="https://in.pinterest.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-pinterest text-white"></i></a>


        </section>

      </footer>



    </>





  )



}

export default Footer
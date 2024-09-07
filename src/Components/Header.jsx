import React from 'react'
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {



    // Collapse the navbar
    const [expanded, setExpanded] = useState(false)


    const handleNavClick = () => {

        setExpanded(false)

    }



    return (



        <>


            <Navbar expand="lg" className="header" collapseOnSelect expanded={expanded}>

                <Container className='contain p-2'>


                    <div className='nav-logo'>

                        <a href="/">

                            <img src="/volantlogo-01.png" className='img-fluid' alt="logo" />

                        </a>

                    </div>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />




                    <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


                        <Nav className="navigation">

                            <Link to={'/'} onClick={handleNavClick}>Home</Link>



                            <div className='dropdown'>

                                <Nav.Link>Gents<i className="fa-solid fa-angle-down mt-1 ms-1" style={{ color: '#2a2a2a', fontSize: 'x-small' }}></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Sandals</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Slipers & Flip Flops</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Flat Shoes</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Casual Shoes</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Special Collections</Link>

                                </div>

                            </div>


                            <div className='dropdown'>

                                <Nav.Link>Ladies<i className="fa-solid fa-angle-down mt-1 ms-1" style={{ color: '#2a2a2a', fontSize: 'x-small' }}></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Sandals</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Slipers & Flip Flops</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Flat Shoes</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Casual Shoes</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Women Special</Link>

                                </div>

                            </div>



                            <div className='dropdown'>

                                <Nav.Link>Boys & Girls<i className="fa-solid fa-angle-down mt-1 ms-1" style={{ color: '#2a2a2a', fontSize: 'x-small' }}></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Sandals</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Shoes</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>School Edition</Link>


                                </div>

                            </div>


                            <div className='dropdown'>

                                <Nav.Link>Kids<i className="fa-solid fa-angle-down mt-1 ms-1" style={{ color: '#2a2a2a', fontSize: 'x-small' }}></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Sandals</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Shoes</Link>



                                </div>

                            </div>


                            <div className='dropdown'>

                                <Nav.Link>Pages<i className="fa-solid fa-angle-down mt-1 ms-1" style={{ color: '#2a2a2a', fontSize: 'x-small' }}></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/about'} className='drop-link d-block' onClick={handleNavClick}>About Us</Link>
                                    <Link to={'/contact'} className='drop-link d-block' onClick={handleNavClick}>Contact Us</Link>

                                </div>

                            </div>




                        </Nav>


                    </Navbar.Collapse>



                    <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


                        <Nav className="navigation">



                            <Link to={'/fil'} onClick={handleNavClick} className='search-none'>

                                <input type="text" placeholder='Search' className='form-control w-100' />

                            </Link>



                            <Link to={'/cart'} onClick={handleNavClick}><i class="fa-solid fa-cart-shopping fa-lg"></i></Link>



                            <div className='dropdown'>

                                <Nav.Link><i class="fa-solid fa-user fa-lg"></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Login</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Logout</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Orders</Link>

                                </div>

                            </div>


                        </Nav>



                    </Navbar.Collapse>


                </Container>

            </Navbar>





        </>





    )






}

export default Header
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Skeleton } from '@mui/material'
import './ProductSlide.css'
import { GetProducts } from '../Services/AllApi'
import { useNavigate } from 'react-router-dom'

function GentsSlide() {





    const [Loading, SetLoading] = useState(false)


    // Product Data
    const [Product, SetProduct] = useState([])


    const Navigate = useNavigate()



    useEffect(() => {



        const GetAllProducts = async () => {


            try {


                const res = await GetProducts()

                if (res.status >= 200 && res.status <= 300) {

                    console.log(res.data);


                    const result = res.data.filter((item) => item.category === "gents")

                    SetProduct(result)

                }
                else {

                    console.log(res);


                }


            }
            catch (Err) {

                console.log(Err);


            }


        }


        GetAllProducts()



    }, [])











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

            <section className='product-slide mt-5 pt-5' style={{ borderTop: '3px dotted #eee' }}>


                <div className='container p-3'>

                    <div className='ms-3 Product-head'>

                        <h2>Gents Latest</h2>
                        <p>Walk in confidence with the Volant Footwear newest collection</p>

                    </div>


                    <Carousel responsive={responsive}>


                        {

                            Loading || !Product.length ?

                                Array.from({ length: 3 }).map((item) => (


                                    <div className='me-3 mt-3'>

                                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

                                        <Skeleton animation="wave" height={20} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                        <Skeleton animation="wave" height={20} width="80%" />

                                    </div>

                                ))


                                :


                                Product.length > 0 &&


                                Product.map((item) => (



                                    <div class="product-container">

                                        <div class="item">

                                            <div class="thumb">

                                                <img src={item.image} alt="img" onClick={() => { Navigate(`/pro/${item.id}`) }}  style={{cursor:'pointer'}}  />

                                                <div class="hover-content">

                                                    <ul>
                                                        <li><a onClick={() => { Navigate(`/pro/${item.id}`) }}><i class="fa fa-eye" ></i></a></li>
                                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                                        {/* <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li> */}
                                                    </ul>

                                                </div>

                                            </div>

                                            <div class="down-content">

                                                <div class="left">

                                                    <h4 className='fw-bold'>{item.sub_cateory} {item.name}</h4>
                                                    <div class="price">₹519</div>

                                                </div>

                                                <div class="stars">
                                                    <i class="fa fa-star text-dark"></i>
                                                    <i class="fa fa-star text-dark"></i>
                                                    <i class="fa fa-star text-dark"></i>
                                                    <i class="fa fa-star text-dark"></i>
                                                    <i class="fa fa-star text-dark"></i>
                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                ))


                        }


                    </Carousel>


                </div>


            </section>




        </>








    )



}

export default GentsSlide
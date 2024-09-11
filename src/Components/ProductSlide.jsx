import React from 'react'
import { useEffect, useState } from 'react'
import { GetProducts } from '../Services/AllApi'
import './ProductSlide.css'
import { Skeleton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function ProductSlide() {



    // Products Data
    const [Products, SetProducts] = useState([])


    // Loading 
    const [Loading, SetLoading] = useState(true)


    // Navigate 
    const Navigate = useNavigate()




    useEffect(() => {



        const GetAllProducts = async () => {


            try {


                const res = await GetProducts()

                if (res.status >= 200 && res.status <= 300) {

                    const Result = res.data.slice(0, 6)
                    SetProducts(Result)
                    SetLoading(false)
                }
                else {

                    console.log(res);
                    SetLoading(true)


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



            <section className='product-slide'>


                <div className='container p-5 pt-0'>


                    <Carousel responsive={responsive}>



                        {

                            Loading ?


                                Array.from({ length: 3 }).map((item) => (


                                    <div className='me-5 mt-3'>

                                        <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                        <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                        <Skeleton animation="wave" height={20} width="80%" />

                                    </div>

                                ))


                                :


                                Products.map((item) => (


                                    <div class="product-container">

                                        <div class="item">

                                            <div class="thumb">

                                                <img src={item.image} alt="img" onClick={() => { Navigate(`/pro/${item.id}`) }} style={{ cursor: 'pointer' }} />

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

export default ProductSlide
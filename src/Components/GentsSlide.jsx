import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Skeleton } from '@mui/material'
import './ProductSlide.css'
import { GetProducts,AddtoCart } from '../Services/AllApi'
import { toast } from 'sonner'

function GentsSlide() {





    const [Loading, SetLoading] = useState(false)


    // Product Data
    const [Product, SetProduct] = useState([])



    useEffect(() => {



        const GetAllProducts = async () => {


            try {


                const res = await GetProducts()

                if (res.status >= 200 && res.status <= 300) {

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








    // Handle Add To Cart
    const HandleCart = async (product_id) => {


        try {


            const user = sessionStorage.getItem("user")
            const token = sessionStorage.getItem("token")


            if (user) {


                const reqheader = {

                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`

                }

                const formdata = new FormData()
                formdata.append("items", product_id)
                formdata.append("user", user)


                const res = await AddtoCart(formdata, reqheader)


                if (res.status >= 200 && res.status <= 300) {


                    toast.success("Product Added To Cart...!")

                }
                else {

                    console.log(res)
                    toast.warning("Product Alredy Exist in the Cart")

                }


            }
            else {


                toast.warning("Please Login First..!")


                setTimeout(() => {

                    Navigate('/auth')

                }, 1000);


            }

        }
        catch (err) {


            console.log(err)

        }


    }



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


                                    <div>

                                        <div className="container page-wrapper">

                                            <div className="page-inner">


                                                <div className="row">


                                                    <div className="el-wrapper">


                                                        <div className="box-up">

                                                            <img className="img-fluid img" loading='lazy' src={item.image} alt="img" style={{ height: '100%' }} />

                                                            <div className="img-info">

                                                                <div className="info-inner">

                                                                    <span className="p-name"></span>
                                                                    <span className="p-company fw-bold">{item.name}</span>

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



                                                        <div className="box-down" >

                                                            <div className="h-bg">
                                                                <div className="h-bg-inner"></div>
                                                            </div>

                                                            <a className="cart" onClick={()=>{HandleCart(item.id)}}>

                                                                <span className="price">Just ₹{item.offer_is_available ? item.offer_price : item.price}</span>

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

                                ))


                        }


                    </Carousel>


                </div>


            </section>




        </>








    )



}

export default GentsSlide
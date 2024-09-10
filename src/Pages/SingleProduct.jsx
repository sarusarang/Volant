import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetProducts, AddtoCart, GetQuanity, GetColor } from '../Services/AllApi'
import { toast } from 'sonner'
import ProductSlide from '../Components/ProductSlide'
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import ProductSkelton from '../Components/ProductSkelton'


function SingleProduct() {


    // Product id 
    const { id } = useParams()


    // Product Data
    const [ProductData, SetProductData] = useState({})



    // Price and Quanity 
    const [PriceandQuanity, SetPriceandQuanity] = useState({})



    // all Quanity
    const [AllQuanity, SetAllQuanity] = useState([])



    // Loading State
    const [Loading, SetLoading] = useState(true)



    // All Colors
    const [AllColors, SetAllColors] = useState([])



    //Selected Color
    const [SelectedColor, SetSelectedColor] = useState({})


    // To handle Spec Tabs
    const [activeItem, setActiveItem] = useState('tab1')



    const Navigate = useNavigate()



    useEffect(() => {



        // To get all the products
        const GetAllProducts = async () => {

            try {

                const res = await GetProducts()


                if (res.status >= 200 && res.status <= 300) {



                    const Result = res.data.find((item) => (item.id == id))

                    SetProductData(Result)

                    SetLoading(false)


                }
                else {


                    console.log(res);
                    SetLoading(true)


                }

            }
            catch (err) {

                console.log(err);
                SetLoading(true)

            }


        }



        // Get Quanity
        const AllQuanity = async () => {


            try {


                const res = await GetQuanity()

                if (res.status >= 200 && res.status <= 300) {


                    const result = res.data.filter(item => item.product == id)


                    const defaultquanity = result.find((item) => (item))


                    SetPriceandQuanity(defaultquanity)


                    SetAllQuanity(result)



                } else {


                    console.log(res);
                    SetLoading(true)


                }

            }
            catch (err) {

                console.log(err);
                SetLoading(true)

            }


        }





        // Get Prodct Color
        const ProductColor = async () => {


            try {

                const res = await GetColor()

                if (res.status >= 200 && res.status <= 300) {

                    const result = res.data.filter(item => item.product == id)

                    const defaultcolor = result.find((item) => (item))

                    SetAllColors(result)

                    SetSelectedColor(defaultcolor)

                }
                else {

                    console.log(res)


                }

            }
            catch (Err) {


                console.log(Err);


            }


        }






        window.scrollTo(0, 0);


        GetAllProducts()

        AllQuanity()

        ProductColor()


    }, [id])




    // To handle Spec Tabs
    const handleTabClick = (value) => {

        if (value === activeItem) {

            return;
        }

        setActiveItem(value);

    }




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
                formdata.append("color", SelectedColor.product_color)
                formdata.append("size", PriceandQuanity.size)


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



    return (


        <>

            {


                !AllQuanity.length || Loading ?

                    <ProductSkelton />

                    :

                    < section >


                        <section className="py-5">


                            <div className="container">


                                <div className="row gx-5">


                                    <aside className="col-lg-6">


                                        <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">



                                                <img loading='lazy' style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={SelectedColor.image} />



                                            </a>

                                        </div>





                                        <div className="d-flex justify-content-center mb-3">

                                            {

                                                AllColors &&

                                                AllColors.map((item) => (


                                                    <a style={{ cursor: 'pointer' }} onClick={() => { SetSelectedColor(item) }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                                        <img loading='lazy' width="60" height="60" className="rounded-2" src={item.image} />
                                                    </a>


                                                ))


                                            }


                                        </div>


                                    </aside>


                                    <main className="col-lg-6">

                                        <div className="ps-lg-3">

                                            {/* Tittle */}
                                            <h3 className="title text-dark mb-0 fw-bold">
                                                {ProductData.name}
                                            </h3>


                                            <p style={{ color: "#777" }}>Perfect {ProductData.sub_cateory} for {ProductData.category}</p>


                                            {/* Rating */}
                                            <div className="d-flex flex-row my-3">

                                                <div className="text-warning mb-1 me-2">

                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <span className="ms-1">
                                                        4.5
                                                    </span>
                                                </div>


                                                <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i></span>

                                                <span className={ProductData.available ? "text-success ms-2" : "text-danger ms-2"}>{ProductData.available ? "In Stock" : "Out of Stock"}</span>


                                            </div>


                                            {/* Price */}
                                            <div className="mb-3">

                                                <div className='d-flex flex-row'>

                                                    <h5 className="h5 fw-bold me-2">MRP ₹{PriceandQuanity.offer_is_available ? PriceandQuanity.offer_price : PriceandQuanity.price}</h5>

                                                    <span className="text-danger"><s>{PriceandQuanity.offer_is_available ? <s> ₹{PriceandQuanity.price}</s> : ""}</s></span>

                                                    <p className='text-success ms-2'>{PriceandQuanity.offer_is_available ? <s style={{ textDecoration: 'none' }}>{PriceandQuanity.offer_percentage}%off</s> : ""}</p>


                                                </div>


                                                <span className="text-muted" style={{ fontSize: '13px', fontWeight: '500' }}> (Inclusive of all taxes)</span>

                                            </div>




                                            {/* Incrediants */}
                                            <p className='mb-4'>
                                                {ProductData.description}
                                            </p>




                                            <div className="row">

                                                <dt className="col-3">Color:</dt>

                                                <dd className="col-9">{SelectedColor.product_color}</dd>

                                            </div>



                                            <hr />



                                            {/* Quanity */}
                                            <div className=" mb-5 mt-3">


                                                <div className="d-flex flex-column">


                                                    <label className="mb-2 fw-bold" style={{ fontSize: '1.3rem' }}>Size</label>

                                                    <div className='row'>

                                                        {

                                                            AllQuanity &&

                                                            AllQuanity.map((item) => (

                                                                <button className={`btn_nos me-3 mt-2 col-md-1 ${PriceandQuanity.size === item.size ? 'active' : ''}`} onClick={() => { SetPriceandQuanity(item) }}>{item.size}</button>

                                                            ))

                                                        }


                                                    </div>


                                                </div>


                                            </div>



                                            {/* Buy Now */}
                                            <a className="btn btn-buynow shadow me-3 mt-3" onClick={() => { Navigate('/buy') }}> Buy now </a>
                                            <a className="btn btn-addcart shadow mt-3" onClick={() => { HandleCart(ProductData.id) }}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>



                                        </div>


                                    </main>
                                </div>
                            </div>


                        </section>






                        <section className="bg-light border-top py-4 pb-5 mb-5 pt-5" style={{ borderBottom: '3px dotted #eee' }}>


                            <div className="container">


                                <div className="row gx-4">

                                    {/* SPECS */}
                                    <div className="col-lg-12 mb-4">

                                        <div className='border rounded-2 shadow px-3 py-2 bg-white'>

                                            <MDBTabs pills className="mb-3 p-3">

                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleTabClick('tab1')} active={activeItem === 'tab1'} className=' text-dark me-3' style={{ border: '1px solid #000' }} >
                                                        Discription
                                                    </MDBTabsLink>
                                                </MDBTabsItem>

                                                {/* <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleTabClick('tab2')} active={activeItem === 'tab2'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                              Product Details
                            </MDBTabsLink>
                          </MDBTabsItem> */}


                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleTabClick('tab3')} active={activeItem === 'tab3'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                                                        Customer Reviews
                                                    </MDBTabsLink>
                                                </MDBTabsItem>


                                                {/* <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleTabClick('tab4')} active={activeItem === 'tab4'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                              FAQs
                            </MDBTabsLink>
                          </MDBTabsItem> */}


                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleTabClick('tab5')} active={activeItem === 'tab5'} className=' text-dark' style={{ border: '1px solid #000' }}>
                                                        Shipping & Return
                                                    </MDBTabsLink>
                                                </MDBTabsItem>


                                            </MDBTabs>




                                            {/* Discription */}
                                            {

                                                activeItem == "tab1" &&

                                                <div className='key-benfits pb-5'>

                                                    <p style={{ textAlign: 'justify' }}>{ProductData.description}</p>

                                                </div>

                                            }


                                            {/* Product Details*/}
                                            {/* {
  
                          activeItem == "tab2" &&
  
                          <div className='howto-use pb-5 ps-3 pe-3'>
  
                            <ul>
  
                              <li>ansmsannsa</li>
                              <li>ansmsannsa</li>
                              <li>ansmsannsa</li>
  
  
                            </ul>
  
                          </div>
  
                        } */}






                                            {/* Review */}
                                            {

                                                activeItem == "tab3" &&

                                                <div className='pb-5 ps-3 pe-3'>


                                                    <div className='mb-4 customer-review'>

                                                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        <p>started using Lygin M before moving to stronger medications. Not only did my condition improve,
                                                            but I also feel more energetic throughout the day!" - Jason M.</p>

                                                    </div>



                                                    <div className='mb-4 customer-review'>

                                                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        <p>Great product with natural ingredients. I appreciate the holistic approach to treating ED." - Kevin T.</p>

                                                    </div>



                                                    <div className='mb-4 customer-review'>

                                                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        <p>Noticed significant improvements in both my sexual health and overall well-being. Highly recommend Lygin M!" - Sam D.</p>

                                                    </div>


                                                </div>

                                            }



                                            {/* Faq */}
                                            {/* {
  
                          activeItem == "tab4" &&
  
                          <div className='FAQ pb-5 ps-3 pe-3'>
  
                            <ul>
  
                              <li>
  
                                <p className='mt-2'>Hello hi</p>
  
                              </li>
  
                            </ul>
  
                          </div>
  
                        } */}




                                            {/* Shipping & Return */}
                                            {

                                                activeItem == "tab5" &&

                                                <div className='FAQ pb-5 ps-3 pe-3'>

                                                    <p className='fw-bold'>Shipping</p>
                                                    <p>Free Shipping on all Orders in India</p>

                                                    <p className='fw-bold'>Estimated Delivery</p>
                                                    <p>4-5 working days</p>

                                                    <p className='fw-bold'>Return & Exchange</p>
                                                    <p>Unworn  shoes can be exchanged or returned for a full refund within 7 days</p>

                                                </div>
                                            }



                                        </div>


                                    </div>





                                </div>


                            </div>


                        </section>



                        {/* Products */}
                        <section className='pb-5'>


                            <div>

                                <h3 className='text-center mb-0' style={{ fontWeight: '600' }}>YOU MAY ALSO LIKE</h3>
                                <p className='text-center' style={{ color: '#777' }}>Browse the collection of related products.</p>

                                <ProductSlide />


                            </div>


                        </section>


                    </section >

            }



        </>


    )

}

export default SingleProduct
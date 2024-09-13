import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetProducts, AddtoCart, GetQuanity, GetColor } from '../Services/AllApi'
import { toast } from 'sonner'
import ProductSlide from '../Components/ProductSlide'
import ProductSkelton from '../Components/ProductSkelton'
import SizeChart from '../Components/SizeChart'


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


                        <section className="py-5 mb-5">


                            <div className="container">


                                <div className="row gx-5">


                                    <aside className="col-lg-6">


                                        <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">

                                                <img loading='lazy' style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={SelectedColor.image} />

                                            </a>

                                        </div>


                                    </aside>


                                    <main className="col-lg-6">

                                        <div className="ps-lg-3 p-3">

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


                                            <div className="d-flex justify-content-start mb-4">

                                                {

                                                    AllColors &&

                                                    AllColors.map((item) => (


                                                        <a style={{ cursor: 'pointer' }} onClick={() => { SetSelectedColor(item) }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                                            <img loading='lazy' width="60" height="60" className="rounded-2" src={item.image} />
                                                        </a>


                                                    ))


                                                }


                                            </div>




                                            <div className="row">

                                                <dt className="col-2">Color:</dt>

                                                <dd className="col-10 mb-4">{SelectedColor.product_color}</dd>

                                                <SizeChart category={ProductData.category} />

                                            </div>



                                            <hr />



                                            {/* Quanity */}
                                            <div className=" mb-5 mt-3">


                                                <div className="d-flex flex-column">


                                                    <div className='d-flex align-items-center'>


                                                        <label className="mb-2 fw-bold" style={{ fontSize: '1.3rem' }}>Size</label>


                                                    </div>




                                                    <div className='row btn-size'>

                                                        {

                                                            AllQuanity &&

                                                            AllQuanity.map((item) => (

                                                                <button className={`btn_nos mt-2 col-1 ${PriceandQuanity.size === item.size ? 'active' : ''}`} onClick={() => { SetPriceandQuanity(item) }}>{item.size}</button>

                                                            ))

                                                        }


                                                    </div>


                                                </div>


                                            </div>



                                            <div className='row sec-buy'>

                                                {/* Buy Now */}
                                                <a className="btn btn-buynow shadow me-3 col-md-5" onClick={() => { Navigate('/buy') }}> Buy now </a>
                                                <a className="btn btn-addcart shadow col-md-6" onClick={() => { HandleCart(ProductData.id) }}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

                                            </div>







                                        </div>


                                    </main>
                                </div>
                            </div>


                        </section>









                        {/* Products */}
                        <section className='pb-5 pt-5 mt-5' style={{ borderTop: '3px dotted #eee' }}>


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
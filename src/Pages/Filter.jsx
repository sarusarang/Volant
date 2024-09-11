import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GetProducts, GetFilter } from '../Services/AllApi'
import { Skeleton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { SetFilterData } from '../Store/FilterSlice'


function Filter() {




    const Navigate = useNavigate()


    const Dispatch = useDispatch()


    const { Filter, Search } = useSelector((state) => state.Filter)



    // Filterd Data
    const [FilterData, SetFilData] = useState([])



    // Loading State 
    const [Loading, SetLoading] = useState(true)


    // Products
    const [Products, SetProducts] = useState([])


    // Data
    const [Data, SetData] = useState({

        Size: "", color: ""

    })


    // Category Status
    const [Status, SetStatus] = useState(false)



    useEffect(() => {



        const GetAllProducts = async () => {


            try {


                const res = await GetProducts()

                if (res.status >= 200 && res.status <= 300) {

                    SetProducts(res.data)


                    const Result = res.data.filter((item) => {

                        return (

                            (!Filter || item.category === Filter.category && item.sub_cateory == Filter.subcategory)

                        )

                    })


                    SetFilData(Result)

                    SetLoading(false)


                }
                else {

                    console.log(res);
                    SetLoading(true)


                }


            }
            catch (Err) {

                console.log(Err)
                SetLoading(true)


            }


        }



        GetAllProducts()

        window.scrollTo(0, 0);


    }, [Filter])




    // Search function
    useEffect(() => {


        const HandleSearch = () => {


            const SearchTerm = Search.toLowerCase()

            const res = Products.filter((item) => {

                return Object.values(item).some(value =>

                    value !== null && value !== undefined && value.toString().toLowerCase().includes(SearchTerm)

                )

            })

            SetFilData(res)

        }


        HandleSearch()

        window.scrollTo(0, 0);


    }, [Search])




    // Size Filter
    useEffect(() => {


        const GetFilterData = async () => {


            try {


                if (Data.Size || Data.color) {


                    const res = await GetFilter(Filter.category, Data.Size, Data.color)


                    if (res.status >= 200 && res.status <= 300) {



                        SetFilData(res.data)

                    }
                    else {

                        console.log(res);


                    }

                }


            }
            catch (err) {

                console.log(err);


            }


        }

        window.scrollTo(0, 0);


        GetFilterData()


    }, [Data.Size, Data.color])




    // Filter data handle
    const handleFilterData = (category, subcategory) => {


        Dispatch(SetFilterData({ category: category, subcategory: subcategory }))

    }




    return (




        <>


            <section className='w-100 container p-5 mt-3 mb-5'>




                <div className='row'>


                    <div className='col-md-3 d-flex flex-column'>


                        <button className='fw-bold mb-4 btn border' style={{ cursor: 'pointer' }} onClick={() => { SetStatus(!Status) }}>Categories{Status ? <i class="fa-solid fa-angle-up ms-2"></i> : <i class="fa-solid fa-angle-down ms-2"></i>} </button>


                        {

                            Status &&


                            <div className=' d-flex flex-column'>

                                <a className='fil-link' onClick={() => { handleFilterData("gents", "sandals") }}>Gents Sandels</a>

                                <a className='fil-link' onClick={() => { handleFilterData("gents", "slipres") }}>Gents Slipper and Flip Flops</a>

                                <a className='fil-link' onClick={() => { handleFilterData("gents", "casualshoes") }}>Gents Casual Shoes</a>

                                <a className='fil-link' onClick={() => { handleFilterData("gents", "specialcollections") }}>Gents Special Collections</a>


                                <a className='fil-link' onClick={() => { handleFilterData("ladies", "sandals") }}>Ladies Sandels</a>

                                <a className='fil-link' onClick={() => { handleFilterData("ladies", "slipres") }}>Ladies Slipper and Flip Flops</a>

                                <a className='fil-link' onClick={() => { handleFilterData("ladies", "casualshoes") }}>Ladies Casual Shoes</a>

                                <a className='fil-link' onClick={() => { handleFilterData("ladies", "flatshoes") }}>Ladies Flat Shoes</a>

                                <a className='fil-link' onClick={() => { handleFilterData("ladies", "specialcollections") }}>Ladies Special Collections</a>


                                <a className='fil-link' onClick={() => { handleFilterData("boys&girls", "sandals") }}>Boys & Girls Sandels</a>

                                <a className='fil-link' onClick={() => { handleFilterData("boys&girls", "shoes") }}>Boys & Girls Shoes</a>

                                <a className='fil-link' onClick={() => { handleFilterData("boys&girls", "schooledition") }}>Boys & Girls School Edition</a>


                                <a className='fil-link' onClick={() => { handleFilterData("kids", "sandals") }}>kids Sandels</a>

                                <a className='fil-link' onClick={() => { handleFilterData("kids", "shoes") }}>kids Shoes</a>

                            </div>
                        }

                    </div>



                    <div className='col-md-9'>


                        <div className='row'>


                            <div className='col-md-6 mb-3'>


                                <select name="" id="" className='form-control custom-select' onChange={(e) => { SetData({ ...Data, color: e.target.value }) }}>


                                    <option value="">Select Your Color</option>
                                    <option value="Black">Black</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Camel">Camel</option>
                                    <option value="Cherry">Cherry</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Grape">Grape</option>
                                    <option value="Green">Green</option>
                                    <option value="Grey">Grey</option>
                                    <option value="Maroon">Maroon</option>
                                    <option value="Mehandi">Mehandi</option>
                                    <option value="Navy">Navy</option>
                                    <option value="Olive">Olive</option>
                                    <option value="Peach">Peach</option>
                                    <option value="Peacock">Peacock</option>
                                    <option value="Pink">Pink</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Tan">Tan</option>
                                    <option value="Violet">Violet</option>
                                    <option value="White">White</option>
                                    <option value="Wine">Wine</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="sky blue">sky blue</option>
                                    <option value="fblack">fblack</option>
                                    <option value="Lemon">Lemon</option>


                                </select>

                            </div>




                            <div className='col-md-6 mb-3'>


                                <select name="" id="" className='form-control custom-select' onChange={(e) => { SetData({ ...Data, Size: e.target.value }) }}>


                                    <option value="">Select the Size</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>


                                </select>



                            </div>





                        </div>



                        <div className='row p-3'>


                            {

                                Loading ?

                                    Array.from({ length: 6 }).map((item) => (


                                        <div className=' mt-3 col-md-4 '>

                                            <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                            <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                            <Skeleton animation="wave" height={20} width="80%" />

                                        </div>

                                    ))

                                    :


                                    FilterData.length > 0 ?

                                        FilterData.map((item) => (


                                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">

                                                <div className="card w-100 my-2 hover-shdw">


                                                    <div className='new-arrival' onClick={() => { Navigate(`/pro/${item.id}`) }}>

                                                        <img loading='lazy' src={item.image} className="card-img-top" style={{ cursor: 'pointer' }} />

                                                        {/* {item.new_arrival ? <span className="badge">New Arrival</span> : ""} */}


                                                    </div>



                                                    <div className="card-body d-flex flex-column">

                                                        <p className="mb-1 me-1">{item.category} {item.sub_cateory} <span className='fw-bold'>{item.name}</span></p>

                                                        <div className="d-flex flex-row ">

                                                            <p className="mb-1 me-2">₹{item.offer_is_available ? item.offer_price : item.price}</p>

                                                            <span className="text-danger" style={{ textDecoration: 'line-through' }}><s>{item.offer_is_available ? <s> ₹{item.price} </s> : ""}</s></span>

                                                            <p className='text-success ms-2'>{item.offer_is_available ? <s style={{ textDecoration: 'none' }}>{item.offer_percentage}%off</s> : ""}</p>


                                                        </div>





                                                    </div>


                                                </div>

                                            </div>


                                        ))

                                        :

                                        <div className='d-flex justify-content-center'>

                                            <img src="https://www.fruitomans.com/themes/home/images/no-product-found.png" loading='lazy' alt="img" className='img-fluid' />

                                        </div>


                            }

                        </div>


                    </div>


                </div>



            </section>






        </>


    )


}

export default Filter
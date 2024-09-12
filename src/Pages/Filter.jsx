import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GetProducts, GetFilter } from '../Services/AllApi'
import { Skeleton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { SetFilterData } from '../Store/FilterSlice'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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

        Size: "", color: "", type: "", category: ""

    })






    useEffect(() => {



        const GetAllProducts = async () => {


            try {


                const res = await GetProducts()

                if (res.status >= 200 && res.status <= 300) {

                    SetProducts(res.data)


                    const Result = res.data.filter((item) => {

                        const price = parseFloat(item.price)

                        console.log(price);


                        return (

                            (!Filter || item.category === Filter.category && item.sub_cateory == Filter.subcategory) &&
                            (!Data.category || item.category === Data.category) &&
                            (!Data.type || item.sub_cateory === Data.type)
                            // (price >= minPrice && price <= maxPrice)

                        )

                    })


                    SetFilData(Result)

                    console.log(Result)


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


    }, [Filter, Data.category, Data.type])




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


                    const res = await GetFilter(Data.category, Data.Size, Data.color)


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
    const handleFilterData = (category) => {


        Dispatch(SetFilterData(""))
        SetData({ ...Data, category: category })


    }





    const ClearAll = () => {


        SetData("")
        setMaxPrice(5000)
        setRangeValue(0)
        setMinPrice(0)
        Dispatch(SetFilterData(""))

    }


    const[open, setOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(false);
    const [expandedType, setExpandedType] = useState(false);



    return (



        <>



            <section className="p-3 pt-5 mb-5">



                <div className="container">


                    <div className="row">

                        <div className="col-lg-3">

                            {/* Show Filter Button */}
                            <Button
                                className="btn btn-outline-info text-white mb-3 w-100 d-lg-none"
                                type="button"
                                onClick={() => setOpen(!open)}
                                aria-controls="navbarSupportedContent"
                                aria-expanded={open}
                            >
                                <span>Show filter</span>

                            </Button>

                            {/* Collapse Section */}
                            <div className={`collapse card d-lg-block mb-5 ${open ? 'show' : ''}`} id="navbarSupportedContent">

                                <Button className="col-md-12 mb-2 btn btn-clear border-0 fw-bold" onClick={ClearAll}>
                                    Clear All <i className="fa-solid fa-ban"></i>
                                </Button>

                                <Accordion defaultActiveKey="0" alwaysOpen>

                                    {/* Categories Section */}
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Header onClick={() => setExpandedCategory(!expandedCategory)}>
                                            Categories 
                                        </Accordion.Header>

                                        <Accordion.Body>
                                            <div className="form-check">
                                                <input
                                                    checked={Data.category === "gents"}
                                                    onChange={() => handleFilterData("gents")}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="gents"
                                                    id="gents"
                                                />
                                                <label className="form-check-label" htmlFor="gents">Gents</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    checked={Data.category === "ladies"}
                                                    onChange={() => handleFilterData("ladies")}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="ladies"
                                                    id="ladies"
                                                />
                                                <label className="form-check-label" htmlFor="ladies">Ladie's</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    checked={Data.category === "boys&girls"}
                                                    onChange={() => handleFilterData("boys&girls")}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="boys&girls"
                                                    id="boys&girls"
                                                />
                                                <label className="form-check-label" htmlFor="boys&girls">Boys & Girls</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    checked={Data.category === "kids"}
                                                    onChange={() => handleFilterData("kids")}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="kids"
                                                    id="kids"
                                                />
                                                <label className="form-check-label" htmlFor="kids">Kids</label>
                                            </div>
                                        </Accordion.Body>


                                    </Accordion.Item>

                                    {/* Type Section */}
                                    <Accordion.Item eventKey="1">

                                        <Accordion.Header onClick={() => setExpandedType(!expandedType)}>
                                            Type 
                                        </Accordion.Header>

                                        <Accordion.Body>

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    checked={Data.type === "sandals"}
                                                    onChange={() => SetData({ ...Data, type: "sandals" })}
                                                    type="checkbox"
                                                    value="sandals"
                                                    id="sandals"
                                                />
                                                <label className="form-check-label" htmlFor="sandals">Sandals</label>
                                            </div>

                                            
                                            <div className="form-check">
                                                <input
                                                    checked={Data.type === "flip flop"}
                                                    onChange={() => SetData({ ...Data, type: "flip flop" })}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="flip flop"
                                                    id="flipFlop"
                                                />
                                                <label className="form-check-label" htmlFor="flipFlop">Flip Flop</label>
                                            </div>


                                            <div className="form-check">
                                                <input
                                                    checked={Data.type === "slipper"}
                                                    onChange={() => SetData({ ...Data, type: "slipper" })}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="slipper"
                                                    id="slipper"
                                                />
                                                <label className="form-check-label" htmlFor="slipper">Slipper</label>
                                            </div>


                                            <div className="form-check">
                                                <input
                                                    checked={Data.type === "clogs"}
                                                    onChange={() => SetData({ ...Data, type: "clogs" })}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="clogs"
                                                    id="clogs"
                                                />
                                                <label className="form-check-label" htmlFor="clogs">Clogs</label>
                                            </div>


                                            <div className="form-check">
                                                <input
                                                    checked={Data.type === "casual"}
                                                    onChange={() => SetData({ ...Data, type: "casual" })}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="casual"
                                                    id="casual"
                                                />
                                                <label className="form-check-label" htmlFor="casual">Casual</label>
                                            </div>


                                            <div className="form-check">
                                                <input
                                                    checked={Data.type === "sports"}
                                                    onChange={() => SetData({ ...Data, type: "sports" })}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="sports"
                                                    id="sports"
                                                />
                                                <label className="form-check-label" htmlFor="sports">Sports</label>
                                            </div>


                                        </Accordion.Body>

                                    </Accordion.Item>


                                </Accordion>

                            </div>

                        </div>


                        <div className="col-lg-9">


                            {/* <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">

                                <strong className="d-block py-2">{FilterData.length} Products Found</strong>

                            </header> */}



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






                            {/* Products */}
                            <div className="row">


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


                                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex" >

                                                    <div className="card w-100 my-2 border hover-shdw">


                                                        <div className='new-arrival'>

                                                            <img loading='lazy' src={item.image} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => { Navigate(`/pro/${item.id}`) }} />

                                                            {item.new_arrival ? <span className="badge">New Arrival</span> : ""}


                                                        </div>



                                                        <div className="card-body d-flex flex-column">

                                                            <p className="mb-1 me-1">{item.category} {item.sub_cateory} <span className='fw-bold'>{item.name}</span></p>

                                                            <div className="d-flex flex-row ">

                                                                <p className="mb-1 me-1 fw-bold">₹ {item.offer_is_available ? item.offer_price : item.price}</p>

                                                                <span className="text-danger"><s>{item.offer_is_available ? <s> ₹{item.price} </s> : ""}</s></span>

                                                                <p className='text-success ms-2'>{item.offer_is_available ? <s style={{ textDecoration: 'none' }}>{item.offer_percentage}%off</s> : ""}</p>


                                                            </div>



                                                            <p className="card-text">{item.description}</p>

                                                            {/* <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">

                                                <a className="btn btn-dark shadow-0 me-1">Add to cart</a>

                                            </div> */}


                                                        </div>


                                                    </div>

                                                </div>


                                            ))


                                            :


                                            <div>

                                                <img src="https://www.lookshopbd.com/website/images/no_result.gif" className='img-fluid' alt="" />

                                            </div>

                                }






                            </div>



                        </div>



                    </div>

                </div>





            </section>


















































            {/* <section className='w-100 container p-5 mt-3 mb-5'>


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


            {/* </div>



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

 */}

            {/* </section> */}






        </>


    )


}

export default Filter
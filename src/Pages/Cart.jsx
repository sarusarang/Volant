import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { GetCart, DeleteCart } from '../Services/AllApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';








function Cart() {



    const Navigate = useNavigate()


    // Cart Items
    const [CartItems, SetCartItems] = useState([])



    // Delete Status
    const [DeleteStatus, SetDeleteStatus] = useState()




    useEffect(() => {




        // Get Cart Items
        const GetCartItems = async () => {


            try {


                // Geting user
                const user = sessionStorage.getItem("user")


                if (user) {


                    const res = await GetCart(user)

                    if (res.status >= 200 && res.status <= 300) {


                        console.log(res.data);
                    

                        const CartProducts = res.data.map(item => item.product)

                        SetCartItems(CartProducts)

                    }
                    else {

                        console.log(res);

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


                console.log(err);

            }


        }

        GetCartItems()

        window.scrollTo(0, 0);


    }, [DeleteStatus]);







    // Cart Delete
    const DeleteCartItems = async (data) => {

        try {


            const user = sessionStorage.getItem("user")

            const res = await DeleteCart(data, user)

            if (res.status >= 200 && res.status <= 300) {

                SetDeleteStatus(Date.now())
                toast.success("Product Removed From the Cart...!")

            }
            else {

                console.log(res);

            }


        }
        catch (err) {


            console.log(err);


        }

    }



    // Product Quanity Change
    const ChangeQuanity = (newquanity, id) => {


        SetCartItems(CartItems.map(item =>

            item.id === id ? { ...item, quantity: newquanity } : item

        ))

    }



    // Cart Total Price
    const TotalPrice = () => {


        return CartItems.reduce((total, item) => total + item.quantity * (item.offer_is_available ? item.offer_price : item.price), 0)


    }










    return (




        <>



            <section className="mt-4  mb-5 Cart-paddin pt-4">


                <div className="container">


                    <div className="row">

                        <div className="col-lg-9">



                            <div className="card border shadow-0">


                                <div className="m-4 Cart-padding">


                                    {

                                        CartItems.length > 0 &&


                                        <h4 className="card-title mb-4 text-dark">Your shopping cart</h4>

                                    }






                                    {

                                        CartItems.length > 0 ?

                                            CartItems.map((item) => (







                                                <div className="row gy-3 mb-4">

                                                    <div className='row mb-4 gy-3'>

                                                        <div className="col-lg-5">

                                                            <div className="me-lg-5">

                                                                <div className="d-flex">

                                                                    <img src={item.image} loading='lazy' className="border rounded me-3 cart-img" style={{ width: '96px', height: '96px', cursor: 'pointer' }} />

                                                                    <div className="">

                                                                        <a href="#" className="nav-link fw-bold">{item.name}</a>
                                                                        <p className="text-muted">{item.sub_cateory}</p>

                                                                    </div>

                                                                </div>


                                                            </div>

                                                        </div>


                                                        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">

                                                            <div className="me-5">


                                                                <select style={{ width: '100px' }} onChange={(e) => { ChangeQuanity(e.target.value, item.id) }} className="form-select me-4">

                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                    <option value={4}>4</option>
                                                                    <option value={5}>5</option>

                                                                </select>



                                                            </div>


                                                            <div className="">

                                                                <text className="h6">₹{item.offer_is_available ? item.offer_price * item.quantity : item.price * item.quantity}</text> <br />

                                                            </div>


                                                        </div>


                                                        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                                            <div className="float-md-end">

                                                                <a className="btn btn-danger shadow-0  text-white" onClick={() => { DeleteCartItems(item.id) }} >Remove <i class="fa-solid fa-trash-can"></i></a>

                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>

                                            ))


                                            :



                                            <div className='d-flex flex-column'>

                                                <img src="https://www.buy.airoxi.com/img/empty-cart-1.png" className='img-fluid' loading='lazy' alt="img" />

                                            </div>



                                    }







                                </div>



                                <div className="border-top pt-4 mx-4 mb-4">

                                    <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip
                                    </p>

                                </div>



                            </div>


                        </div>



                        <div className="col-lg-3">


                            <div className="card border-0 shadow" >

                                <div className="card-body bg-white">


                                    <h5 className='text-center mb-4'>Order Summary</h5>


                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Total Items:</p>
                                        <p className="mb-2">{CartItems.length}</p>
                                    </div>

                                    <div className="d-flex justify-content-between">

                                        <p className="mb-2">Total Price:</p>


                                        {

                                            CartItems ?

                                                <p className="mb-2 text-success">

                                                    ₹{TotalPrice()}


                                                </p>

                                                :

                                                0

                                        }



                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Shipping Fee:</p>
                                        <p className="mb-2 text-success fw-bold">Free</p>
                                    </div>


                                    <hr />

                                    <div className="d-flex justify-content-between">



                                        <p className="mb-2 fw-bold">Sub Total:</p>



                                        {

                                            CartItems ?

                                                <p className="mb-2 text-success">

                                                    ₹{TotalPrice()}


                                                </p>

                                                :

                                                0

                                        }






                                    </div>

                                    <div className="mt-3">


                                        <Link to={'/buy'}>

                                            <a href="#" className="btn btn-success w-100 shadow-0  mt-2"> Check Out </a>

                                        </Link>


                                    </div>


                                </div>


                            </div>



                        </div>


                    </div>

                </div>

            </section>






        </>






    )




}

export default Cart
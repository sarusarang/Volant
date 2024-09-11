import React from 'react'
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './Buy.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { GetAddress,PostAddress } from '../Services/AllApi'

function Buy() {





    // Navigate 
    const Navigate = useNavigate()



    // Setting  user Address
    const [UserAddress, SetUserAddress] = useState({

        name: "", pincode: "", city: "", state: "", landmark: "", streetaddress: "", phone: ""

    })


    // GetAddress State
    const [GetState, SetGetState] = useState({})


    // User Fetch Address
    const [FetchAddress, SetFetchAddress] = useState()


    // Selected User Address
    const [SelectedAddress, SetSelectedAddress] = useState({})



    // TO SET ADD ADDRESS STATUS
    const [AddressStatus, SetAddressStatus] = useState(true)



    // Modal State
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {


        const CheckUser = () => {

            const User = sessionStorage.getItem("user")

            if (!User) {

                toast.warning("Please Login First..!")

                setTimeout(() => {

                    Navigate('/auth')

                }, 1000);

            }
        }



        // Get User Address
        const GetUserAddress = async () => {


            try {


                const data = sessionStorage.getItem("user")


                const res = await GetAddress(data)

                console.log(sessionStorage.getItem("username"));


                if (res.status >= 200 && res.status <= 300) {

                    SetFetchAddress(res.data)


                    if (res.data) {

                        const Result = res.data[0]

                        SetSelectedAddress(Result)

                        console.log(res);
                        

                    }

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

        CheckUser()

        GetUserAddress()


    }, [GetState])





    // Add Address
    const AddAddress = async () => {


        try {

            const { name, city, landmark, phone, pincode, state, streetaddress } = UserAddress


            if (!name || !city || !landmark || !phone || !pincode || !state || !streetaddress) {

                toast.warning("Empty Feild...!")

            }
            else {


                const formdata = new FormData()


                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }


                formdata.append("name", name)
                formdata.append("user", sessionStorage.getItem("user"))
                formdata.append("city", city)
                formdata.append("landmark", landmark)
                formdata.append("phone", phone)
                formdata.append("pincode", pincode)
                formdata.append("state", state)
                formdata.append("streetaddress", streetaddress)



                const res = await PostAddress(formdata, reqheader)


                if (res.status >= 200 && res.status <= 300) {


                    console.log(res);
                    SetAddressStatus(true)
                    SetUserAddress("")
                    SetGetState(res.data)
                    toast.success("Address Added Successfully...!")


                } else {


                    console.log(res);


                }


            }

        }

        catch (Err) {

            console.log(Err);

        }

    }





    return (




        <>




            <section className='d-flex justify-content-center bg-light pb-5 pt-2' >

                <div className="iphone">


                    <h3 className='text-center'>Checkout</h3>

                    <form className="form mt-5" onSubmit={(e) => { e.preventDefault() }}>

                        <div>

                            <h4>Address</h4>

                            <div className="card text-dark" style={{ padding: '1rem' }}>



                                {

                                    SelectedAddress ?


                                        <address >

                                            Delivery to <span className='fw-bold'>{SelectedAddress.city} {SelectedAddress.pincode}</span><br />
                                            {SelectedAddress.streetaddress}

                                        </address>

                                        :

                                        <h4>Add Address</h4>

                                }





                                <div>

                                    <i class="fa-solid fa-pen-to-square fa-lg" onClick={handleShow} style={{ cursor: 'pointer' }}></i>

                                </div>

                            </div>

                        </div>


                        <div className='mt-3'>

                            <h4>Shopping Bill</h4>

                            <table>
                                <tbody>

                                    <tr>
                                        <td>Shipping fee <i class="fa-solid fa-truck-fast text-success"></i></td>
                                        <td align="right" className='text-success'>Free</td>
                                    </tr>


                                    <tr>


                                        <td>Discount 0% <i class="fa-solid fa-tag text-success"></i></td>


                                        <td align="right" className='text-success'>


                                            ₹0


                                        </td>


                                    </tr>


                                    <tr>
                                        <td>Total Items</td>
                                        <td align="right" className='text-success'>0</td>
                                    </tr>


                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td>Total</td>



                                        <td align="right" className='text-success'>

                                            ₹1000


                                        </td>



                                    </tr>


                                </tfoot>

                            </table>

                        </div>

                        <div className=''>

                            <button className="button button--full" type="submit">Pay Now<i className="fa-solid fa-lock"></i></button>

                        </div>



                    </form>


                </div>


            </section>




            {/* Address Modal */}


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='border-0'>

                    <h5>{AddressStatus ? "Saved Address" : "Add Address"}</h5>

                </Modal.Header>

                <Modal.Body>

                    <div className='ps-3 pt-3 d-flex flex-column'>


                        {/* Address  */}
                        {

                            AddressStatus &&


                            <div>


                                <div className='Address-scroll col-12'>


                                    {

                                        FetchAddress &&


                                        FetchAddress.map((item) => (


                                            <div className='d-flex mb-4'>

                                                <input type="radio" onClick={() => { SetSelectedAddress(item), handleClose() }} value="" name='a' className='large-radio' style={{ cursor: 'pointer' }} />

                                                <div className='ms-3'>

                                                    <p className='mb-0 fw-bold'>{item.name}</p>
                                                    <p className='mb-0'>{item.city},{item.state} {item.pincode}</p>

                                                </div>

                                            </div>


                                        ))


                                    }


                                </div>


                                <div className='col-12 p-2 text-center'>

                                    <button onClick={(e) => { SetAddressStatus(false) }} className='btn btn-address w-75'>Add New Address <i class="fa-solid fa-plus"></i></button>

                                </div>


                            </div>


                        }




                        {/* Add Address */}
                        {

                            !AddressStatus &&


                            <div className='ps-3 pb-4 pe-3'>

                                <form onSubmit={(e) => { e.preventDefault() }}>

                                    <input type="text" onChange={(e) => { SetUserAddress({ ...UserAddress, name: e.target.value }) }} placeholder='Name' className='form-control mb-3' />

                                    <input type="tel" onChange={(e) => { SetUserAddress({ ...UserAddress, pincode: e.target.value }) }} placeholder='Please enter a 6-digit pincode' className='form-control mb-3' maxlength="6" pattern="\d{6}" inputMode='numeric' onInput={(e) => { e.target.value = e.target.value.replace(/\D/, '') }} />

                                    <input type="text" onChange={(e) => { SetUserAddress({ ...UserAddress, city: e.target.value }) }} placeholder='City' className='form-control mb-3' />

                                    <input type="text" onChange={(e) => { SetUserAddress({ ...UserAddress, state: e.target.value }) }} placeholder='State' className='form-control mb-3' />

                                    <input type="text" onChange={(e) => { SetUserAddress({ ...UserAddress, landmark: e.target.value }) }} placeholder='Landmark' className='form-control mb-3' />

                                    <textarea name="" onChange={(e) => { SetUserAddress({ ...UserAddress, streetaddress: e.target.value }) }} className='form-control mb-3' placeholder='Enter your Street address' id=""></textarea>

                                    <input type="text" onChange={(e) => { SetUserAddress({ ...UserAddress, phone: e.target.value }) }} placeholder='Phone' className='form-control mb-3' maxlength="10" pattern="\d{10}" inputMode='numeric' onInput={(e) => { e.target.value = e.target.value.replace(/\D/, '') }} />


                                    <div className='pb-3 mt-4'>

                                        <button onClick={() => { SetAddressStatus(true) }} type='submit' className='btn btn-address ms-2 w-25'>Close</button>

                                        <button onClick={() => { AddAddress() }} type='submit' className='btn btn-address ms-2 w-50'>Save</button>

                                    </div>


                                </form>


                            </div>

                        }



                    </div>

                </Modal.Body>





            </Modal>




        </>



    )



}

export default Buy
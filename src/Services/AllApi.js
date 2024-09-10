import { CommonApi } from "./CommonApi";


const base_url = "https://server.volantfootwear.com"



// Login
export const Login = async (data, header) => {


    return await CommonApi("POST", `${base_url}/api/token/`, data, header)

}


// Register
export const Register = async (data, header) => {


    return await CommonApi("POST", `${base_url}/api/register/`, data, header)

}


// Google Auth
export const GoogleAuth = async (data, header) => {


    return await CommonApi("POST", `${base_url}/api/google-auth/`, data, header)

}


//Get Product
export const GetProducts = async (data, header) => {


    return await CommonApi("GET", `${base_url}/products/`, data, header)

}

// Add to Cart 
export const AddtoCart = async (data, header) => {


    return await CommonApi("POST", `${base_url}/user_cart/`, data, header)

}


// Get Cart
export const GetCart = async (data) => {

    const params = new URLSearchParams({ user: data });

    return await CommonApi("GET", `${base_url}/cart_view/?${params.toString()}`, "", "")

}


// Delete Cart Items
export const DeleteCart = async (data, user) => {

    const params = new URLSearchParams({ id: data, user: user })

    return CommonApi("DELETE", `${base_url}/cart_view/?${params.toString()}`, "", "")

}


// Get Quanity
export const GetQuanity = async () => {

    return CommonApi("GET", `${base_url}/sizes`)

}


// Get Color
export const GetColor = async () => {

    return CommonApi("GET", `${base_url}/colors/`, "", "")

}



// Filter Size
export const GetFilter = async (categ, size, color) => {

    const params = new URLSearchParams({ category: categ, size: size, color: color })

    return CommonApi("GET", `${base_url}/filter/?${params.toString()}`, "", "")

}



// Add to Address
export const PostAddress = async (data, headers) => {

    return CommonApi("POST", `${base_url}/user_address/`, data, headers)

}


// Get to Address
export const GetAddress = async (data) => {

    const params = new URLSearchParams({ user: data });

    return CommonApi("GET", `${base_url}/user_address/?${params.toString()}`, "", "")

}


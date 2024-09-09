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

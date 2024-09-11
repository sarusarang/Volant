import React from "react"
import { useState, useEffect, Suspense, lazy } from "react"
import { useLocation } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

const Landing = lazy(() => import("./Pages/Landing"))
const Footer = lazy(() => import("./Components/Footer"))
const Header = lazy(() => import("./Components/Header"))
const ContactUs = lazy(() => import("./Pages/ContactUs"))
const AboutUs = lazy(() => import("./Pages/AboutUs"))
const Auth = lazy(() => import("./Pages/Auth"))
const Cart = lazy(() => import("./Pages/Cart"))
const SingleProduct = lazy(() => import("./Pages/SingleProduct"))
const Filter = lazy(() => import("./Pages/Filter"))
const Buy = lazy(() => import("./Pages/Buy"))
const Terms = lazy(() => import("./Pages/Terms"))
const Policy = lazy(() => import("./Pages/Policy"))



function App() {


  const location = useLocation()


  const [Hide, sethide] = useState(false)




  useEffect(() => {


    const hidecheck = () => {

      if (location.pathname == '/auth' || location.pathname == '/buy') {


        sethide(true)


      }
      else {

        sethide(false)

      }

    }

    hidecheck()

  }, [location])




  return (




    <>


      <div className="position-sticky sticky-top  z-5 w-100 header-shadow">

        <Suspense fallback={<div></div>}>


          {!Hide && <Header />}

        </Suspense>


      </div>


      <Suspense fallback={<div></div>}>

        <Routes>


          <Route path="/" element={<Landing />}></Route>

          <Route path="/auth" element={<Auth />}></Route>

          <Route path="/contact" element={<ContactUs />}></Route>

          <Route path="/about" element={<AboutUs />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/pro/:id" element={<SingleProduct />}></Route>

          <Route path="/fil" element={<Filter />}></Route>

          <Route path="/Buy" element={<Buy />}></Route>

          <Route path="/terms" element={<Terms />}></Route>

          <Route path="/policy" element={<Policy />}></Route>


        </Routes>

      </Suspense>


      <Suspense fallback={<div></div>}>

        {!Hide && <Footer />}

      </Suspense>


      <Toaster richColors position="top-center" />

    </>







  )
}

export default App

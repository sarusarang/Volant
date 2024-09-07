import React from "react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Auth from "./Pages/Auth"
import Cart from "./Pages/Cart"


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


        {!Hide && <Header />}


      </div>


      <Routes>


        <Route path="/" element={<Landing />}></Route>

        <Route path="/auth" element={<Auth />}></Route>

        <Route path="/contact" element={<ContactUs />}></Route>

        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/cart" element={<Cart />}></Route>


      </Routes>


      {!Hide && <Footer />}

    </>







  )
}

export default App

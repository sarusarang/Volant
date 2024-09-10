import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import { Store } from './Store/Store.js'

createRoot(document.getElementById('root')).render(




  <BrowserRouter>


    <GoogleOAuthProvider clientId='619576952029-5o2sq8ckfneg7a2ns1902sdra9lsc5lc.apps.googleusercontent.com'>

      <Provider store={Store}>

        <App />

      </Provider>

    </GoogleOAuthProvider>



  </BrowserRouter>






)

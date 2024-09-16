import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/home'
import Cart from './components/pages/cart/cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'

function App() {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>
    :<>

    </>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='/cart' element ={<Cart/>}/>
         <Route path='/placeOrder' element ={<PlaceOrder/>}/>

       </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App

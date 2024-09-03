import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/home'
import Cart from './components/pages/cart/cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'

function App() {
  return (
    <div className='app'>
       <Navbar/>
       <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='/cart' element ={<Cart/>}/>
         <Route path='/placeOrder' element ={<PlaceOrder/>}/>
       </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from'./pages/Cart/cart'
import PlaceOrder from './pages/placeOrder/placeorder'
import Footer from './components/footer/footer'
import Login from './components/LoginPop/loginpop'
import { useState } from 'react'
const App = () => {
  const [showLogin,setShowLogin] =useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> :<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path = '/' element= {<Home/>}/> 
        <Route path = '/cart' element= {<Cart/>}/> 
        
        <Route path = '/placeorder' element= {<PlaceOrder/>}/> 
      </Routes>
    </div>
      <Footer />
      </>
  )
}

export default App

import React, {useState} from 'react'
import Navbar from './componenets/Navbar/Navbar'

import{ Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/Placeholder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './componenets/Footer/Footer'
import LoginPopup from './componenets/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import AppDownload from './componenets/AppDownload/AppDownload'
import Newsletter from './componenets/Newsletter/Newsletter'

const App = () => {

  const[showLogin, setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
          <div className='app'>
              <Navbar setShowLogin={setShowLogin}/>
              <Routes>
                < Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/order' element={<PlaceOrder/>} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/myorders' element={<MyOrders />} />
              </Routes>
              <AppDownload />
              <Newsletter />
          </div>
          <Footer/>
    </>
  )
}

export default App
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../pages/cartPage/CartPage'
import AccessoriesPage from '../pages/categoriesPages/AccessoriesPage'
import KidsPage from '../pages/categoriesPages/KidsPage'
import MenPage from '../pages/categoriesPages/MenPage'
import WomenPage from '../pages/categoriesPages/WomenPage'
import CheckoutPage from '../pages/checkoutPage/CheckoutPage'
import DashBoard from '../pages/dashboard/DashBoard'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login-signup/LoginPage'
import SignupPage from '../pages/login-signup/SignupPage'
import PageNotFound from '../pages/pagenotfound/PageNotFound'
import SingleProduct from '../pages/singleProduct/SingleProduct'

const AllRoutes = () => {
  const {user} = useSelector(store=>store.authReducer)
  console.log(user)
  return (
    <Routes>
        <Route path='/' element={user.user_type==='admin'?<DashBoard/>:<HomePage />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/kids' element={<KidsPage />} />
        <Route path='/accessories' element={<AccessoriesPage />} />
        <Route path='/cart/checkout' element={ <CheckoutPage/>} />
        <Route path='/:category/:id' element={<SingleProduct/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes
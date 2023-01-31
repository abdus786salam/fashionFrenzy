import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login-signup/LoginPage'
import SignupPage from '../pages/login-signup/SignupPage'
import PageNotFound from '../pages/pagenotfound/PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes
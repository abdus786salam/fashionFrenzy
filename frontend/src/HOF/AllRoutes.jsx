import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccessoriesPage from '../pages/categoriesPages/AccessoriesPage'
import KidsPage from '../pages/categoriesPages/KidsPage'
import MenPage from '../pages/categoriesPages/MenPage'
import WomenPage from '../pages/categoriesPages/WomenPage'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login-signup/LoginPage'
import SignupPage from '../pages/login-signup/SignupPage'
import PageNotFound from '../pages/pagenotfound/PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/kids' element={<KidsPage />} />
        <Route path='/accessories' element={<AccessoriesPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes
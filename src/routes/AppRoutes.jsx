import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
import NotFound from '../pages/not-found/NotFound'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
            
                <Route path='sign-up' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default AppRoutes
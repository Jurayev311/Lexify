import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes
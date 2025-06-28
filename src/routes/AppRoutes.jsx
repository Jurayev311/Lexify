import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
import NotFound from '../pages/not-found/NotFound'
import Admin from '../pages/admin/Admin'
import Wordsets from '../pages/admin/Wordsets'
import Words from '../pages/admin/Words'
import Settings from '../pages/admin/Settings'
import Statistics from '../pages/admin/Statistics'

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

            <Route path='/admin' element={<Admin />}>
              <Route path='wordsets' element={<Wordsets />}/>
              <Route path='words' element={<Words />}/>
              <Route path='statistics' element={<Statistics />}/>
              <Route path='settings' element={<Settings />}/>
            </Route>
        </Routes>
    </>
  )
}

export default React.memo(AppRoutes)
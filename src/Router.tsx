import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterContext from './RouterContext'
// import LayoutRequireAuth from './navigators/LayoutRequireAuth'
// import EmailVerify from './pages/email/EmailVerify'
import AppPage from './pages/app/AppPage'
import Home from './pages/home/Home'

function AppRouter() {
  return (
    <RouterContext>
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
        <Route path={'app/:id/*'} element={<AppPage />} />

        {/* must be public */}
        {/* <Route path={'email/verify/:code'} element={<EmailVerify />} /> */}

        {/* <Route path={'markets'} element={<Markets />} /> */}
        {/* <Route path={'trade/:key'} element={<Trade />} /> */}

        {/* <Route path={'wallet'} element={<LayoutRequireAuth />}> */}
        {/*  <Route path="" element={<WalletOverview />} /> */}
        {/*  <Route path={'deposit'} element={<WalletDeposit />} /> */}
        {/*  <Route path={'withdraw'} element={<WalletWithdraw />} /> */}
        {/* </Route> */}
      </Routes>
    </RouterContext>
  )
}

export default AppRouter

import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
        <ToastContainer />
        <Outlet />
    </>
  )
}

export default MainLayout

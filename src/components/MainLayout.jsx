import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header/>
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout

import React, { useState } from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
     <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
        ${isMobileMenuOpen ? "h-screen overflow-hidden" : ""}
      `}
    >
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout

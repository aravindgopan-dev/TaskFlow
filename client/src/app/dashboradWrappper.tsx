"use client"
import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import StoreProvider, { useAppSelector } from './redux'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-dark-bg'>
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? '' : 'md:pl-64'
        }`}
      >
        <Navbar />
        <div className='flex-grow p-4'>{children}</div> {/* Added padding for content */}
      </main>
    </div>
  )
}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper

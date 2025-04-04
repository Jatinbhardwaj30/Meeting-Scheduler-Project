import React from 'react'
import SideNavBar from './_components/SideNavBar'
import DashboardHeader from './_components/DashboardHeader'

function Dashboard_Layout({ children }) {
  return (
    <div>
      <div className='hidden md:block md:w-64 bg-slate-50 h-screen fixed'>
        <SideNavBar />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  )
}

export default Dashboard_Layout

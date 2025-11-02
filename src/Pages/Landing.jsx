import React, { useContext } from 'react'
import LandingPage from '../Components/LandingPage'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'
import { AppContext } from '../Context/AppContext'

const Landing = () => {
  const { showLogin } = useContext(AppContext)
  
  return (
    <div>
      <Navbar />
      <LandingPage />
      {showLogin && <Login />}
    </div>
  )
}

export default Landing
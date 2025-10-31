import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import NavbarForHome from '../Components/NavbarForHome'
import HeroHome from '../Components/HeroHome'

const Home = () => {
  const { token } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/') // Redirect to landing if not logged in
    }
  }, [token, navigate])

  if (!token) return null // Prevent flash of content

  return (
    <div>
      <NavbarForHome />
      <HeroHome />
    </div>
  )
}

export default Home
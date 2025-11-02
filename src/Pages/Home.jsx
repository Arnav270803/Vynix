import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import NavbarForHome from '../Components/NavbarForHome'
import HeroHome from '../Components/HeroHome'

const Home = () => {
  return (
    <div>
      <NavbarForHome />
      <HeroHome />
    </div>
  )
}

export default Home
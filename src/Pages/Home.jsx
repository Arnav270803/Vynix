import React from 'react'
import NavbarForHome from '../Components/NavbarForHome'
import HeroHome from '../Components/HeroHome'
import PromptBox from '../Components/PromptBox'

const Home = () => {
  return (
    <div>
      <NavbarForHome />
        <HeroHome />
        <PromptBox />
    </div>
  )
}

export default Home
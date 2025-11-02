import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { setShowLogin, showLogin , user } = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <nav className='w-full dark:bg-black'>
        <div className=''>
          <div className='flex items-center justify-between h-16'>
            {/* Home Logo */}
            <div className='flex item-center cursor-pointer space-x-2'>
              <div className='w-8 h-8 ml-15'>
                <lord-icon
                  src="https://cdn.lordicon.com/jeuxydnh.json"
                  trigger="hover"
                  colors="primary:#b4b4b4,secondary:#08a88a">
                </lord-icon>
              </div>
              <span className='text-2xl font-bold text-gray-100'
                style={{ fontFamily: 'Caveat, cursive' }}>
                Vynix
              </span>
            </div>

            <div className='flex items-center space-x-3 mr-15'>
              <button
                onClick={() =>user? navigate('/home') : setShowLogin(true)} 
                className='bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 font-medium'>
                {user? 'Welcome Back' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
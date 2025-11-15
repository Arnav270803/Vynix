import React from 'react'

const NavbarForHome = () => {
  return (
    <>
      {/* Google Fonts link for Caveat font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Main navigation */}
      <nav className='w-full bg-white border-b border-neutral-100'>
        <div className='flex items-center justify-between h-16 px-5'>
          
          {/* Logo Section */}
          <div className='flex items-center cursor-pointer space-x-2'>
            <div className='w-8 h-8'>
              <lord-icon
                src="https://cdn.lordicon.com/tsrgicte.json"
                trigger="hover"
                colors="primary:#171717,secondary:#08a88a">
              </lord-icon>
            </div>
            
            <span 
              className='text-2xl font-bold text-neutral-900'
              style={{fontFamily: 'Caveat, cursive'}}
            >
              Vynix
            </span>
          </div>
          
          {/* Upgrade Button */}
          <button className='px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors'>
            Upgrade
          </button>
          
        </div>
      </nav>
    </>
  )
}

export default NavbarForHome
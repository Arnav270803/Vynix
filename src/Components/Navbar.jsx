import React from 'react'

const Navbar = () => {
  return (   
<div 
    className="w-full py-4 relative"
    style={{
      backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
      backgroundColor: '#ffffff',
      backgroundSize: '20px 20px'
    }}
    >
      
    <div className='max-w-5xl mx-auto px-4'>
      <nav className='w-full bg-white/80 rounded-2xl shadow-lg border border-neutral-700/50 backdrop-blur-md' >
        <div className='px-6 lg:px-3'>
          <div className='flex items-center justify-between h-16'>
            {/*Home Logo  */}

            <div className='flex item-center cursor-pointer space-x-2'>
             <div className='w-8 h-8'>
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="hover"
                colors="primary:#b4b4b4,secondary:#08a88a">
              </lord-icon>  
             </div>
             <span className='text-xl font-semibold text-gray-900 '>
              Vynix
             </span>
            </div>

            {/*middle components */}
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#' className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
             Pricing
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
              My Mission
              
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
              Blogs
            </a>
            </div>
            {/*Sign in and login layout */}

            <div className='flex items-center space-x-3'>
              <button className='text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium cursor-pointer px-4 py-2 rounded-lg transition-colors'>
                Login
              </button>
               <button className={` bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 font-medium`}>
                  Sign Up
                </button>
            </div>

          
          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Navbar

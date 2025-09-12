import React from 'react'

const Navbar = () => {
  return (   

      
    <div className='max-w-5xl mx-auto '>
      <nav className='w-full bg-white/80   ' >
        <div className=' '>
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
  )
}

export default Navbar

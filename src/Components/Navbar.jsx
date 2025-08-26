import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center space-x-2">
        <span className="flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/jeuxydnh.json"
            trigger="hover"
            colors="primary:#e4e4e4,secondary:#ffffff">
          </lord-icon> 
        </span>
      </div>

      {/* The fancy "Upgrade" button */}
      <button
        className="px-4 py-2 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
      >
        Upgrade
      </button>
    </div>
  )
}

export default Navbar

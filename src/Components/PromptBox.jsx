import React from 'react'

const PromptBox = () => {
  return (
    <div className='fixed bottom-0  w-full  bg-gray-800 text-white p-4 shadow-lg z-50"'>
        <div className='max-w-4xl mx-auto flex item-center space-x-4'>
            <textarea
            className='w-full p-2 bg-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
            rows="2"
            placeholder='How can Vynix Help?'
            />
            <button className='bg-gray-800 hover:bg-blue-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>
                <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#b4b4b4">
                </lord-icon>
            </button>
        </div>
    </div>
  )
}

export default PromptBox
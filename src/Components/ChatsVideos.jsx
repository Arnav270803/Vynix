import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ChatsVideos = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='min-h-screen w-full bg-black flex flex-col relative overflow-hidden'>
      {/* Chat Container */}
      <div className='flex-1 overflow-y-auto px-4 py-6'>
        <div className='max-w-3xl mx-auto space-y-6'>
          
          {/* User Prompt */}
          <div className='flex justify-end'>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-2xl px-5 py-3 max-w-[80%]'>
              <p className='text-gray-200'>Create a video explaining the solar system with animated planets</p>
            </div>
          </div>

          {/* Video Response */}
          <div className='flex justify-start'>
            <div className='bg-zinc-900/50 backdrop-blur-sm border border-gray-700 text-gray-200 rounded-2xl px-5 py-4 max-w-[80%]'>
              <p className='text-sm text-gray-400 mb-3'>Your video is ready!</p>
              
              {/* Video Preview/Link */}
              <div className='bg-black/40 rounded-lg p-4 border border-gray-600'>
                <video 
                  controls 
                  className='w-full rounded-lg mb-3'
                  poster="https://via.placeholder.com/640x360/1a1a1a/666666?text=Video+Preview"
                >
                  <source src="your-video-url.mp4" type="video/mp4" />
                </video>
                
                <a 
                  href="your-video-url.mp4" 
                  download
                  className='inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors border border-gray-600'
                >
                  Download Video
                </a>
              </div>
            </div>
          </div>

          {/* User Prompt */}
          <div className='flex justify-end'>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-2xl px-5 py-3 max-w-[80%]'>
              <p className='text-gray-200'>Make a video about how photosynthesis works</p>
            </div>
          </div>

          {/* Video Response with Link Only */}
          <div className='flex justify-start'>
            <div className='bg-zinc-900/50 backdrop-blur-sm border border-gray-700 text-gray-200 rounded-2xl px-5 py-4 max-w-[80%]'>
              <p className='text-sm text-gray-400 mb-3'>Video generated successfully!</p>
              
              <div className='space-y-2'>
                <a 
                  href="your-video-url.mp4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block text-blue-400 hover:text-blue-300 underline text-sm break-all'
                >
                  https://yourcdn.com/videos/photosynthesis_abc123testingdon'ttakeitseriously.mp4
                </a>
                
                <div className='flex gap-2'>
                  <button className='bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs transition-colors border border-gray-600'>
                    Copy Link
                  </button>
                  <button className='bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs transition-colors border border-gray-600'>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className='px-4 py-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="border border-gray-400 rounded-lg backdrop-blur-sm bg-black/20 flex items-center gap-3 px-4 py-3">
            <textarea
              placeholder="What do you want to make?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none outline-none min-h-[24px] max-h-32 scrollbar-hide"
              style={{ 
                fontFamily: 'Hanken Grotesk, sans-serif',
                fontSize: '18px'
              }}
              rows={1}
              onInput={(e) => {
                const target = e.target;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 128) + 'px';
              }}
            />
<button className='bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors shrink-0'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChatsVideos
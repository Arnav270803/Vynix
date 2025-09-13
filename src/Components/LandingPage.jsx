import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const cn = (...classes) => classes.filter(Boolean).join(' ')

const HoverBorderGradient = ({ 
  children, 
  containerClassName, 
  className, 
  as: Tag = 'div', 
  duration = 1, 
  clockwise = true, 
  ...props 
}) => {
  const gradientStyle = { 
    background: `conic-gradient(from 0deg, transparent, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, transparent)` 
  }
  const glowStyle = { 
    background: `conic-gradient(from 0deg, transparent, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, transparent)` 
  }

  return (
    <Tag 
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group', 
        containerClassName
      )} 
      {...props}
    >
      <div 
        className={cn(
          'absolute inset-0 opacity-75 blur-sm transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-spin', 
          containerClassName
        )} 
        style={{
          ...gradientStyle, 
          animationDuration: `${duration * 3}s`, 
          animationDirection: clockwise ? 'normal' : 'reverse'
        }} 
      />
      <div 
        className={cn(
          'absolute inset-0 opacity-0 blur-md transition-all duration-1000 group-hover:opacity-60', 
          containerClassName
        )} 
        style={glowStyle} 
      />
      <div 
        className={cn(
          'relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium backdrop-blur-3xl', 
          className
        )}
      >
        {children}
      </div>
    </Tag>
  )
}

const LandingPage = () => {
  const { setShowLogin, user } = useContext(AppContext)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative min-h-screen w-full bg-white dark:bg-black flex flex-col">
        {/* Background Grid */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )} 
        />
        
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        
        {/* Main Content - Takes up remaining space */}
        <div className="relative top-10 z-20 flex flex-1 flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold cursor-pointer text-transparent sm:text-7xl dark:from-neutral-50 dark:to-neutral-400"
          >
            Animate Learning
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
          >
            Craft 3Blue1Brown-style animated educational videos with Vynix.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 group"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-3 font-medium"
              onClick={() => setShowLogin(true)}
            >
              {user ? 'Welcome Back!' : 'Get Started'}
            </HoverBorderGradient>
          </motion.div>

          {/* Show user status */}
          {user && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-600 dark:text-green-400"
            >
              You are logged in!
            </motion.p>
          )}
        </div>

        {/* Footer - Positioned at bottom */}
        <footer className="relative z-20 text-black dark:text-white px-6 py-14">
          <div className="flex justify-between items-start">
            <div>
              <div 
                className="text-4xl text-black dark:text-gray-300" 
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Vynix
              </div> 

              <div 
                className="py-2 text-xl text-black dark:text-gray-400"
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Build in Public
                <a 
                  href="https://x.com/Bokinsha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-colors duration-200"
                >
                  @Arnav
                </a>
              </div>
            </div>

            <div className='cursor-pointer hover:underline dark:text-gray-300 hover:text-blue-700'
              style={{fontFamily: 'Caveat, cursive'}}>
              <div>
                <a href="#" className='hover:underline text-xl dark:text-gray-300 hover:text-blue-700'
                  style={{fontFamily: 'Caveat, cursive'}}>
                  Contact Us
                </a>
              </div>

              <div className='py-3'>
                <a href="#" className='hover:underline text-xl dark:text-gray-300 cursor-pointer hover:text-blue-700'
                  style={{fontFamily: 'Caveat, cursive'}}>
                  Our Mission
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default LandingPage
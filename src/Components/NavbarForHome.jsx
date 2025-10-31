import React from 'react'
import { motion } from 'framer-motion'

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ')

// HoverBorderGradient component from your landing page.
const HoverBorderGradient = ({ 
  children, 
  containerClassName, 
  className, 
  as: Tag = 'div', 
  duration = 1, 
  clockwise = true, 
  ...props 
}) => {
  // Gradient styles for the animated border effect
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
      {/* Animated spinning gradient border */}
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
      
      {/* Glow effect on hover */}

      <div 
        className={cn(
          'absolute inset-0 opacity-0 blur-md transition-all duration-1000 group-hover:opacity-60', 
          containerClassName
        )} 
        style={glowStyle} 
      />
      
      {/* Button content */}
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

const NavbarForHome = () => {
  return (
    <>
      {/* Google Fonts link for Caveat font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Main navigation container */}
      <nav className='w-full dark:bg-black'>
        <div className=''>
          <div className='flex items-center justify-between h-16'>
            
            {/* Home Logo Section */}
            <div className='flex items-center cursor-pointer space-x-2'>
              {/* Lord Icon Container */}
              <div className='w-8 h-8 ml-5'>
                <lord-icon
                  src="https://cdn.lordicon.com/tsrgicte.json"
                  trigger="hover"
                  colors="primary:#e4e4e4,secondary:#08a88a">
                </lord-icon>
              </div>
              
              {/* Brand Name */}
              <span 
                className='text-2xl font-bold text-gray-100'
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Vynix
              </span>
            </div>
            
            {/* Upgrade Button Section */}
            <div className='mr-5'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2 font-medium text-sm"
                >
                  <span>Upgrade</span>
                </HoverBorderGradient>
              </motion.div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarForHome
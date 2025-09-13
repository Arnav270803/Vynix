import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const [state, setState] = useState('Login')
  const { setShowLogin, setUser, showLogin } = useContext(AppContext)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleStateToggle = () => {
    setState(state === 'Login' ? 'Sign Up' : 'Login')
  }

  const handleSubmit = async () => {
    // Basic validation
    if (!email || !password || (state === 'Sign Up' && !name)) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setUser(true)
      setShowLogin(false)
      setLoading(false)
      // Reset form
      setName('')
      setEmail('')
      setPassword('')
      alert(`${state} successful!`)
    }, 1500)
  }

  // Only render if showLogin is true
  if (!showLogin) return null

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <div className='relative bg-white p-10 rounded-xl text-slate-500 max-w-md w-full mx-4 shadow-2xl'>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-300"
          onClick={() => setShowLogin(false)}
        >
          ×
        </button>

        {/* Header */}
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center mb-6">Welcome back! Please sign in to continue</p>

        {/* Name Field - Only show for Sign Up */}
        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="outline-none text-sm flex-1"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="outline-none text-sm flex-1"
            placeholder="Email id"
            required
          />
        </div>

        {/* Password Field */}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="outline-none text-sm flex-1"
            placeholder="Password"
            required
          />
        </div>

        {/* Forgot Password - Only show for Login */}
        {state === 'Login' && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Please wait...' : (state === 'Login' ? 'Login' : 'Create Account')}
        </button>

        {/* Toggle Login/Sign Up */}
        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={handleStateToggle}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={handleStateToggle}
            >
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
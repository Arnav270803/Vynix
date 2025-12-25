import React, { useState, useRef, useEffect, useContext } from 'react'
import { Send, ExternalLink, Sparkles } from 'lucide-react'
import { AppContext } from '../Context/AppContext'

const ChatsVideos = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const { backendurl, token, user } = useContext(AppContext)
  const endRef = useRef(null)
  const textRef = useRef(null)

  // .scrollIntoView - it's a native dom method that is scrolling the page so that target element becomes visible 
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return
    
    const userMessage = { id: Date.now(), role: 'user', text: input, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage]) // this set's the history of the message , standard way of doing it in react.
    
    const currentInput = input
    setInput('')
    setLoading(true)
    
    if (textRef.current) textRef.current.style.height = '24px'// it is reseting the height of the send text space after sending the input 

    try {
      const response = await fetch(`${backendurl}/api/ai/ask`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', ...(token && { 'Authorization': `Bearer ${token}` })
        },
        body: JSON.stringify({ prompt: currentInput, 
            userId: user?._id || 'guest' })
      })
      const data = await response.json()
      
      const aiMessage = { 
        id: Date.now() + 1, 
        role: 'ai', 
        text: data.success ? '' : 'Failed to generate video. Please try again.', 
        video: data.success ? data.videoUrl : null, 
        links: data.links || [],
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage = { 
        id: Date.now() + 1, 
        role: 'ai', 
        text: `Connection error: ${error.message}`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex bg-white' style={{ height: 'calc(100vh - 64px)' }}>
      {/* Left Timeline */}
      <div className='w-20 flex-shrink-0 border-r border-neutral-100 flex flex-col items-center py-8 relative overflow-hidden'>
        <div className='absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent' />
        
        {messages.map((msg, idx) => (
          <div key={msg.id} className='relative mb-12 flex flex-col items-center'>
            <div className={`w-3 h-3 rounded-full z-10 ${
              msg.role === 'user' 
                ? 'bg-neutral-900 ring-4 ring-white' 
                : 'bg-white border-2 border-neutral-900 ring-4 ring-white'
            }`} />
            <span className='text-[9px] text-neutral-400 mt-2 font-medium'>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        
        {loading && (
          <div className='relative flex flex-col items-center'>
            <div className='w-3 h-3 rounded-full bg-neutral-200 animate-pulse z-10 ring-4 ring-white' />
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col min-w-0'>
        {/* Messages */}
        <main className='flex-1 overflow-y-auto px-8 min-h-0'>
          <div className='max-w-4xl mx-auto py-12 space-y-16'>
            {messages.map((message) => (
              <article key={message.id} className={`${message.role === 'user' ? 'ml-auto max-w-2xl' : 'max-w-3xl'}`}>
                {/* Role Badge */}
                <div className='mb-4'>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    message.role === 'user'
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-900'
                  }`}>
                    {message.role === 'user' ? 'You' : 'AI Studio'}
                  </span>
                </div>

                {/* Content */}
                <div className='space-y-5'>
                  <p className='text-base leading-relaxed text-neutral-700'>
                    {message.text}
                  </p>

                  {/* Video */}
                  {message.video && (
                    <div className='group'>
                      <div className='rounded-xl overflow-hidden border border-neutral-200 bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow'>
                        <video controls className='w-full' src={message.video}>
                          Your browser does not support video.
                        </video>
                      </div>
                      <p className='text-xs text-neutral-400 mt-2 font-medium'>Video generated successfully</p>
                    </div>
                  )}

                  {/* Links */}
                  {message.links && message.links.length > 0 && (
                    <div className='space-y-2 pt-2'>
                      {message.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-sm text-neutral-600 hover:text-neutral-900 transition-all'
                        >
                          <ExternalLink className='w-3.5 h-3.5' />
                          <span>{link.title || link.url}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}

            {/* Loading */}
            {loading && (
              <article className='max-w-3xl'>
                <div className='mb-4'>
                  <span className='inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-900'>
                    AI Studio
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-neutral-300 animate-bounce' />
                  <div className='w-2 h-2 rounded-full bg-neutral-300 animate-bounce' style={{ animationDelay: '150ms' }} />
                  <div className='w-2 h-2 rounded-full bg-neutral-300 animate-bounce' style={{ animationDelay: '300ms' }} />
                </div>
              </article>
            )}

            <div ref={endRef} />
          </div>
        </main>

        {/* Input */}
        <footer className='flex-shrink-0 border-t border-neutral-100 bg-white px-8 py-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='flex items-end gap-3 px-5 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 focus-within:border-neutral-900 transition-all'>
              <textarea
                ref={textRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                onInput={(e) => {
                  e.target.style.height = '24px'
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
                }}
                placeholder='Describe your video idea...'
                disabled={loading}
                className='flex-1 resize-none outline-none text-base leading-relaxed bg-transparent text-neutral-900 placeholder-neutral-400'
                style={{ height: '24px' }}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className='flex-shrink-0 w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 transition-all'
              >
                <Send size={17} strokeWidth={2} />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ChatsVideos
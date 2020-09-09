import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    emailjs.init('user_7KZ9qXMUheTdPSBQ6hiOJ')
  }, [])

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSending(true)

    if (!name || !email || !message) {
      setError('All feilds are required !')
      return
    }

    if (!validateEmail(email)) {
      setError('Not a valid email address !')
      return
    }

    emailjs
      .send('service_2tuehhv', 'template_pgevxmh', {
        name,
        email,
        message,
      })
      .then(() => {
        setSending(false)
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch(() => {
        setError('An error occured sending the email... Sorry !')
      })
  }

  const handleRetry = () => {
    if (error) {
      setError('')
      setSending(false)
    }
  }

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ backgroundColor: '#1e2533' }}
    >
      <div className="w-1/4">
        <div className="mb-8 text-orange-800 text-5xl text-center">Contact</div>
        <form
          className="shadow-md rounded px-10 pt-8 pb-12 mb-4"
          onSubmit={handleSubmit}
          style={{ backgroundColor: '#e6e6e6' }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              style={{ color: '#1e2533' }}
            >
              Name
            </label>
            <input
              style={{ color: '#1e2533' }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-800"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              style={{ color: '#1e2533' }}
            >
              Email
            </label>
            <input
              style={{ color: '#1e2533' }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-orange-800"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              style={{ color: '#1e2533' }}
            >
              Message
            </label>
            <textarea
              style={{ color: '#1e2533' }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-orange-800"
              placeholder="Your Message / Your Project"
            />
          </div>
          <div className="flex items-center justify-end">
            {!submitted && !error && (
              <button
                className={`hover:shadow ease-in duration-700 hover:py-3 hover:px-5 py-2 px-4 rounded-lg focus:outline-none ${
                  sending ? 'animate-bounce' : ''
                }`}
                disabled={sending ? true : false}
                style={{ backgroundColor: '#1e2533', color: '#e6e6e6' }}
                type="submit"
              >
                {sending ? 'Processing...' : 'Submit'}
              </button>
            )}
            {(submitted || error) && (
              <text
                className={`text-md font-semibold ${
                  error ? 'cursor-pointer' : ''
                }`}
                onClick={handleRetry}
                style={{ color: '#1e2533' }}
              >
                {error ? 'Oups...' : 'Thank you !'}
              </text>
            )}
          </div>
        </form>
        {error && <p className="text-red-800 text-sm text-center">{error}</p>}
      </div>
    </div>
  )
}

export default Contact

import { useState } from 'react'
import { useToken } from '../auth/useToken'
import { useNavigate } from 'react-router-dom' // version 5.2.0

import axios from 'axios'
const Register = () => {
  const [token, setToken] = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const onSignUpClicked = async () => {
    const response = await axios.post('http://localhost:4000/signup', {
      email: email,
      password: password,
    })

    const { token } = response.data
    setToken(token)
    navigate('/')
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="userEmail">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="userPassword">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <label htmlFor="userConfirmPassword">
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />
        </label>
      </div>
      <button
        onClick={onSignUpClicked}
        disabled={!email || !password || password !== confirmPassword}
      >
        Sign Up
      </button>

      <p>Already have an account?</p>
    </div>
  )
}

export default Register

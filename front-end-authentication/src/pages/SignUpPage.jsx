import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useToken } from '../auth/useToken'

export const SignUpPage = () => {
  const [token, setToken] = useToken()

  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

  const history = useNavigate()

  const onSignUpClicked = async () => {
    const response = await axios.post('/api/signup', {
      email: emailValue,
      password: passwordValue,
    })
    const { token } = response.data
    setToken(token)
    history('/')
  }

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <label htmlFor="userEmail">
        Email:
        <input
          type="email"
          placeholder="john@example.com"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </label>
      <label htmlFor="userEmail">
        Password:
        <input
          type="password"
          placeholder="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </label>
      <label htmlFor="userEmail">
        Confirm Password:
        <input
          type="password"
          placeholder="Re-enter your password"
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
        />
      </label>
      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>

      <Link to={'/login'}>Already have an account? Log In</Link>
    </div>
  )
}

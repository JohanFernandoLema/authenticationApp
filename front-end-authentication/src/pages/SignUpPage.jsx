import { useState } from 'react'
import { Link } from 'react-router-dom'
export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

  const onSignUpClicked = async () => {
    alert('Sign Up not implemented yet')
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

      <Link to={'/log-in'}>Already have an account? Log In</Link>
    </div>
  )
}

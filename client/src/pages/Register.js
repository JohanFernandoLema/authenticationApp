import { useState } from 'react'
const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const onSignUpClicked = async () => {
    alert('Sign up button not implemented yet')
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
            type="confirmPassword"
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

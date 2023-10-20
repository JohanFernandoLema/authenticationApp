import { useState } from 'react'
import { Link } from 'react-router-dom'

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onLogInClicked = async () => {
    alert('Log In not implemented yet')
  }

  return (
    <div className="content-container">
      <h1>Log-In</h1>
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
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button>
        <Link to={'/'}>Forgot Password?</Link>
      </button>
      <button>
        <Link to={'/signup'}>Register</Link>
      </button>
    </div>
  )
}

import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onLogInClicked = async () => {
    alert('Implementation Missing')
  }
  return (
    <div>
      {error && <div>{error}</div>}
      <label htmlFor="userEmail">
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your email"
        />
      </label>
      <label htmlFor="userPassword">
        Password:
        <input
          type="password"
          placeholder="Input your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button disabled={!(email || password)} onClick={onLogInClicked}>
        Log In
      </button>
      <button>Forgot your password</button>
      <button>Don't have an account? Sign up</button>
    </div>
  )
}
export default Login

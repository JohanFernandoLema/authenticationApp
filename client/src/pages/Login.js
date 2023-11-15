import { useState } from 'react'
import axios from 'axios'
import { useToken } from '../auth/useToken.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [token, setToken] = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const onLogInClicked = async () => {
    const response = await axios.post('http://localhost:4000/login', {
      email: email,
      password: password,
    })
    const { token } = response.data
    setToken(token)
    navigate('/')
    console.log('You have logged in - Welcome')
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

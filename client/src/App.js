import './App.css'
import LoginPage from './pages/Login.js'
import RegisterPage from './pages/Register.js'
import UserInfoPage from './pages/UserInfoPage.js'
import { PrivateRoute } from './auth/PrivateRoute.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <UserInfoPage />
              </PrivateRoute>
            }
          />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

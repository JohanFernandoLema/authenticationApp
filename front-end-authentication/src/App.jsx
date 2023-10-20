import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogInPage } from './pages/LoginPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { SignUpPage } from './pages/SignUpPage'
function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInfoPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

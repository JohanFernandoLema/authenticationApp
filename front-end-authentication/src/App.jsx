import './App.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogInPage } from './pages/LoginPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { SignUpPage } from './pages/SignUpPage'
import { PrivateRoute } from './auth/PrivateRoute'

const App = () => {
  return (
    <div className="page-container">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<UserInfoPage />} />
            </Route>
            <Route exact path="/login" element={<LogInPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}

export default App

import './App.css'
import LoginPage from './pages/Login.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

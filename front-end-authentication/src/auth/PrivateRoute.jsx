import { Navigate, Route } from 'react-router-dom'
import { useUser } from './useUser'
export const PrivateRoute = (props) => {
  const user = useUser() // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  if (!user) return <Navigate to="/login" />
  return <Route {...props} />
}

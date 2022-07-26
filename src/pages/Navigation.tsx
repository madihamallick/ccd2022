import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Forms from '../Components/Form/Form'
import { auth } from '../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'
import Tickets from './Tickets/Tickets'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/ccd2022" replace />
}

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ccd2022" element={<Home />} />
        <Route path="/ccd2022/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route
          path="/ccd2022/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/ccd2022/dashboard/tickets"
          element={<PrivateRoute component={Tickets} />}
        />
      </Routes>
    </Router>
  )
}

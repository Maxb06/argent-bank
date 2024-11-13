import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Layout from './layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [token, user, dispatch]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          {/* Routes protégées */}
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


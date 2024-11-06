import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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

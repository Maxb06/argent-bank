import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

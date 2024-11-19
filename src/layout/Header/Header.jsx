import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import styles from './header.module.scss';
import logo from '../../assets/img/argentBankLogo.png';

/**
 * Renders the header of the application, which includes the logo, navigation and sign out button
 *
 * @returns {React.ReactElement} The header component
 */
const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

/**
 * Handles logging out the user by dispatching the logout action
 */
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo Argent Bank" className={styles.header__logo} />
      </Link>
      <nav className={styles.header__nav}>
        {token && user ? (
          <>
            <Link to="/profile" className={styles.header__nav__item}>
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </Link>
            <button onClick={handleLogout} className={styles.header__nav__item}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className={styles.header__nav__item}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

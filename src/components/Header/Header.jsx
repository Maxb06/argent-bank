import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import styles from './styles.module.scss';
import logo from '../../assets/img/argentBankLogo.png';

const Header = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo Argent Bank" className={styles.header__logo} />
            </Link>
            <nav className={styles.header__nav}>
                {token ? (
                    <>
                        <Link to="/user" className={styles.header__nav__item}>
                            <i className="fa fa-user-circle"></i>
                            User
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

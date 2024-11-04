import styles from './styles.module.scss';
import logo from '../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <img src={logo} alt="Logo Argent Bank" className={styles.header__logo} />
            </Link>
            <div className={styles.header__action}>
                <Link to={'/login'} className={styles.header__action__login}>
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
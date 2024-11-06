import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.scss';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const styledPaths = ['/login', '/user'];
  const isStyledPage = styledPaths.includes(currentPath);

  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${isStyledPage ? styles.loginMain : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

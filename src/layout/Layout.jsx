import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './layout.module.scss';

/**
 * Layout component that provides a common structure for pages, including a Header,
 * main content area, and Footer. It applies specific styles to pages based on the
 * current path, such as '/login' or '/user'.
 *
 * @returns {JSX.Element} A JSX element representing the layout of the page.
 */
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

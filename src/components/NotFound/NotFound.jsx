import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go back to Home page
      </Link>
    </div>
  );
};

export default NotFound;
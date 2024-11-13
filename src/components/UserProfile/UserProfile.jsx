import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const UserProfile = () => {
    const user = useSelector((state) => state.auth.user);
  
    if (!user) {
      return <div className={styles.container}>Loading...</div>;
    }
  
    return (
      <div className={styles.container}>
        <h1>
          Welcome back<br />
          {user.firstName} {user.lastName}!
        </h1>
      </div>
    );
  };
  
  export default UserProfile;

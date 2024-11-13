import { useSelector } from 'react-redux';
import { useState } from 'react';
import EditName from '../EditName/EditName';
import styles from './styles.module.scss';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return <div className={styles.container}>Loading...</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <EditName onCancel={handleCancelEdit} />
      ) : (
        <>
          <h1>
            Welcome back<br />
            {user.firstName} {user.lastName}!
          </h1>
          <button onClick={handleEditClick} className={styles.editButton}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;

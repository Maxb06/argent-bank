import { useSelector } from 'react-redux';
import { useState } from 'react';
import EditName from '../EditName/EditName';
import styles from './styles.module.scss';

/**
 * Component to display the user profile.
 *
 * If the user is not authenticated, the component displays a
 * "Loading..." message. Otherwise, it displays the user's name and
 * an "Edit Name" button. When the button is clicked, the component
 * displays an EditName component to edit the user's name. If the user
 * clicks the "Cancel" button, the component goes back to the default
 * display.
 */
const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const [isEditing, setIsEditing] = useState(false);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!user) {
    return <div className={styles.container}>Loading...</div>;
  }

/**
 * Sets the editing state to true, causing the profile
 * component to display the EditName component.
 */
  const handleEditClick = () => {
    setIsEditing(true);
  };

/**
 * Sets the editing state to false, causing the profile
 * component to stop displaying the EditName component.
 */
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <h1>
        Welcome back<br />
        {isEditing ? (
          <EditName onCancel={handleCancelEdit} />
        ) : (
          <>
            {user.firstName} {user.lastName}!
          </>
        )}
      </h1>
      {!isEditing && (
        <button onClick={handleEditClick} className={styles.editButton}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default UserProfile;

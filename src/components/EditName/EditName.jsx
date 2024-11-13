import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../store/authSlice';
import PropTypes from 'prop-types';
import styles from './editName.module.scss';

const EditName = ({ onCancel }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);

    const handleSave = async () => {
        try {
            await dispatch(updateUserProfile({ firstName, lastName })).unwrap();
            onCancel(); // Retour au mode d'affichage après la save
        } catch (error) {
            console.error('Failed to update user profile:', error);
            // gestion d'erreurs à ajouter ici si besoin
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className={styles.input}
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className={styles.input}
                />
            </div>
            <div className={styles.actions}>
                <button onClick={handleSave} className={styles.button}>
                    Save
                </button>
                <button onClick={onCancel} className={styles.button}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

EditName.propTypes = {
    onCancel: PropTypes.func.isRequired,
  };

export default EditName;
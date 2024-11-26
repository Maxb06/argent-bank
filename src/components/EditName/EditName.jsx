import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../store/authSlice';
import PropTypes from 'prop-types';
import styles from './editName.module.scss';

/**
 * Component to edit the user's first name and last name.
 *
 * Props:
 * - onCancel: callback to trigger when the user exits edit mode.
 *
 * State:
 * - firstName: the user's first name.
 * - lastName: the user's last name.
 * - errorMessage: an error message to display if the update fails.
 *
 * Renders a form with two input fields for the user's first name and last name, and two buttons to save and cancel.
 *
 * When the save button is clicked, it dispatches an action to update the user's profile with the new first name and last name.
 * On successful update, it triggers the onCancel callback to exit edit mode.
 * Logs an error to the console if the update fails.
 */
const EditName = ({ onCancel }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * Handles saving the updated user profile.
     * Dispatches an action to update the user's profile with the new first name and last name.
     * On successful update, it triggers the onCancel callback to exit edit mode.
     * Logs an error to the console if the update fails.
     */
    const handleSave = async () => {
        try {
            await dispatch(updateUserProfile({ firstName, lastName })).unwrap();
            onCancel();
        } catch (error) {
            console.error('Failed to update user profile:', error);
            setErrorMessage(error); 
        }
    };

    return (
        <div className={styles.container}>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
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
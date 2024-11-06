import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../api/axios';
import styles from './styles.module.scss';

const UserProfile = () => {
    const token = useSelector((state) => state.auth.token);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.post('user/profile');
                setUser(response.data.body);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        if (token) {
            fetchUserProfile();
        }
    }, [token]);

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

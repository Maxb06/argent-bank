import UserProfile from '../components/UserProfile/UserProfile';
import AccountList from '../components/AccountList/AccountList';

/**
 * User page component that renders the user profile and account list.
 *
 * This component is responsible for displaying the UserProfile and 
 * AccountList components, providing a comprehensive view of the user's 
 * profile information and their account details.
 *
 * @returns {JSX.Element} A JSX element containing the UserProfile and 
 * AccountList components.
 */
const User = () => {
    return (
        <>
            <UserProfile />
            <AccountList />
        </>
    );
};

export default User;

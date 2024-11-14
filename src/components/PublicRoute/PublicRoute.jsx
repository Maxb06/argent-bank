import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * If the user is not authenticated, render the given children. Otherwise,
 * redirect them to the user page.
 *
 * @param {React.ReactNode} children - The children to render if the
 *                                      user is not authenticated.
 *
 * @returns {React.ReactElement} A React element representing the
 *                               children to render, or a redirect to
 *                               the user page.
 */
const PublicRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    return !token ? children : <Navigate to="/user" />;
};

PublicRoute.propTypes = {
    children: PropTypes.node,
};

export default PublicRoute;

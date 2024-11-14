import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * If the user is authenticated, render the given children. Otherwise,
 * redirect them to the login page.
 *
 * @param {React.ReactNode} children - The children to render if the
 *                                      user is authenticated.
 *
 * @returns {React.ReactElement} A React element representing the
 *                               children to render, or a redirect to
 *                               the login page.
 */
const PrivateRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
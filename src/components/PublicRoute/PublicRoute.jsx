import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    return !token ? children : <Navigate to="/user" />;
};

PublicRoute.propTypes = {
    children: PropTypes.node,
};

export default PublicRoute;

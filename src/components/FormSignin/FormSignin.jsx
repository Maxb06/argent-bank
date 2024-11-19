import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser, fetchUserProfile } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles.module.scss';

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Please enter an email address'),
    password: yup.string().required('Please enter your password'),
});

const FormSignin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });

    /**
     * Handles the form submission.
     * Clears any existing errors, attempts to login and fetch the user profile.
     * If the login or fetch profile fails, logs the error and sets a generic error
     * on the form for display.
     * If the login and fetch profile succeed, redirects to the user profile route.
     * @param {Object} data - The form data.
     */
    const onSubmit = async (data) => {
        clearErrors();
        try {
            await dispatch(loginUser(data)).unwrap();
            await dispatch(fetchUserProfile()).unwrap();
            navigate('/profile');
        } catch (error) {
            console.log(error);
            setError('generic', { type: 'generic', message: 'Invalid email or password' });
        }
    };

    return (
        <section className={styles.container}>
            <i className="fa fa-user-circle fa"></i>
            <h2 className={styles.title}>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Username</label>
                    <input type="email" id="email" {...register('email')} />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password')} />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>
                <div className={styles.inputRemember}>
                    <input type="checkbox" id="remember-me" {...register('rememberMe')} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {errors.generic && <p className={styles.error}>{errors.generic.message}</p>}
                <button type="submit" className={styles.signInButton} disabled={isSubmitting}>
                    Sign In
                </button>
            </form>
        </section>
    );
};

export default FormSignin;
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ image }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <section className={styles.container__content}>
        <p className={styles.container__content__subtitle}>No fees.</p>
        <p className={styles.container__content__subtitle}>
          No minimum deposit.
        </p>
        <p className={styles.container__content__subtitle}>
          High interest rates.
        </p>
        <p className={styles.container__content__subtitle_text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;

import styles from './banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ image, subtitles, description }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <section className={styles.container__content}>
        {subtitles.map((subtitle, index) => (
          <p key={index} className={styles.container__content__subtitle}>
            {subtitle}
          </p>
        ))}
        <p className={styles.container__content__subtitle_text}>
          {description}
        </p>
      </section>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;

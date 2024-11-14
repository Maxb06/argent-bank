import styles from './banner.module.scss';
import PropTypes from 'prop-types';

/**
 * Banner component that displays an image with subtitles and a description.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.image - URL of the background image.
 * @param {Array<string>} props.subtitles - Array of subtitle strings to display.
 * @param {string} props.description - Description text to display.
 *
 * @returns {JSX.Element} A JSX element representing a banner with a background image, subtitles, and description.
 */
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

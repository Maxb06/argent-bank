import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Component to display a feature item.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.image - URL of the image of the feature item.
 * @param {string} props.title - Title of the feature item.
 * @param {string} props.text - Short description of the feature item.
 *
 * @returns {JSX.Element} A JSX element displaying the feature item.
 */
const FeatureItem = ({ image, title, text }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={`${title} Icon`} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureItem;

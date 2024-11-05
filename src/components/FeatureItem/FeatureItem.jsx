import PropTypes from 'prop-types';
import styles from './styles.module.scss';

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

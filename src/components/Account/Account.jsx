import PropTypes from 'prop-types';
import styles from './account.module.scss';

const Account = ({ account, balanceText, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h3 className={styles.container__content__title}>
          {account.title} (x{account.number})
        </h3>
        <p className={styles.container__content__amount}>${account.amount}</p>
        <p className={styles.container__content__balance}>{balanceText}</p>
      </div>
      <div className={styles.container__action}>
        <button className={styles.container__action__button}>{buttonText}</button>
      </div>
    </div>
  );
};

Account.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  balanceText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Account;
import PropTypes from 'prop-types';
import styles from './account.module.scss';

/**
 * Component to display account information.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.account - Account details to display.
 * @param {string} props.account.title - Title of the account.
 * @param {number} props.account.number - Account number.
 * @param {number} props.account.amount - Balance amount of the account.
 *
 * @returns {JSX.Element} A JSX element displaying account information and a button to view transactions.
 */
const Account = ({ account }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h3 className={styles.container__content__title}>
          {account.title} (x{account.number})
        </h3>
        <p className={styles.container__content__amount}>${account.amount}</p>
        <p className={styles.container__content__balance}>Available Balance</p>
      </div>
      <div className={styles.container__action}>
        <button className={styles.container__action__button}>View Transactions</button>
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
};

export default Account;

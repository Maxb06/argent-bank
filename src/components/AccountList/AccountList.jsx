import Account from '../Account/Account';

const accountsData = [
  {
    title: 'Argent Bank Checking',
    amount: 2082.79,
    number: 8349,
  },
  {
    title: 'Argent Bank Savings',
    amount: 10928.42,
    number: 6712,
  },
  {
    title: 'Argent Bank Credit Card',
    amount: 184.30,
    number: 8349,
  },
];

/**
 * A component that renders a list of accounts.
 *
 * This component takes no props and returns a section element
 * containing a list of Account components, each with an account
 * object from the accountsData array as a prop.
 *
 * @returns {ReactElement} A section element containing a list of Account components.
 */

const AccountList = () => {
  return (
    <section>
      {accountsData.map((account, index) => (
        <Account account={account} key={index} />
      ))}
    </section>
  );
};

export default AccountList;

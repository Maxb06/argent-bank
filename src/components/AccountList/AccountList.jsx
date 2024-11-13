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

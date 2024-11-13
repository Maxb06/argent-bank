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
    const balanceText = 'Available Balance';
    const buttonText = 'View Transactions';
  
    return (
      <section>
        {accountsData.map((account, index) => (
          <Account
            account={account}
            balanceText={balanceText}
            buttonText={buttonText}
            key={index}
          />
        ))}
      </section>
    );
  };
  
  export default AccountList;
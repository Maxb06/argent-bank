import Banner from '../components/Banner/Banner';
import bankTree from '../assets/img/bank-tree.jpeg';
import Features from '../components/Features/Features';

/**
 * Home page component that renders the banner and features sections of the website.
 *
 * @returns {JSX.Element} A JSX element containing the Banner and Features components.
 */
const Home = () => {
  const subtitles = ['No fees.', 'No minimum deposit.', 'High interest rates.'];
  const description = 'Open a savings account with Argent Bank today!';

  return (
    <>
      <Banner image={bankTree} subtitles={subtitles} description={description} />
      <Features />
    </>
  );
};

export default Home;
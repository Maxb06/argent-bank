import Banner from '../components/Banner/Banner';
import bankTree from '../assets/img/bank-tree.jpeg';
import Features from '../components/Features/Features';

const Home = () => {
    return (
        <>
          <Banner image={bankTree} />
          <Features />
        </>
      );
    };

export default Home;
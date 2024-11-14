import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './styles.module.scss';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

/**
 * A section that displays the features of the bank
 *
 * @returns A section element with three FeatureItem components
 */
const Features = () => {
  const features = [
    {
      image: iconChat,
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      image: iconMoney,
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      image: iconSecurity,
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          image={feature.image}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
};

export default Features;

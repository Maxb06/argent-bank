import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
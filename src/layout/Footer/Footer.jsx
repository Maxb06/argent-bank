import styles from './footer.module.scss';

/**
 * Footer component that renders the footer section of the page.
 *
 * @returns {JSX.Element} A JSX element representing the footer with copyright information.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
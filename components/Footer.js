import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Link href='kryptonmc.org'>
        Copyright The Krypton Team 26/09/2021 - 2022
      </Link>
    </footer>
  );
}

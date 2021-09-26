import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Krypton</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/resources'>Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

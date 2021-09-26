import Footer from './Footer';
import Nav from './Nav';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
}

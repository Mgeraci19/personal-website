import Navigation from './Navigation';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Michael Geraci</p>
            </footer>
        </>
    );
}

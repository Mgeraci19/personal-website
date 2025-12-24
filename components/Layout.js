import Navigation from './Navigation';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <span>© {new Date().getFullYear()} Michael Geraci</span>
                    <a href="/rss.xml" className={styles.rssLink}>RSS</a>
                </div>
            </footer>
        </>
    );
}

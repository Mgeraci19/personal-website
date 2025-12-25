import Link from 'next/link';
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
                    <Link href="/rss.xml" className={styles.rssLink} prefetch={false}>RSS</Link>
                </div>
            </footer>
        </>
    );
}

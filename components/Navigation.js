import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/projects" className={styles.link}>
                    Projects
                </Link>
                <Link href="/blog" className={styles.link}>
                    Blog
                </Link>
                <Link href="/books" className={styles.link}>
                    Books
                </Link>
                <Link href="/links" className={styles.link}>
                    Links
                </Link>
            </div>
        </nav>
    );
}

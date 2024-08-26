import styles from './page.module.css';
import TestResults from './TestResults';

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <a href="https://php-sqlite.xpressionist.com">PHP / SQLite Test</a>
          <a href="https://node-sqlite.xpressionist.com">Node / SQLite Test</a>
          <a href="https://nextjs-sqlite.xpressionist.com" className={styles.active}>Next.js / SQLite Test</a>
          <a href="https://sveltekit-sqlite.xpressionist.com">SvelteKit / SQLite Test</a>
        </nav>
        <h1 className={styles.title}>Next.js 14.2.6 / SQLite Performance Test</h1>
        <p className={styles.description}>
          Built by <a href="https://x.com/fedeandri">@fedeandri</a> starting from <a
            href="https://x.com/ashleyrudland/status/1826991719646179583"
            target="_blank"
            rel="noopener noreferrer">@ashleyrudland</a>'s PHP code. See the source of this <a
              href="https://github.com/fedeandri/nextjs-sqlite"
              target="_blank"
              rel="noopener noreferrer">Next.js / SQLite Test on Github</a>.
          <br /> From my SQLite tests <strong>PHP+JS writes ~10x faster and reads ~40x faster</strong> than Node based apps.
        </p>
        <TestResults />
      </main>
    </>
  );
}
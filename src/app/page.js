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
            rel="noopener noreferrer">@ashleyrudland</a>'s PHP code. See the <strong>source</strong> of this <a
              href="https://github.com/fedeandri/nextjs-sqlite"
              target="_blank"
              rel="noopener noreferrer">Next.js / SQLite Test on Github</a>.
          <br /> <s>From my SQLite tests <strong>PHP writes are ~10x faster and reads are ~40x faster</strong> than Node.</s>
          <br />NEW RESULTS: <strong>Node writes are ~2x faster</strong> than PHP and <strong>PHP reads are ~1.2x faster</strong> than Node.
          <br />--
          <br />I wanted to run more comprehensive tests, so I added updates and deletes. Then, to test a scenario closer to real life usage, I added indexes, more data variation, and tweaked SQLite for better data durability other than pure performance (thanks to <a href="https://x.com/jasonleowsg" target="_blank" rel="noopener noreferrer">@jasonleowsg</a> for pointing me to <a href="https://x.com/meln1k/status/1813314113705062774" target="_blank" rel="noopener noreferrer">this post</a>). For Node-based apps, I switched from sqlite3 to <a href="https://www.npmjs.com/package/better-sqlite3" target="_blank" rel="noopener noreferrer">better-sqlite3</a> (thanks to <a href="https://x.com/theSlavenIvanov" target="_blank" rel="noopener noreferrer">@theSlavenIvanov</a> for the recommendation), and this really levels the playing field.
        </p>
        <TestResults />
      </main>
    </>
  );
}
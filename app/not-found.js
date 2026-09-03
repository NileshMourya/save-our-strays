import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.wrap}`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>Looks like this little one wandered off.</h1>
      <p className={styles.text}>
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get
        you back to safer ground.
      </p>
      <Link href="/" className="button button-primary">
        Return Home
      </Link>
    </section>
  );
}

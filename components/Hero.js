import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Together,
            <br />
            we can make
            <br />
            <span className={styles.underlineWrap}>
              the streets kinder
              <svg
                className={styles.underline}
                viewBox="0 0 320 24"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 15C60 4 140 2 180 10C220 18 280 20 316 8"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className={styles.subhead}>
            Since 2003, Save Our Strays has been sterilising, vaccinating,
            rescuing and rehoming Mumbai&rsquo;s street dogs and cats &mdash;
            one animal at a time.
          </p>
          <div className={styles.actions}>
            <Link href="/what-we-do" className="button button-primary">
              See our work
            </Link>
            <Link href="/contact" className="button button-outline">
              Get involved
            </Link>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/images/home/hero.svg"
            alt="A rescued street dog cared for by Save Our Strays"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

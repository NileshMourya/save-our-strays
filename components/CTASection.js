import Image from "next/image";
import Link from "next/link";
import { ctaLinks } from "@/data/navigation";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={styles.headline}>
            Change
            <br />a street animal&rsquo;s
            <br />life today!
          </h2>
          <ul className={styles.ctaList}>
            {ctaLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={
                    link.label === "Donate"
                      ? `button button-primary ${styles.ctaButton}`
                      : `button button-outline ${styles.ctaButton}`
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/images/home/cta.svg"
            alt="A street animal helped through Save Our Strays' programmes"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import {
  navigationLinks,
  ctaLinks,
  legalLinks,
  socialLinks,
  contactDetails,
} from "@/data/navigation";
import styles from "./Footer.module.css";

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Save Our Strays</span>
          <p className={styles.tagline}>
            Compassion for Mumbai&rsquo;s street dogs and cats since 2003.
          </p>
          <ul className={styles.socialList}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Explore</h2>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Get involved</h2>
          <ul>
            {ctaLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Reach us</h2>
          <ul className={styles.contactList}>
            <li>{contactDetails.address}</li>
            <li>
              <a href={`mailto:${contactDetails.email}`} className={styles.contactLink}>
                <Mail size={16} aria-hidden="true" /> {contactDetails.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contactDetails.phone}`} className={styles.contactLink}>
                <Phone size={16} aria-hidden="true" /> Helpline: {contactDetails.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>Copyright &copy; Save Our Strays 2026</p>
        <p>Designed by Shwetali Mulik</p>
        <ul className={styles.legalList}>
          {legalLinks.map((link, index) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
              {index < legalLinks.length - 1 && <span aria-hidden="true"> | </span>}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

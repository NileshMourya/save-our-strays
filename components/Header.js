"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import MobileMenu from "@/components/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="Save Our Strays home">
            <span className={styles.logoMark}>SOS</span>
            <span className={styles.logoText}>Save Our Strays</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul>
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            {/* TODO: Connect donation URL/payment gateway later */}
            <a href="#" className={`button button-primary ${styles.donateButton}`}>
              Donate
            </a>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

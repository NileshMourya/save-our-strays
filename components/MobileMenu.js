"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ open, onClose }) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
      closeButtonRef.current?.focus();
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          "a[href], button:not([disabled])"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      />
      <div
        className={styles.panel}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>Menu</span>
          <button
            type="button"
            ref={closeButtonRef}
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile primary">
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  tabIndex={open ? 0 : -1}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO: Connect donation URL/payment gateway later */}
        <a
          href="#"
          className={`button button-primary ${styles.donateButton}`}
          tabIndex={open ? 0 : -1}
          onClick={onClose}
        >
          Donate
        </a>
      </div>
    </div>
  );
}

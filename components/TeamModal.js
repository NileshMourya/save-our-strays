"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./TeamModal.module.css";

export default function TeamModal({ member, onClose }) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const open = Boolean(member);

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

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Close biography"
      />
      <div
        className={styles.panel}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-name"
      >
        <button
          type="button"
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} aria-hidden="true" />
        </button>
        <div className={styles.imageWrap}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="140px"
            className={styles.image}
          />
        </div>
        <h2 id="team-modal-name" className={styles.name}>
          {member.name}
        </h2>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.bio}>{member.fullBio}</p>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import styles from "./TeamCard.module.css";

export default function TeamCard({ member, onReadMore }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 700px) 45vw, (max-width: 1100px) 30vw, 18vw"
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
      <p className={styles.bio}>{member.shortBio}</p>
      <button
        type="button"
        className={styles.readMore}
        onClick={() => onReadMore(member)}
      >
        Read more
      </button>
    </div>
  );
}

import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}) {
  return (
    <div className={`${styles.wrapper} ${align === "center" ? styles.center : ""}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag className={styles.title}>{title}</Tag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

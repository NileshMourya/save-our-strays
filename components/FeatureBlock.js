import Image from "next/image";
import styles from "./FeatureBlock.module.css";

export default function FeatureBlock({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  as: Tag = "h2",
  children,
}) {
  return (
    <div className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.copy}>
        <Tag className={styles.title}>{title}</Tag>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.image}
        />
      </div>
    </div>
  );
}

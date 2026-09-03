import Image from "next/image";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((item, index) => (
        <div
          key={item.src}
          className={`${styles.item} ${styles[item.size] || ""}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            loading={index < 2 ? "eager" : "lazy"}
            sizes="(max-width: 700px) 50vw, 25vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

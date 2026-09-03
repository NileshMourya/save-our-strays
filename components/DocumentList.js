import { FileText, Eye, Download } from "lucide-react";
import styles from "./DocumentList.module.css";

export default function DocumentList({ documents }) {
  return (
    <ul className={styles.list}>
      {documents.map((doc) => (
        <li key={doc.file} className={styles.row}>
          <span className={styles.info}>
            <FileText size={20} aria-hidden="true" className={styles.icon} />
            <span className={styles.title}>{doc.title}</span>
          </span>
          <span className={styles.actions}>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionLink}
            >
              <Eye size={16} aria-hidden="true" />
              View
            </a>
            <a href={doc.file} download className={styles.actionLink}>
              <Download size={16} aria-hidden="true" />
              Download
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
}

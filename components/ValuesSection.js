import { HeartHandshake, ShieldCheck, Sprout } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { guidingValues } from "@/data/values";
import styles from "./ValuesSection.module.css";

const icons = [HeartHandshake, ShieldCheck, Sprout];

export default function ValuesSection() {
  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle title="Our guiding values" />
      <div className={styles.columns}>
        {guidingValues.map((value, index) => {
          const Icon = icons[index];
          return (
            <div key={value.title} className={styles.column}>
              <Icon size={30} strokeWidth={1.6} className={styles.icon} aria-hidden="true" />
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

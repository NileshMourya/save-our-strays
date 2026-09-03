import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import DocumentList from "@/components/DocumentList";
import CTASection from "@/components/CTASection";
import { credentials, auditReports, annualReports } from "@/data/documents";
import styles from "./page.module.css";

export const metadata = {
  title: "Transparency & Reports | Save Our Strays Mumbai",
  description:
    "Save Our Strays' registration certificates, audit reports, balance sheets and annual reports — our commitment to trust and transparency.",
};

export default function AccountabilityPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className="eyebrow">Accountability</p>
        <h1 className={styles.heroTitle}>Trust &amp; Transparency</h1>
        <p className={styles.heroText}>
          Compassion drives our mission &mdash; and accountability sustains
          it. We are committed to maintaining the highest standards of
          transparency in all aspects of our operations, ensuring that every
          contribution is utilised ethically and effectively to improve the
          lives of animals in need. Our financial reports, audit statements,
          and statutory disclosures are shared publicly to reflect our
          integrity and responsible governance. We believe that lasting
          trust is built through openness, consistency, and measurable
          impact.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Credentials" />
        </ScrollReveal>
        <DocumentList documents={credentials} />
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Audit Report & BS" />
        </ScrollReveal>
        <DocumentList documents={auditReports} />
      </section>

      <section className={`container ${styles.section}`}>
        <ScrollReveal as="div">
          <SectionTitle title="Annual Report" />
        </ScrollReveal>
        <DocumentList documents={annualReports} />
      </section>

      <CTASection />
    </>
  );
}

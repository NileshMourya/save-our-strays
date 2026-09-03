import { MapPin, Mail, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { contactDetails } from "@/data/navigation";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Save Our Strays Mumbai",
  description:
    "Get in touch with Save Our Strays Mumbai — registered address, email, helpline and a contact form for adoption, fostering and volunteering enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className="eyebrow">Contact</p>
        <h1 className={styles.heroTitle}>We&rsquo;d love to hear from you</h1>
      </section>

      <section className={`container ${styles.cards}`}>
        <div className={styles.card}>
          <MapPin size={22} aria-hidden="true" className={styles.icon} />
          <h2 className={styles.cardTitle}>Registered Address</h2>
          <p>{contactDetails.address}</p>
        </div>
        <div className={styles.card}>
          <Mail size={22} aria-hidden="true" className={styles.icon} />
          <h2 className={styles.cardTitle}>Email</h2>
          <a href={`mailto:${contactDetails.email}`} className={styles.cardLink}>
            {contactDetails.email}
          </a>
        </div>
        <div className={styles.card}>
          <Phone size={22} aria-hidden="true" className={styles.icon} />
          <h2 className={styles.cardTitle}>Phone</h2>
          <a href={`tel:${contactDetails.phone}`} className={styles.cardLink}>
            Helpline: {contactDetails.phoneDisplay}
          </a>
        </div>
      </section>

      <section className={`container ${styles.formSection}`}>
        <SectionTitle
          title="Send us a message"
          description="Reach out about adoption, fostering, volunteering or anything else — we'll get back to you."
        />
        <ContactForm />
      </section>

      <CTASection />
    </>
  );
}

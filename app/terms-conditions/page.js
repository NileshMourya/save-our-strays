import styles from "../legal.module.css";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for using the Save Our Strays Mumbai website.",
};

export default function TermsConditionsPage() {
  return (
    <section className={`container ${styles.legal}`}>
      <h1 className={styles.title}>Terms &amp; Conditions</h1>
      <p className={styles.updated}>Last updated: 2026</p>

      <p>
        By accessing and using this website, you agree to the following
        terms and conditions. Please read them carefully before browsing or
        using any part of the Save Our Strays (&ldquo;SOS&rdquo;) website.
      </p>

      <h2>Use of content</h2>
      <p>
        All text, photographs and other content on this website belong to
        Save Our Strays or are used with permission, and are intended to
        inform visitors about our mission, programmes and impact. Content
        may not be reproduced or used commercially without our written
        consent.
      </p>

      <h2>Donations</h2>
      <p>
        Donations made to Save Our Strays go towards our sterilisation,
        vaccination, rescue, medical care and feeding programmes for street
        animals in Mumbai. Donation processing is handled through our
        designated payment partner; SOS does not store your payment card
        details.
      </p>

      <h2>Volunteering, fostering and adoption</h2>
      <p>
        Submitting an enquiry through our contact form does not guarantee
        placement as a volunteer, foster or adopter. All such requests are
        reviewed by our team, who may ask for further information before
        confirming next steps.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        While we take reasonable care to keep information on this website
        accurate and up to date, SOS makes no warranties about the
        completeness or accuracy of the content and is not liable for any
        loss arising from its use.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms &amp; Conditions from time to time. Any
        changes will be posted on this page.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:saveourstraysmum@gmail.com">
          saveourstraysmum@gmail.com
        </a>
        .
      </p>
    </section>
  );
}

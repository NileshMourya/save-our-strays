import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Save Our Strays Mumbai.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className={`container ${styles.legal}`}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: 2026</p>

      <p>
        Save Our Strays (&ldquo;SOS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
        respects your privacy and is committed to protecting any personal
        information you share with us through this website.
      </p>

      <h2>Information we collect</h2>
      <p>
        We may collect information you voluntarily provide through our
        contact form or via email and phone, such as your name, email
        address, phone number and the details of your enquiry (for example,
        an adoption, fostering, volunteering or donation-related request).
      </p>

      <h2>How we use your information</h2>
      <p>
        Information you share with us is used solely to respond to your
        enquiry, coordinate volunteering, fostering or adoption, and to keep
        you informed about SOS&rsquo;s work where you have asked to hear
        from us. We do not sell or rent your personal information to third
        parties.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not use tracking cookies for advertising purposes.
        Basic, privacy-respecting analytics may be used to understand how
        visitors use the site so we can improve it.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website may link to third-party sites, including social media
        platforms and donation services. We are not responsible for the
        privacy practices of those third parties, and we encourage you to
        review their own privacy policies.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Privacy Policy or how your
        information is handled, please contact us at{" "}
        <a href="mailto:saveourstraysmum@gmail.com">
          saveourstraysmum@gmail.com
        </a>
        .
      </p>
    </section>
  );
}

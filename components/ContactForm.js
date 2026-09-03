"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !/^[0-9+\-\s()]{7,15}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) errors.message = "Please add a message.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: Connect contact form to backend/email service later
      setSubmitted(true);
      setValues(initialState);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <CheckCircle2 size={28} aria-hidden="true" />
        <div>
          <p className={styles.successTitle}>Thank you for reaching out.</p>
          <p className={styles.successText}>
            We&rsquo;ve received your message. Online submission to our team
            isn&rsquo;t connected yet &mdash; for anything urgent, please call
            or WhatsApp our helpline in the meantime.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.error}>
              {errors.phone}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className={styles.error}>
              {errors.subject}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={`button button-primary ${styles.submit}`}>
        Send Message
      </button>
    </form>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import { useI18n } from "../i18n";

export default function Contact({ embedded = false, sectionId }) {
  const { t } = useI18n();
  const [status, setStatus] = useState("");
  const reduceMotion = useReducedMotion();

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    let valid = true;
    for (const key of ["firstName", "lastName", "organisation", "email", "country", "interest", "message"]) {
      if (!String(form.get(key) || "").trim()) {
        valid = false;
      }
    }
    setStatus(
      valid
        ? t.contactPage.success
        : t.contactPage.error,
    );
  }

  return (
    <>
      {!embedded && <Seo title={t.contactPage.title} description={t.contactPage.description} path="/contact" />}
      <section id={sectionId} className="section contact-section">
        <motion.div
          className="container contact-layout contact-layout-premium"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div className="contact-panel contact-panel-info" variants={revealUp}>
            <p className="eyebrow">Contact Solaris 54</p>
            <h2>{t.nav.contact}</h2>
            <p className="lead">{t.contactPage.lead}</p>
            <a href="mailto:info@solaris54.com" className="contact-email">
              info@solaris54.com
            </a>
            <h2 className="contact-subtitle">{t.common.whatNextTitle}</h2>
            <ul className="contact-next-list">
              <li>{t.contactPage.steps[0]}</li>
              <li>{t.common.responseSla}</li>
              <li>{t.contactPage.steps[1]}</li>
            </ul>
          </motion.div>
          <motion.form className="card form contact-panel contact-form-card" onSubmit={handleSubmit} variants={revealUp}>
            <input name="firstName" placeholder={t.contactPage.placeholders.firstName} required />
            <input name="lastName" placeholder={t.contactPage.placeholders.lastName} required />
            <input name="organisation" placeholder={t.contactPage.placeholders.organisation} required />
            <input name="email" type="email" placeholder={t.contactPage.placeholders.email} required />
            <input name="country" placeholder={t.contactPage.placeholders.country} required />
            <select name="interest" defaultValue="" required>
              <option value="" disabled>
                {t.contactPage.placeholders.interest}
              </option>
              {t.contactPage.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <textarea name="message" placeholder={t.contactPage.placeholders.message} required />
            <button type="submit" className="btn btn-primary">
              {t.common.submit}
            </button>
            <p aria-live="polite" className="meta contact-status">
              {status}
            </p>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}

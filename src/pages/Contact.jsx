import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { revealCard, revealUp } from "../components/motion";
import Seo from "../components/Seo";
import CountrySelect from "../components/CountrySelect";
import { useI18n } from "../i18n";

export default function Contact({ embedded = false, sectionId }) {
  const { lang, t } = useI18n();
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    const form = new FormData(event.currentTarget);
    let valid = true;
    for (const key of ["firstName", "lastName", "organisation", "email", "country", "interest", "message"]) {
      if (!String(form.get(key) || "").trim()) {
        valid = false;
      }
    }
    if (!valid) {
      setStatus(t.contactPage.error);
      return;
    }

    const payload = Object.fromEntries(form.entries());
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus(t.contactPage.success);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(response.ok ? t.contactPage.success : t.contactPage.error);
    } catch {
      setStatus(t.contactPage.error);
    }
  }

  return (
    <>
      {!embedded && <Seo title={t.contactPage.title} description={t.contactPage.description} path="/contact" />}
      <section id={sectionId} className="section contact-section">
        <ScrollReveal className="container contact-layout contact-layout-premium">
          <motion.div className="contact-panel contact-panel-info" variants={revealUp}>
            <p className="eyebrow">{t.common.contactEyebrow}</p>
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
          <motion.form className="card form contact-panel contact-form-card" onSubmit={handleSubmit} variants={revealCard}>
            <input name="firstName" placeholder={t.contactPage.placeholders.firstName} required />
            <input name="lastName" placeholder={t.contactPage.placeholders.lastName} required />
            <input name="organisation" placeholder={t.contactPage.placeholders.organisation} required />
            <input name="email" type="email" placeholder={t.contactPage.placeholders.email} required />
            <CountrySelect
              lang={lang}
              placeholder={t.contactPage.placeholders.country}
              priorityLabel={t.contactPage.countryPriorityLabel}
              allLabel={t.contactPage.countryAllLabel}
            />
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
        </ScrollReveal>
      </section>
    </>
  );
}

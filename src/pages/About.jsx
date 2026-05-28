import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { revealCard, revealUp, staggerContainer } from "../components/motion";
import { useI18n } from "../i18n";

export default function About({ sectionId = "about" }) {
  const { t } = useI18n();

  return (
    <section id={sectionId} className="section about-section">
      <ScrollReveal className="container">
        <motion.p className="eyebrow" variants={revealUp}>
          {t.aboutPage.eyebrow}
        </motion.p>
        <motion.h2 variants={revealUp}>{t.aboutPage.heading}</motion.h2>
        <motion.p className="lead" variants={revealUp}>
          {t.aboutPage.lead}
        </motion.p>
        <motion.p className="meta" variants={revealUp}>
          {t.aboutPage.body}
        </motion.p>
        <motion.blockquote className="about-quote" variants={revealUp}>
          {t.aboutPage.quote}
        </motion.blockquote>
        <motion.div className="about-stats" variants={staggerContainer}>
          {t.aboutPage.stats.map((item) => (
            <motion.article key={`${item.value}-${item.label}`} className="card stat-card" variants={revealCard}>
              <p className="stat-value">{item.value}</p>
              <p className="meta">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

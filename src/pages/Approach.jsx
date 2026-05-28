import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { revealCard, revealUp, staggerContainer } from "../components/motion";
import { useI18n } from "../i18n";

export default function Approach({ sectionId = "approach" }) {
  const { t } = useI18n();

  return (
    <section id={sectionId} className="section approach-section">
      <ScrollReveal className="container">
        <motion.p className="eyebrow" variants={revealUp}>
          {t.approachPage.eyebrow}
        </motion.p>
        <motion.h2 variants={revealUp}>{t.approachPage.heading}</motion.h2>
        <motion.p className="lead" variants={revealUp}>
          {t.approachPage.lead}
        </motion.p>
        <motion.div className="approach-steps" variants={staggerContainer}>
          {t.approachPage.steps.map((step, index) => (
            <motion.article key={step.title} className="card approach-card" variants={revealCard}>
              <p className="tag">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

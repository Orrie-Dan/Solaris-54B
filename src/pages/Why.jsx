import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { revealCard, revealUp, staggerContainer } from "../components/motion";
import { useI18n } from "../i18n";

export default function Why({ sectionId = "why" }) {
  const { t } = useI18n();

  return (
    <section id={sectionId} className="section why-section">
      <ScrollReveal className="container">
        <motion.p className="eyebrow" variants={revealUp}>
          {t.whyPage.eyebrow}
        </motion.p>
        <motion.h2 variants={revealUp}>{t.whyPage.heading}</motion.h2>
        <motion.p className="lead" variants={revealUp}>
          {t.whyPage.lead}
        </motion.p>
        <motion.div className="grid cards-2 why-grid" variants={staggerContainer}>
          {t.whyPage.cards.map((card, index) => (
            <motion.article key={card.title} className="card why-card" variants={revealCard}>
              <p className="tag">0{index + 1}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

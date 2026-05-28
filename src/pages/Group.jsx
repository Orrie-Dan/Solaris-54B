import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { revealCard, revealUp, staggerContainer } from "../components/motion";
import Seo from "../components/Seo";
import { useI18n } from "../i18n";

export default function Group({ embedded = false, sectionId }) {
  const { t } = useI18n();

  return (
    <>
      {!embedded && <Seo title={t.groupPage.title} description={t.groupPage.description} path="/group" />}
      <section id={sectionId} className="section group-section">
        <ScrollReveal className="container group-container">
          <motion.div className="group-intro" variants={revealUp}>
            <p className="eyebrow">{t.groupPage.eyebrow}</p>
            <h2>{t.groupPage.heading}</h2>
            <p className="lead">{t.groupPage.lead}</p>
          </motion.div>

          <motion.div className="group-flow" variants={revealUp}>
            <div className="group-flow-line" aria-hidden="true" />
            <p className="meta">{t.groupPage.subsidiariesLabel}</p>
          </motion.div>

          <motion.div className="grid cards-2 group-grid" variants={staggerContainer}>
            <motion.article className="card group-card group-card-parent" variants={revealCard}>
              <span className="tag">{t.groupPage.parentLabel}</span>
              <h2>Mark Cables FZE</h2>
              <p>{t.groupPage.parent}</p>
            </motion.article>
            <motion.article className="card group-card" variants={revealCard}>
              <span className="tag">{t.groupPage.subsidiariesLabel}</span>
              <h2>MPETS</h2>
              <p>{t.groupPage.mpets}</p>
            </motion.article>
            <motion.article className="card group-card highlight" variants={revealCard}>
              <span className="tag">{t.groupPage.subsidiariesLabel}</span>
              <h2>Solaris 54</h2>
              <p>{t.groupPage.solaris}</p>
            </motion.article>
            <motion.article className="card group-card" variants={revealCard}>
              <span className="tag">{t.groupPage.subsidiariesLabel}</span>
              <h2>Mark Cables Manufacturing</h2>
              <p>{t.groupPage.manufacturing}</p>
            </motion.article>
          </motion.div>

          <motion.div className="group-markets" variants={revealUp}>
            <p className="meta">{t.groupPage.sharedMarketsLabel}</p>
            <div className="markets-active-countries">
              {t.groupPage.sharedMarkets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
            <p className="meta">{t.groupPage.shared}</p>
          </motion.div>
        </ScrollReveal>
      </section>
    </>
  );
}

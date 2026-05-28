import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import { useI18n } from "../i18n";

export default function SSIT({ embedded = false, sectionId }) {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = t.ssitPage.capabilities[activeIndex] ?? t.ssitPage.capabilities[0];
  const contactPath = embedded ? "/#contact" : "/contact";

  return (
    <>
      {!embedded && <Seo title={t.ssitPage.title} description={t.ssitPage.description} path="/ssit" />}
      <section id={sectionId} className="section ssit-section">
        <motion.div
          className="container ssit-container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div className="ssit-intro" variants={revealUp}>
            <p className="eyebrow">{t.ssitPage.platformEyebrow}</p>
            <p className="ssit-platform-tag">{t.ssitPage.platformSubheading}</p>
            <h2>{t.ssitPage.heading}</h2>
            <p className="lead">{t.ssitPage.platformLead}</p>
          </motion.div>

          <motion.div className="ssit-split" variants={revealUp}>
            <div className="ssit-split-nav" role="tablist" aria-label="SSIT capabilities">
              {t.ssitPage.capabilities.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.title}
                    type="button"
                    className={`ssit-split-item ${isActive ? "is-active" : ""}`}
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="ssit-split-index">0{index + 1}</span>
                    <span className="ssit-split-label">
                      <strong>{item.title}</strong>
                      <em>{item.tag}</em>
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.article
              key={activeCapability.title}
              className="ssit-split-panel"
              role="tabpanel"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="tag">{activeCapability.tag}</p>
              <h2>{activeCapability.title}</h2>
              <p className="ssit-split-summary">{activeCapability.points[0]}</p>
              <p className="ssit-split-summary muted">{activeCapability.points[1]}</p>
              <ul className="ssit-split-metrics">
                <li>{activeCapability.points[0]}</li>
                <li>{activeCapability.points[1]}</li>
                <li>{activeCapability.points[2]}</li>
              </ul>
              <div className="ssit-split-signals" aria-hidden="true">
                {t.ssitPage.architecture.slice(0, 3).map((node) => (
                  <span key={node}>{node}</span>
                ))}
              </div>
              <Link className="ssit-split-link" to={contactPath}>
                {t.ssitPage.ctaButton} →
              </Link>
            </motion.article>
          </motion.div>
          <motion.div className="ssit-cta-band" variants={revealUp}>
            <h3>{t.ssitPage.ctaTitle}</h3>
            <p className="meta">{t.ssitPage.ctaLead}</p>
            <Link className="btn btn-primary" to={contactPath}>{t.ssitPage.ctaButton}</Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

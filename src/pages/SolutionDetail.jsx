import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import { services } from "../data";
import { useI18n } from "../i18n";

export default function SolutionDetail() {
  const { slug } = useParams();
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section">
        <div className="container">
          <h1>{t.common.serviceNotFound}</h1>
          <Link to="/solutions" className="btn btn-primary">
            {t.common.backToSolutions}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo title={`${service.title[lang]} | Solaris 54`} description={service.outcome[lang]} path={`/solutions/${slug}`} />
      <section className="section solution-detail-section">
        <motion.div
          className="container solution-detail-container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.article
            className="solution-detail-hero-card"
            variants={revealUp}
            style={{ "--service-image": `url(${service.image})` }}
          >
            <div className="solution-detail-hero-media" aria-hidden="true" />
            <div className="solution-detail-hero-overlay">
              <p className="eyebrow">{t.common.serviceDetail}</p>
              <h1>{service.title[lang]}</h1>
              <p className="lead">{service.outcome[lang]}</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  {t.common.discussThisService}
                </Link>
                <Link to="/solutions" className="btn btn-secondary">
                  {t.common.backToSolutions}
                </Link>
              </div>
            </div>
          </motion.article>

          <motion.div className="solution-detail-grid" variants={staggerContainer}>
            <motion.article className="card solution-detail-panel" variants={revealUp}>
              <p className="eyebrow">{t.common.ssitComponent}</p>
              <h2>{service.ssit[lang]}</h2>
              <p className="meta">{service.clients[lang]}</p>
            </motion.article>
            <motion.article className="card solution-detail-panel" variants={revealUp}>
              <p className="eyebrow">{t.common.includes}</p>
              <ul className="solution-detail-list">
                {service.deliverables[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import SolutionProductCatalog from "../components/SolutionProductCatalog";
import SolutionUseCases from "../components/SolutionUseCases";
import { getServiceBySlug } from "../data";
import { useI18n } from "../i18n";

function SsitSunIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function SolutionDetail() {
  const { slug } = useParams();
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const service = getServiceBySlug(slug);

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

  const hasCatalog = Boolean(service.catalog);

  return (
    <>
      <Seo title={`${service.title[lang]} | Solaris 54`} description={service.body[lang]} path={`/solutions/${slug}`} />
      <section className="section solution-detail-section">
        <motion.div
          className="container solution-detail-container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.article
            className={`solution-detail-hero-card${service.highlight ? " solution-detail-hero-card--highlight" : ""}`}
            variants={revealUp}
            style={{ "--service-image": `url(${service.image})` }}
          >
            <div className="solution-detail-hero-media" aria-hidden="true" />
            <div className="solution-detail-hero-overlay">
              <p className="solution-ssit-badge solution-ssit-badge--on-dark">
                <SsitSunIcon />
                <span>
                  {t.common.ssitPrefix} {service.ssit[lang]}
                </span>
              </p>
              <h1>{service.title[lang]}</h1>
              <p className="lead">{service.body[lang]}</p>
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

          <motion.div className="solution-detail-body" variants={revealUp}>
            {hasCatalog ? (
              <>
                <section className="solution-detail-block">
                  <p className="eyebrow solution-detail-eyebrow">{t.common.solutionOverview}</p>
                  <h2 className="solution-detail-block-title">{t.common.whatWeDeliver}</h2>
                  <div className="solution-detail-tags">
                    {service.tags[lang].map((tag) => (
                      <span key={tag} className="solution-detail-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="solution-detail-bullets">
                    {service.bullets[lang].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="solution-detail-block">
                  <p className="eyebrow solution-detail-eyebrow">{t.common.impact}</p>
                  <h2 className="solution-detail-block-title">{t.common.problemsWeSolve}</h2>
                  <SolutionUseCases useCases={service.catalog.useCases} />
                </section>

                <section className="solution-detail-block">
                  <p className="eyebrow solution-detail-eyebrow">{t.common.productCatalog}</p>
                  <h2 className="solution-detail-block-title">{t.common.ourProductRange}</h2>
                  <SolutionProductCatalog catalog={service.catalog} solutionSlug={slug} />
                </section>

                <div className="solution-detail-cta-band">
                  <h3>{t.common.catalogCtaTitle}</h3>
                  <p className="meta">{t.common.catalogCtaLead}</p>
                  <Link className="btn btn-primary" to="/contact">
                    {t.common.discussThisService}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="solution-detail-tags">
                  {service.tags[lang].map((tag) => (
                    <span key={tag} className="solution-detail-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="solution-detail-bullets-title">{t.common.includes}</h2>
                <ul className="solution-detail-bullets">
                  {service.bullets[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { contentFade, revealUp } from "../components/motion";
import Seo from "../components/Seo";
import { services } from "../data";
import { useI18n } from "../i18n";

export default function Solutions({ embedded = false, sectionId }) {
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const pageSize = 3;
  const pages = useMemo(() => {
    const result = [];
    for (let index = 0; index < services.length; index += pageSize) {
      result.push(services.slice(index, index + pageSize));
    }
    return result;
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeLocalIndex, setActiveLocalIndex] = useState(0);
  const visibleServices = pages[currentPage] ?? [];
  const totalPages = pages.length;

  function goToPage(pageIndex) {
    setCurrentPage(pageIndex);
    setActiveLocalIndex(0);
  }

  return (
    <>
      {!embedded && <Seo title={t.solutionsPage.title} description={t.solutionsPage.description} path="/solutions" />}
      <section id={sectionId} className="section solutions-section">
        <ScrollReveal className="container solutions-container">
          <motion.h2 className="solutions-heading" variants={revealUp}>{t.solutionsPage.heading}</motion.h2>
          <motion.p className="lead solutions-lead" variants={revealUp}>
            {t.solutionsPage.lead}
          </motion.p>
          <motion.div className="solutions-showcase-wrap" variants={revealUp}>
            <button
              type="button"
              className="solutions-side-nav solutions-side-nav-prev"
              onClick={() => goToPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              aria-label="Previous solution cards"
            >
              ‹
            </button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`solutions-page-${currentPage}`}
                className="solutions-showcase"
                initial={reduceMotion ? false : contentFade.initial}
                animate={reduceMotion ? undefined : contentFade.animate}
                exit={reduceMotion ? undefined : contentFade.exit}
              >
                {visibleServices.map((service, index) => (
                  <motion.article
                    className={`solution-panel ${activeLocalIndex === index ? "is-active" : ""}`}
                    key={service.slug}
                    style={{ "--service-image": `url(${service.image})` }}
                    onMouseEnter={() => setActiveLocalIndex(index)}
                    onFocusCapture={() => setActiveLocalIndex(index)}
                    initial={reduceMotion ? false : contentFade.initial}
                    animate={reduceMotion ? undefined : contentFade.animate}
                    transition={{
                      ...contentFade.animate.transition,
                      delay: reduceMotion ? 0 : 0.07 * index,
                    }}
                  >
                    <div className="solution-panel-media" aria-hidden="true" />
                    <div className="solution-panel-content">
                      <p className="ssit-badge">{t.common.poweredBySsit}</p>
                      <p className="solution-ssit-map">{t.common.ssitLayer}: {service.ssit[lang]}</p>
                      <h2>{service.title[lang]}</h2>
                      <p className="solution-panel-outcome">{service.outcome[lang]}</p>
                      <Link className="card-link solution-panel-link" to={`/solutions/${service.slug}`}>
                        {t.common.readMore}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              className="solutions-side-nav solutions-side-nav-next"
              onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              aria-label="Next solution cards"
            >
              ›
            </button>
          </motion.div>
        </ScrollReveal>
      </section>
    </>
  );
}

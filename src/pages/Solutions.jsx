import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { contentFade, revealUp } from "../components/motion";
import Seo from "../components/Seo";
import { services } from "../data";
import { useI18n } from "../i18n";

const SLIDE_INTERVAL_MS = 3000;
const PAGE_SIZE = 3;

export default function Solutions({ embedded = false, sectionId }) {
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pages = useMemo(() => {
    const result = [];
    for (let index = 0; index < services.length; index += PAGE_SIZE) {
      result.push(services.slice(index, index + PAGE_SIZE));
    }
    return result;
  }, []);

  const currentPage = Math.floor(slideIndex / PAGE_SIZE);
  const activeLocalIndex = slideIndex % PAGE_SIZE;
  const visibleServices = pages[currentPage] ?? [];
  const totalPages = pages.length;

  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % services.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion, isPaused]);

  function goToPage(pageIndex) {
    setSlideIndex(pageIndex * PAGE_SIZE);
  }

  function goToSlide(index) {
    setSlideIndex(index);
  }

  return (
    <>
      {!embedded && <Seo title={t.solutionsPage.title} description={t.solutionsPage.description} path="/solutions" />}
      <section id={sectionId} className="section solutions-section">
        <ScrollReveal className="container solutions-container">
          <motion.p className="eyebrow solutions-eyebrow" variants={revealUp}>
            {t.solutionsPage.eyebrow}
          </motion.p>
          <motion.h2 className="solutions-heading" variants={revealUp}>
            {t.solutionsPage.heading}
          </motion.h2>
          <motion.p className="lead solutions-lead" variants={revealUp}>
            {t.solutionsPage.lead}
          </motion.p>
          <motion.div
            className="solutions-showcase-wrap"
            variants={revealUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <button
              type="button"
              className="solutions-side-nav solutions-side-nav-prev"
              onClick={() => goToPage((currentPage - 1 + totalPages) % totalPages)}
              aria-label={t.common.slideshowPrev}
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
                    onMouseEnter={() => goToSlide(currentPage * PAGE_SIZE + index)}
                    onFocusCapture={() => goToSlide(currentPage * PAGE_SIZE + index)}
                    initial={reduceMotion ? false : contentFade.initial}
                    animate={reduceMotion ? undefined : contentFade.animate}
                    transition={{
                      ...contentFade.animate.transition,
                      delay: reduceMotion ? 0 : 0.07 * index,
                    }}
                  >
                    <div className="solution-panel-media" aria-hidden="true" />
                    <div className="solution-panel-content">
                      <p className="solution-ssit-map">
                        {t.common.ssitPrefix} {service.ssit[lang]}
                      </p>
                      <h2>{service.title[lang]}</h2>
                      <p className="solution-panel-outcome">{service.body[lang]}</p>
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
              onClick={() => goToPage((currentPage + 1) % totalPages)}
              aria-label={t.common.slideshowNext}
            >
              ›
            </button>
            <div className="solutions-slideshow-dots" role="tablist" aria-label={t.common.slideshowLabel}>
              {services.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={`${t.common.goToSolution} ${service.title[lang]}`}
                  className={`solutions-slideshow-dot${slideIndex === index ? " is-active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </section>
    </>
  );
}

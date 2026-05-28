import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import Contact from "./Contact";
import Group from "./Group";
import Markets from "./Markets";
import Solutions from "./Solutions";
import SSIT from "./SSIT";
import { useI18n } from "../i18n";

export default function Home() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title={t.home.title}
        description={t.home.description}
        path="/"
      />
      <section className="hero">
        <motion.div
          className="container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p className="eyebrow" variants={revealUp}>
            {t.home.eyebrow}
          </motion.p>
          <motion.h1 variants={revealUp}>
            {t.home.headline}
          </motion.h1>
          <motion.p className="lead" variants={revealUp}>
            {t.home.lead}
          </motion.p>
          <motion.div className="hero-actions" variants={revealUp}>
            <Link className="btn btn-primary" to="/#contact">
              {t.common.discussProject}
            </Link>
            <Link className="btn btn-secondary" to="/#solutions">
              {t.nav.solutions}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="section"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div className="container proof-strip">
          <div>{t.home.proof[0]}</div>
          <div>{t.home.proof[1]}</div>
          <div>{t.home.proof[2]}</div>
          <div>{t.common.responseSla}</div>
        </div>
      </motion.section>

      <Solutions embedded sectionId="solutions" />
      <SSIT embedded sectionId="ssit" />
      <Markets embedded sectionId="markets" />
      <Group embedded sectionId="group" />
      <Contact embedded sectionId="contact" />
    </>
  );
}

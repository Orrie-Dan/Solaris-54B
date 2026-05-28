import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroStagger, revealUp } from "../components/motion";
import Seo from "../components/Seo";
import About from "./About";
import Approach from "./Approach";
import Contact from "./Contact";
import Group from "./Group";
import Markets from "./Markets";
import Solutions from "./Solutions";
import SSIT from "./SSIT";
import Ticker from "./Ticker";
import Why from "./Why";
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
          animate={reduceMotion ? undefined : "visible"}
          variants={heroStagger}
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
          <motion.div className="hero-metrics" variants={revealUp}>
            {t.common.heroMetrics.map((item) => (
              <div key={`${item.value}-${item.label}`}>
                <div className="hm-num">{item.value}</div>
                <div className="hm-label">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Ticker />
      <About sectionId="about" />
      <Solutions embedded sectionId="solutions" />
      <SSIT embedded sectionId="smart" />
      <Markets embedded sectionId="markets" />
      <Why sectionId="why" />
      <Approach sectionId="approach" />
      <Group embedded sectionId="group" />
      <Contact embedded sectionId="contact" />
    </>
  );
}

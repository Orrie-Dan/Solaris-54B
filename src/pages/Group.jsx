import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { revealUp } from "../components/motion";
import Seo from "../components/Seo";
import { useI18n } from "../i18n";

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  );
}

export default function Group({ embedded = false, sectionId }) {
  const { t } = useI18n();
  const g = t.groupPage;

  return (
    <>
      {!embedded && <Seo title={g.title} description={g.description} path="/group" />}
      <section id={sectionId} className="section group-section">
        <ScrollReveal className="container group-container">
          <div className="group-layout">
            <motion.div className="group-copy" variants={revealUp}>
              <p className="eyebrow">{g.eyebrow}</p>
              <h2 className="group-title">
                {g.headingBefore}
                <em>{g.headingHighlight}</em>
                {g.headingAfter}
              </h2>
              <p className="group-body">{g.body1}</p>
              <p className="group-body">{g.body2}</p>

              <div className="group-links">
                <div className="group-link">
                  <div className="gl-icon">
                    <LightningIcon />
                  </div>
                  <div>
                    <div className="gl-title">{g.mpetsLinkTitle}</div>
                    <div className="gl-sub">{g.mpetsLinkSub}</div>
                  </div>
                </div>
                <div className="group-link">
                  <div className="gl-icon">
                    <GlobeIcon />
                  </div>
                  <div>
                    <div className="gl-title">{g.parentLinkTitle}</div>
                    <div className="gl-sub">{g.parentLinkSub}</div>
                  </div>
                </div>
              </div>

              <div className="group-cta">
                <Link to="/#contact" className="btn btn-secondary">
                  {g.cta}
                </Link>
              </div>
            </motion.div>

            <motion.div className="org-chart" variants={revealUp}>
              <div className="org-node">
                <div className="org-dot" aria-hidden="true" />
                <div>
                  <div className="org-name">{g.orgParentName}</div>
                  <div className="org-sub">{g.orgParentSub}</div>
                </div>
              </div>
              <div className="org-node org-node--indent">
                <div className="org-dot" aria-hidden="true" />
                <div>
                  <div className="org-name org-name--muted">MPETS</div>
                  <div className="org-sub">{g.orgMpetsSub}</div>
                </div>
              </div>
              <div className="org-node org-node--indent org-node--active">
                <div className="org-dot" aria-hidden="true" />
                <div>
                  <div className="org-name">Solaris 54</div>
                  <div className="org-sub">
                    {g.orgSolarisSub}
                    <strong className="org-sub-highlight">{g.orgSolarisHq}</strong>
                  </div>
                </div>
              </div>
              <div className="org-shared">
                <p>{g.shared}</p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

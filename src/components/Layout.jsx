import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";

function LanguageToggle() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="lang-wrap" role="group" aria-label="Language toggle">
      <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")} aria-label="Switch to English">
        {t.common.languageEn}
      </button>
      <button className={`lang-btn ${lang === "fr" ? "active" : ""}`} onClick={() => setLang("fr")} aria-label="Passer en francais">
        {t.common.languageFr}
      </button>
    </div>
  );
}

export default function Layout({ children }) {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  function scrollToSection(sectionId, behavior = "smooth") {
    const target = document.getElementById(sectionId);
    if (!target) return false;
    const top = target.getBoundingClientRect().top + window.scrollY - 86;
    window.scrollTo({ top: Math.max(0, top), behavior });
    return true;
  }

  function handleSectionNav(event, sectionId) {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }
    navigate(`/#${sectionId}`);
    scrollToSection(sectionId);
  }

  function handleHomeNav(event) {
    event.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const sectionId = location.hash.replace("#", "");
    const firstAttempt = scrollToSection(sectionId, "auto");
    if (firstAttempt) return;
    const timeout = setTimeout(() => {
      scrollToSection(sectionId, "auto");
    }, 120);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <motion.header
        className={`topbar ${isScrolled ? "scrolled" : ""}`}
        animate={
          reduceMotion
            ? {}
            : {
                paddingTop: isScrolled ? 10 : 14,
                paddingBottom: isScrolled ? 10 : 14,
                boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,.24)" : "0 0 0 rgba(0,0,0,0)",
              }
        }
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <Link to="/" className="brand" onClick={handleHomeNav}>
          SOLARIS <span>54</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/" onClick={handleHomeNav}>{t.nav.home}</Link>
          <Link to="/#solutions" onClick={(event) => handleSectionNav(event, "solutions")}>{t.nav.solutions}</Link>
          <Link to="/#ssit" onClick={(event) => handleSectionNav(event, "ssit")}>{t.nav.ssit}</Link>
          <Link to="/#markets" onClick={(event) => handleSectionNav(event, "markets")}>{t.nav.markets}</Link>
          <Link to="/#group" onClick={(event) => handleSectionNav(event, "group")}>{t.nav.group}</Link>
          <Link to="/#contact" onClick={(event) => handleSectionNav(event, "contact")}>{t.nav.contact}</Link>
        </nav>
        <div className="topbar-right">
          <LanguageToggle />
          <Link to="/#contact" className="btn btn-primary" onClick={(event) => handleSectionNav(event, "contact")}>
            {t.nav.cta}
          </Link>
        </div>
      </motion.header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container site-footer-main">
          <div className="site-footer-brand-col">
            <p className="footer-brand">
              SOLARIS <span>54</span>
            </p>
            <p className="site-footer-lead">{t.home.eyebrow}</p>
            <p className="site-footer-meta">{t.groupPage.description}</p>
          </div>

          <div className="site-footer-links-col">
            <p className="site-footer-title">{t.nav.solutions}</p>
            <div className="site-footer-links">
              <Link to="/">{t.nav.home}</Link>
              <Link to="/#solutions" onClick={(event) => handleSectionNav(event, "solutions")}>{t.nav.solutions}</Link>
              <Link to="/#ssit" onClick={(event) => handleSectionNav(event, "ssit")}>{t.nav.ssit}</Link>
              <Link to="/#markets" onClick={(event) => handleSectionNav(event, "markets")}>{t.nav.markets}</Link>
              <Link to="/#group" onClick={(event) => handleSectionNav(event, "group")}>{t.nav.group}</Link>
              <Link to="/#contact" onClick={(event) => handleSectionNav(event, "contact")}>{t.nav.contact}</Link>
            </div>
          </div>

          <div className="site-footer-contact-col">
            <p className="site-footer-title">{t.nav.contact}</p>
            <a href="mailto:info@solaris54.com" className="site-footer-email">
              info@solaris54.com
            </a>
            <p className="site-footer-meta">{t.contactPage.lead}</p>
          </div>
        </div>
        <div className="container site-footer-bottom">
          <p>© {new Date().getFullYear()} Solaris 54. All rights reserved.</p>
          <Link to="/#contact" onClick={(event) => handleSectionNav(event, "contact")}>{t.nav.cta}</Link>
        </div>
      </footer>
    </div>
  );
}

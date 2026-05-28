import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useI18n } from "../i18n";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <>
      <Seo title={t.notFoundPage.title} description={t.notFoundPage.description} path="/404" />
      <section className="section">
        <div className="container">
          <h1>{t.common.notFoundTitle}</h1>
          <Link to="/" className="btn btn-primary">
            {t.common.backToHome}
          </Link>
        </div>
      </section>
    </>
  );
}

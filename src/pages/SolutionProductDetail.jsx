import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ProductDetailContent, ProductGallery } from "../components/SolutionProductParts";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import { getServiceProduct } from "../data";
import { useI18n } from "../i18n";

export default function SolutionProductDetail() {
  const { slug, productId } = useParams();
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const match = getServiceProduct(slug, productId);

  if (!match) {
    return (
      <section className="section solution-detail-section">
        <div className="container">
          <h1>{t.common.productNotFound}</h1>
          <Link to={`/solutions/${slug ?? ""}`} className="btn btn-primary">
            {t.common.backToSolution}
          </Link>
        </div>
      </section>
    );
  }

  const { service, product } = match;
  const solutionPath = `/solutions/${slug}`;
  const productPath = `${solutionPath}/${product.id}`;
  const relatedProducts = service.catalog.products.filter(
    (item) => item.family === product.family && item.id !== product.id,
  );

  return (
    <>
      <Seo
        title={`${product.name[lang]} | ${service.title[lang]} | Solaris 54`}
        description={product.description[lang]}
        path={productPath}
      />
      <section className="section solution-detail-section">
        <motion.div
          className="container solution-detail-container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.nav className="solution-breadcrumb" aria-label="Breadcrumb" variants={revealUp}>
            <Link to="/solutions">{t.nav.solutions}</Link>
            <span aria-hidden="true">/</span>
            <Link to={solutionPath}>{service.title[lang]}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name[lang]}</span>
          </motion.nav>

          <motion.article className="solution-product-detail" variants={revealUp}>
            <div className="solution-catalog-detail-layout">
              <ProductGallery product={product} name={product.name[lang]} />
              <div className="solution-catalog-detail-copy">
                <h1 className="solution-catalog-panel-title">{product.name[lang]}</h1>
                <ProductDetailContent product={product} lang={lang} t={t} />
                <div className="hero-actions">
                  <Link to="/contact" className="btn btn-primary">
                    {t.common.discussThisProduct}
                  </Link>
                  <Link to={solutionPath} className="btn btn-secondary">
                    {t.common.backToSolution}
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {relatedProducts.length > 0 && (
            <motion.section className="solution-detail-block solution-related-products" variants={revealUp}>
              <p className="eyebrow solution-detail-eyebrow">{t.common.relatedProducts}</p>
              <h2 className="solution-detail-block-title">{t.common.moreInThisRange}</h2>
              <div className="solution-catalog-cards solution-catalog-cards--compact">
                {relatedProducts.map((item) => (
                  <article key={item.id} className="solution-catalog-card">
                    {item.image && (
                      <Link className="solution-catalog-card-media" to={`/solutions/${slug}/${item.id}`}>
                        <img src={item.image} alt={item.name[lang]} loading="lazy" decoding="async" />
                      </Link>
                    )}
                    <div className="solution-catalog-card-body">
                      <h3 className="solution-catalog-card-name">
                        <Link to={`/solutions/${slug}/${item.id}`}>{item.name[lang]}</Link>
                      </h3>
                      <Link className="solution-catalog-card-link" to={`/solutions/${slug}/${item.id}`}>
                        {t.common.viewProductDetails} →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </section>
    </>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export default function SolutionProductCatalog({ catalog, solutionSlug }) {
  const { lang, t } = useI18n();
  const defaultFamily = catalog.families[0]?.id ?? "mb-9";
  const [activeFamily, setActiveFamily] = useState(defaultFamily);
  const familyProducts = useMemo(
    () => catalog.products.filter((product) => product.family === activeFamily),
    [catalog.products, activeFamily],
  );

  return (
    <div className="solution-catalog-grid-wrap">
      <div className="solution-catalog-family-tabs" role="tablist" aria-label={t.common.productFamilies}>
        {catalog.families.map((family) => {
          const isActive = family.id === activeFamily;
          return (
            <button
              key={family.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`solution-catalog-family-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveFamily(family.id)}
            >
              {family.label[lang]}
            </button>
          );
        })}
      </div>

      {catalog.families
        .filter((family) => family.id === activeFamily)
        .map((family) => (
          <p key={family.id} className="solution-catalog-family-summary">
            {family.summary?.[lang]}
          </p>
        ))}

      <div className="solution-catalog-cards" role="tabpanel">
        {familyProducts.map((product) => (
          <article key={product.id} className="solution-catalog-card">
            {product.image && (
              <Link
                className="solution-catalog-card-media"
                to={`/solutions/${solutionSlug}/${product.id}`}
              >
                <img src={product.image} alt={product.name[lang]} loading="lazy" decoding="async" />
              </Link>
            )}
            <div className="solution-catalog-card-body">
              {product.tier != null && (
                <span className="solution-catalog-card-tier">
                  {t.common.tier} {product.tier}
                </span>
              )}
              <h3 className="solution-catalog-card-name">
                <Link to={`/solutions/${solutionSlug}/${product.id}`}>{product.name[lang]}</Link>
              </h3>
              <p className="solution-catalog-card-tagline">{product.tagline[lang]}</p>
              <div className="solution-catalog-card-specs">
                {product.specs[lang].slice(0, 4).map((spec) => (
                  <span key={spec} className="solution-catalog-spec">
                    {spec}
                  </span>
                ))}
              </div>
              <Link className="solution-catalog-card-link" to={`/solutions/${solutionSlug}/${product.id}`}>
                {t.common.viewProductDetails} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

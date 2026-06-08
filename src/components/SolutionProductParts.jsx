import { useEffect, useMemo, useState } from "react";

function getProductImages(product) {
  const candidates = [
    ...(product.gallery ?? []),
    ...(product.image ? [product.image] : []),
  ];

  const seen = new Set();
  return candidates.filter((src) => {
    if (!src || seen.has(src)) {
      return false;
    }
    seen.add(src);
    return true;
  });
}

export function ProductGallery({ product, name }) {
  const images = useMemo(() => getProductImages(product), [product]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  if (!activeImage) {
    return null;
  }

  return (
    <div className="solution-catalog-gallery">
      <div className="solution-catalog-gallery-main">
        <img src={activeImage} alt={name} loading="lazy" decoding="async" />
      </div>
      {images.length > 1 && (
        <div className="solution-catalog-gallery-thumbs" role="list" aria-label="Product images">
          {images.map((src, index) => (
            <button
              key={`${product.id}-${src}`}
              type="button"
              role="listitem"
              className={`solution-catalog-gallery-thumb${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Image ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductDetailContent({ product, lang, t }) {
  return (
    <div className="solution-catalog-panel-body">
      {product.category && (
        <p className="solution-catalog-category">{product.category[lang]}</p>
      )}
      <p className="solution-catalog-tagline">{product.tagline[lang]}</p>
      <p className="solution-catalog-description">{product.description[lang]}</p>

      <div className="solution-catalog-detail-grid">
        <div className="solution-catalog-detail-col">
          <h3 className="solution-catalog-detail-heading">{t.common.keyFeatures}</h3>
          <ul className="solution-catalog-detail-list">
            {product.features[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="solution-catalog-detail-col">
          <h3 className="solution-catalog-detail-heading">{t.common.idealFor}</h3>
          <ul className="solution-catalog-detail-list">
            {product.idealFor[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {product.applications && (
        <div className="solution-catalog-detail-block">
          <h3 className="solution-catalog-detail-heading">{t.common.applications}</h3>
          <ul className="solution-catalog-detail-list">
            {product.applications[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {product.benefits && (
        <div className="solution-catalog-detail-block">
          <h3 className="solution-catalog-detail-heading">{t.common.benefits}</h3>
          <ul className="solution-catalog-benefits">
            {product.benefits[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

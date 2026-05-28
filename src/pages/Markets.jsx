import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { useEffect, useMemo, useState } from "react";
import { revealUp, staggerContainer, viewportOnce } from "../components/motion";
import Seo from "../components/Seo";
import { markets } from "../data";
import { useI18n } from "../i18n";

const WORLD_GEOJSON_URL = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
const MAP_VIEWBOX_WIDTH = 920;
const MAP_VIEWBOX_HEIGHT = 500;

const COUNTRY_GROUP_ALIASES = {
  "uae": ["United Arab Emirates"],
  "drc": ["Democratic Republic of the Congo"],
  "cote d'ivoire": ["Ivory Coast"],
  "canaries": ["Spain"],
  "caribbean": ["Haiti", "Jamaica", "Cuba", "Dominican Republic", "Trinidad and Tobago"],
  "indian ocean": ["Madagascar", "Mauritius", "Seychelles", "Comoros", "Maldives"],
  "pacific islands": ["Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa"],
};

function normalizeCountry(value) {
  return value.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
}

function parseMarketCountries(countries) {
  return countries
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .flatMap((country) => COUNTRY_GROUP_ALIASES[normalizeCountry(country)] ?? [country]);
}

export default function Markets({ embedded = false, sectionId }) {
  const { lang, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const [hoveredRegionIndex, setHoveredRegionIndex] = useState(null);
  const [geographies, setGeographies] = useState([]);
  const [isMapLoading, setIsMapLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadWorldMap() {
      try {
        const response = await fetch(WORLD_GEOJSON_URL);
        const data = await response.json();
        if (isMounted) {
          setGeographies(data.features ?? []);
        }
      } catch {
        if (isMounted) {
          setGeographies([]);
        }
      } finally {
        if (isMounted) {
          setIsMapLoading(false);
        }
      }
    }

    loadWorldMap();
    return () => {
      isMounted = false;
    };
  }, []);

  const activeRegionIndex = hoveredRegionIndex ?? selectedRegionIndex;
  const activeMarket = markets[activeRegionIndex];
  const activeCountries = useMemo(() => parseMarketCountries(activeMarket.countries), [activeMarket]);
  const activeCountrySet = useMemo(
    () => new Set(activeCountries.map((country) => normalizeCountry(country))),
    [activeCountries],
  );

  const mapPath = useMemo(() => {
    if (!geographies.length) {
      return null;
    }
    const projection = geoNaturalEarth1().fitExtent(
      [
        [8, 8],
        [MAP_VIEWBOX_WIDTH - 8, MAP_VIEWBOX_HEIGHT - 8],
      ],
      { type: "FeatureCollection", features: geographies },
    );
    return geoPath(projection);
  }, [geographies]);

  return (
    <>
      {!embedded && <Seo title={t.marketsPage.title} description={t.marketsPage.description} path="/markets" />}
      <section id={sectionId} className="section markets-section">
        <motion.div
          className="container"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp}>{t.marketsPage.heading}</motion.h2>
          <motion.p className="lead" variants={revealUp}>
            {t.marketsPage.lead}
          </motion.p>
          <motion.div className="markets-layout" variants={staggerContainer}>
            <motion.div className="markets-region-list" variants={staggerContainer}>
              {markets.map((market, index) => (
                <motion.article
                  key={market.region.en}
                  className={`card market-region-card ${activeRegionIndex === index ? "is-active" : ""}`}
                  variants={revealUp}
                  onMouseEnter={() => setHoveredRegionIndex(index)}
                  onMouseLeave={() => setHoveredRegionIndex(null)}
                  onFocusCapture={() => setHoveredRegionIndex(index)}
                  onBlurCapture={() => setHoveredRegionIndex(null)}
                  onClick={() => setSelectedRegionIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedRegionIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <p className="tag">{market.badge[lang]}</p>
                  <h2>{market.region[lang]}</h2>
                  <p>{market.countries}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.aside className="card markets-map-panel" variants={revealUp}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeMarket.region.en}-${lang}`}
                  className="markets-map-meta"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="tag">{activeMarket.badge[lang]}</p>
                  <h2>{activeMarket.region[lang]}</h2>
                </motion.div>
              </AnimatePresence>
              <div className="markets-map-frame" aria-label={`Map highlighting ${activeMarket.region[lang]}`}>
                {mapPath && geographies.length ? (
                  <svg
                    className="markets-map-svg"
                    viewBox={`0 0 ${MAP_VIEWBOX_WIDTH} ${MAP_VIEWBOX_HEIGHT}`}
                    role="img"
                  >
                    {geographies.map((feature) => {
                      const countryName = feature?.properties?.name ?? "";
                      const isActiveCountry = activeCountrySet.has(normalizeCountry(countryName));
                      return (
                        <path
                          key={feature.id}
                          d={mapPath(feature) ?? ""}
                          className={`markets-map-country ${isActiveCountry ? "is-active" : ""}`}
                        />
                      );
                    })}
                  </svg>
                ) : (
                  <div className="markets-map-fallback">
                    {isMapLoading ? "Loading map..." : "Map unavailable right now."}
                  </div>
                )}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`countries-${activeMarket.region.en}-${lang}`}
                  className="markets-active-countries"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeCountries.map((country) => (
                    <span key={`${activeMarket.region.en}-${country}`}>{country}</span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.aside>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

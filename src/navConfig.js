import { markets, services } from "./data";

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getMarketRegionSlug(market) {
  return slugify(market.region.en);
}

export function getNavDropdowns(lang, t) {
  return [
    {
      id: "solutions",
      label: t.nav.solutions,
      href: "/solutions",
      items: [
        { label: t.nav.viewAllSolutions, href: "/solutions" },
        ...services.map((service) => ({
          label: service.title[lang],
          href: `/solutions/${service.slug}`,
        })),
      ],
    },
    {
      id: "ssit",
      label: t.nav.ssit,
      href: "/ssit",
      items: [
        { label: t.nav.viewAllSsit, href: "/ssit" },
        ...t.ssitPage.capabilities.map((capability) => ({
          label: capability.title,
          href: "/ssit",
        })),
      ],
    },
    {
      id: "markets",
      label: t.nav.markets,
      href: "/markets",
      items: [
        { label: t.nav.viewAllMarkets, href: "/markets" },
        ...markets.map((market) => ({
          label: market.region[lang],
          href: `/markets#region-${getMarketRegionSlug(market)}`,
        })),
      ],
    },
  ];
}

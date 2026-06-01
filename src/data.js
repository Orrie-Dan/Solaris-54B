const solutionImages = {
  "rural-electrification":
    "/solutions/Wide-angle_documentary-style_photograph_of_a_202606011215.jpeg",
  "mini-grid-development":
    "/solutions/Large-scale_solar_mini-grid_installation_serving_202606011217.jpeg",
  "ev-fast-charging":
    "/solutions/Modern_electric_vehicle_fast_charging_202606011218.jpeg",
  "ci-energy-solutions":
    "/solutions/Massive_warehouse_and_industrial_park_202606011221.jpeg",
  "off-grid-green-energy":
    "/solutions/Remote_off-grid_renewable_energy_installation_202606011225.jpeg",
  "vpp-virtual-power-plants":
    "/solutions/vpp.jpeg",
};

const solutionImage = (slug) => solutionImages[slug] ?? `/solutions/${slug}.jpg`;

export const services = [
  {
    slug: "rural-electrification",
    image: solutionImage("rural-electrification"),
    title: { en: "Rural Electrification", fr: "Électrification Rurale" },
    body: {
      en: "Affordable Solar Home Systems (SHS) with smart PayGo financing to bring clean, reliable power to households, schools, health clinics, and small businesses in off-grid communities.",
      fr: "Systèmes Solaires Domestiques (SHS) abordables avec financement PayGo intelligent pour apporter une énergie propre et fiable aux ménages, écoles, cliniques et petites entreprises hors réseau.",
    },
    ssit: { en: "IoT PayGo Monitoring", fr: "Surveillance IoT PayGo" },
    tags: {
      en: ["Solar Home Systems", "PayGo Financing", "Off-Grid", "Community Power"],
      fr: ["Systèmes solaires domestiques", "Financement PayGo", "Hors réseau", "Énergie communautaire"],
    },
    bullets: {
      en: [
        "Affordable Solar Home Systems (SHS) for every household",
        "Smart prepay solutions and PayGo via mobile money",
        "Battery storage and intelligent monitoring",
        "Productive applications — farming, commerce, education",
        "Community electrification programmes at national scale",
      ],
      fr: [
        "Systèmes solaires domestiques (SHS) abordables pour chaque ménage",
        "Solutions de prépaiement intelligent et PayGo via mobile money",
        "Stockage par batterie et surveillance intelligente",
        "Applications productives — agriculture, commerce, éducation",
        "Programmes d'électrification communautaire à l'échelle nationale",
      ],
    },
  },
  {
    slug: "mini-grid-development",
    image: solutionImage("mini-grid-development"),
    title: { en: "Mini-Grid Development", fr: "Développement de Mini-Réseaux" },
    body: {
      en: "Scalable solar-battery mini-grid systems delivering reliable, affordable electricity to communities, schools, health centres, and businesses — from 50kW village systems to 250kW+ industrial grids.",
      fr: "Systèmes mini-réseaux solaires-batteries évolutifs fournissant une électricité fiable et abordable aux communautés, écoles, centres de santé et entreprises — de 50kW à 250kW+ industriel.",
    },
    ssit: { en: "Smart Energy Management System", fr: "Système intelligent de gestion d'énergie" },
    tags: {
      en: ["Solar PV + BESS", "Hybrid Solar-Diesel", "Smart EMS", "Containerised"],
      fr: ["PV solaire + BESS", "Hybride solaire-diesel", "EMS intelligent", "Conteneurisé"],
    },
    bullets: {
      en: [
        "Solar PV + Battery Energy Storage Systems (BESS)",
        "Hybrid solar-diesel mini-grids for 24/7 reliability",
        "Intelligent Energy Management Systems (EMS)",
        "Containerised and modular — deployable anywhere",
        "Power distribution systems for communities and productive use",
      ],
      fr: [
        "PV solaire + systèmes de stockage par batterie (BESS)",
        "Mini-réseaux hybrides solaire-diesel pour une fiabilité 24h/24",
        "Systèmes intelligents de gestion d'énergie (EMS)",
        "Conteneurisés et modulaires — déployables partout",
        "Systèmes de distribution pour communautés et usage productif",
      ],
    },
  },
  {
    slug: "ev-fast-charging",
    image: solutionImage("ev-fast-charging"),
    title: { en: "EV Fast Charging Infrastructure", fr: "Infrastructure de Recharge Rapide VE" },
    body: {
      en: "Solar-integrated ultra-fast DC charging stations for highway corridors and urban networks. Fleet charging solutions for commercial operators, intelligent payment systems, and battery storage integration for 24/7 availability.",
      fr: "Bornes de recharge rapide DC intégrées au solaire pour corridors routiers et réseaux urbains. Solutions de recharge de flotte, systèmes de paiement intelligents et stockage par batterie pour une disponibilité 24h/24.",
    },
    ssit: { en: "Smart Payment & Energy Management", fr: "Paiement intelligent et gestion d'énergie" },
    tags: {
      en: ["Ultra-Fast DC", "Solar-Integrated", "Fleet Charging", "Smart Payment"],
      fr: ["DC ultra-rapide", "Intégré solaire", "Recharge de flotte", "Paiement intelligent"],
    },
    bullets: {
      en: [
        "Ultra-fast DC charging stations on highways and in cities",
        "Highway and urban charging networks",
        "Solar-integrated charging stations — reduced operating costs",
        "Intelligent payment systems and energy management",
        "Fleet charging solutions for commercial and logistics operators",
      ],
      fr: [
        "Bornes de recharge DC ultra-rapide sur autoroutes et en ville",
        "Réseaux de recharge autoroutiers et urbains",
        "Bornes intégrées au solaire — coûts d'exploitation réduits",
        "Systèmes de paiement intelligents et gestion d'énergie",
        "Solutions de recharge de flotte pour opérateurs commerciaux et logistiques",
      ],
    },
  },
  {
    slug: "ci-energy-solutions",
    image: solutionImage("ci-energy-solutions"),
    title: {
      en: "Commercial & Industrial (C&I) Energy Solutions",
      fr: "Solutions Énergétiques Commerciales & Industrielles (C&I)",
    },
    body: {
      en: "Comprehensive solar and storage solutions for factories, warehouses, commercial complexes, and industrial parks. Rooftop PV, BESS, hybrid power, EMS optimisation, peak shaving, and critical backup — reducing energy costs and improving ESG performance.",
      fr: "Solutions solaires et de stockage complètes pour usines, entrepôts, complexes commerciaux et parcs industriels. PV toiture, BESS, énergie hybride, optimisation EMS, écrêtage des pointes et alimentation de secours critique.",
    },
    ssit: { en: "AI-Driven Energy Optimisation", fr: "Optimisation énergétique pilotée par IA" },
    tags: {
      en: ["Rooftop Solar PV", "BESS", "Peak Shaving", "ESG Compliance"],
      fr: ["PV toiture", "BESS", "Écrêtage des pointes", "Conformité ESG"],
    },
    bullets: {
      en: [
        "Rooftop solar PV systems for manufacturing and commercial use",
        "Battery Energy Storage Systems (BESS) for energy independence",
        "Energy and EMS optimisation — reduce bills significantly",
        "Peak shaving, cost reduction and demand management",
        "Critical backup power systems for zero-downtime operations",
      ],
      fr: [
        "Systèmes PV toiture pour l'industrie et le commerce",
        "Systèmes de stockage par batterie (BESS) pour l'indépendance énergétique",
        "Optimisation énergétique et EMS — réduction significative des factures",
        "Écrêtage des pointes, réduction des coûts et gestion de la demande",
        "Systèmes d'alimentation de secours critique pour zéro interruption",
      ],
    },
  },
  {
    slug: "off-grid-green-energy",
    image: solutionImage("off-grid-green-energy"),
    title: { en: "Off-Grid Green Energy Solutions", fr: "Solutions d'Énergie Verte Hors-Réseau" },
    body: {
      en: "Utility-scale and containerised off-grid energy solutions for remote industrial sites, telecom networks, water and agriculture infrastructure, and emergency relief — enabling energy independence in even the most isolated environments.",
      fr: "Solutions d'énergie hors-réseau à l'échelle utilitaire et conteneurisées pour sites industriels éloignés, réseaux télécom, infrastructures eau et agriculture, et secours d'urgence.",
    },
    ssit: { en: "Remote Monitoring & VPP Integration", fr: "Surveillance à distance et intégration VPP" },
    tags: {
      en: ["Utility-Scale Solar", "Containerised", "Water & Agriculture", "Emergency Relief"],
      fr: ["Solaire utilitaire", "Conteneurisé", "Eau et agriculture", "Secours d'urgence"],
    },
    bullets: {
      en: [
        "Utility-scale solar and storage solutions for large off-grid sites",
        "Mobile and containerised systems — deploy anywhere, fast",
        "Energy for telecom towers and digital infrastructure",
        "Water and agriculture energy solutions",
        "Micro-grids and integration with Virtual Power Plants (VPP)",
      ],
      fr: [
        "Solutions solaires et de stockage utilitaires pour grands sites hors réseau",
        "Systèmes mobiles et conteneurisés — déploiement rapide partout",
        "Énergie pour tours télécom et infrastructure numérique",
        "Solutions énergétiques pour l'eau et l'agriculture",
        "Micro-réseaux et intégration aux centrales virtuelles (VPP)",
      ],
    },
  },
  {
    slug: "vpp-virtual-power-plants",
    image: solutionImage("vpp-virtual-power-plants"),
    highlight: true,
    title: { en: "VPP — Virtual Power Plants", fr: "VPP — Centrales Virtuelles" },
    body: {
      en: "Virtual Power Plants connect distributed energy resources — solar, storage, and generation — to balance supply and demand, enhance grid stability, and unlock new value. Smart energy management and grid integration at scale.",
      fr: "Les Centrales Virtuelles connectent les ressources énergétiques distribuées — solaire, stockage et production — pour équilibrer l'offre et la demande, améliorer la stabilité du réseau et créer de la valeur.",
    },
    ssit: { en: "Smart Grid & Demand Response", fr: "Réseau intelligent et réponse à la demande" },
    tags: {
      en: ["Grid Integration", "Demand Response", "Grid Stability", "Smart Energy Mgmt"],
      fr: ["Intégration réseau", "Réponse à la demande", "Stabilité réseau", "Gestion énergétique intelligente"],
    },
    bullets: {
      en: [
        "Connects distributed solar, storage, and generation assets",
        "Balances supply and demand at grid scale",
        "Enhances grid stability and frequency regulation",
        "Unlocks new revenue from distributed energy assets",
        "Supports national grid modernisation programmes",
      ],
      fr: [
        "Connecte les actifs solaires, de stockage et de production distribués",
        "Équilibre l'offre et la demande à l'échelle du réseau",
        "Améliore la stabilité du réseau et la régulation de fréquence",
        "Crée de nouvelles revenus à partir d'actifs énergétiques distribués",
        "Soutient les programmes de modernisation des réseaux nationaux",
      ],
    },
  },
];

export const markets = [
  { region: { en: "West Africa", fr: "Afrique de l'Ouest" }, badge: { en: "HQ Market", fr: "Marche siege" }, countries: "Cote d'Ivoire, Ghana, Senegal, Nigeria, Burkina Faso" },
  { region: { en: "East & Southern Africa", fr: "Afrique de l'Est et Australe" }, badge: { en: "Priority Growth", fr: "Croissance prioritaire" }, countries: "Kenya, Tanzania, Mozambique, Madagascar, Zimbabwe" },
  { region: { en: "North Africa", fr: "Afrique du Nord" }, badge: { en: "Solar Belt", fr: "Ceinture solaire" }, countries: "Morocco, Egypt, Tunisia, Algeria" },
  { region: { en: "Central Africa", fr: "Afrique Centrale" }, badge: { en: "High Potential", fr: "Fort potentiel" }, countries: "DRC, Cameroon, Chad, Congo, Gabon" },
  { region: { en: "Middle East", fr: "Moyen-Orient" }, badge: { en: "Energy Transition", fr: "Transition energetique" }, countries: "UAE, Saudi Arabia, Qatar, Oman, Jordan" },
  { region: { en: "Asia-Pacific", fr: "Asie-Pacifique" }, badge: { en: "Emerging", fr: "Emergent" }, countries: "Bangladesh, Philippines, Vietnam, Indonesia, Sri Lanka" },
  { region: { en: "Latin America", fr: "Amerique Latine" }, badge: { en: "Emerging", fr: "Emergent" }, countries: "Colombia, Peru, Ecuador, Haiti, Jamaica" },
  { region: { en: "Island Markets", fr: "Marches insulaires" }, badge: { en: "Off-Grid Focus", fr: "Focus hors-reseau" }, countries: "Canaries, Caribbean, Indian Ocean, Pacific Islands" },
];

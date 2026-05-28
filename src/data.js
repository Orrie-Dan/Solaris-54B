export const services = [
  {
    slug: "ci-rooftop-solar",
    image: "/Rooftop.jpg",
    title: { en: "C&I Rooftop Solar", fr: "Solaire Toiture C&I" },
    outcome: {
      en: "Lower grid dependence and energy cost for industrial assets.",
      fr: "Reduction de la dependance reseau et des couts energetiques industriels.",
    },
    ssit: { en: "Smart Monitoring Platform", fr: "Plateforme de supervision intelligente" },
    deliverables: {
      en: ["Grid-connected PV", "Net metering", "PPA and zero-CAPEX options"],
      fr: ["PV connecte reseau", "Net metering", "Options PPA et zero-CAPEX"],
    },
    clients: {
      en: "Manufacturing, logistics, warehouses, commercial complexes",
      fr: "Industrie, logistique, entrepots, complexes commerciaux",
    },
  },
  {
    slug: "hybrid-mini-grids",
    image: "/MiniGrid.jpg",
    title: { en: "Hybrid Mini-Grids", fr: "Mini-reseaux hybrides" },
    outcome: {
      en: "Resilient decentralized energy for remote and high-risk sites.",
      fr: "Energie decentralisee resiliente pour sites eloignes et critiques.",
    },
    ssit: { en: "Smart Energy Management System", fr: "Systeme intelligent de gestion d'energie" },
    deliverables: {
      en: ["Solar PV + BESS + diesel optimization", "Controller integration", "Remote performance visibility"],
      fr: ["PV solaire + BESS + optimisation diesel", "Integration des controleurs", "Visibilite de performance a distance"],
    },
    clients: {
      en: "Communities, mining, islands, industrial clusters",
      fr: "Communautes, mines, iles, clusters industriels",
    },
  },
  {
    slug: "smart-buildings",
    image: "/SmartBuildings.jpg",
    title: { en: "Industrial & Commercial Smart Buildings", fr: "Batiments intelligents C&I" },
    outcome: {
      en: "Improve efficiency, ESG reporting, and operating performance.",
      fr: "Ameliorer l'efficacite, le reporting ESG et la performance operationnelle.",
    },
    ssit: { en: "AI-Driven Energy Optimisation", fr: "Optimisation energetique pilotee par IA" },
    deliverables: {
      en: ["BEMS and metering", "EV charging and HVAC automation", "Solar + storage integration"],
      fr: ["BEMS et comptage intelligent", "Recharge VE et automatisation CVC", "Integration solaire + stockage"],
    },
    clients: { en: "Industrial parks, campuses, commercial real estate", fr: "Parcs industriels, campus, immobilier commercial" },
  },
  {
    slug: "data-centre-energy",
    image: "/Data center.jpg",
    title: { en: "Data Centre Energy Infrastructure", fr: "Infrastructure energetique data centre" },
    outcome: {
      en: "Deliver high-availability energy architecture for digital growth.",
      fr: "Fournir une architecture energetique haute disponibilite pour la croissance numerique.",
    },
    ssit: { en: "Smart Grid Synchronisation", fr: "Synchronisation reseau intelligente" },
    deliverables: {
      en: ["Dedicated solar plants", "Grid synchronization", "Backup redundancy architecture"],
      fr: ["Centrales solaires dediees", "Synchronisation reseau", "Architecture de redondance de secours"],
    },
    clients: { en: "Telecom operators, cloud, AI infrastructure, enterprise data centres", fr: "Operateurs telecom, cloud, IA, data centres entreprise" },
  },
  {
    slug: "telecom-solar-bess",
    image: "/Tower.jpg",
    title: { en: "Solar + BESS for Telecom Towers", fr: "Solaire + BESS pour tours telecom" },
    outcome: {
      en: "Reduce diesel use while increasing network uptime.",
      fr: "Reduire le diesel tout en augmentant la disponibilite reseau.",
    },
    ssit: { en: "Intelligent Hybrid Controllers", fr: "Controleurs hybrides intelligents" },
    deliverables: {
      en: ["Solar arrays + lithium-ion BESS", "Hybrid control", "Remote monitoring and analytics"],
      fr: ["Champs solaires + BESS lithium-ion", "Controle hybride", "Supervision distante et analytique"],
    },
    clients: { en: "Mobile operators and tower companies", fr: "Operateurs mobiles et tower companies" },
  },
  {
    slug: "agro-solar",
    image: "/Agri.jpg",
    title: { en: "Agro-Solar Projects", fr: "Projets agro-solaires" },
    outcome: {
      en: "Increase agricultural productivity with clean, reliable energy.",
      fr: "Augmenter la productivite agricole avec une energie propre et fiable.",
    },
    ssit: { en: "IoT Water & Energy Monitoring", fr: "Supervision IoT eau et energie" },
    deliverables: {
      en: ["Solar irrigation", "Cold-chain and agro-processing support", "Water pumping systems"],
      fr: ["Irrigation solaire", "Soutien chaine du froid et agro-transformation", "Systemes de pompage d'eau"],
    },
    clients: { en: "Agri-industrial operators and farming cooperatives", fr: "Acteurs agro-industriels et cooperatives agricoles" },
  },
  {
    slug: "rural-electrification-shs",
    image: "/RuralElectrification.jpg",
    title: { en: "Rural Electrification & Solar Home Systems", fr: "Electrification rurale et systemes solaires domestiques" },
    outcome: {
      en: "Scale energy access for underserved and off-grid communities.",
      fr: "Etendre l'acces a l'energie pour les communautes sous-desservies et hors-reseau.",
    },
    ssit: { en: "IoT PayGo Monitoring", fr: "Supervision IoT PayGo" },
    deliverables: {
      en: ["SHS and mini-grids", "Institutional electrification", "PayGo-enabled scale deployment"],
      fr: ["SHS et mini-reseaux", "Electrification institutionnelle", "Deploiement a echelle avec PayGo"],
    },
    clients: { en: "Public programs, schools, clinics, SMEs", fr: "Programmes publics, ecoles, cliniques, PME" },
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

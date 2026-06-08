const solutionImages = {
  "rural-electrification":
    "/solutions/Wide-angle_documentary-style_photograph_of_a_202606011215.jpeg",
  "mini-grid-development": "/solutions/1.png",
  "ev-fast-charging": "/solutions/3.png",
  "ci-energy-solutions": "/solutions/2.png",
  "off-grid-green-energy": "/solutions/4.png",
  "vpp-virtual-power-plants": "/solutions/vpp.jpeg",
};

const solutionImage = (slug) => solutionImages[slug] ?? `/solutions/${slug}.jpg`;

const ruralProductImage = (filename) => `/products/${filename}`;

const ruralElectrificationImages = {
  hero: solutionImages["rural-electrification"],
  useCases: {
    lighting: ruralProductImage("solar-desk-lamp.png"),
    power: ruralProductImage("paygo-eden-s20.png"),
    comfort: ruralProductImage("mb-9-comfort-orange.png"),
  },
  families: {
    "mb-9": ruralProductImage("mb-9-basic-orange.png"),
    "mb-15": ruralProductImage("mb-15-advanced-orange.png"),
    standalone: ruralProductImage("paygo-eden-s20.png"),
  },
  products: {
    "mb-9-basic": ruralProductImage("mb-9-basic-orange.png"),
    "mb-9-comfort": ruralProductImage("mb-9-comfort-orange.png"),
    "mb-15-advanced": ruralProductImage("mb-15-advanced-orange.png"),
    "mb-15-comfort": ruralProductImage("mb-15-comfort-orange.png"),
    "mb-15-entertainment": ruralProductImage("mb-15-entertainment-orange.png"),
    "eden-s20": ruralProductImage("paygo-eden-s20.png"),
    "solar-desk-lamp": ruralProductImage("solar-desk-lamp.png"),
  },
  galleries: {
    "mb-9-basic": [
      ruralProductImage("mb-9-basic-orange.png"),
      ruralProductImage("mb-9-basic.png"),
    ],
    "mb-9-comfort": [
      ruralProductImage("mb-9-comfort-orange.png"),
      ruralProductImage("mb-9-comfort.png"),
    ],
    "mb-15-advanced": [
      ruralProductImage("mb-15-advanced-orange.png"),
      ruralProductImage("mb-15-advanced.png"),
    ],
    "mb-15-comfort": [
      ruralProductImage("mb-15-comfort-orange.png"),
      ruralProductImage("mb-15-comfort.png"),
    ],
    "mb-15-entertainment": [
      ruralProductImage("mb-15-entertainment-orange.png"),
      ruralProductImage("mb-15-entertainment.png"),
    ],
    "eden-s20": [ruralProductImage("paygo-eden-s20.png")],
    "solar-desk-lamp": [ruralProductImage("solar-desk-lamp.png")],
  },
};

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
    catalog: {
      intro: {
        en: "From entry-level home lighting to full entertainment packages — all PayGo-ready and monitored through SSIT.",
        fr: "De l'éclairage d'entrée de gamme aux packs divertissement complets — tous compatibles PayGo et supervisés via SSIT.",
      },
      families: [
        {
          id: "mb-9",
          label: { en: "MB-9 Systems", fr: "Systèmes MB-9" },
          summary: {
            en: "Entry-level solar home systems for everyday essentials",
            fr: "Systèmes solaires d'entrée de gamme pour les besoins quotidiens",
          },
          image: ruralElectrificationImages.families["mb-9"],
        },
        {
          id: "mb-15",
          label: { en: "MB-15 Systems", fr: "Systèmes MB-15" },
          summary: {
            en: "Higher-capacity packages for growing household needs",
            fr: "Packs haute capacité pour des besoins énergétiques croissants",
          },
          image: ruralElectrificationImages.families["mb-15"],
        },
        {
          id: "standalone",
          label: { en: "Lighting & Business Kits", fr: "Éclairage & Kits Professionnels" },
          summary: {
            en: "Portable lighting and power for shops, schools, and homes",
            fr: "Éclairage et alimentation portables pour commerces, écoles et foyers",
          },
          image: ruralElectrificationImages.families.standalone,
        },
      ],
      useCases: [
        {
          id: "lighting",
          image: ruralElectrificationImages.useCases.lighting,
          title: { en: "Reliable home lighting", fr: "Éclairage domestique fiable" },
          body: {
            en: "Clean, dependable illumination for households, students, and communities after dark.",
            fr: "Une illumination propre et fiable pour les ménages, étudiants et communautés après la tombée de la nuit.",
          },
        },
        {
          id: "power",
          image: ruralElectrificationImages.useCases.power,
          title: { en: "Phone charging & connectivity", fr: "Recharge et connectivité" },
          body: {
            en: "USB charging and mobile money readiness to keep families and businesses connected.",
            fr: "Recharge USB et compatibilité mobile money pour maintenir familles et entreprises connectées.",
          },
        },
        {
          id: "comfort",
          image: ruralElectrificationImages.useCases.comfort,
          title: { en: "Cooling & comfort", fr: "Refroidissement et confort" },
          body: {
            en: "DC fans and expanded capacity packages designed for warmer climates and larger homes.",
            fr: "Ventilateurs DC et packs capacité étendue conçus pour les climats chauds et les foyers plus grands.",
          },
        },
      ],
      products: [
        {
          id: "mb-9-basic",
          family: "mb-9",
          tier: 1,
          image: ruralElectrificationImages.products["mb-9-basic"],
          gallery: ruralElectrificationImages.galleries["mb-9-basic"],
          name: { en: "MB-9 Basic Solar Home System", fr: "MB-9 Système Solaire Domestique Basique" },
          tagline: {
            en: "Affordable Solar Energy for Everyday Essentials",
            fr: "Énergie solaire abordable pour les besoins quotidiens",
          },
          description: {
            en: "The MB-9 Basic Solar Home System is an entry-level off-grid solution designed to provide reliable lighting and phone charging for homes without access to electricity. Featuring a 30W solar panel, three LED lights, and a rechargeable battery hub, it delivers clean and dependable energy for daily use.",
            fr: "Le MB-9 Basique est une solution hors réseau d'entrée de gamme conçue pour fournir un éclairage fiable et la recharge de téléphone aux foyers sans accès à l'électricité. Avec un panneau solaire de 30W, trois lampes LED et un hub batterie rechargeable, il offre une énergie propre et fiable au quotidien.",
          },
          specs: {
            en: ["30W Panel", "3 LEDs", "USB Charging", "PAYGO"],
            fr: ["Panneau 30W", "3 LED", "Charge USB", "PAYGO"],
          },
          features: {
            en: [
              "30W Solar Panel",
              "3 High-Efficiency LED Lights",
              "USB Phone Charging",
              "Rechargeable Battery Hub",
              "Remote Control",
              "PAYGO Compatible",
            ],
            fr: [
              "Panneau solaire 30W",
              "3 lampes LED haute efficacité",
              "Recharge USB pour téléphone",
              "Hub batterie rechargeable",
              "Télécommande",
              "Compatible PAYGO",
            ],
          },
          idealFor: {
            en: ["Small households", "Students", "Rural homes", "Emergency lighting"],
            fr: ["Petits ménages", "Étudiants", "Foyers ruraux", "Éclairage d'urgence"],
          },
        },
        {
          id: "mb-9-comfort",
          family: "mb-9",
          tier: 2,
          image: ruralElectrificationImages.products["mb-9-comfort"],
          gallery: ruralElectrificationImages.galleries["mb-9-comfort"],
          name: { en: "MB-9 Comfort Package", fr: "MB-9 Pack Confort" },
          tagline: {
            en: "Reliable Lighting with Cooling Comfort",
            fr: "Éclairage fiable avec confort de refroidissement",
          },
          description: {
            en: "The MB-9 Comfort Package combines dependable solar lighting with a DC fan to provide both energy access and comfort. Designed for warmer climates, it offers a practical solution for families seeking improved quality of life.",
            fr: "Le Pack Confort MB-9 combine un éclairage solaire fiable avec un ventilateur DC pour offrir à la fois accès à l'énergie et confort. Conçu pour les climats chauds, il constitue une solution pratique pour les familles recherchant une meilleure qualité de vie.",
          },
          specs: {
            en: ["30W Panel", "3 LEDs", "DC Fan", "PAYGO"],
            fr: ["Panneau 30W", "3 LED", "Ventilateur DC", "PAYGO"],
          },
          features: {
            en: [
              "30W Solar Panel",
              "3 LED Lights",
              "DC Fan",
              "USB Phone Charging",
              "Long Battery Runtime",
              "PAYGO Ready",
            ],
            fr: [
              "Panneau solaire 30W",
              "3 lampes LED",
              "Ventilateur DC",
              "Recharge USB pour téléphone",
              "Longue autonomie batterie",
              "Prêt PAYGO",
            ],
          },
          idealFor: {
            en: ["Rural families", "Off-grid homes", "Hot climate regions"],
            fr: ["Familles rurales", "Foyers hors réseau", "Régions à climat chaud"],
          },
        },
        {
          id: "mb-15-advanced",
          family: "mb-15",
          tier: 1,
          image: ruralElectrificationImages.products["mb-15-advanced"],
          gallery: ruralElectrificationImages.galleries["mb-15-advanced"],
          name: { en: "MB-15 Advanced Solar Home System", fr: "MB-15 Système Solaire Domestique Avancé" },
          tagline: {
            en: "Higher Capacity for Growing Energy Needs",
            fr: "Capacité supérieure pour des besoins énergétiques croissants",
          },
          description: {
            en: "The MB-15 Advanced Solar Home System provides increased power capacity for larger households and small businesses. Equipped with a 50W solar panel, four LED lights, and an FM radio, it delivers dependable lighting, communication, and mobile charging.",
            fr: "Le MB-15 Avancé offre une capacité énergétique accrue pour les ménages plus grands et les petites entreprises. Équipé d'un panneau solaire de 50W, de quatre lampes LED et d'une radio FM, il assure éclairage, communication et recharge mobile fiables.",
          },
          specs: {
            en: ["50W Panel", "4 LEDs", "FM Radio", "PAYGO"],
            fr: ["Panneau 50W", "4 LED", "Radio FM", "PAYGO"],
          },
          features: {
            en: [
              "50W Solar Panel",
              "4 LED Lights",
              "FM Radio",
              "USB Charging",
              "Remote Control",
              "High-Capacity Battery",
            ],
            fr: [
              "Panneau solaire 50W",
              "4 lampes LED",
              "Radio FM",
              "Charge USB",
              "Télécommande",
              "Batterie haute capacité",
            ],
          },
          idealFor: {
            en: ["Medium-sized households", "Small shops", "Community facilities"],
            fr: ["Ménages de taille moyenne", "Petits commerces", "Équipements communautaires"],
          },
        },
        {
          id: "mb-15-comfort",
          family: "mb-15",
          tier: 2,
          image: ruralElectrificationImages.products["mb-15-comfort"],
          gallery: ruralElectrificationImages.galleries["mb-15-comfort"],
          name: { en: "MB-15 Comfort Package", fr: "MB-15 Pack Confort" },
          tagline: {
            en: "Enhanced Comfort and Emergency Lighting",
            fr: "Confort amélioré et éclairage d'urgence",
          },
          description: {
            en: "The MB-15 Comfort Package builds on the MB-15 platform by adding a DC fan and portable flashlight. It offers an ideal balance of lighting, communication, cooling, and emergency preparedness.",
            fr: "Le Pack Confort MB-15 s'appuie sur la plateforme MB-15 en ajoutant un ventilateur DC et une lampe torche portable. Il offre un équilibre idéal entre éclairage, communication, refroidissement et préparation aux urgences.",
          },
          specs: {
            en: ["50W Panel", "4 LEDs", "DC Fan", "Flashlight"],
            fr: ["Panneau 50W", "4 LED", "Ventilateur DC", "Lampe torche"],
          },
          features: {
            en: [
              "50W Solar Panel",
              "4 LED Lights",
              "FM Radio",
              "DC Fan",
              "Flashlight",
              "Mobile Charging",
            ],
            fr: [
              "Panneau solaire 50W",
              "4 lampes LED",
              "Radio FM",
              "Ventilateur DC",
              "Lampe torche",
              "Recharge mobile",
            ],
          },
          idealFor: {
            en: ["Family homes", "Small businesses", "Community centers"],
            fr: ["Foyers familiaux", "Petites entreprises", "Centres communautaires"],
          },
        },
        {
          id: "mb-15-entertainment",
          family: "mb-15",
          tier: 3,
          image: ruralElectrificationImages.products["mb-15-entertainment"],
          gallery: ruralElectrificationImages.galleries["mb-15-entertainment"],
          name: { en: "MB-15 Entertainment Package", fr: "MB-15 Pack Divertissement" },
          tagline: {
            en: "Complete Home Energy and Entertainment Solution",
            fr: "Solution complète d'énergie et de divertissement à domicile",
          },
          description: {
            en: "The MB-15 Entertainment Package is the most advanced solar home system in the Solaris 54 range. It combines lighting, cooling, communication, and television connectivity to create a complete off-grid energy solution for modern households.",
            fr: "Le Pack Divertissement MB-15 est le système solaire domestique le plus avancé de la gamme Solaris 54. Il combine éclairage, refroidissement, communication et connectivité télévision pour une solution hors réseau complète pour les foyers modernes.",
          },
          specs: {
            en: ["50W Panel", "4 LEDs", "TV Support", "DC Fan"],
            fr: ["Panneau 50W", "4 LED", "Support TV", "Ventilateur DC"],
          },
          features: {
            en: [
              "50W Solar Panel",
              "4 LED Lights",
              "Television Support",
              "DC Fan",
              "FM Radio",
              "Flashlight",
              "Phone Charging",
              "High-Capacity Battery",
            ],
            fr: [
              "Panneau solaire 50W",
              "4 lampes LED",
              "Support télévision",
              "Ventilateur DC",
              "Radio FM",
              "Lampe torche",
              "Recharge téléphone",
              "Batterie haute capacité",
            ],
          },
          idealFor: {
            en: ["Large households", "Rural businesses", "Community gathering spaces"],
            fr: ["Grands ménages", "Entreprises rurales", "Espaces de rassemblement communautaire"],
          },
        },
        {
          id: "eden-s20",
          family: "standalone",
          image: ruralElectrificationImages.products["eden-s20"],
          gallery: ruralElectrificationImages.galleries["eden-s20"],
          name: { en: "Paygo Eden-S20 Retail Business Kit", fr: "Kit Professionnel Paygo Eden-S20" },
          tagline: {
            en: "Portable Solar Power for Homes and Businesses",
            fr: "Énergie solaire portable pour foyers et entreprises",
          },
          category: { en: "Solar Lighting Solutions", fr: "Solutions d'éclairage solaire" },
          description: {
            en: "The Solaris 54 Paygo Eden-S20 Retail Business Kit is a portable solar energy solution designed to provide reliable lighting and power for homes, shops, and small businesses. Equipped with a high-efficiency solar panel, integrated battery storage, and multiple LED tube lights, the system delivers dependable energy for daily activities and emergency use. Compact and easy to transport, the Eden-S20 enables users to access clean, affordable electricity without relying on the grid. Its PAYGO compatibility makes it an ideal solution for expanding energy access in underserved communities.",
            fr: "Le Kit Professionnel Paygo Eden-S20 de Solaris 54 est une solution solaire portable conçue pour fournir un éclairage et une alimentation fiables aux foyers, commerces et petites entreprises. Équipé d'un panneau solaire haute efficacité, d'un stockage batterie intégré et de plusieurs tubes LED, le système assure une énergie fiable pour les activités quotidiennes et les urgences. Compact et facile à transporter, l'Eden-S20 permet d'accéder à une électricité propre et abordable sans dépendre du réseau. Sa compatibilité PAYGO en fait une solution idéale pour étendre l'accès à l'énergie dans les communautés mal desservies.",
          },
          specs: {
            en: ["Portable", "4 Tube Lights", "USB Ports", "PAYGO"],
            fr: ["Portable", "4 tubes LED", "Ports USB", "PAYGO"],
          },
          features: {
            en: [
              "High-performance portable solar power station",
              "Solar charging capability",
              "Four LED tube lights for bright illumination",
              "Long battery life",
              "Multiple USB charging ports",
              "Digital display for battery monitoring",
              "Portable and easy to carry",
              "PAYGO compatible",
              "Reliable and energy-efficient operation",
            ],
            fr: [
              "Station solaire portable haute performance",
              "Capacité de charge solaire",
              "Quatre tubes LED pour un éclairage intense",
              "Longue durée de vie de la batterie",
              "Plusieurs ports de charge USB",
              "Affichage numérique pour la surveillance batterie",
              "Portable et facile à transporter",
              "Compatible PAYGO",
              "Fonctionnement fiable et économe en énergie",
            ],
          },
          idealFor: {
            en: [
              "Small businesses",
              "Retail shops",
              "Rural households",
              "Community centers",
              "Schools",
              "Off-grid homes",
              "Emergency lighting applications",
            ],
            fr: [
              "Petites entreprises",
              "Commerces de détail",
              "Ménages ruraux",
              "Centres communautaires",
              "Écoles",
              "Foyers hors réseau",
              "Applications d'éclairage d'urgence",
            ],
          },
          applications: {
            en: [
              "Home lighting",
              "Phone charging",
              "Small retail businesses",
              "Study and reading",
              "Community gathering spaces",
              "Backup power during outages",
            ],
            fr: [
              "Éclairage domestique",
              "Recharge de téléphone",
              "Petits commerces de détail",
              "Étude et lecture",
              "Espaces de rassemblement communautaire",
              "Alimentation de secours lors des coupures",
            ],
          },
          benefits: {
            en: [
              "Clean and renewable energy",
              "Reduced energy costs",
              "Portable and user-friendly design",
              "Reliable off-grid power solution",
              "Improved access to lighting and communication",
              "Environmentally friendly",
            ],
            fr: [
              "Énergie propre et renouvelable",
              "Réduction des coûts énergétiques",
              "Design portable et convivial",
              "Solution d'alimentation hors réseau fiable",
              "Meilleur accès à l'éclairage et à la communication",
              "Respectueux de l'environnement",
            ],
          },
        },
        {
          id: "solar-desk-lamp",
          family: "standalone",
          image: ruralElectrificationImages.products["solar-desk-lamp"],
          gallery: ruralElectrificationImages.galleries["solar-desk-lamp"],
          name: { en: "Solar Desk Lamp", fr: "Lampe de Bureau Solaire" },
          tagline: {
            en: "Portable Solar Lighting for Learning and Everyday Living",
            fr: "Éclairage solaire portable pour l'apprentissage et le quotidien",
          },
          category: { en: "Solar Lighting Solutions", fr: "Solutions d'éclairage solaire" },
          description: {
            en: "The Solaris 54 Solar Desk Lamp is a compact and portable solar lighting solution designed to provide reliable illumination for studying, reading, and everyday household activities. Powered by clean solar energy, it delivers bright and efficient lighting while eliminating the need for grid electricity. With its lightweight design, long-lasting battery, and study-friendly illumination, the Solar Desk Lamp is an ideal solution for students, families, and communities living in off-grid areas.",
            fr: "La Lampe de Bureau Solaire Solaris 54 est une solution d'éclairage solaire compacte et portable conçue pour fournir une illumination fiable pour les études, la lecture et les activités domestiques quotidiennes. Alimentée par l'énergie solaire propre, elle offre un éclairage lumineux et efficace sans dépendre du réseau électrique. Avec son design léger, sa batterie longue durée et son éclairage adapté aux études, elle est idéale pour les étudiants, les familles et les communautés hors réseau.",
          },
          specs: {
            en: ["Portable", "LED", "Study Light", "Off-Grid"],
            fr: ["Portable", "LED", "Éclairage étude", "Hors réseau"],
          },
          features: {
            en: [
              "Portable solar-powered desk lamp",
              "High-efficiency LED lighting",
              "Long battery life",
              "Study-friendly illumination",
              "Compact and lightweight design",
              "Easy to carry and install",
              "Environmentally friendly",
              "Low maintenance",
              "Reliable off-grid operation",
            ],
            fr: [
              "Lampe de bureau solaire portable",
              "Éclairage LED haute efficacité",
              "Longue autonomie batterie",
              "Illumination adaptée aux études",
              "Design compact et léger",
              "Facile à transporter et installer",
              "Respectueux de l'environnement",
              "Faible entretien",
              "Fonctionnement hors réseau fiable",
            ],
          },
          idealFor: {
            en: [
              "Students",
              "Schools",
              "Study centers",
              "Off-grid homes",
              "Rural communities",
              "Reading and homework",
              "Emergency lighting",
            ],
            fr: [
              "Étudiants",
              "Écoles",
              "Centres d'étude",
              "Foyers hors réseau",
              "Communautés rurales",
              "Lecture et devoirs",
              "Éclairage d'urgence",
            ],
          },
          applications: {
            en: [
              "Studying and reading",
              "Home lighting",
              "School and educational use",
              "Dormitories and boarding schools",
              "Rural households",
              "Emergency and backup lighting",
            ],
            fr: [
              "Études et lecture",
              "Éclairage domestique",
              "Usage scolaire et éducatif",
              "Dortoirs et internats",
              "Ménages ruraux",
              "Éclairage d'urgence et de secours",
            ],
          },
          benefits: {
            en: [
              "Clean and renewable solar energy",
              "Long-lasting illumination",
              "Reduced energy costs",
              "Portable and easy to use",
              "Safe and environmentally friendly",
              "Improves access to education through reliable lighting",
              "Ideal for areas without access to the electricity grid",
            ],
            fr: [
              "Énergie solaire propre et renouvelable",
              "Illumination durable",
              "Réduction des coûts énergétiques",
              "Portable et facile à utiliser",
              "Sûr et respectueux de l'environnement",
              "Améliore l'accès à l'éducation grâce à un éclairage fiable",
              "Idéal pour les zones sans accès au réseau électrique",
            ],
          },
        },
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

export function getServiceBySlug(slug) {
  return services.find((item) => item.slug === slug) ?? null;
}

export function getServiceProduct(serviceSlug, productId) {
  const service = getServiceBySlug(serviceSlug);
  if (!service?.catalog) {
    return null;
  }
  const product = service.catalog.products.find((item) => item.id === productId);
  if (!product) {
    return null;
  }
  return { service, product };
}

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

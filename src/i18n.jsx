import { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext(null);

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      ssit: "SSIT",
      markets: "Markets",
      why: "Why Solaris 54",
      approach: "Approach",
      group: "Group",
      contact: "Contact",
      cta: "Get in Touch",
    },
    common: {
      languageEn: "EN",
      languageFr: "FR",
      readMore: "Read more",
      discussProject: "Discuss Your Project",
      whatNextTitle: "What happens next",
      responseSla: "Response in 48 hours",
      submit: "Send Enquiry",
      backToSolutions: "Back to Solutions",
      backToHome: "Back to Home",
      serviceDetail: "Service Detail",
      serviceNotFound: "Service not found",
      notFoundTitle: "Page not found",
      ssitComponent: "SSIT component:",
      includes: "What it includes",
      deployments: "Typical deployments:",
      discussThisService: "Discuss This Service",
      viewDetail: "View detail",
      poweredBySsit: "Powered by SSIT™",
      ssitPrefix: "SSIT:",
      ssitLayer: "SSIT Layer",
      contactEyebrow: "Contact Solaris 54",
      loadingMap: "Loading map...",
      mapUnavailable: "Map unavailable right now.",
      footerRights: "All rights reserved.",
      languageToggleAria: "Language toggle",
      switchToEnglishAria: "Switch to English",
      switchToFrenchAria: "Switch to French",
      navMainAria: "Main navigation",
      menuToggleAria: "Toggle navigation menu",
      mapHighlightPrefix: "Map highlighting",
      slideshowLabel: "Solutions slideshow",
      slideshowPrev: "Previous solutions",
      slideshowNext: "Next solutions",
      goToSolution: "Show solution:",
      heroMetrics: [
        { value: "54", label: "African nations in our mandate" },
        { value: "Global", label: "Active target markets" },
        { value: "6", label: "Solution verticals" },
      ],
      ticker: [
        "Rural Electrification",
        "Mini-Grid Development",
        "EV Fast Charging",
        "C&I Energy Solutions",
        "Off-Grid Green Energy",
        "VPP",
        "Smart Energy Management",
        "AI Optimisation",
        "IoT Monitoring",
        "PayGo Financing",
      ],
    },
    seo: {
      siteName: "Solaris 54",
      image: "/og-solaris54.jpg",
    },
    home: {
      title: "Solaris 54 - Clean Energy Infrastructure for a Changing World",
      description:
        "Solar energy, smart infrastructure, hybrid power systems, and distributed electrification across global emerging markets.",
      eyebrow: "Clean Energy Infrastructure",
      headline: "Clean energy infrastructure for a changing world.",
      lead:
        "Solaris 54 develops and deploys solar energy, smart infrastructure, hybrid power systems, and distributed electrification for governments, utilities, industries, and communities across global emerging markets.",
      proof: [
        "Backed by Mark Cables FZE",
        "Abidjan HQ, Global Reach",
        "IEC and IEEE-aligned design",
      ],
      solutionsTitle: "Solutions Portfolio",
      ctaTitle: "Ready to structure your next energy project?",
    },
    aboutPage: {
      eyebrow: "Who We Are",
      heading: "Accelerating the clean energy transition.",
      lead:
        "Solaris 54 is a forward-looking energy company focused on delivering innovative, reliable, and sustainable power solutions across global emerging markets.",
      body:
        "Headquartered in Abidjan, Cote d'Ivoire, and backed by Mark Cables FZE, Solaris 54 develops, finances, builds, and operates clean energy infrastructure for governments, utilities, businesses, and communities.",
      quote:
        "Reliable energy infrastructure is the foundation of economic growth, industrial resilience, and long-term development.",
      stats: [
        { value: "54", label: "African nations in our mandate" },
        { value: "6", label: "Core solution verticals" },
        { value: "100%", label: "Clean and renewable energy focus" },
        { value: "24/7", label: "Asset operations and support" },
        { value: "$1BN+", label: "Group-level awarded projects" },
      ],
    },
    whyPage: {
      eyebrow: "Why Solaris 54",
      heading: "The right partner for clean energy.",
      lead:
        "We are not just a supplier. We originate, finance, build, and operate from first feasibility through long-term performance.",
      cards: [
        {
          title: "Developer-Led",
          body: "We originate, structure, finance and operate - full lifecycle from concept to commissioning and long-term performance guarantee.",
        },
        {
          title: "Technology-First",
          body: "SSIT layer - AI, IoT, BEMS, smart grid - is built into every project, not added afterwards.",
        },
        {
          title: "Group Backing",
          body: "Part of Mark Cables FZE group with a 400MW HFO power plant under construction and $1BN+ awarded projects globally.",
        },
        {
          title: "Local Roots, Global Reach",
          body: "Headquartered in Abidjan with global operational reach and international standards.",
        },
      ],
    },
    approachPage: {
      eyebrow: "How We Work",
      heading: "From vision to voltage.",
      lead:
        "A disciplined process from feasibility to long-term operations and performance management.",
      steps: [
        {
          title: "Assess",
          body: "Site assessment, resource analysis, load profiling and feasibility study.",
        },
        {
          title: "Design",
          body: "Technical design, system sizing, and SSIT integration to IEC, IEEE and local code standards.",
        },
        {
          title: "Finance",
          body: "Project finance, PPA structuring and DFI engagement to reduce client capital risk.",
        },
        {
          title: "Build",
          body: "EPC execution to international standards with quality-controlled procurement and commissioning.",
        },
        {
          title: "Operate",
          body: "Long-term O&M, SSIT remote monitoring, preventive maintenance and performance guarantees.",
        },
      ],
    },
    solutionsPage: {
      title: "Solutions | Solaris 54",
      description: "Six integrated clean energy solutions powered by SSIT.",
      eyebrow: "Energy Solutions",
      heading: "Six integrated solutions.",
      lead: "Six focused solutions powered by Smart Solar Intelligent Technology, delivering clean energy across emerging markets.",
    },
    footer: {
      tagline: "Clean Energy Infrastructure Worldwide · Power Without Limits",
      subsidiary: "A subsidiary of",
      headquarters: "Headquartered in Abidjan, Côte d'Ivoire",
    },
    ssitPage: {
      title: "SSIT Platform | Solaris 54",
      description: "Smart Solar Intelligent Technology capabilities and architecture.",
      heading: "SSIT Platform",
      lead: "SSIT is the digital backbone embedded across every Solaris 54 project and service.",
      platformEyebrow: "Smart Energy Intelligence",
      platformSubheading: "Powered by SSIT™",
      platformLead:
        "SSIT is Solaris 54's proprietary platform that unifies AI, IoT, automation, and energy analytics into one operating layer.",
      liveStatusTitle: "Live Grid Status",
      liveStatusValue: "AI Dispatch Active",
      liveMetrics: [
        { label: "Connected Assets", value: "248" },
        { label: "Sites Monitored", value: "34" },
        { label: "Forecast Accuracy", value: "97%" },
      ],
      architecture: ["Sensors", "Cloud", "Analytics", "Optimisation", "Control"],
      capabilities: [
        {
          title: "AI-Driven Energy Optimisation",
          tag: "Forecast",
          points: [
            "Load and solar forecasting for daily dispatch planning",
            "Tariff-aware set points to reduce peak demand costs",
            "Continuous tuning from site-level performance feedback",
          ],
        },
        {
          title: "IoT Remote Monitoring",
          tag: "Operations",
          points: [
            "Live telemetry from inverters, meters, and storage assets",
            "Fault alerts and alarms with remote diagnostics workflows",
            "Fleet view across C&I, telecom, and mini-grid deployments",
          ],
        },
        {
          title: "Building Energy Management (BEMS)",
          tag: "Buildings",
          points: [
            "HVAC, lighting, and EV charging orchestration in one layer",
            "Rule-based control for occupancy and critical process loads",
            "Energy baseline tracking for ESG and compliance reporting",
          ],
        },
        {
          title: "Energy Analytics & Reporting",
          tag: "Insights",
          points: [
            "Asset-level KPIs for availability, yield, and savings",
            "Executive dashboards for finance, operations, and ESG teams",
            "Automated monthly reporting packs for stakeholders",
          ],
        },
        {
          title: "Smart Grid Integration",
          tag: "Grid",
          points: [
            "Grid-ready control logic for hybrid and islanded operation",
            "Interoperability with utility SCADA and third-party platforms",
            "Power quality and reliability safeguards for critical sites",
          ],
        },
      ],
      ctaTitle: "Plan your SSIT architecture with Solaris 54.",
      ctaLead: "Align controls, analytics, and deployment priorities before EPC kickoff.",
      ctaButton: "Book a technical workshop",
    },
    marketsPage: {
      title: "Markets | Solaris 54",
      description: "Global emerging markets footprint across 8 regions.",
      heading: "Global Markets",
      lead: "Equal market focus across Africa, Middle East, Asia-Pacific, Latin America, and island markets.",
    },
    groupPage: {
      title: "Group Structure | Solaris 54",
      description: "Solaris 54 within the Mark Cables FZE group structure.",
      eyebrow: "Part of the Mark Cables FZE Group",
      headingBefore: "Backed by ",
      headingHighlight: "proven",
      headingAfter: " infrastructure.",
      body1:
        "Solaris 54 is the dedicated renewable energy and smart infrastructure platform of the Mark Cables FZE group. While MPETS leads on IPP power generation, HV transmission and gas-to-power, Solaris 54 is the group's vehicle for solar, smart systems, hybrid power, and energy access — deployed in every market the group enters.",
      body2:
        "Wherever MPETS develops infrastructure, Solaris 54 follows with the clean energy layer. Madagascar, Mozambique, Burkina Faso, and all future MPETS markets are being developed under this integrated group strategy.",
      mpetsLinkTitle: "Mark Power Energy & Technology Solutions (MPETS)",
      mpetsLinkSub: "IPP · HV Transmission · Gas-to-Power · 400MW HFO Burkina Faso",
      parentLinkTitle: "Mark Cables FZE",
      parentLinkSub: "Jebel Ali, Dubai · Wire & Cable Manufacturing · EPC Contracting",
      cta: "Explore Partnership Opportunities",
      orgParentName: "Mark Cables FZE",
      orgParentSub: "Parent Company · Jebel Ali, UAE",
      orgMpetsSub: "IPP · Gas-to-Power · HV Transmission · BESS",
      orgSolarisSub: "Solar · Smart Tech · Hybrid · Solar Homes · Mini-Grids — ",
      orgSolarisHq: "Abidjan HQ",
      shared: "Shared markets: Madagascar · Mozambique · Burkina Faso · and all MPETS future deployments",
    },
    contactPage: {
      title: "Contact | Solaris 54",
      description: "Contact Solaris 54 for clean energy infrastructure enquiries.",
      lead: "Abidjan, Cote d'Ivoire. Group HQ in Jebel Ali Free Zone, Dubai, UAE.",
      steps: ["Initial review and qualification", "Scoping call and next-step proposal"],
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        organisation: "Organisation",
        email: "Email Address",
        country: "Country",
        countryPriorityLabel: "Priority markets",
        countryAllLabel: "All countries",
        interest: "Solution Interest",
        message: "Message / Project Description",
      },
      options: [
        "Rural Electrification",
        "Mini-Grid Development",
        "EV Fast Charging Infrastructure",
        "Commercial & Industrial (C&I) Energy Solutions",
        "Off-Grid Green Energy Solutions",
        "VPP — Virtual Power Plants",
        "Smart Solar Intelligent Technology (SSIT)",
        "Government & Institutional Projects",
        "Strategic Partnership",
        "General Enquiry",
      ],
      success: "Thank you. Your enquiry draft is ready for submission.",
      error: "Please complete all required fields.",
    },
    notFoundPage: {
      title: "Not Found | Solaris 54",
      description: "Page not found.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "A propos",
      solutions: "Solutions",
      ssit: "SSIT",
      markets: "Marches",
      why: "Pourquoi Solaris 54",
      approach: "Approche",
      group: "Groupe",
      contact: "Contact",
      cta: "Contactez-nous",
    },
    common: {
      languageEn: "EN",
      languageFr: "FR",
      readMore: "Voir plus",
      discussProject: "Discuter de votre projet",
      whatNextTitle: "Prochaines etapes",
      responseSla: "Reponse sous 48 heures",
      submit: "Envoyer la demande",
      backToSolutions: "Retour aux solutions",
      backToHome: "Retour a l'accueil",
      serviceDetail: "Detail du service",
      serviceNotFound: "Service introuvable",
      notFoundTitle: "Page introuvable",
      ssitComponent: "Composant SSIT :",
      includes: "Ce que cela inclut",
      deployments: "Deploiements types :",
      discussThisService: "Discuter de ce service",
      viewDetail: "Voir le detail",
      poweredBySsit: "Propulse par SSIT™",
      ssitPrefix: "SSIT :",
      ssitLayer: "Couche SSIT",
      contactEyebrow: "Contacter Solaris 54",
      loadingMap: "Chargement de la carte...",
      mapUnavailable: "Carte indisponible pour le moment.",
      footerRights: "Tous droits reserves.",
      languageToggleAria: "Basculer la langue",
      switchToEnglishAria: "Passer en anglais",
      switchToFrenchAria: "Passer en francais",
      navMainAria: "Navigation principale",
      menuToggleAria: "Afficher le menu de navigation",
      mapHighlightPrefix: "Carte mettant en valeur",
      slideshowLabel: "Diaporama des solutions",
      slideshowPrev: "Solutions precedentes",
      slideshowNext: "Solutions suivantes",
      goToSolution: "Afficher la solution :",
      heroMetrics: [
        { value: "54", label: "Nations africaines dans notre mandat" },
        { value: "Mondial", label: "Marches cibles actifs" },
        { value: "6", label: "Verticales de solution" },
      ],
      ticker: [
        "Electrification rurale",
        "Developpement de mini-reseaux",
        "Recharge rapide VE",
        "Solutions energetiques C&I",
        "Energie verte hors-reseau",
        "VPP",
        "Gestion energetique intelligente",
        "Optimisation IA",
        "Surveillance IoT",
        "Financement PayGo",
      ],
    },
    seo: {
      siteName: "Solaris 54",
      image: "/og-solaris54.jpg",
    },
    home: {
      title: "Solaris 54 - Infrastructure energetique propre pour un monde en evolution",
      description:
        "Energie solaire, infrastructure intelligente, systemes hybrides et electrification distribuee dans les marches emergents mondiaux.",
      eyebrow: "Infrastructure energetique propre",
      headline: "Infrastructure energetique propre pour un monde en evolution.",
      lead:
        "Solaris 54 developpe et deploie l'energie solaire, l'infrastructure intelligente, les systemes hybrides et l'electrification distribuee pour les gouvernements, les utilites, les industries et les communautes dans les marches emergents mondiaux.",
      proof: [
        "Soutenu par Mark Cables FZE",
        "Siege a Abidjan, portee mondiale",
        "Conception conforme IEC et IEEE",
      ],
      solutionsTitle: "Portefeuille de solutions",
      ctaTitle: "Pret a structurer votre prochain projet energetique ?",
    },
    aboutPage: {
      eyebrow: "Qui nous sommes",
      heading: "Accelerer la transition vers l'energie propre.",
      lead:
        "Solaris 54 est une entreprise energetique tournee vers l'avenir, axee sur des solutions fiables, innovantes et durables dans les marches emergents mondiaux.",
      body:
        "Basee a Abidjan, Cote d'Ivoire, et soutenue par Mark Cables FZE, Solaris 54 developpe, finance, construit et exploite des infrastructures energetiques propres.",
      quote:
        "Une infrastructure energetique fiable est la base de la croissance economique, de la resilience industrielle et du developpement durable.",
      stats: [
        { value: "54", label: "Nations africaines dans notre mandat" },
        { value: "6", label: "Verticales de solutions principales" },
        { value: "100%", label: "Focus sur l'energie propre et renouvelable" },
        { value: "24/7", label: "Operations et support des actifs" },
        { value: "$1BN+", label: "Projets attribues au niveau du groupe" },
      ],
    },
    whyPage: {
      eyebrow: "Pourquoi Solaris 54",
      heading: "Le bon partenaire pour l'energie propre.",
      lead:
        "Nous ne sommes pas seulement un fournisseur. Nous originons, finançons, construisons et exploitons sur tout le cycle.",
      cards: [
        {
          title: "Developpeur integre",
          body: "Nous originons, structurons, finançons et exploitons - du concept a la mise en service et a la performance long terme.",
        },
        {
          title: "Technologie d'abord",
          body: "La couche SSIT - IA, IoT, BEMS, reseau intelligent - est integree a chaque projet.",
        },
        {
          title: "Force du groupe",
          body: "Partie du groupe Mark Cables FZE avec une centrale HFO 400MW en construction et plus de 1 milliard USD de projets attribues.",
        },
        {
          title: "Racines locales, portee mondiale",
          body: "Siege a Abidjan avec une portee operationnelle mondiale et des standards internationaux.",
        },
      ],
    },
    approachPage: {
      eyebrow: "Comment nous operons",
      heading: "De la vision a la tension.",
      lead:
        "Un processus discipline, de la faisabilite a l'exploitation long terme et la gestion de performance.",
      steps: [
        {
          title: "Evaluer",
          body: "Evaluation du site, analyse des ressources, profil de charge et etude de faisabilite.",
        },
        {
          title: "Concevoir",
          body: "Conception technique, dimensionnement et integration SSIT selon IEC, IEEE et codes locaux.",
        },
        {
          title: "Financer",
          body: "Financement de projet, structuration PPA et engagement DFI pour reduire le risque client.",
        },
        {
          title: "Construire",
          body: "Execution EPC aux standards internationaux avec approvisionnement controle et mise en service.",
        },
        {
          title: "Exploiter",
          body: "O&M long terme, supervision SSIT, maintenance preventive et garanties de performance.",
        },
      ],
    },
    solutionsPage: {
      title: "Solutions | Solaris 54",
      description: "Six solutions energetiques integrees alimentees par SSIT.",
      eyebrow: "Solutions energetiques",
      heading: "Six solutions integrees.",
      lead: "Six solutions ciblees propulsees par la Smart Solar Intelligent Technology, pour une energie propre dans les marches emergents.",
    },
    footer: {
      tagline: "Infrastructure energetique propre mondiale · Energie sans limites",
      subsidiary: "Une filiale de",
      headquarters: "Siege a Abidjan, Cote d'Ivoire",
    },
    ssitPage: {
      title: "Plateforme SSIT | Solaris 54",
      description: "Capacites et architecture Smart Solar Intelligent Technology.",
      heading: "Technologie solaire intelligente",
      lead: "SSIT est la colonne vertebrale numerique integree a chaque projet et service Solaris 54.",
      platformEyebrow: "Intelligence energetique",
      platformSubheading: "Propulse par SSIT™",
      platformLead:
        "SSIT est la plateforme proprietaire d'infrastructure intelligente de Solaris 54, connectant IA, IoT, automatisation et analytique energetique dans un seul systeme d'exploitation.",
      liveStatusTitle: "Statut reseau en direct",
      liveStatusValue: "Dispatch IA actif",
      liveMetrics: [
        { label: "Actifs connectes", value: "248" },
        { label: "Sites supervises", value: "34" },
        { label: "Precision des previsions", value: "97%" },
      ],
      architecture: ["Capteurs", "Cloud", "Analytique", "Optimisation", "Controle"],
      capabilities: [
        {
          title: "Optimisation energetique pilotee par IA",
          tag: "Prevision",
          points: [
            "Previsions de charge et de solaire pour la planification quotidienne",
            "Consignes tenant compte des tarifs pour reduire les pointes",
            "Ajustements continus selon les performances reelles du site",
          ],
        },
        {
          title: "Supervision distante IoT",
          tag: "Operations",
          points: [
            "Telemetrie en temps reel des onduleurs, compteurs et stockages",
            "Alertes de defaut et diagnostic a distance des actifs",
            "Vue flotte sur C&I, telecom et mini-reseaux hybrides",
          ],
        },
        {
          title: "Gestion energetique des batiments (BEMS)",
          tag: "Batiments",
          points: [
            "Orchestration HVAC, eclairage et recharge VE sur une meme couche",
            "Controle base sur des regles selon l'occupation et les charges critiques",
            "Suivi des baselines energetiques pour ESG et conformite",
          ],
        },
        {
          title: "Analytique et reporting energetique",
          tag: "Insights",
          points: [
            "KPI par actif pour disponibilite, rendement et economies",
            "Tableaux de bord pour equipes finance, exploitation et ESG",
            "Rapports mensuels automatises pour les parties prenantes",
          ],
        },
        {
          title: "Integration reseau intelligente",
          tag: "Reseau",
          points: [
            "Logique de controle pour operation hybride ou en ilotage",
            "Interoperabilite avec SCADA utilite et plateformes tierces",
            "Protections qualite d'energie pour sites critiques",
          ],
        },
      ],
      ctaTitle: "Planifiez votre architecture SSIT avec Solaris 54.",
      ctaLead: "Alignez controle, analytique et priorites de deploiement avant l'EPC.",
      ctaButton: "Planifier un atelier technique",
    },
    marketsPage: {
      title: "Marches | Solaris 54",
      description: "Empreinte sur 8 regions de marches emergents mondiaux.",
      heading: "Marches mondiaux",
      lead: "Focus de marche equilibre entre Afrique, Moyen-Orient, Asie-Pacifique, Amerique latine et marches insulaires.",
    },
    groupPage: {
      title: "Structure du groupe | Solaris 54",
      description: "Positionnement de Solaris 54 dans le groupe Mark Cables FZE.",
      eyebrow: "Membre du Groupe Mark Cables FZE",
      headingBefore: "Soutenu par une ",
      headingHighlight: "infrastructure",
      headingAfter: " eprouvee.",
      body1:
        "Solaris 54 est la plateforme dediee aux energies renouvelables et a l'infrastructure intelligente du groupe Mark Cables FZE. Tandis que MPETS dirige les projets IPP, HT et gas-to-power, Solaris 54 est le vehicule du groupe pour le solaire, les systemes intelligents et l'acces a l'energie.",
      body2:
        "Partout ou MPETS developpe des infrastructures, Solaris 54 suit avec la couche energie propre. Madagascar, Mozambique, Burkina Faso et tous les futurs marches MPETS sont developpes selon cette strategie de groupe integree.",
      mpetsLinkTitle: "Mark Power Energy & Technology Solutions (MPETS)",
      mpetsLinkSub: "IPP · Transport HT · Gaz-a-Energie · 400MW HFO Burkina Faso",
      parentLinkTitle: "Mark Cables FZE",
      parentLinkSub: "Jebel Ali, Dubai · Fabrication Fils & Cables · Contrats EPC",
      cta: "Explorer les opportunites de partenariat",
      orgParentName: "Mark Cables FZE",
      orgParentSub: "Societe Mere · Jebel Ali, EAU",
      orgMpetsSub: "IPP · Gaz-a-Energie · Transport HT · BESS",
      orgSolarisSub: "Solaire · Tech Intelligente · Hybride · Solaires Domestiques · Mini-Reseaux — ",
      orgSolarisHq: "Siege Abidjan",
      shared: "Marches partages : Madagascar · Mozambique · Burkina Faso · et tous les futurs deploiements MPETS",
    },
    contactPage: {
      title: "Contact | Solaris 54",
      description: "Contacter Solaris 54 pour vos demandes d'infrastructure energetique propre.",
      lead: "Abidjan, Cote d'Ivoire. Siege groupe a Jebel Ali Free Zone, Dubai, EAU.",
      steps: ["Revue initiale et qualification", "Appel de cadrage et proposition d'etapes suivantes"],
      placeholders: {
        firstName: "Prenom",
        lastName: "Nom",
        organisation: "Organisation",
        email: "Adresse email",
        country: "Pays",
        countryPriorityLabel: "Marches prioritaires",
        countryAllLabel: "Tous les pays",
        interest: "Service d'interet",
        message: "Message / Description du projet",
      },
      options: [
        "Electrification rurale",
        "Developpement de mini-reseaux",
        "Infrastructure de recharge rapide VE",
        "Solutions energetiques commerciales et industrielles (C&I)",
        "Solutions d'energie verte hors-reseau",
        "VPP — Centrales virtuelles",
        "Smart Solar Intelligent Technology (SSIT)",
        "Projets gouvernementaux et institutionnels",
        "Partenariat strategique",
        "Renseignement general",
      ],
      success: "Merci. Votre demande est prete pour soumission.",
      error: "Veuillez remplir tous les champs obligatoires.",
    },
    notFoundPage: {
      title: "Introuvable | Solaris 54",
      description: "Page introuvable.",
    },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("solaris54_lang") || "en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        localStorage.setItem("solaris54_lang", next);
        setLang(next);
      },
      t: translations[lang],
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext(null);

export const translations = {
  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      ssit: "SSIT",
      markets: "Markets",
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
      ssitLayer: "SSIT Layer",
    },
    seo: {
      siteName: "Solaris 54",
      image: "/og-solaris54.jpg",
    },
    home: {
      title: "Solaris 54 - Clean Energy Infrastructure Worldwide",
      description: "Developer-led clean energy infrastructure across emerging markets.",
      eyebrow: "Clean Energy Infrastructure Worldwide",
      headline: "Developer-led energy infrastructure for governments, utilities, and enterprise clients.",
      lead: "Originate. Finance. Build. Operate. Solaris 54 delivers full-lifecycle clean energy infrastructure across global emerging markets.",
      proof: [
        "Backed by Mark Cables FZE",
        "Abidjan HQ, Global Reach",
        "IEC and IEEE-aligned design",
      ],
      solutionsTitle: "Solutions Portfolio",
      ctaTitle: "Ready to structure your next energy project?",
    },
    solutionsPage: {
      title: "Solutions | Solaris 54",
      description: "Seven integrated clean energy service lines powered by SSIT.",
      heading: "Integrated Solutions",
      lead: "Seven core services. No standalone BESS offer. Smart Solar Intelligent Technology embedded in every service line.",
    },
    ssitPage: {
      title: "SSIT Platform | Solaris 54",
      description: "Smart Solar Intelligent Technology capabilities and architecture.",
      heading: "Smart Solar Intelligent Technology",
      lead: "SSIT is the digital backbone embedded across every Solaris 54 project and service.",
      platformEyebrow: "Smart Energy Intelligence",
      platformSubheading: "Powered by SSIT™",
      platformLead:
        "SSIT is Solaris 54's proprietary smart infrastructure platform connecting AI, IoT, automation, and energy analytics into one operating system for modern energy ecosystems.",
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
      eyebrow: "Mark Cables Group",
      heading: "Group Structure",
      lead: "Solaris 54 is the clean energy and smart infrastructure platform within the Mark Cables FZE group.",
      parentLabel: "Parent Group",
      subsidiariesLabel: "Group Entity",
      parent: "Parent Group - Jebel Ali Free Zone, Dubai, UAE",
      mpets: "IPP, Gas-to-Power, HV Transmission, BESS",
      solaris: "Solar, Smart Tech, Hybrid, SHS, Mini-Grids - Abidjan HQ",
      manufacturing: "Wire and Cable, Supply Chain, EPC Support",
      sharedMarketsLabel: "Shared markets",
      sharedMarkets: ["Madagascar", "Mozambique", "Burkina Faso", "Future MPETS markets"],
      shared: "Shared markets: Madagascar, Mozambique, Burkina Faso, and future MPETS deployments.",
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
        interest: "Solution Interest",
        message: "Message / Project Description",
      },
      options: [
        "C&I Rooftop Solar",
        "Hybrid Mini-Grids",
        "Industrial & Commercial Smart Buildings",
        "Data Centre Energy Infrastructure",
        "Solar + BESS for Telecom Towers",
        "Agro-Solar Projects",
        "Rural Electrification & Solar Home Systems",
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
      solutions: "Solutions",
      ssit: "SSIT",
      markets: "Marches",
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
      ssitLayer: "Couche SSIT",
    },
    seo: {
      siteName: "Solaris 54",
      image: "/og-solaris54.jpg",
    },
    home: {
      title: "Solaris 54 - Infrastructure energetique propre mondiale",
      description: "Infrastructure energetique propre pilotee par developpeur dans les marches emergents.",
      eyebrow: "Infrastructure energetique propre mondiale",
      headline: "Infrastructure energetique pilotee par un developpeur pour gouvernements, utilites et clients entreprise.",
      lead: "Originer. Financer. Construire. Exploiter. Solaris 54 fournit une infrastructure energetique propre sur tout le cycle de vie dans les marches emergents mondiaux.",
      proof: [
        "Soutenu par Mark Cables FZE",
        "Siege a Abidjan, portee mondiale",
        "Conception conforme IEC et IEEE",
      ],
      solutionsTitle: "Portefeuille de solutions",
      ctaTitle: "Pret a structurer votre prochain projet energetique ?",
    },
    solutionsPage: {
      title: "Solutions | Solaris 54",
      description: "Sept lignes de services energetiques integrees alimentees par SSIT.",
      heading: "Solutions integrees",
      lead: "Sept services principaux. Aucune offre BESS autonome. Smart Solar Intelligent Technology integree dans chaque service.",
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
      eyebrow: "Groupe Mark Cables",
      heading: "Structure du groupe",
      lead: "Solaris 54 est la plateforme d'energie propre et d'infrastructure intelligente du groupe Mark Cables FZE.",
      parentLabel: "Groupe parent",
      subsidiariesLabel: "Entite du groupe",
      parent: "Groupe parent - Jebel Ali Free Zone, Dubai, EAU",
      mpets: "IPP, gaz-vers-energie, transmission HT, BESS",
      solaris: "Solaire, smart tech, hybride, SHS, mini-reseaux - Siege Abidjan",
      manufacturing: "Cables, chaine d'approvisionnement, support EPC",
      sharedMarketsLabel: "Marches partages",
      sharedMarkets: ["Madagascar", "Mozambique", "Burkina Faso", "Futurs marches MPETS"],
      shared: "Marches partages : Madagascar, Mozambique, Burkina Faso et futurs deploiements MPETS.",
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
        interest: "Service d'interet",
        message: "Message / Description du projet",
      },
      options: [
        "Solaire toiture C&I",
        "Mini-reseaux hybrides",
        "Batiments intelligents C&I",
        "Infrastructure energetique data centre",
        "Solaire + BESS pour tours telecom",
        "Projets agro-solaires",
        "Electrification rurale et systemes solaires domestiques",
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

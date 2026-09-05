export type Locale = "de" | "en";

export const content = {
  de: {
    nav: {
      name: "CW",
      home: "Home",
      work: "Projekte",
      about: "Über mich",
      services: "Leistungen",
      contact: "Kontakt",
      menu: "Menü",
      close: "Schließen",
      language: "Sprache",
      sectionNav: "Seitenabschnitte",
    },
    scrollNav: {
      hero: "Start",
      pillars: "Schwerpunkte",
      services: "Leistungen",
      work: "Projekte",
      approach: "Arbeitsweise",
      about: "Über mich",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Design Thinking · Product Ownership · Agile Delivery",
      headlineLines: ["Ideation.", "Product.", "Delivery."],
      valueProp: "Von der Idee zum wirksamen digitalen Produkt.",
      cta: "Ausgewählte Arbeit",
      secondary: "Arbeit ansehen",
      scroll: "Scrollen",
    },
    pillars: {
      items: [
        {
          title: "Ideation",
          text: "Möglichkeiten erkennen. Ideen entwickeln. Design Thinking · Workshops · Customer Centricity",
        },
        {
          title: "Product",
          text: "Ideen fokussieren. Lösungen gestalten. Roadmap · Priorisierung · Product Ownership",
        },
        {
          title: "Delivery",
          text: "Produkte umsetzen. Wirkung erzeugen. Agile Delivery · Teams · Go-Live",
        },
      ],
    },
    positioning: {
      kicker: "Kernbotschaft",
      heading: "Ideen werden durch Umsetzung wirksam.",
      text: "Ich verbinde kreative Ideation mit strukturierter Delivery – von der ersten Idee bis zum digitalen Produkt.",
    },
    services: {
      heading: "Kreativität trifft Umsetzung.",
      intro: "Design Thinking · Product · Delivery · Wirkung",
      items: [
        {
          number: "01",
          title: "Ideation",
          text: "Design Thinking · Innovation · Workshops",
        },
        {
          number: "02",
          title: "Product",
          text: "Vision · Roadmap · Backlog · Priorisierung",
        },
        {
          number: "03",
          title: "Delivery",
          text: "Agile · Scrum · Go-Live · Rollout",
        },
        {
          number: "04",
          title: "Leadership",
          text: "Stakeholder · Teams · Governance",
        },
      ],
    },
    work: {
      kicker: "Ausgewählte Arbeit",
      heading: "Von komplexen Herausforderungen zu realer Wirkung.",
      intro:
        "Eine Auswahl an Projekten an der Schnittstelle von Innovation, digitaler Transformation, Produktentwicklung und menschzentriertem Design.",
      cta: "Case Study ansehen",
      resultLabel: "Kennzahl",
      projects: [
        {
          id: "health-portal",
          number: "01",
          category: "Public Sector · Digital Transformation",
          title: "Öffentliches Gesundheitsportal",
          text: "Eine skalierbare digitale Plattform, die 76 Gesundheitsbehörden, Bürger und Organisationen verbindet.",
          metric: "76 Behörden",
          role: "Senior Product Owner & Innovation Manager",
          image: "/images/work/01-health.jpg",
          imageAlt:
            "Digitale Gesundheitsversorgung und moderne öffentliche Verwaltung",
          span: "wide",
        },
        {
          id: "automotive",
          number: "02",
          category: "Automotive · Digital Product",
          title: "B2B AfterSales Platform",
          text: "Eine globale B2B-Plattform für komplexe AfterSales-Prozesse in der Automobilindustrie.",
          metric: "5+ Märkte",
          role: "Product Owner & Co-Delivery Lead",
          image: "/images/work/02-automotive.jpg",
          imageAlt: "Premium-Automobil und digitale Mobilität",
          span: "tall",
        },
        {
          id: "workshops",
          number: "03",
          category: "Innovation · Design Thinking",
          title: "Design Thinking Workshops",
          text: "Konzeption und Facilitation von 50+ mehrtägigen Design-Thinking-Workshops und Trainings — von Nutzerbedarf zu greifbaren Lösungen.",
          metric: "50+ Workshops",
          role: "Design Thinking Facilitator",
          image: "/images/work/03-workshops.jpg",
          imageAlt: "Kollaborativer Design-Thinking-Workshop",
          span: "default",
        },
        {
          id: "aviation",
          number: "04",
          category: "Aviation · Customer Experience",
          title: "Customer Journey Innovation",
          text: "Sechs Monate Coaching von Customer-Journey-Expertinnen und -Experten in der Aviation — Design Thinking für Airport Security und Handgepäck an Bord.",
          metric: "2 Use Cases",
          role: "Design Thinking Coach & Facilitator",
          image: "/images/work/04-aviation.jpg",
          imageAlt: "Moderner Flughafen und Passagierreise",
          span: "default",
        },
        {
          id: "application",
          number: "05",
          category: "Public Sector · User Research",
          title: "Digitale Antragsprozesse",
          text: "Neunmonatige Design-Thinking-Nutzeranalyse zur Optimierung digitaler Antragsprozesse und zur Befähigung von Projektteams.",
          metric: "9 Monate",
          role: "User Research / Design Thinking Lead",
          image: "/images/work/05-research.jpg",
          imageAlt: "UX-Research und digitales Service Design",
          span: "default",
        },
        {
          id: "business-models",
          number: "06",
          category: "Innovation · Business Models",
          title: "Neue Geschäftsmodelle",
          text: "Entwicklung neuer Geschäftsmodelle von der Ideation bis zum Prototyp — Automotive und Consumer Goods.",
          metric: "Ideation → Prototyp",
          role: "Innovation Manager",
          image: "/images/work/06-business.jpg",
          imageAlt: "Strategische Workshop-Arbeit an Geschäftsmodellen",
          span: "default",
        },
        {
          id: "agile-cop",
          number: "07",
          category: "Agile · Team Enablement",
          title: "Agile Community of Practice",
          text: "Aufbau und Leitung einer Agile Community of Practice — Wissenstransfer, Coaching und kontinuierliche Verbesserung für Teams.",
          metric: "Team Enablement",
          role: "Agile Lead / Community Lead",
          image: "/images/work/07-agile.jpg",
          imageAlt: "Multidisziplinäres Team in kollaborativer Arbeit",
          span: "wide",
        },
      ],
    },
    approach: {
      heading: "Von der Frage zur Wirkung.",
      intro:
        "Von vielen Möglichkeiten zu einer Lösung. Von einer Lösung zu Wirkung.",
      stepNavLabel: "Prozessschritte",
      nextStep: "Nächster Schritt",
      prevStep: "Vorheriger Schritt",
      swipeHint: "← Wischen · Tippen →",
      steps: [
        {
          title: "Analyse",
          text: "Menschen · Kontext · Problem",
          keywords: ["Menschen", "Kontext", "Problem"],
        },
        {
          title: "Beschreiben",
          text: "Problem klar machen",
          keywords: ["Problem", "klar machen"],
        },
        {
          title: "Ideen kreieren",
          text: "Möglichkeiten öffnen",
          keywords: ["Möglichkeiten", "öffnen"],
        },
        {
          title: "Fokussieren",
          text: "Ideen priorisieren",
          keywords: ["Ideen", "priorisieren"],
        },
        {
          title: "Umsetzen",
          text: "Produkt entwickeln",
          keywords: ["Produkt", "entwickeln"],
        },
        {
          title: "Skalieren",
          text: "Wirkung entfalten",
          keywords: ["Wirkung", "entfalten"],
        },
      ],
    },
    about: {
      heading: "Strukturiert denken. Kreativ arbeiten. Umsetzen.",
      portrait: "Porträt von Chris",
      bio: "Innovation, Design Thinking und Product Delivery verbinden meine Arbeit seit Jahren. Meine Stärke: aus Ideen klare Lösungen und aus Lösungen wirksame Produkte machen.",
      styleHeading: "Ideen → Produkte → Wirkung",
      styleText:
        "Ich bringe Ideen in die Umsetzung — mit Design Thinking, Product Ownership und Agile Delivery.",
      cta: "Mehr über mich",
      facts: [
        { label: "Erfahrung", value: "8+ Jahre Innovation & Digital Transformation" },
        { label: "Workshops", value: "50+ Design-Thinking-Workshops" },
        { label: "Features", value: "100+ Features in globalen Produkten" },
        { label: "Nutzer", value: "10.000+ Nutzer · 50+ FTE international gesteuert" },
      ],
    },
    contact: {
      heading: "Eine Idee? Ein Produkt? Eine Herausforderung?",
      body: "Lass uns sprechen.",
      cta: "Lass uns sprechen",
    },
    footer: {
      name: "CW",
      email: "[EMAIL PLACEHOLDER]",
      linkedin: "LinkedIn",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    imprint: {
      title: "Impressum",
      accordingTo: "Angaben gemäß § 5 DDG",
      name: "[Vor- und Nachname]",
      street: "[Straße und Hausnummer]",
      city: "[PLZ und Ort]",
      country: "Deutschland",
      contactHeading: "Kontakt",
      emailLabel: "E-Mail",
      email: "[EMAIL PLACEHOLDER]",
      phoneLabel: "Telefon",
      phone: "[OPTIONAL PHONE PLACEHOLDER]",
      responsibleHeading:
        "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      responsibleName: "[Vor- und Nachname]",
      responsibleAddress: "[Anschrift]",
      noticeHeading: "Hinweis",
      notice:
        "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "[Vor- und Nachname]",
            "[Anschrift]",
            "[E-Mail]",
          ],
        },
        {
          heading: "2. Allgemeine Hinweise",
          paragraphs: [
            "Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.",
          ],
        },
        {
          heading: "3. Hosting",
          paragraphs: [
            "Diese Website wird bei einem Drittanbieter gehostet: [HOSTING PROVIDER].",
            "Im Rahmen der Bereitstellung der Website können technische Daten wie IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Ressource sowie Browser- und Geräteinformationen verarbeitet werden.",
          ],
        },
        {
          heading: "4. Server-Logfiles",
          paragraphs: [
            "Beim Aufruf der Website können Zugriffsdaten in Server-Logfiles erfasst werden. Diese dienen der Sicherheit, dem technischen Betrieb und der Fehlerbehebung.",
            "Aufbewahrungsdauer: [RETENTION PERIOD / HOSTING PROVIDER INFORMATION TO BE CONFIRMED]",
          ],
        },
        {
          heading: "5. Kontakt",
          paragraphs: [
            "Wenn Sie mich per E-Mail kontaktieren ([EMAIL PLACEHOLDER]), werden die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.",
            "Es besteht derzeit kein Kontaktformular auf dieser Website.",
          ],
        },
        {
          heading: "6. LinkedIn",
          paragraphs: [
            "Diese Website enthält einen externen Link zu meinem LinkedIn-Profil. Beim Klick werden Sie zu LinkedIn weitergeleitet. Es wird kein LinkedIn-Widget eingebettet und es werden keine LinkedIn-Skripte von dieser Website geladen.",
            "Für die Verarbeitung personenbezogener Daten auf LinkedIn gelten die Datenschutzbestimmungen von LinkedIn.",
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "Diese Website setzt derzeit keine nicht erforderlichen Cookies ein.",
            "Für die Speicherung der Sprachauswahl (DE/EN) kann der lokale Speicher des Browsers (localStorage) genutzt werden. Dabei handelt es sich nicht um Cookies.",
          ],
        },
        {
          heading: "8. Analyse",
          paragraphs: [
            "Currently no analytics service is actively used on this website.",
          ],
        },
        {
          heading: "9. Rechte der betroffenen Personen",
          paragraphs: [
            "Soweit die gesetzlichen Voraussetzungen vorliegen, stehen Ihnen unter anderem folgende Rechte zu:",
          ],
          list: [
            "Auskunftsrecht",
            "Recht auf Berichtigung",
            "Recht auf Löschung",
            "Recht auf Einschränkung der Verarbeitung",
            "Widerspruchsrecht",
            "Recht auf Datenübertragbarkeit, soweit anwendbar",
            "Beschwerderecht bei einer Aufsichtsbehörde",
          ],
          closing:
            "Zuständige Datenschutzaufsichtsbehörde: [COMPETENT DATA PROTECTION AUTHORITY]",
        },
        {
          heading: "10. Änderungen dieser Datenschutzerklärung",
          paragraphs: [
            "Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website oder die zugrunde liegenden Verarbeitungsvorgänge ändern.",
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      name: "CW",
      home: "Home",
      work: "Projects",
      about: "About",
      services: "Services",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      language: "Language",
      sectionNav: "Page sections",
    },
    scrollNav: {
      hero: "Start",
      pillars: "Focus areas",
      services: "Services",
      work: "Projects",
      approach: "How I work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Design Thinking · Product Ownership · Agile Delivery",
      headlineLines: ["Ideation.", "Product.", "Delivery."],
      valueProp: "From idea to impactful digital product.",
      cta: "Selected work",
      secondary: "View my work",
      scroll: "Scroll",
    },
    pillars: {
      items: [
        {
          title: "Ideation",
          text: "Spot opportunities. Develop ideas. Design Thinking · Workshops · Customer Centricity",
        },
        {
          title: "Product",
          text: "Focus ideas. Shape solutions. Roadmap · Prioritisation · Product Ownership",
        },
        {
          title: "Delivery",
          text: "Build products. Create impact. Agile Delivery · Teams · Go-Live",
        },
      ],
    },
    positioning: {
      kicker: "Core message",
      heading: "Ideas become effective through execution.",
      text: "I connect creative ideation with structured delivery — from the first idea to the digital product.",
    },
    services: {
      heading: "Creativity meets execution.",
      intro: "Design Thinking · Product · Delivery · Impact",
      items: [
        {
          number: "01",
          title: "Ideation",
          text: "Design Thinking · Innovation · Workshops",
        },
        {
          number: "02",
          title: "Product",
          text: "Vision · Roadmap · Backlog · Prioritisation",
        },
        {
          number: "03",
          title: "Delivery",
          text: "Agile · Scrum · Go-Live · Rollout",
        },
        {
          number: "04",
          title: "Leadership",
          text: "Stakeholders · Teams · Governance",
        },
      ],
    },
    work: {
      kicker: "Selected work",
      heading: "From complex challenges to real-world impact.",
      intro:
        "A selection of projects at the intersection of innovation, digital transformation, product development and human-centered design.",
      cta: "View case study",
      resultLabel: "Key metric",
      projects: [
        {
          id: "health-portal",
          number: "01",
          category: "Public Sector · Digital Transformation",
          title: "Public Health Portal",
          text: "A scalable digital platform connecting 76 health authorities, citizens and organizations.",
          metric: "76 health authorities",
          role: "Senior Product Owner & Innovation Manager",
          image: "/images/work/01-health.jpg",
          imageAlt:
            "Digital public health services and contemporary administration",
          span: "wide",
        },
        {
          id: "automotive",
          number: "02",
          category: "Automotive · Digital Product",
          title: "B2B AfterSales Platform",
          text: "A global B2B platform connecting complex automotive AfterSales processes.",
          metric: "5+ global markets",
          role: "Product Owner & Co-Delivery Lead",
          image: "/images/work/02-automotive.jpg",
          imageAlt: "Premium automotive and digital mobility",
          span: "tall",
        },
        {
          id: "workshops",
          number: "03",
          category: "Innovation · Design Thinking",
          title: "Design Thinking Workshops",
          text: "Designed and facilitated 50+ multi-day Design Thinking workshops and trainings to turn user needs into tangible solutions.",
          metric: "50+ workshops",
          role: "Design Thinking Facilitator",
          image: "/images/work/03-workshops.jpg",
          imageAlt: "Collaborative Design Thinking workshop environment",
          span: "default",
        },
        {
          id: "aviation",
          number: "04",
          category: "Aviation · Customer Experience",
          title: "Customer Journey Innovation",
          text: "Trained and coached Customer Journey Experts in aviation over six months, applying Design Thinking to airport security and onboard hand luggage use cases.",
          metric: "2 key use cases",
          role: "Design Thinking Coach & Facilitator",
          image: "/images/work/04-aviation.jpg",
          imageAlt: "Modern airport terminal and passenger journey",
          span: "default",
        },
        {
          id: "application",
          number: "05",
          category: "Public Sector · User Research",
          title: "Digital Application Processes",
          text: "Conducted a 9-month Design Thinking-based user analysis to optimize digital application processes and enable project teams in user-centric methodologies.",
          metric: "9-month analysis",
          role: "User Research / Design Thinking Lead",
          image: "/images/work/05-research.jpg",
          imageAlt: "UX research and digital service design",
          span: "default",
        },
        {
          id: "business-models",
          number: "06",
          category: "Innovation · Business Models",
          title: "New Business Models",
          text: "Developed new business models from ideation to prototyping across automotive and consumer goods.",
          metric: "Ideation → prototype",
          role: "Innovation Manager",
          image: "/images/work/06-business.jpg",
          imageAlt: "Strategic workshop on business model innovation",
          span: "default",
        },
        {
          id: "agile-cop",
          number: "07",
          category: "Agile · Team Enablement",
          title: "Agile Community of Practice",
          text: "Led an Agile Community of Practice to enable teams through knowledge sharing, coaching and continuous improvement.",
          metric: "Team enablement",
          role: "Agile Lead / Community Lead",
          image: "/images/work/07-agile.jpg",
          imageAlt: "Multidisciplinary team collaborating",
          span: "wide",
        },
      ],
    },
    approach: {
      heading: "From question to impact.",
      intro:
        "From many possibilities to one solution. From one solution to impact.",
      stepNavLabel: "Process steps",
      nextStep: "Next step",
      prevStep: "Previous step",
      swipeHint: "← Swipe · Tap →",
      steps: [
        {
          title: "Analysis",
          text: "People · Context · Problem",
          keywords: ["People", "Context", "Problem"],
        },
        {
          title: "Describe",
          text: "Clarify the problem",
          keywords: ["Clarify", "the problem"],
        },
        {
          title: "Create ideas",
          text: "Open possibilities",
          keywords: ["Open", "possibilities"],
        },
        {
          title: "Focus",
          text: "Prioritise ideas",
          keywords: ["Prioritise", "ideas"],
        },
        {
          title: "Implement",
          text: "Develop product",
          keywords: ["Develop", "product"],
        },
        {
          title: "Scale",
          text: "Unfold impact",
          keywords: ["Unfold", "impact"],
        },
      ],
    },
    about: {
      heading: "Think clearly. Work creatively. Deliver.",
      portrait: "Portrait of Chris",
      bio: "Innovation, Design Thinking and product delivery have shaped my work for years. My strength: turning ideas into clear solutions — and solutions into products that deliver.",
      styleHeading: "Ideas → Products → Impact",
      styleText:
        "I bring ideas into execution — with Design Thinking, Product Ownership and Agile Delivery.",
      cta: "More about me",
      facts: [
        { label: "Experience", value: "8+ years innovation & digital transformation" },
        { label: "Workshops", value: "50+ Design Thinking workshops" },
        { label: "Features", value: "100+ features in global products" },
        { label: "Users", value: "10,000+ users · 50+ FTE led internationally" },
      ],
    },
    contact: {
      heading: "An idea? A product? A challenge?",
      body: "Let's talk.",
      cta: "Let's talk",
    },
    footer: {
      name: "CW",
      email: "[EMAIL PLACEHOLDER]",
      linkedin: "LinkedIn",
      imprint: "Legal Notice",
      privacy: "Privacy Policy",
    },
    imprint: {
      title: "Legal Notice",
      accordingTo: "Information pursuant to § 5 DDG",
      name: "[First and last name]",
      street: "[Street and house number]",
      city: "[Postcode and city]",
      country: "Germany",
      contactHeading: "Contact",
      emailLabel: "Email",
      email: "[EMAIL PLACEHOLDER]",
      phoneLabel: "Phone",
      phone: "[OPTIONAL PHONE PLACEHOLDER]",
      responsibleHeading:
        "Responsible for content pursuant to § 18 (2) MStV",
      responsibleName: "[First and last name]",
      responsibleAddress: "[Address]",
      noticeHeading: "Note",
      notice:
        "The content of this website has been prepared with the greatest possible care. However, no guarantee can be given for the accuracy, completeness or timeliness of the content.",
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Data Controller",
          paragraphs: [
            "[First and last name]",
            "[Address]",
            "[Email]",
          ],
        },
        {
          heading: "2. General information",
          paragraphs: [
            "This privacy policy explains how personal data is processed when you use this website.",
          ],
        },
        {
          heading: "3. Hosting",
          paragraphs: [
            "This website is hosted by a third-party provider: [HOSTING PROVIDER].",
            "In the course of providing the website, technical data such as IP address, time of access, requested resource, and browser or device information may be processed.",
          ],
        },
        {
          heading: "4. Server Log Files",
          paragraphs: [
            "When you access the website, access data may be recorded in server log files. This data is used for security, technical operation and troubleshooting.",
            "Retention period: [RETENTION PERIOD / HOSTING PROVIDER INFORMATION TO BE CONFIRMED]",
          ],
        },
        {
          heading: "5. Contact",
          paragraphs: [
            "If you contact me by email ([EMAIL PLACEHOLDER]), the information you provide will be processed in order to handle your request.",
            "There is currently no contact form on this website.",
          ],
        },
        {
          heading: "6. External Links",
          paragraphs: [
            "This website contains an external link to my LinkedIn profile. Clicking the link takes you to LinkedIn. No LinkedIn widget is embedded, and no LinkedIn scripts are loaded by this website.",
            "Personal data processing on LinkedIn is governed by LinkedIn’s own privacy policy.",
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "This website currently does not use non-essential cookies.",
            "Language preference (DE/EN) may be stored in the browser’s local storage (localStorage). This is not a cookie.",
          ],
        },
        {
          heading: "8. Analytics",
          paragraphs: [
            "Currently no analytics service is actively used on this website.",
          ],
        },
        {
          heading: "9. Data Subject Rights",
          paragraphs: [
            "Where the legal requirements are met, you have rights including:",
          ],
          list: [
            "Right of access",
            "Right to rectification",
            "Right to erasure",
            "Right to restriction of processing",
            "Right to object",
            "Right to data portability, where applicable",
            "Right to lodge a complaint with a supervisory authority",
          ],
          closing:
            "Competent data protection authority: [COMPETENT DATA PROTECTION AUTHORITY]",
        },
        {
          heading: "10. Changes to this privacy policy",
          paragraphs: [
            "This privacy policy may be updated when the website or its processing activities change.",
          ],
        },
      ],
    },
  },
} as const;

/** External profile — not embedded; open in a new tab only. */
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/christoph-wannemacher-b0b063113/";

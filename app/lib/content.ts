export type Locale = "de" | "en";

export const content = {
  de: {
    nav: {
      work: "Arbeit",
      about: "Über mich",
      services: "Leistungen",
      contact: "Kontakt",
      menu: "Menü",
      close: "Schließen",
      language: "Sprache",
    },
    hero: {
      greeting: "Hi, ich bin Chris.",
      roleLine1: "Senior Product Owner",
      roleLine2: "& Digital Transformation Manager.",
      body: "Ich helfe Organisationen, komplexe digitale Herausforderungen in Produkte zu verwandeln, die echten Nutzen stiften — von Strategie und Discovery bis Delivery und Go-Live.",
      cta: "Lass uns sprechen",
      secondary: "Arbeit ansehen",
      flow: ["Discover", "Align", "Build", "Deliver"],
    },
    positioning: {
      kicker: "Positionierung",
      heading:
        "Ich bringe Struktur in komplexe digitale Produkte und helfe Teams, von der Idee zur Umsetzung zu kommen.",
      text: "Acht Jahre in Programmen, in denen viele Stakeholder, Systeme und Erwartungen aufeinandertreffen. Ich arbeite nah an der Sache: klare Prioritäten, ehrliche Trade-offs, Delivery, die hält.",
    },
    services: {
      heading: "Was ich tue",
      intro:
        "Für Geschäftsführung, IT- und Digitalverantwortliche und Product Leader, die ein Gegenüber brauchen — nicht ein weiteres Statusmeeting.",
      items: [
        {
          number: "01",
          title: "Product Ownership",
          text: "Ich übernehme das Produkt: Scope, Reihenfolge, Entscheidungen. Damit ein komplexes Vorhaben ein lieferbares Ganzes bleibt — kein Sammelsurium von Tickets.",
        },
        {
          number: "02",
          title: "Interim Product Owner & Projektleitung",
          text: "Wenn eine Initiative Führung braucht, steige ich ein, setze den Takt und arbeite mit dem Team, das schon da ist. Ohne Parallelwelt, ohne Show.",
        },
        {
          number: "03",
          title: "Digitale Transformation in der Umsetzung",
          text: "Strategie, Discovery und Go-Live gehören zusammen. Ich halte Business und Technologie in einem Gespräch — und die Lieferung an dem, was das Unternehmen tragen kann.",
        },
      ],
    },
    work: {
      kicker: "Ausgewählte Arbeit",
      heading: "Zwei Programme, die zeigen, wie ich arbeite.",
      intro:
        "Öffentlicher Sektor und Automotive. Unterschiedliche Welten, dieselbe Aufgabe: Komplexität in ein Produkt übersetzen, das live geht.",
      cta: "Über dieses Projekt sprechen",
      projects: [
        {
          id: "health",
          kicker: "Public Health",
          title: "Bayerisches Portal für den öffentlichen Gesundheitsdienst",
          role: "Senior Product Owner / Innovation Manager",
          text: "Eine digitale Plattform für 76 Gesundheitsämter — mit einer Lieferorganisation, die größer war als manches Produktteam, und Anforderungen, die sich nicht in einem Workshop klären ließen.",
          impact: [
            "Digitale Plattform für 76 Gesundheitsämter",
            ">300 Anforderungen",
            ">50 FTE Lieferorganisation",
            "Go-Live nach 18 Monaten",
          ],
        },
        {
          id: "automotive",
          kicker: "Automotive · B2B",
          title: "AfterSales-Plattform für den internationalen Vertrieb",
          role: "Product Owner / Delivery Lead",
          text: "Ein B2B-Produkt mit tiefen Systemintegrationen, Rollout über Märkte hinweg und einem Team, das mit der Plattform mitwachsen musste.",
          impact: [
            "40+ Kernfunktionen",
            "Internationaler Rollout",
            "Komplexe Systemintegrationen",
            "Team von 13 auf 23 FTE skaliert",
          ],
        },
      ],
    },
    approach: {
      heading: "Wie ich arbeite",
      intro:
        "Kein Framework-Theater. Ein Rhythmus, den Führung und Delivery gemeinsam halten können.",
      steps: [
        {
          title: "Discover",
          text: "Was ist das eigentliche Problem — und für wen? Bevor wir bauen, klären wir Nutzen, Grenzen und was bewusst nicht kommt.",
        },
        {
          title: "Align",
          text: "Geschäftsführung, IT, Fachbereiche, Lieferanten. Ich mache aus vielen Meinungen eine Richtung, die entscheidbar bleibt.",
        },
        {
          title: "Build",
          text: "Kleine, ehrliche Increments. Priorität vor Vollständigkeit. Das Team weiß, warum diese Woche genau das gebaut wird.",
        },
        {
          title: "Deliver",
          text: "Go-Live ist kein Anhang. Betrieb, Adoption und die nächste Entscheidung gehören zum Produkt — nicht zu einem späteren Projekt.",
        },
      ],
    },
    about: {
      heading: "Über mich",
      portrait: "Porträt folgt",
      p1: "Seit mehr als acht Jahren arbeite ich als Product Owner und Digital Transformation Manager in Umfeldern, die selten einfach sind: viele Stakeholder, agile Lieferung, internationale Teams, und die Spannung zwischen Technologie und Geschäft.",
      p2: "Ich denke in Produkten, nicht in Projektphasen. Struktur heißt für mich: sichtbar machen, was zählt, was warten kann — und wer entscheidet.",
      p3: "Außerhalb der Arbeit sitze ich oft auf dem Rad. Lange Strecken, Wetter, Tempo — Ausdauersport hat mich gelehrt, ruhig zu bleiben, wenn es unübersichtlich wird. Neugier und Reisen tun den Rest: andere Orte, andere Arten, Probleme zu lösen.",
      facts: [
        { label: "Erfahrung", value: "8+ Jahre" },
        { label: "Fokus", value: "Product · Transformation" },
        { label: "Sprachen", value: "Deutsch, Englisch" },
      ],
    },
    contact: {
      heading: "Wenn das Produkt komplex ist — lassen Sie uns sprechen.",
      body: "Eine kurze Nachricht reicht. Sagen Sie, wo Sie stehen. Dann sehen wir, ob ich die richtige Person an Ihrer Seite bin.",
      cta: "Nachricht schreiben",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum · Platzhalter",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      services: "Services",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    hero: {
      greeting: "Hi, I'm Chris.",
      roleLine1: "Senior Product Owner",
      roleLine2: "& Digital Transformation Manager.",
      body: "I help organizations turn complex digital challenges into products that create real value — from strategy and discovery through delivery and go-live.",
      cta: "Let’s talk",
      secondary: "View my work",
      flow: ["Discover", "Align", "Build", "Deliver"],
    },
    positioning: {
      kicker: "Positioning",
      heading:
        "I bring structure to complex digital products and help teams move from idea to delivery.",
      text: "Eight years in programmes where stakeholders, systems and expectations collide. I stay close to the work: clear priorities, honest trade-offs, delivery that holds.",
    },
    services: {
      heading: "What I do",
      intro:
        "For managing directors, heads of IT and digital, and product leaders who need a counterpart — not another status meeting.",
      items: [
        {
          number: "01",
          title: "Product ownership",
          text: "I own the product: scope, sequence, decisions. So a complex initiative stays one deliverable whole — not a pile of tickets.",
        },
        {
          number: "02",
          title: "Interim Product Owner & project lead",
          text: "When an initiative needs leadership, I step in, set the rhythm, and work with the team already there. No parallel universe. No theatre.",
        },
        {
          number: "03",
          title: "Digital transformation that ships",
          text: "Strategy, discovery and go-live belong together. I keep business and technology in one conversation — and delivery aligned with what the organisation can absorb.",
        },
      ],
    },
    work: {
      kicker: "Selected work",
      heading: "Two programmes that show how I work.",
      intro:
        "Public sector and automotive. Different worlds, same job: turn complexity into a product that goes live.",
      cta: "Talk about this project",
      projects: [
        {
          id: "health",
          kicker: "Public Health",
          title: "Bavarian public health portal",
          role: "Senior Product Owner / Innovation Manager",
          text: "A digital platform for 76 health authorities — with a delivery organisation larger than many product teams, and requirements that would not fit into a single workshop.",
          impact: [
            "Digital platform for 76 health authorities",
            ">300 requirements",
            ">50 FTE delivery organisation",
            "Go-live after 18 months",
          ],
        },
        {
          id: "automotive",
          kicker: "Automotive · B2B",
          title: "Automotive B2B AfterSales platform",
          role: "Product Owner / Delivery Lead",
          text: "A B2B product with deep system integrations, rollout across markets, and a team that had to grow with the platform.",
          impact: [
            "40+ core features",
            "International rollout",
            "Complex system integrations",
            "Team scaled from 13 to 23 FTE",
          ],
        },
      ],
    },
    approach: {
      heading: "How I work",
      intro:
        "No framework theatre. A rhythm leadership and delivery can actually keep.",
      steps: [
        {
          title: "Discover",
          text: "What is the real problem — and for whom? Before we build, we name the value, the edges, and what we will not do.",
        },
        {
          title: "Align",
          text: "Leadership, IT, the business, suppliers. I turn many opinions into a direction that can still be decided.",
        },
        {
          title: "Build",
          text: "Small, honest increments. Priority over completeness. The team knows why this week is for this, not that.",
        },
        {
          title: "Deliver",
          text: "Go-live is not an appendix. Operations, adoption and the next decision belong to the product — not to a later project.",
        },
      ],
    },
    about: {
      heading: "About me",
      portrait: "Portrait coming soon",
      p1: "For more than eight years I have worked as a Product Owner and Digital Transformation Manager in places that are rarely simple: complex stakeholder maps, agile delivery, international teams, and the stretch between technology and the business.",
      p2: "I think in products, not project phases. Structure, for me, means making visible what matters, what can wait — and who decides.",
      p3: "Outside work I spend a lot of time on a bike. Long rides, weather, pace — endurance sport taught me to stay calm when things get messy. Curiosity and travel do the rest: other places, other ways of solving problems.",
      facts: [
        { label: "Experience", value: "8+ years" },
        { label: "Focus", value: "Product · Transformation" },
        { label: "Languages", value: "German, English" },
      ],
    },
    contact: {
      heading: "If the product is complex — let’s talk.",
      body: "A short note is enough. Tell me where you are. Then we see whether I am the right person on your side of the table.",
      cta: "Write a message",
    },
    footer: {
      rights: "All rights reserved.",
      imprint: "Imprint · placeholder",
    },
  },
} as const;

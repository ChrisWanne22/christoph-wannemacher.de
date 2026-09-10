export type Locale = "de" | "en";

/** External profile — not embedded; open in a new tab only. */
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/christoph-wannemacher-b0b063113/";

export const content = {
  de: {
    nav: {
      name: "CW",
      home: "Home",
      work: "Geschichten",
      about: "Über mich",
      contact: "LinkedIn",
      menu: "Menü",
      close: "Schließen",
      language: "Sprache",
      sectionNav: "Seitenabschnitte",
    },
    scrollNav: {
      hero: "Start",
      how: "Was mich antreibt",
      work: "Geschichten",
      beliefs: "Unterwegs gelernt",
      curious: "Noch neugierig",
      beyond: "Über mich",
      contact: "Hallo",
    },
    hero: {
      greeting: "Christoph Wannemacher",
      headlineLines: ["Ideen.", "Machen."],
      valueProp:
        "Ich bin neugierig auf fast alles, was neu und ein bisschen knifflig ist. Ich mag es, Gedanken zu sortieren, Dinge auszuprobieren und daraus etwas Echtes zu machen.",
      cta: "Sag hallo auf LinkedIn",
    },
    how: {
      heading: "Was mich wirklich antreibt",
      intro:
        "Die Momente, in denen man spürt: Hier entsteht gerade gemeinsam etwas Sinnvolles.",
      items: [
        {
          number: "01",
          title: "Die Leute kennenlernen",
          text: "Ich will wissen, mit wem ich arbeite — nicht nur die Rolle. Vertrauen macht fast alles leichter.",
        },
        {
          number: "02",
          title: "Den Nebel lichten",
          text: "Ich mag den Moment, wenn aus chaotischer Kreativität plötzlich eine Richtung wird. Wenn aus vielen Gedanken etwas entsteht, bei dem alle sagen: Ja. Genau da wollen wir hin.",
        },
        {
          number: "03",
          title: "Zusammen arbeiten",
          text: "Nicht allein am Schreibtisch. Lieber mit Menschen, die ihre ganz eigene Perspektive und Expertise mitbringen. Wenn daraus plötzlich etwas entsteht, das keiner allein so hätte bauen können — genau das macht für mich den Unterschied.",
        },
      ],
    },
    work: {
      kicker: "Geschichten von unterwegs",
      heading: "Dinge, in die ich gestolpert bin",
      intro:
        "Kein Lebenslauf. Ein paar Abenteuer.",
      projects: [
        {
          id: "health-portal",
          number: "01",
          category: "Öffentlicher Dienst · ein sehr großes Backlog",
          title: "Das Gesundheitsportal",
          subtitle:
            "Eine große Ideenliste. Ein sehr großes Backlog. Achtzehn Monate später: Go-Live.",
          text: "Es begann mit einer langen Liste aus Ideen, Wünschen und Anforderungen — und Diskussionen darüber, was zuerst kommen soll. Also saßen wir vor einem sehr großen Backlog. Wir schoben um, stritten, einigten uns, priorisierten. Dann nochmal. Und nochmal. Was folgte: unzählige Gespräche, Verhandlungen, Änderungen, Iterationen und Development-Sprints. Achtzehn Monate später ging das Gesundheitsportal live — ein digitaler Service für Bürger, Organisationen und Gesundheitsbehörden.",
          metric: "18 Monate · Ideenliste → Go-Live",
          span: "default",
        },
        {
          id: "automotive",
          number: "02",
          category: "Automotive · ein Ort statt vieler Systeme",
          title: "Die AfterSales-Plattform",
          subtitle: "Ein Ort statt vieler Systeme. Und dann fing die eigentliche Arbeit an.",
          text: "Das Ziel klang einfach: aus einer Welt unterschiedlicher B2B-AfterSales-Systeme einen Ort machen, an dem Leute Dinge erledigen können. Was folgte, war alles andere als einfach. Feature um Feature, Integration um Integration, Markt um Markt. Über mehr als 40 Sprints habe ich versucht, Abhängigkeiten zu erkennen, Risiken klein zu halten und das Ganze in Bewegung zu behalten. Es kam immer etwas, das wir nicht vorhergesehen hatten. Aber mit einem starken Team, einer guten Portion Pragmatismus und ziemlich viel Spaß unterwegs haben wir’s hingekriegt — Sprint für Sprint.",
          metric: "40+ Sprints · Europa und darüber hinaus",
          span: "default",
        },
        {
          id: "innovation",
          number: "03",
          category: "Workshops · leere Wände · klebrige Zettel",
          title: "Wenn niemand weiß, was als Nächstes kommt",
          subtitle: "Von „keine Ahnung“ zu „warte… das könnte klappen“",
          text: "Ich freue mich über Räume mit leerer Wand, Sticky Notes und Menschen, die das Problem unterschiedlich sehen. Über 50 Workshops später weiß ich: Die erste Idee ist selten die gute. Wir haben viel ausprobiert, einiges verworfen, und ab und zu war ich genauso unsicher wie alle anderen. Genau dann wird’s interessant — besonders, wenn AI und neue Technik plötzlich Teil der Frage werden.",
          metric: "50+ Workshops · Idee → Versuch → Lernen",
          span: "full",
        },
      ],
    },
    curious: {
      kicker: "Offene Fragen",
      heading: "Immer noch neugierig auf …",
      intro: "Dinge, über die ich gerne weiter nachdenke — auch nach Feierabend.",
      items: [
        {
          title: "Produkte, die bleiben",
          text: "Warum klebt manches am Alltag fest — und anderes verschwindet nach dem Launch wieder?",
        },
        {
          title: "Menschen + Maschinen",
          text: "Wie sieht gute Zusammenarbeit aus, wenn ein Teil des Teams kein Mensch mehr ist?",
        },
        {
          title: "Agil ohne Theater",
          text: "Was bleibt von Agilität übrig, wenn die Organisation groß und unübersichtlich wird?",
        },
      ],
    },
    beyond: {
      heading: "Wenn der Laptop zu ist",
      portrait: "Porträt von Christoph Wannemacher",
      bio: "Dann schwimme, radle und laufe ich manchmal freiwillig mehrere Stunden am Stück. Scheinbar mag ich es, Dinge unnötig schwer zu machen. Dazwischen: neue Orte, Fußball, Familie — und die Freude, komplizierte Dinge so zu zeichnen, dass sie plötzlich einfach wirken.",
      interests: [
        { label: "Triathlon", value: "Freiwillig zu lange unterwegs" },
        { label: "Fußball", value: "Mitspielen, mitfiebern, mitleiden" },
        { label: "Reisen", value: "Neue Orte, neue Perspektiven" },
        { label: "Familie", value: "Alltägliche Abenteuer" },
        { label: "Skizzen & Folien", value: "Chaos sichtbar machen" },
        { label: "Technik", value: "Anfassen, ausprobieren, staunen" },
      ],
    },
    beliefs: {
      kicker: "Was hängen geblieben ist",
      heading: "Unterwegs gelernt",
      items: [
        {
          number: "01",
          title: "Vertrauen zeigt sich, wenn’s schwierig wird.",
          text: "Wenn etwas schiefläuft, hilft kein Schönreden. Offen damit umgehen, ehrlich sein und gemeinsam nach vorne schauen – darauf kommt es an.",
        },
        {
          number: "02",
          title: "Es wird meistens teurer als geplant.",
          text: "Fast immer. Neue Erkenntnisse, neue Anforderungen, Dinge, die man vorher nicht gesehen hat. Entscheidend ist nicht, dass alles nach Plan läuft – sondern dass man vernünftig damit umgeht.",
        },
        {
          number: "03",
          title: "Manchmal muss man sich einfach gegenübersitzen.",
          text: "Teams können über Chats, Calls und Tools unglaublich viel schaffen. Aber für manche Dinge braucht es einen Tisch, ein paar Menschen und ein echtes Gespräch.",
        },
      ],
    },
    contact: {
      heading: "Sag Hallo.",
      body: "Einfach ein Gespräch auf LinkedIn. Kaffee, Bier oder ein kurzes Hello — alles okay.",
      cta: "Sag Hallo auf LinkedIn",
    },
    footer: {
      name: "Christoph Wannemacher",
      linkedin: "LinkedIn",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    imprint: {
      title: "Impressum",
      accordingTo: "Angaben gemäß § 5 DDG",
      name: "Christoph Wannemacher",
      street: "Stettiner Weg 4",
      city: "65719 Hofheim am Taunus",
      country: "Deutschland",
      emailLabel: "E-Mail",
      email: "info@christoph-wannemacher.de",
      responsibleHeading: "Verantwortlich für den Inhalt",
      noticeHeading: "Hinweis",
      notice:
        "Diese Website dient der persönlichen und beruflichen Präsentation von Christoph Wannemacher. Sie stellt kein entgeltliches Leistungs- oder Dienstleistungsangebot dar.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
          ],
          address: {
            name: "Christoph Wannemacher",
            street: "Stettiner Weg 4",
            city: "65719 Hofheim am Taunus",
            country: "Deutschland",
          },
          email: {
            label: "E-Mail",
            address: "info@christoph-wannemacher.de",
          },
        },
        {
          heading: "2. Allgemeine Hinweise",
          paragraphs: [
            "Diese Website dient der persönlichen und beruflichen Präsentation von Christoph Wannemacher.",
            "Die Website wurde bewusst datensparsam gestaltet. Es werden keine Analyse- oder Marketingtools eingesetzt und keine personenbezogenen Daten zu Werbe- oder Marketingzwecken verarbeitet.",
            "Beim Besuch der Website werden nur solche Daten verarbeitet, die für die technische Bereitstellung und die Sicherheit der Website erforderlich sind.",
          ],
        },
        {
          heading: "3. Hosting durch GitHub Pages",
          paragraphs: [
            "Diese Website wird über GitHub Pages, einen Hosting-Dienst von GitHub, bereitgestellt.",
            "GitHub Pages dient der Bereitstellung der statischen Website. Die Website selbst verfügt über keinen eigenen Server, keine Datenbank und keine serverseitige Verarbeitung von Besucherdaten.",
            "Beim Aufruf der Website können durch den Hosting-Anbieter technische Verbindungsdaten, insbesondere IP-Adressen, verarbeitet und in Server- bzw. Sicherheitsprotokollen gespeichert werden. GitHub weist darauf hin, dass IP-Adressen von Besuchern von GitHub-Seiten aus Sicherheitsgründen protokolliert werden können.",
            "Die Verarbeitung dient insbesondere der technischen Bereitstellung, der Stabilität und der Sicherheit des Dienstes sowie der Erkennung und Abwehr von Missbrauch.",
            "Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und zuverlässigen Bereitstellung dieser Website.",
            "Weitere Informationen zum Umgang von GitHub mit personenbezogenen Daten findest du in der:",
          ],
          link: {
            label: "GitHub Privacy Statement",
            href: "https://docs.github.com/site-policy/privacy-policies/github-privacy-statement",
          },
        },
        {
          heading: "4. Cookies und lokale Speicherung",
          paragraphs: [
            "Diese Website verwendet keine Cookies zu Analyse-, Marketing- oder Werbezwecken.",
            "Für die Speicherung der vom Besucher ausgewählten Sprache verwendet die Website den lokalen Browserspeicher (localStorage). Dabei wird der Schlüssel site-locale verwendet und ausschließlich die ausgewählte Sprache (de oder en) gespeichert.",
            "Diese Information wird nicht an den Betreiber der Website übertragen und nicht mit anderen personenbezogenen Daten verknüpft.",
            "Eine Speicherung im sessionStorage findet nicht statt.",
          ],
        },
        {
          heading: "5. Analyse und Tracking",
          paragraphs: [
            "Auf dieser Website werden keine Analyse- oder Trackingdienste eingesetzt.",
            "Insbesondere werden keine Dienste wie:",
          ],
          list: [
            "Google Analytics",
            "Matomo",
            "Microsoft Clarity",
            "Hotjar",
            "Meta Pixel",
            "LinkedIn Insight Tag",
          ],
          closing:
            "eingesetzt. Es findet daher keine Erstellung von Nutzerprofilen zu Analyse- oder Marketingzwecken statt.",
        },
        {
          heading: "6. Externe Inhalte und Dienste",
          paragraphs: [
            "Die Website verwendet keine eingebetteten Inhalte von Drittanbietern wie YouTube, Vimeo, Google Maps oder Social-Media-Widgets.",
            "Es werden auch keine externen Skripte, externen Stylesheets oder extern geladenen Schriftarten verwendet.",
            "Die verwendeten Schriftarten werden im Rahmen des Website-Builds eingebunden und anschließend über den eigenen Webauftritt ausgeliefert. Beim Besuch der Website findet daher keine direkte Verbindung zu Google Fonts statt.",
          ],
        },
        {
          heading: "7. LinkedIn",
          paragraphs: [
            "Die Website enthält Links zu meinem Profil bei LinkedIn.",
            "Beim bloßen Besuch dieser Website wird keine Verbindung zu LinkedIn hergestellt. Erst wenn du einen entsprechenden Link anklickst, wirst du zu LinkedIn weitergeleitet.",
            "Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen von LinkedIn.",
          ],
        },
        {
          heading: "8. Kontaktaufnahme",
          paragraphs: [
            "Auf der Website befindet sich kein Kontaktformular und keine automatisierte Kontaktfunktion.",
            "Die bereitgestellten Kontaktmöglichkeiten führen zu meinem LinkedIn-Profil.",
            "Wenn du mich über LinkedIn kontaktierst, erfolgt die Verarbeitung deiner Daten durch LinkedIn und gegebenenfalls durch mich im Rahmen der Kommunikation. Für die Verarbeitung durch LinkedIn gelten die Datenschutzbestimmungen von LinkedIn.",
          ],
        },
        {
          heading: "9. Deine Rechte",
          paragraphs: [
            "Du hast nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte:",
          ],
          list: [
            "Recht auf Auskunft gemäß Art. 15 DSGVO",
            "Recht auf Berichtigung gemäß Art. 16 DSGVO",
            "Recht auf Löschung gemäß Art. 17 DSGVO",
            "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO",
            "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO",
            "Recht auf Widerspruch gegen bestimmte Verarbeitungen gemäß Art. 21 DSGVO",
          ],
          closing:
            "Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren.",
        },
        {
          heading: "10. Aktualität dieser Datenschutzerklärung",
          paragraphs: [
            "Diese Datenschutzerklärung wird angepasst, wenn sich die technische Gestaltung oder die auf dieser Website eingesetzten Dienste ändern oder eine Anpassung aufgrund gesetzlicher Anforderungen erforderlich wird.",
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      name: "CW",
      home: "Home",
      work: "Stories",
      about: "About me",
      contact: "LinkedIn",
      menu: "Menu",
      close: "Close",
      language: "Language",
      sectionNav: "Page sections",
    },
    scrollNav: {
      hero: "Start",
      how: "What lights me up",
      work: "Stories",
      beliefs: "Lessons",
      curious: "Still curious",
      beyond: "About me",
      contact: "Say hi",
    },
    hero: {
      greeting: "Christoph Wannemacher",
      headlineLines: ["Ideas.", "Make."],
      valueProp:
        "I'm curious about almost anything that's new and a little tricky. I like sorting thoughts, trying things out, and turning them into something real.",
      cta: "Say hi on LinkedIn",
    },
    how: {
      heading: "What actually lights me up",
      intro:
        "The moments when you can feel it: something meaningful is taking shape — together.",
      items: [
        {
          number: "01",
          title: "Getting to know people",
          text: "I want to know who I’m working with — not just the role. Trust makes almost everything easier.",
        },
        {
          number: "02",
          title: "Clearing the fog",
          text: "I love the moment when chaotic creativity suddenly becomes a direction. When many thoughts turn into something everyone can say yes to: Yes. That’s where we want to go.",
        },
        {
          number: "03",
          title: "Working together",
          text: "Not alone at a desk. Prefer people who bring their own perspective and expertise. When something emerges that none of us could have built alone — that’s what makes the difference for me.",
        },
      ],
    },
    work: {
      kicker: "Stories from the road",
      heading: "Things I've stumbled into",
      intro:
        "Not a résumé. A few adventures.",
      projects: [
        {
          id: "health-portal",
          number: "01",
          category: "Public service · one very large backlog",
          title: "The health portal",
          subtitle:
            "A big list of ideas. A very large backlog. Eighteen months later: go-live.",
          text: "It started with a big list of ideas, wishes and requirements — and discussions on what should come first. So we sat together with a very large backlog. We moved things around, argued, aligned, prioritized. Then we did it again. And again. What followed were countless discussions, negotiations, changes, iterations and development sprints. Eighteen months later, we shipped the health portal — a digital service used by citizens, organisations and health authorities.",
          metric: "18 months · ideas list → go-live",
          span: "default",
        },
        {
          id: "automotive",
          number: "02",
          category: "Automotive · one place instead of many systems",
          title: "The AfterSales platform",
          subtitle: "One place instead of many systems. And then the real work began.",
          text: "The goal was simple: turn a world of different B2B AfterSales systems into one place where people could get things done. What followed was anything but simple. Feature after feature, system integration after system integration, market after market. Across more than 40 sprints, I tried to spot dependencies, reduce risks and keep the whole thing moving. There was always something we hadn't seen coming. But with a great team, a good dose of pragmatism and plenty of fun along the way, we figured it out — one sprint at a time.",
          metric: "40+ sprints · Europe and beyond",
          span: "default",
        },
        {
          id: "innovation",
          number: "03",
          category: "Workshops · blank walls · sticky notes",
          title: "When nobody knows what’s next",
          subtitle: "From “no idea” to “wait… this could work”",
          text: "I light up in rooms with a blank wall, sticky notes and people who see the problem differently. Fifty-plus workshops later I know: the first idea is rarely the good one. We’ve tried a lot, thrown plenty away, and sometimes I was just as unsure as everyone else. That’s usually when it gets interesting — especially when AI and new tech suddenly join the question.",
          metric: "50+ workshops · idea → try → learn",
          span: "full",
        },
      ],
    },
    curious: {
      kicker: "Open questions",
      heading: "Still curious about …",
      intro: "Things I keep turning over — at work and after hours.",
      items: [
        {
          title: "Products that stick",
          text: "Why do some products cling to everyday life — while others vanish after launch?",
        },
        {
          title: "Humans + machines",
          text: "What does good teamwork look like when part of the team isn’t human anymore?",
        },
        {
          title: "Agile without the theatre",
          text: "What’s left of agile when the organisation gets big and messy?",
        },
      ],
    },
    beyond: {
      heading: "Outside the laptop",
      portrait: "Portrait of Christoph Wannemacher",
      bio: "That’s when I voluntarily spend several hours swimming, cycling and running in one day. Apparently I enjoy making things unnecessarily difficult. In between: new places, football, family — and the joy of sketching complicated stuff until it suddenly looks simple.",
      interests: [
        { label: "Triathlon", value: "Voluntarily too long out there" },
        { label: "Football", value: "Playing, watching, suffering" },
        { label: "Travel", value: "New places, new angles" },
        { label: "Family", value: "Everyday adventures" },
        { label: "Sketches & slides", value: "Making chaos visible" },
        { label: "Tech", value: "Touch it, try it, wonder" },
      ],
    },
    beliefs: {
      kicker: "What stuck with me",
      heading: "What I've learned along the way",
      items: [
        {
          number: "01",
          title: "Trust shows up when things get hard.",
          text: "When something goes wrong, sugarcoating doesn’t help. Be open, be honest, and look forward together — that’s what matters.",
        },
        {
          number: "02",
          title: "It usually costs more than planned.",
          text: "Almost always. New insights, new requirements, things you didn’t see coming. What matters isn’t that everything goes to plan — it’s handling it sensibly.",
        },
        {
          number: "03",
          title: "Sometimes you just need to sit across from each other.",
          text: "Teams can get an incredible amount done over chats, calls, and tools. But some things need a table, a few people, and a real conversation.",
        },
      ],
    },
    contact: {
      heading: "Say hi.",
      body: "Just a conversation on LinkedIn. Coffee, beer, or a quick hello — all fine.",
      cta: "Say hi on LinkedIn",
    },
    footer: {
      name: "Christoph Wannemacher",
      linkedin: "LinkedIn",
      imprint: "Legal Notice",
      privacy: "Privacy Policy",
    },
    imprint: {
      title: "Legal Notice",
      accordingTo: "Information according to § 5 DDG",
      name: "Christoph Wannemacher",
      street: "Stettiner Weg 4",
      city: "65719 Hofheim am Taunus",
      country: "Germany",
      emailLabel: "Email",
      email: "info@christoph-wannemacher.de",
      responsibleHeading: "Responsible for the content",
      noticeHeading: "Notice",
      notice:
        "This website is for the personal and professional presentation of Christoph Wannemacher. It does not constitute a paid service or commercial offering.",
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            "The controller responsible for the processing of personal data on this website is:",
          ],
          address: {
            name: "Christoph Wannemacher",
            street: "Stettiner Weg 4",
            city: "65719 Hofheim am Taunus",
            country: "Germany",
          },
          email: {
            label: "Email",
            address: "info@christoph-wannemacher.de",
          },
        },
        {
          heading: "2. General information",
          paragraphs: [
            "This website is for the personal and professional presentation of Christoph Wannemacher.",
            "It has been designed with data minimisation in mind. No analytics or marketing tools are used, and no personal data is processed for advertising or marketing purposes.",
            "When you visit the website, only data required for the technical provision and security of the website is processed.",
          ],
        },
        {
          heading: "3. Hosting via GitHub Pages",
          paragraphs: [
            "This website is provided via GitHub Pages, a hosting service operated by GitHub.",
            "GitHub Pages serves the static website. The website itself has no dedicated server of its own, no database, and no server-side processing of visitor data.",
            "When the website is accessed, the hosting provider may process technical connection data, in particular IP addresses, and store them in server or security logs. GitHub states that IP addresses of visitors to GitHub Pages may be logged for security reasons.",
            "This processing serves in particular the technical provision, stability and security of the service, as well as detecting and preventing abuse.",
            "The legal basis for this processing is Article 6(1)(f) GDPR. The legitimate interest is the secure and reliable provision of this website.",
            "Further information on how GitHub handles personal data is available in the:",
          ],
          link: {
            label: "GitHub Privacy Statement",
            href: "https://docs.github.com/site-policy/privacy-policies/github-privacy-statement",
          },
        },
        {
          heading: "4. Cookies and local storage",
          paragraphs: [
            "This website does not use cookies for analytics, marketing or advertising purposes.",
            "To store the language selected by the visitor, the website uses the browser’s local storage (localStorage). The key site-locale is used and only the selected language (de or en) is stored.",
            "This information is not transmitted to the website operator and is not linked to other personal data.",
            "sessionStorage is not used.",
          ],
        },
        {
          heading: "5. Analytics and tracking",
          paragraphs: [
            "No analytics or tracking services are used on this website.",
            "In particular, none of the following services are used:",
          ],
          list: [
            "Google Analytics",
            "Matomo",
            "Microsoft Clarity",
            "Hotjar",
            "Meta Pixel",
            "LinkedIn Insight Tag",
          ],
          closing:
            "Therefore, no user profiles are created for analytics or marketing purposes.",
        },
        {
          heading: "6. External content and services",
          paragraphs: [
            "The website does not use embedded third-party content such as YouTube, Vimeo, Google Maps or social-media widgets.",
            "It also does not load external scripts, external stylesheets or fonts from third-party servers at runtime.",
            "The fonts used are included during the website build and then served from this site. Visiting the website therefore does not establish a direct connection to Google Fonts.",
          ],
        },
        {
          heading: "7. LinkedIn",
          paragraphs: [
            "The website contains links to my LinkedIn profile.",
            "Simply visiting this website does not establish a connection to LinkedIn. Only when you click a corresponding link are you taken to LinkedIn.",
            "From that point on, LinkedIn’s privacy policy applies.",
          ],
        },
        {
          heading: "8. Contact",
          paragraphs: [
            "There is no contact form and no automated contact feature on this website.",
            "The contact options provided lead to my LinkedIn profile.",
            "If you contact me via LinkedIn, your data is processed by LinkedIn and, where applicable, by me in the course of that communication. LinkedIn’s privacy policy applies to processing by LinkedIn.",
          ],
        },
        {
          heading: "9. Your rights",
          paragraphs: [
            "Subject to the applicable legal requirements, you have in particular the following rights:",
          ],
          list: [
            "Right of access under Article 15 GDPR",
            "Right to rectification under Article 16 GDPR",
            "Right to erasure under Article 17 GDPR",
            "Right to restriction of processing under Article 18 GDPR",
            "Right to data portability under Article 20 GDPR",
            "Right to object to certain processing under Article 21 GDPR",
          ],
          closing:
            "You also have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data.",
        },
        {
          heading: "10. Updates to this privacy policy",
          paragraphs: [
            "This privacy policy will be updated if the technical setup or the services used on this website change, or if an update is required due to legal requirements.",
          ],
        },
      ],
    },
  },
} as const;

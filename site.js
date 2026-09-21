(function () {
  "use strict";

  var searchIndex = [
    { type: "Domain", title: "Continuity Architecture", href: "category.html?category=continuity-architecture", detail: "2 Patterns / Deep Blue Radar" },
    { type: "Domain", title: "Risk Sensing, Threat Intelligence & Early Warning", href: "category.html?category=risk-sensing-threat-intelligence-and-early-warning", detail: "2 Patterns / Deep Blue Radar" },
    { type: "Domain", title: "Customer-Facing Service Continuity", href: "category.html?category=customer-facing-service-continuity", detail: "2 Patterns / Deep Blue Radar" },
    { type: "Pattern", title: "Modular Survivability Architecture", href: "pattern.html?category=continuity-architecture&pattern=modular-survivability-architecture", detail: "Continuity Architecture" },
    { type: "Pattern", title: "Omni-Channel Fallback and Digital Substitution", href: "pattern.html?category=customer-facing-service-continuity&pattern=omni-channel-fallback-and-digital-substitution", detail: "Customer-Facing Service Continuity" },
    { type: "Pattern", title: "Impact-Tolerance and Critical-Service Mapping", href: "pattern.html?category=proactive-continuity-evaluation&pattern=impact-tolerance-and-critical-service-mapping", detail: "Proactive Continuity Evaluation" },
    { type: "Content", title: "Continuity Podcast - Farhad Inaloui", href: "podcast-ecosystem.html", detail: "Podcast / Farhad Inaloui" },
    { type: "Content", title: "Continuity Videocast - Episode 08", href: "video-core-banking.html", detail: "Videocast / Alireza Bozorgmehri" },
    { type: "Content", title: "Continuity Videocast - Episode 02", href: "videocast-ali-akhavan.html", detail: "Videocast / Ali Akhavan" },
    { type: "Content", title: "Continuity Videocast - Episode 03", href: "videocast-mohammad-farjood.html", detail: "Videocast / Mohammad Farjood" },
    { type: "Content", title: "Continuity Videocast - Episode 04", href: "videocast-ramyar-ghanbari.html", detail: "Videocast / Ramyar Ghanbari" },
    { type: "Content", title: "Continuity Videocast - Episode 05", href: "videocast-mahmoudreza-farhadi.html", detail: "Videocast / Mahmoudreza Farhadi" },
    { type: "Content", title: "Continuity Videocast - Episode 06", href: "videocast-sadegh-faramarzi.html", detail: "Videocast / Sadegh Faramarzi" },
    { type: "Content", title: "Continuity Videocast - Episode 07", href: "videocast-mostafa-sabeti.html", detail: "Videocast / Mostafa Sabeti" },
    { type: "Content", title: "Continuity Videocast - Episode 09", href: "videocast-amirhossein-shabiri.html", detail: "Videocast / Amirhossein Shabiri" },
    { type: "Content", title: "Continuity Videocast - Episode 10", href: "videocast-sadra-babaei.html", detail: "Videocast / Sadra Babaei" },
    { type: "Content", title: "Continuity Videocast - Episode 11", href: "videocast-saman-beyraghi.html", detail: "Videocast / Saman Beyraghi" },
    { type: "Content", title: "Continuity Videocast - Episode 13", href: "videocast-alireza-ghanadan.html", detail: "Videocast / Alireza Ghanadan" },
    { type: "Content", title: "Continuity Videocast - Episode 14", href: "videocast-mostafa-amiri.html", detail: "Videocast / Mostafa Amiri" },
    { type: "Content", title: "Continuity Videocast - Episode 16", href: "videocast-nima-amirshekari.html", detail: "Videocast / Nima Amirshekari" },
    { type: "Content", title: "Financial Survival and Critical Service Continuity", href: "article-technical-recovery.html", detail: "Article / Hesam Maghsoudloo" },
    { type: "Content", title: "Controlled Shutdown and Financial Trust", href: "article-controlled-shutdown.html", detail: "Article / Reza Farhadi" },
    { type: "Content", title: "Customer Relationship Continuity Starts with Persistent Identity", href: "article-customer-identity-continuity.html", detail: "Article / Reza Farhadi" },
    { type: "Content", title: "Decision-Making Under Uncertainty", href: "article-decision-making-under-uncertainty.html", detail: "Article / Reza Farhadi" },
    { type: "Content", title: "Outcome-Based Digital Transformation", href: "article-outcome-based-digital-transformation.html", detail: "Article / Sadegh Faramarzi" },
    { type: "Content", title: "The First Crisis Decision and Minimum Service", href: "article-first-decision-and-minimum-service.html", detail: "Article / Sadra Babaei" },
    { type: "Content", title: "Controlled Trust in FinTech Resilience", href: "article-controlled-trust-fintech-resilience.html", detail: "Article / Sadra Babaei" },
    { type: "Content", title: "Human Single Points of Failure", href: "article-human-single-points-of-failure.html", detail: "Article / Ali Akhavan" },
    { type: "Content", title: "Banking Service Chain Continuity", href: "article-banking-service-chain-continuity.html", detail: "Article / Ali Akhavan" },
    { type: "Content", title: "ITSM: One Brain for Many Eyes", href: "article-itsm-one-brain-for-many-eyes.html", detail: "Article / Alireza Bozorgmehri" },
    { type: "Content", title: "Service Catalog as the Operating Model", href: "article-service-catalog-operating-model.html", detail: "Article / Farhad Inaloui" },
    { type: "Content", title: "Ecosystem Continuity Governance", href: "article-ecosystem-continuity-governance.html", detail: "Article / Farhad Inaloui" },
    { type: "Content", title: "Portfolio Resilience", href: "article-portfolio-resilience.html", detail: "Article / Mohammad Farjood" },
    { type: "Content", title: "Growth in Turbulence", href: "article-growth-in-turbulence.html", detail: "Article / Mohammad Farjood" },
    { type: "Content", title: "Human Continuity Infrastructure", href: "article-human-continuity-infrastructure.html", detail: "Article / Mostafa Sabeti" },
    { type: "Content", title: "Global Learning Architecture", href: "article-global-learning-architecture.html", detail: "Article / Mostafa Sabeti" },
    { type: "Content", title: "Strategy as Subtraction", href: "article-strategy-as-subtraction.html", detail: "Article / Meysam Rajabi" },
    { type: "Content", title: "Desert Organization", href: "article-desert-organization.html", detail: "Article / Meysam Rajabi" },
    { type: "Content", title: "Expiring Transition Dependencies", href: "article-expiring-transition-dependencies.html", detail: "Article / Nima Amirshekari" },
    { type: "Content", title: "Engineering Recovery Risk", href: "article-engineering-recovery-risk.html", detail: "Article / Nima Amirshekari" },
    { type: "Content", title: "Continuity Podcast - Alireza Bozorgmehri", href: "podcast-alireza-bozorgmehri.html", detail: "Podcast / Alireza Bozorgmehri" },
    { type: "Content", title: "Continuity Podcast - Ali Akhavan", href: "podcast-ali-akhavan.html", detail: "Podcast / Ali Akhavan" },
    { type: "Content", title: "Continuity Podcast - Ramyar Ghanbari", href: "podcast-ramyar-ghanbari.html", detail: "Podcast / Ramyar Ghanbari" },
    { type: "Content", title: "Continuity Videocast - Episode 01", href: "videocast-continuity-dialogue.html", detail: "Videocast / Farhad Inaloui" },
    { type: "Content", title: "Continuity Videocast - Episode 15", href: "videocast-hesam-maghsoudloo.html", detail: "Videocast / Hesam Maghsoudloo" },
    { type: "Content", title: "Continuity Videocast - Episode 12", href: "videocast-continuity-episode-02.html", detail: "Videocast / Meysam Rajabi" },
    { type: "Content", title: "The Valley of Failure as a Continuity Lab", href: "article-pain-point-continuity-lab.html", detail: "Article / Sadegh Faramarzi" },
    { type: "Content", title: "Real BCM Starts with People, Not Backup", href: "article-human-centered-bcm.html", detail: "Article / Sadegh Faramarzi" },
    { type: "Content", title: "Assess Capability Before Writing the Continuity Plan", href: "article-capability-before-plan.html", detail: "Article / Sadra Babaei" },
    { type: "Content", title: "When the Next Capital Never Arrives", href: "article-next-capital-never-arrives.html", detail: "Article / Ali Akhavan" },
    { type: "Content", title: "The Three-Layer BCM Operating Model", href: "article-three-layer-bcm-operating-model.html", detail: "Article / Alireza Bozorgmehri" },
    { type: "Content", title: "Service Granularity and Digital Banking Resilience", href: "article-service-granularity-resilience.html", detail: "Article / Farhad Inaloui" },
    { type: "Content", title: "Banking Trust Recovery Beyond the App", href: "article-trust-recovery-banking.html", detail: "Article / Mohammad Farjood" },
    { type: "Content", title: "The Survival Trap", href: "article-survival-growth-gap.html", detail: "Article / Mostafa Sabeti" },
    { type: "Content", title: "Continuity by Market Regime", href: "article-continuity-market-regime.html", detail: "Article / Meysam Rajabi" },
    { type: "Content", title: "The Backup Site Must Carry Real Load", href: "article-backup-must-carry-load.html", detail: "Article / Nima Amirshekari" },
    { type: "Content", title: "Continuity decision game", href: "toolkit-gamecast.html", detail: "Article / interactive toolkit" },
    { type: "Person", title: "Name Surname", href: "person.html", detail: "Technocratic Leader / Governance" },
    { type: "Page", title: "Continuity", href: "continuity.html", detail: "The subject of the House" },
    { type: "Page", title: "Reports & Updates", href: "reports.html", detail: "Deep Blue Radar news and updates" },
    { type: "Page", title: "Technocratic Thinking", href: "technocratic-thinking.html", detail: "Book and method" },
    { type: "Page", title: "About the Technocratic Book", href: "technocratic-book.html", detail: "Principles, cases and shared language" },
    { type: "Page", title: "About the Technocratic Method", href: "technocratic-method.html", detail: "Define, evaluate and review" },
    { type: "Page", title: "The House", href: "house.html", detail: "Institution, discipline and community model" },
    { type: "Page", title: "Our Packages", href: "house-packages.html", detail: "Story, science and facilitated practice" },
    { type: "Page", title: "Our Events", href: "house-events.html", detail: "Subject-led House gatherings" },
    { type: "Page", title: "Contact House of Technocrats", href: "about-us.html#contact", detail: "Address, WhatsApp and general contact" },
    { type: "Page", title: "Technocratic Service Store", href: "services.html", detail: "Current and future services" },
    { type: "Page", title: "Current Services", href: "current-services.html", detail: "Available service lines" },
    { type: "Page", title: "Future Services", href: "future-services.html", detail: "Research and pilot service lines" },
    { type: "Page", title: "Contact Us", href: "about-us.html", detail: "Address, WhatsApp and contact" },
    { type: "Page", title: "Participate", href: "participate.html", detail: "Four routes into the House" }
  ];

  var directoryItems = {
    categories: [
      ["Continuity Architecture", "Architecture patterns that allow critical services to survive partial technical failure.", "category.html?category=continuity-architecture", "2 Patterns / Deep Blue Radar"],
      ["Risk Sensing, Threat Intelligence & Early Warning", "Signals, intelligence, and early-warning mechanisms that make continuity risks observable sooner.", "category.html?category=risk-sensing-threat-intelligence-and-early-warning", "2 Patterns / Deep Blue Radar"],
      ["Customer-Facing Service Continuity", "Preserving customer access, trust, and communication when normal channels are disrupted.", "category.html?category=customer-facing-service-continuity", "2 Patterns / Deep Blue Radar"],
      ["Third-Party & Partner Continuity", "Managing continuity across parties, providers, partners, and external dependencies.", "category.html?category=third-party-and-partner-continuity", "2 Patterns / Deep Blue Radar"],
      ["Continuity Governance", "Accountability, ownership, and decision structures for continuity across the organization.", "category.html?category=continuity-governance", "2 Patterns / Deep Blue Radar"],
      ["Proactive Continuity Evaluation", "Scenario testing, impact tolerance, and mapping of critical services before disruption.", "category.html?category=proactive-continuity-evaluation", "2 Patterns / Deep Blue Radar"]
    ],
    patterns: [
      ["AI / AIOps Continuity Orchestration", "Use AI to detect incidents, correlate signals, and accelerate continuity response.", "pattern.html?category=continuity-smart-management&pattern=ai-aiops-continuity-orchestration", "Continuity Smart Management"],
      ["Immutable Cyber-Recovery and Air-Gapped Resilience", "Protect recovery data from ransomware and compromised credentials.", "pattern.html?category=continuity-to-security-architectures&pattern=immutable-cyber-recovery-and-air-gapped-resilience", "Continuity to Security Architectures"],
      ["Selective Shutdown and Graceful Degradation", "Stop the smallest possible surface instead of the safest-looking large one.", "pattern.html?category=service-architecture-and-containment-engineering&pattern=selective-shutdown-and-graceful-degradation", "Service Architecture & Containment Engineering"],
      ["Manual Workaround and Fallback-by-Design", "Design the human fallback before automation fails.", "pattern.html?category=business-process-continuity-sla&pattern=manual-workaround-and-fallback-by-design", "Business Process Continuity / SLA"],
      ["Modular Survivability Architecture", "Decompose systems into services that can fail and recover one at a time.", "pattern.html?category=continuity-architecture&pattern=modular-survivability-architecture", "Continuity Architecture"],
      ["Impact-Tolerance and Critical-Service Mapping", "Define what must continue from the customer and regulator point of view.", "pattern.html?category=proactive-continuity-evaluation&pattern=impact-tolerance-and-critical-service-mapping", "Proactive Continuity Evaluation"]
    ],
    insights: [
      ["Continuity Podcast - Farhad Inaloui", "Podcast / Farhad Inaloui", "podcast-ecosystem.html", "Ecosystem continuity"],
      ["Continuity Videocast - Episode 08", "Videocast / Alireza Bozorgmehri", "video-core-banking.html", "Service architecture"],
      ["Continuity Videocast - Episode 02", "Videocast / Ali Akhavan", "videocast-ali-akhavan.html", "Business continuity"],
      ["Continuity Videocast - Episode 03", "Videocast / Mohammad Farjood", "videocast-mohammad-farjood.html", "Digital banking continuity"],
      ["Continuity Videocast - Episode 04", "Videocast / Ramyar Ghanbari", "videocast-ramyar-ghanbari.html", "Payment continuity"],
      ["Continuity Videocast - Episode 05", "Videocast / Mahmoudreza Farhadi", "videocast-mahmoudreza-farhadi.html", "Neobank and fintech continuity"],
      ["Continuity Videocast - Episode 06", "Videocast / Sadegh Faramarzi", "videocast-sadegh-faramarzi.html", "Business continuity management"],
      ["Continuity Videocast - Episode 07", "Videocast / Mostafa Sabeti", "videocast-mostafa-sabeti.html", "Adaptive continuity"],
      ["Continuity Videocast - Episode 09", "Videocast / Amirhossein Shabiri", "videocast-amirhossein-shabiri.html", "Digital banking continuity"],
      ["Continuity Videocast - Episode 10", "Videocast / Sadra Babaei", "videocast-sadra-babaei.html", "Continuity planning"],
      ["Continuity Videocast - Episode 11", "Videocast / Saman Beyraghi", "videocast-saman-beyraghi.html", "Digital asset continuity"],
      ["Continuity Videocast - Episode 13", "Videocast / Alireza Ghanadan", "videocast-alireza-ghanadan.html", "FinTech continuity"],
      ["Continuity Videocast - Episode 14", "Videocast / Mostafa Amiri", "videocast-mostafa-amiri.html", "Payment resilience"],
      ["Continuity Videocast - Episode 16", "Videocast / Nima Amirshekari", "videocast-nima-amirshekari.html", "Digital economy continuity"],
      ["Financial Survival and Critical Service Continuity", "Article / Hesam Maghsoudloo", "article-technical-recovery.html", "Financial and service continuity"],
      ["Controlled Shutdown and Financial Trust", "Article / Reza Farhadi", "article-controlled-shutdown.html", "Financial trust"],
      ["Customer Relationship Continuity Starts with Persistent Identity", "Article / Reza Farhadi", "article-customer-identity-continuity.html", "Customer identity"],
      ["Decision-Making Under Uncertainty", "Article / Reza Farhadi", "article-decision-making-under-uncertainty.html", "Crisis decision-making"],
      ["Outcome-Based Digital Transformation", "Article / Sadegh Faramarzi", "article-outcome-based-digital-transformation.html", "Digital transformation"],
      ["The First Crisis Decision and Minimum Service", "Article / Sadra Babaei", "article-first-decision-and-minimum-service.html", "Crisis command"],
      ["Controlled Trust in FinTech Resilience", "Article / Sadra Babaei", "article-controlled-trust-fintech-resilience.html", "Bank-fintech continuity"],
      ["Human Single Points of Failure", "Article / Ali Akhavan", "article-human-single-points-of-failure.html", "Human continuity"],
      ["Banking Service Chain Continuity", "Article / Ali Akhavan", "article-banking-service-chain-continuity.html", "Service chain continuity"],
      ["ITSM: One Brain for Many Eyes", "Article / Alireza Bozorgmehri", "article-itsm-one-brain-for-many-eyes.html", "IT service management"],
      ["Service Catalog as the Operating Model", "Article / Farhad Inaloui", "article-service-catalog-operating-model.html", "Service catalog"],
      ["Ecosystem Continuity Governance", "Article / Farhad Inaloui", "article-ecosystem-continuity-governance.html", "Ecosystem continuity"],
      ["Portfolio Resilience", "Article / Mohammad Farjood", "article-portfolio-resilience.html", "Portfolio resilience"],
      ["Growth in Turbulence", "Article / Mohammad Farjood", "article-growth-in-turbulence.html", "Adaptive growth"],
      ["Human Continuity Infrastructure", "Article / Mostafa Sabeti", "article-human-continuity-infrastructure.html", "Human continuity"],
      ["Global Learning Architecture", "Article / Mostafa Sabeti", "article-global-learning-architecture.html", "Global learning"],
      ["Strategy as Subtraction", "Article / Meysam Rajabi", "article-strategy-as-subtraction.html", "Strategic focus"],
      ["Desert Organization", "Article / Meysam Rajabi", "article-desert-organization.html", "Cash survival"],
      ["Expiring Transition Dependencies", "Article / Nima Amirshekari", "article-expiring-transition-dependencies.html", "Transition risk"],
      ["Engineering Recovery Risk", "Article / Nima Amirshekari", "article-engineering-recovery-risk.html", "Recovery engineering"],
      ["Continuity Podcast - Alireza Bozorgmehri", "Podcast / Alireza Bozorgmehri", "podcast-alireza-bozorgmehri.html", "Governance"],
      ["Continuity Podcast - Ali Akhavan", "Podcast / Ali Akhavan", "podcast-ali-akhavan.html", "Startup continuity"],
      ["Continuity Podcast - Ramyar Ghanbari", "Podcast / Ramyar Ghanbari", "podcast-ramyar-ghanbari.html", "Market continuity"],
      ["Continuity Videocast - Episode 01", "Videocast / Farhad Inaloui", "videocast-continuity-dialogue.html", "Continuity dialogue"],
      ["Continuity Videocast - Episode 12", "Videocast / Meysam Rajabi", "videocast-continuity-episode-02.html", "Continuity practice"],
      ["The Valley of Failure as a Continuity Lab", "Article / Sadegh Faramarzi", "article-pain-point-continuity-lab.html", "Startup continuity"],
      ["Real BCM Starts with People, Not Backup", "Article / Sadegh Faramarzi", "article-human-centered-bcm.html", "Human continuity"],
      ["Assess Capability Before Writing the Continuity Plan", "Article / Sadra Babaei", "article-capability-before-plan.html", "Continuity planning"],
      ["When the Next Capital Never Arrives", "Article / Ali Akhavan", "article-next-capital-never-arrives.html", "Startup continuity"],
      ["The Three-Layer BCM Operating Model", "Article / Alireza Bozorgmehri", "article-three-layer-bcm-operating-model.html", "BCM operating model"],
      ["Service Granularity and Digital Banking Resilience", "Article / Farhad Inaloui", "article-service-granularity-resilience.html", "Digital banking resilience"],
      ["Banking Trust Recovery Beyond the App", "Article / Mohammad Farjood", "article-trust-recovery-banking.html", "Trust recovery"],
      ["The Survival Trap", "Article / Mostafa Sabeti", "article-survival-growth-gap.html", "Survival and growth"],
      ["Continuity by Market Regime", "Article / Meysam Rajabi", "article-continuity-market-regime.html", "Continuity strategy"],
      ["The Backup Site Must Carry Real Load", "Article / Nima Amirshekari", "article-backup-must-carry-load.html", "Backup readiness"]
    ],
    people: [
      ["Name Surname", "Chief Risk Officer / Bank", "person.html", "Technocratic Leader"],
      ["Name Surname", "Resilience Strategist", "person.html", "Technocratic Thinker"],
      ["Name Surname", "Head of Core Banking", "person.html", "Technocratic Expert"],
      ["Name Surname", "Payments Architect", "person.html", "Technocratic Expert"],
      ["Name Surname", "Chief Executive Officer / Fintech", "person.html", "Technocratic Leader"],
      ["Name Surname", "Professor of Systems Engineering", "person.html", "Technocratic Thinker"]
    ]
  };

  var insightBanners = [
    {
      label: "STORY PACKAGE",
      faLabel: "پکیج روایت",
      title: "Deep Blue Radar story package",
      faTitle: "پکیج کتاب و روایت رادار دیپ‌بلو",
      text: "A packaged narrative for introducing Deep Blue Radar through a book-led story, evidence cards and guided discussion.",
      faText: "روایتی بسته‌بندی‌شده برای معرفی رادار دیپ‌بلو از مسیر کتاب، کارت‌های شواهد و گفت‌وگوی هدایت‌شده.",
      cta: "Explore the package",
      faCta: "دیدن پکیج",
      href: "technocratic-book.html",
      image: "Assets/technocratic-thinking-book-cover.png",
      alt: "Technocratic Thinking book cover used as a story package visual",
      faAlt: "جلد کتاب تفکر تکنوکراتیک به‌عنوان تصویر پکیج روایت"
    },
    {
      label: "DIGITAL EXPERIENCE",
      faLabel: "تجربه دیجیتال",
      title: "Scan, open and learn the Radar",
      faTitle: "اسکن کنید، باز کنید و رادار را یاد بگیرید",
      text: "QR-based digital experiences connect visitors to Patterns, category context and technocrat profiles during physical or digital events.",
      faText: "تجربه‌های دیجیتال مبتنی بر QR بازدیدکننده را در رویدادهای حضوری یا دیجیتال به الگوها، زمینه دسته‌بندی‌ها و پروفایل تکنوکرات‌ها وصل می‌کنند.",
      cta: "Open digital experiences",
      faCta: "دیدن تجربه‌های دیجیتال",
      href: "insights.html#insight-library",
      image: "Assets/customer-service-continuity.png",
      alt: "Customer service continuity operator in a digital experience setting",
      faAlt: "اپراتور تداوم خدمات مشتری در محیط تجربه دیجیتال"
    },
    {
      label: "RADAR GAME",
      faLabel: "بازی رادار",
      title: "Build a company Radar in a workshop",
      faTitle: "در کارگاه، رادار شرکت خودتان را بسازید",
      text: "A facilitated game helps teams identify signals, group them into domains and form a first working Radar for their organization.",
      faText: "یک بازی تسهیل‌شده به تیم‌ها کمک می‌کند نشانه‌ها را پیدا کنند، آن‌ها را در دامنه‌ها گروه‌بندی کنند و نخستین رادار کاری سازمان خود را بسازند.",
      cta: "Join a workshop",
      faCta: "پیوستن به کارگاه",
      href: "participate.html",
      image: "Assets/radar-character-designer.png",
      alt: "Monochrome robotic facilitator for a radar workshop game",
      faAlt: "تسهیل‌گر رباتیک سیاه‌وسفید برای بازی کارگاهی رادار"
    }
  ];

  var insightItems = [
    {
      title: "Continuity Podcast - Farhad Inaloui",
      titleLines: ["Continuity Podcast -", "Farhad Inaloui"],
      faTitle: "پادکست کانتینیویتی - فرهاد اینالویی",
      faTitleLines: ["پادکست کانتینیویتی -", "فرهاد اینالویی"],
      description: "An audio conversation on service continuity, decision ownership and the practical meaning of banking resilience.",
      faDescription: "گفت‌وگوی صوتی درباره تداوم خدمت، مالکیت تصمیم و معنای عملی تاب‌آوری بانکی.",
      href: "podcast-ecosystem.html",
      type: "Podcast",
      faType: "پادکست",
      topic: "Ecosystem continuity",
      faTopic: "تداوم اکوسیستم",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Farhad Inaloui",
      faAuthor: "فرهاد اینالویی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-podcast-v3.png",
      authorImage: "Assets/farhad-inaloui.jpg",
      alt: "Dark podcast microphone cover image",
      faAlt: "تصویر کاور پادکست با میکروفون تیره",
      audioSrc: "Assets/podcast-farhad-inaloui-135747.mp3",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Podcast", "پادکست"], ["Interview", "مصاحبه"], ["Banking", "بانکداری"]]
    },
    {
      title: "Continuity Videocast - Episode 08",
      titleLines: ["Continuity Videocast -", "Episode 08"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۸",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۸"],
      description: "A videocast on service boundaries, recovery domains and modular survivability.",
      faDescription: "ویدیوکستی درباره مرزهای سرویس، دامنه‌های بازیابی و بقاپذیری ماژولار.",
      href: "video-core-banking.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Service architecture",
      faTopic: "معماری سرویس",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Alireza Bozorgmehri",
      faAuthor: "علیرضا بزرگمهری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/alireza-bozorgmehri.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Podcast", "پادکست"], ["Architecture", "معماری"]]
    },
    {
      title: "Continuity Videocast - Episode 02",
      titleLines: ["Continuity Videocast -", "Episode 02"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۲",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۲"],
      description: "A documented continuity conversation with Ali Akhavan on business continuity in banking and the executive realities behind service resilience.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با علی اخوان، مدیرعامل تکنوتجارت.",
      href: "videocast-ali-akhavan.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Business continuity",
      faTopic: "تداوم کسب‌وکار",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Ali Akhavan",
      faAuthor: "علی اخوان",
      date: "May 2026",
      faDate: "اردیبهشت ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/ali-akhavan.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Business continuity", "تداوم کسب‌وکار"], ["Banking", "بانکداری"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 03",
      titleLines: ["Continuity Videocast -", "Episode 03"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۳",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۳"],
      description: "A documented continuity conversation with Mohammad Farjood on digital banking, technology investment and continuity in connected service portfolios.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با محمد فرجود درباره بانکداری دیجیتال، سرمایه‌گذاری فناوری و تداوم سبد خدمات.",
      href: "videocast-mohammad-farjood.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Digital banking continuity",
      faTopic: "تداوم بانکداری دیجیتال",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Mohammad Farjood",
      faAuthor: "محمد فرجود",
      date: "May 2026",
      faDate: "اردیبهشت ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/mohammad-farjood.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Digital banking", "بانکداری دیجیتال"], ["Technology investment", "سرمایه‌گذاری فناوری"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 04",
      titleLines: ["Continuity Videocast -", "Episode 04"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۴",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۴"],
      description: "A documented continuity conversation with Ramyar Ghanbari on electronic payments, market coordination and preserving financial access.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با رامیار قنبری، رئیس انجمن شرکت‌های پرداخت الکترونیک ایران.",
      href: "videocast-ramyar-ghanbari.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Payment continuity",
      faTopic: "تداوم پرداخت",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Ramyar Ghanbari",
      faAuthor: "رامیار قنبری",
      date: "May 2026",
      faDate: "اردیبهشت ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/profile-executive-05.png",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Payments", "پرداخت"], ["Market continuity", "تداوم بازار"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 05",
      titleLines: ["Continuity Videocast -", "Episode 05"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۵",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۵"],
      description: "A documented continuity conversation with Mahmoudreza Farhadi on neobank and fintech continuity, service adaptation and banking resilience.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با محمودرضا فرهادی، مشاور نئوبانک و فین‌تک.",
      href: "videocast-mahmoudreza-farhadi.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Neobank and fintech continuity",
      faTopic: "تداوم نئوبانک و فین‌تک",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Mahmoudreza Farhadi",
      faAuthor: "محمودرضا فرهادی",
      date: "May 2026",
      faDate: "اردیبهشت ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/reza-farhadi.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Neobank", "نئوبانک"], ["FinTech", "فین‌تک"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 06",
      titleLines: ["Continuity Videocast -", "Episode 06"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۶",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۶"],
      description: "A documented continuity conversation with Sadegh Faramarzi on business continuity management, consulting practice and the executive discipline behind resilient organizations.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با صادق فرامرزی، عضو هیئت‌مدیره فدراسیون مدیریت و مشاوران کسب‌وکار ایران.",
      href: "videocast-sadegh-faramarzi.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Business continuity management",
      faTopic: "مدیریت تداوم کسب‌وکار",
      industry: "Enterprise resilience",
      faIndustry: "تاب‌آوری سازمانی",
      author: "Sadegh Faramarzi",
      faAuthor: "صادق فرامرزی",
      date: "June 2026",
      faDate: "خرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/sadegh-faramarzi.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["BCM", "مدیریت تداوم"], ["Consulting", "مشاوره"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 07",
      titleLines: ["Continuity Videocast -", "Episode 07"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۷",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۷"],
      description: "A documented continuity conversation with Mostafa Sabeti on banking technology, adaptive continuity and preserving room for the next move.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با مصطفی ثابتی، مدیرعامل هلدینگ توسعه فناوری اطلاعات گردشگری ایران.",
      href: "videocast-mostafa-sabeti.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Adaptive continuity",
      faTopic: "تداوم تطبیقی",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Mostafa Sabeti",
      faAuthor: "مصطفی ثابتی",
      date: "May 2026",
      faDate: "اردیبهشت ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/mostafa-sabeti.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Adaptive continuity", "تداوم تطبیقی"], ["Digital transformation", "تحول دیجیتال"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 09",
      titleLines: ["Continuity Videocast -", "Episode 09"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۹",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۹"],
      description: "A documented continuity conversation with Amirhossein Shabiri on information technology, banking operations and preserving service continuity.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با امیرحسین شبیری، معاون فناوری اطلاعات مؤسسه ملل.",
      href: "videocast-amirhossein-shabiri.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Digital banking continuity",
      faTopic: "تداوم بانکداری دیجیتال",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Amirhossein Shabiri",
      faAuthor: "امیرحسین شبیری",
      date: "June 2026",
      faDate: "تیر ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/amirhossein-shabiri.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Digital banking", "بانکداری دیجیتال"], ["Information technology", "فناوری اطلاعات"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 10",
      titleLines: ["Continuity Videocast -", "Episode 10"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۰",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۰"],
      description: "A documented continuity conversation with Sadra Babaei on capability, smart operations and innovation readiness inside continuity work.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با صدرا بابایی، مدیرعامل کارخانه هوشمندسازی و نوآوری امیدینو.",
      href: "videocast-sadra-babaei.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Continuity planning",
      faTopic: "برنامه تداوم کسب‌وکار",
      industry: "Operational resilience",
      faIndustry: "تاب‌آوری عملیاتی",
      author: "Sadra Babaei",
      faAuthor: "صدرا بابایی",
      date: "July 2026",
      faDate: "تیر ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/sadra-babaei.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Continuity planning", "برنامه تداوم"], ["Smart operations", "عملیات هوشمند"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 11",
      titleLines: ["Continuity Videocast -", "Episode 11"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۱",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۱"],
      description: "A documented continuity conversation with Saman Beyraghi on digital assets, exchange trust and continuity in crypto-financial services.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با سامان بیرقی، مدیرعامل و رئیس هیئت‌مدیره او ام پی فینکس.",
      href: "videocast-saman-beyraghi.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Digital asset continuity",
      faTopic: "تداوم دارایی دیجیتال",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Saman Beyraghi",
      faAuthor: "سامان بیرقی",
      date: "July 2026",
      faDate: "تیر ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/saman-beyraghi.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Digital assets", "دارایی دیجیتال"], ["Crypto exchange", "صرافی رمزارز"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 13",
      titleLines: ["Continuity Videocast -", "Episode 13"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۳",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۳"],
      description: "A documented continuity conversation with Alireza Ghanadan on lending platforms, fintech operations and continuity of customer-facing finance.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با علیرضا قنادان، مدیرعامل لندو.",
      href: "videocast-alireza-ghanadan.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "FinTech continuity",
      faTopic: "تداوم فین‌تک",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Alireza Ghanadan",
      faAuthor: "علیرضا قنادان",
      date: "July 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/alireza-ghanadan.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["FinTech", "فین‌تک"], ["Lending", "اعتباردهی"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 14",
      titleLines: ["Continuity Videocast -", "Episode 14"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۴",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۴"],
      description: "A documented continuity conversation with Mostafa Amiri on payment infrastructure, fintech trust and service continuity in transaction flows.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با مصطفی امیری، هم‌بنیان‌گذار و مدیرعامل زرین‌پال.",
      href: "videocast-mostafa-amiri.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Payment resilience",
      faTopic: "تاب‌آوری پرداخت",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Mostafa Amiri",
      faAuthor: "مصطفی امیری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/profile-executive-06.png",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Payments", "پرداخت"], ["FinTech", "فین‌تک"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Continuity Videocast - Episode 16",
      titleLines: ["Continuity Videocast -", "Episode 16"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۶",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۶"],
      description: "A documented continuity conversation with Nima Amirshekari on digital economy, financial technology and continuity signals across the market.",
      faDescription: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با نیما امیرشکاری، کارشناس اقتصاد دیجیتال.",
      href: "videocast-nima-amirshekari.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Digital economy continuity",
      faTopic: "تداوم اقتصاد دیجیتال",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Nima Amirshekari",
      faAuthor: "نیما امیرشکاری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/nima-amirshekari.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Digital economy", "اقتصاد دیجیتال"], ["Financial technology", "فناوری مالی"], ["Interview", "مصاحبه"]]
    },
    {
      title: "Financial Survival and Critical Service Continuity",
      titleLines: ["Financial Survival and", "Critical Service Continuity"],
      faTitle: "دو صورت تداوم کسب‌وکار؛ بقای مالی و حفظ خدمت حیاتی",
      faTitleLines: ["بقای مالی و", "حفظ خدمت حیاتی"],
      description: "Why financial continuity and service continuity are separate but dependent problems that leaders in banking and technology should read in one decision model.",
      faDescription: "چرا تداوم مالی و تداوم عملیاتی دو مسئله جدا اما وابسته‌اند و مدیران بانک و فناوری باید هر دو را در یک مدل تصمیم‌گیری ببینند؟",
      href: "article-technical-recovery.html",
      type: "Article",
      faType: "مقاله",
      topic: "Financial continuity",
      faTopic: "تداوم مالی و خدمت",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Hesam Maghsoudloo",
      faAuthor: "حسام مقصودلو",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/hesam-maghsoodloo.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Financial continuity", "تداوم مالی"], ["Service continuity", "تداوم خدمت"], ["Banking", "بانکداری"]]
    },
    {
      title: "Controlled Shutdown and Financial Trust",
      titleLines: ["Controlled Shutdown and", "Financial Trust"],
      faTitle: "توقف کنترل‌شده و اعتماد مالی",
      faTitleLines: ["توقف کنترل‌شده", "و اعتماد مالی"],
      description: "How a controlled shutdown can protect customer assets, limit harm and preserve trust during a financial-service crisis.",
      faDescription: "توقف کنترل‌شده چگونه می‌تواند در بحران خدمات مالی از دارایی مشتری محافظت کند، دامنه آسیب را محدود کند و اعتماد را نگه دارد.",
      href: "article-controlled-shutdown.html",
      type: "Article",
      faType: "مقاله",
      topic: "Financial trust",
      faTopic: "اعتماد مالی",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Reza Farhadi",
      faAuthor: "رضا فرهادی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/reza-farhadi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Controlled shutdown", "توقف کنترل‌شده"], ["Financial trust", "اعتماد مالی"], ["Crisis communication", "ارتباطات بحران"]]
    },
    {
      title: "From Risk List to Real Readiness",
      titleLines: ["From Risk List to", "Real Readiness"],
      faTitle: "از فهرست ریسک تا آمادگی واقعی در تداوم خدمات بانکی",
      faTitleLines: ["از فهرست ریسک", "تا آمادگی واقعی"],
      description: "Why risk committees without budget, authority and executable action do not create readiness, and how shared failure points in banking services should be managed.",
      faDescription: "چرا کمیته ریسک بدون بودجه، اختیار و اقدام اجرایی آمادگی نمی‌سازد و چگونه باید نقاط شکست مشترک خدمات بانکی را مدیریت کرد؟",
      href: "article-risk-readiness.html",
      type: "Article",
      faType: "مقاله",
      topic: "Banking service continuity",
      faTopic: "تداوم خدمات بانکی",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Hesam Maghsoudloo",
      faAuthor: "حسام مقصودلو",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/hesam-maghsoodloo.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Risk readiness", "آمادگی ریسک"], ["Banking continuity", "تداوم خدمات بانکی"], ["Governance", "راهبری"]]
    },
    {
      title: "Digital Continuity Is More Than Uptime",
      titleLines: ["Digital Continuity Is", "More Than Uptime"],
      faTitle: "تداوم دیجیتال فقط روشن‌ماندن سرویس نیست",
      faTitleLines: ["تداوم دیجیتال", "فقط روشن‌ماندن سرویس نیست"],
      description: "How internet disruption can break discovery, demand and customer trust even when a business website, server and payment path are still technically active.",
      faDescription: "اختلال اینترنت چگونه مسیر کشف، تقاضا و اعتماد مشتری را قطع می‌کند؛ حتی وقتی سایت، سرور و پرداخت یک کسب‌وکار همچنان فعال‌اند؟",
      href: "article-digital-continuity.html",
      type: "Article",
      faType: "مقاله",
      topic: "Digital continuity",
      faTopic: "تداوم دیجیتال",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Hesam Maghsoudloo",
      faAuthor: "حسام مقصودلو",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/hesam-maghsoodloo.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Digital continuity", "تداوم دیجیتال"], ["Customer journey", "سفر مشتری"], ["Demand", "تقاضا"]]
    },
    {
      title: "Customer Relationship Continuity Starts with Persistent Identity",
      titleLines: ["Customer Relationship Continuity", "Starts with Persistent Identity"],
      faTitle: "تداوم رابطه با مشتری از هویت پیوسته آغاز می‌شود",
      faTitleLines: ["تداوم رابطه با مشتری", "از هویت پیوسته"],
      description: "Why stable digital identity is the foundation for preserving relationship, trust and age-appropriate service across the customer’s growth journey.",
      faDescription: "چرا در بازار کودک و نوجوان، هویت دیجیتال پایدار شرط حفظ رابطه، اعتماد و ارائه خدمت متناسب در مراحل مختلف رشد مشتری است؟",
      href: "article-customer-identity-continuity.html",
      type: "Article",
      faType: "مقاله",
      topic: "Customer identity",
      faTopic: "هویت دیجیتال مشتری",
      industry: "Digital banking",
      faIndustry: "بانکداری دیجیتال",
      author: "Reza Farhadi",
      faAuthor: "رضا فرهادی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/reza-farhadi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Customer identity", "هویت مشتری"], ["Digital continuity", "تداوم دیجیتال"], ["Youth banking", "بانکداری نوجوان"]]
    },
    {
      title: "Decision-Making Under Uncertainty",
      titleLines: ["Decision-Making", "Under Uncertainty"],
      faTitle: "تداوم در عدم قطعیت؛ اول امکان تصمیم‌گیری را بازسازی کنید",
      faTitleLines: ["تداوم در عدم قطعیت", "بازسازی امکان تصمیم‌گیری"],
      description: "How leaders preserve decision capacity when the crisis horizon is unknown and survival options must stay open.",
      faDescription: "وقتی مدت بحران نامعلوم است، مدیر چگونه ظرفیت تحمل، هسته حیاتی و گزینه‌های بقا را بسنجد و امکان تصمیم‌گیری سازمان را حفظ کند؟",
      href: "article-decision-making-under-uncertainty.html",
      type: "Article",
      faType: "مقاله",
      topic: "Crisis decision-making",
      faTopic: "تصمیم‌گیری در بحران",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Reza Farhadi",
      faAuthor: "رضا فرهادی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/reza-farhadi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Decision-making", "تصمیم‌گیری"], ["Uncertainty", "عدم قطعیت"], ["Continuity", "تداوم"]]
    },
    {
      title: "Outcome-Based Digital Transformation",
      titleLines: ["Outcome-Based", "Digital Transformation"],
      faTitle: "تحول دیجیتال بدون نتیجه اقتصادی، تداوم‌پذیر نیست",
      faTitleLines: ["تحول دیجیتال", "بدون نتیجه اقتصادی"],
      description: "Why digital transformation and AI programs need a measurable business outcome before they can become sustainable capabilities.",
      faDescription: "چرا خرید ابزار و پروژه‌های پراکنده تحول یا AI ارزش پایدار نمی‌سازند و مدل نتیجه‌محور فناوری را به اقتصاد کسب‌وکار متصل می‌کند؟",
      href: "article-outcome-based-digital-transformation.html",
      type: "Article",
      faType: "مقاله",
      topic: "Digital transformation",
      faTopic: "تحول دیجیتال",
      industry: "Enterprise technology",
      faIndustry: "فناوری سازمانی",
      author: "Sadegh Faramarzi",
      faAuthor: "صادق فرامرزی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadegh-faramarzi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Digital transformation", "تحول دیجیتال"], ["AI", "هوش مصنوعی"], ["Business model", "مدل کسب‌وکار"]]
    },
    {
      title: "The Valley of Failure as a Continuity Lab",
      titleLines: ["The Valley of Failure", "as a Continuity Lab"],
      faTitle: "دره شکست؛ آزمایشگاه واقعی تداوم کسب‌وکار",
      faTitleLines: ["دره شکست؛ آزمایشگاه", "واقعی تداوم کسب‌وکار"],
      description: "Why the moment when capital, hype and market attention recede can reveal weak assumptions and turn pain into continuity learning.",
      faDescription: "چرا نقطه‌ای که سرمایه و هیجان بازار عقب می‌نشینند، بهترین زمان برای کشف ضعف مدل کسب‌وکار و ساخت قابلیت تداوم است؟",
      href: "article-pain-point-continuity-lab.html",
      type: "Article",
      faType: "مقاله",
      topic: "Startup continuity",
      faTopic: "تداوم استارتاپ",
      industry: "Startup ecosystem",
      faIndustry: "اکوسیستم استارتاپی",
      author: "Sadegh Faramarzi",
      faAuthor: "صادق فرامرزی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadegh-faramarzi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Startup continuity", "تداوم استارتاپ"], ["Business model", "مدل کسب‌وکار"], ["Learning", "یادگیری"]]
    },
    {
      title: "Real BCM Starts with People, Not Backup",
      titleLines: ["Real BCM Starts with People", "Not Backup"],
      faTitle: "BCM واقعی از Backup شروع نمی‌شود؛ از انسان آغاز می‌شود",
      faTitleLines: ["BCM واقعی از Backup", "شروع نمی‌شود"],
      description: "Why backups, alternate sites and equipment do not create continuity unless knowledge, dignity, succession and authority are designed first.",
      faDescription: "چرا تجهیزات و نسخه پشتیبان بدون کرامت انسانی، انتقال دانش، جانشین‌پروری و اختیار مدیریتی، تداوم واقعی کسب‌وکار نمی‌سازند؟",
      href: "article-human-centered-bcm.html",
      type: "Article",
      faType: "مقاله",
      topic: "Business continuity management",
      faTopic: "مدیریت تداوم کسب‌وکار",
      industry: "Enterprise resilience",
      faIndustry: "تاب‌آوری سازمانی",
      author: "Sadegh Faramarzi",
      faAuthor: "صادق فرامرزی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadegh-faramarzi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["BCM", "مدیریت تداوم"], ["Human continuity", "تداوم انسانی"], ["Knowledge transfer", "انتقال دانش"]]
    },
    {
      title: "Assess Capability Before Writing the Continuity Plan",
      titleLines: ["Assess Capability Before", "Writing the Continuity Plan"],
      faTitle: "پیش از نوشتن برنامه تداوم، قابلیت واقعی سازمان را بسنجید",
      faTitleLines: ["پیش از نوشتن برنامه تداوم", "قابلیت واقعی را بسنجید"],
      description: "Why a continuity plan should be written after the organization tests real human, technical, process and decision capability under pressure.",
      faDescription: "چرا برنامه تداوم بدون طراحی بحران، مانور واقعی و سنجش ظرفیت انسان و زیرساخت فقط یک فرض خوش‌بینانه درباره آمادگی سازمان است؟",
      href: "article-capability-before-plan.html",
      type: "Article",
      faType: "مقاله",
      topic: "Continuity planning",
      faTopic: "برنامه تداوم کسب‌وکار",
      industry: "Operational resilience",
      faIndustry: "تاب‌آوری عملیاتی",
      author: "Sadra Babaei",
      faAuthor: "صدرا بابایی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadra-babaei.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Continuity planning", "برنامه تداوم"], ["Capability assessment", "سنجش قابلیت"], ["Crisis exercises", "مانور بحران"]]
    },
    {
      title: "The First Crisis Decision and Minimum Service",
      titleLines: ["The First Crisis Decision", "and Minimum Service"],
      faTitle: "اولین تصمیم بحران؛ حداقل خدمت، اختیار و ارتباطات",
      faTitleLines: ["اولین تصمیم بحران", "حداقل خدمت و اختیار"],
      description: "Why the first crisis decision depends on minimum service, delegated authority and coordinated communication.",
      faDescription: "بازگشت سریع خدمت چرا به تعریف حداقل نتیجه مشتری، تفویض اختیار از پیش و ارتباطات شفاف و هماهنگ در اوج بحران وابسته است؟",
      href: "article-first-decision-and-minimum-service.html",
      type: "Article",
      faType: "مقاله",
      topic: "Crisis command",
      faTopic: "فرماندهی بحران",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Sadra Babaei",
      faAuthor: "صدرا بابایی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadra-babaei.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Crisis command", "فرماندهی بحران"], ["Minimum service", "حداقل خدمت"], ["Communication", "ارتباطات"]]
    },
    {
      title: "Controlled Trust in FinTech Resilience",
      titleLines: ["Controlled Trust", "in FinTech Resilience"],
      faTitle: "اعتماد کنترل‌شده به فین‌تک؛ معماری مکمل تداوم بانک",
      faTitleLines: ["اعتماد کنترل‌شده به فین‌تک", "معماری مکمل تداوم بانک"],
      description: "How banks can use fintech capacity through pilots, control and parallel architecture without outsourcing accountability.",
      faDescription: "بانک چگونه با پایلوت، کنترل و معماری موازی از ظرفیت فین‌تک‌ها استفاده کند و بدون واگذاری پاسخ‌گویی، نقاط شکست مشترک را کاهش دهد؟",
      href: "article-controlled-trust-fintech-resilience.html",
      type: "Article",
      faType: "مقاله",
      topic: "Bank-fintech continuity",
      faTopic: "همکاری بانک و فین‌تک",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Sadra Babaei",
      faAuthor: "صدرا بابایی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/sadra-babaei.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["FinTech", "فین‌تک"], ["Banking continuity", "تداوم بانکی"], ["Pilot", "پایلوت"]]
    },
    {
      title: "Human Single Points of Failure",
      titleLines: ["Human Single Points", "of Failure"],
      faTitle: "نقطه شکست انسانی؛ وقتی عملیات به یک نفر وابسته است",
      faTitleLines: ["نقطه شکست انسانی", "وابستگی عملیات به یک نفر"],
      description: "How dependence on a founder, signer or key expert can become a continuity risk, and how succession, knowledge transfer and delegated authority reduce it.",
      faDescription: "چگونه وابستگی به بنیان‌گذار، صاحب امضا یا نیروی کلیدی با جانشین‌پروری، انتقال دانش و تفویض اختیار به قابلیت تداوم تبدیل می‌شود؟",
      href: "article-human-single-points-of-failure.html",
      type: "Article",
      faType: "مقاله",
      topic: "Human continuity",
      faTopic: "تداوم منابع انسانی",
      industry: "Operational resilience",
      faIndustry: "تاب‌آوری عملیاتی",
      author: "Ali Akhavan",
      faAuthor: "علی اخوان",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/ali-akhavan.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Human continuity", "تداوم انسانی"], ["Succession", "جانشین‌پروری"], ["Authority", "اختیار"]]
    },
    {
      title: "Banking Service Chain Continuity",
      titleLines: ["Banking Service Chain", "Continuity"],
      faTitle: "تداوم بانک در زنجیره خدمت؛ شریک هم بخشی از سرویس است",
      faTitleLines: ["تداوم بانک", "در زنجیره خدمت"],
      description: "Why banks should evaluate fintechs, suppliers and alternative payment routes as part of one critical-service continuity chain.",
      faDescription: "چرا بانک باید خدمات حیاتی، فین‌تک‌ها، تأمین‌کنندگان و مسیرهای پرداخت جایگزین را در یک زنجیره تداوم یکپارچه ارزیابی کند؟",
      href: "article-banking-service-chain-continuity.html",
      type: "Article",
      faType: "مقاله",
      topic: "Service chain continuity",
      faTopic: "تداوم زنجیره خدمت",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Ali Akhavan",
      faAuthor: "علی اخوان",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/ali-akhavan.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Third-party continuity", "تداوم شریک"], ["Banking", "بانکداری"], ["Service chain", "زنجیره خدمت"]]
    },
    {
      title: "When the Next Capital Never Arrives",
      titleLines: ["When the Next Capital", "Never Arrives"],
      faTitle: "اگر سرمایه بعدی نرسد؛ سناریوی فراموش‌شده تداوم استارتاپ",
      faTitleLines: ["اگر سرمایه بعدی نرسد", "سناریوی تداوم استارتاپ"],
      description: "How startups can prepare for stalled funding, sudden market change and business-model redesign without depending on the best-case scenario.",
      faDescription: "استارتاپ چگونه برای توقف سرمایه، تغییر ناگهانی بازار و بازطراحی مدل کسب‌وکار آماده شود و ادامه حیات را به سناریوی مطلوب وابسته نکند؟",
      href: "article-next-capital-never-arrives.html",
      type: "Article",
      faType: "مقاله",
      topic: "Startup continuity",
      faTopic: "تداوم استارتاپ",
      industry: "Startup ecosystem",
      faIndustry: "اکوسیستم استارتاپی",
      author: "Ali Akhavan",
      faAuthor: "علی اخوان",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/ali-akhavan.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Startup continuity", "تداوم استارتاپ"], ["Runway", "ران‌وی"], ["Funding risk", "ریسک سرمایه"]]
    },
    {
      title: "The Three-Layer BCM Operating Model",
      titleLines: ["The Three-Layer BCM", "Operating Model"],
      faTitle: "مدل سه‌لایه BCM؛ چرا فناوری باید آخرین انتخاب باشد؟",
      faTitleLines: ["مدل سه‌لایه BCM", "فناوری آخرین انتخاب است"],
      description: "Why BCM should begin with governance and critical services, continue through service management and only then choose technology.",
      faDescription: "پیاده‌سازی مدیریت تداوم کسب‌وکار از حاکمیت و سرویس حیاتی آغاز می‌شود، با مدیریت خدمات ادامه می‌یابد و سپس به فناوری می‌رسد.",
      href: "article-three-layer-bcm-operating-model.html",
      type: "Article",
      faType: "مقاله",
      topic: "BCM operating model",
      faTopic: "مدل عملیاتی BCM",
      industry: "Governance",
      faIndustry: "حاکمیت",
      author: "Alireza Bozorgmehri",
      faAuthor: "علیرضا بزرگمهری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/alireza-bozorgmehri.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["BCM", "مدیریت تداوم"], ["Governance", "حاکمیت"], ["Service management", "مدیریت خدمات"]]
    },
    {
      title: "ITSM: One Brain for Many Eyes",
      titleLines: ["ITSM: One Brain", "for Many Eyes"],
      faTitle: "ITSM؛ یک مغز برای چشم‌های متعدد بانک",
      faTitleLines: ["ITSM", "یک مغز برای چشم‌های متعدد بانک"],
      description: "How ITSM connects monitoring tools to service maps, incidents, SLAs and predictive operation so the bank can react faster.",
      faDescription: "چگونه ITSM ابزارهای پایش پراکنده را به نقشه سرویس، ارجاع رخداد، SLA و پیش‌بینی ریسک متصل می‌کند و زمان واکنش بانک را کاهش می‌دهد؟",
      href: "article-itsm-one-brain-for-many-eyes.html",
      type: "Article",
      faType: "مقاله",
      topic: "IT service management",
      faTopic: "مدیریت خدمات فناوری اطلاعات",
      industry: "Banking technology",
      faIndustry: "فناوری بانکی",
      author: "Alireza Bozorgmehri",
      faAuthor: "علیرضا بزرگمهری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/alireza-bozorgmehri.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["ITSM", "ITSM"], ["Service map", "نقشه سرویس"], ["SLA", "SLA"]]
    },
    {
      title: "Service Granularity and Digital Banking Resilience",
      titleLines: ["Service Granularity and", "Digital Banking Resilience"],
      faTitle: "ریزدانگی سرویس؛ معماری تاب‌آوری بانک دیجیتال",
      faTitleLines: ["ریزدانگی سرویس", "تاب‌آوری بانک دیجیتال"],
      description: "Why service separation, owning teams and decision rights form one architecture for containing failures in digital banking.",
      faDescription: "چرا جداسازی سرویس، تیم مالک و اختیار تصمیم سه جزء یک معماری واحد برای محدودکردن دامنه اختلال در بانک دیجیتال‌اند؟",
      href: "article-service-granularity-resilience.html",
      type: "Article",
      faType: "مقاله",
      topic: "Digital banking resilience",
      faTopic: "تاب‌آوری بانک دیجیتال",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Farhad Inaloui",
      faAuthor: "فرهاد اینالویی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/farhad-inaloui.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Service granularity", "ریزدانگی سرویس"], ["Digital banking", "بانکداری دیجیتال"], ["Resilience", "تاب‌آوری"]]
    },
    {
      title: "Service Catalog as the Operating Model",
      titleLines: ["Service Catalog", "as the Operating Model"],
      faTitle: "Service Catalog؛ نقطه شروع تداوم سرویس‌محور",
      faTitleLines: ["Service Catalog", "نقطه شروع تداوم سرویس‌محور"],
      description: "How a banking service catalog connects ownership, dependencies, impact tolerance, escalation and recovery into one operating model.",
      faDescription: "Service Catalog چگونه مالکیت، وابستگی، تحمل اختلال، Escalation و بازیابی هر خدمت بانکی را به یک مدل عملیاتی متصل می‌کند؟",
      href: "article-service-catalog-operating-model.html",
      type: "Article",
      faType: "مقاله",
      topic: "Service catalog",
      faTopic: "کاتالوگ خدمات",
      industry: "Banking technology",
      faIndustry: "فناوری بانکی",
      author: "Farhad Inaloui",
      faAuthor: "فرهاد اینالویی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/farhad-inaloui.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Service catalog", "کاتالوگ خدمات"], ["Service ownership", "مالکیت سرویس"], ["Recovery", "بازیابی"]]
    },
    {
      title: "Ecosystem Continuity Governance",
      titleLines: ["Ecosystem Continuity", "Governance"],
      faTitle: "تداوم اکوسیستم مالی؛ از وابستگی تا تنظیم‌گری مشارکتی",
      faTitleLines: ["تداوم اکوسیستم مالی", "تنظیم‌گری مشارکتی"],
      description: "Why financial-service continuity should read the bank, fintech, supplier and regulator as one shared scenario chain.",
      faDescription: "چرا تداوم خدمات مالی باید وابستگی بانک، فین‌تک، تأمین‌کننده و نهاد ناظر را در یک سناریوی مشترک ببیند؟",
      href: "article-ecosystem-continuity-governance.html",
      type: "Article",
      faType: "مقاله",
      topic: "Ecosystem continuity",
      faTopic: "تداوم اکوسیستم مالی",
      industry: "Financial services",
      faIndustry: "خدمات مالی",
      author: "Farhad Inaloui",
      faAuthor: "فرهاد اینالویی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/farhad-inaloui.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Ecosystem", "اکوسیستم"], ["Governance", "حاکمیت"], ["Regulation", "تنظیم‌گری"]]
    },
    {
      title: "Portfolio Resilience",
      titleLines: ["Portfolio", "Resilience"],
      faTitle: "تاب‌آوری پرتفوی؛ جراحی مالی، توقف و خطوط پشتیبان",
      faTitleLines: ["تاب‌آوری پرتفوی", "جراحی مالی و خطوط پشتیبان"],
      description: "How restructuring, stopping low-evidence projects and testing small revenue lines can preserve choice in high-risk conditions.",
      faDescription: "چگونه اصلاح ساختار، توقف پروژه‌های بی‌نتیجه و آزمایش خطوط درآمدی کوچک، تداوم شرکت را در شرایط پرریسک حفظ می‌کند؟",
      href: "article-portfolio-resilience.html",
      type: "Article",
      faType: "مقاله",
      topic: "Portfolio resilience",
      faTopic: "تاب‌آوری پرتفوی",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Mohammad Farjood",
      faAuthor: "محمد فرجود",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mohammad-farjood.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Portfolio", "پرتفوی"], ["Financial restructuring", "اصلاح ساختار"], ["Resilience", "تاب‌آوری"]]
    },
    {
      title: "Growth in Turbulence",
      titleLines: ["Growth", "in Turbulence"],
      faTitle: "رشد در دل آشوب؛ مدل مدیریتی تداوم کسب‌وکار",
      faTitleLines: ["رشد در دل آشوب", "مدل مدیریتی تداوم"],
      description: "How infrastructure, specialist talent, data and regulation become adaptive growth capability in unstable environments.",
      faDescription: "در محیط ناپایدار، مدیریت چگونه زیرساخت، نیروی متخصص، داده و تنظیم‌گری را به قابلیت رشد مستمر تبدیل می‌کند؟",
      href: "article-growth-in-turbulence.html",
      type: "Article",
      faType: "مقاله",
      topic: "Adaptive growth",
      faTopic: "رشد انطباقی",
      industry: "Financial technology",
      faIndustry: "فناوری مالی",
      author: "Mohammad Farjood",
      faAuthor: "محمد فرجود",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mohammad-farjood.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Adaptive growth", "رشد انطباقی"], ["Data", "داده"], ["Regulation", "تنظیم‌گری"]]
    },
    {
      title: "Human Continuity Infrastructure",
      titleLines: ["Human Continuity", "Infrastructure"],
      faTitle: "زیرساخت انسانی تداوم؛ امنیت، شفافیت و مهارت بحران",
      faTitleLines: ["زیرساخت انسانی تداوم", "امنیت و مهارت بحران"],
      description: "Why morale, focus, job security and knowledge transfer should be designed and measured like technical infrastructure.",
      faDescription: "چرا روحیه، تمرکز، امنیت شغلی و انتقال دانش باید مانند زیرساخت فنی در برنامه تداوم سازمان طراحی و سنجیده شوند؟",
      href: "article-human-continuity-infrastructure.html",
      type: "Article",
      faType: "مقاله",
      topic: "Human continuity",
      faTopic: "زیرساخت انسانی تداوم",
      industry: "Enterprise resilience",
      faIndustry: "تاب‌آوری سازمانی",
      author: "Mostafa Sabeti",
      faAuthor: "مصطفی ثابتی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mostafa-sabeti.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Human continuity", "تداوم انسانی"], ["Knowledge transfer", "انتقال دانش"], ["Crisis skill", "مهارت بحران"]]
    },
    {
      title: "Global Learning Architecture",
      titleLines: ["Global Learning", "Architecture"],
      faTitle: "معماری یادگیری جهانی؛ چرا بقای محلی کافی نیست؟",
      faTitleLines: ["معماری یادگیری جهانی", "چرا بقای محلی کافی نیست؟"],
      description: "How a technology business with regional ambition can reduce architecture and market distance through global teams, projects or partners.",
      faDescription: "کسب‌وکار فناوری با چشم‌انداز منطقه‌ای چگونه از طریق تیم، پروژه یا شریک خارجی، فاصله معماری و بازار را کاهش می‌دهد؟",
      href: "article-global-learning-architecture.html",
      type: "Article",
      faType: "مقاله",
      topic: "Global learning",
      faTopic: "یادگیری جهانی",
      industry: "Banking technology",
      faIndustry: "فناوری بانکی",
      author: "Mostafa Sabeti",
      faAuthor: "مصطفی ثابتی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mostafa-sabeti.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Global learning", "یادگیری جهانی"], ["Architecture", "معماری"], ["Technology", "فناوری"]]
    },
    {
      title: "Strategy as Subtraction",
      titleLines: ["Strategy", "as Subtraction"],
      faTitle: "استراتژی به‌مثابه حذف؛ نجات هلدینگ از تکثیر بی‌هدف",
      faTitleLines: ["استراتژی به‌مثابه حذف", "نجات از تکثیر بی‌هدف"],
      description: "Why shutting down projects, merging companies and exiting domains outside the organization’s genetics are continuity tools.",
      faDescription: "چرا خاموش‌کردن پروژه، ادغام شرکت و خروج از حوزه ناسازگار با ژنتیک سازمان، ابزار اصلی تداوم هلدینگ است؟",
      href: "article-strategy-as-subtraction.html",
      type: "Article",
      faType: "مقاله",
      topic: "Strategic focus",
      faTopic: "تمرکز راهبردی",
      industry: "Holding company",
      faIndustry: "هلدینگ",
      author: "Meysam Rajabi",
      faAuthor: "میثم رجبی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/meysam-rajabi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Strategy", "استراتژی"], ["Focus", "تمرکز"], ["Portfolio", "پرتفوی"]]
    },
    {
      title: "Desert Organization",
      titleLines: ["Desert", "Organization"],
      faTitle: "سازمان کویری؛ کوچک‌ماندن برای جهش در فرصت بعدی",
      faTitleLines: ["سازمان کویری", "کوچک‌ماندن برای جهش بعدی"],
      description: "How an organization can preserve cash and its core team during market drought while preparing for the next opportunity.",
      faDescription: "سازمان چگونه در دوره خشکسالی بازار، نقدینگی و تیم هسته را حفظ کند و بدون بزرگ‌شدن بی‌هدف برای رونق بعدی آماده بماند؟",
      href: "article-desert-organization.html",
      type: "Article",
      faType: "مقاله",
      topic: "Cash survival",
      faTopic: "بقای نقدینگی",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Meysam Rajabi",
      faAuthor: "میثم رجبی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/meysam-rajabi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Cash", "نقدینگی"], ["Core team", "تیم هسته"], ["Market cycle", "چرخه بازار"]]
    },
    {
      title: "Expiring Transition Dependencies",
      titleLines: ["Expiring Transition", "Dependencies"],
      faTitle: "وابستگی انتقالی باید تاریخ انقضا داشته باشد",
      faTitleLines: ["وابستگی انتقالی", "باید تاریخ انقضا داشته باشد"],
      description: "How banking migrations should control temporary support access, ownership and transition responsibility before the bridge becomes permanent risk.",
      faDescription: "در ادغام و مهاجرت بانکی، چگونه دسترسی پشتیبانی، مالکیت و مسئولیت انتقالی را کنترل کنیم تا پل موقت به آسیب‌پذیری دائمی تبدیل نشود؟",
      href: "article-expiring-transition-dependencies.html",
      type: "Article",
      faType: "مقاله",
      topic: "Transition risk",
      faTopic: "ریسک انتقال",
      industry: "Banking technology",
      faIndustry: "فناوری بانکی",
      author: "Nima Amirshekari",
      faAuthor: "نیما امیرشکاری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/nima-amirshekari.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Transition", "انتقال"], ["Migration", "مهاجرت"], ["Access control", "کنترل دسترسی"]]
    },
    {
      title: "Engineering Recovery Risk",
      titleLines: ["Engineering", "Recovery Risk"],
      faTitle: "مهندسی بازیابی؛ پذیرش عددی ریسک به‌جای پیشگیری مطلق",
      faTitleLines: ["مهندسی بازیابی", "پذیرش عددی ریسک"],
      description: "How RTO, RPO, human capital and incident learning turn accepted risk into real recovery capability.",
      faDescription: "چگونه RTO، RPO، سرمایه انسانی و تجربه‌نگاری، ریسک پذیرفته‌شده را به قابلیت واقعی بازیابی بانک تبدیل می‌کنند؟",
      href: "article-engineering-recovery-risk.html",
      type: "Article",
      faType: "مقاله",
      topic: "Recovery engineering",
      faTopic: "مهندسی بازیابی",
      industry: "Banking technology",
      faIndustry: "فناوری بانکی",
      author: "Nima Amirshekari",
      faAuthor: "نیما امیرشکاری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/nima-amirshekari.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["RTO", "RTO"], ["RPO", "RPO"], ["Recovery", "بازیابی"]]
    },
    {
      title: "Banking Trust Recovery Beyond the App",
      titleLines: ["Banking Trust Recovery", "Beyond the App"],
      faTitle: "بازیابی اعتماد بانکی؛ فراتر از بازگرداندن اپلیکیشن",
      faTitleLines: ["بازیابی اعتماد بانکی", "فراتر از بازگرداندن اپلیکیشن"],
      description: "How diagnosis, decision, communication and minimum service prevent a technical incident from becoming a trust crisis.",
      faDescription: "در اختلال بانکی، تشخیص، تصمیم، ارتباط و بازگشت حداقلی خدمت چگونه از تبدیل حادثه فنی به بحران اعتماد جلوگیری می‌کنند؟",
      href: "article-trust-recovery-banking.html",
      type: "Article",
      faType: "مقاله",
      topic: "Trust recovery",
      faTopic: "بازیابی اعتماد",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Mohammad Farjood",
      faAuthor: "محمد فرجود",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mohammad-farjood.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Trust", "اعتماد"], ["Banking", "بانکداری"], ["Incident communication", "ارتباط بحران"]]
    },
    {
      title: "The Survival Trap",
      titleLines: ["The Survival Trap", "When Continuity Consumes Growth"],
      faTitle: "تله بقا؛ وقتی تداوم، رشد آینده را مصرف می‌کند",
      faTitleLines: ["تله بقا", "وقتی تداوم رشد را مصرف می‌کند"],
      description: "How organizations can preserve essential services while measuring technology, competition and growth gaps during long disruptions.",
      faDescription: "چگونه سازمان هم‌زمان با حفظ سرویس‌های پایه، شکاف فناوری و رقابت را اندازه بگیرد و ظرفیت رشد پس از بحران را از دست ندهد؟",
      href: "article-survival-growth-gap.html",
      type: "Article",
      faType: "مقاله",
      topic: "Survival and growth",
      faTopic: "بقا و رشد",
      industry: "Digital business",
      faIndustry: "کسب‌وکار دیجیتال",
      author: "Mostafa Sabeti",
      faAuthor: "مصطفی ثابتی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/mostafa-sabeti.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Survival", "بقا"], ["Growth gap", "شکاف رشد"], ["Digital continuity", "تداوم دیجیتال"]]
    },
    {
      title: "Continuity by Market Regime",
      titleLines: ["Continuity by", "Market Regime"],
      faTitle: "سه رژیم تداوم؛ رشد، حفظ بازار و بقای نقدینگی",
      faTitleLines: ["سه رژیم تداوم", "رشد، حفظ بازار و بقای نقدینگی"],
      description: "Why continuity strategy changes across growth, market retention and cash survival, each with different metrics and decisions.",
      faDescription: "چرا نسخه تداوم در دوره توسعه، رکود و انقباض یکسان نیست و هر دوره چه معیار و تصمیم متفاوتی می‌خواهد؟",
      href: "article-continuity-market-regime.html",
      type: "Article",
      faType: "مقاله",
      topic: "Continuity strategy",
      faTopic: "استراتژی تداوم",
      industry: "Market strategy",
      faIndustry: "استراتژی بازار",
      author: "Meysam Rajabi",
      faAuthor: "میثم رجبی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/meysam-rajabi.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Market regime", "رژیم بازار"], ["Strategy", "استراتژی"], ["Cash survival", "بقای نقدینگی"]]
    },
    {
      title: "The Backup Site Must Carry Real Load",
      titleLines: ["The Backup Site Must", "Carry Real Load"],
      faTitle: "سایت پشتیبان باید بار واقعی حمل کند",
      faTitleLines: ["سایت پشتیبان", "باید بار واقعی حمل کند"],
      description: "Why an idle alternate site cannot be trusted on crisis day, and how regular real-load tests prove readiness across data, software and teams.",
      faDescription: "چرا سایت جایگزین خاموش در روز بحران قابل‌اعتماد نیست و آزمون منظم بار واقعی چگونه آمادگی داده، نرم‌افزار و تیم را اثبات می‌کند؟",
      href: "article-backup-must-carry-load.html",
      type: "Article",
      faType: "مقاله",
      topic: "Backup readiness",
      faTopic: "آمادگی سایت پشتیبان",
      industry: "Technology infrastructure",
      faIndustry: "زیرساخت فناوری",
      author: "Nima Amirshekari",
      faAuthor: "نیما امیرشکاری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-article-v3.png",
      authorImage: "Assets/nima-amirshekari.jpg",
      alt: "Dark article desk cover image with notebook and pen",
      faAlt: "تصویر کاور مقاله با دفتر و قلم روی میز تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Article", "مقاله"], ["Backup site", "سایت پشتیبان"], ["Real-load test", "آزمون بار واقعی"], ["Infrastructure", "زیرساخت"]]
    },
    {
      title: "Continuity Podcast - Alireza Bozorgmehri",
      titleLines: ["Continuity Podcast -", "Alireza Bozorgmehri"],
      faTitle: "پادکست کانتینیویتی - علیرضا بزرگمهری",
      faTitleLines: ["پادکست کانتینیویتی -", "علیرضا بزرگمهری"],
      description: "An audio conversation with Alireza Bozorgmehri on continuity, governance and how service responsibility is shaped in digital banking.",
      faDescription: "گفت‌وگوی صوتی با علیرضا بزرگمهری درباره تداوم، حاکمیت و شکل‌گیری مسئولیت خدمت در بانکداری دیجیتال.",
      href: "podcast-alireza-bozorgmehri.html",
      type: "Podcast",
      faType: "پادکست",
      topic: "Governance",
      faTopic: "حاکمیت",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Alireza Bozorgmehri",
      faAuthor: "علیرضا بزرگمهری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-podcast-v3.png",
      authorImage: "Assets/alireza-bozorgmehri.jpg",
      alt: "Dark podcast microphone cover image",
      faAlt: "تصویر کاور پادکست با میکروفون تیره",
      audioSrc: "Assets/podcast-alireza-bozorgmehri-135764.mp3",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Podcast", "پادکست"], ["Governance", "حاکمیت"], ["Digital banking", "بانکداری دیجیتال"], ["Continuity", "تداوم"]]
    },
    {
      title: "Continuity Podcast - Ali Akhavan",
      titleLines: ["Continuity Podcast -", "Ali Akhavan"],
      faTitle: "پادکست کانتینیویتی - علی اخوان",
      faTitleLines: ["پادکست کانتینیویتی -", "علی اخوان"],
      description: "An audio conversation with Ali Akhavan on how startups read continuity when funding, market timing and runway become strategic constraints.",
      faDescription: "گفت‌وگوی صوتی با علی اخوان درباره اینکه استارتاپ‌ها تداوم را چگونه می‌خوانند وقتی سرمایه، زمان بازار و ران‌وی به محدودیت راهبردی تبدیل می‌شوند.",
      href: "podcast-ali-akhavan.html",
      type: "Podcast",
      faType: "پادکست",
      topic: "Startup continuity",
      faTopic: "تداوم استارتاپ",
      industry: "Startup ecosystem",
      faIndustry: "اکوسیستم استارتاپی",
      author: "Ali Akhavan",
      faAuthor: "علی اخوان",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-podcast-v3.png",
      authorImage: "Assets/ali-akhavan.jpg",
      alt: "Dark podcast microphone cover image",
      faAlt: "تصویر کاور پادکست با میکروفون تیره",
      audioSrc: "Assets/podcast-ali-akhavan-135765.mp3",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Podcast", "پادکست"], ["Startup continuity", "تداوم استارتاپ"], ["Runway", "ران‌وی"], ["Funding risk", "ریسک سرمایه"]]
    },
    {
      title: "Continuity Podcast - Ramyar Ghanbari",
      titleLines: ["Continuity Podcast -", "Ramyar Ghanbari"],
      faTitle: "پادکست کانتینیویتی - رامیار قنبری",
      faTitleLines: ["پادکست کانتینیویتی -", "رامیار قنبری"],
      description: "An audio conversation with Ramyar Ghanbari on continuity signals, market context and how leaders recognize risk before it becomes interruption.",
      faDescription: "گفت‌وگوی صوتی با رامیار قنبری درباره نشانه‌های تداوم، زمینه بازار و تشخیص ریسک پیش از تبدیل‌شدن به اختلال.",
      href: "podcast-ramyar-ghanbari.html",
      type: "Podcast",
      faType: "پادکست",
      topic: "Market continuity",
      faTopic: "تداوم بازار",
      industry: "Market strategy",
      faIndustry: "استراتژی بازار",
      author: "Ramyar Ghanbari",
      faAuthor: "رامیار قنبری",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-podcast-v3.png",
      authorImage: "Assets/profile-executive-05.png",
      alt: "Dark podcast microphone cover image",
      faAlt: "تصویر کاور پادکست با میکروفون تیره",
      audioSrc: "Assets/podcast-ramyar-ghanbari-135766.mp3",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Podcast", "پادکست"], ["Market continuity", "تداوم بازار"], ["Signals", "نشانه‌ها"], ["Resilience", "تاب‌آوری"]]
    },
    {
      title: "Continuity Videocast - Episode 01",
      titleLines: ["Continuity Videocast -", "Episode 01"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۱",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۰۱"],
      description: "A videocast record from the House insight library, focused on continuity questions, service responsibility and digital banking practice.",
      faDescription: "ویدیوکستی از کتابخانه بینش‌ها درباره پرسش‌های تداوم، مسئولیت خدمت و تجربه بانکداری دیجیتال.",
      href: "videocast-continuity-dialogue.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Continuity dialogue",
      faTopic: "گفت‌وگوی تداوم",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Farhad Inaloui",
      faAuthor: "فرهاد اینالویی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/farhad-inaloui.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Interview", "مصاحبه"], ["Continuity", "تداوم"], ["Banking", "بانکداری"]]
    },
    {
      title: "Continuity Videocast - Episode 15",
      titleLines: ["Continuity Videocast -", "Episode 15"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۵",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۵"],
      description: "A videocast conversation on financial continuity, critical service responsibility and how leaders read continuity signals before disruption becomes loss.",
      faDescription: "ویدیوکستی درباره تداوم مالی، مسئولیت خدمت حیاتی و شیوه خواندن نشانه‌های تداوم پیش از تبدیل اختلال به زیان.",
      href: "videocast-hesam-maghsoudloo.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Financial and service continuity",
      faTopic: "تداوم مالی و خدمت",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Hesam Maghsoudloo",
      faAuthor: "حسام مقصودلو",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/hesam-maghsoodloo.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Financial continuity", "تداوم مالی"], ["Service continuity", "تداوم خدمت"], ["Banking", "بانکداری"]]
    },
    {
      title: "Continuity Videocast - Episode 12",
      titleLines: ["Continuity Videocast -", "Episode 12"],
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۲",
      faTitleLines: ["ویدیوکست کانتینیویتی -", "اپیزود ۱۲"],
      description: "A videocast record from the House insight library, focused on continuity practice, decision quality and service resilience.",
      faDescription: "رکوردی از ویدیوکست کتابخانه بینش‌ها درباره تجربه تداوم، کیفیت تصمیم و تاب‌آوری خدمت.",
      href: "videocast-continuity-episode-02.html",
      type: "Videocast",
      faType: "ویدیوکست",
      topic: "Continuity practice",
      faTopic: "تجربه تداوم",
      industry: "Banking",
      faIndustry: "بانکداری",
      author: "Meysam Rajabi",
      faAuthor: "میثم رجبی",
      date: "August 2026",
      faDate: "مرداد ۱۴۰۵",
      image: "Assets/content-cover-videocast-v3.png",
      authorImage: "Assets/meysam-rajabi.jpg",
      alt: "Dark videocast camera cover image",
      faAlt: "تصویر کاور ویدیوکست با دوربین تیره",
      accessed: "Accessed",
      faAccessed: "در دسترس",
      tags: [["Videocast", "ویدیوکست"], ["Continuity", "تداوم"], ["Service resilience", "تاب‌آوری خدمت"], ["Banking", "بانکداری"]]
    }
  ];

  var peopleProfiles = [
    {
      id: "farhad-inaloui",
      name: "Farhad Inaloui",
      faName: "فرهاد اینالویی",
      role: "Technocratic Leader",
      faRole: "رهبر تکنوکرات",
      title: "Board Member · Tourism Information Technology Company (TIT)",
      faTitle: "عضو هیئت‌مدیره · فناوری اطلاعات گردشگری ایران",
      subject: "Banking technology, service architecture and operational continuity",
      faSubject: "فناوری بانکی، معماری سرویس و تداوم عملیاتی",
      image: "Assets/farhad-inaloui.jpg",
      imageClass: "person-photo-farhad",
      profileLayout: "monograph",
      profileNumber: "01",
      faProfileNumber: "۰۱",
      positioning: "From banking infrastructure to service architecture: connecting technology, operational ownership and continuity in digital banking.",
      faPositioning: "از زیرساخت بانکی تا معماری سرویس؛ پیوند فناوری، مالکیت عملیاتی و تداوم در بانکداری دیجیتال.",
      heroTags: [
        ["Banking infrastructure", "زیرساخت بانکی"],
        ["Digital banking", "بانکداری دیجیتال"],
        ["Service architecture", "معماری سرویس"],
        ["Operational continuity", "تداوم عملیاتی"],
        ["Technology governance", "حاکمیت فناوری"]
      ],
      quote: "A bank's capacity to continue is not contained in hardware or software alone. It is designed through services, decision ownership and ecosystem coordination.",
      faQuote: "قابلیت ادامه‌دادن یک بانک فقط در تجهیزات و نرم‌افزار نیست؛ در طراحی سرویس، مالکیت تصمیم و هماهنگی اکوسیستم ساخته می‌شود.",
      bio: "Farhad Inaloui is a banking technology leader whose career has moved from systems engineering and infrastructure into technology governance, digital banking and service architecture.",
      faBio: "فرهاد اینالویی از مدیران باسابقه فناوری بانکی است که مسیر حرفه‌ای‌اش از مهندسی سیستم و زیرساخت آغاز شده و به راهبری فناوری، بانکداری دیجیتال و معماری سرویس رسیده است.",
      storyTitle: "When the unit of analysis becomes the service",
      faStoryTitle: "وقتی مسئله از سامانه به سرویس تغییر می‌کند",
      story: [
        ["Inaloui began his professional career in the mid-1990s, working with IBM systems in the automotive industry. Large enterprise systems exposed a foundational operating reality early in his career: an organization depends on connected components, and the health of each component does not by itself guarantee the business outcome.", "مسیر حرفه‌ای فرهاد اینالویی در میانه دهه ۱۳۷۰ و در محیط سیستم‌های IBM در صنعت خودرو آغاز شد. کار با سامانه‌های سازمانی بزرگ، پیش از فراگیرشدن بانکداری دیجیتال، او را با واقعیتی پایه‌ای روبه‌رو کرد: عملکرد سازمان به مجموعه‌ای از اجزای به‌هم‌وابسته متکی است و سلامت هر جزء به‌تنهایی تضمین‌کننده نتیجه نهایی نیست."],
        ["His work at Data Systems Iran and then Bank Parsian connected infrastructure engineering directly to customer access to money and banking services. Networks, hardware, telecommunications and security for online, real-time banking made the distinction between component availability and service availability tangible.", "حضور او در داده‌پردازی ایران و سپس بانک پارسیان، مهندسی زیرساخت را مستقیماً به دسترسی مشتری به پول و خدمت بانکی متصل کرد. شبکه، سخت‌افزار، مخابرات و امنیت برای بانکداری برخط و بلادرنگ، تفاوت میان کارکرد یک جزء و در دسترس‌بودن خدمت را ملموس کرد."],
        ["His move into banking technology solution providers added the supplier side of the relationship. Service quality depends not only on internal engineering, but also on support cycles, contracts, product knowledge, specialist availability and vendor stability.", "فعالیت در شرکت‌های فناوری بانکی و محیط ارائه راهکار، سوی دیگر رابطه بانک و تأمین‌کننده را به تجربه او اضافه کرد. کیفیت سرویس فقط به توان فنی بانک وابسته نیست؛ چرخه پشتیبانی، قرارداد، دانش محصول، دسترسی به متخصص و پایداری فروشنده نیز بخشی از معماری عملیاتی‌اند."],
        ["At EN Bank, the move from infrastructure responsibilities toward modern banking broadened the scope of his work. Digital transformation is not completed by adding a channel or moving a form online. A service must connect data, process, control, customer experience and operational accountability from the outset.", "در بانک اقتصاد نوین، جابه‌جایی از مسئولیت‌های زیرساختی به حوزه بانکداری مدرن، واحد تحلیل را گسترده‌تر کرد. دیجیتال‌شدن با افزودن یک کانال یا غیرحضوری‌کردن یک فرم کامل نمی‌شود. طراحی خدمت باید از ابتدا داده، فرایند، کنترل، تجربه مشتری و پاسخ‌گویی عملیاتی را به هم متصل کند."],
        ["As the technology executive at Bank Iran Zamin from 2016 until September 2023, he worked with digital banking development, movement toward service-oriented architecture and the boundaries between a bank, technology companies and fintech actors.", "مسئولیت فناوری اطلاعات بانک ایران‌زمین از سال ۱۳۹۵ تا شهریور ۱۴۰۲، این دیدگاه را در مقیاس راهبری بانکی آزمود؛ از توسعه بانکداری دیجیتال تا حرکت به سوی معماری سرویس‌گرا و کار در مرز میان بانک، شرکت‌های فناوری و بازیگران فین‌تک."],
        ["His current board work in technology companies continues the same progression from a governance perspective. A Service Catalog is not a product list; it is a management map of ownership, criticality, dependency, service level and recovery requirements.", "فعالیت‌های هیئت‌مدیره‌ای کنونی او در شرکت‌های فناوری، ادامه همین مسیر از زاویه حاکمیت است. کاتالوگ سرویس فهرست نام محصولات نیست؛ نقشه‌ای مدیریتی از مالکیت، اهمیت، وابستگی، سطح خدمت و الزامات بازیابی است."]
      ],
      intersections: [
        {
          title: "The service as the primary unit of continuity",
          faTitle: "سرویس به‌عنوان واحد اصلی تداوم",
          body: "Customers do not need a server, network or database to be healthy in isolation; they need the service outcome. His background provides a basis for evaluating continuity at service level.",
          faBody: "کاربر به سلامت جداگانه سرور، شبکه یا پایگاه داده نیاز ندارد؛ او نتیجه یک خدمت را می‌خواهد. سابقه اینالویی مبنایی برای ارزیابی تداوم از سطح سرویس فراهم می‌کند.",
          domains: [["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و توافق سطح خدمت"]]
        },
        {
          title: "Architecture as a means of containing impact",
          faTitle: "معماری برای محدودکردن دامنه اختلال",
          body: "Service-oriented architecture and digital banking connect service separation, isolation and clear ownership to impact containment.",
          faBody: "تجربه او در معماری سرویس‌گرا و بانکداری دیجیتال، تفکیک سرویس‌ها، ایزوله‌سازی و مالکیت روشن را به مهار اختلال پیوند می‌دهد.",
          domains: [["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال"]]
        },
        {
          title: "Exercises close the gap between plan and capability",
          faTitle: "تمرین؛ فاصله میان سند و قابلیت",
          body: "Scenario exercises expose unclear roles, incomplete escalation paths, individual dependencies and false assumptions about recovery time.",
          faBody: "تمرین سناریو، ابهام در نقش‌ها، مسیرهای ناقص تشدید، وابستگی به افراد و فرض‌های نادرست درباره زمان بازیابی را آشکار می‌کند.",
          domains: [["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"]]
        },
        {
          title: "Ecosystem dependency and shared responsibility",
          faTitle: "وابستگی اکوسیستم و مرزهای مشترک مسئولیت",
          body: "A digital banking service may depend on telecommunications, vendors, identity services, payment companies, fintech partners and regulatory requirements.",
          faBody: "خدمت دیجیتال بانکی ممکن است به ارتباطات، فروشنده نرم‌افزار، سرویس هویت، شرکت پرداخت، فین‌تک و الزامات تنظیم‌گر وابسته باشد.",
          domains: [["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا"], ["Continuity Governance", "حاکمیت تداوم"]]
        }
      ],
      experience: [
        ["IBM systems and enterprise technology", "سیستم‌های IBM و فناوری سازمانی", "Systems and infrastructure work", "فعالیت در سیستم و زیرساخت", "mid-1990s", "میانه دهه ۱۳۷۰", "Early exposure to connected enterprise systems and dependency-driven operations.", "آشنایی اولیه با سامانه‌های سازمانی به‌هم‌پیوسته و عملیات وابسته به اجزا."],
        ["Data Systems Iran", "داده‌پردازی ایران", "Enterprise technology environment", "محیط فناوری سازمانی", "early career", "سال‌های آغازین", "Extended the systems perspective across infrastructure, communications and large-scale requirements.", "گسترش نگاه سیستمی در زیرساخت، ارتباطات و الزامات محیط‌های بزرگ‌مقیاس."],
        ["Bank Parsian", "بانک پارسیان", "Banking infrastructure and security", "زیرساخت و امنیت بانکی", "formative years", "سال‌های شکل‌گیری بانک", "Connected infrastructure engineering to real-time banking and customer access.", "اتصال مهندسی زیرساخت به بانکداری بلادرنگ و دسترسی مشتری."],
        ["Banking technology solution providers", "شرکت‌های فناوری بانکی", "Supplier-side technology leadership", "راهبری فناوری در سوی تأمین‌کننده", "different periods", "دوره‌های مختلف", "Exposed support cycles, contracts, specialist availability and vendor stability as continuity factors.", "نمایان‌کردن چرخه پشتیبانی، قرارداد، دسترسی به متخصص و پایداری فروشنده به‌عنوان عوامل تداوم."],
        ["EN Bank", "بانک اقتصاد نوین", "Modern banking and technology responsibilities", "مسئولیت‌های فناوری و بانکداری مدرن", "before 2016", "پیش از ۱۳۹۵", "Broadened technology from platform operation to products, processes and customer experience.", "گسترش فناوری از عملیات پلتفرم به محصول، فرایند و تجربه مشتری."],
        ["Bank Iran Zamin", "بانک ایران‌زمین", "Technology executive", "مدیر فناوری", "2016-2023", "۱۳۹۵ تا ۱۴۰۲", "Led technology questions at governance scale across digital banking and service-oriented architecture.", "راهبری پرسش‌های فناوری در مقیاس حاکمیت، بانکداری دیجیتال و معماری سرویس‌گرا."]
      ],
      themes: [
        ["Banking technology and infrastructure", "فناوری و زیرساخت بانکی"],
        ["Digital banking", "بانکداری دیجیتال"],
        ["Service architecture", "معماری سرویس"],
        ["Open banking", "بانکداری باز"],
        ["Operational continuity", "تداوم عملیاتی"],
        ["Technology governance", "حاکمیت فناوری"],
        ["Ecosystem dependency management", "مدیریت وابستگی‌های اکوسیستم"]
      ],
      education: [
        ["Recorded professional roles: Board Member, Tourism Information Technology Company (TIT); Board Member, Jahan Argham Pars.", "سمت‌های حرفه‌ای ثبت‌شده: عضو هیئت‌مدیره فناوری اطلاعات گردشگری ایران (TIT) و عضو هیئت‌مدیره جهان ارقام پارس."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار پیش از ایندکس‌شدن نیازمند تأیید تحریریه است."]
      ],
      relatedDomains: [
        ["Continuity Governance", "حاکمیت تداوم", "Grounded in management accountability, service ownership and decision prioritization.", "برآمده از مسئولیت‌پذیری مدیریتی، مالکیت سرویس و اولویت‌بندی تصمیم‌ها."],
        ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم", "Grounded in exercises, assumption testing and pre-incident improvement.", "برآمده از ضرورت تمرین، آزمون فرض‌ها و اصلاح برنامه پیش از بحران."],
        ["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و توافق سطح خدمت", "Grounded in service definition, criticality and recovery expectations.", "برآمده از تعریف خدمت، سطح اهمیت و انتظارات بازیابی."],
        ["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا", "Grounded in dependencies on technology companies, vendors and ecosystem participants.", "برآمده از وابستگی بانک به شرکت‌های فناوری، فروشندگان و بازیگران اکوسیستم."],
        ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال", "Grounded in service separation, dependency management and bounded failure impact.", "برآمده از تفکیک سرویس، مدیریت وابستگی و محدودکردن دامنه شکست."]
      ]
    },
    {
      id: "alireza-bozorgmehri",
      name: "Alireza Bozorgmehri",
      faName: "علیرضا بزرگمهری",
      role: "Technocratic Thinker",
      faRole: "اندیشمند تکنوکرات",
      title: "Board Member · Iran Digital Transformation Association",
      faTitle: "عضو هیئت‌مدیره · انجمن تحول دیجیتال ایران",
      subject: "Service architecture, ITSM and continuity governance",
      faSubject: "معماری سرویس، ITSM و حاکمیت تداوم",
      image: "Assets/alireza-bozorgmehri.jpg",
      imageClass: "person-photo-alireza",
      bio: "Alireza Bozorgmehri works at the intersection of enterprise technology, digital banking and IT service management.",
      faBio: "علیرضا بزرگمهری در مرز فناوری سازمانی، بانکداری دیجیتال و مدیریت خدمات فناوری کار کرده است."
    },
    {
      id: "hesam-maghsoodloo",
      name: "Hesam Maghsoudloo",
      faName: "حسام مقصودلو",
      role: "Technocratic Thinker",
      faRole: "اندیشمند تکنوکرات",
      title: "CEO · IDEA Ventures",
      faTitle: "مدیرعامل · IDEA Ventures",
      subject: "Payments, smart city, digital banking and service continuity",
      faSubject: "پرداخت، شهر هوشمند، بانکداری دیجیتال و تداوم خدمت",
      image: "Assets/hesam-maghsoodloo.jpg",
      imageClass: "person-photo-hesam",
      profileLayout: "monograph",
      profileNumber: "03",
      faProfileNumber: "۰۳",
      positioning: "Digital continuity is not system uptime alone. The service chain, revenue path and decision capacity have to continue together.",
      faPositioning: "تداوم دیجیتال فقط روشن‌ماندن سامانه نیست؛ زنجیره خدمت، درآمد و تصمیم باید هم‌زمان قابلیت ادامه داشته باشند.",
      heroTags: [
        ["Payments and FinTech", "پرداخت و فین‌تک"],
        ["Smart city", "شهر هوشمند"],
        ["Digital banking", "بانکداری دیجیتال"],
        ["Technology governance", "حاکمیت فناوری"],
        ["Venture capital", "سرمایه‌گذاری خطرپذیر"]
      ],
      quote: "A completed transaction is not produced by one healthy component. It is produced by a service chain that still works when pressure moves across infrastructure, operations and revenue.",
      faQuote: "تراکنش کامل محصول سلامت یک جزء نیست؛ محصول زنجیره خدمتی است که وقتی فشار میان زیرساخت، عملیات و درآمد جابه‌جا می‌شود همچنان کار می‌کند.",
      bio: "Hesam Maghsoudloo is an executive working across technology, payments, digital public services, banking and venture capital.",
      faBio: "حسام مقصودلو مدیری در تقاطع فناوری، پرداخت، خدمات شهری، بانکداری دیجیتال و سرمایه‌گذاری خطرپذیر است.",
      storyTitle: "When one dependency stops the entire service",
      faStoryTitle: "وقتی یک حلقه، کل خدمت را متوقف می‌کند",
      story: [
        ["Maghsoudloo’s professional path began in engineering, university activities and project management. Work at Sharif University of Technology’s technology studies center, followed by his move into Modern Industries Management Company, shifted his attention from technology analysis to environments where technical choices had to become products and businesses.", "مسیر حرفه‌ای حسام مقصودلو از مهندسی، فعالیت دانشگاهی و مدیریت پروژه آغاز شد. تجربه در مرکز مطالعات تکنولوژی دانشگاه صنعتی شریف و سپس ورود به شرکت مدیریت صنایع نوین تأمین، او را از تحلیل فناوری به محیطی برد که تصمیم‌های فنی باید به محصول و کسب‌وکار تبدیل می‌شدند."],
        ["At Etek and within the Fanap ecosystem, this experience expanded into micropayments, citizen cards and electronic ticketing. Delivering services across several cities, when continuous network access could not be assumed, required attention to offline processing, field devices, operating support and settlement.", "در اتیک و اکوسیستم فناپ، این تجربه به پرداخت خرد، کارت شهروندی و بلیت الکترونیکی گسترش یافت. ارائه خدمت در چند شهر، در دوره‌ای که اتصال شبکه همیشه قابل‌اتکا نبود، نیازمند توجه به پردازش آفلاین، تجهیزات میدانی، عملیات پشتیبانی و تسویه بود."],
        ["His subsequent work in technology and equipment-supply companies exposed another continuity layer: hardware lifecycle. Servers, storage, networks, security devices and communications are not only procurement decisions; upgrade paths, patches, specialist support, spare parts and future availability determine how long infrastructure can remain dependable.", "مقصودلو سپس در شرکت‌های فناوری و تأمین تجهیزات، با لایه دیگری از تداوم روبه‌رو شد: چرخه عمر سخت‌افزار. سرور، ذخیره‌ساز، شبکه، تجهیزات امنیتی و ارتباطات فقط هنگام خرید مسئله نیستند؛ ارتقا، پشتیبانی، قطعه جایگزین و امکان تأمین در سال‌های بعد تعیین می‌کنند زیرساخت تا چه زمانی قابل‌اتکا می‌ماند."],
        ["Maghsoudloo’s move into Tehran Municipality’s information and communications technology organization changed both the scale and the nature of the service. Smart-city initiatives and the My Tehran platform had to support continuous public services for a large urban population.", "ورود او به سازمان فناوری اطلاعات و ارتباطات شهرداری تهران، مقیاس و ماهیت خدمت را تغییر داد. پروژه‌های شهر هوشمند و پلتفرم تهران من باید خدمات شهری را به‌صورت پیوسته و برای جمعیت بزرگی از شهروندان ارائه می‌کردند."],
        ["In February 2022, Maghsoudloo joined the board of Bank Tejarat’s technology and innovation holding. His work at TAFTA involved governance of critical banking technology, core-system transition, technology-company oversight and fintech collaboration.", "از بهمن ۱۴۰۰، مقصودلو به هیئت‌مدیره هلدینگ فناوری و نوآوری بانک تجارت پیوست. تجربه تفتا او را با حاکمیت فناوری‌های حیاتی بانک، مهاجرت سامانه‌های اصلی، مدیریت شرکت‌های فناوری و همکاری با فین‌تک‌ها درگیر کرد."],
        ["His current work as CEO of IDEA Ventures and board member at Mehrcom expands this experience from existing operations into future-business assessment. An investor needs to see growth potential and the dependencies capable of stopping the model: regulation, infrastructure, customer acquisition, people and finance.", "در دوره فعلی، مدیریت IDEA Ventures و عضویت در هیئت‌مدیره مهرکام، نگاه او را از راهبری عملیات موجود به ارزیابی آینده کسب‌وکارها گسترش داده است. سرمایه‌گذار باید هم امکان رشد را ببیند و هم وابستگی‌هایی را که می‌توانند مدل را متوقف کنند: تنظیم‌گری، زیرساخت، کانال جذب مشتری، سرمایه انسانی و دسترسی به منابع مالی."]
      ],
      intersections: [
        {
          title: "Design the complete service flow",
          faTitle: "طراحی انتهابه‌انتهای خدمت",
          body: "Customers do not consume the separate health of a network, application or device. His work across urban payments and public digital services connects continuity to infrastructure, operations, support, settlement and response as one flow.",
          faBody: "مشتری سلامت جداگانه شبکه، اپلیکیشن یا تجهیزات را دریافت نمی‌کند. تجربه او در پرداخت شهری و خدمات عمومی دیجیتال، تداوم را به کل جریان متصل می‌کند: زیرساخت، عملیات، پشتیبانی، تسویه و پاسخ‌گویی.",
          domains: [["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و توافق سطح خدمت"], ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری"]]
        },
        {
          title: "Evaluate the combined effect of risks",
          faTitle: "سنجش اثر تجمعی ریسک‌ها",
          body: "His experience across infrastructure, banking and investment connects continuity evaluation to compound risks and shared dependencies.",
          faBody: "تجربه او در زیرساخت، بانک و سرمایه‌گذاری، ارزیابی تداوم را به ترکیب ریسک‌ها و وابستگی‌های مشترک پیوند می‌دهد.",
          domains: [["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"], ["Hardware Infrastructure Supply", "تأمین زیرساخت سخت‌افزاری"]]
        },
        {
          title: "Retain internal ownership of critical capability",
          faTitle: "مالکیت داخلی قابلیت حیاتی",
          body: "Specialist vendors can improve quality and speed, but they do not remove accountability for the core. Contracts need expertise access, escalation routes, alternatives and the organization’s own capacity to decide.",
          faBody: "استفاده از پیمانکار و شریک تخصصی می‌تواند کیفیت و سرعت ایجاد کند، اما مسئولیت Core را از سازمان حذف نمی‌کند. قرارداد باید با دسترسی به تخصص، مسیر Escalation، گزینه جایگزین و توان تصمیم سازمان تکمیل شود.",
          domains: [["Continuity Governance", "حاکمیت تداوم"], ["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا"]]
        },
        {
          title: "Convert known risk into a funded decision",
          faTitle: "تبدیل ریسک شناخته‌شده به تصمیم بودجه‌ای",
          body: "A risk register without resources and action ownership produces recorded awareness, not capability. Executives must understand business impact, set priority and fund defensible provisions.",
          faBody: "Risk Register بدون منابع و مالک اقدام، فقط آگاهی ثبت‌شده تولید می‌کند. مدیر باید اثر کسب‌وکاری را بفهمد، اولویت تعیین کند و برای کنترل ریسک بودجه قابل‌دفاع اختصاص دهد.",
          domains: [["Continuity Governance", "حاکمیت تداوم"], ["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی"]]
        }
      ],
      experience: [
        ["Technology studies and early project work", "مطالعات فناوری و پروژه‌های آغازین", "Engineering, university activity and project management", "مهندسی، فعالیت دانشگاهی و مدیریت پروژه", "early career", "سال‌های آغازین", "Shifted technology analysis toward product, service and business execution.", "تحلیل فناوری را به محصول، خدمت و اجرای کسب‌وکار پیوند داد."],
        ["Etek and Fanap ecosystem", "اتیک و اکوسیستم فناپ", "Micropayments and electronic ticketing", "پرداخت خرد و بلیت الکترونیکی", "formative period", "دوره شکل‌گیری", "Exposed offline processing, field devices, support and settlement as continuity requirements.", "پردازش آفلاین، تجهیزات میدانی، پشتیبانی و تسویه را به‌عنوان الزامات تداوم آشکار کرد."],
        ["Technology and equipment-supply companies", "شرکت‌های فناوری و تأمین تجهیزات", "Infrastructure and supply leadership", "راهبری زیرساخت و تأمین", "different periods", "دوره‌های مختلف", "Connected continuity to hardware lifecycle, support, spare parts and future availability.", "تداوم را به چرخه عمر سخت‌افزار، پشتیبانی، قطعه جایگزین و امکان تأمین آینده وصل کرد."],
        ["Tehran Municipality ICT Organization", "سازمان فناوری اطلاعات و ارتباطات شهرداری تهران", "Smart-city and digital public service leadership", "راهبری شهر هوشمند و خدمات عمومی دیجیتال", "COVID-era service continuity", "تداوم خدمت در دوران کرونا", "Made digital channels a primary route for continuing municipal management and citizen service.", "کانال دیجیتال را به مسیر اصلی ادامه مدیریت شهری و خدمت شهروندی تبدیل کرد."],
        ["TAFTA, Bank Tejarat technology holding", "تفتا، هلدینگ فناوری بانک تجارت", "Board-level technology governance", "حاکمیت فناوری در سطح هیئت‌مدیره", "from Feb 2022", "از بهمن ۱۴۰۰", "Connected core-system transition, technology-company oversight and fintech collaboration.", "مهاجرت سامانه‌های اصلی، مدیریت شرکت‌های فناوری و همکاری با فین‌تک‌ها را به هم وصل کرد."],
        ["IDEA Ventures and Mehrcom", "IDEA Ventures و مهرکام", "CEO and board member", "مدیرعامل و عضو هیئت‌مدیره", "current roles", "سمت‌های فعلی", "Expands continuity thinking into growth, dependency, revenue and investment decisions.", "تفکر تداوم را به رشد، وابستگی، درآمد و تصمیم سرمایه‌گذاری گسترش می‌دهد."]
      ],
      themes: [
        ["Payments and FinTech", "پرداخت و فین‌تک"],
        ["Smart City and Digital Public Services", "شهر هوشمند و خدمات عمومی دیجیتال"],
        ["Digital Banking", "بانکداری دیجیتال"],
        ["Technology Governance", "حاکمیت فناوری"],
        ["Technology Infrastructure and Supply Chain", "زیرساخت و زنجیره تأمین فناوری"],
        ["Venture Capital", "سرمایه‌گذاری خطرپذیر"],
        ["Service Continuity", "تداوم خدمت"],
        ["Business Risk and Economics", "ریسک و مدل اقتصادی کسب‌وکار"]
      ],
      education: [
        ["Recorded professional role: CEO, IDEA Ventures.", "سمت حرفه‌ای ثبت‌شده: مدیرعامل IDEA Ventures."],
        ["Concurrent recorded role: Board Member, Mehrcom Iranian Information Technology and Innovation Company.", "نقش حرفه‌ای هم‌زمان: عضو هیئت‌مدیره شرکت فناوری اطلاعات و نوآوری مهرکام ایرانیان."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار پیش از ایندکس‌شدن نیازمند تأیید تحریریه است."]
      ],
      relatedDomains: [
        ["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و توافق سطح خدمت", "Grounded in complete service-flow design and operating-response readiness.", "برآمده از طراحی جریان کامل خدمت و آمادگی عملیات و پاسخ‌گویی."],
        ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم", "Grounded in compound infrastructure, cyber, supply and regulatory scenarios.", "برآمده از سنجش اثر هم‌زمان ریسک‌های زیرساختی، سایبری، تأمین و تنظیم‌گری."],
        ["Hardware Infrastructure Supply", "تأمین زیرساخت سخت‌افزاری", "Grounded in equipment lifecycle, upgrades, support and replacement capacity.", "برآمده از چرخه عمر تجهیزات، ارتقا، پشتیبانی و امکان جایگزینی."],
        ["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا", "Grounded in dependencies on operators, vendors, contractors and external channels.", "برآمده از وابستگی به اپراتور، پیمانکار، فروشنده و کانال‌های بیرونی."],
        ["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی", "Grounded in the relationship among service, demand, revenue and mitigation funding.", "برآمده از ارتباط میان خدمت، تقاضا، درآمد و بودجه کنترل ریسک."]
      ]
    },
    {
      id: "mostafa-sabeti",
      name: "Mostafa Sabeti",
      faName: "مصطفی ثابتی",
      role: "Technocratic Leader",
      faRole: "رهبر تکنوکرات",
      title: "CEO and Board Member · Tourism IT / TIT",
      faTitle: "مدیرعامل و عضو هیئت‌مدیره · Tourism IT / TIT",
      subject: "Banking technology, digital transformation and adaptive continuity",
      faSubject: "فناوری بانکی، تحول دیجیتال و تداوم تطبیقی",
      image: "Assets/mostafa-sabeti.jpg",
      imageClass: "person-photo-mostafa",
      profileLayout: "monograph",
      profileNumber: "04",
      faProfileNumber: "۰۴",
      positioning: "Continuity must protect today’s operating core without consuming the organization’s capacity to build what comes next.",
      faPositioning: "تداوم فقط حفظ هسته امروز نیست؛ سازمان باید توان حرکت و ساختن مرحله بعد را نیز نگه دارد.",
      heroTags: [
        ["Banking technology", "فناوری بانکی"],
        ["Digital transformation", "تحول دیجیتال"],
        ["FinTech", "فین‌تک"],
        ["Enterprise AI", "هوش مصنوعی سازمانی"],
        ["Adaptive management", "مدیریت تطبیقی"]
      ],
      quote: "Continuity is not passive waiting for normality to return. It is the ability to protect the core while still leaving room for the next move.",
      faQuote: "تداوم انتظار منفعل برای بازگشت شرایط عادی نیست؛ توان حفظ هسته و هم‌زمان نگه‌داشتن فضای حرکت بعدی است.",
      bio: "Mostafa Sabeti is an executive working across banking, technology, digital transformation and business development.",
      faBio: "مصطفی ثابتی مدیری در تقاطع بانکداری، فناوری، تحول دیجیتال و توسعه کسب‌وکار است.",
      storyTitle: "Continuing when the old operating conditions do not return",
      faStoryTitle: "ادامه‌دادن، وقتی شرایط قبلی بازنمی‌گردد",
      story: [
        ["Sabeti entered banking in 2001 through the branch network and moved into information technology within months. That early transition established the relationship between the service performed in a branch and the system that makes it possible.", "مصطفی ثابتی در سال ۱۳۸۰ فعالیت خود را از شبکه شعب بانکی آغاز کرد و چند ماه بعد به واحد فناوری اطلاعات رفت. این جابه‌جایی زودهنگام، پیوند میان واقعیت خدمت در شعبه و سامانه‌ای را ساخت که آن خدمت را ممکن می‌کند."],
        ["His involvement in core banking implementation, branch migration, data preparation, user training and banking-product design expanded that perspective. Core banking is not an isolated software project; data, processes, roles, infrastructure and service delivery have to change together.", "مشارکت در استقرار Core Banking، مهاجرت شعب، آماده‌سازی داده، آموزش کاربران و طراحی محصولات بانکی، این نگاه را گسترده‌تر کرد. Core Banking پروژه‌ای نرم‌افزاری و جداافتاده نیست؛ داده، فرایند، نقش کاربر، زیرساخت و روش ارائه خدمت باید با هم تغییر کنند."],
        ["Across nearly two decades in the same banking ecosystem, Sabeti moved from regional and operating responsibilities into technology leadership, IT service management, process and product design, and organizational innovation.", "ثابتی نزدیک به دو دهه در همان اکوسیستم بانکی، از مسئولیت‌های عملیاتی و منطقه‌ای به مدیریت فناوری، مدیریت سرویس، طراحی فرایند و محصول و سپس نوآوری سازمانی رسید."],
        ["In 2019, he moved to Vienna for an educational and professional experience while working with an international startup team. The COVID-19 crisis changed that plan and brought him back to Iran.", "در سال ۱۳۹۸، برای تجربه تحصیلی و حرفه‌ای به وین رفت و هم‌زمان با یک تیم بین‌المللی روی یک کسب‌وکار نوپا کار کرد. بحران کرونا مسیر برنامه‌ریزی‌شده را تغییر داد و او به ایران بازگشت."],
        ["His later work in property technology responded to a market in which conventional property sales had been constrained. Digitizing sales, contracts and financial flows became an exercise in changing the model when waiting for former conditions could itself stop the business.", "دوره بعدی فعالیت او در PropTech پاسخی به بازاری بود که فروش حضوری ملک با محدودیت روبه‌رو شده بود. دیجیتالی‌کردن فروش، قرارداد و جریان مالی، تمرینی برای تغییر مدل در شرایطی بود که انتظار برای بازگشت وضعیت قبلی می‌توانست خودِ کسب‌وکار را متوقف کند."],
        ["Since October 2024, Sabeti has led Tourism IT. The role brings the stability of Bank Tourism’s technology services into the same portfolio as digital-ecosystem development, fintech businesses, supply-chain finance and enterprise AI.", "از مهر ۱۴۰۳، ثابتی مدیرعامل هلدینگ توسعه فناوری اطلاعات گردشگری ایران است. این نقش، پایداری سرویس‌های فناوری بانک گردشگری را با توسعه اکوسیستم دیجیتال، کسب‌وکارهای فین‌تکی، تأمین مالی زنجیره‌ای و کاربردهای هوش مصنوعی در یک سبد مدیریتی قرار می‌دهد."],
        ["Broad disruptions during 2025 tested that balance under pressure. Connectivity constraints and stress on banking services slowed or paused parts of the development agenda while essential services took priority.", "اختلال‌های گسترده سال ۱۴۰۴ این تعادل را در شرایط واقعی آزمودند. محدودیت ارتباطی و فشار بر سرویس‌های بانکی، بخشی از برنامه توسعه را کند یا متوقف کرد و حفظ خدمات حیاتی را در اولویت قرار داد."],
        ["His relevance to House of Technocrats lies in this layered view: modular architecture, capable people, decision governance and diverse access paths have to be considered together.", "ارزش تجربه او برای خانه تکنوکرات‌ها در همین نگاه چندلایه است: معماری ماژولار، نیروی انسانی آماده، حاکمیت تصمیم و تنوع مسیرهای دسترسی باید در کنار هم دیده شوند."]
      ],
      intersections: [
        {
          title: "Turn recurring disruption into a planning assumption",
          faTitle: "تبدیل اختلال تکرارشونده به فرض پایه",
          body: "An event that repeats is no longer an exception. His banking technology leadership under connectivity, energy and supply constraints connects planning to permanent, testable scenarios.",
          faBody: "رخدادی که بارها تکرار شده دیگر استثنا نیست. تجربه او در اداره فناوری بانکی تحت محدودیت ارتباط، انرژی و تأمین تجهیزات، برنامه‌ریزی را به سناریوهای دائمی و قابل‌آزمون متصل می‌کند.",
          domains: [["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"], ["Continuity Maintenance", "نگهداشت تداوم"]]
        },
        {
          title: "Modularize to preserve room for change",
          faTitle: "ماژولارکردن برای حفظ امکان تغییر",
          body: "Dependence on one infrastructure, team, geography or access path can allow a local interruption to stop the whole business. His work extends modularity beyond software architecture into capabilities, teams and business flows.",
          faBody: "وابستگی کامل به یک زیرساخت، تیم، جغرافیا یا مسیر دسترسی می‌تواند توقف یک جزء را به توقف کل کسب‌وکار تبدیل کند. تجربه او ماژولارکردن را از معماری نرم‌افزار به قابلیت‌ها، تیم‌ها و جریان‌های کسب‌وکار گسترش می‌دهد.",
          domains: [["Continuity Architecture", "معماری تداوم"], ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال"]]
        },
        {
          title: "Preserve human capability under prolonged pressure",
          faTitle: "حفظ سرمایه انسانی در فشار طولانی",
          body: "Employee presence is not the same as retained capability. Motivation, focus, psychological security, knowledge and decision capacity are operating assets.",
          faBody: "حضور کارکنان به‌تنهایی به معنای حفظ قابلیت نیست. انگیزه، تمرکز، امنیت روانی، دانش و امکان تصمیم‌گیری بخشی از ظرفیت عملیاتی‌اند.",
          domains: [["Continuity Smart Management", "مدیریت هوشمند تداوم"]]
        },
        {
          title: "Balance Run, Change and Innovation",
          faTitle: "تعادل میان Run، Change و Innovation",
          body: "During crisis, essential services take priority. But a prolonged freeze on change and innovation can deepen the organization’s future gap.",
          faBody: "در بحران، حفاظت از خدمات پایه تقدم دارد؛ اما توقف طولانی تغییر و نوآوری می‌تواند شکاف آینده سازمان را عمیق‌تر کند.",
          domains: [["Continuity Smart Management", "مدیریت هوشمند تداوم"], ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری"]]
        }
      ],
      experience: [
        ["Bank branch network", "شبکه شعب بانکی", "Branch operations to information technology", "از عملیات شعبه به فناوری اطلاعات", "from 2001", "از ۱۳۸۰", "Linked everyday banking service with the systems that make that service possible.", "خدمت روزمره بانکی را به سامانه‌هایی پیوند داد که آن خدمت را ممکن می‌کنند."],
        ["Core Banking implementation", "استقرار Core Banking", "Migration, data preparation, user training and product design", "مهاجرت، آماده‌سازی داده، آموزش کاربر و طراحی محصول", "banking ecosystem", "اکوسیستم بانکی", "Showed that technology becomes capability only when people, process and ownership change together.", "نشان داد فناوری زمانی به قابلیت تبدیل می‌شود که انسان، فرایند و مالکیت عملیاتی هم‌زمان تغییر کنند."],
        ["Banking innovation and venture collaboration", "نوآوری بانکی و همکاری با استارتاپ‌ها", "Innovation structure and startup collaboration", "ساختار نوآوری و همکاری با استارتاپ‌ها", "after technology leadership", "پس از راهبری فناوری", "Raised the question of balancing reliable current service with future business building.", "پرسش تعادل میان اجرای پایدار سرویس امروز و ساختن کسب‌وکار آینده را برجسته کرد."],
        ["Vienna and international startup work", "وین و کار با تیم بین‌المللی", "Educational and professional experience", "تجربه تحصیلی و حرفه‌ای", "2019", "۱۳۹۸", "COVID changed the planned path and turned adaptation into a lived continuity question.", "کرونا مسیر برنامه‌ریزی‌شده را تغییر داد و سازگاری را به تجربه‌ای واقعی از تداوم تبدیل کرد."],
        ["PropTech and digital sales models", "PropTech و مدل‌های فروش دیجیتال", "Digital contracts, financial flows and tokenized assets", "قرارداد دیجیتال، جریان مالی و دارایی توکنیزه", "COVID-era market response", "پاسخ به بازار دوران کرونا", "Changed the model when waiting for old conditions could stop the business.", "مدل را تغییر داد وقتی انتظار برای شرایط قبلی می‌توانست کسب‌وکار را متوقف کند."],
        ["Tourism IT / TIT", "Tourism IT / TIT", "CEO and Board Member", "مدیرعامل و عضو هیئت‌مدیره", "from October 2024", "از مهر ۱۴۰۳", "Combines banking-service stability with digital ecosystem development, fintech, supply-chain finance and enterprise AI.", "پایداری سرویس‌های فناوری بانکی را با توسعه اکوسیستم دیجیتال، فین‌تک، تأمین مالی زنجیره‌ای و هوش مصنوعی سازمانی ترکیب می‌کند."]
      ],
      themes: [
        ["Banking Information Technology", "فناوری اطلاعات بانکی"],
        ["Digital Transformation", "تحول دیجیتال"],
        ["Digital Banking and FinTech", "بانکداری دیجیتال و فین‌تک"],
        ["IT Service Management", "مدیریت سرویس فناوری"],
        ["Corporate Innovation and Venture Building", "نوآوری سازمانی و Venture Building"],
        ["Enterprise AI", "هوش مصنوعی سازمانی"],
        ["Modular Architecture", "معماری ماژولار"],
        ["Business Continuity and Adaptive Management", "تداوم کسب‌وکار و مدیریت تطبیقی"]
      ],
      education: [
        ["Recorded professional role: CEO and Board Member, Tourism Information Technology Development Holding (Tourism IT / TIT).", "سمت حرفه‌ای ثبت‌شده: مدیرعامل و عضو هیئت‌مدیره هلدینگ توسعه فناوری اطلاعات گردشگری ایران (Tourism IT / TIT)."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار پیش از ایندکس‌شدن نیازمند تأیید تحریریه است."]
      ],
      relatedDomains: [
        ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم", "Grounded in converting recurring disruption into testable scenarios.", "برآمده از تبدیل اختلال‌های پرتکرار به سناریوهای قابل‌آزمون."],
        ["Continuity Maintenance", "نگهداشت تداوم", "Grounded in periodic reassessment of assumptions, plans and capabilities.", "برآمده از بازنگری منظم فرض‌ها، برنامه‌ها و قابلیت‌ها در محیط متغیر."],
        ["Continuity Architecture", "معماری تداوم", "Grounded in diverse access paths and reduced dependency on one team, infrastructure or geography.", "برآمده از تنوع مسیرهای دسترسی و کاهش وابستگی به یک تیم، زیرساخت یا جغرافیا."],
        ["Continuity Smart Management", "مدیریت هوشمند تداوم", "Grounded in decision-making under uncertainty and capacity allocation across survival, change and future growth.", "برآمده از تصمیم‌گیری در ابهام و تخصیص ظرفیت میان بقا، تغییر و آینده."],
        ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال", "Grounded in modular capability design and bounded failure propagation.", "برآمده از ماژولارکردن قابلیت‌ها و محدودکردن سرایت شکست."]
      ]
    },
    {
      id: "mohammad-farjood",
      name: "Mohammad Farjood",
      faName: "محمد فرجود",
      role: "Technocratic Leader",
      faRole: "رهبر تکنوکرات",
      title: "CEO · Notra Investment Holding",
      faTitle: "مدیرعامل · هلدینگ سرمایه‌گذاری نوترا",
      subject: "Technology investment, smart city and digital banking continuity",
      faSubject: "سرمایه‌گذاری فناوری، شهر هوشمند و تداوم بانکداری دیجیتال",
      image: "Assets/mohammad-farjood.jpg",
      imageClass: "person-photo-farjood",
      profileLayout: "monograph",
      profileNumber: "05",
      faProfileNumber: "۰۵",
      positioning: "Continuity in an unstable environment is the capacity to redesign services and portfolios, not merely restore the previous state.",
      faPositioning: "تداوم در محیط ناپایدار، توان بازطراحی سرویس و پرتفوی است؛ نه صرفاً بازگشت به وضعیت قبلی.",
      heroTags: [
        ["Technology investment", "سرمایه‌گذاری فناوری"],
        ["Digital banking", "بانکداری دیجیتال"],
        ["Telecommunications", "مخابرات"],
        ["Smart city", "شهر هوشمند"],
        ["Portfolio governance", "حاکمیت پرتفوی"]
      ],
      quote: "An organization should not respond to each incident by returning to its former state. It should improve architecture, portfolio design and decision quality.",
      faQuote: "سازمان نباید پس از هر بحران فقط به نقطه قبل بازگردد؛ باید معماری، پرتفوی و کیفیت تصمیم خود را بهتر کند.",
      bio: "Mohammad Farjood is an executive working across technology investment, telecommunications, smart city and digital banking.",
      faBio: "محمد فرجود مدیری در تقاطع سرمایه‌گذاری فناوری، مخابرات، شهر هوشمند و بانکداری دیجیتال است.",
      storyTitle: "Growing through instability by redesigning continuously",
      faStoryTitle: "رشد در دل ناپایداری، با بازطراحی مداوم",
      story: [
        ["Farjood began his professional career in the mid-2000s at Sharif University of Technology’s technology studies center. His subsequent work at Modern Industries Holding connected technology analysis to investment and venture development across ICT, health and emerging technology.", "محمد فرجود فعالیت حرفه‌ای خود را در میانه دهه ۱۳۸۰ در مرکز مطالعات فناوری دانشگاه صنعتی شریف آغاز کرد. ورود بعدی او به هلدینگ صنایع نوین تأمین، تحلیل فناوری را به ارزیابی و توسعه سرمایه‌گذاری در ICT، سلامت و فناوری‌های نوظهور پیوند داد."],
        ["His involvement in the early stages of Iran’s third mobile operator, followed by marketing and product leadership at Rightel, placed that perspective inside an industry that serves as infrastructure for many other services.", "مشارکت او در مطالعات و مراحل اولیه اپراتور سوم، و سپس مسئولیت‌های بازاریابی و محصول در رایتل، این نگاه را وارد صنعتی کرد که خود زیرساخت بسیاری از خدمات دیگر است."],
        ["At Irancell, Farjood established and developed the enterprise business unit. Secure connectivity, data services, IoT, smart-city solutions, cloud and other organizational services required technology to become a value proposition a corporate customer could understand.", "در ایرانسل، فرجود به راه‌اندازی و توسعه کسب‌وکار سازمانی پرداخت. ارتباطات امن، داده، اینترنت اشیا، شهر هوشمند، Cloud و خدمات دیجیتال سازمانی نیازمند آن بودند که فناوری به مسئله و ارزش پیشنهادی قابل‌فهم برای مشتری سازمانی تبدیل شود."],
        ["The next phase of his work took place at Tehran Municipality’s information and communications technology organization. Leadership of the smart-city agenda and My Tehran platform expanded the service scale from organizational customers to the population of a metropolis.", "مرحله بعدی مسیر او در سازمان فناوری اطلاعات و ارتباطات شهرداری تهران شکل گرفت. راهبری برنامه شهر هوشمند و توسعه تهران من، مقیاس خدمت را از مشتری سازمانی به شهروندان یک کلان‌شهر گسترش داد."],
        ["The COVID-19 crisis changed the role of urban platforms. A service previously positioned within digital transformation became an alternative to physical access and a route for continuing parts of municipal operation.", "بحران کرونا نقش پلتفرم‌های شهری را تغییر داد. خدمتی که پیش‌تر بخشی از برنامه تحول دیجیتال بود، به مسیر جایگزین برای مراجعه حضوری و ادامه بخشی از عملیات شهری تبدیل شد."],
        ["From February 2022 until November 2024, Farjood led Bank Tejarat’s technology and innovation holding. TAFTA was a portfolio of infrastructure, payment, fintech and digital businesses that had to serve the bank’s current requirements while developing future capability.", "فرجود از بهمن ۱۴۰۰ تا آبان ۱۴۰۳ مدیرعامل هلدینگ فناوری و نوآوری بانک تجارت بود. تفتا برای او پرتفویی از زیرساخت، پرداخت، فین‌تک و کسب‌وکارهای دیجیتال بود که باید هم به نیازهای جاری بانک پاسخ می‌دادند و هم ظرفیت‌های آینده را می‌ساختند."],
        ["This experience moves continuity from systems into the legal and economic viability of the enterprise. Accumulated losses, legal disputes, weak governance or an exhausted business model can stop a company as effectively as an infrastructure failure.", "این تجربه، تداوم را از سطح سامانه به سطح موجودیت حقوقی و اقتصادی می‌برد. زیان انباشته، دعاوی حقوقی، Governance ضعیف یا مدل کسب‌وکار فرسوده می‌توانند همان‌قدر یک شرکت را متوقف کنند که خرابی زیرساخت."],
        ["His current leadership of Notra Investment Holding and board roles in technology holdings bring his work back to investment and venture development. A resilient portfolio can create alternative growth paths when markets move.", "در دوره جدید، مدیریت هلدینگ سرمایه‌گذاری نوترا و نقش‌های هیئت‌مدیره‌ای در هلدینگ‌های فناوری، تجربه فرجود را دوباره به سرمایه‌گذاری و توسعه کسب‌وکار بازگردانده است. یک پرتفوی مقاوم می‌تواند هنگام تغییر بازار، مسیرهای رشد جایگزین ایجاد کند."]
      ],
      intersections: [
        {
          title: "Treat scalability as continuous redesign",
          faTitle: "مقیاس‌پذیری به‌عنوان بازطراحی مستمر",
          body: "Growth in users and transactions changes failure patterns, data flows and operating demand. Architecture should be reassessed at growth thresholds.",
          faBody: "رشد کاربر و تراکنش، الگوی شکست، جریان داده و نیاز عملیاتی را تغییر می‌دهد. معماری باید در آستانه‌های رشد بازبینی شود.",
          domains: [["Continuity Architecture", "معماری تداوم"]]
        },
        {
          title: "Make the alternative path genuinely independent",
          faTitle: "مسیر جایگزین باید واقعاً مستقل باشد",
          body: "A second channel offers little protection when it depends on the same data center, domain, team or communications route.",
          faBody: "داشتن کانال دوم کافی نیست اگر به همان مرکز داده، دامنه، تیم یا مسیر ارتباطی وابسته باشد.",
          domains: [["Continuity Architecture", "معماری تداوم"], ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری"]]
        },
        {
          title: "Manage the portfolio as a set of options",
          faTitle: "پرتفوی به‌عنوان مجموعه‌ای از گزینه‌ها",
          body: "A resilient portfolio does not depend on one principal revenue engine. Each new path needs a hypothesis, budget, deadline and continuation criteria.",
          faBody: "یک پرتفوی مقاوم فقط از یک موتور درآمدی تشکیل نمی‌شود. هر مسیر تازه باید فرضیه، بودجه، زمان‌بندی و معیار ادامه داشته باشد.",
          domains: [["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی"], ["Continuity Governance", "حاکمیت تداوم"]]
        },
        {
          title: "Convert incidents into institutional capability",
          faTitle: "تبدیل رخداد به قابلیت سازمانی",
          body: "An incident report matters when it changes the next scenario, architecture, authority or exercise.",
          faBody: "گزارش حادثه زمانی ارزش دارد که به تغییر در سناریو، معماری، اختیار و تمرین بعدی منجر شود.",
          domains: [["Continuity Maintenance", "نگهداشت تداوم"], ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"]]
        }
      ],
      experience: [
        ["Sharif University of Technology technology studies center", "مرکز مطالعات فناوری دانشگاه صنعتی شریف", "Technology assessment", "ارزیابی فناوری", "mid-2000s", "میانه دهه ۱۳۸۰", "Connected high-technology assessment to market, capital and operating capability.", "ارزیابی فناوری‌های High-Tech را به بازار، سرمایه و قابلیت اجرا وصل کرد."],
        ["Modern Industries Holding", "هلدینگ صنایع نوین تأمین", "Investment and venture development", "سرمایه‌گذاری و توسعه کسب‌وکار", "early career", "اوایل مسیر", "Linked technology analysis with ICT, health and emerging-technology ventures.", "تحلیل فناوری را با سرمایه‌گذاری در ICT، سلامت و فناوری‌های نوظهور پیوند داد."],
        ["Third mobile operator and Rightel", "اپراتور سوم و رایتل", "Marketing and product leadership", "راهبری بازاریابی و محصول", "telecom phase", "دوره مخابرات", "Placed continuity thinking inside an industry that is product, channel and dependency layer at once.", "تداوم را در صنعتی دید که هم محصول است، هم کانال و هم لایه وابستگی."],
        ["Irancell enterprise business", "کسب‌وکار سازمانی ایرانسل", "Enterprise unit founder and developer", "راه‌اندازی و توسعه واحد سازمانی", "enterprise services", "خدمات سازمانی", "Connected secure connectivity, IoT, cloud and smart-city services to revenue and accountability.", "ارتباطات امن، IoT، Cloud و شهر هوشمند را به درآمد و پاسخ‌گویی عملیاتی متصل کرد."],
        ["Tehran Municipality ICT Organization", "سازمان فناوری اطلاعات و ارتباطات شهرداری تهران", "Smart-city and My Tehran platform leadership", "راهبری شهر هوشمند و پلتفرم تهران من", "large-scale public service", "خدمت عمومی بزرگ‌مقیاس", "Made scalability part of continuity as use and service criticality increased.", "با افزایش استفاده و حساسیت خدمت، مقیاس‌پذیری را بخشی از تداوم کرد."],
        ["TAFTA, Bank Tejarat technology holding", "تفتا، هلدینگ فناوری بانک تجارت", "CEO", "مدیرعامل", "Feb 2022 to Nov 2024", "بهمن ۱۴۰۰ تا آبان ۱۴۰۳", "Managed a portfolio of infrastructure, payments, fintech and digital businesses.", "پرتفویی از زیرساخت، پرداخت، فین‌تک و کسب‌وکارهای دیجیتال را راهبری کرد."],
        ["Notra Investment Holding", "هلدینگ سرمایه‌گذاری نوترا", "Chief Executive Officer", "مدیرعامل", "current recorded role", "نقش فعلی ثبت‌شده", "Returns the continuity question to investment options, resilience and growth paths.", "پرسش تداوم را به گزینه‌های سرمایه‌گذاری، تاب‌آوری و مسیرهای رشد بازمی‌گرداند."]
      ],
      themes: [
        ["Technology Investment and Venture Building", "سرمایه‌گذاری فناوری و Venture Building"],
        ["Digital Banking and FinTech", "بانکداری دیجیتال و فین‌تک"],
        ["Telecommunications and Enterprise Business", "مخابرات و کسب‌وکار سازمانی"],
        ["Smart City", "شهر هوشمند"],
        ["Digital Transformation", "تحول دیجیتال"],
        ["Company Governance and Restructuring", "شرکت‌داری و بازسازی کسب‌وکار"],
        ["Scalable Architecture", "معماری مقیاس‌پذیر"],
        ["Organizational Learning and Continuity", "یادگیری و تداوم سازمانی"]
      ],
      education: [
        ["Recorded professional roles: CEO, Notra Investment Holding; Chair, Tourism IT; Board Member, TAFTA.", "سمت‌های حرفه‌ای ثبت‌شده: مدیرعامل هلدینگ سرمایه‌گذاری نوترا؛ رئیس هیئت‌مدیره Tourism IT؛ عضو هیئت‌مدیره تفتا."],
        ["Recorded industry role: Chair, Digital Banking Commission of the Tehran ICT Guild Organization.", "نقش صنفی ثبت‌شده: رئیس کمیسیون بانکداری دیجیتال نصر تهران."],
        ["Current-role concurrency, legal status, House role, public consent and release-date professional facts require editorial approval before indexing.", "هم‌زمانی و وضعیت حقوقی سمت‌های جاری، نقش فرد در خانه تکنوکرات‌ها، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار باید پیش از ایندکس‌شدن تأیید شوند."]
      ],
      relatedDomains: [
        ["Continuity Architecture", "معماری تداوم", "Grounded in distributed infrastructure, path diversity and architectural redesign during growth.", "برآمده از توزیع زیرساخت، تنوع مسیر و بازطراحی معماری هنگام رشد."],
        ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری", "Grounded in minimum service and customer trust through independent channels.", "برآمده از حفظ حداقل خدمت و اعتماد از طریق کانال مستقل."],
        ["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی", "Grounded in restructuring, portfolio management and focused business-line diversity.", "برآمده از اصلاح ساختار، مدیریت پرتفوی و تنوع هدفمند خطوط کسب‌وکار."],
        ["Continuity Governance", "حاکمیت تداوم", "Grounded in timely decisions, accountability and closure of projects without evidence.", "برآمده از تصمیم به‌موقع، پاسخ‌گویی و توقف پروژه‌های فاقد شواهد."],
        ["Continuity Maintenance", "نگهداشت تداوم", "Grounded in converting incidents and lessons into remediation and further testing.", "برآمده از تبدیل رخداد و درس‌آموخته به اصلاح و آزمون بعدی."]
      ]
    },
    {
      id: "sadegh-faramarzi",
      name: "Sadegh Faramarzi",
      faName: "صادق فرامرزی",
      role: "Technocratic Leader",
      faRole: "رهبر تکنوکرات",
      title: "Board Member · Iran Management and Business Consultants Federation",
      faTitle: "عضو هیئت‌مدیره · فدراسیون مدیریت و مشاوران کسب‌وکار ایران",
      subject: "Payments, digital banking and tested continuity capability",
      faSubject: "پرداخت، بانکداری دیجیتال و قابلیت آزموده‌شده تداوم",
      image: "Assets/sadegh-faramarzi.jpg",
      imageClass: "person-photo-sadegh",
      profileLayout: "monograph",
      profileNumber: "06",
      faProfileNumber: "۰۶",
      positioning: "Preparedness is not proven by documents or equipment. It has to perform under pressure.",
      faPositioning: "آمادگی با داشتن سند و تجهیزات اثبات نمی‌شود؛ باید در فشار واقعی قابلیت عمل‌کردن داشته باشد.",
      heroTags: [
        ["Payments", "پرداخت"],
        ["Digital banking", "بانکداری دیجیتال"],
        ["Business turnaround", "بازسازی کسب‌وکار"],
        ["PainTech", "PainTech"],
        ["Continuity testing", "آزمون تداوم"]
      ],
      quote: "Continuity is not reducible to technology. Services, people, processes, suppliers, economics and decisions have to be tested as one design.",
      faQuote: "تداوم به فناوری محدود نمی‌شود؛ خدمت، انسان، فرایند، تأمین‌کننده، اقتصاد و تصمیم باید در یک طراحی مشترک آزموده شوند.",
      bio: "Sadegh Faramarzi is a payments and digital-banking executive whose work connects crisis leadership, business transformation and practical continuity capability.",
      faBio: "صادق فرامرزی مدیری در صنعت پرداخت و بانکداری دیجیتال است که تجربه او مدیریت بحران، تحول کسب‌وکار و قابلیت عملی تداوم را به هم وصل می‌کند.",
      storyTitle: "From restoring terminals to restoring organizational capability",
      faStoryTitle: "از بازیابی پایانه‌ها تا بازیابی قابلیت سازمان",
      story: [
        ["Faramarzi's career developed inside payments and electronic services, where technology, field operations, merchant networks, settlement, support and customer trust are tightly connected. Work at Sayan Card, Fanava Card and Day Electronic Commerce gave him direct exposure to commercial development and PSP operations before larger chief executive roles.", "مسیر حرفه‌ای صادق فرامرزی در صنعت پرداخت و خدمات الکترونیکی شکل گرفت؛ صنعتی که در آن فناوری، عملیات میدانی، شبکه پذیرندگان، تسویه، پشتیبانی و اعتماد مشتری به هم متصل‌اند. فعالیت در سایان‌کارت، فن‌آوا کارت و تجارت الکترونیک دی، پیش از نقش‌های بزرگ‌تر مدیرعاملی، شناختی عملی از توسعه بازار و مدیریت عملیات PSP برای او ساخت."],
        ["His tenure as CEO of Iran Kish, from 2014 to 2019, became a defining part of that path. The organization needed to rebuild its network, revenue path, team and market confidence at the same time. Turnaround at this level is not completed through one project or one cost reduction.", "دوره مدیرعاملی ایران‌کیش از سال ۱۳۹۳ تا ۱۳۹۷ نقطه‌ای تعیین‌کننده در این مسیر بود. سازمان باید هم‌زمان شبکه، درآمد، تیم و اعتماد بازار خود را بازسازی می‌کرد. بازسازی در این سطح با یک پروژه یا کاهش هزینه تمام نمی‌شود."],
        ["During the same period, a broad failure affecting one Hypercom terminal model removed a significant part of the network from service at once. Recovery required technical diagnosis, device collection from many locations, component supply, repair, redistribution and intense coordination among technology, operations and support teams.", "در همین دوره، خرابی گسترده یک مدل پایانه Hypercom بخش قابل‌توجهی از شبکه را به‌طور هم‌زمان از مدار خارج کرد. بازیابی نیازمند تشخیص فنی، جمع‌آوری دستگاه‌ها از نقاط متعدد، تأمین قطعه، تعمیر، توزیع مجدد و هماهنگی فشرده میان تیم‌های فناوری، عملیات و پشتیبانی بود."],
        ["No document could prescribe every behavior required during that disruption. Employees had to cooperate beyond ordinary role boundaries, move information quickly and recreate operating capacity in the field. Human capital became part of the continuity infrastructure itself.", "هیچ سندی نمی‌توانست تمام رفتار لازم در آن بحران را از پیش بنویسد. کارکنان ناچار بودند فراتر از مرز معمول نقش‌های خود همکاری کنند، مسئله را به‌سرعت منتقل کنند و ظرفیت سازمان را در میدان بازسازی کنند. سرمایه انسانی در این تجربه بخشی از خود زیرساخت تداوم شد."],
        ["After Iran Kish, Faramarzi developed PainTech, an approach for the moment when a business leaves its growth narrative and encounters genuine pain in the model, team, economics or regulatory environment. It attempts to make failure, decline and crisis diagnosable.", "پس از ایران‌کیش، فرامرزی مفهوم PainTech را توسعه داد؛ رویکردی برای نقطه‌ای که کسب‌وکار از روایت رشد فاصله می‌گیرد و با درد واقعی مدل، تیم، مالی یا تنظیم‌گری روبه‌رو می‌شود. PainTech تلاش می‌کند شکست، افت یا بحران را به مسئله‌ای قابل‌تشخیص تبدیل کند."],
        ["Leadership of Faraboom moved him into open banking and collaboration among banks and technology companies. APIs and banking-as-a-service create innovation capacity, but they also move the service boundary beyond one organization.", "مدیریت فرابوم، فرامرزی را وارد بانکداری باز و همکاری میان بانک‌ها و شرکت‌های فناوری کرد. API و بانکداری به‌عنوان خدمت ظرفیت نوآوری می‌سازند، اما مرز خدمت را نیز از یک سازمان فراتر می‌برند."],
        ["His later work across banking technology holdings, insurance technology and professional advisory keeps the transformation question practical: data, operating models, governance, processes and economic outcomes need to move together.", "فعالیت بعدی او در هلدینگ‌های فناوری بانکی، فناوری بیمه و مشاوره تخصصی، مسئله تحول را عملی نگه می‌دارد: داده، مدل کسب‌وکار، حاکمیت، فرایند و نتیجه اقتصادی باید هم‌زمان حرکت کنند."],
        ["Faramarzi's relevance to House of Technocrats lies in the move from tools to capability. An organization may own backups, a second data center, procedures and vendor contracts, and still lack evidence that it can restore service under pressure.", "ارزش تجربه فرامرزی برای خانه تکنوکرات‌ها در همین انتقال از ابزار به قابلیت است. سازمان ممکن است Backup، دیتاسنتر دوم، دستورالعمل و قرارداد داشته باشد و همچنان شواهد کافی برای بازگرداندن خدمت در فشار واقعی نداشته باشد."]
      ],
      intersections: [
        {
          title: "Test capability instead of trusting the asset",
          faTitle: "آزمون قابلیت به‌جای اطمینان به دارایی",
          body: "Backups, secondary sites and recovery documents do not prove restoration capacity. Restore, data integrity, team access, transfer time and rollback need practical testing.",
          faBody: "وجود Backup، سایت پشتیبان یا سند بازیابی، توان بازگشت را اثبات نمی‌کند. Restore، صحت داده، دسترسی تیم، زمان انتقال و Rollback باید در عمل آزموده شوند.",
          domains: [["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"], ["Recovery and Restoration Services", "خدمات بازیابی و بازگردانی"]]
        },
        {
          title: "Treat human capital as response infrastructure",
          faTitle: "سرمایه انسانی به‌عنوان زیرساخت پاسخ",
          body: "People execute the crisis plan in conditions outside normal job descriptions. Trust, dignity, knowledge and cooperation need to exist before disruption.",
          faBody: "برنامه بحران را انسان‌هایی اجرا می‌کنند که ممکن است با موقعیتی خارج از شرح شغل خود روبه‌رو شوند. اعتماد، کرامت، دانش و همکاری باید پیش از بحران ساخته شوند.",
          domains: [["Continuity Governance", "حاکمیت تداوم"]]
        },
        {
          title: "Convert pain and failure into usable knowledge",
          faTitle: "تبدیل درد و شکست به دانش قابل‌استفاده",
          body: "An incident that is only narrated keeps the conditions for recurrence. Lessons need ownership, remediation timing, review and retesting.",
          faBody: "رخداد یا شکست اگر فقط روایت شود، احتمال تکرار خود را حفظ می‌کند. درس‌آموخته باید مالک، اقدام اصلاحی، زمان بازبینی و آزمون مجدد داشته باشد.",
          domains: [["Continuity Maintenance", "نگهداشت تداوم"], ["Risk Sensing, Threat Intelligence and Early Warning", "تشخیص ریسک، اطلاعات تهدید و هشدار زودهنگام"]]
        },
        {
          title: "Outsource delivery without outsourcing accountability",
          faTitle: "برون‌سپاری بدون واگذاری پاسخ‌گویی",
          body: "Collaboration with PSPs, banks, API platforms and technology suppliers may place part of the service outside the organization. It does not transfer responsibility for the outcome.",
          faBody: "همکاری با PSP، بانک، پلتفرم API یا تأمین‌کننده فناوری می‌تواند بخشی از خدمت را خارج از سازمان قرار دهد، اما مسئولیت نتیجه را منتقل نمی‌کند.",
          domains: [["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا"], ["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و SLA"]]
        }
      ],
      experience: [
        ["Sayan Card, Fanava Card and Day Electronic Commerce", "سایان‌کارت، فن‌آوا کارت و تجارت الکترونیک دی", "Payments and PSP operations", "عملیات پرداخت و PSP", "early career", "اوایل مسیر", "Built direct exposure to market development, merchant networks and operational service dependencies.", "شناخت عملی از توسعه بازار، شبکه پذیرندگان و وابستگی‌های عملیاتی خدمت ساخت."],
        ["Iran Kish", "ایران‌کیش", "Chief Executive Officer", "مدیرعامل", "2014 to 2019", "۱۳۹۳ تا ۱۳۹۷", "Led turnaround under financial and operating pressure while rebuilding revenue, network, team and confidence.", "بازسازی کسب‌وکار را زیر فشار مالی و عملیاتی و هم‌زمان با بازسازی درآمد، شبکه، تیم و اعتماد بازار راهبری کرد."],
        ["Hypercom terminal-network restoration", "بازیابی شبکه پایانه‌های Hypercom", "Operational crisis leadership", "راهبری بحران عملیاتی", "Iran Kish period", "دوره ایران‌کیش", "Managed a shared failure mode through diagnosis, repair, redistribution and cross-team coordination.", "یک Failure Mode مشترک را با تشخیص، تعمیر، توزیع مجدد و هماهنگی چندتیمی مدیریت کرد."],
        ["PainTech", "PainTech", "Failure-learning method", "روش یادگیری از شکست", "after Iran Kish", "پس از ایران‌کیش", "Turned decline, crisis and pain into diagnosable management input.", "افت، بحران و درد کسب‌وکار را به ورودی قابل‌تشخیص مدیریتی تبدیل کرد."],
        ["Faraboom", "فرابوم", "Open banking leadership", "راهبری بانکداری باز", "open banking phase", "دوره بانکداری باز", "Connected APIs, banking-as-a-service and partner dependency to customer outcomes.", "API، بانکداری به‌عنوان خدمت و وابستگی شریک را به نتیجه مشتری متصل کرد."],
        ["Banking technology and insurance technology", "فناوری بانکی و فناوری بیمه", "Technology holding and transformation work", "هلدینگ فناوری و تحول", "recent career", "سال‌های اخیر", "Placed data, governance, operating model and economic outcome inside one transformation question.", "داده، حاکمیت، مدل عملیاتی و نتیجه اقتصادی را در یک پرسش تحول کنار هم قرار داد."],
        ["Iran Management and Business Consultants Federation", "فدراسیون مدیریت و مشاوران کسب‌وکار ایران", "Board Member", "عضو هیئت‌مدیره", "current recorded role", "نقش فعلی ثبت‌شده", "Carries crisis, transformation and continuity experience into professional advisory practice.", "تجربه بحران، تحول و تداوم را وارد حوزه مشاوره حرفه‌ای می‌کند."]
      ],
      themes: [
        ["Payments and PSP Operations", "صنعت پرداخت و عملیات PSP"],
        ["Digital Banking and Open Banking", "بانکداری دیجیتال و بانکداری باز"],
        ["Business Turnaround", "بازسازی کسب‌وکار"],
        ["Crisis Leadership", "مدیریت بحران"],
        ["PainTech and Failure Learning", "PainTech و یادگیری از شکست"],
        ["Digital Transformation", "تحول دیجیتال"],
        ["Insurance Technology and Data", "فناوری بیمه و داده"],
        ["Regulation and Sandboxes", "تنظیم‌گری و Sandbox"],
        ["Human Capital and Continuity", "سرمایه انسانی و تداوم"]
      ],
      education: [
        ["Recorded professional role: Board Member, Iran Management and Business Consultants Federation.", "نقش حرفه‌ای ثبت‌شده: عضو هیئت‌مدیره فدراسیون مدیریت و مشاوران کسب‌وکار ایران."],
        ["Current field of work: advisory and professional activity across payments, digital banking, business transformation and continuity.", "حوزه فعالیت جاری: مشاوره و فعالیت تخصصی در پرداخت، بانکداری دیجیتال، تحول کسب‌وکار و تداوم."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه تکنوکرات‌ها، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار باید پیش از ایندکس‌شدن تأیید شوند."]
      ],
      relatedDomains: [
        ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم", "Grounded in practical testing of restore, rollback, data and team response.", "برآمده از آزمون عملی Restore، Rollback، داده و عملکرد تیم."],
        ["Recovery and Restoration Services", "خدمات بازیابی و بازگردانی", "Grounded in large-scale equipment restoration and controlled service return.", "برآمده از تجربه بازیابی گسترده تجهیزات و بازگشت کنترل‌شده خدمت."],
        ["Continuity Governance", "حاکمیت تداوم", "Grounded in decision ownership, people, succession and internal knowledge.", "برآمده از مالکیت تصمیم، سرمایه انسانی، جانشینی و دانش داخلی."],
        ["Continuity Maintenance", "نگهداشت تداوم", "Grounded in converting incidents and failure into remediation and further testing.", "برآمده از تبدیل بحران و شکست به اقدام اصلاحی و آزمون بعدی."],
        ["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا", "Grounded in interdependence among banks, PSPs, API platforms and suppliers.", "برآمده از وابستگی متقابل بانک‌ها، PSPها، پلتفرم‌های API و تأمین‌کنندگان."]
      ]
    },
    {
      id: "sadra-babaei",
      name: "Sadra Babaei",
      faName: "صدرا بابایی",
      role: "Technocratic Expert",
      faRole: "متخصص تکنوکرات",
      title: "Digital Economy, Innovation and Digital Transformation Advisor",
      faTitle: "مشاور اقتصاد دیجیتال، نوآوری و تحول دیجیتال",
      subject: "Innovation, fintech and customer-facing continuity",
      faSubject: "نوآوری، فین‌تک و تداوم خدمات روبه‌مشتری",
      image: "Assets/sadra-babaei.jpg",
      imageClass: "person-photo-sadra",
      profileLayout: "monograph",
      profileNumber: "07",
      faProfileNumber: "۰۷",
      positioning: "Innovation earns managerial value when it can preserve a path to service under disruption.",
      faPositioning: "نوآوری وقتی ارزش مدیریتی پیدا می‌کند که در شرایط اختلال نیز راهی برای ادامه خدمت بسازد.",
      heroTags: [
        ["Innovation", "نوآوری"],
        ["Digital transformation", "تحول دیجیتال"],
        ["Banking and fintech", "بانکداری و فین‌تک"],
        ["Artificial intelligence", "هوش مصنوعی"],
        ["Crisis communication", "ارتباطات بحران"]
      ],
      quote: "Technology is not the objective. It is part of the organization's capacity to decide and continue.",
      faQuote: "فناوری هدف نیست؛ بخشی از ظرفیت سازمان برای تصمیم‌گرفتن و ادامه‌دادن است.",
      bio: "Sadra Babaei is a technology-rooted executive whose work spans software, financial markets, banking and organizational innovation.",
      faBio: "صدرا بابایی مدیری با ریشه فنی و تجربه در مرز نرم‌افزار، بازارهای مالی، بانکداری و نوآوری سازمانی است.",
      storyTitle: "From emerging technology to organizational capability",
      faStoryTitle: "از فناوری نوظهور تا قابلیت واقعی سازمان",
      story: [
        ["Babaei began in software development. Before working with innovation at the level of strategy, investment or ecosystems, he encountered the practical limits of building products. Artificial intelligence, capital markets and banking then widened his frame from technology alone to products, customers, risk and business models.", "صدرا بابایی فعالیت حرفه‌ای خود را از توسعه نرم‌افزار آغاز کرد. او پیش از آنکه نوآوری را در سطح راهبرد، اکوسیستم یا سرمایه‌گذاری دنبال کند، با منطق ساخت محصول و محدودیت‌های اجرا روبه‌رو شده بود. ورود به هوش مصنوعی، بازار سرمایه و سپس بانکداری، دامنه این تجربه را از فناوری صرف به مسئله محصول، مشتری، ریسک و مدل کسب‌وکار گسترش داد."],
        ["Financial services placed that experience in an environment where trust and continuous access are part of the product itself. A disruption is not only a failed system; it may prevent a customer from reaching funds, using credit or purchasing an essential item.", "تجربه او در بازارهای مالی و صنعت بانکداری، فناوری را به محیطی متصل کرد که اعتماد و دسترسی مداوم، بخشی از خود محصول‌اند. اختلال فقط به معنای ازکارافتادن یک سامانه نیست؛ ممکن است مشتری نتواند به دارایی، اعتبار یا امکان خرید ضروری دسترسی پیدا کند."],
        ["His subsequent work expanded into management, business consulting, digital transformation and startup collaboration. The question was no longer which technology to select, but how to create a manageable relationship between real organizational capability, market speed and innovative companies.", "بابایی در ادامه مسیر به نقش‌های مدیریتی، مشاوره کسب‌وکار، تحول دیجیتال و همکاری با استارتاپ‌ها وارد شد. مسئله اصلی دیگر انتخاب یک فناوری نبود؛ باید میان توان واقعی سازمان، سرعت تغییر بازار و ظرفیت شرکت‌های نوآور رابطه‌ای قابل‌اداره شکل می‌گرفت."],
        ["One defining chapter was his leadership of Omidino Innovation Factory within Bank Sepah's ecosystem. Its work across AI, blockchain, digital assets and financial technology was not merely technology scanning. The operating question was whether conversations and events could become training, experiments, partnership opportunities and usable industry capability.", "یکی از مهم‌ترین فصل‌های این مسیر، مدیریت کارخانه هوشمندسازی و نوآوری امیدینو در اکوسیستم بانک سپه بود. فعالیت در حوزه‌هایی مانند هوش مصنوعی، بلاکچین، رمزارز و فناوری مالی، صرفاً رصد فناوری‌های نوظهور نبود؛ مسئله این بود که چگونه گفت‌وگو و رویداد به آموزش، آزمایش، فرصت همکاری و در نهایت قابلیت قابل‌استفاده برای صنعت تبدیل شود."],
        ["Disruption makes that distinction sharper. An organization may possess a continuity document, backup infrastructure and a contact list, yet remain unable to identify the service that must survive the first hours or the person authorized to change it.", "این نگاه در مواجهه با بحران معنای روشن‌تری پیدا می‌کند. یک سازمان ممکن است سند تداوم، زیرساخت پشتیبان و فهرست تماس داشته باشد، اما نداند در ساعات نخست چه خدمتی باید حفظ شود و چه کسی اختیار تغییر دارد."],
        ["A recorded experience involving a credit service during disruption illustrates the same logic. While parts of the banking transaction environment were constrained, a parallel credit path preserved access to some essential purchases.", "تجربه ثبت‌شده او از یک خدمت اعتباری در دوره اختلال، نمونه‌ای از همین منطق است. وقتی بخشی از تراکنش‌های بانکی با محدودیت روبه‌رو بود، وجود یک مسیر موازی اعتباری امکان حفظ بخشی از خریدهای ضروری را فراهم می‌کرد."],
        ["In this frame, a crisis tests more than technology. It tests trust. Customers need to know what happened, what remains available and what the organization is doing next.", "در این چارچوب، بحران فقط آزمون فناوری نیست؛ آزمون اعتماد است. مشتری باید بداند چه اتفاقی افتاده، چه چیزی همچنان در دسترس است و سازمان چه اقدامی انجام می‌دهد."],
        ["Babaei's relevance to House of Technocrats lies in connecting innovation with preparedness. Emerging technology matters when it solves a real problem, exposes the dependency it introduces and produces an outcome that remains defensible under pressure.", "ارزش تجربه بابایی برای خانه تکنوکرات‌ها در پیوند دادن نوآوری با آمادگی سازمانی است. فناوری نوظهور زمانی اهمیت دارد که مسئله‌ای واقعی را حل کند، وابستگی تازه را آشکار سازد و نتیجه آن در شرایط فشار قابل‌دفاع باشد."]
      ],
      intersections: [
        {
          title: "Assess capability before writing the plan",
          faTitle: "سنجش قابلیت پیش از نوشتن برنامه",
          body: "A continuity plan is credible only when it reflects what the organization can actually do. Scenarios and exercises expose the distance between managerial confidence and operating capability.",
          faBody: "برنامه تداوم زمانی قابل‌اتکا است که بر شناخت توان واقعی سازمان بنا شود. سناریو و مانور، فاصله میان تصور مدیریتی و قابلیت واقعی را آشکار می‌کنند.",
          domains: [["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم"]]
        },
        {
          title: "Define the minimum acceptable customer service",
          faTitle: "حداقل خدمت قابل‌قبول برای مشتری",
          body: "During a broad disruption, restoring every capability at once may be impossible. The organization must identify which essential need will be preserved, at what service level and through which alternative channel.",
          faBody: "در اختلال گسترده، بازگرداندن همه قابلیت‌ها به‌صورت هم‌زمان ممکن نیست. سازمان باید بداند کدام نیاز حیاتی را با چه سطحی از خدمت و از چه کانال جایگزینی حفظ می‌کند.",
          domains: [["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری"]]
        },
        {
          title: "Treat crisis communication as part of the service",
          faTitle: "ارتباطات بحران به‌عنوان بخشی از خدمت",
          body: "Silence or inconsistent messages can turn a technical interruption into a trust crisis. The spokesperson, timing, channel and message should be defined and exercised in advance.",
          faBody: "اختلال فنی می‌تواند با سکوت یا پیام‌های متناقض به بحران اعتماد تبدیل شود. سخنگو، زمان، کانال و محتوای پیام باید پیشاپیش مشخص و تمرین شوند.",
          domains: [["Continuity Governance", "حاکمیت تداوم"], ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری"]]
        },
        {
          title: "Use controlled innovation to reduce dependency",
          faTitle: "نوآوری کنترل‌شده برای کاهش وابستگی",
          body: "A staged model of bounded experiments, security controls, explicit service levels and progressive commitment creates room to learn while keeping third-party exposure manageable.",
          faBody: "آزمایش محدود، کنترل امنیت، تعریف سطح خدمت و توسعه تدریجی، امکان یادگیری می‌سازد و هم‌زمان وابستگی طرف ثالث را قابل‌مدیریت نگه می‌دارد.",
          domains: [["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا"], ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال"]]
        }
      ],
      experience: [
        ["Software development", "توسعه نرم‌افزار", "Technical foundation", "پایه فنی", "early career", "اوایل مسیر", "Built practical understanding of product construction and execution limits.", "فهم عملی از ساخت محصول و محدودیت‌های اجرا ساخت."],
        ["Artificial intelligence and capital markets", "هوش مصنوعی و بازار سرمایه", "Emerging technology and financial context", "فناوری نوظهور و زمینه مالی", "professional expansion", "گسترش مسیر حرفه‌ای", "Widened the frame from technology alone to products, customers, risk and business models.", "دامنه تجربه را از فناوری صرف به محصول، مشتری، ریسک و مدل کسب‌وکار گسترش داد."],
        ["Banking and fintech collaboration", "همکاری بانک و فین‌تک", "Ecosystem design", "طراحی اکوسیستم", "banking phase", "دوره بانکی", "Connected startups, banks and staged commitments without hiding dependency.", "استارتاپ، بانک و تعهد مرحله‌ای را بدون پنهان‌کردن وابستگی به هم متصل کرد."],
        ["Omidino Innovation Factory", "کارخانه هوشمندسازی و نوآوری امیدینو", "Former CEO", "مدیرعامل سابق", "notable recent role", "سمت شاخص اخیر", "Turned conversations and events into training, experiments, partnerships and usable industry capability.", "گفت‌وگو و رویداد را به آموزش، آزمایش، همکاری و قابلیت قابل‌استفاده برای صنعت تبدیل کرد."],
        ["Credit service during disruption", "خدمت اعتباری در دوره اختلال", "Parallel service path", "مسیر موازی خدمت", "recorded experience", "تجربه ثبت‌شده", "Showed how innovation can preserve essential customer access when ordinary transaction paths are constrained.", "نشان داد نوآوری چگونه می‌تواند هنگام محدودشدن مسیرهای عادی تراکنش، دسترسی ضروری مشتری را حفظ کند."],
        ["Digital economy advisory", "مشاوره اقتصاد دیجیتال", "Innovation and transformation advisor", "مشاور نوآوری و تحول", "current recorded title", "عنوان ثبت‌شده جاری", "Keeps emerging technology tied to readiness, service, trust and defensible outcomes.", "فناوری نوظهور را به آمادگی، خدمت، اعتماد و نتیجه قابل‌دفاع متصل نگه می‌دارد."]
      ],
      themes: [
        ["Innovation and Digital Transformation", "نوآوری و تحول دیجیتال"],
        ["Banking and FinTech", "بانکداری و فین‌تک"],
        ["Artificial Intelligence", "هوش مصنوعی"],
        ["Blockchain and Digital Assets", "بلاکچین و دارایی‌های دیجیتال"],
        ["Ecosystem Design", "طراحی اکوسیستم"],
        ["Crisis Management", "مدیریت بحران"],
        ["Service Continuity", "تداوم خدمت"],
        ["Trust and Crisis Communication", "اعتماد و ارتباطات بحران"]
      ],
      education: [
        ["Recorded professional title: Digital Economy, Innovation and Digital Transformation Advisor.", "عنوان حرفه‌ای ثبت‌شده: فعال و مشاور اقتصاد دیجیتال، نوآوری و تحول دیجیتال."],
        ["Notable recent role: Former CEO, Omidino Innovation Factory.", "سمت شاخص اخیر: مدیرعامل سابق کارخانه هوشمندسازی و نوآوری امیدینو."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه تکنوکرات‌ها، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار باید پیش از ایندکس‌شدن تأیید شوند."]
      ],
      relatedDomains: [
        ["Proactive Continuity Evaluation", "ارزیابی پیش‌دستانه تداوم", "Grounded in scenarios, exercises and capability assessment before disruption.", "برآمده از سناریوسازی، مانور و سنجش قابلیت واقعی پیش از بحران."],
        ["Customer-Facing Service Continuity", "تداوم خدمات روبه‌مشتری", "Grounded in minimum-service definition and alternatives for essential customer needs.", "برآمده از تعریف حداقل خدمت و مسیر جایگزین برای نیاز حیاتی مشتری."],
        ["Continuity Governance", "حاکمیت تداوم", "Grounded in delegated authority, early decisions and designed crisis communication.", "برآمده از تفویض اختیار، کیفیت تصمیم نخست و طراحی ارتباطات بحران."],
        ["Third-Party and Partner Continuity", "تداوم طرف‌های ثالث و شرکا", "Grounded in controlled collaboration among banks, startups, universities and specialist suppliers.", "برآمده از همکاری کنترل‌شده بانک، استارتاپ، دانشگاه و تأمین‌کنندگان تخصصی."],
        ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال", "Grounded in parallel service paths and reduced common points of failure.", "برآمده از ایجاد مسیرهای موازی و کاهش نقاط شکست مشترک."]
      ]
    },
    {
      id: "meysam-rajabi",
      name: "Meysam Rajabi",
      faName: "میثم رجبی",
      role: "Technocratic Thinker",
      faRole: "اندیشمند تکنوکرات",
      title: "CEO · Radin",
      faTitle: "مدیرعامل · رادین",
      subject: "Business focus, financial continuity and technology venture building",
      faSubject: "تمرکز کسب‌وکار، تداوم مالی و توسعه کسب‌وکارهای فناوری",
      image: "Assets/meysam-rajabi.jpg",
      imageClass: "person-photo-meysam",
      profileLayout: "monograph",
      profileNumber: "08",
      faProfileNumber: "۰۸",
      positioning: "Continuity does not begin by preserving every activity. It begins by identifying the core that still creates value.",
      faPositioning: "تداوم از حفظ همه فعالیت‌ها آغاز نمی‌شود؛ از تشخیص هسته‌ای آغاز می‌شود که هنوز ارزش واقعی می‌سازد.",
      heroTags: [
        ["Business turnaround", "بازسازی کسب‌وکار"],
        ["Financial continuity", "تداوم مالی"],
        ["Product strategy", "راهبرد محصول"],
        ["Portfolio management", "مدیریت پرتفوی"],
        ["Cybersecurity", "امنیت سایبری"]
      ],
      quote: "What has to survive is the capacity to create value and convert it into an economic flow that can continue.",
      faQuote: "آنچه باید باقی بماند، ظرفیت خلق ارزش و امکان تبدیل آن به جریان اقتصادی قابل‌ادامه است.",
      bio: "Meysam Rajabi is a technology entrepreneur and business leader whose work sits at the boundary between strategy and execution.",
      faBio: "میثم رجبی مدیر و کارآفرینی در مرز راهبرد کسب‌وکار و فناوری است.",
      storyTitle: "When focus becomes a continuity decision",
      faStoryTitle: "وقتی تمرکز، خود تصمیم تداوم است",
      story: [
        ["Rajabi's career did not begin as a straight line. Capital markets, aircraft maintenance, planning work in the automotive industry and business development in oil and gas each exposed a different part of the relationship between evidence, economics and management judgment.", "مسیر حرفه‌ای میثم رجبی با یک خط مستقیم آغاز نشد. تجربه بازار سرمایه، صنعت تعمیر و نگهداری هواپیما، برنامه‌ریزی در صنعت خودرو و سپس توسعه و پروپوزال در نفت و گاز، هرکدام بخشی از رابطه میان داده، منطق اقتصادی و تصمیم مدیریتی را به او نشان دادند."],
        ["He entered information technology in 2012 through Fakhim, part of the Hossin ecosystem. Banking and payment technology connected the company's commercial choices to infrastructure where trust, security and execution discipline mattered.", "ورود جدی او به فناوری اطلاعات در سال ۱۳۹۱ و از مسیر شرکت فخیم در اکوسیستم حصین رخ داد. محیط فناوری بانکی و پرداخت، کسب‌وکار را به زیرساختی متصل می‌کرد که اعتماد، امنیت و قابلیت اجرا در آن تعیین‌کننده‌اند."],
        ["At Gooshishop, feature expansion had moved the product away from its core value and market. Redesign did not require more functionality. It required subtraction, simplification and a return to the customer problem the product could solve well.", "در گوشی‌شاپ، توسعه بیش از حد قابلیت‌ها محصول را از هسته ارزش و بازار دور کرده بود. بازطراحی محصول مستلزم افزودن امکانات بیشتر نبود؛ نیازمند حذف، ساده‌سازی و بازگشت به مسئله‌ای بود که مشتری واقعاً برای حل آن مراجعه می‌کرد."],
        ["Rajabi later participated in building and developing several businesses across the Hossin ecosystem. A portfolio is not merely a collection of companies. It is a set of capital choices, and each activity has to show the value it creates and the resources it needs to continue.", "رجبی در ادامه در ایجاد و توسعه چند کسب‌وکار در اکوسیستم حصین مشارکت کرد. پرتفوی فقط فهرستی از شرکت‌ها نیست؛ مجموعه‌ای از انتخاب‌های سرمایه‌ای است و هر فعالیت باید نشان دهد چه ارزشی می‌سازد و با چه منبعی ادامه می‌دهد."],
        ["Since 2019, Rajabi has led Radin. The company emerged from the redesign of established technology businesses and has worked across information security, banking and payment solutions, telecommunications and IoT, blockchain and artificial intelligence.", "از سال ۱۳۹۸، رجبی مدیرعامل رادین است؛ شرکتی که از بازطراحی بخشی از کسب‌وکارهای فناوری موجود شکل گرفت و در حوزه‌هایی مانند امنیت فناوری اطلاعات، راهکارهای بانکی و پرداخت، تلکام و اینترنت اشیا، بلاکچین و هوش مصنوعی فعالیت کرده است."],
        ["Within this logic, closure or consolidation is not automatically failure. A project may have absorbed money and time, but prior investment is not a sufficient reason to continue it when the market, economics or organizational capability no longer fit.", "در این منطق، توقف یا ادغام الزاماً نشانه شکست نیست. پروژه‌ای ممکن است سرمایه و زمان زیادی مصرف کرده باشد، اما گذشته برای ادامه آن دلیل کافی نمی‌سازد، وقتی بازار، اقتصاد یا قابلیت سازمانی دیگر با آن سازگار نیست."],
        ["Economic instability raises the weight of that choice. In contraction, liquidity, working capital, collection and the ability to reach the next financial threshold become dominant.", "اقتصاد ناپایدار وزن این انتخاب را بیشتر می‌کند. در دوره انقباض، نقدشوندگی، سرمایه در گردش، وصول فروش و امکان رسیدن به نقطه مالی بعدی مقدم می‌شوند."],
        ["Rajabi's relevance to House of Technocrats lies in the clarity of this position: continuity should not be confused with preserving the organization's appearance. Focus, liquidity, committed people and the willingness to stop are defensive capabilities.", "ارزش تجربه او برای خانه تکنوکرات‌ها در صراحت این منطق قرار دارد: تداوم را نباید با حفظ ظاهر سازمان اشتباه گرفت. تمرکز، نقدشوندگی، تیم متعهد و شجاعت توقف، قابلیت‌های دفاعی یک کسب‌وکارند."]
      ],
      intersections: [
        {
          title: "Value creation as the starting point",
          faTitle: "خلق ارزش به‌عنوان نقطه شروع تداوم",
          body: "Capital and institutional history cannot create endurance when the value proposition has expired. Management must distinguish the value-bearing core from decorative features and unsuitable markets.",
          faBody: "منابع مالی یا سابقه طولانی، بدون ارزش پیشنهادی زنده، دوام ایجاد نمی‌کنند. مدیر باید هسته ارزش را از قابلیت‌های تزئینی و بازارهای نامتناسب جدا کند.",
          domains: [["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی"]]
        },
        {
          title: "Liquidity and the next reachable threshold",
          faTitle: "نقدشوندگی و رسیدن به نقطه بعدی",
          body: "In a contracting market, reported growth cannot substitute for cash flow. Runway must connect to a defined destination: sales, financing, profitability or exit.",
          faBody: "در بازار منقبض، رشد اسمی نمی‌تواند جایگزین جریان نقد شود. Runway باید به یک مقصد مشخص وصل باشد: فروش، تأمین مالی، سودآوری یا تصمیم خروج.",
          domains: [["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی"]]
        },
        {
          title: "Stop deliberately to protect the core",
          faTitle: "توقف آگاهانه برای حفاظت از هسته",
          body: "Money already spent does not make a project necessary for the future. Controlled removal can reduce complexity and release capacity for the core business.",
          faBody: "هزینه‌ای که قبلاً صرف شده، یک پروژه را برای آینده ضروری نمی‌کند. حذف کنترل‌شده می‌تواند پیچیدگی را کم کند و ظرفیت را برای کسب‌وکار اصلی آزاد کند.",
          domains: [["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال"]]
        },
        {
          title: "Match the model to organizational capability",
          faTitle: "سازگاری مدل با ژنتیک سازمان",
          body: "Moving among B2B, B2C and B2G reshapes product, sales, contracts, support and culture. A pivot supports continuity only when the organization can operate the new model.",
          faBody: "جابجایی میان B2B، B2C و B2G فقط تغییر مشتری نیست؛ محصول، فروش، قرارداد، پشتیبانی و فرهنگ را تغییر می‌دهد. Pivot زمانی به تداوم کمک می‌کند که سازمان بتواند مدل جدید را اجرا کند.",
          domains: [["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی"], ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال"]]
        }
      ],
      experience: [
        ["Capital markets and engineering industries", "بازار سرمایه و صنایع مهندسی", "Early professional exposure", "تجربه حرفه‌ای اولیه", "early career", "اوایل مسیر", "Connected evidence, economics and management judgment across different operating contexts.", "رابطه داده، منطق اقتصادی و تصمیم مدیریتی را در چند زمینه عملیاتی متفاوت دید."],
        ["Fakhim / Hossin ecosystem", "فخیم / اکوسیستم حصین", "Banking and payment technology", "فناوری بانکی و پرداخت", "from 2012", "از ۱۳۹۱", "Linked commercial choices to trust, security and execution discipline.", "انتخاب‌های تجاری را به اعتماد، امنیت و انضباط اجرا متصل کرد."],
        ["Gooshishop", "گوشی‌شاپ", "Product redesign and simplification", "بازطراحی و ساده‌سازی محصول", "product focus phase", "دوره تمرکز محصول", "Showed how subtraction and simplification can preserve time and capital.", "نشان داد حذف و ساده‌سازی چگونه می‌تواند زمان و سرمایه را حفظ کند."],
        ["Navid and digital ventures", "نوید و کسب‌وکارهای دیجیتال", "Venture building and separation", "ساخت و جداسازی کسب‌وکار", "Hossin ecosystem", "اکوسیستم حصین", "Turned portfolio work into a discipline of capital choices and capability fit.", "کار پرتفوی را به انضباط انتخاب سرمایه و سازگاری با قابلیت تبدیل کرد."],
        ["Radin", "رادین", "Chief Executive Officer", "مدیرعامل", "from 2019", "از ۱۳۹۸", "Leads work across security, banking and payment solutions, telecom, IoT, blockchain and AI.", "فعالیت در امنیت، راهکارهای بانکی و پرداخت، تلکام، اینترنت اشیا، بلاکچین و هوش مصنوعی را راهبری می‌کند."],
        ["Radin holding transition", "حرکت رادین به ساختار هلدینگی", "Portfolio restructuring", "بازسازی پرتفوی", "current phase", "دوره جاری", "Made independence, accountability and economic direction more explicit for specialist activities.", "استقلال، پاسخ‌گویی و جهت اقتصادی را برای فعالیت‌های تخصصی روشن‌تر کرد."]
      ],
      themes: [
        ["Business Strategy and Turnaround", "راهبرد و بازسازی کسب‌وکار"],
        ["Banking Technology and FinTech", "فناوری بانکی و فین‌تک"],
        ["Cybersecurity and RegTech", "امنیت و RegTech"],
        ["Product Strategy", "راهبرد محصول"],
        ["Portfolio Management", "مدیریت پرتفوی"],
        ["Venture Building and Spin-offs", "Venture Building و Spin-off"],
        ["Liquidity and Financial Continuity", "نقدشوندگی و تداوم مالی"],
        ["Technology Entrepreneurship", "کارآفرینی فناوری"]
      ],
      education: [
        ["Recorded professional role: CEO, Radin.", "سمت حرفه‌ای ثبت‌شده: مدیرعامل شرکت رادین."],
        ["House role, public consent and release-date professional facts require editorial approval before indexing.", "نقش فرد در خانه تکنوکرات‌ها، رضایت انتشار و اطلاعات حرفه‌ای در تاریخ انتشار باید پیش از ایندکس‌شدن تأیید شوند."]
      ],
      relatedDomains: [
        ["Financial Continuity / Economic Resilience", "تداوم مالی و تاب‌آوری اقتصادی", "Grounded in runway, working capital, sales flow and market selection.", "برآمده از مدیریت Runway، سرمایه در گردش، جریان فروش و انتخاب بازار."],
        ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار اختلال", "Grounded in scope reduction, business separation and containment of loss or complexity.", "برآمده از کوچک‌سازی دامنه، جداسازی فعالیت‌ها و محدودکردن سرایت زیان یا پیچیدگی."]
      ]
    }
  ];

  var alirezaProfile = {
    id: "alireza-bozorgmehri",
    name: "Alireza Bozorgmehri",
    faName: "علیرضا بزرگمهری",
    role: "Technocratic Thinker",
    faRole: "اندیشمند تکنوکرات",
    title: "Board Member, Iran Digital Transformation Association",
    faTitle: "عضو هیئت‌مدیره انجمن تحول دیجیتال ایران",
    subject: "Service architecture, ITSM and continuity governance",
    faSubject: "معماری سرویس، ITSM و حاکمیت تداوم",
    image: "Assets/alireza-bozorgmehri.jpg",
    imageClass: "person-photo-alireza",
    profileLayout: "monograph",
    profileNumber: "02",
    faProfileNumber: "۰۲",
    positioning: "A technocrat of service continuity, digital banking and governance.",
    faPositioning: "از سامانه به سرویس، از ابزار به حاکمیت، از رخداد به تداوم.",
    heroTags: [
      ["Service architecture", "معماری سرویس"],
      ["IT service management", "مدیریت خدمات فناوری"],
      ["Digital banking", "بانکداری دیجیتال"],
      ["Continuity governance", "حاکمیت تداوم"],
      ["API governance", "حاکمیت API"]
    ],
    quote: "Continuity, in that sense, is the quality of connection among decisions, information and the capacity to act.",
    faQuote: "تداوم در این معنا، کیفیت اتصال میان تصمیم، اطلاعات و امکان اقدام است.",
    intro: "Alireza Bozorgmehri works at the intersection of enterprise technology, digital banking and IT service management. His professional record moves from networks and enterprise systems to the harder questions behind dependable digital services: dependencies, governance, service ownership and the decisions required when operations are under pressure.",
    faIntro: "علیرضا بزرگمهری در مرز فناوری سازمانی، بانکداری دیجیتال و مدیریت خدمات فناوری کار کرده است؛ مسیری که از شبکه و سامانه‌های سازمانی آغاز می‌شود و به پرسش‌های دشوارترِ وابستگی سرویس، حاکمیت فناوری، تداوم عملیات و تصمیم‌گیری در محیط‌های دیجیتال می‌رسد.",
    stats: [
      ["1990s", "دهه ۱۳۷۰", "Enterprise technology", "فناوری سازمانی"],
      ["2005", "۱۳۸۴", "BCM focus", "تمرکز بر BCM"],
      ["4", "۴", "Related DBR domains", "حوزهٔ DBR مرتبط"],
      ["7", "۷", "Professional themes", "محور حرفه‌ای"]
    ],
    storyTitle: "From systems to the services they enable",
    faStoryTitle: "مسیری که از سامانه آغاز شد و به خدمت رسید",
    story: [
      ["Bozorgmehri’s career began in information technology and enterprise projects in the early 1990s. Early work in networks, infrastructure and project management exposed a point that organizations often discover late: technology is not a collection of assets sitting beside the business. It is part of the mechanism through which the business delivers service.", "مسیر حرفه‌ای علیرضا بزرگمهری از ابتدای دهه ۱۳۷۰ در فناوری اطلاعات و پروژه‌های سازمانی شکل گرفت. تجربه‌های نخستین او در شبکه، زیرساخت و مدیریت پروژه، به‌تدریج او را با مسئله‌ای آشنا کرد که در بسیاری از سازمان‌ها دیر دیده می‌شود: فناوری صرفاً مجموعه‌ای از تجهیزات و سامانه‌ها نیست؛ بخشی از سازوکار واقعی ارائه خدمت است."],
      ["Work on ERP, enterprise systems, Core Banking and banking technology deepened that perspective. The challenge in such environments is not simply to select or implement a solution. It is to understand the dependencies among data, infrastructure, software, contracts, operations and managerial responsibility; then to determine which service must be sustained or restored first when one of those dependencies fails.", "این نگاه، در ادامه با کار روی ERP، سامانه‌های سازمانی، Core Banking و پروژه‌های فناوری بانکی عمق بیشتری پیدا کرد. در چنین محیط‌هایی، مسئله فقط انتخاب یا استقرار یک راهکار نیست. باید دانست چه وابستگی‌هایی میان داده، زیرساخت، نرم‌افزار، قرارداد، عملیات و مسئولیت مدیریتی وجود دارد؛ و اگر یکی از آنها مختل شود، کدام خدمت، با چه اولویتی و در چه بازه‌ای باید حفظ یا بازگردانده شود."],
      ["Business Continuity Management has been an explicit part of his professional and educational work since around 2005, including BCM seminars and sustained attention to ITSM, ITIL, incident management, SLAs and service mapping. The record positions continuity as a business, technology and governance question, not as a recovery document to be opened after an incident.", "از حدود سال ۱۳۸۴، مدیریت تداوم کسب‌وکار نیز به یکی از محورهای صریح کار و آموزش او تبدیل شد. سابقه برگزاری سمینارهای BCM و تمرکز حرفه‌ای بر ITSM، ITIL، مدیریت رخداد، SLA و نقشه‌برداری سرویس نشان می‌دهد که تداوم را نه به‌عنوان یک فایل بازیابی پس از حادثه، بلکه به‌عنوان مسئله‌ای میان کسب‌وکار، فناوری و حاکمیت می‌بیند."],
      ["Banking and electronic payments make that distinction more concrete. Where a disruption directly affects operations, customers and trust, service management depends on ownership, escalation paths, service commitments, dependency architecture and decision rights.", "کار در بانکداری و پرداخت الکترونیکی، این مسئله را ملموس‌تر می‌کند. در خدماتی که توقف آنها مستقیماً بر عملیات، مشتری و اعتماد اثر می‌گذارد، کیفیت مدیریت سرویس به تعریف مالکیت، مسیر تشدید، تعهد خدمت، معماری وابستگی‌ها و اختیار تصمیم‌گیری گره می‌خورد."],
      ["Education and knowledge transfer carry the same practical question into a managerial setting: what must an organization be able to see before it can make a defensible decision? The question separates familiarity with a standard from the ability to run a service.", "آموزش و انتقال تجربه نیز همان پرسش عملی را به مخاطبان مدیریتی منتقل می‌کند: سازمان دقیقاً چه چیزی را باید ببیند تا بتواند درباره آن تصمیم بگیرد؟ این پرسش، فاصله میان دانستن یک استاندارد و توان اداره‌کردن یک خدمت را آشکار می‌کند."],
      ["In recent work, Bozorgmehri has focused on digital maturity, data governance, API governance, artificial intelligence and the move from ITSM toward Enterprise Service Management. The useful question is whether an organization can see, understand and act on an integrated view of the service.", "بزرگمهری در سال‌های اخیر بر بلوغ دیجیتال، حاکمیت داده، API Governance، هوش مصنوعی و حرکت از ITSM به Enterprise Service Management نیز تمرکز داشته است. مسئله، توان سازمان برای دیدن، فهمیدن و عمل‌کردن بر مبنای یک تصویر یکپارچه از خدمت است."]
    ],
    intersections: [
      {
        title: "Service visibility and dependency",
        faTitle: "دیدپذیری خدمت و وابستگی‌ها",
        body: "Seeing an asset is not the same as understanding a service. His focus on Service Maps, CMDB, incident management and information integration moves continuity beyond a tool inventory toward the relationship between components.",
        faBody: "مشاهده یک دارایی به‌تنهایی کافی نیست. تمرکز او بر Service Map، CMDB، مدیریت رخداد و یکپارچگی اطلاعات، تداوم را از سطح فهرست ابزار به سطح فهم رابطه میان اجزا منتقل می‌کند.",
        domains: [["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و SLA"], ["Risk Sensing", "حسگری ریسک"]]
      },
      {
        title: "Governance before tooling",
        faTitle: "حاکمیت پیش از خرید ابزار",
        body: "Software does not replace decisions, ownership or accountability. Sustaining a service requires clarity on the service owner, commitment at stake and authority to act during disruption.",
        faBody: "نرم‌افزار جای تصمیم، مالکیت و پاسخ‌گویی را نمی‌گیرد. حفظ خدمت نیازمند روشن بودن مالک سرویس، تعهد موجود و سطحی است که هنگام اختلال اختیار اقدام دارد.",
        domains: [["Continuity Governance", "حاکمیت تداوم"], ["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و SLA"]]
      },
      {
        title: "Architecture designed for service continuation",
        faTitle: "معماری برای ادامه‌دادن خدمت",
        body: "Experience in networks, infrastructure, ERP and Core Banking provides a practical basis for considering alternative paths, service dependencies and disruption scenarios.",
        faBody: "تجربه در شبکه، زیرساخت، ERP و بانکداری متمرکز، زمینه‌ای عملی برای توجه به مسیرهای جایگزین، وابستگی‌های سرویس و طراحی سناریوهای اختلال فراهم کرده است.",
        domains: [["Continuity Architecture", "معماری تداوم"], ["Service Architecture", "معماری سرویس"]]
      },
      {
        title: "From reaction to anticipation",
        faTitle: "از واکنش به پیش‌بینی",
        body: "In monitoring, operational data analysis and AI, the professional lens is to make signals understandable before they become a crisis. The value is not speed by itself; it is defensible judgment.",
        faBody: "در پایش، تحلیل داده‌های عملیاتی و هوش مصنوعی، لنز حرفه‌ای این است که نشانه‌ها پیش از تبدیل‌شدن به بحران قابل‌فهم شوند. ارزش این رویکرد فقط سرعت نیست؛ قضاوت قابل دفاع است.",
        domains: [["Continuity Smart Management", "مدیریت هوشمند تداوم"], ["Early Warning", "هشدار زودهنگام"]]
      }
    ],
    experience: [
      ["Pasargad Rayaneh", "پاسارگاد رایانه", "Chief Executive Officer and Chair of the Board", "مدیرعامل و رئیس هیئت‌مدیره", "from 1995", "از ۱۳۷۴", "Early formal management experience in enterprise technology and organizational projects.", "تجربه رسمی مدیریت شرکت و پروژه‌های فناوری سازمانی را در ابتدای مسیر شکل داد."],
      ["ERP and enterprise-systems projects", "پروژه‌های ERP و سیستم‌های سازمانی", "Project manager / adviser", "مدیر پروژه / مشاور", "late 1990s and early 2000s", "دهه ۱۳۷۰ و اوایل ۱۳۸۰", "Connected technology selection and implementation with real operational processes.", "تجربه انتخاب، استقرار و بهبود سامانه‌ها را با فرایندهای عملیاتی سازمان پیوند داد."],
      ["Banking and Core Banking", "صنعت بانکداری و Core Banking", "Project manager, adviser and practitioner", "مدیر پروژه، مشاور و فعال حرفه‌ای", "from about 2004", "از حدود ۱۳۸۳", "Built exposure to critical services, banking infrastructure, operations and service commitments.", "او را با خدمات حساس، زیرساخت بانکی، عملیات و تعهدات سرویس آشنا کرد."],
      ["Persia Fava Gostarsh", "پرشیا فاوا گسترش", "CEO, board member and vice chair in different periods", "مدیرعامل، عضو و نایب‌رئیس هیئت‌مدیره در دوره‌های مختلف", "dates require confirmation", "تاریخ دقیق نیازمند تأیید", "Brought networking, data security, ERP and Core Banking into a management context.", "قلمرو شبکه، امنیت، ERP و بانکداری متمرکز را در یک تجربه مدیریتی گرد آورد."],
      ["Digital-transformation committees and working groups", "کمیته‌ها و کارگروه‌های تحول دیجیتال", "Member / adviser in different periods", "عضو / مشاور در دوره‌های مختلف", "dates require confirmation", "تاریخ دقیق نیازمند تأیید", "Extended the focus from technology execution toward governance, digital maturity and institutional decision-making.", "نگاه او را از اجرای فناوری به سمت حکمرانی، بلوغ دیجیتال و تصمیم‌گیری نهادی توسعه داد."],
      ["Iran Digital Transformation Association", "انجمن تحول دیجیتال ایران", "Board Member", "عضو هیئت‌مدیره", "recorded current role", "سمت فعلی ثبت‌شده", "Places his professional work within public discussion on digital transformation and technology governance.", "نقش حرفه‌ای او را در گفت‌وگوی عمومی درباره تحول دیجیتال و حکمرانی فناوری نمایان می‌کند."]
    ],
    themes: [
      ["Digital Banking", "بانکداری دیجیتال"],
      ["IT Service Management", "مدیریت خدمات فناوری اطلاعات"],
      ["Business Continuity Management", "مدیریت تداوم کسب‌وکار"],
      ["Technology Governance", "حاکمیت فناوری"],
      ["Service Architecture and Dependencies", "معماری و وابستگی سرویس"],
      ["ERP and Enterprise Systems", "ERP و سامانه‌های سازمانی"],
      ["AI and data-informed operations", "هوش مصنوعی و عملیات داده‌محور"]
    ],
    education: [
      ["Master’s degree in Artificial Intelligence; institution, date and precise program title are not recorded in the supplied source.", "کارشناسی ارشد هوش مصنوعی؛ نام دانشگاه، سال و عنوان دقیق گرایش در منبع موجود ثبت نشده است."],
      ["Professional teaching and training in digital transformation, digital banking, ITSM, ERP, AI and Business Continuity Management.", "آموزش و تدریس حرفه‌ای در تحول دیجیتال، بانکداری دیجیتال، ITSM، ERP، هوش مصنوعی و مدیریت تداوم کسب‌وکار."]
    ],
    relatedDomains: [
      ["Continuity Governance", "حاکمیت تداوم", "Technology governance and digital transformation connect to continuity decision rights and accountability.", "پیوند تجربه او در حاکمیت فناوری و تحول دیجیتال با مسئولیت، اختیار و تصمیم‌های مربوط به تداوم."],
      ["Business Process Continuity / SLA", "تداوم فرایند کسب‌وکار و SLA", "Directly related to ITSM, service management, Service Maps and service commitments.", "ارتباط مستقیم با ITSM، مدیریت سرویس، Service Map و تعهدات خدمت."],
      ["Risk Sensing, Threat Intelligence and Early Warning", "حسگری ریسک، اطلاعات تهدید و هشدار زودهنگام", "Related to monitoring, operational data and an anticipatory management perspective.", "ارتباط با پایش، داده‌های عملیاتی و نگاه پیش‌بینی‌محور."],
      ["Service Architecture and Containment Engineering", "معماری سرویس و مهندسی مهار", "Related to service dependencies, infrastructure and disruption-scenario design.", "ارتباط با وابستگی سرویس، زیرساخت و طراحی سناریوهای اختلال."]
    ]
  };

  function selectedPersonProfile() {
    var id = new URLSearchParams(window.location.search).get("person") || peopleProfiles[0].id;
    if (id === alirezaProfile.id) return alirezaProfile;
    return peopleProfiles.find(function (person) { return person.id === id; }) || peopleProfiles[0];
  }

  function categoryLink(category) {
    return "category.html?category=" + encodeURIComponent(category.id);
  }

  function selectedRadarCategory() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("category") || radarCategories[0].id;
    return radarCategories.find(function (category) { return category.id === id; }) || radarCategories[0];
  }

  function patternSlug(pattern) {
    var href = pattern[2] || "";
    try {
      var params = new URL(href, window.location.href).searchParams;
      if (params.get("pattern")) return params.get("pattern");
    } catch (error) {
      // Fall back to the readable title when the stored href is a static legacy file.
    }
    return slugify(pattern[0]);
  }

  function patternLink(category, pattern) {
    return "pattern.html?category=" + encodeURIComponent(category.id) + "&pattern=" + encodeURIComponent(patternSlug(pattern));
  }

  function selectedRadarPattern() {
    var category = selectedRadarCategory();
    var requested = new URLSearchParams(window.location.search).get("pattern") || patternSlug(category.patterns[0]);
    var index = category.patterns.findIndex(function (pattern) { return patternSlug(pattern) === requested; });
    if (index < 0) index = 0;
    return { category: category, pattern: category.patterns[index], index: index, slug: patternSlug(category.patterns[index]) };
  }

  var radarCategories = [
      {
          "id": "continuity-architecture",
          "en": "Continuity Architecture",
          "fa": "معماری تداوم",
          "enDescription": "Architectures and infrastructure that prevent the failure of one component from taking down an entire service.",
          "faDescription": "معماری و زیرساخت‌هایی که اجازه می‌دهند اختلال یک جزء، کل سرویس را از کار نیندازد.",
          "shortEn": "Architecture for Continuity",
          "patterns": [
              [
                  "Modular Survivability Architecture",
                  "Modular Survivability Architecture",
                  "pattern.html?category=continuity-architecture&pattern=modular-survivability-architecture",
                  "01.1"
              ],
              [
                  "Path and Infrastructure Diversity",
                  "Path and Infrastructure Diversity",
                  "pattern.html?category=continuity-architecture&pattern=path-and-infrastructure-diversity",
                  "01.2"
              ]
          ]
      },
      {
          "id": "continuity-smart-management",
          "en": "Continuity Smart Management",
          "fa": "مدیریت هوشمند تداوم",
          "enDescription": "Using data, AI, AIOps, and simulation to improve detection, decision-making, and coordination during disruption.",
          "faDescription": "استفاده از داده، AI، AIOps و شبیه‌سازی برای تشخیص، تصمیم و هماهنگی بهتر در بحران.",
          "shortEn": "Smart Continuity Management",
          "patterns": [
              [
                  "AI/AIOps Continuity Orchestration",
                  "AI/AIOps Continuity Orchestration",
                  "pattern.html?category=continuity-smart-management&pattern=ai-aiops-continuity-orchestration",
                  "02.1"
              ],
              [
                  "Simulation and Digital Twin Decision Support",
                  "Simulation and Digital Twin Decision Support",
                  "pattern.html?category=continuity-smart-management&pattern=simulation-and-digital-twin-decision-support",
                  "02.2"
              ]
          ]
      },
      {
          "id": "continuity-governance",
          "en": "Continuity Governance",
          "fa": "حاکمیت تداوم",
          "enDescription": "Clear service ownership, accountability, and teams able to act quickly and independently during disruption.",
          "faDescription": "ساختار مسئولیت، مالکیت سرویس و تیم‌هایی که بتوانند در اختلال سریع و مستقل عمل کنند.",
          "shortEn": "Governance for Continuity",
          "patterns": [
              [
                  "Service-Owner Accountability Model",
                  "Service-Owner Accountability Model",
                  "pattern.html?category=continuity-governance&pattern=service-owner-accountability-model",
                  "03.1"
              ],
              [
                  "Small Autonomous Resilience Teams",
                  "Small Autonomous Resilience Teams",
                  "pattern.html?category=continuity-governance&pattern=small-autonomous-resilience-teams",
                  "03.2"
              ]
          ]
      },
      {
          "id": "proactive-continuity-evaluation",
          "en": "Proactive Continuity Evaluation",
          "fa": "ارزیابی پیش‌دستانه تداوم",
          "enDescription": "Identifying critical services, impact tolerances, and severe scenarios before a crisis occurs.",
          "faDescription": "شناخت خدمات حیاتی، آستانه اختلال و تست سناریوهای شدید پیش از وقوع بحران.",
          "shortEn": "Proactive Continuity Evaluation",
          "patterns": [
              [
                  "Severe-but-Plausible Scenario Testing",
                  "Severe-but-Plausible Scenario Testing",
                  "pattern.html?category=proactive-continuity-evaluation&pattern=severe-but-plausible-scenario-testing",
                  "04.1"
              ],
              [
                  "Impact-Tolerance and Critical-Service Mapping",
                  "Impact-Tolerance and Critical-Service Mapping",
                  "pattern.html?category=proactive-continuity-evaluation&pattern=impact-tolerance-and-critical-service-mapping",
                  "04.2"
              ]
          ]
      },
      {
          "id": "continuity-to-security-architectures",
          "en": "Continuity to Security Architectures",
          "fa": "معماری‌های امنیت برای تداوم",
          "enDescription": "Security and recovery designs that prevent cyber incidents from destroying the path back to service.",
          "faDescription": "طراحی امنیت و بازیابی به شکلی که حمله سایبری نتواند مسیر بازگشت به خدمت را از بین ببرد.",
          "shortEn": "Security Architectures for Continuity",
          "patterns": [
              [
                  "Immutable Cyber-Recovery and Air-Gapped Resilience",
                  "Immutable Cyber-Recovery and Air-Gapped Resilience",
                  "pattern.html?category=continuity-to-security-architectures&pattern=immutable-cyber-recovery-and-air-gapped-resilience",
                  "05.1"
              ],
              [
                  "Zero-Trust Continuity Architecture",
                  "Zero-Trust Continuity Architecture",
                  "pattern.html?category=continuity-to-security-architectures&pattern=zero-trust-continuity-architecture",
                  "05.2"
              ]
          ]
      },
      {
          "id": "win-win-regulation-in-ecosystem",
          "en": "Win-Win Regulation in Ecosystem",
          "fa": "رگولاتوری همکارانه در اکوسیستم",
          "enDescription": "Alignment among regulators, banks, and ecosystem participants around shared resilience standards.",
          "faDescription": "هم‌راستایی رگولاتور، بانک و بازیگران اکوسیستم برای استانداردهای مشترک تاب‌آوری.",
          "shortEn": "Collaborative Regulation",
          "patterns": [
              [
                  "Regulatory Co-Design and Sector Playbooks",
                  "Regulatory Co-Design and Sector Playbooks",
                  "pattern.html?category=win-win-regulation-in-ecosystem&pattern=regulatory-co-design-and-sector-playbooks",
                  "06.1"
              ],
              [
                  "Open-Banking and Fintech Resilience Standards",
                  "Open-Banking and Fintech Resilience Standards",
                  "pattern.html?category=win-win-regulation-in-ecosystem&pattern=open-banking-and-fintech-resilience-standards",
                  "06.2"
              ]
          ]
      },
      {
          "id": "financial-continuity-economic-resilience",
          "en": "Financial Continuity / Economic Resilience",
          "fa": "تداوم مالی و اقتصاد تاب‌آوری",
          "enDescription": "Economic models that make investment in resilience sustainable and financially defensible.",
          "faDescription": "مدل‌های اقتصادی که سرمایه‌گذاری در تاب‌آوری را پایدار و قابل توجیه می‌کنند.",
          "shortEn": "Financial & Economic Resilience",
          "patterns": [
              [
                  "Cash-Positive Resilience Economics",
                  "Cash-Positive Resilience Economics",
                  "pattern.html?category=financial-continuity-economic-resilience&pattern=cash-positive-resilience-economics",
                  "07.1"
              ],
              [
                  "Resilience-as-a-Service Business Model",
                  "Resilience-as-a-Service Business Model",
                  "pattern.html?category=financial-continuity-economic-resilience&pattern=resilience-as-a-service-business-model",
                  "07.2"
              ]
          ]
      },
      {
          "id": "hardware-infrastructure-supply",
          "en": "Hardware Infrastructure Supply",
          "fa": "تأمین زیرساخت سخت‌افزاری",
          "enDescription": "Reducing dependency on concentrated suppliers, spare parts, and physical infrastructure locations.",
          "faDescription": "کاهش وابستگی به تأمین‌کننده، قطعات و موقعیت‌های متمرکز زیرساختی.",
          "shortEn": "Hardware Infrastructure Supply",
          "patterns": [
              [
                  "Multi-Vendor and Spare-Parts Resilience",
                  "Multi-Vendor and Spare-Parts Resilience",
                  "pattern.html?category=hardware-infrastructure-supply&pattern=multi-vendor-and-spare-parts-resilience",
                  "08.1"
              ],
              [
                  "Localized Continuity Nodes",
                  "Localized Continuity Nodes",
                  "pattern.html?category=hardware-infrastructure-supply&pattern=localized-continuity-nodes",
                  "08.2"
              ]
          ]
      },
      {
          "id": "software-infrastructure-supply",
          "en": "Software Infrastructure Supply",
          "fa": "تأمین زیرساخت نرم‌افزاری",
          "enDescription": "Tools, operating capabilities, and release engineering practices that support service health and recovery.",
          "faDescription": "ابزارها، قابلیت‌های عملیاتی و مهندسی انتشار که سلامت و بازگشت سرویس را پشتیبانی می‌کنند.",
          "shortEn": "Software Infrastructure Supply",
          "patterns": [
              [
                  "Licensed ITSM/SRE/Observability Toolchain",
                  "Licensed ITSM/SRE/Observability Toolchain",
                  "pattern.html?category=software-infrastructure-supply&pattern=licensed-itsm-sre-observability-toolchain",
                  "09.1"
              ],
              [
                  "Release Resilience and Rollback Engineering",
                  "Release Resilience and Rollback Engineering",
                  "pattern.html?category=software-infrastructure-supply&pattern=release-resilience-and-rollback-engineering",
                  "09.2"
              ]
          ]
      },
      {
          "id": "customer-facing-service-continuity",
          "en": "Customer-Facing Service Continuity",
          "fa": "تداوم خدمات مشتری",
          "enDescription": "Maintaining customer access through fallback channels and transparent communication during disruption.",
          "faDescription": "حفظ دسترسی مشتری از طریق مسیرهای جایگزین و ارتباط شفاف در زمان اختلال.",
          "shortEn": "Customer Service Continuity",
          "patterns": [
              [
                  "Omni-Channel Fallback and Digital Substitution",
                  "Omni-Channel Fallback and Digital Substitution",
                  "pattern.html?category=customer-facing-service-continuity&pattern=omni-channel-fallback-and-digital-substitution",
                  "10.1"
              ],
              [
                  "Trust Transparency and Crisis Communication",
                  "Trust Transparency and Crisis Communication",
                  "pattern.html?category=customer-facing-service-continuity&pattern=trust-transparency-and-crisis-communication",
                  "10.2"
              ]
          ]
      },
      {
          "id": "business-process-continuity-sla",
          "en": "Business Process Continuity / SLA",
          "fa": "تداوم فرایند و SLA",
          "enDescription": "Aligning critical processes with SLA/SLO commitments and designing practical operational workarounds.",
          "faDescription": "هم‌راستایی فرایندهای حیاتی با SLA/SLO و طراحی Workaroundهای عملیاتی.",
          "shortEn": "Business Process Continuity",
          "patterns": [
              [
                  "Critical Process and SLA/SLO Alignment",
                  "Critical Process and SLA/SLO Alignment",
                  "pattern.html?category=business-process-continuity-sla&pattern=critical-process-and-sla-slo-alignment",
                  "11.1"
              ],
              [
                  "Manual Workaround and Fallback-by-Design",
                  "Manual Workaround and Fallback-by-Design",
                  "pattern.html?category=business-process-continuity-sla&pattern=manual-workaround-and-fallback-by-design",
                  "11.2"
              ]
          ]
      },
      {
          "id": "continuity-maintenance",
          "en": "Continuity Maintenance",
          "fa": "نگهداشت تداوم",
          "enDescription": "Maintaining resilience throughout change and the system lifecycle, not only during a crisis.",
          "faDescription": "حفظ تاب‌آوری در طول تغییرات و چرخه عمر سیستم، نه فقط در زمان بحران.",
          "shortEn": "Continuity Maintenance",
          "patterns": [
              [
                  "Resilience-Aware Change Management",
                  "Resilience-Aware Change Management",
                  "pattern.html?category=continuity-maintenance&pattern=resilience-aware-change-management",
                  "12.1"
              ],
              [
                  "Lifecycle Continuity Management",
                  "Lifecycle Continuity Management",
                  "pattern.html?category=continuity-maintenance&pattern=lifecycle-continuity-management",
                  "12.2"
              ]
          ]
      },
      {
          "id": "third-party-and-partner-continuity",
          "en": "Third-Party & Partner Continuity",
          "fa": "تداوم طرف‌های ثالث و شرکا",
          "enDescription": "Managing concentration risk and joint recovery across critical suppliers and ecosystem partners.",
          "faDescription": "مدیریت تمرکز ریسک و بازیابی مشترک در اکوسیستم تأمین‌کنندگان و شرکای حیاتی.",
          "shortEn": "Third-Party & Partner Continuity",
          "patterns": [
              [
                  "Third/Fourth-Party Concentration Control",
                  "Third/Fourth-Party Concentration Control",
                  "pattern.html?category=third-party-and-partner-continuity&pattern=third-fourth-party-concentration-control",
                  "13.1"
              ],
              [
                  "Shared Recovery Playbooks with Partners",
                  "Shared Recovery Playbooks with Partners",
                  "pattern.html?category=third-party-and-partner-continuity&pattern=shared-recovery-playbooks-with-partners",
                  "13.2"
              ]
          ]
      },
      {
          "id": "service-architecture-and-containment-engineering",
          "en": "Service Architecture & Containment Engineering",
          "fa": "معماری سرویس و مهار اختلال",
          "enDescription": "Reducing blast radius and preserving a minimum level of service instead of losing the service entirely.",
          "faDescription": "محدود کردن دامنه Failure و حفظ حداقل خدمت به‌جای از دست رفتن کامل سرویس.",
          "shortEn": "Service Containment Engineering",
          "patterns": [
              [
                  "Blast-Radius Reduction",
                  "Blast-Radius Reduction",
                  "pattern.html?category=service-architecture-and-containment-engineering&pattern=blast-radius-reduction",
                  "14.1"
              ],
              [
                  "Selective Shutdown and Graceful Degradation",
                  "Selective Shutdown and Graceful Degradation",
                  "pattern.html?category=service-architecture-and-containment-engineering&pattern=selective-shutdown-and-graceful-degradation",
                  "14.2"
              ]
          ]
      },
      {
          "id": "risk-sensing-threat-intelligence-and-early-warning",
          "en": "Risk Sensing, Threat Intelligence & Early Warning",
          "fa": "حسگری ریسک و هشدار زودهنگام",
          "enDescription": "Detecting changes in continuity risk before disruption becomes widespread.",
          "faDescription": "دیدن تغییر ریسک و وضعیت تداوم پیش از آنکه اختلال به شکل گسترده ظاهر شود.",
          "shortEn": "Risk Sensing & Early Warning",
          "patterns": [
              [
                  "Continuity Radar and Past-Risk Ledger",
                  "Continuity Radar and Past-Risk Ledger",
                  "pattern.html?category=risk-sensing-threat-intelligence-and-early-warning&pattern=continuity-radar-and-past-risk-ledger",
                  "15.1"
              ],
              [
                  "Real-Time Continuity Risk Dashboard",
                  "Real-Time Continuity Risk Dashboard",
                  "pattern.html?category=risk-sensing-threat-intelligence-and-early-warning&pattern=real-time-continuity-risk-dashboard",
                  "15.2"
              ]
          ]
      },
      {
          "id": "recovery-and-restoration-services",
          "en": "Recovery & Restoration Services",
          "fa": "بازیابی و بازگردانی خدمات",
          "enDescription": "Restoring services in the right sequence and validating the integrity of restored data and rebuilt environments.",
          "faDescription": "بازیابی سرویس‌ها در ترتیب درست و اطمینان از صحت داده و محیط بازسازی‌شده.",
          "shortEn": "Recovery & Restoration",
          "patterns": [
              [
                  "Recovery Orchestration and Sequencing",
                  "Recovery Orchestration and Sequencing",
                  "pattern.html?category=recovery-and-restoration-services&pattern=recovery-orchestration-and-sequencing",
                  "16.1"
              ],
              [
                  "Data Restore Validation and Clean Environment Rebuild",
                  "Data Restore Validation and Clean Environment Rebuild",
                  "pattern.html?category=recovery-and-restoration-services&pattern=data-restore-validation-and-clean-environment-rebuild",
                  "16.2"
              ]
          ]
      }
  ];

  var pageData = {
    continuity: {
      nav: "continuity",
      label: "Business Continuity",
      faLabel: "تداوم کسب‌وکار",
      title: "Continuity",
      faTitle: "تداوم",
      lede: "The ability to keep what truly matters running",
      faLede: "توان ادامه‌دادن آنچه واقعاً مهم است",
      anchorTabs: [["when-normal-conditions-disappear-what-must-continue","When normal conditions disappear, what must continue?","وقتی شرایط عادی از بین می‌رود، چه چیزی باید ادامه پیدا کند؟"],["what-is-business-continuity","What is Business Continuity?","تداوم کسب‌وکار چیست؟"],["continuity-is-not-just-backup-dr-or-crisis-management","Continuity is not just Backup, DR, or Crisis Management","تداوم فقط Backup، DR یا مدیریت بحران نیست"],["the-primary-unit-of-analysis-is-the-important-service","The primary unit of analysis is the “important service”","واحد اصلی تحلیل، «خدمت مهم» است"],["five-things-must-be-clear-for-every-important-service","Five things must be clear for every important service","برای هر خدمت مهم، پنج چیز باید از قبل روشن باشد"],["how-is-continuity-built","How is continuity built?","تداوم چگونه ساخته می‌شود؟"],["continuity-is-a-cross-functional-capability","Continuity is a cross-functional capability","تداوم یک مسئله میان‌وظیفه‌ای است"],["in-digital-business-the-service-boundary-extends-beyond-the-organization","In digital business, the service boundary extends beyond the organization","در کسب‌وکار دیجیتال، مرز خدمت از مرز سازمان فراتر می‌رود"],["how-do-we-know-we-are-ready","How do we know we are ready?","از کجا بدانیم آماده‌ایم؟"],["continuity-is-not-only-about-responding-to-crisis","Continuity is not only about responding to crisis","تداوم فقط واکنش به بحران نیست"],["key-questions-about-continuity","Key questions about Continuity","پرسش‌های کلیدی درباره تداوم"]],
      special: "continuityRich"
    },
    radar: {
      nav: "radar",
      label: "Deep Blue Radar",
      title: "Deep Blue Radar",
      faTitle: "رادار دیپ‌بلو",
      lede: "A field of view for understanding what affects organizational continuity.",
      faLede: "میدان دیدی برای شناخت آنچه بر تداوم سازمان اثر می‌گذارد.",
      meta: ["One Radar product", "16 Categories / 32 Patterns", "Updated monthly"],
      anchorTabs: [
        ["radar-definition", "Definition", "تعریف"],
        ["interactive-radar", "Radar Explorer", "کاوش رادار"],
        ["categories", "16 Domains", "۱۶ Domain"],
        ["pattern-structure", "Pattern Structure", "ساختار Pattern"],
        ["pattern-example", "Example", "نمونه"],
        ["evidence", "Evidence", "شواهد"],
        ["pattern-dynamics", "Pattern Dynamics", "پویایی Pattern"],
        ["your-organization", "Your Organization", "سازمان شما"],
        ["stay-deep-blue", "Stay Deep Blue", "Stay Deep Blue"],
        ["radar-participate", "Contribute", "مشارکت"]
      ],
      special: "radarLanding"
    },
    "radar-view": {
      nav: "radar",
      label: "Explore the Radar",
      title: "Explore the Radar",
      faTitle: "کاوش در رادار",
      lede: "One Explorer for the complete model. Open any Category to see its record and Patterns.",
      faLede: "یک کاوشگر برای تمام مدل. هر دسته‌بندی را باز کنید تا رکورد و الگوهای همان دسته را ببینید.",
      meta: ["16 Categories", "32 contextual Patterns", "Deep links preserved"],
      special: "radar"
    },
    reports: {
      nav: "radar",
      label: "Reports & Updates",
      title: "Reports & Updates",
      faTitle: "گزارش‌ها و به‌روزرسانی‌ها",
      lede: "A news-style feed for Radar releases, method notes, evidence updates and model changes.",
      faLede: "فید خبری رادار برای نسخه‌های تازه، یادداشت‌های روش، به‌روزرسانی شواهد و تغییرات مدل.",
      meta: ["News feed", "Radar updates", "Method notes"],
      special: "radarUpdates"
    },
    categories: {
      nav: "radar",
      label: "Deep Blue Radar / Explorer view",
      title: "Categories view",
      faTitle: "نمای دسته‌بندی‌ها",
      lede: "A filterable utility view of the same 16 Categories available in the unified Radar Explorer.",
      faLede: "نمایی فیلترشدنی از همان ۱۶ دسته‌بندی موجود در کاوشگر یکپارچهٔ رادار.",
      meta: ["Explorer utility", "16 Categories", "Stable links"],
      special: "directory",
      directory: "categories"
    },
    category: {
      nav: "radar",
      label: "Category 01 of 16",
      title: "Continuity Architecture",
      faTitle: "معماری تداوم",
      lede: "How the shape of systems and infrastructure decides whether a failure stays local or becomes a bank-wide outage.",
      faLede: "این‌که شکل سیستم‌ها و زیرساخت چگونه تعیین می‌کند یک خرابی محلی بماند یا به اختلالی در سراسر بانک تبدیل شود.",
      meta: ["2 Patterns", "Banking", "Updated 12 Jun 2026"],
      special: "categoryRecord"
    },
    patterns: {
      nav: "radar",
      label: "Deep Blue Radar / Explorer view",
      title: "Patterns view",
      faTitle: "نمای الگوها",
      lede: "A searchable utility view of the 32 Patterns; the primary journey remains Category to Pattern inside the Explorer.",
      faLede: "نمایی قابل جست‌وجو از ۳۲ الگو؛ مسیر اصلی همچنان از دسته‌بندی به الگو درون کاوشگر می‌رود.",
      meta: ["Explorer utility", "32 Patterns", "Evidence-linked"],
      special: "directory",
      directory: "patterns"
    },
    pattern: {
      nav: "radar",
      label: "Pattern / Continuity Architecture",
      title: "Modular survivability architecture",
      faTitle: "معماری تجزیه‌پذیر و بقاپذیر",
      lede: "Decompose banking systems into services that can fail, recover and be restored one at a time.",
      faLede: "سامانه‌های بانکی را به سرویس‌هایی تجزیه کنید که بتوانند یک‌به‌یک از کار بیفتند، بازیابی شوند و بازگردند.",
      meta: ["Reviewed", "Evidence-supported", "Updated 12 Jun 2026"],
      special: "patternRecord",
      tabs: [
        ["Why this Pattern matters", ["A narrow technical defect becomes a customer event when architecture cannot lose one service quietly.", "Map the risk drivers: monolithic failure, tight coupling and wide blast radius."]],
        ["Signals & Evidence", ["Expert interview / Bank CIO office / Mar 2026", "Framework / Operational resilience literature / Jan 2026", "3 of 11 evidence items shown."]],
        ["Management Application", ["Evaluate: map critical services to components.", "Deliver: create a decomposition and recovery-domain roadmap.", "Monitor: measure blast radius and recovery time by service."]],
        ["Opportunity Space", ["Microservices", "API gateway", "Service mesh", "Event-driven architecture", "Active-active patterns"]]
      ]
    },
    insights: {
      nav: "insights",
      label: "Insights",
      title: "Insights",
      faTitle: "بینش‌ها",
      lede: "A single library for podcasts, videocasts, articles and interviews.",
      faLede: "یک کتابخانه واحد برای پادکست‌ها، ویدیوکست‌ها، مقاله‌ها و مصاحبه‌ها.",
      special: "insightsRich",
      hideInnerHero: true
    },
    article: {
      nav: "insights",
      label: "Article / Hesam Maghsoudloo",
      title: "Financial Survival and Critical Service Continuity",
      faTitle: "دو صورت تداوم کسب‌وکار؛ بقای مالی و حفظ خدمت حیاتی",
      lede: "Financial continuity and service continuity are separate but dependent problems. Leaders in banking and technology need to read both in one decision model.",
      faLede: "تداوم مالی و تداوم خدمت دو مسئله جدا اما وابسته‌اند. مدیران بانک و فناوری باید هر دو را در یک مدل تصمیم‌گیری ببینند.",
      meta: ["Financial continuity", "August 2026", "Hesam Maghsoudloo"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "The two faces of continuity",
          faTitle: "دو صورت تداوم",
          body: "Business continuity is often imagined as a backup data center, a replacement system or a disaster recovery scenario. That picture is necessary, but incomplete. An organization may be technically prepared and still lose the economic capacity to survive. It may also have an acceptable balance sheet and revenue flow, yet fail to deliver a critical service when disruption occurs.",
          faBody: "تداوم کسب‌وکار را معمولاً با تصویر یک دیتاسنتر پشتیبان، سامانه جایگزین یا سناریوی بازیابی پس از بحران می‌شناسیم. این تصویر لازم است، اما کامل نیست. سازمانی ممکن است از نظر فنی آماده باشد و در عین حال، مدل اقتصادی لازم برای ادامه حیات را از دست بدهد. برعکس، ممکن است ترازنامه و جریان درآمد قابل‌قبولی داشته باشد، اما در لحظه اختلال نتواند خدمت حیاتی خود را به مشتری برساند."
        },
        {
          title: "What going concern measures",
          faTitle: "فرض تداوم فعالیت چه چیزی را می‌سنجد؟",
          body: "In finance and audit, the going concern assumption asks whether a company can continue operating over a reviewable horizon. Liquidity, debt, access to resources, revenue durability, cost structure and the ability to meet obligations all matter. Many continuity programs model network outages or system failures, but give less attention to failed funding rounds, sharp demand drops or surging infrastructure costs.",
          faBody: "در ادبیات مالی و حسابرسی، فرض تداوم فعالیت یا Going Concern به این پرسش پاسخ می‌دهد که آیا شرکت در افق قابل‌بررسی، امکان ادامه حیات دارد یا نه. نقدینگی، بدهی، دسترسی به منابع، پایداری درآمد، ساختار هزینه و توان ایفای تعهدات در این ارزیابی اهمیت دارند. در عمل، بسیاری از برنامه‌های تداوم از این سؤال عبور می‌کنند."
        },
        {
          title: "What business continuity management solves",
          faTitle: "مدیریت تداوم کسب‌وکار چه مسئله‌ای را حل می‌کند؟",
          body: "Business Continuity Management looks from another angle. It assumes the business can continue, but an incident threatens service delivery. The central questions become which services must be preserved, what level of degradation is tolerable, who has decision authority and how quickly service must return. Operational continuity is therefore not just keeping a server on; it is keeping the chain of customer outcome intact.",
          faBody: "Business Continuity Management از زاویه دیگری به سازمان نگاه می‌کند. فرض بر این است که کسب‌وکار هنوز امکان ادامه حیات دارد، اما یک حادثه یا اختلال، ارائه خدمت را تهدید کرده است. سؤال اصلی این است که کدام خدمات باید حفظ شوند، چه سطحی از افت قابل‌تحمل است، چه کسی اختیار تصمیم دارد و بازگشت خدمت در چه زمانی باید انجام شود."
        },
        {
          title: "Why financial and service continuity do not stay separate",
          faTitle: "چرا این دو صورت تداوم از هم جدا نمی‌مانند؟",
          body: "Financial continuity and service continuity look like different specialist domains, but in practice they reinforce or weaken one another. Losing a critical service for too long can reduce revenue, trigger penalties, accelerate customer churn and damage trust. Weak liquidity can also delay repairs, shrink security teams, tolerate incomplete recovery sites and increase the probability of operational failure.",
          faBody: "تداوم مالی و تداوم خدمت در ظاهر دو حوزه تخصصی متفاوت‌اند، اما در عمل یکدیگر را تقویت یا تضعیف می‌کنند. سازمانی که خدمت حیاتی خود را برای مدت طولانی از دست می‌دهد، با کاهش درآمد، جریمه، ریزش مشتری و آسیب اعتبار روبه‌رو می‌شود. از سوی دیگر، سازمانی که نقدینگی یا توان سرمایه‌گذاری کافی ندارد، تعمیرات اساسی را به تعویق می‌اندازد."
        },
        {
          title: "The business model is part of continuity architecture",
          faTitle: "مدل کسب‌وکار نیز بخشی از معماری تداوم است",
          body: "Continuity can become too technical when the business model is pushed to the margin. Revenue structure, resource mobilization, service cost and customer behavior can be as decisive as networks and data centers. In a banking model, continuity includes the balance among customer value, cost structure, risk and the ability to sustain resources.",
          faBody: "در برخی سازمان‌ها، بحث تداوم بیش از حد فنی می‌شود و مدل کسب‌وکار در حاشیه قرار می‌گیرد. در حالی که ساختار درآمد، نحوه تجهیز منابع، هزینه خدمت و رفتار مشتری می‌توانند همان اندازه تعیین‌کننده باشند که شبکه و دیتاسنتر اهمیت دارند."
        },
        {
          title: "From two separate plans to one management decision",
          faTitle: "از دو برنامه جدا به یک تصمیم مدیریتی",
          body: "Connecting the two forms of continuity does not mean merging finance and technology teams. Each has its own discipline. The issue is that their decisions should not be made without seeing mutual impact. For every critical service, leaders need to ask what service degradation does to customers, revenue and reputation; what the minimum acceptable service level is; what resources are required; and how long the organization can sustain those resources if the crisis continues.",
          faBody: "اتصال این دو صورت تداوم به معنای ادغام واحد مالی با واحد فناوری نیست. هر حوزه تخصص خود را دارد. مسئله این است که تصمیم‌های آن‌ها نباید بدون مشاهده اثر متقابل گرفته شود. برای هر خدمت حیاتی باید هم‌زمان اثر توقف خدمت بر مشتری، درآمد و اعتبار، حداقل سطح قابل‌قبول خدمت، منابع لازم و توان تحمل سازمان در بحران طولانی بررسی شود."
        },
        {
          title: "Where senior leadership sits",
          faTitle: "نقش مدیر ارشد کجاست؟",
          body: "A senior executive does not need to be a specialist in data centers, cybersecurity or disaster recovery. Their responsibility is to understand business consequences, set priorities, allocate resources and support expert decisions. A risk recorded in a committee without budget, authority, timing and a named owner does not create readiness.",
          faBody: "مدیر ارشد لازم نیست متخصص دیتاسنتر، امنیت یا Disaster Recovery باشد. مسئولیت او فهم پیامد کسب‌وکاری، تعیین اولویت، تخصیص منابع و حمایت از تصمیم تخصصی است. ثبت یک ریسک در کمیته، بدون تعیین زمان اقدام و منبع مالی، آمادگی ایجاد نمی‌کند."
        },
        {
          title: "Continuity is the ability to continue an outcome",
          faTitle: "تداوم، توان ادامه‌دادن یک نتیجه است",
          body: "Continuity should not be defined only as the survival of the company or the uptime of the system. It is the ability to continue a critical outcome for the customer while preserving the resources required to keep that commitment. The right decision forms where service, trust, revenue, resources and infrastructure are seen in one management picture.",
          faBody: "در نهایت، تداوم را نباید صرفاً توان زنده‌ماندن شرکت یا روشن‌ماندن سامانه تعریف کرد. تداوم یعنی سازمان بتواند نتیجه حیاتی خود را برای مشتری ادامه دهد و هم‌زمان منابع لازم برای ادامه این تعهد را حفظ کند. تصمیم درست در نقطه اتصال این دو شکل می‌گیرد."
        }
      ],
      faq: []
    },
    controlledShutdown: {
      nav: "insights",
      label: "Article / Reza Farhadi",
      title: "Controlled Shutdown and Financial Trust",
      faTitle: "توقف کنترل‌شده؛ وقتی خاموش‌کردن بخشی از سرویس، تداوم می‌سازد",
      lede: "In a financial-service crisis, a controlled shutdown can protect customer assets, limit the blast radius and preserve trust when it is paired with clear authority, communication and staged recovery.",
      faLede: "در بحران خدمات مالی، توقف کنترل‌شده می‌تواند از دارایی مشتری محافظت کند، دامنه خطر را محدود نگه دارد و با اختیار روشن، ارتباطات شفاف و بازگشت مرحله‌ای اعتماد را حفظ کند.",
      meta: ["Financial trust", "August 2026", "Reza Farhadi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Controlled shutdown is not continuity failure",
          faTitle: "توقف کنترل‌شده شکست تداوم نیست",
          body: "Continuity is often reduced to a single goal: the service must not stop. In a security crisis or unknown disruption, that goal can become dangerous. Continuing a service without limits may put customer assets and organizational trust at greater risk. A controlled shutdown becomes a continuity tool when it is bounded, authorized, asset-protective, clearly communicated and recoverable in stages.",
          faBody: "در ذهن بسیاری از مدیران، تداوم با یک هدف ساده تعریف می‌شود: سرویس نباید متوقف شود. این هدف در شرایط عادی قابل‌فهم است، اما در بحران امنیتی یا اختلال ناشناخته می‌تواند خطرناک باشد. گاهی ادامه بی‌قیدوشرط یک خدمت، دارایی مشتری و اعتبار کل سازمان را در معرض ریسک بیشتری قرار می‌دهد. در چنین وضعیتی، توقف کنترل‌شده شکست تداوم نیست."
        },
        {
          title: "Why financial services are different",
          faTitle: "چرا خدمات مالی با کسب‌وکارهای دیگر فرق دارد؟",
          body: "In banking, wallets, lending and investment platforms, an outage is not only a service-quality problem. Customers have entrusted part of their assets or obligations to the organization. When cards, balances or transactions are unavailable, the customer quickly moves from service frustration to asset-security anxiety.",
          faBody: "در یک کسب‌وکار غیرمالی، توقف موقت سفارش یا تحویل معمولاً نارضایتی ایجاد می‌کند. در بانک، کیف پول، لندتک یا پلتفرم سرمایه‌گذاری، اختلال معنای دیگری دارد. مشتری فقط منتظر یک خدمت نیست؛ بخشی از دارایی یا تعهد مالی خود را به سازمان سپرده است. وقتی کارت، موجودی یا تراکنش در دسترس نیست، ذهن مشتری خیلی سریع از کیفیت سرویس به امنیت اصل دارایی منتقل می‌شود."
        },
        {
          title: "Distrust spreads beyond one company",
          faTitle: "بی‌اعتمادی در یک شرکت متوقف نمی‌ماند",
          body: "Financial markets are connected systems of actors. When one bank, exchange or financial platform faces a trust crisis, customers may generalize the signal and withdraw confidence from adjacent players. Crisis behavior therefore protects more than a brand; it can shape public trust in the whole market.",
          faBody: "بازار مالی مجموعه‌ای از بازیگران به‌هم‌پیوسته است. وقتی یک بانک، صرافی یا پلتفرم مالی با بحران اعتماد روبه‌رو می‌شود، مشتری ممکن است منابع خود را از سایر بازیگران نیز خارج کند. او لزوماً تفاوت معماری، مدیریت و وضعیت مالی شرکت‌ها را نمی‌داند؛ نشانه خطر را به کل حوزه تعمیم می‌دهد."
        },
        {
          title: "The logic of controlled shutdown",
          faTitle: "منطق توقف کنترل‌شده چیست؟",
          body: "A controlled shutdown is defensible when continued operation may create larger harm. The decision should clarify which capability is limited, which asset or customer group is protected, what controls are required for return and what message or alternative path the customer receives during the interruption.",
          faBody: "توقف کنترل‌شده زمانی قابل‌دفاع است که ادامه خدمت احتمال آسیب بزرگ‌تری ایجاد کند. هدف، خاموش‌کردن کسب‌وکار نیست؛ محدودکردن دامنه خطر و ایجاد شرایط لازم برای بازگشت مطمئن است. این تصمیم باید روشن کند کدام سرویس یا قابلیت محدود می‌شود، چه دارایی یا گروه مشتری حفاظت می‌شود، چه کنترل‌هایی برای بازگشت لازم‌اند و مشتری در این فاصله چه پیام و مسیر جایگزینی دریافت می‌کند."
        },
        {
          title: "Recovery should be staged",
          faTitle: "بازگشت خدمت باید مرحله‌ای باشد",
          body: "Restoring every service at once can reactivate risk when the root cause or dependencies are not fully understood. Staged recovery lets the organization test the health of each part, watch abnormal signals and keep the impact of each decision bounded. The order should follow customer importance, risk level, dependencies and control capacity.",
          faBody: "بازگرداندن همه سرویس‌ها در یک لحظه، به‌ویژه وقتی علت حادثه یا همه وابستگی‌ها روشن نیست، می‌تواند ریسک را دوباره فعال کند. بازگشت مرحله‌ای اجازه می‌دهد سازمان سلامت هر جزء را بررسی کند، نشانه‌های غیرعادی را ببیند و دامنه اثر تصمیم را محدود نگه دارد. ترتیب بازگشت باید بر مبنای اهمیت خدمت برای مشتری، میزان ریسک، وابستگی‌ها و ظرفیت کنترل تعیین شود."
        },
        {
          title: "Internal bureaucracy must not reach the customer",
          faTitle: "بروکراسی داخلی نباید به مشتری منتقل شود",
          body: "Financial institutions need committees and control layers, but crisis authority must be defined before the crisis. Customers should not wait for internal responsibility boundaries to be negotiated before they learn what happened to their assets and service. The mechanism must be fast enough to act and structured enough to remain auditable.",
          faBody: "ساختارهای بانکی برای کنترل ریسک، کمیته و لایه‌های تصمیم متعدد دارند. این ساختار در شرایط عادی می‌تواند مفید باشد، اما در بحران ممکن است سرعت را از بین ببرد. مشتری نباید منتظر عبور یک تصمیم از چند هیئت بماند تا بداند چه اتفاقی برای دارایی و خدمتش افتاده است. راه‌حل، حذف کنترل نیست؛ باید اختیارهای بحران از قبل تعریف شوند."
        },
        {
          title: "Crisis communication is risk control",
          faTitle: "ارتباطات بحران بخشی از کنترل ریسک است",
          body: "In financial services, silence is not always the safest option. Customers need to know the current status, whether their asset or obligation is protected and what happens next. Good communication balances precision with restraint and uses more than one reachable channel.",
          faBody: "در خدمات مالی، سکوت همیشه محتاطانه‌ترین انتخاب نیست. مشتری برای تصمیم‌گیری به سه پاسخ نیاز دارد: وضعیت فعلی چیست، دارایی و تعهد او در چه وضعیتی است و اقدام بعدی چه خواهد بود. پیام باید دقیق باشد و بیش از دانسته‌های سازمان ادعا نکند. در عین حال، عبارت‌های مبهمی که هیچ اطمینان یا راهنمایی ایجاد نمی‌کنند نیز کافی نیستند."
        },
        {
          title: "Trust is preserved by the way decisions are made",
          faTitle: "اعتماد با نحوه تصمیم حفظ می‌شود",
          body: "Customers can accept a temporary limitation when they understand that the organization is protecting their assets, not hiding the event, and returning responsibly. A service that appears available but behaves unpredictably may destroy more trust than a limited, purposeful and reversible shutdown.",
          faBody: "اعتماد فقط با فعال‌بودن دائمی سرویس ساخته نمی‌شود. مشتری می‌تواند یک محدودیت موقت را بپذیرد، اگر بداند سازمان برای حفاظت از دارایی او تصمیم گرفته، وضعیت را پنهان نمی‌کند و مسیر بازگشت را مسئولانه پیش می‌برد. توقف کنترل‌شده زمانی ابزار تداوم است که محدود، هدفمند و قابل‌بازگشت باشد."
        }
      ],
      faq: []
    },
    riskReadiness: {
      nav: "insights",
      label: "Article / Hesam Maghsoudloo",
      title: "From Risk List to Real Readiness",
      faTitle: "از فهرست ریسک تا آمادگی واقعی در تداوم خدمات بانکی",
      lede: "Risk lists do not create readiness by themselves. Banking continuity requires authority, budget, ownership and executable action around the shared failure points of critical services.",
      faLede: "چرا کمیته ریسک بدون بودجه، اختیار و اقدام اجرایی آمادگی نمی‌سازد و چگونه باید نقاط شکست مشترک خدمات بانکی را مدیریت کرد؟",
      meta: ["Banking service continuity", "August 2026", "Hesam Maghsoudloo"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Risk is known before it becomes readiness",
          faTitle: "ریسک شناخته می‌شود، اما لزوماً به آمادگی تبدیل نمی‌شود",
          body: "Organizations are usually not weak at naming risks. They can prepare risk registers, dashboards, heat maps and committee minutes. The problem begins when the list does not become ownership, authority, funding, rehearsal or an operational change. In banking, the distance between knowing a risk and being ready for it is the distance between documented concern and service continuity.",
          faBody: "سازمان‌ها معمولاً در شناسایی ریسک ضعیف نیستند. فهرست ریسک‌ها تهیه می‌شود، داشبورد ساخته می‌شود، نقشه حرارتی ترسیم می‌شود و در کمیته‌ها درباره آن‌ها صحبت می‌شود. مسئله از جایی شروع می‌شود که این فهرست به مالکیت، اختیار، بودجه، تمرین و اقدام اجرایی تبدیل نمی‌شود. در صنعت بانکداری، فاصله میان «دانستن ریسک» و «آماده‌بودن برای ریسک» همان فاصله میان نگرانی ثبت‌شده و تداوم واقعی خدمت است."
        },
        {
          title: "The Iranian banking risk environment is not a single incident",
          faTitle: "محیط ریسک بانک ایرانی، تک‌حادثه‌ای نیست",
          body: "A bank does not face one neat incident at a time. Connectivity, payment networks, suppliers, legacy infrastructure, regulation, cybersecurity, customer behavior and public trust may all shift together. A technical outage can become a liquidity concern; a cyber signal can become a communication crisis; a vendor dependency can become a service-wide interruption.",
          faBody: "بانک در یک محیط ساده و تک‌حادثه‌ای کار نمی‌کند. اتصال، شبکه پرداخت، تأمین‌کننده، زیرساخت قدیمی، تنظیم‌گری، امنیت سایبری، رفتار مشتری و اعتماد عمومی می‌توانند هم‌زمان جابه‌جا شوند. یک اختلال فنی ممکن است به نگرانی نقدینگی تبدیل شود؛ یک نشانه سایبری می‌تواند بحران ارتباطی بسازد؛ و یک وابستگی تأمین‌کننده می‌تواند توقف گسترده خدمت ایجاد کند."
        },
        {
          title: "Shared failure points matter more than local defects",
          faTitle: "نقاط شکست مشترک را جدی‌تر از خرابی‌های محلی ببینیم",
          body: "A local defect is painful, but a shared failure point changes the continuity profile of the organization. Common infrastructure, common data flows, common vendors, common decision paths and common communication channels can make several services fail together. Readiness therefore starts by identifying where services share dependency, not only where each individual system may fail.",
          faBody: "خرابی محلی دردناک است، اما نقطه شکست مشترک نمایه تداوم سازمان را تغییر می‌دهد. زیرساخت مشترک، جریان داده مشترک، تأمین‌کننده مشترک، مسیر تصمیم مشترک و کانال ارتباطی مشترک می‌توانند چند خدمت را هم‌زمان از کار بیندازند. آمادگی از جایی شروع می‌شود که بفهمیم خدمات کجا وابستگی مشترک دارند، نه فقط اینکه هر سامانه به‌تنهایی کجا ممکن است خراب شود."
        },
        {
          title: "A risk committee is not enough",
          faTitle: "چرا کمیته ریسک به‌تنهایی کافی نیست؟",
          body: "A committee can create visibility, but continuity needs operational conversion. Every material risk needs an owner, a decision right, a funded action, a test or exercise, and a follow-up mechanism. Without those elements, the committee records concern but does not create readiness.",
          faBody: "کمیته ریسک می‌تواند مسئله را قابل مشاهده کند، اما تداوم به تبدیل اجرایی نیاز دارد. هر ریسک مهم باید مالک مشخص، اختیار تصمیم، اقدام دارای منبع، آزمون یا تمرین و سازوکار پیگیری داشته باشد. بدون این عناصر، کمیته نگرانی را ثبت می‌کند، اما آمادگی نمی‌سازد."
        },
        {
          title: "Regulation has a dual role",
          faTitle: "نقش تنظیم‌گری در تداوم دوگانه است",
          body: "Regulation can force minimum standards and discipline, but it can also become a source of operational rigidity if organizations treat compliance as the final destination. The useful role of regulation is to make continuity observable, comparable and accountable while still leaving room for context-specific service decisions.",
          faBody: "تنظیم‌گری می‌تواند حداقل استاندارد و انضباط ایجاد کند، اما اگر سازمان‌ها انطباق را مقصد نهایی بدانند، خود می‌تواند به سختی عملیاتی تبدیل شود. نقش مفید تنظیم‌گری این است که تداوم را قابل مشاهده، قابل مقایسه و پاسخ‌گو کند و در عین حال برای تصمیم‌های متناسب با زمینه خدمت فضا باقی بگذارد."
        },
        {
          title: "Readiness moves from technology to decision",
          faTitle: "آمادگی باید از سطح فناوری به سطح تصمیم برسد",
          body: "Technical preparation matters, but continuity becomes real when leaders know what to preserve, what to degrade, what to pause, what to communicate and who can decide. A backup system without decision clarity may stay unused; a dashboard without ownership may only describe failure more clearly.",
          faBody: "آمادگی فنی مهم است، اما تداوم زمانی واقعی می‌شود که مدیران بدانند چه چیزی باید حفظ شود، چه چیزی می‌تواند افت کند، چه چیزی باید متوقف شود، چه چیزی باید اعلام شود و چه کسی حق تصمیم دارد. سامانه پشتیبان بدون وضوح تصمیم ممکن است استفاده نشود؛ داشبورد بدون مالکیت فقط شکست را شفاف‌تر توصیف می‌کند."
        },
        {
          title: "Readiness must be tested, not displayed",
          faTitle: "آزمون آمادگی، نه نمایش آمادگی",
          body: "A readiness exercise is not a ceremony. It should expose dependency gaps, missing authority, unrealistic recovery times and the difference between a documented plan and the actual ability to act. The value of the exercise is not in proving that the plan exists; it is in revealing what must change before the crisis arrives.",
          faBody: "آزمون آمادگی نمایش نیست. باید شکاف وابستگی‌ها، نبود اختیار، زمان‌های بازیابی غیرواقعی و فاصله میان برنامه نوشته‌شده و توان واقعی اقدام را آشکار کند. ارزش تمرین در اثبات وجود برنامه نیست؛ در آشکارکردن چیزهایی است که پیش از بحران باید تغییر کنند."
        }
      ],
      faq: []
    },
    digitalContinuity: {
      nav: "insights",
      label: "Article / Hesam Maghsoudloo",
      title: "Digital Continuity Is More Than Uptime",
      faTitle: "تداوم دیجیتال فقط روشن‌ماندن سرویس نیست",
      lede: "A digital service can be technically alive while discovery, demand and customer trust are broken. Continuity should be measured across the whole customer journey.",
      faLede: "اختلال اینترنت چگونه مسیر کشف، تقاضا و اعتماد مشتری را قطع می‌کند؛ حتی وقتی سایت، سرور و پرداخت یک کسب‌وکار همچنان فعال‌اند؟",
      meta: ["Digital continuity", "August 2026", "Hesam Maghsoudloo"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "A service can be online while demand is disconnected",
          faTitle: "سرویس می‌تواند روشن باشد، اما تقاضا قطع شده باشد",
          body: "Digital continuity is often reduced to server uptime, payment availability or application access. But a business can keep its website, server and payment path technically active while customers cannot discover the service, trust the path, complete the journey or return with confidence after disruption.",
          faBody: "تداوم دیجیتال اغلب به روشن‌بودن سرور، دسترس‌پذیری پرداخت یا بازشدن اپلیکیشن فروکاسته می‌شود. اما یک کسب‌وکار ممکن است سایت، سرور و مسیر پرداختش از نظر فنی فعال باشد، در حالی که مشتری نتواند خدمت را کشف کند، به مسیر اعتماد کند، سفر خرید را کامل کند یا پس از اختلال با اطمینان برگردد."
        },
        {
          title: "Where the service chain begins",
          faTitle: "زنجیره خدمت از کجا آغاز می‌شود؟",
          body: "A digital service does not start when the user reaches the checkout page. It starts when a need is formed, a search is made, a message is seen, a comparison happens, a link is opened and the customer decides that the path is trustworthy enough to continue.",
          faBody: "زنجیره خدمت دیجیتال از صفحه پرداخت شروع نمی‌شود. از لحظه شکل‌گیری نیاز، جست‌وجو، دیدن پیام، مقایسه، بازکردن لینک و تصمیم مشتری برای ادامه مسیر آغاز می‌شود. اگر این مراحل آسیب ببینند، حتی یک سامانه روشن هم نمی‌تواند نتیجه خدمت را حفظ کند."
        },
        {
          title: "Technical availability is not real availability",
          faTitle: "تفاوت دسترس‌پذیری فنی با دسترس‌پذیری واقعی",
          body: "Technical availability says that a component is reachable. Real availability asks whether the customer can still complete the intended outcome. Internet disruption, channel instability, broken discovery paths and loss of trust may make a technically available service practically unavailable.",
          faBody: "دسترس‌پذیری فنی می‌گوید یک جزء قابل دسترسی است. دسترس‌پذیری واقعی می‌پرسد آیا مشتری هنوز می‌تواند نتیجه مورد نظر را کامل کند یا نه. اختلال اینترنت، ناپایداری کانال، شکست مسیر کشف و کاهش اعتماد می‌تواند خدمتی را که از نظر فنی فعال است، در عمل غیرقابل‌دسترس کند."
        },
        {
          title: "How crisis turns demand off",
          faTitle: "بحران چگونه تقاضا را خاموش می‌کند؟",
          body: "Demand is not a constant. It depends on reachability, timing, confidence and the customer’s perception that the service will work. When users cannot reach trusted channels or cannot predict whether a transaction will complete, demand may disappear before the core platform fails.",
          faBody: "تقاضا یک متغیر ثابت نیست. به دسترسی، زمان، اطمینان و برداشت مشتری از امکان انجام خدمت وابسته است. وقتی کاربر به کانال قابل اعتماد نمی‌رسد یا نمی‌تواند پیش‌بینی کند تراکنش کامل می‌شود یا نه، تقاضا ممکن است قبل از خرابی پلتفرم اصلی خاموش شود."
        },
        {
          title: "Move continuity metrics to the customer journey",
          faTitle: "شاخص‌های تداوم را از سرور به سفر مشتری ببریم",
          body: "Continuity metrics should include discovery, channel reachability, transaction completion, support access and customer return behavior. Server uptime is useful, but it is only one signal. The real question is whether the customer can still move from need to completed service under degraded conditions.",
          faBody: "شاخص‌های تداوم باید کشف خدمت، دسترس‌پذیری کانال، تکمیل تراکنش، دسترسی به پشتیبانی و رفتار بازگشت مشتری را هم ببینند. روشن‌بودن سرور مفید است، اما فقط یک نشانه است. سؤال اصلی این است که آیا مشتری در شرایط افت‌کرده هنوز می‌تواند از نیاز به خدمت کامل برسد یا نه."
        },
        {
          title: "Alternative paths are not only technical",
          faTitle: "مسیرهای جایگزین فقط فنی نیستند",
          body: "A fallback path may be a channel, a message, a support script, a trust signal, a temporary service mode or a human-assisted process. Digital continuity needs designed alternatives across communication, decision and customer action, not only a secondary server.",
          faBody: "مسیر جایگزین فقط سرور دوم نیست. می‌تواند یک کانال، پیام، سناریوی پشتیبانی، نشانه اعتماد، حالت موقت خدمت یا فرایند کمک‌گرفته از انسان باشد. تداوم دیجیتال به جایگزین‌های طراحی‌شده در ارتباطات، تصمیم و اقدام مشتری نیاز دارد، نه فقط زیرساخت پشتیبان."
        },
        {
          title: "Long-term continuity needs innovation",
          faTitle: "تداوم بلندمدت به نوآوری نیاز دارد",
          body: "When the operating environment changes, continuity cannot remain a static checklist. Organizations must redesign journeys, diversify channels, learn from weak signals and create new ways for customers to reach, trust and complete the service.",
          faBody: "وقتی محیط عملیاتی تغییر می‌کند، تداوم نمی‌تواند یک چک‌لیست ثابت بماند. سازمان باید سفرها را بازطراحی کند، کانال‌ها را متنوع کند، از نشانه‌های ضعیف یاد بگیرد و راه‌های تازه‌ای بسازد تا مشتری بتواند خدمت را پیدا کند، به آن اعتماد کند و آن را کامل انجام دهد."
        }
      ],
      faq: []
    },
    customerIdentityContinuity: {
      nav: "insights",
      label: "Article / Reza Farhadi",
      title: "Customer Relationship Continuity Starts with Persistent Identity",
      faTitle: "تداوم رابطه با مشتری از هویت پیوسته آغاز می‌شود",
      lede: "In youth and child-focused markets, continuity begins with whether the organization can recognize the customer correctly over time, across guardians, services and stages of growth.",
      faLede: "در بازار کودک و نوجوان، تداوم از این شروع می‌شود که سازمان بتواند مشتری را در طول زمان، در نسبت با والدین، سرویس‌ها و مراحل رشد، درست بشناسد.",
      meta: ["Customer identity", "August 2026", "Reza Farhadi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Continuity begins with knowing who the customer is",
          faTitle: "تداوم از شناخت درست مشتری آغاز می‌شود",
          body: "In some markets, continuity is not first a data center or recovery question. It begins with whether the organization can identify the customer correctly over time. In the child and youth market, need, behavior, legal authority and service suitability change quickly. If the customer’s identity is fragmented across parent accounts, devices, platforms and service providers, the relationship itself becomes discontinuous.",
          faBody: "در برخی بازارها، تداوم از دیتاسنتر یا بازیابی شروع نمی‌شود؛ از این سؤال آغاز می‌شود که آیا سازمان می‌تواند مشتری را در طول زمان درست بشناسد یا نه. در بازار کودک و نوجوان، نیاز، رفتار، اختیار قانونی و تناسب خدمت به سرعت تغییر می‌کند. اگر هویت مشتری میان حساب والدین، دستگاه‌ها، پلتفرم‌ها و ارائه‌دهندگان مختلف تکه‌تکه شود، خود رابطه با مشتری ناپیوسته می‌شود."
        },
        {
          title: "The issue is not only authentication",
          faTitle: "مسئله فقط احراز هویت نیست",
          body: "Authentication controls entry, but a minor’s identity also includes guardian relationship, consent, age, authority and the rules for service access. A parent account may solve today’s access problem while hiding the continuity of the child’s own service history, preferences and growth path.",
          faBody: "احراز هویت فقط کنترل ورود است. هویت فرد زیر سن قانونی، رابطه با ولی، رضایت، سن، اختیار و قواعد دسترسی به خدمت را هم دربر می‌گیرد. حساب والد ممکن است مسئله دسترسی امروز را حل کند، اما تاریخچه خدمت، ترجیحات و مسیر رشد خود کودک را پنهان یا پراکنده کند."
        },
        {
          title: "The customer grows; the product cannot stay fixed",
          faTitle: "مشتری رشد می‌کند؛ محصول ثابت نمی‌ماند",
          body: "A child’s needs change quickly. Educational, financial, content and entertainment services must evolve as the customer moves from one stage of growth to the next. Continuity means preserving identity, history and trust while the service itself changes.",
          faBody: "نیازهای کودک و نوجوان به سرعت تغییر می‌کند. آموزش، سرگرمی، محتوا، خدمات مالی و تجربه دیجیتال باید با عبور مشتری از یک مرحله رشد به مرحله بعد تغییر کنند. تداوم یعنی هویت، تاریخچه و اعتماد حفظ شود، حتی وقتی خود خدمت تغییر می‌کند."
        },
        {
          title: "Why a platform model matters",
          faTitle: "چرا مدل پلتفرمی اهمیت پیدا می‌کند؟",
          body: "No single organization can provide every relevant service across the full growth journey. A platform model can share identity, technology and access while specialist providers deliver specific services. The continuity question is who owns responsibility for data, consent, service quality and transfer when a customer moves between providers.",
          faBody: "هیچ کسب‌وکاری به‌تنهایی نمی‌تواند همه خدمات لازم در مسیر رشد را ارائه کند. مدل پلتفرمی می‌تواند هویت، فناوری و دسترسی را مشترک نگه دارد و ارائه‌دهندگان تخصصی خدمات خاص را ارائه کنند. پرسش تداوم این است که مسئولیت داده، رضایت، کیفیت خدمت و انتقال مشتری میان ارائه‌دهندگان با چه کسی است."
        },
        {
          title: "Identity is trust infrastructure in financial services",
          faTitle: "هویت، زیرساخت اعتماد در خدمات مالی است",
          body: "In youth financial services, identity mistakes affect legal relationship, authority and asset custody. Sustainable innovation requires coordination among banks, platforms and regulators so the customer’s identity is recognized formally and safely.",
          faBody: "در خدمات مالی کودک و نوجوان، خطا در هویت فقط خطای کاربری نیست؛ رابطه حقوقی، اختیار و نگهداری دارایی را تحت تأثیر قرار می‌دهد. نوآوری پایدار زمانی ممکن است که بانک، پلتفرم و نهاد ناظر برای شناسایی رسمی و امن هویت مشتری هماهنگ شوند."
        },
        {
          title: "The customer relationship should be portable",
          faTitle: "رابطه مشتری یک دارایی قابل‌حمل است",
          body: "Persistent identity allows the customer’s history to move with them. It reduces repeated trust-building and creates a long-term relationship across products. This requires data minimization, explicit consent, security and clear limits on data use.",
          faBody: "هویت پیوسته اجازه می‌دهد تاریخچه مشتری همراه او حرکت کند. این کار نیاز به اعتمادسازی تکراری را کم می‌کند و رابطه‌ای بلندمدت میان محصولات می‌سازد. اما به کمینه‌سازی داده، رضایت روشن، امنیت و حدود مشخص استفاده از داده نیاز دارد."
        },
        {
          title: "Measuring customer continuity",
          faTitle: "تداوم مشتری را چگونه بسنجیم؟",
          body: "Useful questions include how many users stay valid across growth stages, how easily they move between services, how often duplicate accounts appear, whether authority and data use are understood, and what happens to access and history if a partner exits.",
          faBody: "پرسش‌های مفید این‌اند: چه سهمی از کاربران در مراحل رشد معتبر می‌مانند؟ انتقال میان خدمات چقدر بی‌اصطکاک است؟ حساب‌های تکراری یا وابسته به والد چقدر ایجاد می‌شود؟ مشتری و ولی او اختیار و استفاده از داده را می‌فهمند؟ اگر یک شریک خارج شود، دسترسی و تاریخچه چگونه حفظ می‌شود؟"
        }
      ],
      faq: []
    },
    decisionMakingUnderUncertainty: {
      nav: "insights",
      label: "Article / Reza Farhadi",
      title: "Decision-Making Under Uncertainty",
      faTitle: "تداوم در عدم قطعیت؛ اول امکان تصمیم‌گیری را بازسازی کنید",
      lede: "When the duration of a crisis is unknown, continuity begins by restoring the organization’s ability to think, measure tolerance and keep viable options open.",
      faLede: "وقتی مدت بحران نامعلوم است، نخستین مأموریت تداوم ساختن پاسخ نهایی نیست؛ باید امکان فکرکردن، اندازه‌گیری ظرفیت تحمل و نگه‌داشتن گزینه‌های معتبر را بازسازی کرد.",
      meta: ["Crisis decision-making", "August 2026", "Reza Farhadi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Not knowing is management data",
          faTitle: "«نمی‌دانیم» یک داده مدیریتی است",
          body: "In a deep crisis, insisting on certainty can lower the quality of decisions. Leaders need to separate what is known, what can be discovered through data or negotiation, and what must be treated as scenario uncertainty.",
          faBody: "مدیران معمولاً برای نشان‌دادن تسلط، تمایل دارند پاسخ قطعی ارائه کنند. در بحران عمیق، این رفتار می‌تواند کیفیت تصمیم را کاهش دهد. ابهام باید به سه دسته تقسیم شود: مواردی که می‌دانیم و می‌توانیم بر مبنای آن‌ها تصمیم بگیریم؛ مواردی که اکنون نمی‌دانیم اما با مذاکره، داده یا آزمایش قابل‌کشف‌اند؛ و مواردی که خارج از اختیار سازمان‌اند و باید به‌عنوان عدم قطعیت سناریویی پذیرفته شوند."
        },
        {
          title: "Translate tolerance into time",
          faTitle: "ظرفیت تحمل را به زمان ترجمه کنید",
          body: "General statements such as “we can continue for a while” do not support decisions. The organization should estimate how long it can continue under current conditions by reading cash, commitments, infrastructure cost, reliable revenue and access to resources together.",
          faBody: "عبارت‌هایی مانند «مدتی دوام می‌آوریم» برای تصمیم کافی نیستند. سازمان باید بسنجد با وضعیت فعلی یک ماه، دو ماه یا سه ماه امکان ادامه دارد. این محاسبه فقط نقدینگی نیست؛ تعهدات مشتری، هزینه تیم، هزینه زیرساخت، درآمد قابل‌اتکا و امکان تأمین منابع را نیز شامل می‌شود."
        },
        {
          title: "Define the rebuildable core",
          faTitle: "هسته قابل‌بازسازی را مشخص کنید",
          body: "Temporary reduction can be a survival path only if the organization does not destroy what makes future recovery possible. The rebuildable core may include rare expertise, critical code and data, key customers, minimum safe infrastructure and the authority needed to restart.",
          faBody: "کوچک‌شدن یا توقف موقت برای همه کسب‌وکارها تصمیم درستی نیست، اما در برخی شرایط می‌تواند راه بقا باشد. مسئله مهم این است که سازمان هنگام کاهش، توان بازسازی خود را از بین نبرد. هسته قابل‌بازسازی ممکن است شامل افراد دارای دانش کمیاب، کد و داده حیاتی، رابطه با مشتریان و شرکای کلیدی، حداقل زیرساخت امن و اختیارهایی باشد که راه‌اندازی دوباره به آن‌ها وابسته است."
        },
        {
          title: "Human capital is not only execution capacity",
          faTitle: "منابع انسانی فقط ظرفیت اجرا نیست",
          body: "In a long social or economic crisis, people carry psychological, family and financial pressure. A system may remain online while the organization loses the real capacity to work. Preserving the team sometimes means changing hours, priorities, presence and short-term goals.",
          faBody: "در بحران اجتماعی یا طولانی، کارکنان نیز با فشار روانی، خانوادگی و اقتصادی روبه‌رو هستند. ممکن است سامانه فعال باشد، اما سازمان توان واقعی کارکردن نداشته باشد. حفظ تیم به معنای ادامه عادی همه انتظارات نیست؛ ممکن است ساعات، اولویت‌ها، شیوه حضور یا اهداف کوتاه‌مدت تغییر کنند."
        },
        {
          title: "Unit continuity is not organizational continuity",
          faTitle: "تداوم هر واحد، تداوم کل سازمان نیست",
          body: "Development, operations, marketing, human resources and customer contact each need different continuity conditions. If each unit optimizes only for itself, the organization becomes unbalanced. Continuity planning must coordinate activity levels across units in each scenario.",
          faBody: "توسعه، عملیات، بازاریابی، منابع انسانی و ارتباط با مشتری هرکدام نیازهای متفاوتی دارند. اگر هر واحد فقط برای بقای خودش بهینه شود، سازمان نامتوازن می‌شود. برنامه تداوم باید این وابستگی‌ها را کنار هم قرار دهد و برای هر سناریو مشخص کند سطح فعالیت واحدها چگونه هماهنگ می‌شود."
        },
        {
          title: "Build decision options before emergency",
          faTitle: "گزینه‌های تصمیم را پیش از نقطه اضطرار بسازید",
          body: "Planning should increase the number of credible options and show the consequences of each choice. Every option needs an activation condition, customer impact, team impact, cost, recovery risk and a named owner.",
          faBody: "مشاور یا تیم برنامه‌ریزی قرار نیست به‌جای مدیر تصمیم بگیرد. نقش آن‌ها افزایش تعداد گزینه‌های معتبر و نشان‌دادن پیامد هر انتخاب است. هر گزینه باید دست‌کم شرط فعال‌شدن، اثر بر مشتری، اثر بر تیم، هزینه، ریسک بازگشت و مسئول اجرا داشته باشد."
        },
        {
          title: "Management focus is a continuity capability",
          faTitle: "تمرکز مدیریتی یک قابلیت تداوم است",
          body: "A leader cannot remove every external force, but can organize the decision space. Continuity is not insistence on the previous shape of the business. Sometimes changing shape is the only way to preserve the possibility of continuation.",
          faBody: "مدیر نمی‌تواند عوامل خارج از اختیار را حذف کند، اما می‌تواند فضای تصمیم را سامان دهد. تداوم به معنای اصرار بر شکل قبلی کسب‌وکار نیست. گاهی تغییر شکل، تنها راه حفظ امکان ادامه است. در بحران نامعلوم، سازمان قبل از هرچیز باید توان دیدن و انتخاب‌کردن را حفظ کند."
        }
      ],
      faq: []
    },
    outcomeBasedDigitalTransformation: {
      nav: "insights",
      label: "Article / Sadegh Faramarzi",
      title: "Outcome-Based Digital Transformation",
      faTitle: "تحول دیجیتال بدون نتیجه اقتصادی، تداوم‌پذیر نیست",
      lede: "Transformation becomes sustainable when technology is connected to a measurable business result, not when the organization simply buys more tools or follows the current wave.",
      faLede: "پروژه‌ای که به نتیجه کسب‌وکار متصل نیست، حتی اگر از نظر فنی جذاب باشد، تداوم ندارد. تحول زمانی پایدار می‌شود که فناوری به یک نتیجه اقتصادی قابل‌سنجش وصل شود.",
      meta: ["Digital transformation", "August 2026", "Sadegh Faramarzi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "A project list is not a transformation roadmap",
          faTitle: "فهرست پروژه، Roadmap تحول نیست",
          body: "A long list of digital projects can signal a lack of choice. A credible roadmap explains a coherent change in operating model and value creation, even if that change is carried by one major project rather than many disconnected purchases.",
          faBody: "سازمان ممکن است ده‌ها پروژه دیجیتال تعریف کند و آن را نشانه بلوغ بداند. تعداد زیاد پروژه در واقع می‌تواند علامت فقدان انتخاب باشد. Roadmap معتبر باید یک تغییر منسجم در مدل عملیاتی و خلق ارزش را توضیح دهد؛ مهم تعداد خروجی‌ها نیست، رابطه آن‌ها با مسئله و نتیجه است."
        },
        {
          title: "Transformation does not always require more buying",
          faTitle: "تحول همیشه به خرید بیشتر نیاز ندارد",
          body: "Digitalization may come from redesigning processes and using existing assets better. If the bottleneck sits in process, data ownership or decision model, more technical capacity only increases maintenance cost.",
          faBody: "دیجیتالی‌شدن گاهی با بازطراحی فرایند و استفاده بهتر از دارایی موجود ممکن می‌شود. سازمان ممکن است داده فراوان، سامانه‌های فعال و کانال‌های متعدد داشته باشد، اما ارتباط میان آن‌ها ارزش تولید نکند. اگر مسئله در فرایند، مالکیت داده یا مدل تصمیم باشد، ظرفیت فنی بیشتر فقط هزینه نگهداری را افزایش می‌دهد."
        },
        {
          title: "Tool sales do not fit every AI use case",
          faTitle: "مدل فروش ابزار برای همه کاربردهای AI کافی نیست",
          body: "For organizational AI, a promise of capability may not be enough. Outcome-based models create a clearer shared language: the provider commits to improving productivity, revenue or cost and shares in the realized benefit.",
          faBody: "شرکت ارائه‌دهنده زیرساخت یا نرم‌افزار پایه می‌تواند محصول مشخصی بفروشد. اما استارتاپی که می‌خواهد کاربرد سازمانی هوش مصنوعی بسازد، با مسئله متفاوتی روبه‌روست. مدل نتیجه‌محور زبان مشترک روشن‌تری می‌سازد؛ ارائه‌دهنده متعهد می‌شود بهره‌وری، درآمد یا هزینه مشخصی را بهبود دهد و بخشی از منفعت محقق‌شده را دریافت کند."
        },
        {
          title: "Make hidden cost visible",
          faTitle: "هزینه پنهان را قابل‌مشاهده کنید",
          body: "AI value often appears in reduced error, waiting time, rework, fraud or weak decisions. If those effects are not measured, the project becomes hard to defend when budgets tighten.",
          faBody: "بسیاری از پروژه‌های AI در ابتدا هزینه آشکار را کاهش نمی‌دهند. ارزش آن‌ها ممکن است در کاهش خطا، زمان انتظار، دوباره‌کاری، تقلب یا تصمیم ضعیف ظاهر شود. این موارد اگر اندازه‌گیری نشوند، پروژه پس از مدتی به هزینه‌ای غیرقابل‌دفاع تبدیل می‌شود."
        },
        {
          title: "Data becomes valuable when it changes decisions",
          faTitle: "داده زمانی گنج است که به تصمیم تبدیل شود",
          body: "Data accumulation is not value creation. Open data and APIs matter when connected data, legal boundaries and clear responsibility turn information into better service, pricing or risk decisions.",
          faBody: "صنعت بیمه نمونه‌ای از دارایی داده‌ای استفاده‌نشده است. اطلاعات رفتار، ریسک، درمان یا رانندگی می‌تواند به طراحی خدمت و نرخ‌گذاری دقیق‌تر کمک کند، اما انباشت داده بدون قواعد اتصال، کیفیت و استفاده، ارزش ایجاد نمی‌کند. منطق Open Data و API این است که داده‌های مرتبط، با چارچوب قانونی و مسئولیت روشن، به خدمت بهتر تبدیل شوند."
        },
        {
          title: "A digital twin is not a static visual",
          faTitle: "Digital Twin نیز با نمایش بصری یکی نیست",
          body: "A real digital twin must connect to live data, learn from actual state and affect decisions. A three-dimensional model or fixed simulation does not become a digital twin just by changing its name.",
          faBody: "مفهوم‌های جذاب به‌سرعت سطحی می‌شوند. یک Digital Twin واقعی باید به داده زنده متصل باشد، از وضعیت واقعی یاد بگیرد و در تصمیم اثر بگذارد. مدل سه‌بعدی یا Simulation ثابت، صرفاً با تغییر نام به دوقلوی دیجیتال تبدیل نمی‌شود."
        },
        {
          title: "From technology wave to durable capability",
          faTitle: "از موج فناوری به قابلیت پایدار",
          body: "Every transformation or AI project should connect problem, data, mechanism, economic result, owner and continuation metric. If one link is missing, the project can fail under the first budget or management pressure.",
          faBody: "تحول واقعی زمانی رخ می‌دهد که مدیران پیش از خرید، مسئله را بفهمند و تغییر ذهنی و عملیاتی را بپذیرند. برای هر پروژه تحول یا AI باید یک زنجیره روشن وجود داشته باشد: مسئله، داده، سازوکار، نتیجه اقتصادی، مسئول و معیار ادامه. اگر یکی از این حلقه‌ها مفقود باشد، پروژه با اولین فشار بودجه‌ای آسیب می‌بیند."
        }
      ],
      faq: []
    },
    painPointContinuityLab: {
      nav: "insights",
      label: "Article / Sadegh Faramarzi",
      title: "The Valley of Failure as a Continuity Lab",
      faTitle: "دره شکست؛ آزمایشگاه واقعی تداوم کسب‌وکار",
      lede: "The point where capital, hype and market attention recede can expose false assumptions, weak models and hidden dependencies before they become repeated ecosystem failure.",
      faLede: "نقطه‌ای که سرمایه، هیجان بازار و توجه بیرونی عقب می‌نشینند، می‌تواند فرض‌های غلط، مدل‌های ضعیف و وابستگی‌های پنهان را پیش از تکرار شکست آشکار کند.",
      meta: ["Startup continuity", "August 2026", "Sadegh Faramarzi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "When the hype recedes, the model appears",
          faTitle: "وقتی هیجان عقب می‌نشیند، مدل واقعی دیده می‌شود",
          body: "When money, media attention and market excitement recede, the real business model becomes visible. The valley of failure is not only a place of collapse. It is a laboratory where false assumptions, hidden dependencies and weak models surface.",
          faBody: "وقتی پول، رسانه و هیجان بازار عقب می‌نشینند، مدل واقعی کسب‌وکار دیده می‌شود. دره شکست فقط نقطه فروپاشی نیست؛ آزمایشگاهی است که در آن فرض‌های غلط، وابستگی‌های پنهان و ضعف مدل کسب‌وکار آشکار می‌شود."
        },
        {
          title: "Pain is different from suffering",
          faTitle: "درد با زجر تفاوت دارد",
          body: "A crisis creates pain. Pain can become permanent suffering, or it can become data for correction. PainTech does not celebrate suffering; it means staying with the painful point long enough to extract learning before the next organization repeats the same mistake.",
          faBody: "بحران درد ایجاد می‌کند. این درد می‌تواند به زجر دائمی تبدیل شود یا به داده‌ای برای اصلاح. PainTech یعنی ستایش رنج نه؛ یعنی ماندن در نقطه درد تا وقتی که از آن یادگیری قابل استفاده استخراج شود و سازمان بعدی همان خطا را تکرار نکند."
        },
        {
          title: "Why the business plan is not a rescue device",
          faTitle: "چرا Business Plan نجات‌دهنده نیست؟",
          body: "A financial spreadsheet is valuable only when it is built on a valid business model. Value, willingness to pay, production and distribution logic, dependencies and cost behavior are tested in the valley. The crisis exposes the distance between projection and reality.",
          faBody: "جدول مالی فقط زمانی ارزش دارد که بر مدل کسب‌وکار معتبر بنا شده باشد. ارزش، تمایل به پرداخت، منطق تولید و توزیع، وابستگی‌ها و رفتار هزینه در دره شکست آزمون می‌شوند. بحران فاصله میان پیش‌بینی و واقعیت را آشکار می‌کند."
        },
        {
          title: "The illusion of knowledge becomes the illusion of readiness",
          faTitle: "توهم دانایی چگونه به توهم آمادگی تبدیل می‌شود؟",
          body: "Founders may know a product, technology or academic idea, but not the operating reality of law, tax, accounting, contracts, compliance, cash flow and organization design. Continuity needs technical literacy, business literacy and financial literacy together.",
          faBody: "بنیان‌گذار ممکن است محصول، فناوری یا ایده دانشگاهی را خوب بشناسد، اما با واقعیت عملیاتی قانون، مالیات، حسابداری، قرارداد، انطباق، جریان نقدی و طراحی سازمان آشنا نباشد. تداوم به سواد فنی، سواد کسب‌وکار و سواد مالی در کنار هم نیاز دارد."
        },
        {
          title: "Failure is not only investor loss",
          faTitle: "شکست فقط زیان سرمایه‌گذار نیست",
          body: "When a startup fails, the loss is not only capital. Founder knowledge, team confidence, reputation and market trust can also burn. If the experience is not documented and transferred, the ecosystem pays the same learning cost again.",
          faBody: "وقتی یک استارتاپ شکست می‌خورد، زیان فقط سرمایه نیست. دانش بنیان‌گذار، اعتماد تیم، اعتبار و اعتماد بازار هم می‌سوزد. اگر تجربه مستند و منتقل نشود، اکوسیستم همان هزینه یادگیری را دوباره پرداخت می‌کند."
        },
        {
          title: "From performative postmortem to usable learning",
          faTitle: "از Postmortem نمایشی به یادگیری قابل‌استفاده",
          body: "A useful failure case asks what assumption failed, which early signals were ignored, what dependencies existed, what decisions limited damage and which knowledge should transfer to the next team.",
          faBody: "یک بررسی مفید شکست می‌پرسد کدام فرض شکست خورد، چه نشانه‌های اولیه‌ای نادیده گرفته شد، چه وابستگی‌هایی وجود داشت، کدام تصمیم‌ها دامنه آسیب را محدود کرد و چه دانشی باید به تیم بعدی منتقل شود."
        },
        {
          title: "Investing at the point of pain",
          faTitle: "سرمایه‌گذاری در نقطه درد",
          body: "The valley is not always the end. Pain can be treatable when professional help, investment and model correction arrive together. Money without model correction only extends suffering.",
          faBody: "دره شکست همیشه پایان نیست. درد زمانی قابل درمان است که کمک حرفه‌ای، سرمایه و اصلاح مدل هم‌زمان وارد شوند. پول بدون اصلاح مدل فقط زجر را طولانی‌تر می‌کند."
        }
      ],
      faq: []
    },
    humanCenteredBcm: {
      nav: "insights",
      label: "Article / Sadegh Faramarzi",
      title: "Real BCM Starts with People, Not Backup",
      faTitle: "BCM واقعی از Backup شروع نمی‌شود؛ از انسان آغاز می‌شود",
      lede: "Backups, alternate sites and recovery equipment only become continuity when people, authority, knowledge transfer and operational trust are designed around them.",
      faLede: "نسخه پشتیبان، سایت جایگزین و تجهیزات بازیابی فقط زمانی به تداوم تبدیل می‌شوند که انسان، اختیار، انتقال دانش و اعتماد عملیاتی پیرامون آن‌ها طراحی شده باشد.",
      meta: ["Business continuity management", "August 2026", "Sadegh Faramarzi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Backup is not readiness",
          faTitle: "Backup به‌تنهایی آمادگی نیست",
          body: "BCM conversations often jump to backup, alternate sites, equipment and disaster recovery. These are necessary, but they do not create continuity by themselves. A backup must be restorable, decisions must be timely and people must know what to do.",
          faBody: "گفت‌وگو درباره BCM معمولاً سریع به Backup، سایت جایگزین، تجهیزات و Disaster Recovery می‌رسد. این‌ها لازم‌اند، اما به‌تنهایی تداوم نمی‌سازند. نسخه پشتیبان باید قابل بازگردانی باشد، تصمیم‌ها باید به‌موقع گرفته شوند و آدم‌ها باید بدانند چه باید بکنند."
        },
        {
          title: "Crisis is not solved by an org chart",
          faTitle: "بحران با جدول سازمانی حل نمی‌شود",
          body: "Job descriptions and processes support normal work, but crisis requires people who understand the issue, take responsibility and act beyond routine. This capability grows from respect, trust, justice and a culture that treats human capital as relationship quality, not just headcount.",
          faBody: "شرح شغل و فرایندها به کار عادی کمک می‌کنند، اما بحران به آدم‌هایی نیاز دارد که مسئله را بفهمند، مسئولیت بپذیرند و فراتر از روال عمل کنند. این قابلیت از احترام، اعتماد، عدالت و فرهنگی می‌آید که سرمایه انسانی را فقط تعداد نیرو نمی‌داند."
        },
        {
          title: "Dependence on heroes is not continuity",
          faTitle: "وابستگی به قهرمان، تداوم نیست",
          body: "If rescue depends on two or three key people, the organization has a warning signal. Continuity requires knowledge transfer, documentation, succession and distributed authority. The question is not who can save us once, but whether the organization can act when that person is unavailable.",
          faBody: "اگر نجات سازمان به دو یا سه نفر کلیدی وابسته است، این خودش نشانه خطر است. تداوم به انتقال دانش، مستندسازی، جانشین‌پروری و توزیع اختیار نیاز دارد. سؤال این نیست که چه کسی یک‌بار ما را نجات می‌دهد؛ سؤال این است که سازمان بدون حضور او هم می‌تواند عمل کند یا نه."
        },
        {
          title: "Backup is an assumption until it is restored",
          faTitle: "Backup تا زمانی که Restore نشده، فرض است",
          body: "A backup is only an assumption until it is tested under real conditions. Location, access, restore time and operational reintegration matter. The test should prove service outcome, not merely that a machine can be powered on.",
          faBody: "نسخه پشتیبان تا زمانی که در شرایط واقعی بازگردانی نشده، فقط یک فرض است. محل نگهداری، دسترسی، زمان بازگردانی و اتصال دوباره به عملیات اهمیت دارند. آزمون باید نتیجه خدمت را ثابت کند، نه فقط روشن‌شدن یک ماشین را."
        },
        {
          title: "Management connects people and infrastructure",
          faTitle: "مدیریت، لایه اتصال انسان و زیرساخت است",
          body: "Continuity is a management problem that depends heavily on infrastructure. Management defines critical service, tolerable degradation, budget and authority; infrastructure enables those choices.",
          faBody: "تداوم مسئله‌ای مدیریتی است که به زیرساخت وابستگی جدی دارد. مدیریت خدمت حیاتی، افت قابل‌تحمل، بودجه و اختیار را تعریف می‌کند؛ زیرساخت امکان اجرای این انتخاب‌ها را فراهم می‌کند."
        },
        {
          title: "Bank trust reduces tolerance for downtime",
          faTitle: "اعتبار بانک، تحمل توقف را کاهش می‌دهد",
          body: "In banking and payment, downtime damages more than availability. It affects reputation and trust. BCM must include the service core, minimum operating scenarios, customer communication and clear recovery responsibility.",
          faBody: "در بانکداری و پرداخت، توقف فقط مسئله دسترس‌پذیری نیست؛ اعتبار و اعتماد را آسیب می‌زند. BCM باید هسته خدمت، سناریوی حداقل عملیات، ارتباط با مشتری و مسئولیت روشن بازیابی را دربر بگیرد."
        },
        {
          title: "A document must become operational memory",
          faTitle: "سند باید به حافظه عملیاتی تبدیل شود",
          body: "A plan matters when it is understood and practiced. Exercises should include management, operations, support, human resources and communication. The cycle is scenario, roles, decision time, decision quality, bottleneck discovery, correction and retest.",
          faBody: "برنامه زمانی ارزش دارد که فهمیده و تمرین شده باشد. مانور باید مدیریت، عملیات، پشتیبانی، منابع انسانی و ارتباطات را درگیر کند. چرخه مفید شامل سناریو، نقش‌ها، زمان تصمیم، کیفیت تصمیم، کشف گلوگاه، اصلاح و آزمون دوباره است."
        }
      ],
      faq: []
    },
    capabilityBeforePlan: {
      nav: "insights",
      label: "Article / Sadra Babaei",
      title: "Assess Capability Before Writing the Continuity Plan",
      faTitle: "پیش از نوشتن برنامه تداوم، قابلیت واقعی سازمان را بسنجید",
      lede: "A continuity plan is only useful when it reflects real human, technical, process and decision capacity under pressure.",
      faLede: "برنامه تداوم زمانی مفید است که ظرفیت واقعی انسان، فناوری، فرایند و تصمیم‌گیری سازمان را زیر فشار نشان دهد.",
      meta: ["Continuity planning", "August 2026", "Sadra Babaei"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "The plan should follow capability",
          faTitle: "سند باید بعد از سنجش قابلیت نوشته شود",
          body: "Many organizations have crisis documents, but at the moment of incident the plan may not match actual capacity. Authority is unclear, infrastructure does not support the promised level and people have not rehearsed. The right order is to measure actual capability first, then write the plan.",
          faBody: "بسیاری از سازمان‌ها سند بحران دارند، اما در لحظه حادثه روشن می‌شود برنامه با ظرفیت واقعی سازمان نمی‌خواند. اختیار مشخص نیست، زیرساخت سطح وعده‌داده‌شده را پشتیبانی نمی‌کند و افراد تمرین نکرده‌اند. ترتیب درست این است: اول قابلیت واقعی سنجیده شود، بعد برنامه نوشته شود."
        },
        {
          title: "Design the crisis before it happens",
          faTitle: "بحران را قبل از وقوع طراحی کنید",
          body: "Crisis management is not only reaction. A useful scenario defines the affected service, the customer outcome that is lost, the first warning signal, the dependencies involved and the authority required to change state.",
          faBody: "مدیریت بحران فقط واکنش نیست. سناریوی مفید مشخص می‌کند کدام خدمت آسیب می‌بیند، چه نتیجه‌ای برای مشتری از دست می‌رود، نخستین نشانه هشدار چیست، چه وابستگی‌هایی درگیرند و چه اختیاری برای تغییر وضعیت لازم است."
        },
        {
          title: "Exercises are for finding weakness",
          faTitle: "مانور برای اثبات آمادگی نیست",
          body: "An exercise should not perform a pre-known success. It should test communication channels, substitutes, recoverable data and management decisions with incomplete information. Its output is action, owner, deadline and retest.",
          faBody: "مانور نباید اجرای یک موفقیت از پیش معلوم باشد. باید کانال ارتباطی، جانشین‌ها، قابلیت بازگردانی داده و تصمیم مدیران با اطلاعات ناقص را بیازماید. خروجی مانور اقدام، مالک، زمان‌بندی و آزمون دوباره است."
        },
        {
          title: "Define minimum service from the customer view",
          faTitle: "حداقل خدمت را از نگاه مشتری تعریف کنید",
          body: "The continuity plan should begin with customer outcome. What minimum result must remain available: access to funds, essential payment, account status, communication or support? Without this view, teams may restore systems while missing the customer’s core need.",
          faBody: "برنامه تداوم باید از نتیجه مشتری شروع شود. حداقل نتیجه‌ای که باید باقی بماند چیست: دسترسی به پول، پرداخت ضروری، وضعیت حساب، ارتباط یا پشتیبانی؟ بدون این نگاه، تیم‌ها ممکن است سامانه‌ها را برگردانند اما نیاز اصلی مشتری را از دست بدهند."
        },
        {
          title: "Organizational capability is not only technology",
          faTitle: "قابلیت سازمان فقط فناوری نیست",
          body: "Readiness has at least four layers: infrastructure and technology, human resources, governance and operational culture. Technology alone cannot compensate for unclear authority, missing knowledge or a culture that avoids difficult decisions.",
          faBody: "آمادگی دست‌کم چهار لایه دارد: زیرساخت و فناوری، منابع انسانی، حاکمیت و فرهنگ عملیاتی. فناوری به‌تنهایی نمی‌تواند نبود اختیار، دانش منتقل‌نشده یا فرهنگی را که از تصمیم دشوار فرار می‌کند جبران کند."
        },
        {
          title: "Every crisis should become reusable knowledge",
          faTitle: "هر بحران باید به دانش قابل‌استفاده تبدیل شود",
          body: "Experiences such as COVID, connectivity disruption and cyber incidents should become scenarios, procedures and architecture changes. Lessons kept in people’s memories or slide decks are not yet capabilities.",
          faBody: "تجربه‌هایی مثل کرونا، اختلال اتصال یا رخدادهای سایبری باید به سناریو، رویه و تغییر معماری تبدیل شوند. درس‌هایی که فقط در ذهن افراد یا اسلایدها باقی بمانند هنوز قابلیت سازمانی نیستند."
        },
        {
          title: "Update the plan with reality",
          faTitle: "برنامه را با واقعیت به‌روز کنید",
          body: "Scenarios once considered unlikely may become real. A continuity plan is not a static file. After each event, organizations should update probability, impact, fallback options and the evidence behind their assumptions.",
          faBody: "سناریوهایی که زمانی بعید فرض می‌شدند ممکن است واقعی شوند. برنامه تداوم یک فایل ثابت نیست. پس از هر رویداد باید احتمال، اثر، مسیرهای جایگزین و شواهد پشت فرض‌ها به‌روز شود."
        }
      ],
      faq: []
    },
    firstDecisionMinimumService: {
      nav: "insights",
      label: "Article / Sadra Babaei",
      title: "The First Crisis Decision and Minimum Service",
      faTitle: "اولین تصمیم بحران؛ حداقل خدمت، اختیار و ارتباطات",
      lede: "The quality of recovery depends on the first decisions: what minimum outcome remains available, who has authority and how the status is communicated.",
      faLede: "کیفیت بازگشت یک سازمان از بحران فقط به قدرت زیرساخت وابسته نیست. در دقایق و ساعت‌های نخست، حداقل خدمت، اختیار تصمیم و ارتباطات مسیر حادثه را تعیین می‌کنند.",
      meta: ["Crisis command", "August 2026", "Sadra Babaei"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "From incident control to resilience management",
          faTitle: "از کنترل حادثه به مدیریت تاب‌آوری",
          body: "Crisis management contains the incident. Resilience management asks which service must flow again in the damaged condition. The goal is not always immediate full capacity; sometimes a limited but vital customer outcome matters more.",
          faBody: "مدیریت بحران تلاش می‌کند دامنه حادثه را مهار کند. مدیریت تاب‌آوری یک قدم جلوتر می‌رود و می‌پرسد در همین وضعیت مختل، کدام خدمت باید دوباره جریان پیدا کند. هدف همیشه بازگشت فوری به ظرفیت کامل نیست؛ گاهی بازگرداندن یک نتیجه محدود اما حیاتی ارزشمندتر است."
        },
        {
          title: "Define minimum service before the crisis",
          faTitle: "حداقل خدمت را قبل از بحران تعریف کنید",
          body: "On the day of an incident, every unit sees its own system as important. Minimum service should define the customer group, vital need, acceptable limited service, maximum tolerable outage, dependencies and the signal for moving back to normal.",
          faBody: "در روز حادثه، هر واحد تمایل دارد سامانه یا فرایند خود را مهم‌تر بداند. حداقل خدمت باید پاسخ دهد مشتری در بدترین وضعیت چه نتیجه‌ای را حتماً باید دریافت کند: گروه مشتری، نیاز حیاتی، سطح محدود اما قابل‌قبول خدمت، حداکثر زمان تحمل توقف، وابستگی‌های فنی و انسانی و معیار عبور از وضعیت محدود به وضعیت عادی."
        },
        {
          title: "Delegated authority is not the opposite of governance",
          faTitle: "تفویض اختیار، جایگزین حاکمیت نیست",
          body: "A crisis does not wait for the normal approval chain. The answer is not uncontrolled individual action, but pre-defined authority with boundaries, duration, reporting and review criteria.",
          faBody: "بحران با ساختار تصمیم‌گیری عادی هماهنگ نمی‌شود. اگر هر تغییر باید از چند کمیته عبور کند، زمان بازیابی از دست می‌رود. راه‌حل، تصمیم فردی و بدون کنترل نیست؛ اختیار از پیش تعریف‌شده است. مرز اختیار، مدت اعتبار، الزام گزارش و معیار بازبینی باید روشن باشند."
        },
        {
          title: "Silence creates an information vacuum",
          faTitle: "سکوت، خلأ اطلاعات ایجاد نمی‌کند؛ آن را با شایعه پر می‌کند",
          body: "When the organization does not communicate, customers combine scattered signals, other people’s experiences and rumors. Crisis communication should state known status, current action and the next update time without pretending certainty.",
          faBody: "وقتی سازمان اطلاع‌رسانی نمی‌کند، مشتری منتظر نمی‌ماند. او نشانه‌های پراکنده، تجربه دیگران و شایعات را کنار هم می‌گذارد. ارتباطات بحران باید از قبل مشخص کند چه کسی سخن می‌گوید، چه سطحی از اطلاعات قابل‌انتشار است و پیام از کدام کانال‌ها منتشر می‌شود."
        },
        {
          title: "Raw technology does not create priority",
          faTitle: "فناوری خام، بدون اولویت نتیجه نمی‌دهد",
          body: "A bank may have strong infrastructure and expert teams, but without a recovery order those assets do not become customer outcomes. Management decides which service returns first, which risk is accepted and which team focuses on which goal.",
          faBody: "یک بانک ممکن است زیرساخت قوی، تیم متخصص و ظرفیت بازیابی داشته باشد، اما اگر ترتیب بازگشت روشن نباشد، این دارایی‌ها به نتیجه تبدیل نمی‌شوند. مدیریت تعیین می‌کند کدام سرویس زودتر برگردد، کدام ریسک پذیرفته شود و کدام تیم روی چه هدفی متمرکز شود."
        },
        {
          title: "The first decision should keep the next path open",
          faTitle: "تصمیم اولیه باید مسیر بعدی را باز نگه دارد",
          body: "The first crisis decision does not have to be perfect. It should limit harm and preserve room for later decisions. Strong command is defined by disciplined review and correction, not by clinging to the first answer.",
          faBody: "اولین تصمیم بحران لزوماً کامل‌ترین تصمیم نیست. باید دامنه آسیب را محدود کند و امکان تصمیم‌های بعدی را حفظ کند. فرماندهی قوی با چسبیدن به تصمیم نخست تعریف نمی‌شود؛ با توان اصلاح منظم تصمیم و حفظ جهت خدمت تعریف می‌شود."
        },
        {
          title: "Experience must become mechanism",
          faTitle: "تجربه باید به سازوکار تبدیل شود",
          body: "If an organization restores a key service in a few days, the experience should not remain in the memory of a few people. The authority, cooperation path and technical route that enabled recovery should become a reusable mechanism.",
          faBody: "اگر سازمانی توانسته در چند روز بخش مهمی از خدمت را بازگرداند، نباید تجربه در حافظه چند نفر باقی بماند. باید معلوم شود کدام اختیار، کدام همکاری و کدام مسیر فنی عامل بازگشت بوده است. بازگشت سریع از بحران اتفاقی نیست؛ نتیجه طراحی قبلی حداقل خدمت، اختیار تصمیم و ارتباطات است."
        }
      ],
      faq: []
    },
    controlledTrustFintechResilience: {
      nav: "insights",
      label: "Article / Sadra Babaei",
      title: "Controlled Trust in FinTech Resilience",
      faTitle: "اعتماد کنترل‌شده به فین‌تک؛ معماری مکمل تداوم بانک",
      lede: "Banks can use fintech capacity and parallel architecture for service continuity without giving up risk control or final accountability.",
      faLede: "بانک می‌تواند از ظرفیت فین‌تک و معماری موازی برای حفظ خدمت و نوآوری استفاده کند، بدون اینکه کنترل ریسک یا مسئولیت نهایی خود را واگذار کند.",
      meta: ["Bank-fintech continuity", "August 2026", "Sadra Babaei"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Building everything inside is not always safer",
          faTitle: "ساخت همه‌چیز در داخل، همیشه امن‌تر نیست",
          body: "Full insourcing can be justified for some critical services, but when it becomes an absolute principle it spreads resources thin and slows learning. Excessive concentration can also create a single point of failure.",
          faBody: "درون‌سپاری کامل معمولاً با استدلال امنیت و کنترل توجیه می‌شود. در بعضی خدمات حیاتی این استدلال معتبر است، اما وقتی به یک اصل مطلق تبدیل شود، سازمان منابع خود را میان حوزه‌های متعدد پخش می‌کند و سرعت یادگیری کاهش می‌یابد. تمرکز بیش از حد نیز خود نقطه شکست می‌سازد."
        },
        {
          title: "A pilot is a trust-building mechanism",
          faTitle: "پایلوت، سازوکار ساختن اعتماد است",
          body: "Trust in an external partner should not rest on reputation or promise. A controlled pilot tests technical capability, operational behavior and cooperation quality within a bounded domain.",
          faBody: "اعتماد به شریک بیرونی نباید بر وعده یا شهرت بنا شود. پایلوت محدود اجازه می‌دهد بانک قابلیت فنی، رفتار عملیاتی و کیفیت همکاری را در دامنه‌ای کنترل‌شده بسنجد. پایلوت خوب باید معیار موفقیت، داده مجاز، سطح دسترسی، برنامه خروج و مسئول حادثه را مشخص کند."
        },
        {
          title: "Parallel architecture proves value in crisis",
          faTitle: "معماری موازی در بحران ارزش خود را نشان می‌دهد",
          body: "When the main banking route is impaired, a credit platform or complementary service may preserve part of the customer’s essential need. It is not a full replacement for the bank; its value is preserving a minimum outcome.",
          faBody: "وقتی مسیر اصلی بانکی مختل می‌شود، یک پلتفرم اعتباری یا خدمت مکمل ممکن است بخشی از نیاز ضروری مشتری را پوشش دهد. این ظرفیت به معنای جایگزینی کامل بانک نیست. ارزش آن در حفظ حداقل نتیجه است."
        },
        {
          title: "Final responsibility cannot be outsourced",
          faTitle: "مسئولیت نهایی قابل‌برون‌سپاری نیست",
          body: "The bank may outsource execution, but remains accountable to customers and regulators. Contracts should cover crisis mode, service level, incident reporting, data ownership, security and exit rights.",
          faBody: "بانک می‌تواند اجرا را به شریک واگذار کند، اما در برابر مشتری و رگولاتور همچنان پاسخ‌گوست. قرارداد باید وضعیت بحران، سطح خدمت، گزارش رخداد، مالکیت داده، امنیت و حق خروج را پوشش دهد. برنامه تداوم شریک نیز باید قابل‌ارزیابی باشد."
        },
        {
          title: "Test distributed technology against a real problem",
          faTitle: "فناوری توزیع‌شده را با مسئله واقعی بسنجید",
          body: "Distributed architectures and blockchain can reduce concentration in some services, but should not be chosen for novelty. The use case must be limited and explicit: data registration, credit, settlement or a service that truly benefits from distributed responsibility.",
          faBody: "معماری‌های توزیع‌شده و بلاکچین می‌توانند در برخی خدمات تمرکز را کاهش دهند، اما نباید صرفاً به‌دلیل جذابیت فناوری انتخاب شوند. کاربرد باید محدود و روشن باشد: ثبت داده، اعتبار، تسویه یا خدمتی که از توزیع مسئولیت مزیت واقعی می‌گیرد."
        },
        {
          title: "Ecosystem continuity needs output-based cooperation",
          faTitle: "تداوم اکوسیستم به همکاری خروجی‌محور نیاز دارد",
          body: "Events and memoranda do not create readiness by themselves. Banks, technology companies and fintechs need to turn shared issues such as security, resilience and new technologies into scenarios, practical standards and pilots.",
          faBody: "بانک‌ها، شرکت‌های فناوری و فین‌تک‌ها در رویدادها کنار هم قرار می‌گیرند، اما همکاری زمانی ارزش دارد که خروجی مشخص تولید کند. برای مسائل مشترک مانند امنیت، تاب‌آوری و فناوری‌های جدید، بازیگران باید دوره‌ای تجربه‌ها را به سناریو، استاندارد عملی و پایلوت تبدیل کنند."
        },
        {
          title: "From absolute distrust to controlled cooperation",
          faTitle: "از بی‌اعتمادی مطلق تا همکاری قابل‌کنترل",
          body: "Controlled trust is not a weak compromise; it is a continuity architecture. It lets the bank use external expertise and complementary paths, reduce concentration and still preserve responsibility for the critical service.",
          faBody: "بانک نباید برای حفظ کنترل، خود را از نوآوری و ظرفیت بازار جدا کند. فین‌تک نیز نباید دسترسی به بانک را مجوزی برای رشد بدون حاکمیت بداند. اعتماد کنترل‌شده یک مصالحه ضعیف نیست؛ یک معماری تداوم است."
        }
      ],
      faq: []
    },
    humanSinglePointsOfFailure: {
      nav: "insights",
      label: "Article / Ali Akhavan",
      title: "Human Single Points of Failure",
      faTitle: "نقطه شکست انسانی؛ وقتی عملیات به یک نفر وابسته است",
      lede: "Some continuity risks are hidden in people, signatures, relationships and tacit knowledge. The answer is not holding people in place, but turning personal capability into organizational capability.",
      faLede: "نقاط شکست کسب‌وکار همیشه در دیتاسنتر و شبکه پنهان نشده‌اند. گاهی یک پرداخت، یک ارتباط مشتری یا بازیابی یک سامانه به حضور یک فرد وابسته است؛ راه‌حل، تبدیل دانش، اختیار و رابطه شخصی به قابلیت سازمانی است.",
      meta: ["Human continuity", "August 2026", "Ali Akhavan"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Do not confuse key people with critical roles",
          faTitle: "افراد کلیدی را با نقش حیاتی اشتباه نگیریم",
          body: "Continuity risk appears when the absence of one person stops a service outcome. Analysis should start from the role: what decision the person makes, what knowledge they hold, which systems they can access and which relationships flow only through them.",
          faBody: "هر سازمان افراد توانمند دارد، اما مسئله تداوم زمانی شکل می‌گیرد که نبود یک فرد نتیجه خدمت را متوقف کند. تحلیل باید از نقش آغاز شود: این فرد چه تصمیمی می‌گیرد، چه دانشی دارد، به کدام سامانه دسترسی دارد و چه رابطه‌ای فقط از طریق او جریان پیدا می‌کند."
        },
        {
          title: "Do not underestimate simple bottlenecks",
          faTitle: "گلوگاه‌های ساده را دست‌کم نگیرید",
          body: "Banking and financial processes may depend on manual signatures or named approvers. No technical system has failed, but payroll, merchant settlement or supplier payment can stop if the authorized person is unavailable.",
          faBody: "فرایندهای بانکی و مالی ممکن است به امضای دستی یا حضور صاحبان امضا وابسته باشند. اگر یکی در دسترس نباشد، پرداخت حقوق، تسویه پذیرنده یا تأمین‌کننده متوقف می‌شود. از نظر فنی هیچ سامانه‌ای خراب نشده، اما عملیات حیاتی جریان ندارد."
        },
        {
          title: "Succession is a transfer, not an event",
          faTitle: "جانشینی یک رویداد نیست؛ یک انتقال است",
          body: "Founder migration or the exit of a key person does not have to end the business if the transition is planned. The transfer must include knowledge, formal authority, operational access, relationships and the logic behind past decisions.",
          faBody: "مهاجرت یا خروج بنیان‌گذار الزاماً پایان کسب‌وکار نیست. اگر خروج برنامه‌ریزی شود، فرد جایگزین انتخاب گردد و انتقال تدریجی انجام شود، وابستگی کاهش می‌یابد. انتقال فقط فایل و رمز نیست؛ جانشین باید دانش، اختیار، رابطه و منطق تصمیم‌های گذشته را دریافت کند."
        },
        {
          title: "Documentation without practice is not enough",
          faTitle: "مستندسازی بدون تمرین کافی نیست",
          body: "A document is useful only when someone other than the author can execute the process. The replacement should run the process end to end while the original owner observes, so gaps in access, context and tacit knowledge become visible.",
          faBody: "سازمان ممکن است مستندات کامل داشته باشد، اما هیچ‌کس جز نویسنده نتواند از آن استفاده کند. آزمون ساده این است که فرد جایگزین یک بار فرایند را از ابتدا تا انتها اجرا کند و فرد اصلی فقط مشاهده‌گر باشد. این تمرین نقاط مبهم، دسترسی‌های ناقص و دانش ضمنی را آشکار می‌کند."
        },
        {
          title: "Security and continuity are not natural enemies",
          faTitle: "امنیت با تداوم تعارض ذاتی ندارد",
          body: "Concentrated access may have been designed for control. The answer is not uncontrolled distribution, but layered controls: separation of duties, event logging, two-step approval and time-bound emergency access.",
          faBody: "گاهی تمرکز دسترسی برای کنترل امنیت ایجاد شده است. پاسخ، بازگشت به وابستگی تک‌نفره نیست؛ طراحی کنترل چندلایه است. تفکیک وظایف، ثبت رویداد، تأیید دو مرحله‌ای و دسترسی اضطراری زمان‌دار می‌توانند هم امنیت و هم تداوم را حفظ کنند."
        },
        {
          title: "Crisis communication also depends on people",
          faTitle: "ارتباطات بحران نیز به افراد وابسته می‌شود",
          body: "Customer messages cannot wait for one manager or one public-relations owner. The primary owner, replacement, base messages and publishing channels should be known before the crisis.",
          faBody: "در روز بحران، پیام مشتری نمی‌تواند منتظر حضور یک مدیر یا روابط عمومی خاص بماند. مسئول اصلی، جانشین، پیام‌های پایه و کانال انتشار باید از قبل روشن باشند. در صنعت مالی، مشتری می‌خواهد بداند دارایی امن است، کدام خدمت محدود شده و مسیر بازگشت چیست."
        },
        {
          title: "From hero to organization",
          faTitle: "از قهرمان به سازمان",
          body: "Strong people are a major continuity asset, but dependence on a hero does not create continuity. The organization should use individual capability to build memory, successors and structure.",
          faBody: "افراد توانمند مهم‌ترین فرصت سازمان برای عبور از بحران‌اند، اما اتکا به قهرمان تداوم ایجاد نمی‌کند. هدف این نیست که افراد بی‌اهمیت شوند؛ هدف این است که خروج طبیعی یک فرد، خدمت حیاتی را نابود نکند."
        }
      ],
      faq: []
    },
    bankingServiceChainContinuity: {
      nav: "insights",
      label: "Article / Ali Akhavan",
      title: "Banking Service Chain Continuity",
      faTitle: "تداوم بانک در زنجیره خدمت؛ شریک هم بخشی از سرویس است",
      lede: "A bank can keep its internal systems stable and still fail to deliver the expected customer outcome because today’s banking service is produced across a chain of partners.",
      faLede: "بانک ممکن است دیتاسنتر، شعبه و سامانه داخلی خود را پایدار نگه دارد و باز هم نتواند خدمت مورد انتظار مشتری را ارائه کند؛ چون خدمت بانکی امروز داخل مرز سازمان تولید نمی‌شود.",
      meta: ["Service chain continuity", "August 2026", "Ali Akhavan"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "From supplier list to dependency map",
          faTitle: "از فهرست تأمین‌کننده به نقشه وابستگی",
          body: "Contracts and SLAs do not equal dependency knowledge. For every critical service, the bank should know which partner, system and network sits in the path and what customer outcome fails when each one stops.",
          faBody: "وجود قرارداد و SLA به معنای شناخت وابستگی نیست. بانک باید برای هر خدمت حیاتی بداند کدام شریک، سامانه و شبکه در مسیر قرار دارد و خرابی هرکدام چه نتیجه‌ای برای مشتری ایجاد می‌کند. دو شریک متفاوت که به یک اپراتور یا سامانه هویتی واحد وابسته‌اند، جایگزین واقعی یکدیگر نیستند."
        },
        {
          title: "Define critical service by customer outcome",
          faTitle: "خدمت حیاتی را با نتیجه مشتری تعریف کنید",
          body: "The starting point is not a systems list. The bank should define the customer outcome that must not disappear: balance view, withdrawal, transfer, payment, cheque service, password delivery or transaction notification.",
          faBody: "نقطه شروع، فهرست سامانه‌ها نیست. بانک باید مشخص کند مشتری چه نتیجه‌ای را نباید از دست بدهد: مشاهده موجودی، برداشت، انتقال وجه، پرداخت، خدمت چک، دریافت رمز یا اطلاع تراکنش. برای هر نتیجه باید حداقل سطح عملیات، توقف قابل‌تحمل، وابستگی‌ها، مسیر جایگزین و مالک تصمیم روشن باشد."
        },
        {
          title: "Evaluate partner continuity, not only daily quality",
          faTitle: "تداوم شریک را ارزیابی کنید، نه فقط کیفیت روزمره را",
          body: "A partner may perform well in normal conditions but lack a credible plan for wide disruption. Assessment should look beyond SLA into alternate sites, crisis teams, external dependencies, financial condition and customer communication capacity.",
          faBody: "شرکتی ممکن است در شرایط عادی سرویس خوبی بدهد، اما هیچ برنامه معتبری برای اختلال گسترده نداشته باشد. ارزیابی باید از SLA عبور کند و درباره سایت جایگزین، تیم بحران، وابستگی‌های بیرونی، وضعیت مالی و توان ارتباط با مشتری سؤال کند."
        },
        {
          title: "The fallback must be independent of the main failure",
          faTitle: "مسیر جایگزین باید از نقطه شکست اصلی مستقل باشد",
          body: "Alternative payment rails, wallets, limited direct connections or defined subnetworks can preserve part of the operation in some scenarios, but only when rules, settlement, responsibility, security and service caps are designed and tested beforehand.",
          faBody: "وابستگی شدید به یک شبکه سراسری مزیت مقیاس ایجاد می‌کند، اما دامنه اختلال را نیز بزرگ می‌کند. پرداخت مبتنی بر حساب، کیف پول، ارتباط محدود مستقیم یا زیرشبکه‌های مشخص می‌توانند در بعضی سناریوها بخشی از عملیات را حفظ کنند؛ اما قواعد تسویه، مسئولیت، امنیت و سقف خدمت باید از قبل تعریف و آزمایش شوند."
        },
        {
          title: "Trust is also a shared dependency",
          faTitle: "اعتماد نیز یک وابستگی مشترک است",
          body: "A disruption at one financial actor can lower confidence in the whole market. The bank and partner should know in advance who speaks, how asset safety is explained and how recovery stages are announced.",
          faBody: "اختلال یک بازیگر مالی می‌تواند اعتماد به کل بازار را کاهش دهد. حتی خبر ناقص درباره مجوز یا امنیت دارایی ممکن است رفتار هیجانی ایجاد کند. بانک و شریک باید پیشاپیش بدانند چه کسی درباره حادثه سخن می‌گوید، وضعیت دارایی چگونه توضیح داده می‌شود و مراحل بازگشت چگونه اعلام می‌شوند."
        },
        {
          title: "New technology does not replace chain governance",
          faTitle: "فناوری جدید جایگزین حاکمیت زنجیره نیست",
          body: "AI may detect signals earlier and blockchain may distribute some risks, but neither replaces responsibility, process and legal rules. Every technology should show which dependency it reduces and which new dependency it creates.",
          faBody: "هوش مصنوعی می‌تواند نشانه اختلال را زودتر تشخیص دهد و بلاکچین می‌تواند بعضی ریسک‌ها را توزیع کند. اما هیچ‌کدام جای تعریف مسئولیت، فرایند و قواعد حقوقی را نمی‌گیرند. کاربرد فناوری باید نشان دهد کدام وابستگی را کاهش می‌دهد و چه وابستگی تازه‌ای ایجاد می‌کند."
        },
        {
          title: "The bank manages the final outcome",
          faTitle: "بانک، مدیر نتیجه نهایی است",
          body: "Execution can be outsourced, but customer accountability cannot. Banking continuity starts inside the organization, but it ends only when the partner capacity, shared dependencies and fallback path of the customer outcome are known and rehearsed.",
          faBody: "بخشی از اجرا قابل‌برون‌سپاری است، اما پاسخ‌گویی بانک در برابر مشتری قابل‌انتقال نیست. تداوم بانکی از درون سازمان آغاز می‌شود، اما در همان‌جا تمام نمی‌شود. وقتی خدمت در یک زنجیره ساخته می‌شود، آمادگی نیز باید زنجیره‌ای باشد."
        }
      ],
      faq: []
    },
    nextCapitalNeverArrives: {
      nav: "insights",
      label: "Article / Ali Akhavan",
      title: "When the Next Capital Never Arrives",
      faTitle: "اگر سرمایه بعدی نرسد؛ سناریوی فراموش‌شده تداوم استارتاپ",
      lede: "Startups need continuity scenarios for stalled capital, sudden market change and business-model redesign before cash pressure removes their choices.",
      faLede: "استارتاپ باید پیش از آن‌که فشار نقدینگی امکان انتخاب را از بین ببرد، برای توقف سرمایه، تغییر بازار و بازطراحی مدل کسب‌وکار سناریوی تداوم داشته باشد.",
      meta: ["Startup continuity", "August 2026", "Ali Akhavan"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Continuity cannot depend on the next round",
          faTitle: "تداوم نباید به دور بعدی سرمایه وابسته باشد",
          body: "For a startup, the most dangerous continuity assumption may be that the next round of funding will arrive on time. When capital, market timing or investor appetite changes, the organization discovers whether it has a real continuity model or only a growth story.",
          faBody: "برای یک استارتاپ، خطرناک‌ترین فرض تداوم می‌تواند این باشد که دور بعدی سرمایه به‌موقع می‌رسد. وقتی سرمایه، زمان بازار یا میل سرمایه‌گذار تغییر می‌کند، سازمان می‌فهمد مدل تداوم دارد یا فقط داستان رشد."
        },
        {
          title: "Future commitment is not current liquidity",
          faTitle: "تعهد آینده، نقدینگی امروز نیست",
          body: "A promised investment, verbal interest or positive meeting cannot pay salaries, preserve service or keep key people. Continuity planning must treat uncertain future capital as a scenario, not as operational cash.",
          faBody: "سرمایه وعده‌داده‌شده، علاقه شفاهی یا جلسه مثبت، حقوق، سرویس و نیروی کلیدی را نگه نمی‌دارد. برنامه تداوم باید سرمایه آینده را سناریو بداند، نه نقدینگی عملیاتی."
        },
        {
          title: "Runway is not only a number",
          faTitle: "Runway فقط یک عدد نیست",
          body: "Runway should describe which services continue, which experiments stop, which costs are reversible and which commitments must be protected. A month count without service priorities hides the decisions that will actually preserve the company.",
          faBody: "Runway باید نشان دهد کدام سرویس ادامه می‌یابد، کدام آزمایش متوقف می‌شود، کدام هزینه قابل بازگشت است و کدام تعهد باید حفظ شود. تعداد ماه بدون اولویت خدمت، تصمیم‌های واقعی حفظ شرکت را پنهان می‌کند."
        },
        {
          title: "Sometimes the market changes the question",
          faTitle: "گاهی بازار، صورت‌مسئله را عوض می‌کند",
          body: "Continuity is not only surviving until the original plan works. Sometimes the market changes, and the organization must preserve enough optionality to redesign product, revenue model or customer segment.",
          faBody: "تداوم فقط زنده‌ماندن تا اجرای طرح اولیه نیست. گاهی بازار عوض می‌شود و سازمان باید آن‌قدر امکان انتخاب حفظ کند که محصول، مدل درآمد یا بخش مشتری را بازطراحی کند."
        },
        {
          title: "Continuity means preserving choice",
          faTitle: "تداوم، حفظ امکان انتخاب است",
          body: "A startup in crisis succeeds when it keeps enough people, trust, data and decision speed to choose deliberately instead of accepting the only path left by cash pressure.",
          faBody: "استارتاپ در بحران زمانی موفق است که به اندازه کافی نیرو، اعتماد، داده و سرعت تصمیم حفظ کند تا انتخاب کند، نه این‌که تنها مسیر باقی‌مانده از فشار نقدینگی را بپذیرد."
        }
      ],
      faq: []
    },
    threeLayerBcmOperatingModel: {
      nav: "insights",
      label: "Article / Alireza Bozorgmehri",
      title: "The Three-Layer BCM Operating Model",
      faTitle: "مدل سه‌لایه BCM؛ چرا فناوری باید آخرین انتخاب باشد؟",
      lede: "BCM implementation should begin with governance and critical services, continue through service management and only then select technology.",
      faLede: "پیاده‌سازی مدیریت تداوم کسب‌وکار باید از حاکمیت و سرویس حیاتی آغاز شود، با مدیریت خدمات ادامه یابد و سپس به فناوری برسد.",
      meta: ["BCM operating model", "August 2026", "Alireza Bozorgmehri"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "BCM should not begin with buying tools",
          faTitle: "BCM نباید با خرید ابزار آغاز شود",
          body: "Many organizations start continuity work by buying software, recovery tools or infrastructure. Tools are useful only when the organization has already defined critical services, ownership, decision rights and tolerable degradation.",
          faBody: "بسیاری از سازمان‌ها کار تداوم را با خرید نرم‌افزار، ابزار بازیابی یا زیرساخت آغاز می‌کنند. ابزار زمانی مفید است که سازمان پیش‌تر خدمت حیاتی، مالکیت، اختیار تصمیم و افت قابل‌تحمل را تعریف کرده باشد."
        },
        {
          title: "Layer one: strategy and governance",
          faTitle: "لایه اول: راهبرد و حاکمیت",
          body: "The first layer defines what must continue, who owns the decision and what level of disruption is acceptable. Without governance, BCM becomes a collection of technical activities without business authority.",
          faBody: "لایه اول مشخص می‌کند چه چیزی باید ادامه یابد، مالک تصمیم کیست و چه سطحی از اختلال قابل‌قبول است. بدون حاکمیت، BCM به مجموعه‌ای از فعالیت‌های فنی بدون اختیار کسب‌وکاری تبدیل می‌شود."
        },
        {
          title: "Layer two: service management",
          faTitle: "لایه دوم: مدیریت خدمات",
          body: "The second layer connects critical services to processes, people, suppliers, SLAs and customer outcomes. It turns continuity from a document into an operating responsibility.",
          faBody: "لایه دوم سرویس‌های حیاتی را به فرایندها، افراد، تأمین‌کنندگان، SLAها و نتیجه مشتری وصل می‌کند. این لایه تداوم را از سند به مسئولیت عملیاتی تبدیل می‌کند."
        },
        {
          title: "Layer three: technology and tools",
          faTitle: "لایه سوم: فناوری و ابزار",
          body: "Technology comes last because it should serve a defined continuity architecture. Once service priorities and governance are clear, tools can support monitoring, recovery, evidence and communication.",
          faBody: "فناوری در مرحله آخر می‌آید، چون باید در خدمت معماری تداوم تعریف‌شده باشد. وقتی اولویت خدمت و حاکمیت روشن است، ابزار می‌تواند پایش، بازیابی، شواهد و ارتباطات را پشتیبانی کند."
        },
        {
          title: "Start from the top",
          faTitle: "از بالا شروع کنید",
          body: "A practical BCM program begins with board-level intent, executive ownership and critical-service definition. It then moves into service management and finally into technology selection.",
          faBody: "برنامه عملی BCM از اراده سطح هیئت‌مدیره، مالکیت اجرایی و تعریف سرویس حیاتی شروع می‌شود؛ سپس وارد مدیریت خدمات و در نهایت انتخاب فناوری می‌شود."
        }
      ],
      faq: []
    },
    itsmOneBrainForManyEyes: {
      nav: "insights",
      label: "Article / Alireza Bozorgmehri",
      title: "ITSM: One Brain for Many Eyes",
      faTitle: "ITSM؛ یک مغز برای چشم‌های متعدد بانک",
      lede: "Banks do not lack monitoring eyes. They need a shared operational brain that connects technical signals to service maps, incidents, SLAs and business impact.",
      faLede: "بانک‌ها معمولاً کمبود ابزار پایش ندارند؛ مسئله تعداد چشم‌ها نیست، نبود مغزی است که اطلاعات آن‌ها را کنار هم بگذارد و داده فنی را به نقشه سرویس، رخداد، قرارداد و اثر کسب‌وکاری متصل کند.",
      meta: ["IT service management", "August 2026", "Alireza Bozorgmehri"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Technical alert is not the same as service incident",
          faTitle: "هشدار فنی با رخداد خدمت یکسان نیست",
          body: "A banking service may depend on databases, virtual machines, servers, switches, firewalls and applications. A red component does not always mean service failure, and a green dashboard does not guarantee the customer outcome.",
          faBody: "یک سرویس بانکی ممکن است به پایگاه داده، ماشین مجازی، سرور، سوئیچ، فایروال و چند نرم‌افزار وابسته باشد. قرمزشدن هر جزء الزاماً توقف خدمت نیست و سبزبودن یک داشبورد نیز سلامت نتیجه نهایی را تضمین نمی‌کند. Service Map نشان می‌دهد هر دارایی در کدام خدمت نقش دارد و خرابی آن چه اثری ایجاد می‌کند."
        },
        {
          title: "From diagnosis to automatic action",
          faTitle: "از تشخیص تا اقدام خودکار",
          body: "Integrated service management is not only a status display. Once disruption is detected, the incident should be registered, classified and routed to the right team based on assets, contracts, calendars and on-call responsibility.",
          faBody: "مدیریت یکپارچه خدمات فقط نمایش وضعیت نیست. به‌محض تشخیص اختلال، رخداد باید ثبت، طبقه‌بندی و به تیم مناسب ارجاع شود. سامانه با شناخت دارایی، قرارداد، تقویم کاری و فرد On-call می‌تواند گردش‌کار را پیش از تماس مشتری فعال کند."
        },
        {
          title: "SLA needs operational data",
          faTitle: "SLA باید داده عملیاتی داشته باشد",
          body: "Service-level agreements can be managed only when incident start, response and resolution times are captured by the system. Monitoring connected to ITSM turns downtime into accountable operational and contractual evidence.",
          faBody: "توافق سطح خدمت زمانی قابل‌مدیریت است که زمان آغاز، پاسخ و رفع رخداد به‌صورت سیستمی ثبت شود. اتصال مانیتورینگ به ITSM اجازه می‌دهد زمان واقعی و اثر توقف ثبت و در فرایند قراردادی و مالی استفاده شود."
        },
        {
          title: "The management tool must not become a vulnerability",
          faTitle: "ابزار مدیریت نباید خودش نقطه آسیب‌پذیری باشد",
          body: "A tool that acts as the operational brain must be assessed for security, scale, compliance and continuity. General work-management software can help, but ITSM requires a coherent model across assets, incidents, changes, SLAs, suppliers and service maps.",
          faBody: "استفاده از نسخه قدیمی، بدون پشتیبانی یا ارزیابی‌نشده برای سامانه‌ای که قرار است مغز عملیات باشد، ریسک جدی است. دارایی، رخداد، تغییر، SLA، تأمین‌کننده و نقشه سرویس باید در یک مدل منسجم قرار گیرند."
        },
        {
          title: "Scattered data does not create prediction",
          faTitle: "داده پراکنده، پیش‌بینی نمی‌سازد",
          body: "Organizations produce large volumes of data, but separated security logs, network incidents, changes and service information keep response dependent on memory and manual search. Prediction needs data with service context.",
          faBody: "سازمان‌ها داده زیادی تولید می‌کنند، اما وقتی لاگ امنیت، رخداد شبکه، تغییرات و اطلاعات سرویس در سامانه‌های جدا باشند، تحلیل ترکیبی دشوار می‌شود. هوش مصنوعی در اینجا فقط وقتی مفید است که داده‌ها زمینه سرویس داشته باشند."
        },
        {
          title: "Seeing, understanding and acting",
          faTitle: "دیدن، فهمیدن و عمل‌کردن",
          body: "Mature operations connect three capabilities: seeing all effective components, understanding incident impact and acting with speed and clear responsibility. Monitoring mainly provides the first; ITSM should bridge all three.",
          faBody: "یک عملیات بالغ سه قابلیت را به هم متصل می‌کند: دیدن همه اجزای مؤثر، فهمیدن اثر رخداد و عمل‌کردن با سرعت و مسئولیت روشن. ابزار پایش عمدتاً قابلیت اول را فراهم می‌کند. ITSM باید میان هر سه پل بزند."
        },
        {
          title: "From incident center to service command center",
          faTitle: "از مرکز رخداد به مرکز فرماندهی خدمت",
          body: "The goal of ITSM is not closing more tickets. It should help the organization manage critical services by reducing detection and recovery time, fulfilling SLAs and limiting customer impact.",
          faBody: "هدف نهایی ITSM بستن Ticket بیشتر نیست. باید سازمان را قادر کند خدمت حیاتی را مدیریت کند. معیار موفقیت، کاهش زمان تشخیص و بازیابی، تحقق SLA و محدودشدن اثر مشتری است."
        }
      ],
      faq: []
    },
    serviceGranularityResilience: {
      nav: "insights",
      label: "Article / Farhad Inaloui",
      title: "Service Granularity and Digital Banking Resilience",
      faTitle: "ریزدانگی سرویس؛ معماری تاب‌آوری بانک دیجیتال",
      lede: "Service separation, owning teams and decision rights must be designed together if a digital bank wants to contain failure instead of spreading it.",
      faLede: "جداسازی سرویس، تیم مالک و اختیار تصمیم باید با هم طراحی شوند تا بانک دیجیتال خرابی را مهار کند، نه اینکه آن را گسترش دهد.",
      meta: ["Digital banking resilience", "August 2026", "Farhad Inaloui"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "The unit of continuity is the service",
          faTitle: "واحد تداوم، سرویس است",
          body: "In a traditional bank, card, deposit or core banking systems can become large blocks that are either available together or fail widely. A service-oriented view asks which capability is damaged, who depends on it and which parts can remain healthy.",
          faBody: "در بانک سنتی، سامانه‌های کارت، سپرده یا Core Banking ممکن است به بلوک‌های بزرگی تبدیل شوند که یا با هم در دسترس‌اند یا گسترده متوقف می‌شوند. نگاه سرویس‌محور می‌پرسد کدام قابلیت آسیب دیده، چه کسانی به آن وابسته‌اند و چه بخش‌هایی سالم می‌مانند."
        },
        {
          title: "Microservices are not the goal",
          faTitle: "Microservices هدف نیست؛ امکان مهار است",
          body: "Microservices create continuity value only when they reduce the boundary of failure. Excessive fragmentation can increase operational complexity. The right granularity gives core services independent boundaries, visible dependencies and testable recovery paths.",
          faBody: "معماری Microservices زمانی برای تداوم ارزش دارد که مرز خرابی را کوچک کند. خردکردن افراطی می‌تواند پیچیدگی عملیات را بالا ببرد. ریزدانگی درست برای سرویس‌های اصلی مرز مستقل، وابستگی روشن و مسیر بازیابی قابل‌آزمون می‌سازد."
        },
        {
          title: "The organization must match the architecture",
          faTitle: "سازمان باید با معماری هم‌دانه شود",
          body: "A small service with a long approval chain is not independent in practice. Service teams need technology, security, business and legal authority close enough to contain incidents quickly and visibly.",
          faBody: "سرویس کوچک با زنجیره تصویب طولانی در عمل مستقل نیست. تیم سرویس باید فناوری، امنیت، کسب‌وکار و اختیار حقوقی را آن‌قدر نزدیک داشته باشد که حادثه را سریع و شفاف مهار کند."
        },
        {
          title: "Broad shutdown creates secondary risk",
          faTitle: "قطع گسترده، ریسک ثانویه می‌سازد",
          body: "Stopping every external connection may look safe, but it can disable healthy apps and fintech partners. The crisis team needs to know which dependency is uncertain and which route can continue with tighter controls.",
          faBody: "توقف همه ارتباطات بیرونی ممکن است امن به نظر برسد، اما می‌تواند اپلیکیشن‌ها و فین‌تک‌های سالم را هم از کار بیندازد. تیم بحران باید بداند کدام وابستگی نامطمئن است و کدام مسیر با کنترل بیشتر می‌تواند ادامه یابد."
        },
        {
          title: "A simple test for resilient architecture",
          faTitle: "آزمون ساده معماری تاب‌آور",
          body: "For each critical service, ask what else stops if it fails, which team owns the customer result, who can limit or reroute the service and whether that decision has been exercised.",
          faBody: "برای هر سرویس حیاتی بپرسید اگر این سرویس آسیب دید چه چیز دیگری متوقف می‌شود، چه تیمی مالک نتیجه مشتری است، چه کسی اختیار محدودسازی یا تغییر مسیر دارد و آیا این تصمیم در مانور آزموده شده است."
        }
      ],
      faq: []
    },
    serviceCatalogOperatingModel: {
      nav: "insights",
      label: "Article / Farhad Inaloui",
      title: "Service Catalog as the Operating Model",
      faTitle: "Service Catalog؛ نقطه شروع تداوم سرویس‌محور",
      lede: "Service Catalog is not a decorative list or an IT-only output. It is a shared operating model connecting business, technology, security, operations and customer experience at the service level.",
      faLede: "Service Catalog یک فهرست تزئینی یا خروجی واحد فناوری نیست؛ مدل عملیاتی مشترکی است که کسب‌وکار، فناوری، امنیت، عملیات و تجربه مشتری را در سطح یک خدمت به هم متصل می‌کند.",
      meta: ["Service catalog", "August 2026", "Farhad Inaloui"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "From asset to customer outcome",
          faTitle: "از دارایی به نتیجه مشتری",
          body: "Traditional readiness asks about data centers, generators, backups and procedures. A service-oriented view adds another question: which customer outcome does this asset support, and what happens to that outcome when the asset fails?",
          faBody: "رویکرد سنتی از زیرساخت می‌پرسد چند سایت داریم، برق اضطراری چگونه تأمین می‌شود و آخرین Restore چه زمانی انجام شده است. رویکرد سرویس‌محور یک سؤال دیگر اضافه می‌کند: خرابی این دارایی، کدام نتیجه مشتری را مختل می‌کند؟"
        },
        {
          title: "A record that should create decisions",
          faTitle: "شناسنامه‌ای که باید تصمیم بسازد",
          body: "Each service record should connect business owner, technical owner, customers, dependencies, importance, impact tolerance, escalation path, decision authority, past incidents and minimum continuation or recovery scenarios.",
          faBody: "برای هر سرویس باید مالک کسب‌وکاری و مسئول فنی، مصرف‌کنندگان، نتیجه مورد انتظار مشتری، سامانه‌ها، داده‌ها، تیم‌ها و تأمین‌کنندگان وابسته، درجه اهمیت، مدت قابل‌تحمل اختلال، مسیر Escalation، صاحبان اختیار، تغییرات مهم، رخدادهای گذشته و سناریوی ادامه حداقلی و بازیابی ثبت شود."
        },
        {
          title: "Not all services have the same priority",
          faTitle: "همه سرویس‌ها اولویت یکسان ندارند",
          body: "A bank cannot recover dozens of services at the same time with the same investment level. Payment, card, deposit, lending and identity services do not have identical impact or tolerance windows.",
          faBody: "بانکی با ده‌ها خدمت حیاتی نمی‌تواند همه را هم‌زمان و با یک سطح سرمایه‌گذاری بازیابی کند. پرداخت، کارت، سپرده، تسهیلات و احراز هویت اثر و زمان تحمل یکسانی ندارند. اگر همه‌چیز حیاتی اعلام شود، در عمل هیچ اولویتی وجود ندارد."
        },
        {
          title: "A catalog without scenarios is only inventory",
          faTitle: "کاتالوگ بدون سناریو، موجودی اطلاعات است",
          body: "Recording information is not the end. Each important service needs tested scenarios for supplier loss, suspicious data, missing owners, degraded operation and recovery authority.",
          faBody: "ثبت اطلاعات پایان کار نیست. برای هر سرویس مهم باید سناریو نوشته و تمرین شود: اگر تأمین‌کننده در دسترس نبود چه می‌کنیم؟ اگر بخشی از داده مشکوک بود چه محدوده‌ای را جدا می‌کنیم؟ اگر مالک اصلی پاسخ نداد، اختیار به چه کسی منتقل می‌شود؟"
        },
        {
          title: "The contact center is a customer-impact sensor",
          faTitle: "مرکز تماس، حسگر اثر مشتری است",
          body: "The contact center should know the affected service, approved message, fallback path and allowed promise. Customer contact patterns can also reveal the true impact earlier than some technical dashboards.",
          faBody: "مرکز تماس نباید آخرین دریافت‌کننده پیام بحران باشد. در زمان اختلال، مرکز تماس باید بداند کدام خدمت دچار مشکل است، پیام تأییدشده چیست، چه راه جایگزینی وجود دارد و چه وعده‌ای مجاز است. الگوی تماس مشتریان می‌تواند دامنه واقعی اثر را زودتر از برخی داشبوردهای فنی نشان دهد."
        },
        {
          title: "More committees do not mean more integration",
          faTitle: "کمیته بیشتر، یکپارچگی بیشتر نیست",
          body: "Security, risk, technology and business each have their own committees and language. Integration should form around the service, using one shared picture of ownership, dependency and impact.",
          faBody: "امنیت، ریسک، فناوری و کسب‌وکار هرکدام کمیته و زبان خود را دارند. افزودن کمیته‌ای تازه لزوماً این جزیره‌ها را به هم متصل نمی‌کند. سازوکار یکپارچه باید حول سرویس شکل بگیرد و یک تصویر مشترک از مالکیت، وابستگی و اثر بسازد."
        },
        {
          title: "The practical starting point",
          faTitle: "نقطه شروع اجرایی",
          body: "A bank does not need to document every service at once. It can start with a few truly critical services and build an accountable owner, dependency map, tolerance level, scenario exercise and correction loop for each.",
          faBody: "برای آغاز لازم نیست همه خدمات بانک یک‌باره مستندسازی شوند. می‌توان با چند خدمت واقعاً حیاتی شروع کرد و برای هرکدام یک مالک پاسخ‌گو، نقشه وابستگی، سطح تحمل و سناریوی مانور ساخت. چرخه اجرا روشن است: تعریف سرویس، تکمیل شناسنامه، تعیین اولویت، طراحی سناریو، مانور و اصلاح."
        }
      ],
      faq: []
    },
    ecosystemContinuityGovernance: {
      nav: "insights",
      label: "Article / Farhad Inaloui",
      title: "Ecosystem Continuity Governance",
      faTitle: "تداوم اکوسیستم مالی؛ از وابستگی تا تنظیم‌گری مشارکتی",
      lede: "Financial continuity is no longer the property of one organization. It is a chain capability whose dependencies, responsibilities and scenarios must be known and rehearsed together.",
      faLede: "تداوم دیگر خاصیت یک سازمان منفرد نیست؛ خاصیت زنجیره‌ای است که باید وابستگی‌هایش شناخته، مسئولیت‌هایش توافق و سناریوهایش مشترکاً آزموده شوند.",
      meta: ["Ecosystem continuity", "August 2026", "Farhad Inaloui"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Customers do not separate the source of failure",
          faTitle: "مشتری منشأ اختلال را تفکیک نمی‌کند",
          body: "If an external identity service fails, the customer often assigns the experience failure to the bank they use. Brand power transfers supplier disruption into bank trust risk.",
          faBody: "اگر یک سرویس هویتی بیرونی از دسترس خارج شود، مشتری معمولاً شکست تجربه را به نام بانکی ثبت می‌کند که از آن خدمت گرفته است. قدرت برند بانک باعث می‌شود اثر اختلال تأمین‌کننده به اعتماد بانک منتقل شود."
        },
        {
          title: "Service Catalog must cross organizational borders",
          faTitle: "Service Catalog باید از مرز سازمان عبور کند",
          body: "In the digital economy, bank infrastructure is only one layer of service production. The service record should cover external dependencies, contractual commitments, accountable owners and escalation paths for each partner.",
          faBody: "در معماری اقتصاد دیجیتال، زیرساخت بانک فقط یکی از لایه‌های تولید خدمت است. شناسنامه سرویس باید وابستگی بیرونی، تعهد قراردادی، مالک پاسخ‌گو و مسیر Escalation هر شریک را نیز پوشش دهد."
        },
        {
          title: "The regulator is part of continuity architecture",
          faTitle: "رگولاتور بخشی از معماری تداوم است",
          body: "A regulator can reduce risk, but can also shift disruption to healthy actors through broad decisions. Participatory regulation starts from the real service chain without removing oversight, clear rules or accountability.",
          faBody: "نهاد ناظر می‌تواند با یک تصمیم گسترده، ریسک را کاهش دهد یا دامنه اختلال را به بازیگران سالم منتقل کند. تنظیم‌گری مشارکتی به معنای حذف نظارت نیست؛ قواعد روشن، مسئولیت مشخص و برخورد با تخلف همچنان ضروری است، اما کنترل از شناخت زنجیره واقعی خدمت آغاز می‌شود."
        },
        {
          title: "Exercises should bring the whole chain onto the field",
          faTitle: "مانور باید کل زنجیره را وارد صحنه کند",
          body: "Training two technology or security specialists is not ecosystem readiness. Board members, business, legal, contact centers, contractors and external partners all have roles in real scenarios.",
          faBody: "آموزش دو کارشناس فناوری یا امنیت، آمادگی اکوسیستم نیست. هیئت‌مدیره، کسب‌وکار، حقوقی، مرکز تماس، پیمانکار و شرکای بیرونی در سناریوی واقعی نقش دارند. مانور باید دقت پیام رخداد، مالک تصمیم، ظرفیت مسیر جایگزین، ارتباط با مشتری و اثر تصمیم نهاد ناظر را آشکار کند."
        },
        {
          title: "A specialized resilience market",
          faTitle: "بازار تخصصی تاب‌آوری",
          body: "Banks do not need to build every tool and method from scratch. Specialized companies and RegTech providers can support service cataloging, dependency analysis, resilience monitoring, scenario testing and escalation automation.",
          faBody: "همه بانک‌ها لازم نیست ابزار و روش خود را از صفر بسازند. شرکت‌های تخصصی و RegTechها می‌توانند برای Service Catalog، تحلیل وابستگی، پایش تاب‌آوری، آزمون سناریو و اتوماسیون Escalation راهکار ارائه کنند. البته برون‌سپاری ابزار، مسئولیت را منتقل نمی‌کند."
        },
        {
          title: "Continuity needs multidimensional investment",
          faTitle: "تداوم به سرمایه‌گذاری چندبعدی نیاز دارد",
          body: "Resilience investment is not only hardware and software. Architecture, security, data, training, consulting, service management and exercises all create continuity capacity.",
          faBody: "سرمایه‌گذاری تاب‌آوری فقط خرید سخت‌افزار و نرم‌افزار نیست. معماری، امنیت، داده، آموزش، مشاوره، مدیریت سرویس و مانور نیز ظرفیت تداوم می‌سازند. مسئله نهایی این است که هیچ حلقه‌ای به‌تنهایی خدمت مالی را تولید نمی‌کند."
        }
      ],
      faq: []
    },
    portfolioResilience: {
      nav: "insights",
      label: "Article / Mohammad Farjood",
      title: "Portfolio Resilience",
      faTitle: "تاب‌آوری پرتفوی؛ جراحی مالی، توقف و خطوط پشتیبان",
      lede: "A resilient portfolio preserves choice by restructuring weak assets, stopping low-evidence projects and building small backup revenue lines before they are urgently needed.",
      faLede: "پرتفوی تاب‌آور با اصلاح ساختار، توقف پروژه‌های بی‌نتیجه و ساختن خطوط درآمدی کوچک پیش از نقطه اضطرار، قدرت انتخاب سازمان را حفظ می‌کند.",
      meta: ["Portfolio resilience", "August 2026", "Mohammad Farjood"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Hidden loss does not buy time",
          faTitle: "زیان پنهان، زمان نمی‌خرد",
          body: "Intangible assets, future revenue hopes and unfinished projects cannot replace real value flow. If the financial structure stays wrong, it consumes management capacity and capital that healthier lines need.",
          faBody: "دارایی نامشهود، امید به درآمد آینده یا پروژه نیمه‌تمام می‌تواند تصویر مسئله را موقتاً نرم کند، اما جریان واقعی ارزش را جایگزین نمی‌کند. اگر ساختار مالی نامناسب باقی بماند، منابع مدیریتی و سرمایه‌ای را می‌بلعد و رشد بخش‌های سالم را نیز متوقف می‌کند."
        },
        {
          title: "Past cost should not hold the future hostage",
          faTitle: "هزینه گذشته نباید آینده را گروگان بگیرد",
          body: "A project that has consumed time and capital does not automatically deserve the next capital. Each team needs a clear window, measurable evidence and a decision point: continue, pivot or stop.",
          faBody: "پروژه‌ای که زمان و سرمایه گرفته، الزاماً شایسته سرمایه بعدی نیست. برای تیم‌هایی که هنوز وارد بازار نشده‌اند باید یک بازه روشن، نتیجه قابل‌سنجش و نقطه تصمیم تعریف شود. در پایان بازه، سه انتخاب وجود دارد: ادامه با شواهد معتبر، تغییر مسیر با فرضیه تازه، یا توقف."
        },
        {
          title: "Build the backup line before need",
          faTitle: "خط پشتیبان را پیش از نیاز بسازید",
          body: "The main revenue line matters, but absolute dependence on it is a business single point of failure. Small related experiments can keep future options alive without becoming uncontrolled scatter.",
          faBody: "تمرکز روی خط اصلی درآمد ضروری است، اما وابستگی مطلق به آن، یک نقطه شکست کسب‌وکاری می‌سازد. چند آزمایش کوچک و مرتبط می‌توانند گزینه‌های آینده را زنده نگه دارند. هدف جمع‌آوری پروژه نیست؛ ساختن گزینه‌هایی است که در صورت تغییر قانون، بازار یا رفتار مشتری بتوانند بخشی از افت خط اصلی را جبران کنند."
        },
        {
          title: "Pivot is not denial of failure",
          faTitle: "Pivot انکار شکست نیست",
          body: "Attachment to the original model can make the organization fight a market that no longer exists. Changing architecture, target market or revenue model can be the rational response to growth or constraint.",
          faBody: "تعصب به مدل اولیه، سازمان را با شرایطی می‌جنگاند که دیگر وجود ندارند. تغییر معماری، بازار هدف یا مدل درآمدی می‌تواند پاسخ عقلانی به رشد یا محدودیت تازه باشد. بازطراحی زیرساخت در اینجا شکست نیست؛ هزینه طبیعی موفقیت و رشد است."
        },
        {
          title: "Continuity means preserving choice",
          faTitle: "تداوم یعنی حفظ قدرت انتخاب",
          body: "A resilient company is not one that never shuts anything down. It sees financial reality before being forced, moves resources out of weak paths and keeps alternatives for environmental change.",
          faBody: "شرکت تاب‌آور الزاماً شرکتی نیست که هیچ فعالیتی را تعطیل نمی‌کند. شرکتی است که پیش از اجبار، واقعیت مالی را می‌بیند؛ منابع را از مسیر بی‌نتیجه خارج می‌کند؛ و برای تغییر محیط، گزینه جایگزین دارد."
        }
      ],
      faq: []
    },
    growthInTurbulence: {
      nav: "insights",
      label: "Article / Mohammad Farjood",
      title: "Growth in Turbulence",
      faTitle: "رشد در دل آشوب؛ مدل مدیریتی تداوم کسب‌وکار",
      lede: "In turbulent conditions, growth comes from an organization that sees earlier, decides faster and adapts without clinging to the previous structure.",
      faLede: "رشد در آشوب از پیش‌بینی دقیق آینده نمی‌آید؛ از سازمانی می‌آید که زودتر می‌بیند، سریع‌تر تصمیم می‌گیرد و بدون تعصب به ساختار گذشته خود را اصلاح می‌کند.",
      meta: ["Adaptive growth", "August 2026", "Mohammad Farjood"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Infrastructure is necessary, but does not decide",
          faTitle: "زیرساخت لازم است، اما خودش تصمیم نمی‌گیرد",
          body: "Sanctions, currency allocation and procurement can limit even funded organizations. Management cannot remove every physical constraint, but can reduce the impact through priority, scenarios and acceptable alternatives.",
          faBody: "تحریم، تخصیص ارز و فرایند تأمین می‌توانند حتی سازمان دارای بودجه را از تجهیز مناسب محروم کنند. مدیریت خوب کمبود فیزیکی را حذف نمی‌کند، اما اثر آن را با اولویت، سناریو و گزینه جایگزین کاهش می‌دهد."
        },
        {
          title: "Human capital is operational capacity",
          faTitle: "سرمایه انسانی یک ظرفیت عملیاتی است",
          body: "Migration, wage distance and burnout can turn specialist talent into a single point of failure. Retention is not only HR work; it is part of service architecture.",
          faBody: "مهاجرت، فاصله دستمزد و فرسودگی روانی، نیروی متخصص را به نقطه شکست تبدیل می‌کنند. برنامه تداوم باید مهارت‌های حیاتی، جانشین‌ها، دسترسی‌ها و ظرفیت روانی تیم را بسنجد. نگهداشت صرفاً مسئله منابع انسانی نیست؛ بخشی از معماری سرویس است."
        },
        {
          title: "Data increases learning speed",
          faTitle: "داده، سرعت یادگیری را بالا می‌برد",
          body: "Data and AI can reveal abnormal patterns, credit risk, fraud and resource use earlier. Their value depends on data quality and a decision mechanism that shortens the distance between observation and action.",
          faBody: "داده و هوش مصنوعی می‌توانند الگوی غیرعادی، ریسک اعتباری، تقلب و مصرف منابع را زودتر آشکار کنند. اما ارزش آن‌ها به کیفیت داده و سازوکار تصمیم وابسته است. مدل تحلیلی نباید جای مالک تصمیم را بگیرد؛ باید فاصله میان مشاهده و اقدام را کوتاه کند."
        },
        {
          title: "Sudden regulation creates operational risk",
          faTitle: "تنظیم‌گری ناگهانی، ریسک عملیاتی می‌سازد",
          body: "In financial technology, innovation often moves faster than regulation. Late and abrupt intervention can disrupt healthy businesses and raise compliance cost suddenly.",
          faBody: "در فناوری مالی، بازار و نوآوری سریع‌تر از مقررات حرکت می‌کنند. ورود دیرهنگام و دفعی تنظیم‌گر می‌تواند مسیر کسب‌وکار سالم را نیز مختل کند و هزینه انطباق را ناگهان افزایش دهد. تنظیم‌گری مشارکتی این فاصله را کاهش می‌دهد."
        },
        {
          title: "Turn crisis memory into capability",
          faTitle: "حافظه بحران را به قابلیت تبدیل کنید",
          body: "After shocks, attention to security and backup rises, then fades. Every incident should produce timed actions, named owners and a later test that proves the correction changed behavior.",
          faBody: "پس از هر شوک، توجه به امنیت و پشتیبان‌گیری بالا می‌رود و چند ماه بعد کاهش می‌یابد. هر رخداد باید به فهرست اقدام زمان‌دار، مالک مشخص و آزمون بعدی منجر شود. گزارش بدون تغییر بودجه، معماری یا رفتار تصمیم‌گیری، صرفاً بایگانی تجربه است."
        }
      ],
      faq: []
    },
    humanContinuityInfrastructure: {
      nav: "insights",
      label: "Article / Mostafa Sabeti",
      title: "Human Continuity Infrastructure",
      faTitle: "زیرساخت انسانی تداوم؛ امنیت، شفافیت و مهارت بحران",
      lede: "Human continuity is built from relative security, transparency, distributed knowledge and practiced crisis skill, not from headcount alone.",
      faLede: "زیرساخت انسانی با استخدام بیشتر ساخته نمی‌شود؛ از ترکیب شفافیت، امنیت نسبی، توزیع دانش و تمرین مهارت بحران شکل می‌گیرد.",
      meta: ["Human continuity", "August 2026", "Mostafa Sabeti"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Human availability is not binary",
          faTitle: "دسترس‌پذیری انسان دوحالته نیست",
          body: "An employee may be online and present without having the focus or psychological capacity for sensitive decisions. Continuity should read critical roles, workload, succession and burnout signs together.",
          faBody: "کارمند ممکن است آنلاین و حاضر باشد، اما تمرکز یا ظرفیت روانی لازم برای تصمیم حساس را نداشته باشد. سنجش تداوم نیروی انسانی باید فراتر از تعداد نفرات باشد و نقش‌های حیاتی، بار کاری، جانشینی و نشانه‌های فرسودگی را کنار هم ببیند."
        },
        {
          title: "Transparency is an operational tool",
          faTitle: "شفافیت، ابزار عملیاتی است",
          body: "In ambiguity, silence fills with worst-case scenarios. Clear communication should state what is known, what remains unknown, what the current priority is and when the next decision will be reviewed.",
          faBody: "در ابهام، سکوت مدیریت با بدترین سناریوها پر می‌شود. شفافیت به معنای وعده‌ای نیست که مدیر توان اجرای آن را ندارد؛ باید روشن کند چه چیزی معلوم است، چه چیزی هنوز نامعلوم است، اولویت فعلی چیست و تصمیم بعدی در چه زمانی بازنگری می‌شود."
        },
        {
          title: "Separate critical knowledge from one person",
          faTitle: "دانش حیاتی را از فرد جدا کنید",
          body: "Every important service needs at least two people with access and operating ability. Documentation, runbooks, escalation paths and succession exercises should be treated as seriously as technical backup.",
          faBody: "هر سرویس مهم باید حداقل دو نفر دارای دسترسی و توان عملیاتی داشته باشد. مستندات، Runbook، مسیر Escalation و تمرین جانشینی باید به‌اندازه Backup فنی جدی گرفته شوند."
        },
        {
          title: "Turn downtime into strengthening time",
          faTitle: "زمان توقف را به زمان تقویت تبدیل کنید",
          body: "When normal development is blocked, part of team capacity can move into training, documentation and preparing tools that still work under constraints.",
          faBody: "در دوره‌ای که توسعه عادی ممکن نیست، تیم را نمی‌توان برای مدت نامعلوم معطل گذاشت. بخشی از ظرفیت می‌تواند به آموزش، مستندسازی و آماده‌سازی ابزارهای قابل‌استفاده در محدودیت اختصاص یابد."
        },
        {
          title: "Teach crisis skill",
          faTitle: "مهارت بحران را آموزش دهید",
          body: "People need to prioritize under incomplete information, recognize pressure, ask for help and return to working rhythm after failure. This is built through exercises, post-incident reviews and role rotation.",
          faBody: "تداوم یک مهارت فردی نیز هست. کارکنان باید بتوانند در اطلاعات ناقص اولویت‌گذاری کنند، فشار را تشخیص دهند، کمک بخواهند و پس از شکست به ریتم کار بازگردند. این مهارت با مانور، مرور پس از رخداد و جابه‌جایی نقش‌ها ساخته می‌شود."
        }
      ],
      faq: []
    },
    globalLearningArchitecture: {
      nav: "insights",
      label: "Article / Mostafa Sabeti",
      title: "Global Learning Architecture",
      faTitle: "معماری یادگیری جهانی؛ چرا بقای محلی کافی نیست؟",
      lede: "Local survival is necessary, but a technology business also needs practical contact with global standards, partners and market expectations.",
      faLede: "بقای محلی ضروری است، اما هدف نهایی نیست. کسب‌وکار فناوری برای کاهش فاصله معماری و بازار، به ارتباط عملی با استانداردها، شریک‌ها و انتظارهای جهانی نیاز دارد.",
      meta: ["Global learning", "August 2026", "Mostafa Sabeti"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "The gap is not only product capability",
          faTitle: "فاصله فقط در قابلیت محصول نیست",
          body: "Two products may look similar but be built from different assumptions about contracts, responsibility, compliance and supplier ecosystems.",
          faBody: "دو محصول ممکن است عملکرد مشابهی داشته باشند، اما منطق ساختشان متفاوت باشد. قرارداد، مسئولیت، انطباق و اکوسیستم تأمین‌کنندگان بخشی از معماری محصول‌اند. مطالعه استانداردها لازم است، اما تجربه عملی نشان می‌دهد مشتری و شریک واقعاً چه انتظاری دارند."
        },
        {
          title: "Presence must connect to mission",
          faTitle: "حضور باید به مأموریت متصل باشد",
          body: "Not every unit needs the same level of internationalization. A future-bank builder, fintech product or technology provider needs living market contact more than an internal service unit might.",
          faBody: "همه بخش‌های یک هلدینگ بانکی نیاز یکسانی به بین‌المللی‌شدن ندارند. بازوی ساخت بانک آینده، محصول فین‌تکی یا تأمین فناوری به ارتباط زنده با بازار جهانی وابسته است. پیش از ایجاد شعبه یا تیم خارجی باید مأموریت آن روشن باشد."
        },
        {
          title: "Several execution patterns exist",
          faTitle: "چند الگوی اجرایی وجود دارد",
          body: "Global presence does not have to mean a large company abroad. Joint projects, local partners, a small development team, investment or work with technology providers can be starting points.",
          faBody: "حضور الزاماً به تأسیس شرکت بزرگ نیاز ندارد. پروژه مشترک، شریک محلی، تیم کوچک توسعه، سرمایه‌گذاری یا همکاری با Technology Provider می‌تواند نقطه شروع باشد. انتخاب مدل باید با الزامات قانونی، حاکمیت داده و شفافیت ذی‌نفع نهایی بررسی شود."
        },
        {
          title: "The external team must not become an island",
          faTitle: "تیم خارجی نباید جزیره شود",
          body: "If the outside team learns new standards but knowledge does not return to the parent organization, the internal gap remains. Learning architecture needs transfer rhythm.",
          faBody: "اگر تیم بیرونی محصول و استاندارد تازه‌ای بیاموزد اما دانش به سازمان مادر برنگردد، شکاف داخلی باقی می‌ماند. معماری یادگیری به ریتم انتقال نیاز دارد: مرور طراحی، مستندات مشترک، جابه‌جایی محدود افراد و تصمیم‌های معماری قابل‌ردیابی."
        },
        {
          title: "Be a smart technology consumer",
          faTitle: "مصرف‌کننده هوشمند فناوری باشید",
          body: "Not every advanced capability has to be built internally. Advantage may come from defining the right problem and designing outcome-based use cases on reliable technology.",
          faBody: "همه زیرساخت‌های پیشرفته لازم نیست در داخل ساخته شوند. مزیت می‌تواند در تعریف مسئله درست و طراحی Use Case نتیجه‌محور باشد. این نگاه، منابع محدود را از تقلید زیرساختی به کاربرد متمرکز منتقل می‌کند."
        }
      ],
      faq: []
    },
    strategyAsSubtraction: {
      nav: "insights",
      label: "Article / Meysam Rajabi",
      title: "Strategy as Subtraction",
      faTitle: "استراتژی به‌مثابه حذف؛ نجات هلدینگ از تکثیر بی‌هدف",
      lede: "Continuity strategy is not a list of ambitions. It is the set of boundaries that keeps resources away from paths that do not fit the organization.",
      faLede: "استراتژی تداوم، مجموعه آرزوها نیست؛ مجموعه مرزهایی است که منابع را از مسیرهای ناسازگار دور نگه می‌دارد.",
      meta: ["Strategic focus", "August 2026", "Meysam Rajabi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "The trap of copying success shape",
          faTitle: "دام تقلید از شکل موفقیت",
          body: "A successful group may operate in several domains, but that diversity is usually the result of years of testing and deletion. Copying the number of companies without copying exit discipline reproduces complexity.",
          faBody: "یک مجموعه موفق ممکن است در چند حوزه حضور داشته باشد، اما این تنوع حاصل سال‌ها آزمون و حذف بوده است. کپی‌کردن تعداد شرکت‌ها بدون کپی‌کردن انضباط خروج، فقط پیچیدگی را بازتولید می‌کند."
        },
        {
          title: "A corporate shell does not solve the problem",
          faTitle: "پوسته شرکتی مسئله را حل نمی‌کند",
          body: "Creating another legal entity often leaves the old problem alive and adds a new cost layer. Correction, merger, sale or dissolution must be real options.",
          faBody: "شرکت زیان‌ده با مسائل حقوقی و مدیریتی، شروع پروژه تازه را دشوار می‌کند. واکنش رایج، تأسیس شرکت دیگری است. در نتیجه مسئله قبلی باقی می‌ماند و یک لایه هزینه تازه ساخته می‌شود. اصلاح، ادغام، فروش یا انحلال باید گزینه‌های واقعی باشند."
        },
        {
          title: "Take organizational genetics seriously",
          faTitle: "ژنتیک سازمان را جدی بگیرید",
          body: "B2C, B2B and B2G require different products, contracts, cash cycles and decision cultures. Exiting an incompatible domain is not weakness; it is recognizing the boundary of advantage.",
          faBody: "B2C، B2B و B2G فقط کانال فروش متفاوت نیستند. محصول، قرارداد، زمان وصول، پشتیبانی و فرهنگ تصمیم‌گیری متفاوتی می‌خواهند. خروج از حوزه ناسازگار، اعتراف به ضعف نیست؛ شناخت مرز مزیت است."
        },
        {
          title: "Shrink the product, keep the knowledge",
          faTitle: "محصول را کوچک کنید، دانش را نگه دارید",
          body: "Removing features does not mean destroying learning. A team can keep the core the market uses while archiving reusable code, design and insight for the right time.",
          faBody: "حذف قابلیت به معنای نابودکردن یادگیری نیست. تیم می‌تواند بخش‌های کم‌ارزش یک محصول بزرگ را کنار بگذارد و هسته‌ای را نگه دارد که بازار واقعاً استفاده می‌کند. کد، طراحی و شناخت به‌دست‌آمده می‌توانند برای زمان مناسب حفظ شوند."
        },
        {
          title: "Focus creates management capacity",
          faTitle: "تمرکز، ظرفیت مدیریت می‌سازد",
          body: "Scatter consumes money, management attention, legal time, shared infrastructure and specialist talent. Limiting domains lets standards, architecture and market knowledge deepen.",
          faBody: "پراکندگی فقط پول را مصرف نمی‌کند. توجه مدیر، زمان حقوقی، زیرساخت مشترک و نیروی متخصص را نیز خرد می‌کند. محدودکردن حوزه‌ها اجازه می‌دهد استاندارد، معماری و بازار در همان چند محور عمیق شوند."
        }
      ],
      faq: []
    },
    desertOrganization: {
      nav: "insights",
      label: "Article / Meysam Rajabi",
      title: "Desert Organization",
      faTitle: "سازمان کویری؛ کوچک‌ماندن برای جهش در فرصت بعدی",
      lede: "A desert organization survives market drought by sizing itself to the season, protecting cash and keeping the core team ready for the next rain.",
      faLede: "تاب‌آوری سازمان کویری در تحمل صرف نیست؛ در تنظیم اندازه با فصل، محافظت از بذرهای ارزش و آمادگی برای جهش است.",
      meta: ["Cash survival", "August 2026", "Meysam Rajabi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Organization size should change with the market season",
          faTitle: "اندازه سازمان باید با فصل بازار تغییر کند",
          body: "A large structure can speed execution in growth periods, but in market drought it creates heavy fixed cost. Smaller companies may keep decision and team connection closer.",
          faBody: "ساختار بزرگ در دوره رونق می‌تواند سرعت اجرا بدهد، اما در خشکسالی بازار هزینه ثابت سنگینی می‌سازد. شرکت‌های کوچک‌تر ارتباط نزدیک‌تری با تیم دارند و تصمیم را سریع‌تر منتقل می‌کنند."
        },
        {
          title: "Cash is the seed of the next season",
          faTitle: "نقدینگی، بذر دوره بعد است",
          body: "In contraction, an empty account removes decision freedom. Preserving cash means distinguishing costs that create future capacity from costs that only keep the past alive.",
          faBody: "در دوره انقباض، حساب خالی آزادی تصمیم را از بین می‌برد. حفظ نقدینگی به معنای توقف کورکورانه نیست؛ باید مشخص شود کدام هزینه، ظرفیت آینده می‌سازد و کدام فقط گذشته را نگه می‌دارد."
        },
        {
          title: "Include psychological capacity in the plan",
          faTitle: "ظرفیت روانی را در برنامه وارد کنید",
          body: "Economic and social pressure increases the time needed to work, even when skill has not changed. Planning on historic team capacity creates unrealistic promises and deeper burnout.",
          faBody: "فشار اقتصادی و اجتماعی زمان انجام کار را افزایش می‌دهد، حتی اگر مهارت فرد تغییر نکرده باشد. برنامه‌ریزی بر مبنای ظرفیت تاریخی تیم، وعده‌ای غیرواقعی می‌سازد و فرسودگی را بیشتر می‌کند."
        },
        {
          title: "Keep the core team visible",
          faTitle: "تیم هسته را قابل‌مشاهده نگه دارید",
          body: "In a small organization, human proximity can reveal exit risk, burnout or conflict earlier. But closeness should not replace systems for critical roles, succession and decision paths.",
          faBody: "در سازمان کوچک، رابطه انسانی می‌تواند زودتر نشانه خروج، فرسودگی یا تعارض را آشکار کند. اما نزدیکی نباید جای سیستم را بگیرد. نقش‌های حیاتی، جانشینی، دانش و مسیر تصمیم باید مستند شوند."
        },
        {
          title: "Have a plan for rain",
          faTitle: "برای باران برنامه داشته باشید",
          body: "The next opportunity may be short. The organization should know which product it will activate, who it will hire and how much capital growth needs before the market improves.",
          faBody: "فرصت بعدی ممکن است کوتاه باشد. سازمان باید بداند در صورت بهبود بازار، کدام محصول را فعال می‌کند، چه نیرویی را جذب می‌کند و چه مقدار سرمایه برای رشد لازم دارد. این برنامه باید پیش از رونق نوشته شود."
        }
      ],
      faq: []
    },
    expiringTransitionDependencies: {
      nav: "insights",
      label: "Article / Nima Amirshekari",
      title: "Expiring Transition Dependencies",
      faTitle: "وابستگی انتقالی باید تاریخ انقضا داشته باشد",
      lede: "Temporary support bridges in banking migration must have visible owners, risk records and expiration dates before they become permanent vulnerabilities.",
      faLede: "در ادغام و مهاجرت بانکی، پل‌های موقت پشتیبانی باید مالک، رکورد ریسک و تاریخ انقضا داشته باشند تا به آسیب‌پذیری دائمی تبدیل نشوند.",
      meta: ["Transition risk", "August 2026", "Nima Amirshekari"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Separate four types of transition",
          faTitle: "چهار نوع انتقال را جدا کنید",
          body: "Transition is not only software migration. Software, operational ownership, support access and organizational responsibility may move at different speeds.",
          faBody: "انتقال فقط جابه‌جایی نرم‌افزار نیست. ممکن است نرم‌افزار منتقل شده باشد، اما تیم قدیمی همچنان تنها گروه قادر به رفع خطاست. یا مالکیت رسمی تغییر کرده باشد، ولی حساب‌های مدیریتی و ارتباطات پشتیبانی در ساختار قبلی باقی مانده باشند."
        },
        {
          title: "How support bridges become risk",
          faTitle: "پل پشتیبانی چگونه به ریسک تبدیل می‌شود؟",
          body: "Open access for the previous team can speed incident resolution, but without control and observability it becomes a new entry path and weakens accountability.",
          faBody: "دسترسی باز برای تیم پیشین، حل رخداد را سریع می‌کند؛ اما اگر کنترل و مشاهده‌پذیری کافی نداشته باشد، مسیر ورود تازه‌ای می‌سازد. هرچه دوره گذار طولانی‌تر شود، استثنایی که برای چند هفته ساخته شده بود به بخشی نامرئی از معماری تبدیل می‌شود."
        },
        {
          title: "Create a transition-debt register",
          faTitle: "دفتر بدهی انتقال بسازید",
          body: "Every temporary dependency needs a traceable record: owner, reason, access scope, risk, expiration date, closure test and governance review.",
          faBody: "برای هر وابستگی موقت باید یک رکورد قابل‌ردیابی وجود داشته باشد: مالک، علت، دامنه دسترسی، ریسک، تاریخ انقضا، آزمون خروج و جلسه مرور حاکمیت. این دفتر نباید فقط در ابزار تیم فنی بماند."
        },
        {
          title: "Expiration date is a decision trigger",
          faTitle: "تاریخ انقضا، محرک تصمیم است",
          body: "Expiration does not always mean automatic cutoff. It means silent extension is forbidden; the owner must present evidence and re-accept risk.",
          faBody: "تاریخ انقضا الزاماً به معنای قطع خودکار دسترسی نیست. به معنای ممنوعیت تمدید خاموش است. در تاریخ مقرر، مالک باید شواهد ادامه نیاز را ارائه و ریسک را دوباره بپذیرد."
        },
        {
          title: "Design exit like entry",
          faTitle: "خروج را مانند ورود طراحی کنید",
          body: "Every temporary connection needs an exit runbook: independence test, access removal, log and data retention, and the former supplier’s obligations after cutoff.",
          faBody: "هر اتصال موقت باید Runbook خروج داشته باشد: چه آزمونی نشان می‌دهد تیم جدید مستقل است، دسترسی چگونه لغو می‌شود، داده و لاگ کجا می‌مانند و تأمین‌کننده قبلی چه تعهدی پس از قطع دارد."
        }
      ],
      faq: []
    },
    engineeringRecoveryRisk: {
      nav: "insights",
      label: "Article / Nima Amirshekari",
      title: "Engineering Recovery Risk",
      faTitle: "مهندسی بازیابی؛ پذیرش عددی ریسک به‌جای پیشگیری مطلق",
      lede: "Mature continuity does not claim immunity. It defines accepted risk numerically and proves recovery capability through repeated exercises.",
      faLede: "تداوم مطلق وجود ندارد. سازمان بالغ به‌جای ادعای مصونیت، سطح ریسک را روشن می‌کند و توان بازگشت خود را بارها اثبات می‌کند.",
      meta: ["Recovery engineering", "August 2026", "Nima Amirshekari"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "RTO and RPO are not purely technical decisions",
          faTitle: "RTO و RPO تصمیم فنی صرف نیستند",
          body: "Recovery Time Objective and Recovery Point Objective should be set by business impact, risk acceptance and technology cost together.",
          faBody: "Recovery Time Objective زمان هدف برای بازگرداندن خدمت است و Recovery Point Objective میزان داده قابل‌تحمل برای ازدست‌رفتن را مشخص می‌کند. تعیین این دو فقط بر عهده فناوری نیست؛ کسب‌وکار اثر توقف و داده ازدست‌رفته را می‌سنجد، ریسک سطح پذیرش را بررسی می‌کند و فناوری هزینه تحقق هدف را نشان می‌دهد."
        },
        {
          title: "Compensation is part of recovery architecture",
          faTitle: "جبران بخشی از معماری بازیابی است",
          body: "Sometimes fast return with a small data gap and a compensation process is better than waiting for perfect restoration. This is valid only when scope, cap and responsibility are approved and tested before crisis.",
          faBody: "در برخی سناریوها، بازگشت سریع خدمت با پذیرش چند دقیقه شکاف داده و اجرای فرایند جبرانی منطقی‌تر از انتظار برای بازسازی بی‌نقص است. دامنه، سقف و روش جبران باید پیش از بحران تصویب و آزموده شوند."
        },
        {
          title: "Security labels do not replace priority",
          faTitle: "برچسب امنیتی جای اولویت‌گذاری را نمی‌گیرد",
          body: "If everything is critical and security-sensitive, budget and attention scatter. Security and continuity are a chain across procurement, technology, process, culture and people.",
          faBody: "اگر همه‌چیز حیاتی و امنیتی اعلام شود، بودجه و توجه پراکنده می‌شوند. مدیر باید تشخیص دهد کدام خدمت، کنترل و وابستگی واقعاً اولویت دارد. امنیت و تداوم یک زنجیره‌اند: تأمین، فناوری، فرایند، فرهنگ و نیروی انسانی باید با هم کار کنند."
        },
        {
          title: "Human capital in the recovery model",
          faTitle: "سرمایه انسانی در مدل بازیابی",
          body: "Many incidents begin with error, weak process, dissatisfaction or knowledge concentration. Succession and documentation should appear on the same dashboard as server capacity.",
          faBody: "بخش قابل‌توجهی از رخدادها از خطا، بی‌اطلاعی، نارضایتی یا ضعف فرایند داخلی آغاز می‌شوند. اگر دانش، رمز یا دسترسی به یک نفر وابسته باشد، خروج او می‌تواند میلیون‌ها مشتری را متأثر کند. جانشین‌پروری و مستندسازی باید در همان داشبوردی دیده شوند که ظرفیت سرور دیده می‌شود."
        },
        {
          title: "Rumor is also a continuity scenario",
          faTitle: "شایعه هم سناریوی تداوم است",
          body: "A bank may be technically healthy while false news about bankruptcy or attack changes customer behavior and liquidity. Media monitoring and fast evidence-based response are part of continuity.",
          faBody: "بانک ممکن است از نظر فنی سالم باشد، اما خبر نادرست درباره ورشکستگی یا حمله، رفتار مشتری و منابع را تغییر دهد. پایش فضای خبری و پاسخ سریع بخشی از تداوم است، نه وظیفه‌ای حاشیه‌ای برای روابط عمومی."
        },
        {
          title: "Prove recovery capability",
          faTitle: "قابلیت بازیابی را اثبات کنید",
          body: "RTO and RPO targets become valid only through exercises and real incidents. Results should show the gap between target and performance, the reason for delay and corrective action.",
          faBody: "هدف‌های RTO و RPO فقط با مانور و رخداد واقعی اعتبار می‌گیرند. نتیجه باید فاصله هدف و عملکرد، علت تأخیر و اقدام اصلاحی را نشان دهد. پذیرش ریسک نیز در صورت تغییر بازار، معماری یا ظرفیت تیم بازنگری شود."
        }
      ],
      faq: []
    },
    trustRecoveryBanking: {
      nav: "insights",
      label: "Article / Mohammad Farjood",
      title: "Banking Trust Recovery Beyond the App",
      faTitle: "بازیابی اعتماد بانکی؛ فراتر از بازگرداندن اپلیکیشن",
      lede: "In a banking incident, restoring the app is not enough; diagnosis, decision, communication and minimum service determine whether trust survives.",
      faLede: "در اختلال بانکی، بازگرداندن اپلیکیشن کافی نیست؛ تشخیص، تصمیم، ارتباط و حداقل خدمت تعیین می‌کنند اعتماد حفظ می‌شود یا نه.",
      meta: ["Trust recovery", "August 2026", "Mohammad Farjood"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Trust is the output of several systems",
          faTitle: "اعتماد، خروجی چند سیستم است",
          body: "Trust is not produced by cybersecurity alone. Availability, data accuracy, contact-center behavior, media messaging and management consistency all affect whether a customer reads a technical event as instability.",
          faBody: "اعتماد فقط محصول امنیت سایبری نیست. دسترس‌پذیری، صحت داده، رفتار مرکز تماس، پیام رسانه‌ای و ثبات تصمیم مدیریتی همگی تعیین می‌کنند مشتری رخداد فنی را نشانه ناپایداری بداند یا نه."
        },
        {
          title: "The fallback must be genuinely independent",
          faTitle: "جایگزین باید واقعاً مستقل باشد",
          body: "A second channel helps only when it does not share the same point of failure. For critical services, the fallback should preserve the minimum essential operation while the full experience is restored.",
          faBody: "کانال دوم زمانی مفید است که نقطه شکست مشترک نداشته باشد. برای خدمات حیاتی، مسیر جایگزین باید حداقل عملیات ضروری را تا بازگشت تجربه کامل حفظ کند."
        },
        {
          title: "An unpracticed plan does not create coordination",
          faTitle: "برنامه‌ای که تمرین نشده، هماهنگی تولید نمی‌کند",
          body: "Documents are necessary, but incident response depends on practiced roles, shared language and known authority. Exercises should test who declares severity, who can limit or restore service and how internal and external messages are released.",
          faBody: "وجود سند لازم است، اما پاسخ حادثه به نقش تمرین‌شده، زبان مشترک و اختیار روشن وابسته است. مانور باید بیازماید چه کسی سطح حادثه را اعلام می‌کند، چه کسی خدمت را محدود یا بازمی‌گرداند و پیام داخلی و بیرونی چگونه منتشر می‌شود."
        },
        {
          title: "Experience review must lead to correction",
          faTitle: "تجربه‌نگاری باید به اصلاح منجر شود",
          body: "After an incident, a timeline is not enough. Review should identify which controls worked, where decisions slowed down, what hidden dependency surfaced and which actions reduced customer impact.",
          faBody: "پس از حادثه، روایت زمان‌بندی کافی نیست. مرور باید نشان دهد کدام کنترل درست کار کرد، تصمیم در کجا کند شد، چه وابستگی پنهانی آشکار شد و کدام اقدام دامنه اثر بر مشتری را کم کرد."
        },
        {
          title: "Measure four times",
          faTitle: "چهار زمان را بسنجید",
          body: "A useful continuity dashboard separates time to detect, time to decide, time to minimum service and time to full recovery. Looking only at technical recovery hides management and communication delay.",
          faBody: "داشبورد تداوم باید زمان تشخیص، زمان تصمیم، زمان بازگشت حداقلی و زمان بازیابی کامل را جدا بسنجد. تمرکز صرف بر بازیابی فنی، تأخیر مدیریتی و ارتباطی را پنهان می‌کند."
        }
      ],
      faq: []
    },
    survivalGrowthGap: {
      nav: "insights",
      label: "Article / Mostafa Sabeti",
      title: "The Survival Trap",
      faTitle: "تله بقا؛ وقتی تداوم، رشد آینده را مصرف می‌کند",
      lede: "Continuity should preserve essential service without consuming the organization’s ability to learn, compete and grow after the crisis.",
      faLede: "تداوم باید خدمت ضروری را حفظ کند، بدون آن‌که توان یادگیری، رقابت و رشد پس از بحران را مصرف کند.",
      meta: ["Survival and growth", "August 2026", "Mostafa Sabeti"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Define the service floor explicitly",
          faTitle: "کف خدمت را صریح تعریف کنید",
          body: "Under high risk, organizations may need to pause innovation and protect essential services. This retreat should be deliberate: minimum services, activation criteria, decision owners and review duration must be known in advance.",
          faBody: "در سطح ریسک بالا، سازمان ممکن است نوآوری را موقتاً متوقف کند و خدمات ضروری را حفظ کند. این عقب‌نشینی باید آگاهانه باشد: خدمات حداقلی، معیار فعال‌سازی، مالک تصمیم و مدت بازنگری باید از قبل مشخص باشند."
        },
        {
          title: "See the hidden cost of stopping",
          faTitle: "هزینه پنهان توقف را ببینید",
          body: "Operations may look green while product progress, skills and global standards fall behind. Continuity should measure survival time, development delay and competitive distance separately.",
          faBody: "ممکن است عملیات سبز باشد، اما پیشرفت محصول، مهارت و فاصله با استانداردهای جهانی عقب بماند. تداوم باید ساعت بقا، توقف توسعه و فاصله رقابتی را جدا بسنجد."
        },
        {
          title: "Do not allocate all capacity to survival",
          faTitle: "ظرفیت را کاملاً به بقا اختصاص ندهید",
          body: "Even in difficult periods, organizations need a small preserved capacity for learning, architecture cleanup, documentation or market connection. The point is not performance theater; it is keeping the growth muscle alive.",
          faBody: "حتی در سخت‌ترین دوره، سازمان به سهم کوچکی برای یادگیری، پاک‌سازی معماری، مستندسازی یا ارتباط با بازار نیاز دارد. هدف نمایش رشد نیست؛ حفظ عضله‌ای است که بعد از بحران لازم می‌شود."
        },
        {
          title: "Recurring disruption is not an exception",
          faTitle: "سناریوی تکرارشونده، حادثه استثنایی نیست",
          body: "When connectivity or access limits repeat, they should become design assumptions. Teams must know what environment remains available, which work continues and which outputs are intentionally delayed.",
          faBody: "وقتی قطع ارتباط یا محدودیت دسترسی تکرار می‌شود، دیگر استثنا نیست و باید فرض طراحی باشد. تیم باید بداند چه محیطی در دسترس است، چه کاری ادامه می‌یابد و کدام خروجی آگاهانه عقب می‌افتد."
        },
        {
          title: "The second metric: time to return to growth",
          faTitle: "شاخص دوم تداوم: زمان بازگشت به رشد",
          body: "Organizations often measure time to restore service. Long disruptions need a second metric: after restrictions lift, how long does the team need to return to its previous development speed?",
          faBody: "سازمان‌ها معمولاً زمان بازیابی سرویس را می‌سنجند. در بحران طولانی، شاخص دوم لازم است: بعد از رفع محدودیت، تیم چقدر زمان لازم دارد تا به سرعت توسعه قبلی برگردد؟"
        }
      ],
      faq: []
    },
    continuityMarketRegime: {
      nav: "insights",
      label: "Article / Meysam Rajabi",
      title: "Continuity by Market Regime",
      faTitle: "سه رژیم تداوم؛ رشد، حفظ بازار و بقای نقدینگی",
      lede: "Continuity strategy changes across growth, market retention and cash survival; each regime needs its own metrics and decisions.",
      faLede: "استراتژی تداوم در دوره رشد، حفظ بازار و بقای نقدینگی یکسان نیست و هر رژیم معیارها و تصمیم‌های خودش را می‌خواهد.",
      meta: ["Continuity strategy", "August 2026", "Meysam Rajabi"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "Continuity changes with the market regime",
          faTitle: "تداوم با رژیم بازار تغییر می‌کند",
          body: "A continuity strategy that works during growth may be wrong during contraction. The organization must know whether it is optimizing for expansion, market retention or cash survival.",
          faBody: "استراتژی تداومی که در دوره رشد درست است، ممکن است در دوره انقباض اشتباه باشد. سازمان باید بداند برای توسعه، حفظ بازار یا بقای نقدینگی تصمیم می‌گیرد."
        },
        {
          title: "Regime one: growth with product-market fit",
          faTitle: "دوره اول: توسعه با Product-Market Fit",
          body: "In a growth regime, continuity protects the ability to scale: product stability, service reliability, hiring rhythm and customer trust should not collapse under speed.",
          faBody: "در دوره رشد، تداوم توان مقیاس‌پذیری را حفظ می‌کند: پایداری محصول، قابلیت اتکای خدمت، ریتم جذب نیرو و اعتماد مشتری نباید زیر فشار سرعت فروبپاشند."
        },
        {
          title: "Regime two: retain and deepen the market",
          faTitle: "دوره دوم: حفظ و تعمیق بازار",
          body: "When growth slows, continuity shifts toward customer retention, service depth, cost discipline and clarity about which relationships should be protected first.",
          faBody: "وقتی رشد کند می‌شود، تداوم به سمت حفظ مشتری، عمق خدمت، انضباط هزینه و وضوح درباره رابطه‌هایی می‌رود که باید زودتر محافظت شوند."
        },
        {
          title: "Regime three: prevent loss",
          faTitle: "دوره سوم: جلوگیری از زیان",
          body: "In contraction, the key question is not how to do more; it is which commitments, services and customers must be preserved so the organization does not lose its future.",
          faBody: "در انقباض، سؤال اصلی انجام کار بیشتر نیست؛ سؤال این است که کدام تعهد، سرویس و مشتری باید حفظ شود تا سازمان آینده‌اش را از دست ندهد."
        },
        {
          title: "Each regime needs its own dashboard",
          faTitle: "داشبورد هر دوره",
          body: "The dashboard for growth is not the dashboard for survival. Each regime needs explicit metrics for cash, service reliability, customer retention, decision speed and market position.",
          faBody: "داشبورد رشد با داشبورد بقا یکی نیست. هر رژیم به سنجه‌های روشن برای نقدینگی، قابلیت اتکای خدمت، حفظ مشتری، سرعت تصمیم و جایگاه بازار نیاز دارد."
        }
      ],
      faq: []
    },
    backupMustCarryLoad: {
      nav: "insights",
      label: "Article / Nima Amirshekari",
      title: "The Backup Site Must Carry Real Load",
      faTitle: "سایت پشتیبان باید بار واقعی حمل کند",
      lede: "An idle alternate site cannot be trusted on crisis day; readiness must be proven with recurring real-load tests across data, software and teams.",
      faLede: "سایت جایگزین خاموش در روز بحران قابل‌اعتماد نیست؛ آمادگی باید با آزمون منظم بار واقعی در داده، نرم‌افزار و تیم اثبات شود.",
      meta: ["Backup readiness", "August 2026", "Nima Amirshekari"],
      special: "media",
      articleBody: true,
      mediaHeading: "",
      faMediaHeading: "",
      mediaDescription: "",
      faMediaDescription: "",
      mediaImage: "Assets/content-cover-article-v3.png",
      mediaAlt: "Dark article cover with notebook and pen",
      faMediaAlt: "تصویر کاور مقاله با دفتر و قلم",
      mediaLabel: "Read article",
      sections: [
        {
          title: "A backup site is more than equipment",
          faTitle: "وجود تجهیزات، سایت پشتیبان نمی‌سازد",
          body: "Hardware, links and a secondary location do not prove continuity. The site must carry real operational load so data, software behavior, access and team routines are tested together.",
          faBody: "تجهیزات، لینک و مکان دوم به‌تنهایی تداوم نمی‌سازند. سایت پشتیبان باید بار عملیاتی واقعی حمل کند تا داده، رفتار نرم‌افزار، دسترسی و عادت تیمی با هم آزموده شوند."
        },
        {
          title: "The alternate path must be alive",
          faTitle: "مسیر جایگزین باید زنده باشد",
          body: "A cold backup may look efficient, but the moment of crisis is too late to discover missing data, incompatible versions or untested access. The alternate path needs regular use.",
          faBody: "Backup سرد ممکن است اقتصادی به نظر برسد، اما لحظه بحران زمان کشف داده ناقص، نسخه ناسازگار یا دسترسی آزموده‌نشده نیست. مسیر جایگزین باید منظم استفاده شود."
        },
        {
          title: "Five forms of readiness must be proven together",
          faTitle: "پنج آمادگی باید هم‌زمان اثبات شوند",
          body: "Real readiness includes data freshness, application compatibility, network access, operational procedure and team capability. If one layer is missing, the backup site may exist without being usable.",
          faBody: "آمادگی واقعی شامل تازگی داده، سازگاری نرم‌افزار، دسترسی شبکه، رویه عملیاتی و توان تیم است. اگر یک لایه غایب باشد، سایت پشتیبان ممکن است وجود داشته باشد اما قابل استفاده نباشد."
        },
        {
          title: "Testing should be part of the production calendar",
          faTitle: "آزمون باید بخشی از تقویم تولید باشد",
          body: "Real-load exercises should be scheduled, measured and repeated. They should not be rare ceremonies; they are the operating proof that the alternate environment can carry service.",
          faBody: "آزمون بار واقعی باید زمان‌بندی، سنجیده و تکرار شود. این آزمون نباید مراسمی کمیاب باشد؛ مدرک عملیاتی است که محیط جایگزین می‌تواند خدمت را حمل کند."
        },
        {
          title: "Define success numerically",
          faTitle: "موفقیت را عددی تعریف کنید",
          body: "A backup test succeeds only when thresholds are clear: acceptable data lag, service capacity, error rate, switch time and customer-impact limits.",
          faBody: "آزمون سایت پشتیبان زمانی موفق است که آستانه‌ها روشن باشد: تأخیر مجاز داده، ظرفیت خدمت، نرخ خطا، زمان سوییچ و حد اثر بر مشتری."
        }
      ],
      faq: []
    },
    video: {
      nav: "insights",
      label: "Videocast / Episode 08",
      faLabel: "ویدیوکست / اپیزود ۰۸",
      title: "Continuity Videocast - Episode 08",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۸",
      subtitle: "Alireza Bozorgmehri",
      faSubtitle: "علیرضا بزرگمهری",
      lede: "A practical conversation about recovery domains, service boundaries and keeping one defect from becoming a bank-wide event.",
      faLede: "گفت‌وگویی عملی دربارهٔ حوزه‌های بازیابی، مرزهای سرویس و جلوگیری از تبدیل یک نقص به رویدادی در سراسر بانک.",
      meta: ["YouTube + Aparat", "Transcript", "2 participants"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The canonical episode video is embedded here; transcript and chapters remain below it.",
      faMediaDescription: "ویدیوی اصلی این قسمت اینجا نمایش داده می‌شود؛ متن و فصل‌بندی پایین همین صفحه می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/cfe7ptw/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    aliAkhavanVideocast: {
      nav: "insights",
      label: "Videocast / Episode 02",
      faLabel: "ویدیوکست / اپیزود ۰۲",
      title: "Continuity Videocast - Episode 02",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۲",
      subtitle: "Ali Akhavan",
      faSubtitle: "علی اخوان",
      lede: "A documented continuity conversation with Ali Akhavan on business continuity in banking and the executive realities behind service resilience.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با علی اخوان، مدیرعامل تکنوتجارت.",
      meta: ["Aparat", "Videocast", "Ali Akhavan"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/ljeafyx/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    mohammadFarjoodVideocast: {
      nav: "insights",
      label: "Videocast / Episode 03",
      faLabel: "ویدیوکست / اپیزود ۰۳",
      title: "Continuity Videocast - Episode 03",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۳",
      subtitle: "Mohammad Farjood",
      faSubtitle: "محمد فرجود",
      lede: "A documented continuity conversation with Mohammad Farjood on digital banking, technology investment and continuity in connected service portfolios.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با محمد فرجود درباره بانکداری دیجیتال، سرمایه‌گذاری فناوری و تداوم سبد خدمات.",
      meta: ["Aparat", "Videocast", "Mohammad Farjood"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/fiyfqwd/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    mahmoudrezaFarhadiVideocast: {
      nav: "insights",
      label: "Videocast / Episode 05",
      faLabel: "ویدیوکست / اپیزود ۰۵",
      title: "Continuity Videocast - Episode 05",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۵",
      subtitle: "Mahmoudreza Farhadi",
      faSubtitle: "محمودرضا فرهادی",
      lede: "A documented continuity conversation with Mahmoudreza Farhadi on neobank and fintech continuity, service adaptation and banking resilience.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با محمودرضا فرهادی، مشاور نئوبانک و فین‌تک.",
      meta: ["Aparat", "Videocast", "Mahmoudreza Farhadi"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/vzo3tqc/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    sadeghFaramarziVideocast: {
      nav: "insights",
      label: "Videocast / Episode 06",
      faLabel: "ویدیوکست / اپیزود ۰۶",
      title: "Continuity Videocast - Episode 06",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۶",
      subtitle: "Sadegh Faramarzi",
      faSubtitle: "صادق فرامرزی",
      lede: "A documented continuity conversation with Sadegh Faramarzi on business continuity management, consulting practice and the executive discipline behind resilient organizations.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با صادق فرامرزی، عضو هیئت‌مدیره فدراسیون مدیریت و مشاوران کسب‌وکار ایران.",
      meta: ["Aparat", "Videocast", "Sadegh Faramarzi"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/lkiw9o0/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    mostafaSabetiVideocast: {
      nav: "insights",
      label: "Videocast / Episode 07",
      faLabel: "ویدیوکست / اپیزود ۰۷",
      title: "Continuity Videocast - Episode 07",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۷",
      subtitle: "Mostafa Sabeti",
      faSubtitle: "مصطفی ثابتی",
      lede: "A documented continuity conversation with Mostafa Sabeti on banking technology, adaptive continuity and preserving room for the next move.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با مصطفی ثابتی، مدیرعامل هلدینگ توسعه فناوری اطلاعات گردشگری ایران.",
      meta: ["Aparat", "Videocast", "Mostafa Sabeti"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/ffey426/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    sadraBabaeiVideocast: {
      nav: "insights",
      label: "Videocast / Episode 10",
      faLabel: "ویدیوکست / اپیزود ۱۰",
      title: "Continuity Videocast - Episode 10",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۰",
      subtitle: "Sadra Babaei",
      faSubtitle: "صدرا بابایی",
      lede: "A documented continuity conversation with Sadra Babaei on capability, smart operations and innovation readiness inside continuity work.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با صدرا بابایی، مدیرعامل کارخانه هوشمندسازی و نوآوری امیدینو.",
      meta: ["Aparat", "Videocast", "Sadra Babaei"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/pdz5600/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    samanBeyraghiVideocast: {
      nav: "insights",
      label: "Videocast / Episode 11",
      faLabel: "ویدیوکست / اپیزود ۱۱",
      title: "Continuity Videocast - Episode 11",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۱",
      subtitle: "Saman Beyraghi",
      faSubtitle: "سامان بیرقی",
      lede: "A documented continuity conversation with Saman Beyraghi on digital assets, exchange trust and continuity in crypto-financial services.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با سامان بیرقی، مدیرعامل و رئیس هیئت‌مدیره او ام پی فینکس.",
      meta: ["Aparat", "Videocast", "Saman Beyraghi"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/zwnhiy7/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    ramyarGhanbariVideocast: {
      nav: "insights",
      label: "Videocast / Episode 04",
      faLabel: "ویدیوکست / اپیزود ۰۴",
      title: "Continuity Videocast - Episode 04",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۴",
      subtitle: "Ramyar Ghanbari",
      faSubtitle: "رامیار قنبری",
      lede: "A documented continuity conversation with Ramyar Ghanbari on electronic payments, market coordination and preserving financial access.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با رامیار قنبری، رئیس انجمن شرکت‌های پرداخت الکترونیک ایران.",
      meta: ["Aparat", "Videocast", "Ramyar Ghanbari"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/splye20/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    amirhosseinShabiriVideocast: {
      nav: "insights",
      label: "Videocast / Episode 09",
      faLabel: "ویدیوکست / اپیزود ۰۹",
      title: "Continuity Videocast - Episode 09",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۹",
      subtitle: "Amirhossein Shabiri",
      faSubtitle: "امیرحسین شبیری",
      lede: "A documented continuity conversation with Amirhossein Shabiri on information technology, banking operations and preserving service continuity.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با امیرحسین شبیری، معاون فناوری اطلاعات مؤسسه ملل.",
      meta: ["Aparat", "Videocast", "Amirhossein Shabiri"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/vna6264/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    alirezaGhanadanVideocast: {
      nav: "insights",
      label: "Videocast / Episode 13",
      faLabel: "ویدیوکست / اپیزود ۱۳",
      title: "Continuity Videocast - Episode 13",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۳",
      subtitle: "Alireza Ghanadan",
      faSubtitle: "علیرضا قنادان",
      lede: "A documented continuity conversation with Alireza Ghanadan on lending platforms, fintech operations and continuity of customer-facing finance.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با علیرضا قنادان، مدیرعامل لندو.",
      meta: ["Aparat", "Videocast", "Alireza Ghanadan"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/lfvruap/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    mostafaAmiriVideocast: {
      nav: "insights",
      label: "Videocast / Episode 14",
      faLabel: "ویدیوکست / اپیزود ۱۴",
      title: "Continuity Videocast - Episode 14",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۴",
      subtitle: "Mostafa Amiri",
      faSubtitle: "مصطفی امیری",
      lede: "A documented continuity conversation with Mostafa Amiri on payment infrastructure, fintech trust and service continuity in transaction flows.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با مصطفی امیری، هم‌بنیان‌گذار و مدیرعامل زرین‌پال.",
      meta: ["Aparat", "Videocast", "Mostafa Amiri"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/hsup1j7/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    nimaAmirshekariVideocast: {
      nav: "insights",
      label: "Videocast / Episode 16",
      faLabel: "ویدیوکست / اپیزود ۱۶",
      title: "Continuity Videocast - Episode 16",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۶",
      subtitle: "Nima Amirshekari",
      faSubtitle: "نیما امیرشکاری",
      lede: "A documented continuity conversation with Nima Amirshekari on digital economy, financial technology and continuity signals across the market.",
      faLede: "روایتی مستند از تداوم کسب‌وکار در صنعت بانکداری؛ گفت‌وگو با نیما امیرشکاری، کارشناس اقتصاد دیجیتال.",
      meta: ["Aparat", "Videocast", "Nima Amirshekari"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/zpthpp5/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    podcast: {
      nav: "insights",
      label: "Podcast / Farhad Inaloui",
      faLabel: "پادکست / فرهاد اینالویی",
      title: "Continuity Podcast - Farhad Inaloui",
      faTitle: "پادکست کانتینیویتی - فرهاد اینالویی",
      lede: "An audio conversation on service continuity, decision ownership and the practical meaning of banking resilience.",
      faLede: "گفت‌وگوی صوتی درباره تداوم خدمت، مالکیت تصمیم و معنای عملی تاب‌آوری بانکی.",
      meta: ["Audio episode", "Podcast", "House conversation"],
      special: "media",
      mediaHeading: "Podcast player",
      faMediaHeading: "پلیر پادکست",
      mediaDescription: "Listen to the full episode here. The waveform is interactive and the audio remains available as a local site asset.",
      faMediaDescription: "نسخه کامل صوتی این قسمت را اینجا بشنوید. موج صدا تعاملی است و فایل صوتی به‌عنوان asset محلی سایت در دسترس می‌ماند.",
      audioSrc: "Assets/podcast-farhad-inaloui-135747.mp3",
      mediaLabel: "Play episode",
      sections: [],
      faq: []
    },
    alirezaPodcast: {
      nav: "insights",
      label: "Podcast / Alireza Bozorgmehri",
      faLabel: "پادکست / علیرضا بزرگمهری",
      title: "Continuity Podcast - Alireza Bozorgmehri",
      faTitle: "پادکست کانتینیویتی - علیرضا بزرگمهری",
      lede: "An audio conversation with Alireza Bozorgmehri on continuity, governance and how service responsibility is shaped in digital banking.",
      faLede: "گفت‌وگوی صوتی با علیرضا بزرگمهری درباره تداوم، حاکمیت و شکل‌گیری مسئولیت خدمت در بانکداری دیجیتال.",
      meta: ["Audio episode", "Podcast", "Alireza Bozorgmehri"],
      special: "media",
      mediaHeading: "Podcast player",
      faMediaHeading: "پلیر پادکست",
      mediaDescription: "Listen to the full episode here. This record keeps the audio connected to its author and the relevant continuity themes.",
      faMediaDescription: "نسخه کامل صوتی این قسمت را اینجا بشنوید. این رکورد فایل صوتی را به نویسنده و موضوعات مرتبط با تداوم وصل نگه می‌دارد.",
      audioSrc: "Assets/podcast-alireza-bozorgmehri-135764.mp3",
      mediaLabel: "Play episode",
      sections: [],
      faq: []
    },
    aliAkhavanPodcast: {
      nav: "insights",
      label: "Podcast / Ali Akhavan",
      faLabel: "پادکست / علی اخوان",
      title: "Continuity Podcast - Ali Akhavan",
      faTitle: "پادکست کانتینیویتی - علی اخوان",
      lede: "An audio conversation with Ali Akhavan on how startups read continuity when funding, market timing and runway become strategic constraints.",
      faLede: "گفت‌وگوی صوتی با علی اخوان درباره اینکه استارتاپ‌ها تداوم را چگونه می‌خوانند وقتی سرمایه، زمان بازار و ران‌وی به محدودیت راهبردی تبدیل می‌شوند.",
      meta: ["Audio episode", "Podcast", "Ali Akhavan"],
      special: "media",
      mediaHeading: "Podcast player",
      faMediaHeading: "پلیر پادکست",
      mediaDescription: "Listen to the full episode here. This record connects the audio to startup continuity, funding risk and market timing.",
      faMediaDescription: "نسخه کامل صوتی این قسمت را اینجا بشنوید. این رکورد صدا را به تداوم استارتاپ، ریسک سرمایه و زمان بازار وصل می‌کند.",
      audioSrc: "Assets/podcast-ali-akhavan-135765.mp3",
      mediaLabel: "Play episode",
      sections: [],
      faq: []
    },
    ramyarGhanbariPodcast: {
      nav: "insights",
      label: "Podcast / Ramyar Ghanbari",
      faLabel: "پادکست / رامیار قنبری",
      title: "Continuity Podcast - Ramyar Ghanbari",
      faTitle: "پادکست کانتینیویتی - رامیار قنبری",
      lede: "An audio conversation with Ramyar Ghanbari on continuity signals, market context and how leaders recognize risk before it becomes interruption.",
      faLede: "گفت‌وگوی صوتی با رامیار قنبری درباره نشانه‌های تداوم، زمینه بازار و تشخیص ریسک پیش از تبدیل‌شدن به اختلال.",
      meta: ["Audio episode", "Podcast", "Ramyar Ghanbari"],
      special: "media",
      mediaHeading: "Podcast player",
      faMediaHeading: "پلیر پادکست",
      mediaDescription: "Listen to the full episode here. This record connects the audio to market continuity, weak signals and resilience practice.",
      faMediaDescription: "نسخه کامل صوتی این قسمت را اینجا بشنوید. این رکورد صدا را به تداوم بازار، نشانه‌های ضعیف و تجربه تاب‌آوری وصل می‌کند.",
      audioSrc: "Assets/podcast-ramyar-ghanbari-135766.mp3",
      mediaLabel: "Play episode",
      sections: [],
      faq: []
    },
    continuityVideocast: {
      nav: "insights",
      label: "Videocast / Episode 01",
      faLabel: "ویدیوکست / اپیزود ۰۱",
      title: "Continuity Videocast - Episode 01",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۰۱",
      subtitle: "Farhad Inaloui",
      faSubtitle: "فرهاد اینالویی",
      lede: "A videocast record from the House insight library, focused on continuity questions, service responsibility and digital banking practice.",
      faLede: "ویدیوکستی از کتابخانه بینش‌ها درباره پرسش‌های تداوم، مسئولیت خدمت و تجربه بانکداری دیجیتال.",
      meta: ["Aparat", "Videocast", "Farhad Inaloui"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/dqlg0mv/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    hesamVideocast: {
      nav: "insights",
      label: "Videocast / Episode 15",
      faLabel: "ویدیوکست / اپیزود ۱۵",
      title: "Continuity Videocast - Episode 15",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۵",
      subtitle: "Hesam Maghsoudloo",
      faSubtitle: "حسام مقصودلو",
      lede: "A videocast conversation on financial continuity, critical service responsibility and how leaders read continuity signals before disruption becomes loss.",
      faLede: "ویدیوکستی درباره تداوم مالی، مسئولیت خدمت حیاتی و شیوه خواندن نشانه‌های تداوم پیش از تبدیل اختلال به زیان.",
      meta: ["Aparat", "Videocast", "Hesam Maghsoudloo"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/ezd7651/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    continuityVideocastEpisode02: {
      nav: "insights",
      label: "Videocast / Episode 12",
      faLabel: "ویدیوکست / اپیزود ۱۲",
      title: "Continuity Videocast - Episode 12",
      faTitle: "ویدیوکست کانتینیویتی - اپیزود ۱۲",
      subtitle: "Meysam Rajabi",
      faSubtitle: "میثم رجبی",
      lede: "A videocast record from the House insight library, focused on continuity practice, decision quality and service resilience.",
      faLede: "رکوردی از ویدیوکست کتابخانه بینش‌ها درباره تجربه تداوم، کیفیت تصمیم و تاب‌آوری خدمت.",
      meta: ["Aparat", "Videocast", "Meysam Rajabi"],
      special: "media",
      mediaHeading: "Videocast player",
      faMediaHeading: "پلیر ویدیوکست",
      mediaDescription: "The episode is embedded from Aparat and remains connected to the Insight library.",
      faMediaDescription: "این قسمت از آپارات نمایش داده می‌شود و به کتابخانه بینش‌ها متصل می‌ماند.",
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/lomz3u6/vt/frame?titleShow=true&muted=true",
      mediaLabel: "Open transcript",
      sections: [],
      faq: []
    },
    gamecast: {
      nav: "insights",
      label: "Article / Toolkit",
      title: "Continuity decision game",
      faTitle: "بازی تصمیم‌گیری تداوم",
      lede: "A guided scenario for comparing choices, consequences and evidence before a continuity decision is made.",
      faLede: "سناریویی هدایت‌شده برای مقایسهٔ انتخاب‌ها، پیامدها و شواهد پیش از تصمیم‌گیری دربارهٔ تداوم.",
      meta: ["Interactive toolkit", "Scenario based", "30 min"],
      sections: [
        ["Choose a scenario", "Select a service interruption and work through the decisions in sequence.", ["Customer access outage", "Third-party failure", "Core banking degradation"]],
        ["Compare the outcome", "The gamecast records the trade-offs and links each decision to a Radar Pattern.", []]
      ]
    },
    people: {
      nav: "people",
      label: "House directory",
      title: "People",
      faTitle: "افراد",
      lede: "Technocratic Leaders, Thinkers and Experts contributing to Continuity. Roles describe contribution, not rank.",
      faLede: "رهبران، متفکران و متخصصان تکنوکرات که به موضوع تداوم کمک می‌کنند. نقش‌ها نوع مشارکت را توصیف می‌کنند، نه رتبه را.",
      meta: ["3 roles", "No scores", "Pattern-linked"],
      special: "directory",
      directory: "people"
    },
    person: {
      nav: "people",
      label: "Technocratic Leader",
      title: "Name Surname",
      faTitle: "نام و نام خانوادگی",
      lede: "Chief Risk Officer / Bank name. Editorial biography written for the House — not a LinkedIn paste.",
      faLede: "مدیر ارشد ریسک / نام بانک. زندگی‌نامه‌ای تحریری برای خانه، نه رونوشتی از لینکدین.",
      meta: ["Leader", "Banking", "Operational resilience"],
      special: "person",
      sections: [
        ["Biography", "A concise editorial biography describing the person’s experience and relationship to Continuity.", []],
        ["Occupation", "Chief Risk Officer / Bank name", []],
        ["Podcasts, videocasts and articles", "Published contributions remain connected to the person profile.", ["Continuity in the ecosystem", "Decomposing a core banking platform", "Why technical recovery is not customer recovery"]],
        ["People referrals", "Referrals made by this member are shown only when they are public and accepted.", []]
      ]
    },
    thinking: {
      nav: "thinking",
      label: "Technocratic Thinking",
      title: "Technocratic Thinking",
      faTitle: "تفکر تکنوکراتیک",
      lede: "A decision method for business continuity in systems that can no longer be managed by experience and intuition alone.",
      faLede: "روشی برای تصمیم‌گیری دربارهٔ تداوم کسب‌وکار در سیستم‌هایی که دیگر نمی‌توان آن‌ها را فقط با تجربه و شهود اداره کرد.",
      special: "thinkingRich",
      anchorTabs: [
        ["meaning", "Definition", "تعریف"],
        ["method", "Method", "روش"],
        ["phases", "Phases", "فازها"],
        ["radar-relation", "Radar", "رادار"],
        ["technocratic-book", "Book", "کتاب"],
        ["toolkit", "Toolkit", "جعبه ابزار"],
        ["faq", "FAQ", "پرسش‌ها"]
      ]
    },
    book: {
      nav: "thinking",
      label: "Technocratic Thinking / Book",
      title: "About the Technocratic Book",
      faTitle: "دربارهٔ کتاب تکنوکراتیک",
      lede: "A field guide to disciplined judgment where technology, institutions and public outcomes meet.",
      faLede: "راهنمایی میدانی برای قضاوت منضبط در نقطهٔ تلاقی فناوری، نهادها و نتایج عمومی.",
      meta: ["Principles", "Cases", "Shared language"],
      sections: [
        ["What the book covers", "The book frames recurring institutional problems before it discusses tools or solutions.", []],
        ["How it connects to the House", "Conversations, events and Radar evidence make the book a living body of practice.", []]
      ]
    },
    method: {
      nav: "thinking",
      label: "Technocratic Thinking / Method",
      title: "About the Technocratic Method",
      faTitle: "دربارهٔ روش تکنوکراتیک",
      lede: "Define the outcome, make assumptions visible, test evidence and keep responsibility attached to the decision.",
      faLede: "نتیجه را تعریف کنید، فرض‌ها را آشکار سازید، شواهد را بیازمایید و مسئولیت را به تصمیم متصل نگه دارید.",
      meta: ["Define", "Evaluate", "Review"],
      sections: [
        ["Frame the problem", "Start with the public, customer or institutional outcome that must continue.", []],
        ["Test the evidence", "Separate observed signals from assumptions and record the source of each claim.", []],
        ["Review the decision", "Make ownership, tolerance and the next review point explicit.", []]
      ]
    },
    house: {
      nav: "house",
      label: "Institutional environment",
      faLabel: "محیط نهادی",
      title: "House of Technocrats",
      faTitle: "خانه تکنوکرات‌ها",
      lede: "An institutional environment where leaders, thinkers and experts connect responsibility, evidence, experience and disciplined challenge without replacing the accountable leader.",
      faLede: "محیطی نهادی که در آن رهبران، متفکران و خبرگان، مسئولیت، شواهد، تجربه و نقد منضبط را کنار هم می‌گذارند، بی‌آنکه جای رهبر پاسخ‌گو را بگیرند.",
      special: "houseRich",
      anchorTabs: [
        ["what", "Definition", "تعریف"],
        ["why", "Why", "چرایی"],
        ["leader-boundary", "Leader boundary", "مرز رهبر"],
        ["architecture", "Core concepts", "معماری مفاهیم"],
        ["roles", "Three roles", "سه نقش"],
        ["dimensions", "Physical and digital", "فیزیکی و دیجیتال"],
        ["engagement", "Engagement journey", "سفر مشارکت"],
        ["activities", "Activities", "فعالیت‌ها"],
        ["knowledge-loop", "Knowledge loop", "حلقه دانش"],
        ["boundaries", "Boundaries", "مرزها"],
        ["participate", "Participate", "مشارکت"],
        ["solutions", "Solutions", "راه‌حل‌ها"],
        ["faq", "FAQ", "پرسش‌ها"]
      ]
    },
    packages: {
      nav: "house",
      label: "House / Packages",
      title: "Our Packages",
      faTitle: "بسته‌های ما",
      lede: "Focused combinations of storytelling, science and facilitated practice for a defined continuity need.",
      faLede: "ترکیبی متمرکز از روایت‌گری، دانش و تمرین تسهیل‌شده برای یک نیاز مشخص تداوم.",
      meta: ["Line 1", "Story", "Science"],
      sections: [
        ["Line 1 / Story and Science", "A compact package that combines one evidence-led story, one expert session and one practical review.", []],
        ["Package fit", "Each package states its intended audience, scope, duration and expected outcome before engagement.", []]
      ]
    },
    events: {
      nav: "house",
      label: "House / Events",
      title: "Our Events",
      faTitle: "رویدادهای ما",
      lede: "Small, subject-led gatherings designed for contribution, evidence and useful disagreement.",
      faLede: "گردهمایی‌های کوچک و موضوع‌محور برای مشارکت، شواهد و اختلاف‌نظر سازنده.",
      meta: ["Line 6", "Narges", "Neda"],
      sections: [
        ["Line 6 / Narges and Neda", "The current event line connects operator experience with evidence from the Radar.", []],
        ["Event format", "Briefing, moderated conversation, working session and an explicit record of what changed.", []]
      ]
    },
    participate: {
      nav: "participate",
      label: "Participation hub",
      title: "Participate",
      faTitle: "مشارکت",
      lede: "Four clear routes into the House. Each route states who it is for and what happens next.",
      faLede: "چهار مسیر روشن برای ورود به خانه. هر مسیر مشخص می‌کند برای چه کسی است و سپس چه اتفاقی می‌افتد.",
      meta: ["Invitation", "Membership", "Referral", "Conversation"],
      special: "routes"
    },
    invitation: {
      nav: "participate",
      label: "Personal invitation / code ····9F2",
      title: "Name Surname, you have been invited into the House.",
      faTitle: "نام و نام خانوادگی، شما به خانه دعوت شده‌اید.",
      lede: "This private route keeps the context of the invitation, the relevant Pattern and the next four steps together.",
      faLede: "این مسیر خصوصی، زمینهٔ دعوت، الگوی مرتبط و چهار گام بعدی را یکجا نگه می‌دارد.",
      meta: ["Valid to 30 Sep 2026", "One-time use", "Technocratic Leader"],
      sections: [
        ["Why you", "A personal message from the referrer or the House explains why this specific person was selected.", []],
        ["The relevant Pattern", "Service-owner accountability model / Continuity Governance.", []],
        ["What happens next", "1 Activate invitation / 2 Complete registration / 3 Confirm public profile / 4 Accept membership.", []]
      ]
    },
    activation: {
      nav: "participate",
      label: "Activation / secure / step 2 of 4",
      title: "Complete your registration",
      faTitle: "ثبت‌نام خود را تکمیل کنید",
      lede: "Invitation verified for Name Surname. Progress is saved after each step.",
      faLede: "دعوت‌نامه برای نام و نام خانوادگی تأیید شد. پیشرفت پس از هر گام ذخیره می‌شود.",
      meta: ["Identity", "Professional", "Public profile"],
      special: "form",
      formType: "activation"
    },
    membership: {
      nav: "participate",
      label: "Public membership request",
      title: "Submit a Membership Request",
      faTitle: "ارسال درخواست عضویت",
      lede: "Membership is reviewed, not automatic. A request is an introduction, not an application to a service.",
      faLede: "عضویت بررسی می‌شود و خودکار نیست. درخواست، یک معرفی است نه ثبت‌نام در یک سرویس.",
      meta: ["Reviewed internally", "Response within 30 days", "No public record while pending"],
      special: "form",
      formType: "membership"
    },
    referral: {
      nav: "participate",
      label: "Active member route",
      title: "Refer a Technocrat",
      faTitle: "معرفی یک تکنوکرات",
      lede: "A referral is a recommendation for review. It is not an acceptance, and the candidate is not shown publicly before membership.",
      faLede: "معرفی، توصیه‌ای برای بررسی است؛ پذیرش نیست و نام فرد پیش از عضویت عمومی نمی‌شود.",
      meta: ["2 of 5 used", "3 remaining", "Private to the member"],
      special: "form",
      formType: "referral"
    },
    services: {
      nav: "services",
      label: "Technocratic Service Store",
      title: "Technocratic Service Store",
      faTitle: "فروشگاه خدمات تکنوکراتیک",
      lede: "A clear view of current services and the service lines being prepared for the future.",
      faLede: "نمایی روشن از خدمات فعلی و مسیرهای خدماتی که برای آینده آماده می‌شوند.",
      meta: ["Current services", "Future services", "Transparent scope"],
      sections: [
        ["Current Services", "Available service lines with a defined scope, audience and delivery format.", []],
        ["Future Services", "Service concepts under development, shown without implying current availability.", []]
      ]
    },
    currentServices: {
      nav: "services",
      label: "Service Store / Current",
      title: "Current Services",
      faTitle: "خدمات فعلی",
      lede: "Available technocratic services with explicit outcomes, boundaries and engagement formats.",
      faLede: "خدمات تکنوکراتیک موجود با نتیجه، مرز و قالب همکاری روشن.",
      meta: ["Available now", "Defined scope", "House delivery"],
      sections: [
        ["Continuity briefing", "A focused briefing that connects a management question to relevant Radar evidence.", []],
        ["Executive working session", "A facilitated session for clarifying service outcomes, ownership and tolerance.", []],
        ["Technocratic package", "A combined story, science and practice engagement from the House package line.", []]
      ]
    },
    futureServices: {
      nav: "services",
      label: "Service Store / Future",
      title: "Future Services",
      faTitle: "خدمات آینده",
      lede: "Service concepts in research or pilot stages. Availability and scope will be published after validation.",
      faLede: "مفهوم‌های خدماتی در مرحلهٔ پژوهش یا پایلوت. دسترسی و دامنه پس از اعتبارسنجی منتشر می‌شود.",
      meta: ["Research", "Pilot", "Not yet available"],
      sections: [
        ["Radar evidence workspace", "A guided workspace for connecting organizational evidence to categories and patterns.", []],
        ["Scenario rehearsal service", "A facilitated rehearsal model for testing continuity decisions before an incident.", []]
      ]
    },
    about: {
      nav: "about",
      label: "Contact Us",
      title: "Contact Us",
      faTitle: "تماس با ما",
      lede: "House of Technocrats is a physical and digital place for evidence-led work around Continuity.",
      faLede: "خانهٔ تکنوکرات‌ها مکانی فیزیکی و دیجیتال برای کار مبتنی بر شواهد پیرامون تداوم است.",
      meta: ["House address", "WhatsApp", "General contact"],
      hideInnerHero: true,
      special: "aboutContact",
      sections: [
        ["About House of Technocrats", "The House connects technocratic thinking, public knowledge, people and practical service around one subject.", []],
        ["House Address", "No. 3, Habibi Alley, Soroush St., Barazandeh St., Before Seyed Khandad Bridge, Hakim Expressway, Tehran, Iran", []],
        ["WhatsApp", "+98 912 000 0000", []],
        ["Contact", "For visits, media and general enquiries, use the published House contact route.", []]
      ]
    },
    contribution: {
      nav: "participate",
      label: "Public contribution route",
      title: "Share a Contribution",
      faTitle: "ثبت مشارکت یا نظر",
      lede: "Submit a comment, proposal, evidence or contribution for House review.",
      faLede: "نظر، پیشنهاد، شاهد یا مشارکتی را برای بررسی خانه ارسال کنید.",
      meta: ["Comment", "Evidence", "Contribution"],
      special: "form",
      formType: "contribution"
    },
    confirmation: {
      nav: "participate",
      label: "Participation / confirmation",
      title: "Submission Received",
      faTitle: "ارسال دریافت شد",
      lede: "The task is complete. Its reference and next step are available below.",
      faLede: "این کار کامل شد. شناسه و گام بعدی آن در ادامه آمده است.",
      meta: ["Complete", "Reference created", "Next step stated"],
      special: "confirmation"
    },
    search: {
      nav: "",
      label: "Site search",
      title: "Search Results",
      faTitle: "نتایج جست‌وجو",
      lede: "One search across Categories, Patterns, Content, People and public Evidence.",
      faLede: "یک جست‌وجو در دسته‌بندی‌ها، الگوها، محتوا، افراد و شواهد عمومی.",
      meta: ["5 public objects", "FA + EN", "Grouped results"],
      special: "search"
    }
  };

  var translations = {
    fa: {
      "nav.continuity": "تداوم",
      "nav.radar": "رادار دیپ‌بلو",
      "nav.insights": "بینش‌ها",
      "nav.thinking": "تفکر تکنوکراتیک",
      "nav.people": "افراد",
      "nav.house": "خانه",
      "nav.participate": "مشارکت",
      "nav.services": "بازی تداوم",
      "nav.about": "تماس با ما",
      "nav.search": "جست‌وجو در همه‌چیز",
      "hero.label": "تداوم",
      "hero.title": "سازمان‌ها به این دلیل از میان نمی‌روند که مورد حمله قرار می‌گیرند؛<br> به این دلیل از میان می‌روند که نمی‌توانند ادامه دهند.",
      "hero.primary": "کاوش در رادار دیپ‌بلو",
      "hero.secondary": "تداوم چیست؟",
      "radar.kicker": "Deep Blue Radar — میدان دید تداوم",
      "radar.title": "میدان دیدی برای شناخت آنچه بر تداوم سازمان اثر می‌گذارد",
      "radar.all": "مشاهدهٔ همهٔ ۱۶ Domain",
      "radar.overview": "نمای کلی رادار",
      "radar.explore": "دامنه را در یک نگاه درک کنید.",
      "radar.description": "Domainها حوزهٔ مشاهده را سازمان‌دهی می‌کنند. Patternها نشان می‌دهند تداوم کجا تقویت یا تضعیف می‌شود.",
      "radar.categories": "Domain",
      "radar.patterns": "الگو",
      "radar.open": "کاوش در رادار",
      "common.category": "Domain",
      "category.architecture": "معماری تداوم",
      "category.architectureDesc": "تجزیه، تنوع و جداسازی تا خرابی محلی بماند.",
      "category.risk": "رصد ریسک و هشدار زودهنگام",
      "category.riskDesc": "پیش از آن‌که نشانه‌های ضعیف به حادثهٔ سازمان تبدیل شوند، از آن‌ها بیاموزید.",
      "patterns.title": "الگوهای برگزیده",
      "patterns.all": "کاوش الگوها بر اساس دسته‌بندی",
      "insights.title": "آخرین مقاله‌ها و خلاصه‌های مدیریتی",
      "insights.all": "کتابخانهٔ بینش‌ها",
      "conversation.title": "گفت‌وگوهای برگزیده",
      "people.title": "رهبران، اندیشمندان و متخصصان برگزیده",
      "people.all": "مشاهدهٔ همهٔ افراد",
      "house.title": "جایی که رهبران، اندیشمندان و متخصصان گرد یک موضوع جمع می‌شوند.",
      "house.cta": "درون خانه",
      "reports.title": "گزارش‌ها و خبرنامه",
      "participate.title": "یک پرسش، نشانه یا تجربهٔ زیسته از تداوم را با خانه در میان بگذارید."
    }
  };

  var literalTranslations = {
    "Insights / Storytelling": "بینش‌ها / روایت‌گری",
    "Storytelling Overview": "نمای کلی روایت‌گری",
    "Thinking Overview": "نمای کلی تفکر تکنوکراتیک",
    "Service Store Overview": "نمای کلی فروشگاه خدمات",
    "Three storytelling formats connect evidence, people and practical Continuity decisions.": "سه قالب روایت‌گری، شواهد، افراد و تصمیم‌های عملی تداوم را به هم متصل می‌کنند.",
    "Podcast": "پادکست",
    "Videocast": "ویدیوکست",
    "Continuity Podcast - Farhad Inaloui": "پادکست کانتینیویتی - فرهاد اینالویی",
    "Continuity Podcast - Alireza Bozorgmehri": "پادکست کانتینیویتی - علیرضا بزرگمهری",
    "Continuity Podcast - Ali Akhavan": "پادکست کانتینیویتی - علی اخوان",
    "Continuity Podcast - Ramyar Ghanbari": "پادکست کانتینیویتی - رامیار قنبری",
    "Continuity Videocast - Episode 01": "ویدیوکست کانتینیویتی - اپیزود ۰۱",
    "Continuity Videocast - Episode 02": "ویدیوکست کانتینیویتی - اپیزود ۰۲",
    "Continuity Videocast - Episode 03": "ویدیوکست کانتینیویتی - اپیزود ۰۳",
    "Continuity Videocast - Episode 04": "ویدیوکست کانتینیویتی - اپیزود ۰۴",
    "Continuity Videocast - Episode 05": "ویدیوکست کانتینیویتی - اپیزود ۰۵",
    "Continuity Videocast - Episode 06": "ویدیوکست کانتینیویتی - اپیزود ۰۶",
    "Continuity Videocast - Episode 07": "ویدیوکست کانتینیویتی - اپیزود ۰۷",
    "Continuity Videocast - Episode 08": "ویدیوکست کانتینیویتی - اپیزود ۰۸",
    "Continuity Videocast - Episode 09": "ویدیوکست کانتینیویتی - اپیزود ۰۹",
    "Continuity Videocast - Episode 10": "ویدیوکست کانتینیویتی - اپیزود ۱۰",
    "Continuity Videocast - Episode 11": "ویدیوکست کانتینیویتی - اپیزود ۱۱",
    "Continuity Videocast - Episode 13": "ویدیوکست کانتینیویتی - اپیزود ۱۳",
    "Continuity Videocast - Episode 14": "ویدیوکست کانتینیویتی - اپیزود ۱۴",
    "Continuity Videocast - Episode 12": "ویدیوکست کانتینیویتی - اپیزود ۱۲",
    "Continuity Videocast - Episode 15": "ویدیوکست کانتینیویتی - اپیزود ۱۵",
    "Continuity Videocast - Episode 16": "ویدیوکست کانتینیویتی - اپیزود ۱۶",
    "Podcast / Farhad Inaloui": "پادکست / فرهاد اینالویی",
    "Podcast / Alireza Bozorgmehri": "پادکست / علیرضا بزرگمهری",
    "Podcast / Ali Akhavan": "پادکست / علی اخوان",
    "Podcast / Ramyar Ghanbari": "پادکست / رامیار قنبری",
    "Videocast / Farhad Inaloui": "ویدیوکست / فرهاد اینالویی",
    "Videocast / Alireza Bozorgmehri": "ویدیوکست / علیرضا بزرگمهری",
    "Videocast / Ali Akhavan": "ویدیوکست / علی اخوان",
    "Videocast / Mohammad Farjood": "ویدیوکست / محمد فرجود",
    "Videocast / Ramyar Ghanbari": "ویدیوکست / رامیار قنبری",
    "Videocast / Mahmoudreza Farhadi": "ویدیوکست / محمودرضا فرهادی",
    "Videocast / Sadegh Faramarzi": "ویدیوکست / صادق فرامرزی",
    "Videocast / Mostafa Sabeti": "ویدیوکست / مصطفی ثابتی",
    "Videocast / Amirhossein Shabiri": "ویدیوکست / امیرحسین شبیری",
    "Videocast / Sadra Babaei": "ویدیوکست / صدرا بابایی",
    "Videocast / Saman Beyraghi": "ویدیوکست / سامان بیرقی",
    "Videocast / Alireza Ghanadan": "ویدیوکست / علیرضا قنادان",
    "Videocast / Mostafa Amiri": "ویدیوکست / مصطفی امیری",
    "Videocast / Nima Amirshekari": "ویدیوکست / نیما امیرشکاری",
    "Videocast / Hesam Maghsoudloo": "ویدیوکست / حسام مقصودلو",
    "Videocast / Meysam Rajabi": "ویدیوکست / میثم رجبی",
    "Business continuity": "تداوم کسب‌وکار",
    "Digital banking continuity": "تداوم بانکداری دیجیتال",
    "Payment continuity": "تداوم پرداخت",
    "Neobank and fintech continuity": "تداوم نئوبانک و فین‌تک",
    "Business continuity management": "مدیریت تداوم کسب‌وکار",
    "Adaptive continuity": "تداوم تطبیقی",
    "Continuity planning": "برنامه تداوم کسب‌وکار",
    "Digital asset continuity": "تداوم دارایی دیجیتال",
    "FinTech continuity": "تداوم فین‌تک",
    "Payment resilience": "تاب‌آوری پرداخت",
    "Digital economy continuity": "تداوم اقتصاد دیجیتال",
    "Enterprise resilience": "تاب‌آوری سازمانی",
    "Operational resilience": "تاب‌آوری عملیاتی",
    "Backup readiness": "آمادگی سایت پشتیبان",
    "Article / Nima Amirshekari": "مقاله / نیما امیرشکاری",
    "Article / Toolkit": "مقاله / ابزار",
    "Continuity in the ecosystem": "تداوم در اکوسیستم",
    "Decomposing a core banking platform": "تجزیهٔ یک پلتفرم بانکداری متمرکز",
    "Continuity decision game": "بازی تصمیم‌گیری تداوم",
    "Continuity storytelling": "روایت‌گری تداوم",
    "Continuity conversation": "گفت‌وگوی تداوم",
    "Continuity practice": "تمرین تداوم",
    "Interactive toolkit / guided scenario": "ابزار تعاملی / سناریوی هدایت‌شده",
    "A guided scenario for comparing choices, consequences and evidence before a continuity decision is made.": "سناریویی هدایت‌شده برای مقایسهٔ انتخاب‌ها، پیامدها و شواهد پیش از تصمیم‌گیری دربارهٔ تداوم.",
    "Interactive toolkit": "ابزار تعاملی",
    "Scenario based": "مبتنی بر سناریو",
    "30 min": "۳۰ دقیقه",
    "Choose a scenario": "انتخاب سناریو",
    "Select a service interruption and work through the decisions in sequence.": "یک اختلال سرویس را انتخاب کنید و تصمیم‌ها را به‌ترتیب بررسی کنید.",
    "Customer access outage": "اختلال دسترسی مشتری",
    "Third-party failure": "شکست طرف ثالث",
    "Core banking degradation": "افت سرویس بانکداری متمرکز",
    "Compare the outcome": "مقایسهٔ نتیجه",
    "The gamecast records the trade-offs and links each decision to a Radar Pattern.": "گیم‌کست موازنه‌ها را ثبت می‌کند و هر تصمیم را به یک الگوی رادار پیوند می‌دهد.",
    "Technocratic Thinking": "تفکر تکنوکراتیک",
    "A disciplined way to connect evidence, method and practical judgment before choosing a tool.": "رویکردی منضبط برای پیوند دادن شواهد، روش و قضاوت عملی پیش از انتخاب ابزار.",
    "Book": "کتاب",
    "Method": "روش",
    "Applied practice": "تمرین کاربردی",
    "About the Technocratic Book": "دربارهٔ کتاب تکنوکراتیک",
    "The book establishes the language, principles and cases behind technocratic work.": "این کتاب زبان، اصول و نمونه‌های پشت کار تکنوکراتیک را صورت‌بندی می‌کند.",
    "About the Technocratic Method": "دربارهٔ روش تکنوکراتیک",
    "The method turns evidence into a transparent sequence of decisions and review.": "این روش شواهد را به توالی شفافی از تصمیم و بازبینی تبدیل می‌کند.",
    "Technocratic Thinking / Book": "تفکر تکنوکراتیک / کتاب",
    "A field guide to disciplined judgment where technology, institutions and public outcomes meet.": "راهنمایی میدانی برای قضاوت منضبط در نقطهٔ تلاقی فناوری، نهادها و نتایج عمومی.",
    "Principles": "اصول",
    "Cases": "نمونه‌ها",
    "Shared language": "زبان مشترک",
    "What the book covers": "موضوع‌های کتاب",
    "The book frames recurring institutional problems before it discusses tools or solutions.": "کتاب پیش از پرداختن به ابزار یا راه‌حل، مسائل تکرارشوندهٔ نهادی را چارچوب‌بندی می‌کند.",
    "How it connects to the House": "ارتباط آن با خانه",
    "Conversations, events and Radar evidence make the book a living body of practice.": "گفت‌وگوها، رویدادها و شواهد رادار، کتاب را به مجموعه‌ای زنده از تجربه تبدیل می‌کنند.",
    "Technocratic Thinking / Method": "تفکر تکنوکراتیک / روش",
    "Define the outcome, make assumptions visible, test evidence and keep responsibility attached to the decision.": "نتیجه را تعریف کنید، فرض‌ها را آشکار سازید، شواهد را بیازمایید و مسئولیت را به تصمیم متصل نگه دارید.",
    "Define": "تعریف",
    "Evaluate": "ارزیابی",
    "Review": "بازبینی",
    "Frame the problem": "چارچوب‌بندی مسئله",
    "Start with the public, customer or institutional outcome that must continue.": "از نتیجهٔ عمومی، مشتری یا نهادی که باید ادامه یابد آغاز کنید.",
    "Test the evidence": "آزمودن شواهد",
    "Separate observed signals from assumptions and record the source of each claim.": "نشانه‌های مشاهده‌شده را از فرض‌ها جدا و منبع هر ادعا را ثبت کنید.",
    "Review the decision": "بازبینی تصمیم",
    "Make ownership, tolerance and the next review point explicit.": "مالکیت، آستانهٔ تحمل و زمان بازبینی بعدی را روشن کنید.",
    "House / About": "خانه / درباره",
    "About the House": "دربارهٔ خانه",
    "A house is not a network. It is a place with a subject, a discipline and clear ways to participate.": "خانه یک شبکه نیست؛ مکانی است با یک موضوع، یک رویکرد و مسیرهای روشن برای مشارکت.",
    "About": "درباره",
    "Packages": "بسته‌ها",
    "Events": "رویدادها",
    "About House / Discipline": "دربارهٔ خانه / رویکرد",
    "Our Packages": "بسته‌های ما",
    "Structured House packages combine stories, science and facilitated work.": "بسته‌های ساختاریافتهٔ خانه، روایت، دانش و کار تسهیل‌شده را ترکیب می‌کنند.",
    "Our Events": "رویدادهای ما",
    "House events bring Leaders, Thinkers and Experts together around one continuity subject.": "رویدادهای خانه، رهبران، اندیشمندان و متخصصان را پیرامون یک موضوع تداوم گرد هم می‌آورند.",
    "Participate in the House": "مشارکت در خانه",
    "Choose the invitation, membership, referral or conversation route that matches your situation.": "مسیر دعوت‌نامه، عضویت، معرفی یا گفت‌وگو را متناسب با وضعیت خود انتخاب کنید.",
    "How to contact the House": "راه‌های تماس با خانه",
    "Use the About Us page for the House address, WhatsApp and general contact route.": "برای نشانی خانه، واتس‌اپ و مسیر تماس عمومی از صفحهٔ دربارهٔ ما استفاده کنید.",
    "Contact House of Technocrats": "تماس با خانهٔ تکنوکرات‌ها",
    "House / Packages": "خانه / بسته‌ها",
    "Focused combinations of storytelling, science and facilitated practice for a defined continuity need.": "ترکیبی متمرکز از روایت‌گری، دانش و تمرین تسهیل‌شده برای یک نیاز مشخص تداوم.",
    "Line 1": "خط ۱",
    "Story": "روایت",
    "Science": "دانش",
    "Line 1 / Story and Science": "خط ۱ / روایت و دانش",
    "A compact package that combines one evidence-led story, one expert session and one practical review.": "بسته‌ای فشرده که یک روایت مبتنی بر شواهد، یک جلسهٔ تخصصی و یک بازبینی عملی را ترکیب می‌کند.",
    "Package fit": "تناسب بسته",
    "Each package states its intended audience, scope, duration and expected outcome before engagement.": "هر بسته پیش از شروع همکاری، مخاطب، دامنه، مدت و نتیجهٔ مورد انتظار را روشن می‌کند.",
    "House / Events": "خانه / رویدادها",
    "Small, subject-led gatherings designed for contribution, evidence and useful disagreement.": "گردهمایی‌های کوچک و موضوع‌محور برای مشارکت، شواهد و اختلاف‌نظر سازنده.",
    "Line 6": "خط ۶",
    "Narges": "نرگس",
    "Neda": "ندا",
    "Line 6 / Narges and Neda": "خط ۶ / نرگس و ندا",
    "The current event line connects operator experience with evidence from the Radar.": "خط فعلی رویداد، تجربهٔ اجرایی را به شواهد رادار متصل می‌کند.",
    "Event format": "قالب رویداد",
    "Briefing, moderated conversation, working session and an explicit record of what changed.": "ارائهٔ کوتاه، گفت‌وگوی هدایت‌شده، جلسهٔ کاری و ثبت روشن آنچه تغییر کرده است.",
    "Four routes into the House. Each route states who it is for and what happens next.": "چهار مسیر روشن برای ورود به خانه. هر مسیر مشخص می‌کند برای چه کسی است و سپس چه اتفاقی می‌افتد.",
    "Membership": "عضویت",
    "Referral": "معرفی",
    "Conversation": "گفت‌وگو",
    "Media participation route": "مسیر مشارکت رسانه‌ای",
    "Join a Conversation": "پیوستن به یک گفت‌وگو",
    "Propose a subject for a podcast, videocast or facilitated House conversation.": "موضوعی برای پادکست، ویدیوکست یا گفت‌وگوی تسهیل‌شدهٔ خانه پیشنهاد دهید.",
    "House conversation": "گفت‌وگوی خانه",
    "For podcast, videocast or House conversation proposals.": "برای پیشنهاد پادکست، ویدیوکست یا گفت‌وگوی خانه.",
    "Conversation proposal": "پیشنهاد گفت‌وگو",
    "Preferred format *": "قالب ترجیحی *",
    "Podcast / videocast / House conversation": "پادکست / ویدیوکست / گفت‌وگوی خانه",
    "Proposed subject *": "موضوع پیشنهادی *",
    "Why should this conversation happen? *": "چرا این گفت‌وگو باید شکل بگیرد؟ *",
    "Summarize the subject, experience and expected contribution": "موضوع، تجربه و مشارکت مورد انتظار را خلاصه کنید",
    "Submit Conversation Proposal": "ارسال پیشنهاد گفت‌وگو",
    "Technocratic Service Store": "فروشگاه خدمات تکنوکراتیک",
    "A clear view of current services and the service lines being prepared for the future.": "نمایی روشن از خدمات فعلی و مسیرهای خدماتی که برای آینده آماده می‌شوند.",
    "Current services": "خدمات فعلی",
    "Future services": "خدمات آینده",
    "Transparent scope": "دامنهٔ شفاف",
    "Current Services": "خدمات فعلی",
    "Available service lines with a defined scope, audience and delivery format.": "مسیرهای خدماتی موجود با دامنه، مخاطب و قالب ارائهٔ مشخص.",
    "Future Services": "خدمات آینده",
    "Service concepts under development, shown without implying current availability.": "مفهوم‌های خدماتی در حال توسعه، بدون القای دسترسی فعلی نمایش داده می‌شوند.",
    "Service Store / Current": "فروشگاه خدمات / فعلی",
    "Available technocratic services with explicit outcomes, boundaries and engagement formats.": "خدمات تکنوکراتیک موجود با نتیجه، مرز و قالب همکاری روشن.",
    "Available now": "اکنون در دسترس",
    "Defined scope": "دامنهٔ مشخص",
    "House delivery": "ارائه توسط خانه",
    "Continuity briefing": "ارائهٔ متمرکز تداوم",
    "A focused briefing that connects a management question to relevant Radar evidence.": "ارائه‌ای متمرکز که یک پرسش مدیریتی را به شواهد مرتبط رادار متصل می‌کند.",
    "Executive working session": "جلسهٔ کاری مدیران",
    "A facilitated session for clarifying service outcomes, ownership and tolerance.": "جلسه‌ای تسهیل‌شده برای روشن کردن نتایج سرویس، مالکیت و آستانهٔ تحمل.",
    "Technocratic package": "بستهٔ تکنوکراتیک",
    "A combined story, science and practice engagement from the House package line.": "همکاری ترکیبی از روایت، دانش و تمرین از خط بسته‌های خانه.",
    "Service Store / Future": "فروشگاه خدمات / آینده",
    "Service concepts in research or pilot stages. Availability and scope will be published after validation.": "مفهوم‌های خدماتی در مرحلهٔ پژوهش یا پایلوت. دسترسی و دامنه پس از اعتبارسنجی منتشر می‌شود.",
    "Research": "پژوهش",
    "Pilot": "پایلوت",
    "Not yet available": "هنوز در دسترس نیست",
    "Radar evidence workspace": "فضای کاری شواهد رادار",
    "A guided workspace for connecting organizational evidence to categories and patterns.": "فضایی هدایت‌شده برای اتصال شواهد سازمانی به دسته‌بندی‌ها و الگوها.",
    "Scenario rehearsal service": "خدمت تمرین سناریو",
    "A facilitated rehearsal model for testing continuity decisions before an incident.": "مدلی تسهیل‌شده برای آزمودن تصمیم‌های تداوم پیش از رخداد.",
    "About Us": "تماس با ما",
    "House of Technocrats is a physical and digital place for evidence-led work around Continuity.": "خانهٔ تکنوکرات‌ها مکانی فیزیکی و دیجیتال برای کار مبتنی بر شواهد پیرامون تداوم است.",
    "House address": "نشانی خانه",
    "WhatsApp": "واتس‌اپ",
    "General contact": "تماس عمومی",
    "About House of Technocrats": "دربارهٔ خانهٔ تکنوکرات‌ها",
    "The House connects technocratic thinking, public knowledge, people and practical service around one subject.": "خانه، تفکر تکنوکراتیک، دانش عمومی، افراد و خدمات عملی را پیرامون یک موضوع به هم متصل می‌کند.",
    "House Address": "نشانی خانه",
    "Tehran, Iran / exact visiting address supplied after appointment.": "تهران، ایران / نشانی دقیق پس از هماهنگی ارائه می‌شود.",
    "Contact": "تماس",
    "For visits, media and general enquiries, use the published House contact route.": "برای بازدید، رسانه و پرسش‌های عمومی از مسیر تماس منتشرشدهٔ خانه استفاده کنید.",
    "PROFILE DETAILS": "جزئیات پروفایل",
    "Role": "نقش",
    "Subject": "موضوع",
    "Biography": "زندگی‌نامه",
    "A concise editorial biography describing the person’s experience and relationship to Continuity.": "زندگی‌نامه‌ای کوتاه و تحریری که تجربهٔ فرد و رابطهٔ او با تداوم را توضیح می‌دهد.",
    "Occupation": "حرفه",
    "Podcasts, videocasts and articles": "پادکست‌ها، ویدیوکست‌ها و مقاله‌ها",
    "Published contributions remain connected to the person profile.": "مشارکت‌های منتشرشده به پروفایل فرد متصل می‌مانند.",
    "People referrals": "معرفی افراد",
    "Referrals made by this member are shown only when they are public and accepted.": "معرفی‌های انجام‌شده توسط این عضو فقط پس از عمومی و پذیرفته‌شدن نمایش داده می‌شوند.",
    "Explore the Radar": "کاوش در رادار",
    "Overview & Method": "نمای کلی و روش",
    "Overview and method": "نمای کلی و روش",
    "Explore 16 Categories": "کاوش در ۱۶ دسته‌بندی",
    "Reports & Updates": "گزارش‌ها و به‌روزرسانی‌ها",
    "Radar overview & method": "نمای کلی و روش رادار",
    "Explorer": "کاوشگر",
    "Deep Blue Radar / Explorer view": "رادار دیپ‌بلو / نمای کاوشگر",
    "Categories view": "نمای دسته‌بندی‌ها",
    "Patterns view": "نمای الگوها",
    "Explorer utility": "ابزار کاوشگر",
    "Stable links": "پیوندهای پایدار",
    "One Radar product": "یک محصول رادار",
    "16 Categories / 32 Patterns": "۱۶ دسته‌بندی / ۳۲ الگو",
    "32 contextual Patterns": "۳۲ الگوی زمینه‌ای",
    "Deep links preserved": "پیوندهای مستقیم حفظ شده‌اند",
    "Interactive Explorer": "کاوشگر تعاملی",
    "Selected Category": "دسته‌بندی انتخاب‌شده",
    "Pattern record": "رکورد الگو",
    "Start with the 16-category map. Selecting a Category reveals its context and two Patterns without leaving the Explorer.": "از نقشهٔ ۱۶ دسته‌بندی آغاز کنید. با انتخاب هر دسته‌بندی، زمینه و دو الگوی آن بدون خروج از کاوشگر نمایش داده می‌شود.",
    "Choose one task": "یک کار را انتخاب کنید",
    "Complete it end to end": "آن را از ابتدا تا انتها کامل کنید",
    "Receive confirmation": "تأیید دریافت کنید",
    "Public contribution route": "مسیر عمومی مشارکت",
    "Share Insight or Evidence": "اشتراک بینش یا شواهد",
    "Public route": "مسیر عمومی",
    "Editorial review": "بررسی تحریریه",
    "Nothing published automatically": "هیچ چیزی خودکار منتشر نمی‌شود",
    "Participation / confirmation": "مشارکت / تأیید",
    "Submission Received": "ارسال دریافت شد",
    "Complete": "کامل",
    "Reference created": "شناسه ساخته شد",
    "Next step stated": "گام بعدی مشخص است",
    "Home": "خانه",
    "Continuity pillar": "ستون تداوم",
    "The institution": "نهاد",
    "Deep Blue Radar / Directory": "رادار دیپ‌بلو / فهرست",
    "Deep Blue Radar": "رادار دیپ‌بلو",
    "Radar view": "نمای رادار",
    "List equivalent": "معادل فهرستی",
    "Keyboard ready": "آماده برای صفحه‌کلید",
    "Knowledge library": "کتابخانهٔ دانش",
    "House directory": "فهرست خانه",
    "Site search": "جست‌وجوی سایت",
    "9 content types": "۹ نوع محتوا",
    "FA + EN": "فارسی + انگلیسی",
    "Transcripts indexed": "متن‌های پیاده‌شده نمایه‌سازی شده",
    "3 roles": "۳ نقش",
    "No scores": "بدون امتیازدهی",
    "Seven dimensions": "هفت بُعد",
    "FAQ included": "پرسش‌های متداول موجود است",
    "Evidence-linked": "متصل به شواهد",
    "URL-based filters": "فیلترهای مبتنی بر نشانی",
    "Updated monthly": "به‌روزرسانی ماهانه",
    "Technocratic thinking": "اندیشهٔ تکنوکراتیک",
    "Physical + digital": "فیزیکی + دیجیتال",
    "Invitation": "دعوت‌نامه",
    "Membership request": "درخواست عضویت",
    "Contribution": "مشارکت",
    "Continuity": "تداوم",
    "3 selected Patterns": "۳ الگوی برگزیده",
    "16 Categories": "۱۶ دسته‌بندی",
    "32 Patterns": "۳۲ الگو",
    "2 Patterns": "۲ الگو",
    "Pattern-linked": "مرتبط با الگو",
    "Category 01 of 16": "دسته‌بندی ۰۱ از ۱۶",
    "Pattern / Continuity Architecture": "الگو / معماری تداوم",
    "How to read the Radar": "چگونه رادار را بخوانیم",
    "A Category is a scope of continuity concern. A Pattern is a recurring, evidenced way continuity is won or lost. Signals support a Pattern. Management lenses turn it into action.": "دسته‌بندی دامنهٔ نگرانی تداوم را مشخص می‌کند. الگو شیوه‌ای تکرارشونده و مبتنی بر شواهد است که نشان می‌دهد تداوم چگونه به دست می‌آید یا از دست می‌رود. نشانه‌ها از الگو پشتیبانی می‌کنند و لنزهای مدیریتی آن را به اقدام تبدیل می‌کنند.",
    "16 Category definitions": "۱۶ تعریف دسته‌بندی",
    "32 Pattern records": "۳۲ رکورد الگو",
    "Why this Category matters": "چرا این دسته‌بندی مهم است",
    "Patterns in this Category": "الگوهای این دسته‌بندی",
    "Two Patterns define the current continuity architecture scope.": "دو الگو دامنهٔ فعلی معماری تداوم را تعریف می‌کنند.",
    "Why this Pattern matters": "چرا این الگو مهم است",
    "Sixteen Category fields": "شانزده حوزهٔ دسته‌بندی",
    "The selected Category previews its two Patterns. The same content remains available as a keyboard-accessible list.": "دسته‌بندی انتخاب‌شده دو الگوی خود را نمایش می‌دهد. همین محتوا به‌صورت فهرست قابل‌دسترسی با صفحه‌کلید هم در دسترس است.",
    "Selected": "انتخاب‌شده",
    "Modular survivability architecture / Path and infrastructure diversity": "معماری بقاپذیر ماژولار / تنوع مسیر و زیرساخت",
    "Open Category": "باز کردن دسته‌بندی",
    "Pattern intelligence": "هوشمندی الگو",
    "Episode and transcript": "قسمت و متن پیاده‌شده",
    "Platform links, chapters and the searchable transcript remain together on the canonical episode page.": "پیوندهای پلتفرم، فصل‌ها و متن پیاده‌شدهٔ قابل جست‌وجو کنار هم در صفحهٔ اصلی قسمت می‌مانند.",
    "On this page": "در این صفحه",
    "Related routes": "مسیرهای مرتبط",
    "Browse the directory": "مرور فهرست",
    "The current published set and its connected Continuity context.": "مجموعهٔ منتشرشدهٔ فعلی و زمینهٔ تداومِ متصل به آن.",
    "Search": "جست‌وجو",
    "Role": "نقش",
    "Type": "نوع",
    "Subject area": "حوزهٔ موضوعی",
    "Sort": "مرتب‌سازی",
    "All": "همه",
    "Governance": "راهبری",
    "Architecture": "معماری",
    "Latest update": "آخرین به‌روزرسانی",
    "Alphabetical": "الفبایی",
    "OPEN": "باز کردن",
    "5 results shown": "۵ نتیجه نمایش داده شد",
    "6 results shown": "۶ نتیجه نمایش داده شد",
    "No items match. Clear the search or browse the complete directory.": "موردی پیدا نشد. جست‌وجو را پاک کنید یا فهرست کامل را مرور کنید.",
    "Continuity Smart Management": "مدیریت هوشمند تداوم",
    "Security Architectures": "معماری‌های امنیت",
    "Win-Win Regulation": "تنظیم‌گری برد-برد",
    "Win-Win Regulation in Ecosystem": "تنظیم‌گری برد-برد در زیست‌بوم",
    "Financial Continuity": "تداوم مالی",
    "Hardware Supply": "تأمین سخت‌افزار",
    "Software Supply": "تأمین نرم‌افزار",
    "Customer-Facing Continuity": "تداوم رو‌به‌مشتری",
    "Business Process / SLA": "فرایند کسب‌وکار / توافق سطح خدمت",
    "Continuity Maintenance": "نگهداشت تداوم",
    "Third-Party Continuity": "تداوم طرف سوم",
    "Third-Party & Partner Continuity": "تداوم طرف سوم و شریک",
    "Containment Engineering": "مهندسی مهار",
    "Risk Sensing": "رصد ریسک",
    "Risk Sensing, Threat Intelligence & Early Warning": "رصد ریسک، هوشمندی تهدید و هشدار زودهنگام",
    "Recovery Services": "خدمات بازیابی",
    "Path and infrastructure diversity": "تنوع مسیر و زیرساخت",
    "FAQ / expanded detail": "پرسش‌های متداول / جزئیات بیشتر",
    "What Continuity means": "تداوم چیست",
    "Continuity is broader than recovery. It protects the continuity of an outcome, not only the restoration of a system.": "تداوم فراتر از بازیابی است. تداومِ نتیجه را حفظ می‌کند، نه فقط بازگردانی یک سامانه را.",
    "Strategy": "راهبرد",
    "Structure": "ساختار",
    "Finance": "مالی",
    "Risk": "ریسک",
    "Operations": "عملیات",
    "Technology & Infrastructure": "فناوری و زیرساخت",
    "Continuity in banking": "تداوم در بانکداری",
    "A bank must preserve customer access, regulatory obligations and trust while technical, operational or ecosystem conditions change.": "بانک باید دسترسی مشتری، تعهدات ناظر و اعتماد را حفظ کند؛ حتی وقتی شرایط فنی، عملیاتی یا زیست‌بومی تغییر می‌کند.",
    "Blast-radius reduction": "کاهش شعاع اثر",
    "Service-owner accountability": "پاسخ‌گویی مالک سرویس",
    "Beyond Business Continuity": "فراتر از تداوم کسب‌وکار",
    "Recovery-centred BCM asks how to restore an interruption. Continuity asks what must keep working, for whom and within what tolerance.": "مدیریت تداوم کسب‌وکارِ بازیابی‌محور می‌پرسد وقفه چگونه بازگردانده شود. تداوم می‌پرسد چه چیزی باید کار کند، برای چه کسی و در چه آستانه‌ای.",
    "Is Continuity the same as disaster recovery?": "آیا تداوم همان بازیابی بحران است؟",
    "No. Disaster recovery restores technology. Continuity preserves the customer, regulatory and organizational outcome.": "خیر. بازیابی بحران فناوری را بازمی‌گرداند. تداوم نتیجهٔ مشتری، ناظر و سازمان را حفظ می‌کند.",
    "Who is accountable for Continuity?": "چه کسی پاسخ‌گوی تداوم است؟",
    "Accountability follows the critical service end to end, across systems, operations and partners.": "پاسخ‌گویی، سرویس حیاتی را از ابتدا تا انتها و در سراسر سامانه‌ها، عملیات و شرکا دنبال می‌کند.",
    "How is Continuity measured?": "تداوم چگونه سنجیده می‌شود؟",
    "By service outcomes, tolerance breaches, blast radius, recovery by service and the freshness of dependency knowledge.": "با نتیجهٔ سرویس، نقض آستانهٔ تحمل، شعاع اثر، بازیابی به تفکیک سرویس و تازگی دانش وابستگی‌ها.",
    "Use the overview to understand the full scope, or use the directory when you already know what you need.": "برای درک دامنهٔ کامل از نمای کلی استفاده کنید، یا وقتی دقیقاً می‌دانید چه می‌خواهید سراغ فهرست بروید.",
    "Interactive overview": "نمای تعاملی",
    "Searchable directory": "فهرست قابل جست‌وجو",
    "Reports and method": "گزارش‌ها و روش",
    "The Continuity Radar Report — 2026 documents the current model, evidence base and update method.": "گزارش رادار تداوم ۱۴۰۵ مدل فعلی، پایهٔ شواهد و روش به‌روزرسانی را مستند می‌کند.",
    "46-page public PDF": "پی‌دی‌اف عمومی ۴۶ صفحه‌ای",
    "Signals & Evidence": "نشانه‌ها و شواهد",
    "Evaluate / Deliver / Monitor": "ارزیابی / اجرا / پایش",
    "Evidence, contributors and management guidance are maintained on the related record.": "شواهد، مشارکت‌کنندگان و راهنمایی مدیریتی در رکورد مرتبط نگهداری می‌شود.",
    "Decompose, diversify and isolate so a narrow defect cannot become a wide customer outage.": "تجزیه، تنوع و جداسازی کنید تا یک نقص محدود به اختلال گسترده برای مشتری تبدیل نشود.",
    "Learn from other organizations’ failures before they become your own incident.": "پیش از آن‌که شکست‌های دیگر سازمان‌ها به رخداد خودتان تبدیل شود، از آن‌ها بیاموزید.",
    "Internal recovery is not customer recovery: preserve access, then preserve trust.": "بازیابی داخلی، بازیابی مشتری نیست: ابتدا دسترسی را حفظ کنید و سپس اعتماد را.",
    "Your continuity now includes parties you do not control.": "تداوم شما اکنون شامل طرف‌هایی است که کنترلشان در اختیار شما نیست.",
    "Make service outcomes and accountability visible across organizational boundaries.": "نتیجهٔ سرویس و پاسخ‌گویی را در سراسر مرزهای سازمانی قابل مشاهده کنید.",
    "Define critical services, impact tolerance and severe-but-plausible scenarios.": "سرویس‌های حیاتی، آستانهٔ تحمل اثر و سناریوهای شدید اما محتمل را تعریف کنید.",
    "AI/AIOps continuity orchestration": "هماهنگ‌سازی تداوم با هوش مصنوعی و عملیات هوشمند",
    "Use AI to detect incidents, correlate signals and accelerate recovery.": "از هوش مصنوعی برای شناسایی رخدادها، هم‌بسته‌سازی نشانه‌ها و شتاب‌دهی بازیابی استفاده کنید.",
    "Immutable cyber-recovery and air-gapped resilience": "بازیابی سایبری تغییرناپذیر و تاب‌آوری جدا از شبکه",
    "Protect recovery data from ransomware and compromised credentials.": "داده‌های بازیابی را از باج‌افزار و اعتبارنامه‌های در معرض خطر محافظت کنید.",
    "Continuity to Security Architectures": "تداوم در معماری‌های امنیت",
    "Selective shutdown and graceful degradation": "خاموش‌سازی گزینشی و افت کنترل‌شده",
    "Stop the smallest possible surface instead of the safest-looking large one.": "کوچک‌ترین سطح ممکن را متوقف کنید، نه بزرگ‌ترین سطحی که امن‌تر به نظر می‌رسد.",
    "Service Architecture & Containment Engineering": "معماری سرویس و مهندسی مهار",
    "Manual workaround and fallback-by-design": "راهکار دستی و جایگزینی از پیش طراحی‌شده",
    "Design the human fallback before the automation fails.": "پیش از شکست اتوماسیون، جایگزین انسانی را طراحی کنید.",
    "Business Process Continuity / SLA": "تداوم فرایند کسب‌وکار / توافق سطح خدمت",
    "Business Process / SLA": "فرایند کسب‌وکار / توافق سطح خدمت",
    "Decompose systems into services that can fail and recover one at a time.": "سامانه‌ها را به سرویس‌هایی تجزیه کنید که بتوانند یک‌به‌یک از کار بیفتند و بازیابی شوند.",
    "The discipline": "رویکرد",
    "Understand the problem before the tool. Prefer evidence over opinion. Apply the right technology appropriately. Judge by continuity of outcome.": "مسئله را پیش از ابزار بفهمید. شواهد را بر نظر ترجیح دهید. فناوری درست را به‌جا به‌کار بگیرید. معیار قضاوت، تداوم نتیجه است.",
    "Three roles, not three levels": "سه نقش، نه سه سطح",
    "Leaders carry organizational responsibility. Thinkers frame problems and interpret evidence. Experts bring depth in a domain, technology or industry practice.": "رهبران مسئولیت سازمانی را حمل می‌کنند. اندیشمندان مسئله را قاب‌بندی و شواهد را تفسیر می‌کنند. متخصصان عمق یک حوزه، فناوری یا تجربهٔ صنعتی را می‌آورند.",
    "Physical and digital House": "خانهٔ فیزیکی و دیجیتال",
    "The physical House holds gatherings and conversations. The digital House holds the Radar, library, directory and record of contribution.": "خانهٔ فیزیکی میزبان گردهمایی‌ها و گفت‌وگوهاست. خانهٔ دیجیتال رادار، کتابخانه، فهرست و سوابق مشارکت را نگهداری می‌کند.",
    "Can I apply to join?": "آیا می‌توانم برای عضویت اقدام کنم؟",
    "Yes. Public membership requests are reviewed and do not imply automatic acceptance.": "بله. درخواست‌های عمومی عضویت بررسی می‌شوند و به‌معنای پذیرش خودکار نیستند.",
    "What is expected of a member?": "از یک عضو چه انتظاری می‌رود؟",
    "A member contributes experience, evidence, questions or review around Continuity.": "عضو تجربه، شواهد، پرسش یا بازبینی مرتبط با تداوم ارائه می‌کند.",
    "Is the Radar public?": "آیا رادار عمومی است؟",
    "The current Radar, Categories, Patterns and public evidence summaries are available to everyone.": "رادار فعلی، دسته‌بندی‌ها، الگوها و خلاصه‌های عمومی شواهد برای همه در دسترس است.",
    "Choose a route": "انتخاب مسیر",
    "PRIMARY PATH": "مسیر اصلی",
    "Activate Your Invitation": "فعال‌سازی دعوت‌نامه",
    "For people who received a personal card and QR code.": "برای افرادی که کارت شخصی و کد پاسخ سریع دریافت کرده‌اند.",
    "Submit a Membership Request": "ارسال درخواست عضویت",
    "For senior Leaders, Thinkers and Experts working on Continuity.": "برای رهبران، اندیشمندان و متخصصان ارشدی که روی تداوم کار می‌کنند.",
    "Refer a Technocrat": "معرفی یک تکنوکرات",
    "For active Leaders and Thinkers with a remaining referral allowance.": "برای رهبران و اندیشمندان فعالی که سهمیهٔ معرفی باقی‌مانده دارند.",
    "Join a Conversation": "پیوستن به گفت‌وگو",
    "For members and invited guests with a subject and availability.": "برای اعضا و مهمانان دعوت‌شده‌ای که موضوع و زمان در دسترس دارند.",
    "For anyone with a relevant signal, document or first-hand experience.": "برای هر کسی که نشانه، سند یا تجربهٔ دست‌اول مرتبط دارد.",
    "Visit or Contact the House": "بازدید یا تماس با خانه",
    "For invited guests, partners, media and research collaboration.": "برای مهمانان دعوت‌شده، شرکا، رسانه‌ها و همکاری‌های پژوهشی.",
    "Participate in a Podcast or Videocast": "مشارکت در پادکست یا ویدیوکست",
    "For people with first-hand Continuity experience.": "برای افرادی که تجربهٔ مستقیم از تداوم دارند.",
    "Share an Insight or Evidence": "اشتراک‌گذاری بینش یا شواهد",
    "For anyone with a relevant signal, document or experience.": "برای هر کسی که نشانه، سند یا تجربهٔ مرتبط دارد.",
    "Share a Contribution": "ثبت مشارکت یا نظر",
    "For a comment, proposal, evidence or contribution the House should review.": "برای نظر، پیشنهاد، شاهد یا مشارکتی که خانه باید بررسی کند.",
    "Visit the House": "بازدید از خانه",
    "For members, invited guests and partner organizations.": "برای اعضا، مهمانان دعوت‌شده و سازمان‌های شریک.",
    "Contact": "تماس",
    "For media, research collaboration and general enquiries.": "برای رسانه، همکاری پژوهشی و پرسش‌های عمومی.",
    "Participation hub": "مرکز مشارکت",
    "Insight, signal or evidence": "بینش، نشانه یا شواهد",
    "Contribution type *": "نوع مشارکت *",
    "Signal / document / experience": "نشانه / سند / تجربه",
    "Related Category or Pattern": "دسته‌بندی یا الگوی مرتبط",
    "What should the House review? *": "خانه چه چیزی را باید بررسی کند؟ *",
    "Summarize the evidence and why it matters": "شواهد و دلیل اهمیت آن را خلاصه کنید",
    "Submit for Editorial Review": "ارسال برای بررسی تحریریه",
    "Required fields are marked *. Validation stays beside the field and no information is published before the stated review step.": "فیلدهای ضروری با * مشخص شده‌اند. پیام اعتبارسنجی کنار همان فیلد می‌ماند و پیش از مرحلهٔ بررسی اعلام‌شده هیچ اطلاعاتی منتشر نمی‌شود.",
    "Confirmation": "تأیید",
    "I confirm the information is accurate and may be reviewed by the House.": "تأیید می‌کنم اطلاعات دقیق است و خانه می‌تواند آن را بررسی کند.",
    "Submit": "ثبت",
    "Save": "ذخیره",
    "Save and finish later": "ذخیره و تکمیل در زمان دیگر",
    "Identity and professional profile": "هویت و پروفایل حرفه‌ای",
    "About you and your relationship to Continuity": "دربارهٔ شما و ارتباطتان با تداوم",
    "Candidate and reason for referral": "نامزد و دلیل معرفی",
    "Contribution, comment or evidence": "مشارکت، نظر یا شاهد",
    "Full name *": "نام و نام خانوادگی *",
    "Mobile *": "شماره همراه *",
    "Email *": "ایمیل *",
    "Current title *": "عنوان شغلی فعلی *",
    "Current title": "عنوان شغلی",
    "Organization *": "سازمان *",
    "Organization": "سازمان",
    "Industry *": "صنعت *",
    "What would you contribute?": "چه مشارکتی خواهید داشت؟",
    "Podcast production": "تولید پادکست",
    "Videocast production": "تولید ویدیوکست",
    "Article writing": "نوشتن مقاله",
    "Events and sessions participation": "شرکت در رویدادها و جلسات",
    "Your LinkedIn profile link": "لینک پروفایل لینکدین شما",
    "Candidate full name *": "نام و نام خانوادگی نامزد *",
    "Suggested role *": "نقش پیشنهادی *",
    "Reason for referral *": "دلیل معرفی *",
    "Comment / proposal / evidence / conversation subject": "نظر / پیشنهاد / شاهد / موضوع گفت‌وگو",
    "Subject *": "موضوع *",
    "What would you like to contribute or say? *": "چه چیزی می‌خواهید مشارکت کنید یا بگویید؟ *",
    "Share the comment, proposal, experience or evidence": "نظر، پیشنهاد، تجربه یا شاهد را بنویسید",
    "Continue to profile confirmation": "ادامه به تأیید پروفایل",
    "Submit Request": "ارسال درخواست",
    "Submit Referral": "ارسال معرفی",
    "Submit Contribution": "ثبت مشارکت",
    "Registration saved. Step 3 is ready: confirm the public profile.": "ثبت‌نام ذخیره شد. گام سوم آماده است: پروفایل عمومی را تأیید کنید.",
    "Request received / HT-2026-0418 / under review. We respond within 30 days.": "درخواست دریافت شد / HT-2026-0418 / در حال بررسی. حداکثر تا ۳۰ روز پاسخ می‌دهیم.",
    "Referral submitted. Status: Under review. Your remaining allowance is now 2.": "معرفی ارسال شد. وضعیت: در حال بررسی. سهمیهٔ باقی‌ماندهٔ شما اکنون ۲ است.",
    "Contribution received. Nothing is published automatically; the editorial review starts now.": "مشارکت دریافت شد. هیچ چیزی خودکار منتشر نمی‌شود؛ بررسی تحریریه اکنون آغاز می‌شود.",
    "Draft saved for this session.": "پیش‌نویس برای این نشست ذخیره شد.",
    "Complete the required fields before continuing.": "پیش از ادامه، فیلدهای ضروری را کامل کنید.",
    "ROUTE 02": "مسیر ۰۲",
    "ROUTE 03": "مسیر ۰۳",
    "ROUTE 04": "مسیر ۰۴",
    "ROUTE 05": "مسیر ۰۵",
    "ROUTE 06": "مسیر ۰۶",
    "Categories": "دسته‌بندی‌ها",
    "Patterns": "الگوها",
    "Reports": "گزارش‌ها",
    "Category": "دسته‌بندی",
    "Pattern": "الگو",
    "Content": "محتوا",
    "Person": "فرد",
    "Page": "صفحه",
    "Continuity Architecture": "معماری تداوم",
    "Risk Sensing & Early Warning": "رصد ریسک و هشدار زودهنگام",
    "Modular survivability architecture": "معماری تجزیه‌پذیر و بقاپذیر",
    "Decompose banking systems into services that can fail and recover one at a time.": "سامانه‌های بانکی را به سرویس‌هایی تجزیه کنید که بتوانند یک‌به‌یک از کار بیفتند و بازیابی شوند.",
    "Customer-Facing Service Continuity": "تداوم خدمات مشتری",
    "Omni-channel fallback and digital substitution": "جایگزینی کانال‌ها و تداوم همه‌کاناله",
    "Preserve customer access when a primary channel or path is unavailable.": "وقتی کانال یا مسیر اصلی در دسترس نیست، دسترسی مشتری را حفظ کنید.",
    "Proactive Continuity Evaluation": "ارزیابی پیش‌دستانهٔ تداوم",
    "Impact-tolerance and critical-service mapping": "نقشهٔ خدمات حیاتی و آستانهٔ تحمل اثر",
    "Define what must continue from the customer and regulator point of view.": "آنچه باید از دید مشتری و تنظیم‌گر ادامه یابد، روشن کنید.",
    "contributors": "مشارکت‌کننده",
    "content": "محتوا",
    "Executive Brief / 12 MIN": "خلاصهٔ مدیریتی · ۱۲ دقیقه",
    "Why technical recovery is not customer recovery": "بازیابی فنی به‌معنای بازیابی مشتری نیست",
    "Decomposing a core banking platform": "تجزیهٔ یک پلتفرم بانکداری متمرکز",
    "Recovery is complete only when the customer outcome is restored.": "بازیابی زمانی کامل است که نتیجهٔ مورد انتظار مشتری دوباره برقرار شود.",
    "Article / Continuity Governance": "مقاله · راهبری تداوم",
    "Continuity Governance": "راهبری تداوم",
    "Who owns the health of a service, end to end?": "سلامت یک سرویس، از ابتدا تا انتها، مسئولِ کیست؟",
    "Accountability cannot stop at the edge of a system or department.": "پاسخ‌گویی نمی‌تواند در مرز یک سامانه یا واحد سازمانی متوقف شود.",
    "EPISODE 04 / 48 MIN": "قسمت ۰۴ · ۴۸ دقیقه",
    "Videocast / Podcast / Transcript": "ویدیوکست / پادکست / متن پیاده‌شده",
    "Continuity in the ecosystem: bank, regulator, fintech": "تداوم در زیست‌بوم: بانک، تنظیم‌گر، فین‌تک",
    "Three perspectives on where one organization’s continuity becomes another organization’s dependency.": "سه دیدگاه دربارهٔ جایی که تداوم یک سازمان به وابستگی سازمان دیگر تبدیل می‌شود.",
    "Open conversation": "شنیدن پادکست",
    "Listen to podcast": "شنیدن پادکست",
    "EPISODE 04 / TRANSCRIPT AVAILABLE": "قسمت ۰۴ · متن پیاده‌شده موجود است",
    "“Continuity is not held by one institution. It is negotiated across the ecosystem.”": "«تداوم در اختیار یک نهاد نیست؛ در سراسر زیست‌بوم شکل می‌گیرد.»",
    "CONVERSATION / EPISODE 04": "گفت‌وگو / قسمت ۰۴",
    "Name Surname": "نام و نام خانوادگی",
    "Chief Risk Officer · Bank": "مدیر ارشد ریسک · بانک",
    "Chief Risk Officer / Bank": "مدیر ارشد ریسک / بانک",
    "Resilience Strategist": "راهبردپرداز تاب‌آوری",
    "Head of Core Banking": "مدیر بانکداری متمرکز",
    "Payments Architect": "معمار پرداخت",
    "Chief Executive Officer / Fintech": "مدیرعامل / فین‌تک",
    "Professor of Systems Engineering": "استاد مهندسی سامانه‌ها",
    "Technocratic Leader": "رهبر تکنوکرات",
    "Technocratic Thinker": "اندیشمند تکنوکرات",
    "Technocratic Expert": "متخصص تکنوکرات",
    "PUBLIC / OPEN ACCESS": "عمومی / دسترسی آزاد",
    "Flagship report / 2026": "گزارش اصلی / ۱۴۰۵",
    "Continuity Radar Report — 2026": "گزارش رادار تداوم — ۱۴۰۵",
    "How the Radar is built, validated and updated. Includes the 16 Categories and 32 current Patterns.": "رادار چگونه ساخته، اعتبارسنجی و به‌روز می‌شود؛ شامل ۱۶ دسته‌بندی و ۳۲ الگوی فعلی.",
    "PAGES / PDF": "صفحه / پی‌دی‌اف",
    "Open report details": "مشاهدهٔ جزئیات گزارش",
    "Monthly field note": "یادداشت ماهانه",
    "Follow what changes in the Radar.": "تغییرات رادار را دنبال کنید.",
    "One concise update: revised Patterns, new evidence and upcoming conversations.": "یک به‌روزرسانی کوتاه از الگوهای اصلاح‌شده، شواهد تازه و گفت‌وگوهای پیش‌رو.",
    "Email address": "نشانی ایمیل",
    "Subscribe": "عضویت",
    "Participation": "مشارکت",
    "House of Technocrats": "خانه تکنوکرات‌ها",
    "HOUSE OF": "خانه",
    "TECHNOCRATS": "تکنوکرات‌ها",
    "CONTINUITY / DEEP BLUE RADAR": "تداوم / رادار دیپ‌بلو",
    "Model": "مدل",
    "House": "خانه",
    "Utility": "راهنما",
    "Insights": "بینش‌ها",
    "People": "افراد",
    "The House": "درباره خانه",
    "Participate": "مشارکت",
    "Search": "جست‌وجو",
    "Glossary": "واژه‌نامه",
    "Legal": "حقوقی",
    "© 2026 HOUSE OF TECHNOCRATS": "© ۱۴۰۵ خانه تکنوکرات‌ها",
    "House search": "جست‌وجوی خانه",
    "Search everything": "جست‌وجو در همه‌چیز",
    "No suggestions yet. Submit the search to see the full no-result state.": "هنوز پیشنهادی نیست. جست‌وجو را ارسال کنید تا نتیجهٔ کامل را ببینید.",
    "2 Patterns / updated 12 Jun 2026": "۲ الگو / به‌روزرسانی ۲۲ خرداد ۱۴۰۵",
    "2 Patterns / updated 03 Jul 2026": "۲ الگو / به‌روزرسانی ۱۲ تیر ۱۴۰۵",
    "2 Patterns / updated 28 May 2026": "۲ الگو / به‌روزرسانی ۰۷ خرداد ۱۴۰۵",
    "2 Patterns / 12 Jun 2026": "۲ الگو / ۲۲ خرداد ۱۴۰۵",
    "2 Patterns / 03 Jul 2026": "۲ الگو / ۱۲ تیر ۱۴۰۵",
    "2 Patterns / 28 May 2026": "۲ الگو / ۰۷ خرداد ۱۴۰۵",
    "2 Patterns / 19 Jun 2026": "۲ الگو / ۲۹ خرداد ۱۴۰۵",
    "2 Patterns / 06 Jun 2026": "۲ الگو / ۱۶ خرداد ۱۴۰۵",
    "2 Patterns / 15 Jun 2026": "۲ الگو / ۲۵ خرداد ۱۴۰۵",
    "Executive Brief / 12 min": "خلاصهٔ مدیریتی / ۱۲ دقیقه",
    "Executive Brief / 12 min / FA + EN": "خلاصهٔ مدیریتی / ۱۲ دقیقه / فارسی + انگلیسی",
    "Videocast / 22 min": "ویدیوکست / ۲۲ دقیقه",
    "Videocast / 22 min / transcript": "ویدیوکست / ۲۲ دقیقه / متن پیاده‌شده",
    "Podcast / Episode 04": "پادکست / قسمت ۰۴",
    "Podcast / Episode 04 / transcript": "پادکست / قسمت ۰۴ / متن پیاده‌شده",
    "Media coverage / summary hosted here": "پوشش رسانه‌ای / خلاصهٔ میزبانی‌شده در اینجا",
    "Report / PDF / 46 pages": "گزارش / پی‌دی‌اف / ۴۶ صفحه",
    "Bank, regulator, fintech: continuity in the ecosystem": "بانک، نهاد ناظر، فین‌تک: تداوم در زیست‌بوم",
    "Interview: what boards get wrong about resilience": "گفت‌وگو: هیئت‌مدیره‌ها دربارهٔ تاب‌آوری چه چیزی را اشتباه می‌فهمند",
    "Win-Win Regulation in Ecosystem": "تنظیم‌گری برد-برد در زیست‌بوم",
    "Technocratic Leader / Governance": "رهبر تکنوکرات / راهبری",
    "The subject of the House": "موضوع خانه",
    "Institution, discipline and community model": "نهاد، رویکرد و مدل جامعه",
    "Eight routes into the House": "هشت مسیر ورود به خانه",
    "16": "۱۶",
    "32": "۳۲",
    "02": "۰۲",
    "03": "۰۳",
    "04": "۰۴",
    "05": "۰۵",
    "06": "۰۶",
    "07": "۰۷",
    "46": "۴۶"
  };

  var translatedTextNodes = new WeakMap();

  function applyPersianTermFallback(value) {
    return String(value)
      .replace(/\bCATEGORY\b/g, "دسته‌بندی")
      .replace(/\bROLE\b/g, "نقش")
      .replace(/\bTYPE\b/g, "نوع")
      .replace(/\bSORT\b/g, "مرتب‌سازی")
      .replace(/\bOPEN\b/g, "باز کردن")
      .replace(/PRIMARY PATH/g, "مسیر اصلی")
      .replace(/ROUTE ([0-9]+)/g, function (_, number) { return "مسیر " + persianDigits(number); })
      .replace(/House of Technocrats/g, "خانه تکنوکرات‌ها")
      .replace(/Technocratic Leaders/g, "رهبران تکنوکرات")
      .replace(/Technocratic Thinkers/g, "اندیشمندان تکنوکرات")
      .replace(/Technocratic Experts/g, "متخصصان تکنوکرات")
      .replace(/\bLeaders\b/g, "رهبران")
      .replace(/\bThinkers\b/g, "اندیشمندان")
      .replace(/\bExperts\b/g, "متخصصان")
      .replace(/\bCategories\b/g, "دسته‌بندی‌ها")
      .replace(/\bCategory\b/g, "دسته‌بندی")
      .replace(/\bPatterns\b/g, "الگوها")
      .replace(/\bPattern\b/g, "الگو")
      .replace(/\bHOUSE OF\b/g, "خانه")
      .replace(/\bTECHNOCRATS\b/g, "تکنوکرات‌ها")
      .replace(/[0-9]/g, function (digit) { return persianDigits(digit); });
  }

  function persianDigits(value) {
    return String(value).replace(/[0-9]/g, function (digit) {
      return "۰۱۲۳۴۵۶۷۸۹"[+digit];
    });
  }

  function resultCountText(count) {
    return currentLanguage() === "fa"
      ? persianDigits(count) + " نتیجه نمایش داده شد"
      : count + " results shown";
  }

  function icon(name) {
    var paths = {
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      chevron: '<path d="m6 9 6 6 6-6"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      trend: '<path d="M4 17l6-6 4 4 6-8"/><path d="M14 7h6v6"/>',
      shield: '<path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"/>',
      landmark: '<path d="M4 10h16"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/><path d="M3 18h18M12 4l8 4H4l8-4z"/>',
      user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>',
      target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>'
    };
    return '<svg aria-hidden="true" viewBox="0 0 24 24">' + paths[name] + "</svg>";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function normalizeSearch(value) {
    return String(value)
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  function searchMatches(value, query) {
    var haystack = normalizeSearch(value);
    var tokens = normalizeSearch(query).split(/\s+/).filter(Boolean);
    return tokens.every(function (token) { return haystack.includes(token); });
  }

  function headerMarkup(active) {
    function activeClass(key) {
      return active === key ? " is-active" : "";
    }
    function activeAny(keys) {
      return keys.indexOf(active) >= 0 ? " is-active" : "";
    }
    return [
      '<header class="site-header glass-surface">',
      '<a class="wordmark" href="index.html" aria-label="House of Technocrats home"><span>HOUSE OF</span><strong>TECHNOCRATS</strong></a>',
      '<nav class="desktop-nav" aria-label="Primary navigation">',
      '<a class="nav-link' + activeClass("continuity") + '" href="continuity.html" data-i18n="nav.continuity">Continuity</a>',
      '<a class="nav-link' + activeClass("radar") + '" href="radar.html" data-i18n="nav.radar">Deep Blue Radar</a>',
      '<a class="nav-link' + activeClass("insights") + '" href="insights.html" data-i18n="nav.insights">Insights</a>',
      '<a class="nav-link nav-link-wide' + activeClass("thinking") + '" href="technocratic-thinking.html" data-i18n="nav.thinking">Technocratic Thinking</a>',
      '<div class="nav-dropdown"><button class="nav-link dropdown-trigger' + activeAny(["house", "participate"]) + '" type="button" aria-expanded="false" aria-controls="house-menu"><span data-i18n="nav.house">The House</span>' + icon("chevron") + '</button><div class="dropdown-panel glass-surface" id="house-menu" hidden><a href="house.html">About the House</a><a href="participate.html">Participate</a></div></div>',
      '<a class="nav-link' + activeClass("people") + '" href="people.html" data-i18n="nav.people">People</a>',
      '<a class="nav-link nav-link-wide' + activeClass("services") + '" href="https://crm.houseoftechnocrats.ir/game-invitation" data-i18n="nav.services">Continuity Game</a>',
      '<a class="nav-link' + activeClass("about") + '" href="about-us.html" data-i18n="nav.about">Contact Us</a>',
      '</nav>',
      '<div class="header-actions"><button class="icon-button search-trigger" type="button" aria-label="Search">' + icon("search") + '</button><button class="language-toggle" type="button">FA / EN</button><button class="icon-button menu-trigger" type="button" aria-label="Open menu" aria-expanded="false"><span class="menu-icon">' + icon("menu") + '</span><span class="close-icon">' + icon("close") + '</span></button></div>',
      '</header>',
      '<div class="mobile-panel glass-surface" hidden>',
      '<a href="continuity.html" data-i18n="nav.continuity">Continuity</a>',
      '<a href="radar.html" data-i18n="nav.radar">Deep Blue Radar</a>',
      '<a href="insights.html" data-i18n="nav.insights">Insights</a>',
      '<a href="technocratic-thinking.html" data-i18n="nav.thinking">Technocratic Thinking</a>',
      '<div class="mobile-menu-group"><span class="mobile-menu-label" data-i18n="nav.house">The House</span><a class="mobile-sub-link" href="house.html">About the House</a><a class="mobile-sub-link" href="participate.html">Participate</a></div>',
      '<a href="people.html" data-i18n="nav.people">People</a><a href="https://crm.houseoftechnocrats.ir/game-invitation" data-i18n="nav.services">Continuity Game</a><a href="about-us.html" data-i18n="nav.about">Contact Us</a><button class="mobile-search search-trigger" type="button">' + icon("search") + '<span data-i18n="nav.search">Search everything</span></button>',
      '</div>'
    ].join("");
  }

  function footerMarkup() {
    return [
      '<footer class="site-footer glass-surface" data-chamfer="br" data-cut="34" data-radius="12" data-fillet="10">',
      '<div class="footer-brand"><div class="footer-mark">HOUSE OF<br><strong>TECHNOCRATS</strong></div><p class="dbr-label">CONTINUITY / DEEP BLUE RADAR</p></div>',
      '<div class="footer-column"><p class="dbr-label">Model</p><a href="continuity.html">Continuity</a><a href="radar.html">Deep Blue Radar</a><a href="radar-view.html">Interactive Explorer</a><a href="reports.html">Reports &amp; Updates</a></div>',
      '<div class="footer-column"><p class="dbr-label">House</p><a href="technocratic-thinking.html">Technocratic Thinking</a><a href="house.html">The House</a><a href="participate.html">Participate</a><a href="people.html">People</a></div>',
      '<div class="footer-column"><p class="dbr-label">Utility</p><a href="services.html">Technocratic Service Store</a><a href="about-us.html">Contact Us</a><a href="search.html">Search</a></div>',
      '<div class="footer-base dbr-label"><span>© 2026 HOUSE OF TECHNOCRATS</span></div>',
      '</footer>'
    ].join("");
  }

  function searchMarkup() {
    return [
      '<div class="search-overlay" hidden><div class="search-dialog glass-surface" role="dialog" aria-modal="true" aria-labelledby="search-title" data-chamfer="br" data-cut="34" data-radius="12" data-fillet="10">',
      '<div class="search-dialog-head"><div><p class="dbr-label">House search</p><h2 id="search-title">Search everything</h2></div><button class="icon-button search-close" type="button" aria-label="Close search">' + icon("close") + '</button></div>',
      '<form class="search-form" action="search.html">' + icon("search") + '<input name="q" type="search" autocomplete="off" placeholder="Search Categories, Patterns, People and Content" aria-label="Search the site"><button class="button button-primary" type="submit" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5">Search</button></form>',
      '<div class="search-suggestions" aria-live="polite"></div></div></div>'
    ].join("");
  }

  function sectionMarkup(section) {
    var config = Array.isArray(section)
      ? { title: section[0], body: section[1], items: section[2] || [], id: section[3] || slugify(section[0]), faTitle: section[4], faBody: section[5] }
      : Object.assign({ items: [] }, section);
    var items = config.items || [];
    var itemMarkup = items.length ? '<div class="content-list">' + items.map(function (item) {
      var found = searchIndex.find(function (entry) { return entry.title === item; });
      var href = found ? found.href : "search.html?q=" + encodeURIComponent(item);
      return '<a class="content-item" href="' + href + '"><div><h3>' + escapeHtml(item) + '</h3><p>Evidence, contributors and management guidance are maintained on the related record.</p></div><span class="dbr-label content-action"><span class="content-action-copy">OPEN</span>' + icon("arrow") + "</span></a>";
    }).join("") + "</div>" : "";
    var titleAttrs = config.faTitle ? ' data-en="' + escapeHtml(config.title) + '" data-fa="' + escapeHtml(config.faTitle) + '"' : "";
    var bodyAttrs = config.faBody ? ' data-en="' + escapeHtml(config.body) + '" data-fa="' + escapeHtml(config.faBody) + '"' : "";
    return '<section class="inner-section" id="' + escapeHtml(config.id || slugify(config.title)) + '" data-chamfer="" data-radius="12"><h2' + titleAttrs + ">" + escapeHtml(config.title) + "</h2><p" + bodyAttrs + ">" + escapeHtml(config.body) + "</p>" + itemMarkup + "</section>";
  }

  function accordionMarkup(items, id) {
    if (!items || !items.length) return "";
    var heading = id === "continuity-faq"
      ? '<h2 data-en="FAQ" data-fa="سوالات پرتکرار">FAQ</h2>'
      : "<h2>FAQ / expanded detail</h2>";
    return '<section class="inner-section" id="' + escapeHtml(id || "faq-expanded-detail") + '" data-chamfer="" data-radius="12">' + heading + '<div class="accordion">' + items.map(function (item, index) {
      return '<div class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="accordion-' + index + '"><span>' + escapeHtml(item[0]) + '</span>' + icon("plus") + '</button><div class="accordion-panel" id="accordion-' + index + '" hidden>' + escapeHtml(item[1]) + "</div></div>";
    }).join("") + "</div></section>";
  }

  function anchorNavMarkup(data) {
    if (data.special === "continuityRich") return "";
    if (!data.anchorTabs || !data.anchorTabs.length) return "";
    return [
      '<nav class="anchor-tabs glass-card" aria-label="Continuity sections" data-chamfer="br" data-cut="22" data-radius="12" data-fillet="8">',
      data.anchorTabs.map(function (item, index) {
        return '<a href="#' + escapeHtml(item[0]) + '" class="' + (index === 0 ? "is-active" : "") + '" data-anchor-id="' + escapeHtml(item[0]) + '" data-en="' + escapeHtml(item[1]) + '" data-fa="' + escapeHtml(item[2]) + '">' + escapeHtml(item[1]) + "</a>";
      }).join(""),
      "</nav>"
    ].join("");
  }

  function continuityRichMarkup() {
    var content = { en: {"title":"Continuity","metaTitle":"Continuity","metaDescription":"","blocks":[{"type":"heading","level":1,"text":"Continuity","id":"continuity"},{"type":"heading","level":2,"text":"The ability to keep what truly matters running","id":"the-ability-to-keep-what-truly-matters-running"},{"type":"paragraph","html":"<p>Disruption cannot always be prevented.</p>"},{"type":"paragraph","html":"<p>A prepared organization is not one that never experiences disruption. It is one that knows, under abnormal conditions, <strong>what must continue, at what level, for how long, and with which capabilities in place.</strong></p>"},{"type":"paragraph","html":"<p><strong>Primary CTA:</strong> Explore Deep Blue Radar <strong>Secondary CTA:</strong> What is Continuity?</p>"},{"type":"heading","level":2,"text":"When normal conditions disappear, what must continue?","id":"when-normal-conditions-disappear-what-must-continue"},{"type":"paragraph","html":"<p>Technology failure, cyberattack, infrastructure outage, loss of key personnel, supplier failure, or financial shock are different expressions of the same underlying question:</p>"},{"type":"paragraph","html":"<p><strong>Can the organization continue delivering what matters to its customers, operations, and survival?</strong></p>"},{"type":"paragraph","html":"<p>The continuity question is not simply, “Which system has failed?” The more important questions are:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>Which important service has been affected?</span></li><li><span>How much disruption can be tolerated?</span></li><li><span>What is the minimum acceptable level of service?</span></li><li><span>Which dependencies must be sustained or restored?</span></li><li><span>Who decides priorities, resources, and risk acceptance?</span></li></ul>"},{"type":"heading","level":2,"text":"What is Business Continuity?","id":"what-is-business-continuity"},{"type":"paragraph","html":"<p><strong>Business Continuity is an organization’s ability to continue delivering important services and activities during disruption, or to restore them within an acceptable time and at an acceptable level.</strong></p>"},{"type":"paragraph","html":"<p>This capability does not depend on technology, backups, or a written plan alone. It requires the coordinated operation of people, processes, data, infrastructure, finance, suppliers, communications, and decision-making authority.</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>Continuity is not a document. It is an organizational capability.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"Continuity is not just Backup, DR, or Crisis Management","id":"continuity-is-not-just-backup-dr-or-crisis-management"},{"type":"paragraph","html":"<p>These disciplines are related, but they are not the same:</p>"},{"type":"table","html":"<div class=\"continuity-table-scroll\"><table class=\"continuity-comparison-table\"><thead><tr><th>Concept</th><th>Primary focus</th><th>Key question</th></tr></thead><tbody><tr><td><strong>Business Continuity</strong></td><td>Continuing or restoring an important service</td><td>How will what matters continue?</td></tr><tr><td><strong>Disaster Recovery</strong></td><td>Restoring technology, data, and infrastructure</td><td>How will the technology environment be recovered?</td></tr><tr><td><strong>Crisis Management</strong></td><td>Executive decisions and communications during disruption</td><td>Which exceptional decisions and communications are required?</td></tr><tr><td><strong>Operational Resilience</strong></td><td>Keeping services within tolerable impact</td><td>Can the service remain acceptable even when components fail?</td></tr></tbody></table></div>"},{"type":"paragraph","html":"<p>Restoring a server does not necessarily mean the customer service is back. In the same way, convening a crisis team does not by itself create the ability to continue operations.</p>"},{"type":"heading","level":3,"text":"A simple example","id":""},{"type":"paragraph","html":"<p>Suppose a payment platform comes back online after an outage, but the third-party identity service is still unavailable, some transaction data still requires reconciliation, and the customer communication channel is down.</p>"},{"type":"paragraph","html":"<p>Technology has partially recovered, but <strong>the payment service has not yet been restored reliably.</strong></p>"},{"type":"heading","level":2,"text":"The primary unit of analysis is the “important service”","id":"the-primary-unit-of-analysis-is-the-important-service"},{"type":"paragraph","html":"<p>Organizations naturally see systems, departments, buildings, and assets. Customers experience a <strong>service</strong> or an <strong>outcome</strong>.</p>"},{"type":"paragraph","html":"<p>For this reason, continuity should begin, wherever possible, with the important service.</p>"},{"type":"paragraph","html":"<p>For each important service, the organization should understand:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>which customers and stakeholders depend on it;</span></li><li><span>the minimum acceptable level of service;</span></li><li><span>how much disruption can be tolerated;</span></li><li><span>which people, processes, data, systems, and infrastructure it depends on;</span></li><li><span>which suppliers and external parties are part of the service path;</span></li><li><span>the correct recovery sequence;</span></li><li><span>who owns the decision and accountability.</span></li></ul>"},{"type":"code","html":"<pre class=\"continuity-code\"><code>Customer / Stakeholder\n        ↓\nService\n        ↓\nProcesses and Decisions\n        ↓\nPeople and Skills\n        ↓\nSystems and Data\n        ↓\nInfrastructure and Locations\n        ↓\nSuppliers and External Dependencies</code></pre>"},{"type":"heading","level":2,"text":"Five things must be clear for every important service","id":"five-things-must-be-clear-for-every-important-service"},{"type":"heading","level":3,"text":"1. What must continue?","id":""},{"type":"paragraph","html":"<p>Which service or outcome is critical to customers, operations, obligations, and the organization’s survival?</p>"},{"type":"heading","level":3,"text":"2. What is the minimum acceptable level?","id":""},{"type":"paragraph","html":"<p>At what level must the service continue during disruption?</p>"},{"type":"heading","level":3,"text":"3. How much disruption is tolerable?","id":""},{"type":"paragraph","html":"<p>At what point does the impact become unacceptable for customers, operations, or the organization?</p>"},{"type":"heading","level":3,"text":"4. What does the service depend on?","id":""},{"type":"paragraph","html":"<p>Which people, processes, data, technologies, infrastructure, suppliers, and communication channels are required?</p>"},{"type":"heading","level":3,"text":"5. Who decides?","id":""},{"type":"paragraph","html":"<p>Who has the authority to set priorities, allocate resources, accept risk, and manage communications under abnormal conditions?</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p>Concepts such as <strong>BIA, Impact Tolerance, RTO, and RPO</strong> help answer these questions more precisely.</p></blockquote>"},{"type":"heading","level":2,"text":"How is continuity built?","id":"how-is-continuity-built"},{"type":"paragraph","html":"<p>A continuity capability cannot be created simply by having a plan. It must be designed, governed, and tested in practice.</p>"},{"type":"heading","level":3,"text":"1. Understand the service and its impact","id":""},{"type":"paragraph","html":"<p>Identify important services and understand the consequences of their disruption.</p>"},{"type":"heading","level":3,"text":"2. Understand dependencies","id":""},{"type":"paragraph","html":"<p>Map the end-to-end service path and identify concentration points and failure points.</p>"},{"type":"heading","level":3,"text":"3. Design alternative strategies","id":""},{"type":"paragraph","html":"<p>Define how the service can continue through recovery, failover, manual processing, reduced service, or alternative capacity.</p>"},{"type":"heading","level":3,"text":"4. Define roles and authority","id":""},{"type":"paragraph","html":"<p>Clarify service ownership, deputies, incident leadership, and decision rights.</p>"},{"type":"heading","level":3,"text":"5. Exercise and prove readiness","id":""},{"type":"paragraph","html":"<p>Plans and alternative arrangements must be tested under realistic or simulated conditions.</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>Readiness is defensible only when there is evidence behind it.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"Continuity is a cross-functional capability","id":"continuity-is-a-cross-functional-capability"},{"type":"paragraph","html":"<p>No single function can create continuity on its own.</p>"},{"type":"heading","level":3,"text":"Finance","id":""},{"type":"paragraph","html":"<p>Can the organization access the funds required to sustain essential operations, meet obligations, and recover during disruption?</p>"},{"type":"heading","level":3,"text":"People","id":""},{"type":"paragraph","html":"<p>If a key person or team is unavailable, is there sufficient knowledge, authority, and alternative capacity?</p>"},{"type":"heading","level":3,"text":"Risk","id":""},{"type":"paragraph","html":"<p>Which dependencies, concentrations, and changes could threaten the continuity of important services?</p>"},{"type":"heading","level":3,"text":"Operations","id":""},{"type":"paragraph","html":"<p>Can the service continue at a reduced level, through manual processes, or via an alternative route?</p>"},{"type":"heading","level":3,"text":"Technology, Data, and Infrastructure","id":""},{"type":"paragraph","html":"<p>Does technical recovery actually restore the service outcome, and is the recovered data trustworthy?</p>"},{"type":"heading","level":3,"text":"Suppliers and External Parties","id":""},{"type":"paragraph","html":"<p>If a supplier or external infrastructure provider becomes unavailable, what practical alternative remains?</p>"},{"type":"heading","level":3,"text":"Communications","id":""},{"type":"paragraph","html":"<p>During disruption, who communicates with employees, customers, and partners, through which channels, and with what level of certainty?</p>"},{"type":"heading","level":2,"text":"In digital business, the service boundary extends beyond the organization","id":"in-digital-business-the-service-boundary-extends-beyond-the-organization"},{"type":"paragraph","html":"<p>In a digital business, an important service rarely remains within the legal or technical boundary of a single organization.</p>"},{"type":"paragraph","html":"<p>The service path may include:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>a mobile application or digital channel;</span></li><li><span>APIs;</span></li><li><span>payment networks;</span></li><li><span>an identity provider;</span></li><li><span>cloud or data center infrastructure;</span></li><li><span>a fintech or commercial partner;</span></li><li><span>a contact center;</span></li><li><span>fraud and security systems;</span></li><li><span>customer communication channels.</span></li></ul>"},{"type":"paragraph","html":"<p>The organization may not own every component, but it remains accountable for the service outcome.</p>"},{"type":"heading","level":3,"text":"A banking example","id":""},{"type":"paragraph","html":"<p>In digital banking, the loss of a system, channel, supplier, team, data source, or infrastructure route can directly affect money, data, identity, payments, and customer trust.</p>"},{"type":"paragraph","html":"<p>The practical question is:</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p>If one part of the service path becomes unavailable, can the bank still protect essential customer outcomes within an acceptable level of impact?</p></blockquote>"},{"type":"heading","level":2,"text":"How do we know we are ready?","id":"how-do-we-know-we-are-ready"},{"type":"paragraph","html":"<p>A continuity plan, a backup, or an annual exercise does not by itself prove readiness.</p>"},{"type":"paragraph","html":"<p>Real readiness should be able to answer:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>Are important dependencies genuinely understood?</span></li><li><span>Does the alternative route actually work?</span></li><li><span>Do deputies have the required authority and access?</span></li><li><span>Can recovery be achieved within the target time?</span></li><li><span>Is recovered data complete and trustworthy?</span></li><li><span>Have critical suppliers been tested under disruption scenarios?</span></li><li><span>Are crisis decisions assigned to clear owners with defined authority?</span></li></ul>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>A plan is a claim of readiness. Testing creates the evidence.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"Continuity is not only about responding to crisis","id":"continuity-is-not-only-about-responding-to-crisis"},{"type":"paragraph","html":"<p>Continuity is not limited to reacting after disruption occurs.</p>"},{"type":"paragraph","html":"<p>A major part of continuity is seeing the forces that can gradually erode or threaten the organization’s ability to continue.</p>"},{"type":"paragraph","html":"<p><strong>Deep Blue Radar</strong> is designed to help observe and interpret this wider environment:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>trends;</span></li><li><span>patterns;</span></li><li><span>dependencies;</span></li><li><span>structural shifts;</span></li><li><span>weak signals;</span></li><li><span>emerging risks.</span></li></ul>"},{"type":"paragraph","html":"<p>The objective is not to predict the future with certainty. It is to see important changes before they become a crisis, and to understand what they may mean for the continuity of the organization.</p>"},{"type":"paragraph","html":"<p><strong>CTA:</strong> Explore Deep Blue Radar</p>"},{"type":"heading","level":2,"text":"Key questions about Continuity","id":"key-questions-about-continuity"},{"type":"heading","level":3,"text":"What is the difference between Business Continuity and Disaster Recovery?","id":""},{"type":"paragraph","html":"<p>Disaster Recovery focuses mainly on restoring technology, data, and infrastructure. Business Continuity focuses on continuing or restoring the full service outcome across people, processes, technology, data, infrastructure, and suppliers.</p>"},{"type":"heading","level":3,"text":"What is BCM?","id":""},{"type":"paragraph","html":"<p>Business Continuity Management is the governance and management lifecycle used to design, maintain, test, and improve continuity capability.</p>"},{"type":"heading","level":3,"text":"What is BIA?","id":""},{"type":"paragraph","html":"<p>Business Impact Analysis examines how disruption affects an important service over time and translates that impact into continuity priorities and requirements.</p>"},{"type":"heading","level":3,"text":"What are RTO and RPO?","id":""},{"type":"paragraph","html":"<p>RTO is the target time for restoring a capability or service. RPO defines the acceptable amount of recoverable data lag.</p>"},{"type":"heading","level":3,"text":"Are backups enough for Business Continuity?","id":""},{"type":"paragraph","html":"<p>No. Backups are only one recovery capability. Continuity also depends on people, processes, infrastructure, access, trustworthy data, suppliers, and operational readiness.</p>"},{"type":"heading","level":3,"text":"Who is responsible for Continuity?","id":""},{"type":"paragraph","html":"<p>Ultimate accountability sits with senior management, while service owners, BCM, technology, operations, risk, finance, people, communications, and supplier managers each own part of the capability.</p>"}]}, fa: {"title":"تداوم","metaTitle":"تداوم","metaDescription":"","blocks":[{"type":"heading","level":1,"text":"تداوم","id":"تداوم"},{"type":"heading","level":2,"text":"توان ادامه‌دادن آنچه واقعاً مهم است","id":"توان-ادامه-دادن-آنچه-واقعا-مهم-است"},{"type":"paragraph","html":"<p>اختلال همیشه قابل پیشگیری نیست.</p>"},{"type":"paragraph","html":"<p>سازمان آماده، سازمانی نیست که هرگز دچار اختلال نمی‌شود؛ سازمانی است که می‌داند در شرایط غیرعادی <strong>چه چیزی باید ادامه پیدا کند، تا چه سطحی، برای چه مدتی و با اتکا به چه قابلیت‌هایی.</strong></p>"},{"type":"paragraph","html":"<p><strong>CTA اصلی:</strong> کاوش در رادار دیپ‌بلو <strong>CTA ثانویه:</strong> تداوم چیست؟</p>"},{"type":"heading","level":2,"text":"وقتی شرایط عادی از بین می‌رود، چه چیزی باید ادامه پیدا کند؟","id":"وقتی-شرایط-عادی-از-بین-می-رود-چه-چیزی-باید-ادامه-پیدا-کند"},{"type":"paragraph","html":"<p>خرابی فناوری، حمله سایبری، قطعی زیرساخت، نبود نیروی کلیدی، شکست تأمین‌کننده یا شوک مالی، شکل‌های متفاوت یک مسئله‌اند:</p>"},{"type":"paragraph","html":"<p><strong>آیا سازمان می‌تواند آنچه برای مشتری، عملیات و بقای خود مهم است ادامه دهد؟</strong></p>"},{"type":"paragraph","html":"<p>پرسش تداوم فقط این نیست که «کدام سامانه از کار افتاده است؟». پرسش‌های مهم‌تر این‌ها هستند:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>کدام خدمت مهم تحت تأثیر قرار گرفته است؟</span></li><li><span>چه میزان اختلال قابل‌تحمل است؟</span></li><li><span>حداقل سطح خدمتی که باید حفظ شود چیست؟</span></li><li><span>چه وابستگی‌هایی باید حفظ یا بازیابی شوند؟</span></li><li><span>چه کسی درباره اولویت، منابع و پذیرش ریسک تصمیم می‌گیرد؟</span></li></ul>"},{"type":"heading","level":2,"text":"تداوم کسب‌وکار چیست؟","id":"تداوم-کسب-وکار-چیست"},{"type":"paragraph","html":"<p><strong>تداوم کسب‌وکار یا Business Continuity توان سازمان برای ادامه‌دادن خدمات و فعالیت‌های مهم در زمان اختلال، یا بازگرداندن آن‌ها در زمان و سطحی قابل‌قبول است.</strong></p>"},{"type":"paragraph","html":"<p>این توان فقط به فناوری، نسخه پشتیبان یا یک برنامه مکتوب وابسته نیست؛ بلکه به هماهنگی افراد، فرایندها، داده، زیرساخت، منابع مالی، تأمین‌کنندگان، ارتباطات و اختیار تصمیم‌گیری نیاز دارد.</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>تداوم یک سند نیست؛ یک قابلیت سازمانی است.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"تداوم فقط Backup، DR یا مدیریت بحران نیست","id":"تداوم-فقط-backup-dr-یا-مدیریت-بحران-نیست"},{"type":"paragraph","html":"<p>این مفاهیم به هم مرتبط‌اند، اما یکی نیستند:</p>"},{"type":"table","html":"<div class=\"continuity-table-scroll\"><table class=\"continuity-comparison-table\"><thead><tr><th>مفهوم</th><th>تمرکز اصلی</th><th>پرسش کلیدی</th></tr></thead><tbody><tr><td><strong>Business Continuity</strong></td><td>ادامه یا بازگرداندن خدمت مهم</td><td>چگونه آنچه مهم است ادامه پیدا کند؟</td></tr><tr><td><strong>Disaster Recovery</strong></td><td>بازیابی فناوری، داده و زیرساخت</td><td>محیط فناوری چگونه بازیابی شود؟</td></tr><tr><td><strong>Crisis Management</strong></td><td>تصمیم‌های ارشد و ارتباطات در بحران</td><td>چه تصمیم‌های استثنایی و ارتباطاتی لازم است؟</td></tr><tr><td><strong>Operational Resilience</strong></td><td>حفظ خدمت در محدوده اثر قابل‌تحمل</td><td>آیا خدمت با وجود خرابی اجزا همچنان قابل‌قبول باقی می‌ماند؟</td></tr></tbody></table></div>"},{"type":"paragraph","html":"<p>بازیابی یک سرور لزوماً به معنای بازگشت خدمت به مشتری نیست. همان‌طور که تشکیل جلسه بحران نیز به‌تنهایی توان ادامه عملیات را ایجاد نمی‌کند.</p>"},{"type":"heading","level":3,"text":"یک مثال ساده","id":""},{"type":"paragraph","html":"<p>فرض کنید سامانه پرداخت پس از یک اختلال دوباره در دسترس قرار گرفته است؛ اما سرویس احراز هویت طرف سوم هنوز قطع است، بخشی از داده‌های تراکنش نیاز به تطبیق دارد و کانال اطلاع‌رسانی مشتری نیز کار نمی‌کند.</p>"},{"type":"paragraph","html":"<p>فناوری تا حدی بازیابی شده است، اما <strong>خدمت پرداخت هنوز به‌طور قابل‌اعتماد بازنگشته است.</strong></p>"},{"type":"heading","level":2,"text":"واحد اصلی تحلیل، «خدمت مهم» است","id":"واحد-اصلی-تحلیل-خدمت-مهم-است"},{"type":"paragraph","html":"<p>سازمان‌ها معمولاً سامانه‌ها، واحدها، ساختمان‌ها و دارایی‌ها را می‌بینند. مشتری اما یک <strong>خدمت</strong> یا <strong>نتیجه</strong> را تجربه می‌کند.</p>"},{"type":"paragraph","html":"<p>به همین دلیل، تداوم باید تا حد امکان از «خدمت مهم» آغاز شود.</p>"},{"type":"paragraph","html":"<p>برای هر خدمت مهم باید روشن باشد:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>چه مشتریان و ذی‌نفعانی به آن وابسته‌اند؛</span></li><li><span>حداقل سطح قابل‌قبول خدمت چیست؛</span></li><li><span>چه مقدار اختلال قابل‌تحمل است؛</span></li><li><span>چه افراد، فرایندها، داده‌ها، سامانه‌ها و زیرساخت‌هایی به آن وابسته‌اند؛</span></li><li><span>چه تأمین‌کنندگان و طرف‌های بیرونی در مسیر خدمت حضور دارند؛</span></li><li><span>ترتیب بازیابی چگونه است؛</span></li><li><span>چه کسی مالک تصمیم و پاسخ‌گویی است.</span></li></ul>"},{"type":"code","html":"<pre class=\"continuity-code\"><code>مشتری / ذی‌نفع\n      ↓\nخدمت\n      ↓\nفرایندها و تصمیم‌ها\n      ↓\nافراد و مهارت‌ها\n      ↓\nسامانه‌ها و داده‌ها\n      ↓\nزیرساخت و مکان\n      ↓\nتأمین‌کنندگان و وابستگی‌های بیرونی</code></pre>"},{"type":"heading","level":2,"text":"برای هر خدمت مهم، پنج چیز باید از قبل روشن باشد","id":"برای-هر-خدمت-مهم-پنج-چیز-باید-از-قبل-روشن-باشد"},{"type":"heading","level":3,"text":"۱. چه چیزی باید ادامه پیدا کند؟","id":""},{"type":"paragraph","html":"<p>کدام خدمت یا نتیجه برای مشتری، عملیات، تعهدات و بقای سازمان مهم است؟</p>"},{"type":"heading","level":3,"text":"۲. حداقل سطح قابل‌قبول چیست؟","id":""},{"type":"paragraph","html":"<p>خدمت در زمان اختلال تا چه سطحی باید حفظ شود؟</p>"},{"type":"heading","level":3,"text":"۳. اختلال تا کجا قابل‌تحمل است؟","id":""},{"type":"paragraph","html":"<p>از چه نقطه‌ای اثر اختلال برای مشتری، عملیات یا سازمان غیرقابل‌قبول می‌شود؟</p>"},{"type":"heading","level":3,"text":"۴. خدمت به چه وابستگی‌هایی متکی است؟","id":""},{"type":"paragraph","html":"<p>افراد، فرایندها، داده، فناوری، زیرساخت، تأمین‌کنندگان و کانال‌های ارتباطی آن کدام‌اند؟</p>"},{"type":"heading","level":3,"text":"۵. چه کسی تصمیم می‌گیرد؟","id":""},{"type":"paragraph","html":"<p>اختیار تعیین اولویت، تخصیص منابع، پذیرش ریسک و ارتباطات در شرایط غیرعادی با چه کسی است؟</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p>مفاهیمی مانند <strong>BIA، Impact Tolerance، RTO و RPO</strong> ابزارهایی برای پاسخ دقیق‌تر به همین پرسش‌ها هستند.</p></blockquote>"},{"type":"heading","level":2,"text":"تداوم چگونه ساخته می‌شود؟","id":"تداوم-چگونه-ساخته-می-شود"},{"type":"paragraph","html":"<p>برای ایجاد تداوم، صرف داشتن Plan کافی نیست. سازمان باید یک قابلیت واقعی و آزموده بسازد.</p>"},{"type":"heading","level":3,"text":"۱. شناخت خدمت و اثر","id":""},{"type":"paragraph","html":"<p>خدمات مهم و پیامد اختلال آن‌ها شناسایی می‌شوند.</p>"},{"type":"heading","level":3,"text":"۲. شناخت وابستگی‌ها","id":""},{"type":"paragraph","html":"<p>مسیر انتهابه‌انتهای خدمت و نقاط تمرکز یا شکست شناخته می‌شوند.</p>"},{"type":"heading","level":3,"text":"۳. طراحی راهبردهای جایگزین","id":""},{"type":"paragraph","html":"<p>روش‌های ادامه خدمت، بازیابی، Failover، کار دستی، خدمت محدود یا ظرفیت جایگزین طراحی می‌شوند.</p>"},{"type":"heading","level":3,"text":"۴. تعیین نقش و اختیار","id":""},{"type":"paragraph","html":"<p>مالک خدمت، جانشین، مدیر رخداد و سطوح تصمیم مشخص می‌شوند.</p>"},{"type":"heading","level":3,"text":"۵. تمرین و اثبات آمادگی","id":""},{"type":"paragraph","html":"<p>برنامه‌ها و مسیرهای جایگزین باید در شرایط واقعی یا شبیه‌سازی‌شده آزموده شوند.</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>آمادگی زمانی قابل‌دفاع است که برای آن شواهد وجود داشته باشد.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"تداوم یک مسئله میان‌وظیفه‌ای است","id":"تداوم-یک-مسئله-میان-وظیفه-ای-است"},{"type":"paragraph","html":"<p>هیچ واحدی به‌تنهایی تداوم را ایجاد نمی‌کند.</p>"},{"type":"heading","level":3,"text":"مالی","id":""},{"type":"paragraph","html":"<p>آیا سازمان در زمان اختلال به منابع مالی لازم برای ادامه عملیات، پرداخت تعهدات و بازیابی دسترسی دارد؟</p>"},{"type":"heading","level":3,"text":"افراد","id":""},{"type":"paragraph","html":"<p>اگر فرد یا تیم کلیدی در دسترس نباشد، آیا دانش، اختیار و ظرفیت جایگزین وجود دارد؟</p>"},{"type":"heading","level":3,"text":"ریسک","id":""},{"type":"paragraph","html":"<p>کدام وابستگی‌ها، تمرکزها و تغییرات می‌توانند تداوم خدمت را تهدید کنند؟</p>"},{"type":"heading","level":3,"text":"عملیات","id":""},{"type":"paragraph","html":"<p>آیا خدمت می‌تواند در سطحی محدود، دستی یا از مسیر جایگزین ادامه پیدا کند؟</p>"},{"type":"heading","level":3,"text":"فناوری، داده و زیرساخت","id":""},{"type":"paragraph","html":"<p>آیا بازیابی فنی واقعاً نتیجه خدمت را برمی‌گرداند و داده بعد از بازیابی قابل‌اعتماد است؟</p>"},{"type":"heading","level":3,"text":"تأمین‌کنندگان و طرف‌های بیرونی","id":""},{"type":"paragraph","html":"<p>اگر یک تأمین‌کننده یا زیرساخت بیرونی از دسترس خارج شود، چه گزینه‌ای باقی می‌ماند؟</p>"},{"type":"heading","level":3,"text":"ارتباطات","id":""},{"type":"paragraph","html":"<p>در زمان اختلال، چه کسی، از چه کانالی و با چه سطحی از قطعیت با کارکنان، مشتریان و شرکا ارتباط برقرار می‌کند؟</p>"},{"type":"heading","level":2,"text":"در کسب‌وکار دیجیتال، مرز خدمت از مرز سازمان فراتر می‌رود","id":"در-کسب-وکار-دیجیتال-مرز-خدمت-از-مرز-سازمان-فراتر-می-رود"},{"type":"paragraph","html":"<p>در کسب‌وکار دیجیتال، یک خدمت معمولاً درون مرز یک سازمان باقی نمی‌ماند.</p>"},{"type":"paragraph","html":"<p>ممکن است مسیر خدمت شامل این اجزا باشد:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>اپلیکیشن یا کانال دیجیتال؛</span></li><li><span>API؛</span></li><li><span>شبکه پرداخت؛</span></li><li><span>Identity Provider؛</span></li><li><span>Cloud یا Data Center؛</span></li><li><span>Fintech یا شریک تجاری؛</span></li><li><span>مرکز تماس؛</span></li><li><span>سامانه‌های تقلب و امنیت؛</span></li><li><span>کانال‌های ارتباط با مشتری.</span></li></ul>"},{"type":"paragraph","html":"<p>سازمان ممکن است مالک همه این اجزا نباشد، اما همچنان در برابر نتیجه نهایی خدمت پاسخ‌گوست.</p>"},{"type":"heading","level":3,"text":"نمونه بانکی","id":""},{"type":"paragraph","html":"<p>در بانکداری دیجیتال، اختلال یک سامانه، کانال، تأمین‌کننده، تیم، منبع داده یا مسیر زیرساخت می‌تواند مستقیماً بر پول، داده، هویت، پرداخت و اعتماد مشتری اثر بگذارد.</p>"},{"type":"paragraph","html":"<p>پرسش عملی این است:</p>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p>اگر یکی از اجزای مسیر خدمت از دسترس خارج شود، آیا بانک همچنان می‌تواند نتیجه ضروری مشتری را در محدوده اثر قابل‌تحمل حفظ کند؟</p></blockquote>"},{"type":"heading","level":2,"text":"از کجا بدانیم آماده‌ایم؟","id":"از-کجا-بدانیم-آماده-ایم"},{"type":"paragraph","html":"<p>وجود برنامه، نسخه پشتیبان یا مانور سالانه به‌تنهایی آمادگی را اثبات نمی‌کند.</p>"},{"type":"paragraph","html":"<p>آمادگی واقعی باید بتواند به این پرسش‌ها پاسخ دهد:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>آیا وابستگی‌های مهم واقعاً شناخته شده‌اند؟</span></li><li><span>آیا مسیر جایگزین در عمل کار می‌کند؟</span></li><li><span>آیا جانشین‌ها اختیار و دسترسی لازم را دارند؟</span></li><li><span>آیا بازیابی در زمان هدف انجام شده است؟</span></li><li><span>آیا داده پس از بازیابی سالم و قابل‌اتکاست؟</span></li><li><span>آیا تأمین‌کنندگان در سناریوی اختلال آزموده شده‌اند؟</span></li><li><span>آیا تصمیم‌های بحرانی از قبل صاحب و سطح اختیار مشخص دارند؟</span></li></ul>"},{"type":"quote","html":"<blockquote class=\"continuity-quote\"><p><strong>برنامه، ادعای آمادگی است. آزمون، شواهد آمادگی را می‌سازد.</strong></p></blockquote>"},{"type":"heading","level":2,"text":"تداوم فقط واکنش به بحران نیست","id":"تداوم-فقط-واکنش-به-بحران-نیست"},{"type":"paragraph","html":"<p>تداوم فقط درباره واکنش به اختلالی که رخ داده نیست.</p>"},{"type":"paragraph","html":"<p>بخش مهمی از آن، دیدن عواملی است که می‌توانند در آینده توان ادامه سازمان را فرسوده یا مختل کنند.</p>"},{"type":"paragraph","html":"<p><strong>Deep Blue Radar</strong> برای مشاهده و تحلیل همین فضای پیرامونی طراحی شده است:</p>"},{"type":"list","html":"<ul class=\"continuity-bullet-list\"><li><span>Trendها؛</span></li><li><span>Patternها؛</span></li><li><span>وابستگی‌ها؛</span></li><li><span>تغییرات ساختاری؛</span></li><li><span>نشانه‌های ضعیف؛</span></li><li><span>ریسک‌های در حال شکل‌گیری.</span></li></ul>"},{"type":"paragraph","html":"<p>هدف این نیست که آینده را دقیق پیش‌بینی کنیم. هدف این است که پیش از آنکه یک تغییر یا وابستگی به بحران تبدیل شود، آن را ببینیم و درباره اثر آن بر تداوم سازمان تصمیم بگیریم.</p>"},{"type":"paragraph","html":"<p><strong>CTA:</strong> کاوش در رادار دیپ‌بلو</p>"},{"type":"heading","level":2,"text":"پرسش‌های کلیدی درباره تداوم","id":"پرسش-های-کلیدی-درباره-تداوم"},{"type":"heading","level":3,"text":"تفاوت Business Continuity و Disaster Recovery چیست؟","id":""},{"type":"paragraph","html":"<p>DR عمدتاً بر بازیابی فناوری، داده و زیرساخت تمرکز دارد. Business Continuity بر ادامه یا بازگرداندن نتیجه کامل خدمت در میان افراد، فرایندها، فناوری، داده، زیرساخت و تأمین‌کنندگان تمرکز می‌کند.</p>"},{"type":"heading","level":3,"text":"BCM چیست؟","id":""},{"type":"paragraph","html":"<p>Business Continuity Management چرخه مدیریتی و حاکمیتی برای طراحی، نگهداشت، آزمون و بهبود قابلیت تداوم است.</p>"},{"type":"heading","level":3,"text":"BIA چیست؟","id":""},{"type":"paragraph","html":"<p>Business Impact Analysis بررسی می‌کند اختلال چگونه در طول زمان بر خدمت اثر می‌گذارد و چه اولویت‌ها و نیازمندی‌هایی برای تداوم ایجاد می‌کند.</p>"},{"type":"heading","level":3,"text":"RTO و RPO چه هستند؟","id":""},{"type":"paragraph","html":"<p>RTO زمان هدف برای بازگرداندن یک قابلیت یا خدمت است. RPO میزان قابل‌قبول عقب‌ماندگی داده قابل‌بازیابی را مشخص می‌کند.</p>"},{"type":"heading","level":3,"text":"آیا Backup برای تداوم کافی است؟","id":""},{"type":"paragraph","html":"<p>خیر. Backup فقط یکی از قابلیت‌های بازیابی است. تداوم به افراد، فرایندها، زیرساخت، دسترسی، داده معتبر، تأمین‌کنندگان و آمادگی عملیاتی نیز وابسته است.</p>"},{"type":"heading","level":3,"text":"چه کسی مسئول تداوم است؟","id":""},{"type":"paragraph","html":"<p>پاسخ‌گویی نهایی در سطح مدیریت ارشد است، اما مالک خدمت، BCM، فناوری، عملیات، ریسک، مالی، منابع انسانی، ارتباطات و مدیران تأمین‌کننده هرکدام بخشی از قابلیت را در اختیار دارند.</p>"}]} };
    var lang = currentLanguage() === "fa" ? "fa" : "en";
    var data = content[lang];
    var dir = lang === "fa" ? "rtl" : "ltr";
    var allSectionIds = content.en.blocks.filter(function (block) {
      return block.type === "heading" && block.level === 2;
    }).map(function (block) { return block.id; });
    var sectionIds = allSectionIds.slice(1);
    var sectionIndex = 0;

    function blockMarkup(block, index) {
      if (block.type === "heading") {
        if (block.level === 1) return "";
        if (block.level === 2) {
          var stableId = sectionIds[sectionIndex] || block.id || ("continuity-section-" + index);
          sectionIndex += 1;
          return '<section class="inner-section continuity-md-section" id="' + escapeHtml(stableId) + '" dir="' + dir + '" data-chamfer="" data-radius="12"><div class="continuity-section-head"><p class="dbr-label">' + (lang === "fa" ? "راهنمای تداوم" : "Continuity guide") + '</p><h2>' + escapeHtml(block.text) + '</h2></div>';
        }
        return '<h' + Math.min(block.level, 4) + ' class="continuity-md-subheading">' + escapeHtml(block.text) + '</h' + Math.min(block.level, 4) + '>';
      }
      return block.html;
    }

    var firstH1 = data.blocks.find(function (block) { return block.type === "heading" && block.level === 1; });
    var h2Indexes = data.blocks.reduce(function (indexes, block, index) {
      if (block.type === "heading" && block.level === 2) indexes.push(index);
      return indexes;
    }, []);
    var heroIndex = h2Indexes[0];
    var firstSectionIndex = h2Indexes[1] || data.blocks.length;
    var heroHeading = heroIndex >= 0 ? data.blocks[heroIndex].text : data.title;
    var heroBlocks = heroIndex >= 0 ? data.blocks.slice(heroIndex + 1, firstSectionIndex).filter(function (block) {
      return !(block.type === "paragraph" && /Primary CTA|CTA اصلی/.test(block.html || ""));
    }) : [];
    var sections = [];
    var open = false;
    var activeCrossFunctional = false;
    var crossFunctionalCardsInserted = false;
    var activeRecoveryComparison = false;
    var collectingSimpleExample = false;
    var simpleExampleParagraphs = [];
    var activeContinuityFaq = false;

    function crossFunctionalCardsMarkup() {
      var cards = lang === "fa" ? [
        ["مالی", "آیا سازمان در زمان اختلال به منابع مالی لازم برای ادامه عملیات، پرداخت تعهدات و بازیابی دسترسی دارد؟"],
        ["افراد", "اگر فرد یا تیم کلیدی در دسترس نباشد، آیا دانش، اختیار و ظرفیت جایگزین وجود دارد؟"],
        ["ریسک", "کدام وابستگی‌ها، تمرکزها و تغییرات می‌توانند تداوم خدمت را تهدید کنند؟"],
        ["عملیات", "آیا خدمت می‌تواند در سطحی محدود، دستی یا از مسیر جایگزین ادامه پیدا کند؟"],
        ["فناوری، داده و زیرساخت", "آیا بازیابی فنی واقعاً نتیجه خدمت را برمی‌گرداند و داده بعد از بازیابی قابل‌اعتماد است؟"],
        ["تأمین‌کنندگان و طرف‌های بیرونی", "اگر یک تأمین‌کننده یا زیرساخت بیرونی از دسترس خارج شود، چه گزینه‌ای باقی می‌ماند؟"],
        ["ارتباطات", "در زمان اختلال، چه کسی، از چه کانالی و با چه سطحی از قطعیت با کارکنان، مشتریان و شرکا ارتباط برقرار می‌کند؟"]
      ] : [
        ["Finance", "Can the organization access the funds required to sustain essential operations, meet obligations, and recover during disruption?"],
        ["People", "If a key person or team is unavailable, is there sufficient knowledge, authority, and alternative capacity?"],
        ["Risk", "Which dependencies, concentrations, and changes could threaten the continuity of important services?"],
        ["Operations", "Can the service continue at a reduced level, through manual processes, or via an alternative route?"],
        ["Technology, Data, and Infrastructure", "Does technical recovery actually restore the service outcome, and is the recovered data trustworthy?"],
        ["Suppliers and External Parties", "If a supplier or external infrastructure provider becomes unavailable, what practical alternative remains?"],
        ["Communications", "During disruption, who communicates with employees, customers, and partners, through which channels, and with what level of certainty?"]
      ];
      return '<div class="continuity-function-grid">' + cards.map(function (card, cardIndex) {
        var number = String(cardIndex + 1).padStart(2, "0");
        return '<article class="continuity-function-card glass-card"><p class="dbr-label">' + (lang === "fa" ? persianDigits(number) : number) + '</p><h3>' + escapeHtml(card[0]) + '</h3><p>' + escapeHtml(card[1]) + '</p></article>';
      }).join("") + "</div>";
    }

    function servicePathMarkup() {
      var steps = lang === "fa" ? ["مشتری / ذی‌نفع", "خدمت", "فرایندها و تصمیم‌ها", "افراد و مهارت‌ها", "سامانه‌ها و داده‌ها", "زیرساخت و مکان", "تأمین‌کنندگان و وابستگی‌های بیرونی"] : ["Customer / Stakeholder", "Service", "Processes and Decisions", "People and Skills", "Systems and Data", "Infrastructure and Locations", "Suppliers and External Dependencies"];
      return '<div class="continuity-service-path">' + steps.map(function (step, stepIndex) {
        var number = String(stepIndex + 1).padStart(2, "0");
        return '<article class="continuity-service-step glass-card"><span>' + (lang === "fa" ? persianDigits(number) : number) + '</span><strong>' + escapeHtml(step) + '</strong></article>';
      }).join("") + "</div>";
    }

    function continuityFaqMarkup() {
      var faq = lang === "fa" ? [
        ["تفاوت Business Continuity و Disaster Recovery چیست؟", "DR عمدتاً بر بازیابی فناوری، داده و زیرساخت تمرکز دارد. Business Continuity بر ادامه یا بازگرداندن نتیجه کامل خدمت در میان افراد، فرایندها، فناوری، داده، زیرساخت و تأمین‌کنندگان تمرکز می‌کند."],
        ["BCM چیست؟", "Business Continuity Management چرخه مدیریتی و حاکمیتی برای طراحی، نگهداشت، آزمون و بهبود قابلیت تداوم است."],
        ["BIA چیست؟", "Business Impact Analysis بررسی می‌کند اختلال چگونه در طول زمان بر خدمت اثر می‌گذارد و چه اولویت‌ها و نیازمندی‌هایی برای تداوم ایجاد می‌کند."],
        ["RTO و RPO چه هستند؟", "RTO زمان هدف برای بازگرداندن یک قابلیت یا خدمت است. RPO میزان قابل‌قبول عقب‌ماندگی داده قابل‌بازیابی را مشخص می‌کند."],
        ["آیا Backup برای تداوم کافی است؟", "خیر. Backup فقط یکی از قابلیت‌های بازیابی است. تداوم به افراد، فرایندها، زیرساخت، دسترسی، داده معتبر، تأمین‌کنندگان و آمادگی عملیاتی نیز وابسته است."],
        ["چه کسی مسئول تداوم است؟", "پاسخ‌گویی نهایی در سطح مدیریت ارشد است، اما مالک خدمت، BCM، فناوری، عملیات، ریسک، مالی، منابع انسانی، ارتباطات و مدیران تأمین‌کننده هرکدام بخشی از قابلیت را در اختیار دارند."]
      ] : [
        ["What is the difference between Business Continuity and Disaster Recovery?", "Disaster Recovery focuses mainly on restoring technology, data, and infrastructure. Business Continuity focuses on continuing or restoring the full service outcome across people, processes, technology, data, infrastructure, and suppliers."],
        ["What is BCM?", "Business Continuity Management is the governance and management lifecycle used to design, maintain, test, and improve continuity capability."],
        ["What is BIA?", "Business Impact Analysis examines how disruption affects an important service over time and translates that impact into continuity priorities and requirements."],
        ["What are RTO and RPO?", "RTO is the target time for restoring a capability or service. RPO defines the acceptable amount of recoverable data lag."],
        ["Are backups enough for Business Continuity?", "No. Backups are only one recovery capability. Continuity also depends on people, processes, infrastructure, access, trustworthy data, suppliers, and operational readiness."],
        ["Who is responsible for continuity?", "Final accountability sits with senior management, but service owners, BCM, technology, operations, risk, finance, HR, communications, and supplier managers each own part of the capability."]
      ];
      return '<section class="inner-section continuity-faq-section" id="key-questions-about-continuity" data-chamfer="" data-radius="12"><h2>' + (lang === "fa" ? "پرسش‌های متداول" : "Frequently Asked Questions") + '</h2><div class="accordion">' + faq.map(function (item, itemIndex) {
        return '<div class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="continuity-faq-' + itemIndex + '"><span>' + escapeHtml(item[0]) + '</span>' + icon("plus") + '</button><div class="accordion-panel" id="continuity-faq-' + itemIndex + '" hidden><p>' + escapeHtml(item[1]) + '</p></div></div>';
      }).join("") + "</div></section>";
    }

    data.blocks.slice(firstSectionIndex).forEach(function (block, index) {
      if (activeContinuityFaq) return;
      if (block.type === "heading" && block.level === 2) {
        if (/key questions about continuity|پرسش‌های کلیدی درباره تداوم/i.test(block.text || "")) {
          if (open) sections.push("</section>");
          sections.push(continuityFaqMarkup());
          open = false;
          activeContinuityFaq = true;
          return;
        }
        if (open) sections.push("</section>");
        var sectionMarkup = blockMarkup(block, index);
        activeCrossFunctional = sectionMarkup.indexOf('id="continuity-is-a-cross-functional-capability"') !== -1;
        activeRecoveryComparison = sectionMarkup.indexOf('id="continuity-is-not-just-backup-dr-or-crisis-management"') !== -1;
        crossFunctionalCardsInserted = false;
        collectingSimpleExample = false;
        simpleExampleParagraphs = [];
        sections.push(sectionMarkup);
        open = true;
      } else if (block.type === "heading" && block.level === 1) {
        return;
      } else if (block.type === "code" && /Customer \/ Stakeholder|مشتری \/ ذی‌نفع/.test(block.html || "")) {
        sections.push(servicePathMarkup());
      } else if (activeRecoveryComparison && block.type === "heading" && block.level === 3 && /simple example|مثال ساده/i.test(block.text || "")) {
        sections.push(blockMarkup(block, index));
        collectingSimpleExample = true;
        simpleExampleParagraphs = [];
      } else if (collectingSimpleExample && block.type === "paragraph") {
        simpleExampleParagraphs.push(block.html);
        if (simpleExampleParagraphs.length === 2) {
          sections.push('<div class="continuity-example-note">' + simpleExampleParagraphs.join("") + "</div>");
          collectingSimpleExample = false;
          simpleExampleParagraphs = [];
        }
      } else if (activeCrossFunctional && block.type === "heading" && block.level === 3) {
        return;
      } else if (activeCrossFunctional && block.type === "paragraph") {
        if (!crossFunctionalCardsInserted) {
          sections.push(blockMarkup(block, index));
          sections.push(crossFunctionalCardsMarkup());
          crossFunctionalCardsInserted = true;
        }
      } else if (/CTA:<\/strong>|CTA:<\/b>|CTA اصلی/.test(block.html || "")) {
        return;
      } else {
        sections.push(blockMarkup(block, index));
      }
    });
    if (open) sections.push("</section>");

    function heroBlockMarkup(block, index) {
      if (index === 0 && /Disruption cannot always be prevented|اختلال همیشه قابل پیشگیری نیست/.test(block.html || "")) return "";
      if (index === 1 && /A prepared organization|سازمان آماده/.test(block.html || "")) {
        if (lang === "fa") {
          return '<p>اختلال همیشه قابل پیشگیری نیست. سازمان آماده، سازمانی نیست که هرگز دچار اختلال نمی‌شود؛ سازمانی است که می‌داند در شرایط غیرعادی <strong>چه چیزی باید ادامه پیدا کند، تا چه سطحی، برای چه مدتی و با اتکا به چه قابلیت‌هایی.</strong></p>';
        }
        return '<p>Disruption cannot always be prevented. A prepared organization is not one that never experiences disruption. It is one that knows, under abnormal conditions, <strong>what must continue, at what level, for how long, and with which capabilities in place.</strong></p>';
      }
      return blockMarkup(block, index);
    }

    return [
      '<section class="inner-section continuity-position-section continuity-pillar-hero" id="hero" dir="' + dir + '" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10">',
      '<div class="continuity-position-grid"><div><p class="dbr-label">' + (lang === "fa" ? "Business Continuity" : "Concept page") + '</p>',
      '<p class="continuity-md-lede">' + escapeHtml(heroHeading) + '</p><div class="continuity-hero-prose">' + heroBlocks.map(heroBlockMarkup).join("") + '</div></div></div>',
      '</section>',
      sections.join("")
    ].join("");
  }

  function technocraticThinkingMarkup() {
    function localizedAttrs(en, fa) {
      return ' data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '"';
    }

    function paragraph(item) {
      return '<p' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</p>';
    }

    function label(en, fa) {
      return '<p class="dbr-label"' + localizedAttrs(en, fa) + '>' + escapeHtml(en) + '</p>';
    }

    function simpleCard(item) {
      return '<article><p class="dbr-label"' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</p><h3' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</h3><p' + localizedAttrs(item[4], item[5]) + '>' + escapeHtml(item[4]) + '</p></article>';
    }

    function boundaryChip(item) {
      return '<span' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</span>';
    }

    function logicCard(item, index) {
      return '<article><span class="thinking-step-number" data-en="' + String(index + 1).padStart(2, "0") + '" data-fa="' + persianDigits(String(index + 1).padStart(2, "0")) + '">' + String(index + 1).padStart(2, "0") + '</span><h3' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</h3><p' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</p></article>';
    }

    function loopItem(item, index) {
      var step = String(index + 1).padStart(2, "0");
      return '<li><span data-en="' + step + '" data-fa="' + persianDigits(step) + '">' + step + '</span><strong' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</strong><small' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</small></li>';
    }

    function principleItem(item, index) {
      var step = String(index + 1).padStart(2, "0");
      return '<article><span data-en="' + step + '" data-fa="' + persianDigits(step) + '">' + step + '</span><p' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</p></article>';
    }

    function faqItem(item, index) {
      return '<div class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="thinking-faq-' + index + '"><span' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</span>' + icon("plus") + '</button><div class="accordion-panel" id="thinking-faq-' + index + '" hidden><p' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</p></div></div>';
    }

    var definitions = [
      ["MICRO-DEFINITION", "تعریف کوتاه", "Evidence-led reasoning", "استدلال مبتنی بر شواهد", "A way to connect a real problem to an accountable intervention and a measurable result.", "راهی برای اتصال یک مسئله واقعی به مداخله‌ای پاسخ‌گو و نتیجه‌ای قابل‌اندازه‌گیری."],
      ["FORMAL", "تعریف رسمی", "From Evidence to defensible intervention", "از شواهد تا مداخلهٔ قابل دفاع", "A structured operating philosophy for turning Evidence about an organizational problem into a defensible, accountable and monitored intervention.", "فلسفه‌ای عملیاتی برای تبدیل شواهد یک مسئلهٔ سازمانی به مداخله‌ای قابل دفاع، پاسخ‌گو و قابل پایش."],
      ["EXECUTIVE", "تعریف مدیریتی", "Make the Gap visible before investment", "شکاف را پیش از سرمایه‌گذاری آشکار کنید", "The method makes the problem, Gap, authority, Commitment and expected outcome visible before leaders commit resources.", "این روش مسئله، شکاف، اختیار، تعهد و نتیجهٔ مورد انتظار را پیش از تخصیص منابع آشکار می‌کند."]
    ];

    var boundaries = [
      ["Not technological enthusiasm", "فناوری‌زدگی نیست"],
      ["Not a political regime", "رژیم سیاسی نیست"],
      ["Not replacement of leaders by experts", "جایگزینی رهبر با متخصص نیست"],
      ["Not buying before defining", "خرید پیش از تعریف نیست"],
      ["Not innovation for its own sake", "نوآوری برای خود نوآوری نیست"],
      ["Not a rigid checklist", "چک‌لیست خشک نیست"],
      ["Not compliance alone", "فقط انطباق نیست"],
      ["Not data without judgment", "داده بدون قضاوت نیست"],
      ["Not a guarantee", "تضمین موفقیت نیست"]
    ];

    var logicGroups = [
      ["Observe and understand", "مشاهده و فهم", "Evidence separates what is known, assumed and missing. Pattern Recognition tests whether observations share a condition, dependency, behavior or failure mechanism. Gap Analysis compares the current state with the required result.", "شواهد مرز دانسته‌ها، فرض‌ها و نادانسته‌ها را روشن می‌کنند. تشخیص الگو می‌سنجد آیا مشاهده‌ها در یک وضعیت، وابستگی، رفتار یا سازوکار شکست مشترک‌اند. تحلیل شکاف وضع موجود را با نتیجهٔ لازم مقایسه می‌کند."],
      ["Decide and commit", "تصمیم و تعهد", "Technology and non-technology options are tested against purpose, context, Continuity, lifecycle, dependency, reversibility, cost, risk and measurement. Accountability names who must act and which affordances make action possible.", "گزینه‌های فناورانه و غیرفناورانه با هدف، زمینه، تداوم، چرخهٔ عمر، وابستگی، برگشت‌پذیری، هزینه، ریسک و قابلیت سنجش مقایسه می‌شوند. پاسخ‌گویی مشخص می‌کند چه کسی باید اقدام کند و چه امکاناتی اقدام را ممکن می‌سازند."],
      ["Act and learn", "اقدام و یادگیری", "Monitoring examines delivery, outcome, residual Gap, assumptions, unintended effects, adoption and sustainability. Results become Evidence that may confirm the intervention, adjust the Commitment or revise the Pattern interpretation.", "پایش، اجرا، نتیجه، شکاف باقی‌مانده، فرض‌ها، اثرات ناخواسته، پذیرش و پایداری را بررسی می‌کند. نتیجه به شواهد تازه تبدیل می‌شود و می‌تواند مداخله را تأیید کند، تعهد را تغییر دهد یا تفسیر الگو را اصلاح کند."]
    ];

    var loop = [
      ["Evidence", "شواهد", "What is known, assumed, contradicted or missing.", "آنچه دانسته، فرض، نقض یا نادیده مانده است."],
      ["Pattern Recognition", "تشخیص الگو", "Recurring conditions, dependencies, behaviors or mechanisms.", "شرایط، وابستگی‌ها، رفتارها یا سازوکارهای تکرارشونده."],
      ["Gap", "شکاف", "Distance between current and required state.", "فاصله میان وضع موجود و وضع لازم."],
      ["Options", "گزینه‌ها", "Technology and non-technology possibilities.", "امکان‌های فناورانه و غیرفناورانه."],
      ["Intervention", "مداخله", "The chosen change in process, capability, technology, policy or behavior.", "تغییر انتخاب‌شده در فرایند، قابلیت، فناوری، سیاست یا رفتار."],
      ["Accountability", "پاسخ‌گویی", "Named ownership with authority and affordances.", "مالکیت مشخص همراه با اختیار و امکانات اقدام."],
      ["Commitment", "تعهد", "A bounded, reviewable promise to act.", "وعده‌ای محدود، قابل بازبینی و اجرایی برای اقدام."],
      ["Monitoring", "پایش", "Execution, signals, assumptions and effects.", "اجرا، سیگنال‌ها، فرض‌ها و اثرها."],
      ["Result", "نتیجه", "Measured effect against the intended outcome.", "اثر اندازه‌گیری‌شده نسبت به نتیجهٔ مورد انتظار."],
      ["New Evidence", "شواهد تازه", "Learning returns to the evidence base.", "یادگیری به پایهٔ شواهد بازمی‌گردد."]
    ];

    var decisionCards = [
      ["EVIDENCE", "شواهد", "Begin with what can be defended.", "از چیزی آغاز کنید که قابل دفاع است.", "Evidence may include incidents, operating data, interviews, customer outcomes, financial results, research, standards, regulation, system behavior, realized failures and counter-evidence.", "شواهد می‌تواند رخداد، دادهٔ عملیاتی، مصاحبه، نتیجهٔ مشتری، اطلاعات مالی، پژوهش، استاندارد، مقررات، رفتار سامانه، شکست محقق‌شده و شواهد مخالف باشد."],
      ["PATTERN", "الگو", "Do not let the symptom become the whole problem.", "نگذارید نشانهٔ ظاهری جای تمام مسئله بنشیند.", "Pattern Recognition looks for recurring conditions, dependencies, behaviors or failure mechanisms beneath visible symptoms.", "تشخیص الگو به دنبال شرایط، وابستگی‌ها، رفتارها یا سازوکارهای شکست تکرارشونده زیر نشانه‌های ظاهری است."],
      ["GAP", "شکاف", "Name the distance from the required state.", "فاصله تا وضع لازم را نام‌گذاری کنید.", "The Gap may concern Evidence, authority, capability, process, architecture, resources, adoption or Monitoring.", "شکاف می‌تواند به شواهد، اختیار، قابلیت، فرایند، معماری، منابع، پذیرش یا پایش مربوط باشد."],
      ["TECHNOLOGY SELECTION", "انتخاب فناوری", "Select technology only when it fits the Gap.", "فناوری را فقط وقتی انتخاب کنید که با شکاف تناسب دارد.", "Technology is justified when it closes the defined Gap without creating an unacceptable new one.", "فناوری زمانی موجه است که شکاف تعریف‌شده را ببندد و شکاف تازهٔ غیرقابل‌قبولی نسازد."],
      ["ACCOUNTABILITY", "پاسخ‌گویی", "An owner must be able to act.", "صاحب مسئول باید توان اقدام داشته باشد.", "A named role needs authority, information, resources, permission, dependency influence, escalation path and answerability for the result.", "یک نقش مشخص به اختیار، اطلاعات، منابع، مجوز، اثرگذاری بر وابستگی، مسیر تشدید و الزام پاسخ دربارهٔ نتیجه نیاز دارد."],
      ["COMMITMENT", "تعهد", "A decision becomes executable when its conditions are explicit.", "تصمیم وقتی اجرایی می‌شود که شرایطش آشکار باشد.", "Commitment records outcome, owner, scope, resources, dependencies, timing, decision rights, success criteria, review points and escalation conditions.", "تعهد نتیجه، صاحب مسئول، دامنه، منابع، وابستگی‌ها، زمان، حقوق تصمیم، معیار موفقیت، نقاط بازبینی و شرایط تشدید را ثبت می‌کند."],
      ["MONITORING", "پایش", "Go-live is not proof of success.", "راه‌اندازی اثبات موفقیت نیست.", "Monitoring tests execution, outcome, residual Gap, assumptions, unintended effects, adoption and sustainability.", "پایش اجرا، نتیجه، شکاف باقی‌مانده، فرض‌ها، اثرات ناخواسته، پذیرش و پایداری را می‌آزماید."]
    ];

    var fields = [
      ["Performance Management", "مدیریت عملکرد", "Define the required result, identify the mechanisms limiting it, and select interventions that change those mechanisms.", "نتیجهٔ لازم را تعریف کنید، سازوکارهای محدودکنندهٔ آن را بیابید و مداخله‌ای برگزینید که همان سازوکارها را تغییر دهد."],
      ["Risk Management", "مدیریت ریسک", "Use realized failures, signals, Patterns and dependencies to describe exposure as a Gap and assign an owner who can treat it.", "از شکست‌های محقق‌شده، سیگنال‌ها، الگوها و وابستگی‌ها برای توصیف مواجهه به‌صورت شکاف استفاده کنید و صاحب مسئولی تعیین کنید که توان درمان آن را دارد."],
      ["Change Management", "مدیریت تغییر", "Treat adoption, capability, authority, incentives and operating integration as part of the intervention.", "پذیرش، قابلیت، اختیار، انگیزه و یکپارچگی عملیاتی را بخشی از مداخله بدانید."]
    ];

    var caseSteps = [
      ["Evidence", "شواهد", "Incident records show that alerts arrived, but decisions were delayed.", "سوابق رخداد نشان می‌دهند هشدارها رسیده‌اند، اما تصمیم‌ها دیر اتخاذ شده‌اند."],
      ["Pattern", "الگو", "Events share an external dependency and unclear authority to invoke alternatives.", "رخدادها یک وابستگی بیرونی و اختیار مبهم برای فعال‌سازی جایگزین دارند."],
      ["Gap", "شکاف", "The weakness is decision rights, supplier affordances and an untested fallback, not alert volume.", "ضعف اصلی حقوق تصمیم، امکانات قراردادی و راهکار جایگزین آزموده‌نشده است، نه حجم هشدار."],
      ["Options", "گزینه‌ها", "Revise escalation rights, negotiate test access, rehearse fallback and improve tooling only where it supports those changes.", "حقوق تشدید اصلاح شود، دسترسی آزمون در قرارداد بیاید، راهکار جایگزین تمرین شود و ابزار فقط در حمایت از این تغییرها ارتقا یابد."],
      ["Accountability", "پاسخ‌گویی", "One role owns the service result and receives authority, information, budget and contract path to act.", "یک نقش صاحب نتیجهٔ سرویس می‌شود و اختیار، اطلاعات، بودجه و مسیر قراردادی لازم را دریافت می‌کند."],
      ["Commitment", "تعهد", "Actions, owners, dates, success criteria, review points and stop conditions are recorded.", "اقدام‌ها، صاحبان، تاریخ‌ها، معیارها، نقاط بازبینی و شرایط توقف ثبت می‌شوند."],
      ["Monitoring", "پایش", "Exercises test decision time, fallback execution, residual dependency and unintended effects.", "تمرین‌ها زمان تصمیم، اجرای جایگزین، وابستگی باقی‌مانده و اثرات ناخواسته را می‌سنجند."],
      ["Learning", "یادگیری", "Results refresh the Evidence base and may revise the Pattern or intervention.", "نتیجه پایهٔ شواهد را تازه می‌کند و می‌تواند الگو یا مداخله را اصلاح کند."]
    ];

    var principles = [
      ["Start from realized failure and observable conditions.", "از شکست محقق‌شده و وضعیت قابل مشاهده آغاز کنید."],
      ["Prefer established solutions when Evidence supports them.", "هرجا شواهد پشتیبانی می‌کنند، راهکار تثبیت‌شده را ترجیح دهید."],
      ["Name Accountability and the Affordances needed to act.", "پاسخ‌گویی و امکانات لازم برای اقدام را نام‌گذاری کنید."],
      ["Describe the Gap as Risk to the required result.", "شکاف را به‌صورت ریسک نسبت به نتیجهٔ لازم توصیف کنید."],
      ["Treat the ecosystem as dependencies and incentives.", "اکوسیستم را سامانه‌ای از وابستگی‌ها و انگیزه‌ها ببینید."],
      ["Refresh the Evidence ledger continuously.", "دفتر شواهد را پیوسته تازه کنید."],
      ["Read signals early, before loss becomes unavoidable.", "سیگنال‌ها را پیش از اجتناب‌ناپذیرشدن زیان بخوانید."],
      ["Respect the Domain map and its boundaries.", "به نقشهٔ حوزه و مرزهای آن احترام بگذارید."],
      ["Measure the method and execution, not only final outcomes.", "خود روش و اجرا را نیز بسنجید، نه فقط نتیجهٔ نهایی را."],
      ["Do not substitute one thinking discipline for another.", "یک انضباط فکری را جای دیگری ننشانید."]
    ];

    var leaderQuestions = [
      ["What must be true for this option to work?", "برای موفقیت این گزینه چه چیزی باید درست باشد؟"],
      ["Which Evidence is weakest?", "ضعیف‌ترین شاهد کدام است؟"],
      ["What non-technology option was considered?", "چه گزینهٔ غیرفناورانه‌ای بررسی شد؟"],
      ["Which dependency can the owner not control?", "صاحب مسئول بر کدام وابستگی کنترل ندارد؟"],
      ["What result will be visible after go-live?", "پس از راه‌اندازی چه نتیجه‌ای دیده می‌شود؟"],
      ["What would make us stop?", "چه چیزی ما را وادار به توقف می‌کند؟"]
    ];

    var faqs = [
      ["What is Technocratic Thinking?", "تفکر تکنوکراتیک چیست؟", "It is an evidence-led operating philosophy that defines the problem, recognizes Patterns, measures the Gap, selects a fitting intervention, assigns Accountability and Commitment, and monitors the result.", "فلسفه‌ای عملیاتی و مبتنی بر شواهد است که مسئله را تعریف می‌کند، الگو و شکاف را می‌شناسد، مداخلهٔ متناسب را برمی‌گزیند، پاسخ‌گویی و تعهد را تعیین می‌کند و نتیجه را می‌سنجد."],
      ["Is Technocratic Thinking the same as technological thinking?", "آیا تفکر تکنوکراتیک همان تفکر فناورانه است؟", "No. Technological thinking explores what technology can do. Technocratic Thinking tests whether technology, or another intervention, fits a defined problem and produces a governable result.", "خیر. تفکر فناورانه توانایی فناوری را بررسی می‌کند؛ تفکر تکنوکراتیک می‌سنجد آیا فناوری یا مداخله‌ای دیگر با مسئلهٔ تعریف‌شده متناسب است و نتیجه‌ای قابل حکمرانی می‌سازد."],
      ["Does Technocratic Thinking mean rule by technocrats?", "آیا تفکر تکنوکراتیک به معنای حکومت تکنوکرات‌ها است؟", "No. The term names a professional reasoning discipline, not a political regime. Experts inform decisions; legitimate accountable leaders retain authority.", "خیر. این اصطلاح نام یک انضباط حرفه‌ای است، نه رژیم سیاسی. متخصصان به تصمیم اطلاعات می‌دهند و رهبران مشروع و پاسخ‌گو اختیار را حفظ می‌کنند."],
      ["Why must the problem be defined before selecting technology?", "چرا مسئله باید پیش از انتخاب فناوری تعریف شود؟", "Because a capable product can solve the wrong problem. Definition makes the required result, constraints, Gap and success test visible before investment.", "زیرا یک محصول توانمند می‌تواند مسئلهٔ اشتباهی را حل کند. تعریف، نتیجهٔ لازم، محدودیت‌ها، شکاف و آزمون موفقیت را پیش از سرمایه‌گذاری آشکار می‌کند."],
      ["What role does Evidence play?", "شواهد چه نقشی دارند؟", "Evidence supports, challenges, narrows or revises interpretation. Provenance, relevance, timeliness, independence and counter-evidence matter more than volume.", "شواهد تفسیر را پشتیبانی، تحدید، نقد یا اصلاح می‌کنند. منشأ، ارتباط، تازگی، استقلال و شواهد مخالف از حجم مهم‌ترند."],
      ["What is the relationship with Deep Blue Radar?", "رابطه با رادار دیپ‌بلو چیست؟", "Deep Blue Radar supplies organized observation and intelligence. Technocratic Thinking uses those inputs to structure decisions, interventions, Accountability and learning.", "رادار دیپ‌بلو مشاهده و هوشمندی سازمان‌یافته فراهم می‌کند. تفکر تکنوکراتیک از این ورودی‌ها برای ساخت تصمیم، مداخله، پاسخ‌گویی و یادگیری استفاده می‌کند."],
      ["How are Accountability and Commitment different?", "تفاوت پاسخ‌گویی و تعهد چیست؟", "Accountability identifies who answers for the decision and result and whether they can act. Commitment records what will be done, with which resources, timing, measures and review conditions.", "پاسخ‌گویی مشخص می‌کند چه کسی دربارهٔ تصمیم و نتیجه جواب می‌دهد و آیا توان اقدام دارد. تعهد ثبت می‌کند چه کاری، با چه منابع و زمان و معیار و شرایط بازبینی انجام می‌شود."],
      ["How is success monitored?", "موفقیت چگونه پایش می‌شود؟", "By setting a baseline and testing execution, outcome, risk, assumptions, adoption and sustainability. Deployment is an activity; success is a durable change in the target condition.", "با تعیین خط مبنا و سنجش اجرا، نتیجه، ریسک، فرض‌ها، پذیرش و پایداری. استقرار یک فعالیت است؛ موفقیت یعنی تغییر مرتبط و ماندگار در وضعیت هدف."],
      ["How does it apply to Performance, Risk and Change?", "این روش در عملکرد، ریسک و تغییر چگونه به کار می‌رود؟", "The same reasoning chain applies to each. Performance focuses on outcomes, Risk on exposure and treatment, and Change on adoption and operating integration.", "زنجیرهٔ استدلال در هر سه ثابت است. عملکرد بر نتیجه، ریسک بر مواجهه و درمان و تغییر بر پذیرش و یکپارچگی عملیاتی تمرکز دارد."]
    ];

    return [
      '<section class="inner-section thinking-definition-section" id="meaning" data-chamfer="" data-radius="12">',
      '<div class="thinking-definition-grid"><article><p class="dbr-label" data-en="OPERATING PHILOSOPHY" data-fa="فلسفه عملیاتی">OPERATING PHILOSOPHY</p><h2 data-en="Problem before tool. Evidence before preference. Result before delivery theatre." data-fa="مسئله پیش از ابزار. شواهد پیش از ترجیح. نتیجه پیش از نمایش تحویل.">Problem before tool. Evidence before preference. Result before delivery theatre.</h2>' + [
        ["“Technocratic” here describes disciplined problem–technology–result reasoning. It does not mean government by technical elites or the transfer of managerial authority to engineers. Expertise informs the decision; it does not replace its legitimate owner.", "در اینجا «تکنوکراتیک» نام یک انضباط حرفه‌ای برای استدلال مسئله–فناوری–نتیجه است. منظور حکومت متخصصان یا واگذاری اختیار مدیران به مهندسان نیست. تخصص به تصمیم کیفیت می‌دهد، اما جای صاحب مشروع تصمیم را نمی‌گیرد."],
        ["The method separates observation from assumption and looks for recurring Patterns beneath visible symptoms. Gap Analysis establishes what is missing between the current and required conditions, so the organization can compare technology, process, governance and capability interventions.", "روش با تفکیک مشاهده از فرض و یافتن الگوهای تکرارشونده زیر نشانه‌های ظاهری آغاز می‌شود. تحلیل شکاف نشان می‌دهد میان وضع موجود و وضع لازم چه چیزی کم است تا سازمان بتواند فناوری، فرایند، حکمرانی و قابلیت را مقایسه کند."],
        ["A decision becomes a Commitment when its outcome, scope, owner, resources, timing, dependencies, success criteria and Monitoring are explicit. Delivery is not the finish: the observed result returns as new Evidence.", "تصمیم زمانی به تعهد تبدیل می‌شود که نتیجه، دامنه، صاحب پاسخ‌گو، منابع، زمان، وابستگی‌ها، معیار موفقیت و شیوهٔ پایش روشن باشند. تحویل پایان کار نیست؛ نتیجهٔ مشاهده‌شده دوباره به شواهد تبدیل می‌شود."]
      ].map(paragraph).join("") + '</article><aside class="thinking-micro-card"><p class="dbr-label" data-en="NAVIGATION DESCRIPTION" data-fa="توضیح ناوبری">NAVIGATION DESCRIPTION</p><h3 data-en="See how problems become evidence-led decisions, executable Commitments, monitored results and new learning." data-fa="ببینید مسئله‌ها چگونه به تصمیم مبتنی بر شواهد، تعهد اجرایی، نتیجهٔ پایش‌شده و یادگیری تازه تبدیل می‌شوند.">See how problems become evidence-led decisions, executable Commitments, monitored results and new learning.</h3><a class="button button-outline" href="radar.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Explore Deep Blue Radar" data-fa="کاوش رادار دیپ‌بلو">Explore Deep Blue Radar</span>' + icon("arrow") + '</a></aside></div><div class="thinking-definition-cards">' + definitions.map(simpleCard).join("") + '</div>',
      '</section>',

      '<section class="inner-section thinking-need-section" id="method-gap" data-chamfer="" data-radius="12"><div class="thinking-split"><article>' + label("WHY IT IS NECESSARY", "چرا لازم است") + '<h2 data-en="A technology can work as specified while the business result fails to improve." data-fa="ممکن است فناوری دقیقاً مطابق مشخصات کار کند، اما نتیجهٔ کسب‌وکار بهتر نشود.">A technology can work as specified while the business result fails to improve.</h2>' + [
        ["This happens when a proposal begins with a product, trend or vendor claim; the business case lists features before proving the connection between problem and outcome; or the named owner lacks data access, budget, contract rights or authority over a dependency.", "این وضعیت زمانی رخ می‌دهد که پیشنهاد از محصول، مُد بازار یا ادعای فروشنده شروع شده باشد؛ پروندهٔ کسب‌وکار ویژگی‌ها را پیش از اثبات ارتباط مسئله و نتیجه فهرست کند؛ یا صاحب مسئول به داده، بودجه، حقوق قراردادی یا اختیار اثرگذاری بر وابستگی دسترسی نداشته باشد."],
        ["Technocratic Thinking exposes those assumptions and makes non-technology options legitimate: authority, contracts, fallback, capability, process or reduced complexity may close the Gap better than another platform.", "تفکر تکنوکراتیک این فرض‌های پنهان را آشکار می‌کند و گزینه‌های غیرفناورانه را نیز مشروع می‌داند: اختیار، قرارداد، راهکار جایگزین، قابلیت، فرایند یا کاهش پیچیدگی شاید بهتر از یک سامانهٔ تازه شکاف را ببندد."]
      ].map(paragraph).join("") + '</article><aside class="thinking-quote-panel"><p data-en="A technically successful implementation can still be a failed management intervention." data-fa="یک اجرای فنی موفق همچنان می‌تواند یک مداخلهٔ مدیریتی ناموفق باشد.">A technically successful implementation can still be a failed management intervention.</p></aside></div></section>',

      '<section class="inner-section thinking-boundary-section" id="boundaries" data-chamfer="" data-radius="12">' + label("BOUNDARIES", "مرزبندی") + '<h2 data-en="What Technocratic Thinking is not" data-fa="تفکر تکنوکراتیک چه چیزی نیست">What Technocratic Thinking is not</h2><div class="thinking-boundary-chips">' + boundaries.map(boundaryChip).join("") + '</div></section>',

      '<section class="inner-section thinking-logic-section" id="core-logic" data-chamfer="" data-radius="12">' + label("CORE LOGIC", "منطق اصلی") + '<h2 data-en="How does Technocratic Thinking work?" data-fa="تفکر تکنوکراتیک چگونه کار می‌کند؟">How does Technocratic Thinking work?</h2><div class="thinking-logic-grid">' + logicGroups.map(logicCard).join("") + '</div><div class="thinking-loop-panel"><p class="dbr-label" data-en="PROCESS" data-fa="فرایند">PROCESS</p><ol class="thinking-loop">' + loop.map(loopItem).join("") + '</ol></div></section>',

      '<section class="inner-section thinking-decision-section" id="evidence" data-chamfer="" data-radius="12">' + label("METHOD COMPONENTS", "اجزای روش") + '<h2 data-en="From Evidence to monitored result" data-fa="از شواهد تا نتیجهٔ پایش‌شده">From Evidence to monitored result</h2><div class="thinking-decision-grid">' + decisionCards.map(simpleCard).join("") + '</div></section>',

      '<section class="inner-section thinking-accountability-section" id="accountability" data-chamfer="" data-radius="12"><div class="thinking-split"><article>' + label("ACCOUNTABILITY & COMMITMENT", "پاسخ‌گویی و تعهد") + '<h2 data-en="An owner without affordances is blame, not governance." data-fa="صاحب مسئول بدون امکانات اقدام، حکمرانی نیست؛ فقط محل سرزنش است.">An owner without affordances is blame, not governance.</h2>' + [
        ["Accountability is meaningful only when a named role has decision authority, relevant information, resources, organizational permission, influence over dependencies, an escalation path and answerability for the result.", "پاسخ‌گویی زمانی واقعی است که یک نقش مشخص اختیار تصمیم، اطلاعات مرتبط، منابع، مجوز سازمانی، توان اثرگذاری بر وابستگی‌ها، مسیر تشدید و الزام پاسخ دربارهٔ نتیجه را داشته باشد."],
        ["Commitment makes a decision executable by recording outcome, owner, scope, resources, dependencies, timing, decision rights, success criteria, review points and escalation conditions. It should also state what would cause the intervention to pause, change or stop.", "تعهد با ثبت نتیجه، صاحب مسئول، دامنه، منابع، وابستگی‌ها، زمان، حقوق تصمیم، معیار موفقیت، نقاط بازبینی و شرایط تشدید، تصمیم را اجرایی می‌کند. همچنین باید روشن باشد چه چیزی باعث توقف، تغییر یا کنارگذاشتن مداخله می‌شود."]
      ].map(paragraph).join("") + '</article><aside class="thinking-affordance-list"><h3 data-en="Affordances needed to act" data-fa="امکانات لازم برای اقدام">Affordances needed to act</h3><div>' + [["Budget", "بودجه"], ["Access", "دسترسی"], ["Contract rights", "حقوق قراردادی"], ["Tools", "ابزار"], ["Information", "اطلاعات"], ["Permission", "مجوز"], ["Test rights", "حق آزمون"]].map(boundaryChip).join("") + '</div></aside></div></section>',

      '<section class="inner-section thinking-monitoring-section" id="monitoring" data-chamfer="" data-radius="12"><div class="thinking-split"><article>' + label("MONITORING", "پایش") + '<h2 data-en="Monitoring begins before delivery." data-fa="پایش پیش از تحویل آغاز می‌شود.">Monitoring begins before delivery.</h2>' + [
        ["Monitoring begins with a baseline and an expected result. It asks whether the Commitment was executed, whether the target condition changed, whether any new risk or dependency appeared, and whether assumptions still hold.", "پایش با خط مبنا و نتیجهٔ مورد انتظار آغاز می‌شود. می‌پرسد آیا تعهد اجرا شد، آیا وضعیت هدف تغییر کرد، آیا ریسک یا وابستگی تازه‌ای پدید آمد و آیا فرض‌ها هنوز معتبرند."],
        ["When results differ from expectation, the method asks whether execution failed, the intervention was weak, the Gap was misidentified, or the original Pattern interpretation was wrong. Learning then returns to Deep Blue Radar and the decision cycle.", "اگر نتیجه با انتظار متفاوت باشد، روش می‌پرسد اجرا شکست خورده، مداخله ضعیف بوده، شکاف اشتباه تشخیص داده شده یا تفسیر اولیهٔ الگو نادرست بوده است. این یادگیری به رادار دیپ‌بلو و چرخهٔ تصمیم بازمی‌گردد."]
      ].map(paragraph).join("") + '</article><aside class="thinking-monitor-card"><span data-en="BASELINE" data-fa="خط مبنا">BASELINE</span><span data-en="COMMITMENT" data-fa="تعهد">COMMITMENT</span><span data-en="OUTCOME" data-fa="نتیجه">OUTCOME</span><span data-en="ASSUMPTIONS" data-fa="فرض‌ها">ASSUMPTIONS</span><span data-en="LEARNING" data-fa="یادگیری">LEARNING</span></aside></div></section>',

      '<section class="inner-section thinking-fields-section" id="management-fields" data-chamfer="" data-radius="12">' + label("APPLICATION FIELDS", "زمینه‌های کاربرد") + '<h2 data-en="Performance, Risk and Change use the same reasoning chain." data-fa="عملکرد، ریسک و تغییر از یک زنجیرهٔ استدلال استفاده می‌کنند.">Performance, Risk and Change use the same reasoning chain.</h2><div class="thinking-fields-grid">' + fields.map(simpleCard).join("") + '</div></section>',

      '<section class="inner-section thinking-relationship-section" id="relationship" data-chamfer="" data-radius="12">' + label("RELATIONSHIP", "رابطه") + '<h2 data-en="DBR helps the organization see. Technocratic Thinking helps it decide." data-fa="رادار دیپ‌بلو کمک می‌کند سازمان ببیند. تفکر تکنوکراتیک کمک می‌کند تصمیم بگیرد.">DBR helps the organization see. Technocratic Thinking helps it decide.</h2><div class="thinking-relationship-flow"><span data-en="House of Technocrats" data-fa="خانه تکنوکرات‌ها">House of Technocrats</span><i></i><span data-en="Continuity" data-fa="تداوم">Continuity</span><i></i><span data-en="Deep Blue Radar" data-fa="رادار دیپ‌بلو">Deep Blue Radar</span><i></i><span data-en="Evidence and Patterns" data-fa="شواهد و الگوها">Evidence and Patterns</span><i></i><span data-en="Gap" data-fa="شکاف">Gap</span><i></i><span data-en="Technocratic Thinking" data-fa="تفکر تکنوکراتیک">Technocratic Thinking</span><i></i><span data-en="Accountability and Commitment" data-fa="پاسخ‌گویی و تعهد">Accountability and Commitment</span><i></i><span data-en="Monitoring and Learning" data-fa="پایش و یادگیری">Monitoring and Learning</span></div><p data-en="The Service Store is reserved for approved products or packaged interventions. A product may support an intervention, but it is not the philosophy or the proof of the method." data-fa="فروشگاه خدمات فقط محل محصولات یا مداخلات بسته‌بندی‌شدهٔ تأییدشده است. محصول می‌تواند از یک مداخله پشتیبانی کند، اما خود فلسفه یا اثبات روش نیست.">The Service Store is reserved for approved products or packaged interventions. A product may support an intervention, but it is not the philosophy or the proof of the method.</p></section>',

      '<section class="inner-section thinking-case-section" id="application-case" data-chamfer="" data-radius="12">' + label("ILLUSTRATIVE COMPOSITE", "نمونهٔ ترکیبی") + '<h2 data-en="What does it look like in practice?" data-fa="در عمل چه شکلی دارد؟">What does it look like in practice?</h2><p class="thinking-section-intro" data-en="A service experiences repeated interruptions. The first proposal is a new monitoring platform. The method tests whether the real weakness is tooling, authority, supplier affordance, fallback, or the interpretation itself." data-fa="یک سرویس بارها مختل می‌شود. نخستین پیشنهاد، خرید یک سکوی پایش تازه است. روش می‌سنجد ضعف واقعی ابزار است، اختیار است، امکانات تأمین‌کننده است، راهکار جایگزین است یا خود تفسیر مسئله.">A service experiences repeated interruptions. The first proposal is a new monitoring platform. The method tests whether the real weakness is tooling, authority, supplier affordance, fallback, or the interpretation itself.</p><div class="thinking-case-grid">' + caseSteps.map(simpleCard).join("") + '</div></section>',

      '<section class="inner-section thinking-principles-section" id="principles" data-chamfer="" data-radius="12">' + label("CORE PRINCIPLES", "اصول بنیادین") + '<h2 data-en="Rules of reasoning, not a rigid checklist" data-fa="قاعده‌های استدلال، نه چک‌لیست خشک">Rules of reasoning, not a rigid checklist</h2><div class="thinking-principles-grid">' + principles.map(principleItem).join("") + '</div></section>',

      '<section class="inner-section thinking-leader-section" id="leader-use" data-chamfer="" data-radius="12"><div class="thinking-split"><article>' + label("LEADER USE", "کاربرد برای رهبران") + '<h2 data-en="Ask for a short decision record before investment." data-fa="پیش از سرمایه‌گذاری، یک سابقهٔ کوتاه تصمیم بخواهید.">Ask for a short decision record before investment.</h2><p data-en="The record should name the required result, problem and Evidence, Pattern and Gap, alternatives considered, reason for selecting or rejecting technology, accountable role and affordances, Commitment, Monitoring and conditions for revision." data-fa="این سابقه باید نتیجهٔ لازم، مسئله و شواهد، الگو و شکاف، گزینه‌های بررسی‌شده، دلیل انتخاب یا رد فناوری، نقش پاسخ‌گو و امکانات اقدام، تعهد، روش پایش و شرایط بازنگری را روشن کند.">The record should name the required result, problem and Evidence, Pattern and Gap, alternatives considered, reason for selecting or rejecting technology, accountable role and affordances, Commitment, Monitoring and conditions for revision.</p></article><aside class="thinking-question-list">' + leaderQuestions.map(function (question) { return '<p' + localizedAttrs(question[0], question[1]) + '>' + escapeHtml(question[0]) + '</p>'; }).join("") + '</aside></div></section>',

      '<section class="inner-section thinking-related-section" id="related-domains" data-chamfer="" data-radius="12">' + label("RELATED DEEP BLUE RADAR DOMAINS", "حوزه‌های مرتبط رادار دیپ‌بلو") + '<h2 data-en="Connections stay contextual until destinations are verified." data-fa="پیوندها تا زمان تأیید مقصد، زمینه‌ای باقی می‌مانند.">Connections stay contextual until destinations are verified.</h2><p data-en="Likely connections include Continuity Governance, Proactive Continuity Evaluation, Continuity Smart Management, Continuity Maintenance and Risk Sensing. Threat intelligence and early warning can also supply relevant signals." data-fa="پیوندهای محتمل شامل حکمرانی تداوم، ارزیابی پیش‌نگر تداوم، مدیریت هوشمند تداوم، نگهداشت تداوم و حسگری ریسک هستند. هوشمندی تهدید و هشدار زودهنگام نیز می‌تواند سیگنال مرتبط فراهم کند.">Likely connections include Continuity Governance, Proactive Continuity Evaluation, Continuity Smart Management, Continuity Maintenance and Risk Sensing. Threat intelligence and early warning can also supply relevant signals.</p><p data-en="These relationships are contextual, not claims that every intervention belongs to every Domain. Public links can wait until destinations and Domain status are verified." data-fa="این پیوندها زمینه‌ای‌اند و به این معنا نیستند که هر مداخله به همهٔ حوزه‌ها تعلق دارد. لینک عمومی می‌تواند تا زمان تأیید مقصد و وضعیت حوزه‌ها صبر کند.">These relationships are contextual, not claims that every intervention belongs to every Domain. Public links can wait until destinations and Domain status are verified.</p></section>',

      '<section class="inner-section thinking-faq-section" id="faq" data-chamfer="" data-radius="12"><h2 data-en="Frequently asked questions" data-fa="پرسش‌های متداول">Frequently asked questions</h2><div class="accordion">' + faqs.map(faqItem).join("") + '</div></section>',

      '<section class="inner-section thinking-book-section" id="technocratic-book" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10"><div class="thinking-book-layout"><figure class="thinking-book-cover"><img src="Assets/technocratic-thinking-book-cover.png" alt="Technocratic Thinking for BCM book cover" data-fa-alt="جلد کتاب تفکر تکنوکراتیک برای مدیریت تداوم کسب‌وکار"></figure><article><p class="dbr-label" data-en="TECHNOCRATIC BOOK" data-fa="کتاب تفکر تکنوکراتیک">TECHNOCRATIC BOOK</p><h2 data-en="Technocratic Thinking for BCM" data-fa="تفکر تکنوکراتیک برای مدیریت تداوم کسب‌وکار">Technocratic Thinking for BCM</h2><p data-en="The book introduces the shared language behind technocratic work: how risk, change and performance management can move from evidence to accountable action in ICT-reliant industries." data-fa="این کتاب زبان مشترک کار تکنوکراتیک را معرفی می‌کند: اینکه مدیریت ریسک، تغییر و عملکرد در صنایع متکی بر فناوری اطلاعات چگونه می‌توانند از شواهد به اقدام پاسخ‌گو برسند.">The book introduces the shared language behind technocratic work: how risk, change and performance management can move from evidence to accountable action in ICT-reliant industries.</p><p data-en="For now, this section introduces the book and its role in the House. The detailed book page can later carry chapters, cases, author notes and publication information." data-fa="فعلاً این بخش فقط کتاب و نقش آن در خانه را معرفی می‌کند. صفحهٔ جزئیات کتاب بعداً می‌تواند فصل‌ها، نمونه‌ها، یادداشت نویسنده و اطلاعات انتشار را در خود داشته باشد.">For now, this section introduces the book and its role in the House. The detailed book page can later carry chapters, cases, author notes and publication information.</p><div class="thinking-book-stats"><span><b data-en="16" data-fa="۱۶">16</b><small data-en="Continuity domains" data-fa="حوزهٔ تداوم">Continuity domains</small></span><span><b data-en="4" data-fa="۴">4</b><small data-en="Phases" data-fa="فاز">Phases</small></span><span><b data-en="4" data-fa="۴">4</b><small data-en="Loop steps" data-fa="گام حلقه">Loop steps</small></span><span><b data-en="30+" data-fa="+۳۰">30+</b><small data-en="Real incidents" data-fa="رخداد واقعی">Real incidents</small></span></div><a class="button button-primary" href="technocratic-book.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Open book introduction" data-fa="دیدن معرفی کتاب">Open book introduction</span>' + icon("arrow") + '</a></article></div></section>'
    ].join("");
  }

  function technocraticThinkingSourceMarkup() {
    function localizedAttrs(en, fa) {
      return ' data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '"';
    }

    function localizedText(tag, en, fa, className) {
      return '<' + tag + (className ? ' class="' + className + '"' : '') + localizedAttrs(en, fa) + '>' + escapeHtml(en) + '</' + tag + '>';
    }

    function eyebrow(en, fa) {
      return localizedText("p", en, fa, "dbr-label");
    }

    function paragraph(en, fa, className) {
      return localizedText("p", en, fa, className || "thinking-source-copy");
    }

    var operatingFields = [
      {
        en: "Risk Management",
        fa: "مدیریت ریسک",
        enText: "The incident-driven risks behind each Pattern are traced, and the organization’s vulnerability to them is tested.",
        faText: "ریسک‌های وقوع‌یافتهٔ محرک الگوها ردیابی و آسیب‌پذیری سازمان در برابر آن‌ها آزموده می‌شود."
      },
      {
        en: "Change Management",
        fa: "مدیریت تغییر",
        enText: "The Pattern is implemented as a controlled change, with responsibilities and execution affordances prepared in advance.",
        faText: "الگو به‌صورت تغییری کنترل‌شده اجرا می‌شود و مسئولیت‌ها و امکانات اجرایی آن از قبل فراهم می‌شوند."
      },
      {
        en: "Performance Management",
        fa: "مدیریت عملکرد",
        enText: "The implemented change is monitored, and the support services needed to preserve its effectiveness continue over time.",
        faText: "تغییر اجراشده پایش می‌شود و خدمات پشتیبانی لازم برای حفظ کارایی آن ادامه پیدا می‌کنند."
      }
    ];

    var phases = [
      {
        no: "01",
        faNo: "۰۱",
        enLabel: "Independent Radar Layer",
        faLabel: "لایهٔ مستقل رادار",
        enTitle: "Discovery Core",
        faTitle: "هستۀ کشف",
        steps: [
          ["Read signals and emerging changes", "خواندن سیگنال‌ها و تغییرات نوظهور"],
          ["Identify continuity solutions", "شناسایی راهکارهای تداوم"]
        ]
      },
      {
        no: "02",
        faNo: "۰۲",
        enLabel: "Risk Management",
        faLabel: "مدیریت ریسک",
        enTitle: "Risk Management",
        faTitle: "مدیریت ریسک",
        steps: [
          ["Trace the incident-driven risks", "ردیابی ریسک‌های وقوع‌یافتهٔ محرک"],
          ["Test the organization’s vulnerability", "آزمون آسیب‌پذیری سازمان"]
        ]
      },
      {
        no: "03",
        faNo: "۰۳",
        enLabel: "Change Management",
        faLabel: "مدیریت تغییر",
        enTitle: "Change Management",
        faTitle: "مدیریت تغییر",
        steps: [
          ["Implement the Pattern", "اجرای الگو"],
          ["Prepare responsibilities and execution affordances", "فراهم‌سازی مسئولیت‌ها و امکانات اجرایی"]
        ]
      },
      {
        no: "04",
        faNo: "۰۴",
        enLabel: "Performance Management",
        faLabel: "مدیریت عملکرد",
        enTitle: "Performance Management",
        faTitle: "مدیریت عملکرد",
        steps: [
          ["Monitor the implemented change", "پایش تغییر اجراشده"],
          ["Use support services", "به‌کارگیری خدمات پشتیبانی"]
        ]
      }
    ];

    var radarCards = [
      ["01 — CONTINUITY DOMAINS", "۰۱ — قلمروهای تداوم", "Continuity Domains", "قلمروهای تداوم", "Areas that define where each industry’s changes and risks should be followed.", "محدوده‌هایی که مشخص می‌کنند تغییرات و ریسک‌های هر صنعت را کجا باید دنبال کرد."],
      ["02 — SIGNALS", "۰۲ — سیگنال‌ها", "Signals", "سیگنال‌ها", "Signs that something in the industry is changing before its full impact becomes visible.", "نشانه‌هایی که می‌گویند چیزی در صنعت در حال تغییر است؛ پیش از آن‌که اثرش کاملاً آشکار شود."],
      ["03 — CONTINUITY PATTERNS", "۰۳ — الگوهای تداوم", "Continuity Patterns", "الگوهای تداوم", "Solutions repeated across organizations that gradually become reliable continuity patterns.", "راهکارهایی که در سازمان‌های مختلف تکرار شده‌اند و کم‌کم به الگویی قابل‌اتکا تبدیل شده‌اند."]
    ];

    var toolkitItems = [
      ["Risk and Gap Sheet", "برگهٔ ریسک و شکاف"],
      ["Responsibility and Execution Affordance Matrix", "ماتریس مسئولیت و امکانات اجرایی"],
      ["Monitoring and Support Sheet", "برگهٔ پایش و پشتیبانی"]
    ];

    var faqs = [
      {
        q: ["What exactly is Technocratic Thinking?", "تفکر تکنوکراتیک دقیقاً چیست؟"],
        a: ["Technocratic Thinking is a method for turning continuity patterns into decisions and practical commitments. Across risk management, change management, and performance management, it helps the organization understand vulnerabilities, implement the necessary change, and preserve the result over time.", "تفکر تکنوکراتیک روشی برای تبدیل الگوهای تداوم به تصمیم و تعهد عملی است. این روش در سه حوزهٔ مدیریت ریسک، مدیریت تغییر و مدیریت عملکرد کمک می‌کند سازمان آسیب‌پذیری‌های خود را بشناسد، تغییر لازم را اجرا کند و نتیجه را در طول زمان حفظ کند."]
      },
      {
        q: ["Does “technocratic” mean handing decisions to specialists?", "«تکنوکراتیک» یعنی تصمیم‌گیری را به متخصصان بسپاریم؟"],
        a: ["No. It does not mean a political model or the removal of human judgment. In the book, the word refers to reasoning from real evidence, focusing on organizational goals, and connecting decisions to clear, accountable commitments: the opposite of speculation.", "نه. منظور، یک الگوی سیاسی یا حذف قضاوت انسانی نیست. این واژه در کتاب به استدلال بر پایهٔ شواهد واقعی، تمرکز بر اهداف سازمان و پیوند دادن تصمیم‌ها به تعهدهای روشن و پاسخ‌پذیر اشاره دارد؛ نقطهٔ مقابل گمانه‌زنی."]
      },
      {
        q: ["Is this the same as technological thinking?", "آیا این همان تفکر فناورانه است؟"],
        a: ["No. Technocratic Thinking does not begin with technology or standards. It begins with learning from incidents that actually happened. Technology enters the response only when it is part of the right continuity pattern.", "نه. تفکر تکنوکراتیک از فناوری یا استاندارد شروع نمی‌کند؛ نقطهٔ آغاز آن یادگیری از رخدادهایی است که واقعاً اتفاق افتاده‌اند. فناوری فقط وقتی وارد پاسخ می‌شود که بخشی از الگوی مناسب تداوم باشد."]
      },
      {
        q: ["Why does the Radar begin with past incidents?", "چرا رادار از رخدادهای گذشته شروع می‌کند؟"],
        a: ["Because real incidents show how a change became a risk and what organizations did to preserve continuity. The Radar brings this evidence together so repeated solutions can be discovered as continuity patterns.", "چون رخدادهای واقعی نشان می‌دهند یک تغییر چگونه به ریسک تبدیل شده و سازمان‌ها برای حفظ تداوم چه راهکارهایی به کار گرفته‌اند. رادار این شواهد را کنار هم می‌گذارد تا راهکارهای تکرارشونده را به‌عنوان الگوهای تداوم کشف کند."]
      },
      {
        q: ["Is this method only for banks?", "آیا این روش فقط برای بانک‌هاست؟"],
        a: ["No. The method can be used by any organization that takes continuity seriously. The book studies its application specifically in banking and financial services across sixteen continuity domains.", "نه. روش در هر سازمانی که تداوم فعالیت‌هایش را جدی می‌گیرد قابل‌استفاده است. این کتاب کاربرد آن را به‌طور مشخص در بانکداری و خدمات مالی و در شانزده قلمرو تداوم بررسی می‌کند."]
      },
      {
        q: ["How does Deep Blue Radar connect to Technocratic Thinking?", "رادار آبی چگونه به تفکر تکنوکراتیک متصل می‌شود؟"],
        a: ["Deep Blue Radar discovers continuity patterns from changes, signals, and industry responses. Those patterns become the input to Technocratic Thinking, where they are turned into decisions and organizational action across risk, change, and performance management.", "رادار آبی الگوهای تداوم را از میان تغییرات، سیگنال‌ها و راهکارهای شکل‌گرفته در صنعت کشف می‌کند. این الگوها ورودی تفکر تکنوکراتیک می‌شوند تا در سه حوزهٔ مدیریت ریسک، مدیریت تغییر و مدیریت عملکرد به تصمیم و اقدام سازمانی برسند."]
      }
    ];

    return [
      '<section class="inner-section thinking-source-hero" id="meaning" data-chamfer="br" data-cut="44" data-radius="12" data-fillet="10">',
      '<div class="thinking-source-hero-grid thinking-source-hero-single">',
      '<article>',
      eyebrow("DECISION METHOD FOR BUSINESS CONTINUITY", "روش تصمیم‌گیری برای تداوم کسب‌وکار"),
      '<div class="thinking-editorial-lead"><strong data-en="Technocratic Thinking" data-fa="تفکر تکنوکراتیک">Technocratic Thinking</strong><p data-en="is a method for making continuity decisions in systems that can no longer be managed by experience and intuition alone." data-fa="روشی برای تصمیم‌گیری دربارهٔ تداوم در سیستم‌هایی است که دیگر نمی‌توان آن‌ها را فقط با تجربه و شهود اداره کرد.">is a method for making continuity decisions in systems that can no longer be managed by experience and intuition alone.</p></div>',
      paragraph("The discovery core monitors change and discovers continuity patterns from it. These patterns become the input to Technocratic Thinking: a method that turns them into organizational decisions and actions across three operating fields: risk management, change management, and performance management.", "هستهٔ کشف، تغییرات را رصد می‌کند و الگوهای تداوم را از میان آن‌ها کشف می‌کند. این الگوها ورودی تفکر تکنوکراتیک‌اند؛ روشی که آن‌ها را در سه حوزهٔ عملیاتیِ مدیریت ریسک، مدیریت تغییر و مدیریت عملکرد به تصمیم و اقدام سازمانی تبدیل می‌کند."),
      '</article>',
      '</div>',
      '</section>',
      '<section class="inner-section thinking-source-method" id="method" data-chamfer="" data-radius="12">',
      eyebrow("01 — METHOD MECHANISM", "سازوکار روش / ۰۱"),
      localizedText("h2", "Three Operating Fields, One Shared Logic", "سه حوزهٔ عملیاتی، یک منطق مشترک", "thinking-source-title"),
      paragraph("Technocratic Thinking is not a linear checklist. It takes continuity patterns as input, evaluates them through risk, change, and performance, and turns them into commitments that can be owned, executed, and monitored.", "تفکر تکنوکراتیک یک فهرست خطی نیست. این روش الگوهای تداوم را به‌عنوان ورودی می‌گیرد، آن‌ها را از مسیر ریسک، تغییر و عملکرد می‌سنجد و به تعهدهایی تبدیل می‌کند که قابل مالکیت، اجرا و پایش باشند.", "thinking-source-lead thinking-source-lead-small"),
      '<aside class="thinking-instrument thinking-instrument-wide">',
      '<span class="thinking-instrument-core" data-en="Continuity Pattern Discovery" data-fa="کشف الگوهای تداوم">Continuity Pattern Discovery</span>',
      operatingFields.map(function(item, index) {
        var number = String(index + 1).padStart(2, "0");
        var faNumber = persianDigits(index + 1).padStart(2, "۰");
        return '<div class="thinking-instrument-node thinking-instrument-node-' + (index + 1) + '"><em' + localizedAttrs(number, faNumber) + '>' + escapeHtml(number) + '</em><strong' + localizedAttrs(item.en, item.fa) + '>' + escapeHtml(item.en) + '</strong><p' + localizedAttrs(item.enText, item.faText) + '>' + escapeHtml(item.enText) + '</p></div>';
      }).join(""),
      '</aside>',
      '<div class="thinking-method-map">',
      '<div class="thinking-method-core" data-chamfer="br" data-cut="18" data-radius="8" data-fillet="5"><span data-en="Operational continuity decision" data-fa="تصمیم تداوم عملیاتی">Operational continuity decision</span></div>',
      '</div>',
      paragraph("The operational reality of each cycle becomes a fresh signal for the next cycle.", "واقعیت اجرایی هر دور، در چرخهٔ بعد به سیگنالی تازه تبدیل می‌شود.", "thinking-source-note"),
      '</section>',
      '<section class="inner-section thinking-source-phases" id="phases" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10">',
      eyebrow("02 — FROM OBSERVATION TO ACTION", "از مشاهده تا اقدام / ۰۲"),
      localizedText("h2", "Four Phases and Eight Steps", "چهار فاز و هشت گام", "thinking-source-title"),
      paragraph("Each phase has two complementary steps. A phase is complete only when both steps have been carried out.", "هر فاز دو گام مکمل دارد. هر فاز زمانی کامل است که هر دو گام آن انجام شده باشند.", "thinking-source-lead thinking-source-lead-small"),
      '<div class="thinking-phase-grid">',
      phases.map(function(phase) {
        return '<article class="thinking-phase-card glass-card" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="6"><div class="thinking-phase-number"><span' + localizedAttrs(phase.no, phase.faNo) + '>' + escapeHtml(phase.no) + '</span></div><p class="dbr-label"' + localizedAttrs(phase.enLabel, phase.faLabel) + '>' + escapeHtml(phase.enLabel) + '</p><h3' + localizedAttrs(phase.enTitle, phase.faTitle) + '>' + escapeHtml(phase.enTitle) + '</h3><ol>' + phase.steps.map(function(step) { return '<li><span' + localizedAttrs(step[0], step[1]) + '>' + escapeHtml(step[0]) + '</span></li>'; }).join("") + '</ol></article>';
      }).join(""),
      '</div>',
      '</section>',
      '<section class="inner-section thinking-source-radar" id="radar-relation" data-chamfer="" data-radius="12">',
      eyebrow("03 — DISCOVERY LAYER", "لایۀ کشف / ۰۳"),
      '<div class="thinking-radar-corner" aria-hidden="true"><span></span><i></i><b></b></div>',
      localizedText("h2", "The Radar sees change while it is still only a signal", "رادار، تغییر را وقتی هنوز فقط یک نشانه است می‌بیند", "thinking-source-title"),
      paragraph("Deep Blue Radar is the independent discovery layer of this method. It follows industry changes across continuity domains, detects early signals, and identifies recurring continuity patterns.", "رادار آبی لایهٔ مستقل کشف در این روش است. رادار تغییرات صنعت را در قلمروهای تداوم دنبال می‌کند، سیگنال‌های اولیه را می‌بیند و الگوهای تکرارشوندهٔ تداوم را شناسایی می‌کند.", "thinking-source-lead thinking-source-lead-small"),
      '<div class="thinking-relation-flow">',
      radarCards.map(function(card) {
        return '<article class="thinking-relation-card glass-card"><p class="dbr-label"' + localizedAttrs(card[0], card[1]) + '>' + escapeHtml(card[0]) + '</p><h3' + localizedAttrs(card[2], card[3]) + '>' + escapeHtml(card[2]) + '</h3><p' + localizedAttrs(card[4], card[5]) + '>' + escapeHtml(card[4]) + '</p></article>';
      }).join(""),
      '</div>',
      paragraph("The Radar brings scattered signs of change together so recurring industry responses can be identified as continuity patterns.", "رادار نشانه‌های پراکندهٔ تغییر را کنار هم می‌گذارد تا راهکارهای تکرارشوندهٔ صنعت را به‌عنوان الگوهای تداوم شناسایی کند.", "thinking-source-note"),
      '<a class="button button-primary" href="radar.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="See the Radar" data-fa="دیدن رادار">See the Radar</span>' + icon("arrow") + '</a>',
      '</section>',
      '<section class="inner-section thinking-source-quote" data-chamfer="br" data-cut="36" data-radius="12" data-fillet="8">',
      '<blockquote data-en="A fast organization, without the ability to continue, only reaches the point of failure faster." data-fa="سازمان سریع، بدون امکان تداوم، فقط سریع‌تر به نقطهٔ شکست می‌رسد.">A fast organization, without the ability to continue, only reaches the point of failure faster.</blockquote>',
      '</section>',
      '<section class="inner-section thinking-source-book" id="technocratic-book" data-chamfer="" data-radius="12">',
      '<div class="thinking-source-book-grid">',
      '<figure class="thinking-source-book-cover"><img src="Assets/technocratic-thinking-book-cover.png" alt="Technocratic Thinking for Business Continuity Management book cover" data-fa-alt="جلد کتاب تفکر تکنوکراتیک برای مدیریت تداوم کسب‌وکار"></figure>',
      '<article>',
      eyebrow("04 — TECHNOCRATIC THINKING BOOK", "کتاب تفکر تکنوکراتیک / ۰۴"),
      localizedText("h2", "Technocratic Thinking for Business Continuity Management", "تفکر تکنوکراتیک برای مدیریت تداوم کسب‌وکار", "thinking-source-title"),
      paragraph("The book introduces Technocratic Thinking as an evidence-based way to learn from real incidents and use that learning in banking and financial services. Deep Blue Radar is the discovery layer of this method.", "کتاب تفکر تکنوکراتیک این روش را به‌عنوان راهی مبتنی بر شواهد برای یادگیری از رخدادهای واقعی و استفاده از آن در بانکداری و خدمات مالی معرفی می‌کند. رادار آبی لایهٔ کشف این روش است."),
      '<div class="thinking-source-stats"><span><b data-en="16" data-fa="۱۶">16</b><small data-en="Continuity domains" data-fa="قلمرو تداوم">Continuity domains</small></span><span><b data-en="4" data-fa="۴">4</b><small data-en="Phases" data-fa="فاز">Phases</small></span><span><b data-en="8" data-fa="۸">8</b><small data-en="Steps" data-fa="گام">Steps</small></span><span><b data-en="30+" data-fa="+۳۰">30+</b><small data-en="Real incidents" data-fa="رخداد واقعی">Real incidents</small></span></div>',
      '</article>',
      '</div>',
      '</section>',
      '<section class="inner-section thinking-source-toolkit" id="toolkit" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10">',
      eyebrow("05 — EXECUTION TOOL", "ابزار اجرا / ۰۵"),
      localizedText("h2", "Technocratic Thinking Toolkit", "جعبۀ ابزار تفکر تکنوکراتیک", "thinking-source-title"),
      paragraph("The toolkit translates the method into three practical worksheets: risk and gap, responsibility and execution affordances, and monitoring and support.", "جعبه‌ابزار، روش را به سه برگهٔ کاری تبدیل می‌کند: برگهٔ ریسک و شکاف، ماتریس مسئولیت و امکانات اجرایی، و برگهٔ پایش و پشتیبانی.", "thinking-source-lead thinking-source-lead-small"),
      '<div class="thinking-toolkit-grid">',
      toolkitItems.map(function(item, index) {
        return '<article class="thinking-toolkit-item glass-card"><span class="thinking-toolkit-no">' + String(index + 1).padStart(2, "0") + '</span><h3' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</h3></article>';
      }).join(""),
      '</div>',
      '<a class="button button-primary" href="technocratic-thinking-toolkit.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Download the Toolkit" data-fa="دانلود جعبه‌ابزار">Download the Toolkit</span>' + icon("arrow") + '</a>',
      '</section>',
      '<section class="inner-section thinking-source-faq" id="faq" data-chamfer="" data-radius="12">',
      eyebrow("06 — FREQUENTLY ASKED QUESTIONS", "پرسش‌های متداول / ۰۶"),
      localizedText("h2", "What should be clear about the method", "آنچه دربارهٔ روش باید روشن باشد", "thinking-source-title"),
      '<div class="accordion thinking-source-accordion">',
      faqs.map(function(item, index) {
        return '<div class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="thinking-source-faq-' + index + '"><span' + localizedAttrs(item.q[0], item.q[1]) + '>' + escapeHtml(item.q[0]) + '</span>' + icon("plus") + '</button><div class="accordion-panel" id="thinking-source-faq-' + index + '" hidden><p' + localizedAttrs(item.a[0], item.a[1]) + '>' + escapeHtml(item.a[0]) + '</p></div></div>';
      }).join(""),
      '</div>',
      '</section>'
    ].join("");
  }

  function houseRichMarkup() {
    function localizedAttrs(en, fa) {
      return ' data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '"';
    }

    function label(en, fa) {
      return '<p class="dbr-label"' + localizedAttrs(en, fa) + '>' + escapeHtml(en) + '</p>';
    }

    function paragraph(pair) {
      return '<p' + localizedAttrs(pair[0], pair[1]) + '>' + escapeHtml(pair[0]) + '</p>';
    }

    function card(item, index) {
      var number = String(index + 1).padStart(2, "0");
      return '<article><span class="house-card-index" data-en="' + number + '" data-fa="' + persianDigits(number) + '">' + number + '</span><h3' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</h3><p' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</p></article>';
    }

    function faqItem(item, index) {
      return '<div class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="house-faq-' + index + '"><span' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</span>' + icon("plus") + '</button><div class="accordion-panel" id="house-faq-' + index + '" hidden><p' + localizedAttrs(item[2], item[3]) + '>' + escapeHtml(item[2]) + '</p></div></div>';
    }

    function participateCard(route) {
      return '<button class="house-participate-option glass-card" type="button" data-house-participate-trigger="' + escapeHtml(route.type) + '" data-chamfer="tr" data-cut="24" data-radius="12" data-fillet="8"><span><h3' + localizedAttrs(route.title, route.faTitle) + '>' + escapeHtml(route.title) + '</h3><p' + localizedAttrs(route.description, route.faDescription) + '>' + escapeHtml(route.description) + '</p></span></button>';
    }

    function participateModal(route) {
      return '<div class="house-participate-panel" data-house-participate-panel="' + escapeHtml(route.type) + '"' + (route.type === "activation" ? "" : " hidden") + '>' + participationFormContentMarkup(route.type, { modal: true }) + '</div>';
    }

    var conceptFlow = [
      ["Continuity", "تداوم", "The strategic territory: what an organization must preserve, sustain or recover as conditions change.", "قلمرو راهبردی؛ آنچه سازمان باید با تغییر شرایط حفظ کند، تداوم دهد یا بازیابی کند."],
      ["Deep Blue Radar", "رادار دیپ‌بلو", "The House-endorsed methodology for observing signals, evidence, domains and patterns affecting continuity.", "روش مورد تأیید خانه برای مشاهدهٔ نشانه‌ها، شواهد، حوزه‌ها و الگوهای اثرگذار بر تداوم."],
      ["Technocratic Thinking", "تفکر تکنوکراتیک", "The operating philosophy that connects problem, evidence, technology choices, accountability and outcomes.", "فلسفهٔ عملیاتی برای اتصال مسئله، شواهد، انتخاب فناوری، پاسخ‌گویی و نتیجه."],
      ["House of Technocrats", "خانه تکنوکرات‌ها", "The institutional environment where people, knowledge, experience, dialogue and contribution come together.", "محیط نهادی که افراد، دانش، تجربه، گفت‌وگو و مشارکت را کنار هم می‌آورد."],
      ["Technocratic Service Store", "فروشگاه خدمات تکنوکراتیک", "A secondary area for approved products that operationalize selected interventions.", "بخشی فرعی برای محصولات تأییدشده‌ای که برخی مداخلات را عملیاتی می‌کنند."]
    ];

    var roles = [
      ["Technocratic Leaders", "رهبران تکنوکراتیک", "Leaders carry organizational responsibility. They bring decisions and consequences, test ideas against operating reality and may sponsor an approved continuity initiative.", "رهبران مسئولیت سازمانی دارند. آنها تصمیم و پیامد واقعی را می‌آورند، ایده را در برابر عمل می‌آزمایند و در صورت تأیید می‌توانند از یک ابتکار تداوم حمایت کنند."],
      ["Technocratic Thinkers", "متفکران تکنوکراتیک", "Thinkers frame problems, structure knowledge, interpret evidence and challenge assumptions. Their value is making reasoning visible, testable and revisable.", "متفکران مسئله را صورت‌بندی، دانش را ساختاربندی، شواهد را تفسیر و فرض‌ها را نقد می‌کنند. ارزش آنها در مرئی، آزمون‌پذیر و اصلاح‌پذیر کردن استدلال است."],
      ["Technocratic Experts", "خبرگان تکنوکراتیک", "Experts bring depth in a domain, technology, discipline or practice through evidence, specialist review and implementation judgment.", "خبرگان در یک حوزه، فناوری، رشته یا عمل حرفه‌ای با شواهد، بازبینی تخصصی و قضاوت اجرایی عمق ایجاد می‌کنند."]
    ];

    var activities = [
      ["Executive conversations", "گفت‌وگوهای اجرایی", "Examine a bounded question and turn it into a problem statement or decision brief.", "یک پرسش محدود را بررسی می‌کنند و آن را به صورت مسئله یا یادداشت تصمیم تبدیل می‌کنند."],
      ["Evidence and pattern reviews", "مرور شواهد و الگو", "Test claims against sources, counter-evidence and context.", "ادعاها را در برابر منبع، شواهد مخالف و زمینه می‌آزمایند."],
      ["Workshops and scenarios", "کارگاه‌ها و سناریوها", "Explore dependencies and consequences before a decision becomes action.", "وابستگی‌ها و پیامدها را پیش از تبدیل تصمیم به اقدام بررسی می‌کنند."],
      ["Interviews and recordings", "مصاحبه و ضبط", "Capture experience for governed review without automatically creating membership or quotation permission.", "تجربه را برای بررسی کنترل‌شده ثبت می‌کنند، بدون آنکه عضویت یا مجوز نقل‌قول خودکار بسازند."],
      ["Research and solution discussions", "گفت‌وگوی پژوهشی و راه‌حل", "Develop a validated problem toward a framework, pilot or product proposal.", "مسئلهٔ معتبر را به سمت چارچوب، پایلوت یا پیشنهاد محصول پیش می‌برند."]
    ];

    var boundaries = [
      ["Not a networking club", "باشگاه شبکه‌سازی نیست"],
      ["Not a ranking system", "سامانه رتبه‌بندی نیست"],
      ["Not replacement management", "مدیریت جایگزین نیست"],
      ["Not a technology vendor", "فروشنده فناوری نیست"],
      ["Not merely a venue", "صرفاً مکان فیزیکی نیست"],
      ["Not merely a website", "صرفاً وب‌سایت نیست"],
      ["Not merely consulting", "صرفاً مشاوره نیست"],
      ["Not DBR alone", "فقط رادار دیپ‌بلو نیست"],
      ["Not a membership trophy", "عنوان عضویت، ارزش اصلی نیست"]
    ];

    var participateRoutes = [
      { type: "activation", title: "Activate Your Invitation", faTitle: "فعال‌سازی دعوت‌نامه", description: "For people who received a personal card and QR code.", faDescription: "برای افرادی که کارت شخصی و QR code دریافت کرده‌اند." },
      { type: "membership", title: "Submit a Membership Request", faTitle: "ارسال درخواست عضویت", description: "For senior Leaders, Thinkers and Experts working on Continuity.", faDescription: "برای رهبران، اندیشمندان و خبرگان ارشد فعال در تداوم." },
      { type: "referral", title: "Refer a Technocrat", faTitle: "معرفی یک تکنوکرات", description: "For active Leaders and Thinkers with a remaining referral allowance.", faDescription: "برای رهبران و اندیشمندان فعال با ظرفیت معرفی باقی‌مانده." },
      { type: "contribution", title: "Share a Contribution", faTitle: "ثبت مشارکت یا نظر", description: "For a comment, proposal, evidence or contribution the House should review.", faDescription: "برای نظر، پیشنهاد، شاهد یا مشارکتی که خانه باید بررسی کند." }
    ];

    var faq = [
      ["What is House of Technocrats?", "خانه تکنوکرات‌ها چیست؟", "It is the master-brand institution and community platform that connects leaders, thinkers, experts, evidence, experience and structured contribution around continuity. Its purpose is to strengthen accountable leadership and useful action without becoming the decision-maker or management team of another organization.", "برند مادر، نهاد و بستر جامعه‌ای است که رهبران، متفکران، خبرگان، شواهد، تجربه و مشارکت ساختاریافته را پیرامون تداوم به هم متصل می‌کند. هدف آن تقویت رهبری پاسخ‌گو و اقدام مفید است، نه تبدیل‌شدن به تصمیم‌گیر یا تیم مدیریت سازمانی دیگر."],
      ["Is House of Technocrats a consulting company?", "آیا خانه تکنوکرات‌ها شرکت مشاوره است؟", "The House may include advisory or solution-building activity, but consulting alone does not define it. It is a broader institutional environment for knowledge, dialogue, community participation, DBR, Technocratic Thinking and approved outputs.", "خانه می‌تواند فعالیت مشورتی یا راه‌حل‌سازی داشته باشد، اما مشاوره به‌تنهایی آن را تعریف نمی‌کند. خانه محیط نهادی گسترده‌تری برای دانش، گفت‌وگو، مشارکت جامعه، رادار دیپ‌بلو، تفکر تکنوکراتیک و خروجی‌های تأییدشده است."],
      ["Does the House manage its clients' organizations?", "آیا خانه سازمان مشتری را مدیریت می‌کند؟", "No. The House may advise, enable, facilitate and support. It does not bypass the founder, owner, CEO or accountable executive, assume day-to-day management or communicate organizational change in the leader's place.", "خیر. خانه می‌تواند مشورت دهد، توانمند سازد، تسهیل کند و پشتیبانی فراهم کند؛ اما بنیان‌گذار، مالک، مدیرعامل یا مدیر پاسخ‌گو را دور نمی‌زند، مدیریت روزمره را بر عهده نمی‌گیرد و تغییر سازمانی را به‌جای رهبر اعلام نمی‌کند."],
      ["Who can participate in the House?", "چه کسانی می‌توانند در خانه مشارکت کنند؟", "The intended community can include accountable leaders, structured thinkers and experienced experts whose question, evidence, judgment or contribution fits an approved participation route.", "جامعه می‌تواند رهبران پاسخ‌گو، متفکران ساختارمند و خبرگان باتجربه‌ای را دربر گیرد که پرسش، شواهد، قضاوت یا مشارکت آنها با یکی از مسیرهای تأییدشده تناسب دارد."],
      ["What is the difference between Leaders, Thinkers and Experts?", "تفاوت رهبران، متفکران و خبرگان چیست؟", "Leaders bring organizational responsibility, decisions and consequences. Thinkers frame problems, interpret evidence and structure concepts. Experts contribute depth in a domain, technology, discipline or practice.", "رهبران مسئولیت، تصمیم و پیامد سازمانی می‌آورند. متفکران مسئله را صورت‌بندی، شواهد را تفسیر و مفهوم را ساختاربندی می‌کنند. خبرگان در یک حوزه، فناوری، رشته یا عمل حرفه‌ای عمق می‌افزایند."],
      ["Are these roles levels or rankings?", "آیا این نقش‌ها سطح یا رتبه‌اند؟", "No. They are not levels, scores, prestige bands or a gamified membership path. Any public assignment must reflect real contribution and an approved community record.", "خیر. اینها سطح، امتیاز، نشان منزلت یا مسیر بازی‌وار عضویت نیستند. انتساب عمومی باید بر مشارکت واقعی و سابقهٔ تأییدشده جامعه متکی باشد."],
      ["Can someone apply to join?", "آیا می‌توان برای پیوستن درخواست داد؟", "The public starting point is the Participation Hub. A request, referral or invitation is not guaranteed acceptance or membership.", "نقطه شروع عمومی، درگاه مشارکت است. درخواست، معرفی یا دعوت، پذیرش یا عضویت را تضمین نمی‌کند."],
      ["What is expected from a member or contributor?", "از عضو یا مشارکت‌کننده چه انتظاری می‌رود؟", "Public principles emphasize relevant contribution, source discipline, professional judgment, constructive challenge, attribution and respect for confidentiality.", "اصول عمومی بر مشارکت مرتبط، انضباط منبع، قضاوت حرفه‌ای، نقد سازنده، انتساب و رعایت محرمانگی تأکید دارند."],
      ["What is the relationship between the House and Deep Blue Radar?", "رابطه خانه با رادار دیپ‌بلو چیست؟", "House of Technocrats is the master-brand institution. Deep Blue Radar is an endorsed methodology and intelligence framework within it.", "خانه تکنوکرات‌ها برند مادر و نهاد است. رادار دیپ‌بلو روش و چارچوب اطلاعاتی مورد تأیید آن درون همین نهاد است."],
      ["Is Deep Blue Radar public?", "آیا رادار دیپ‌بلو عمومی است؟", "DBR can have public-facing definitions, approved records and navigation. Public access does not mean every source, review record, contribution or working pattern is public.", "رادار دیپ‌بلو می‌تواند تعریف‌ها، رکوردهای تأییدشده و مسیرهای عمومی داشته باشد. دسترسی عمومی به معنای انتشار همه منابع، سوابق بررسی، مشارکت‌ها یا الگوهای در حال کار نیست."]
    ];

    return [
      '<section class="inner-section house-definition-hero" id="what" data-chamfer="br" data-cut="38" data-radius="12" data-fillet="10">',
      '<div class="house-definition-grid"><article>' + label("MICRO-DEFINITION", "تعریف کوتاه") + '<h2 data-en="Leadership, evidence and contribution in one accountable environment." data-fa="رهبری، شواهد و مشارکت در یک محیط پاسخ‌گو.">Leadership, evidence and contribution in one accountable environment.</h2>' + [
        ["House of Technocrats is the master-brand institution and community platform where leaders, thinkers and experts bring responsibility, evidence, experience and disciplined challenge together to strengthen leadership, continuity and useful action without replacing the accountable leader.", "خانه تکنوکرات‌ها برند مادر، نهاد و بستر رسمی جامعه‌ای است که در آن رهبران، متفکران و خبرگان، مسئولیت، شواهد، تجربه و نقد منضبط را کنار هم می‌گذارند تا رهبری، تداوم و اقدام مفید را تقویت کنند، بی‌آنکه جای رهبر پاسخ‌گو را بگیرند."],
        ["It connects a physical and digital House, Deep Blue Radar, Technocratic Thinking, knowledge and contribution. Leaders remain responsible for their organizational territory; the House works behind the scenes to clarify dependencies, frame problems and prepare defensible decisions.", "این خانه، محیط فیزیکی و دیجیتال، رادار دیپ‌بلو، تفکر تکنوکراتیک، دانش و مشارکت را به هم متصل می‌کند. رهبر همچنان مسئول قلمرو سازمانی خود می‌ماند؛ خانه در پشت صحنه به دیدن وابستگی‌ها، صورت‌بندی مسئله و آماده‌سازی تصمیم قابل دفاع کمک می‌کند."]
      ].map(paragraph).join("") + '</article><aside class="house-definition-card"><p data-en="The institutional environment where leadership responsibility, evidence, expertise and contribution meet without displacing the leader." data-fa="محیط نهادی پیوند مسئولیت رهبری، شواهد، تخصص و مشارکت؛ بدون کنارزدن رهبر.">The institutional environment where leadership responsibility, evidence, expertise and contribution meet without displacing the leader.</p><div><a class="button button-primary" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Participate in the House" data-fa="مشارکت در خانه">Participate in the House</span>' + icon("arrow") + '</a><a class="button button-outline" href="radar.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Explore Deep Blue Radar" data-fa="کاوش رادار دیپ‌بلو">Explore Deep Blue Radar</span>' + icon("arrow") + '</a></div></aside></div>',
      '</section>',

      '<section class="inner-section house-why-section" id="why" data-chamfer="" data-radius="12"><div class="house-split"><article>' + label("WHY THE HOUSE EXISTS", "چرا خانه شکل گرفته است") + '<h2 data-en="Expertise alone does not resolve fragmentation." data-fa="تخصص به‌تنهایی پراکندگی را حل نمی‌کند.">Expertise alone does not resolve fragmentation.</h2>' + [
        ["Leaders can have advisers, systems and specialist teams yet still face a fragmented decision. One source describes risk, another technology, and a third the operating consequence. Each may be correct. Their connection may still be missing.", "یک رهبر ممکن است مشاور، سامانه و تیم تخصصی داشته باشد، اما همچنان با تصمیمی تکه‌تکه روبه‌رو شود. یک منبع ریسک را می‌بیند، دیگری فناوری و سومی پیامد عملیاتی را. ممکن است هر سه درست بگویند؛ پیوند میان آنها همچنان گم باشد."],
        ["The House makes that connection visible. It brings responsibility into the same conversation as evidence, experience and specialist judgment so assumptions and patterns can be tested before insight becomes action.", "خانه همین پیوند را آشکار می‌کند. مسئولیت رهبری را کنار شواهد، تجربه و قضاوت تخصصی می‌گذارد تا فرض‌ها و الگوها پیش از تبدیل بینش به اقدام آزموده شوند."]
      ].map(paragraph).join("") + '</article><blockquote class="house-statement-panel"><p data-en="More expertise does not resolve fragmentation by itself. The missing work is to connect expertise to the decision for which a leader remains accountable." data-fa="تخصص بیشتر، به‌تنهایی پراکندگی را حل نمی‌کند. کار اصلی، پیوند تخصص با تصمیمی است که رهبر همچنان باید پاسخ‌گوی آن بماند.">More expertise does not resolve fragmentation by itself. The missing work is to connect expertise to the decision for which a leader remains accountable.</p></blockquote></div></section>',

      '<section class="inner-section house-boundary-section" id="leader-boundary" data-chamfer="" data-radius="12">' + label("LEADER BOUNDARY", "مرز رهبر") + '<h2 data-en="The leader remains on stage." data-fa="رهبر همچنان روی صحنه می‌ماند.">The leader remains on stage.</h2><p data-en="The House may frame a problem, synthesize evidence, prepare a decision, review governance, clarify roles, build capability, monitor an intervention or shape a solution. It does not become the management team, bypass accountable authority or communicate change in the leader’s place." data-fa="خانه می‌تواند مسئله را صورت‌بندی، شواهد را ترکیب، تصمیم را آماده، حاکمیت و نقش‌ها را بازبینی، قابلیت را تقویت، مداخله را پایش یا راه‌حل را شکل دهد. اما تیم مدیریت سازمان نمی‌شود، اختیار پاسخ‌گو را دور نمی‌زند و تغییر را به‌جای رهبر اعلام نمی‌کند.">The House may frame a problem, synthesize evidence, prepare a decision, review governance, clarify roles, build capability, monitor an intervention or shape a solution. It does not become the management team, bypass accountable authority or communicate change in the leader’s place.</p><div class="house-boundary-grid"><article><h3 data-en="The House may" data-fa="خانه می‌تواند">The House may</h3><ul><li data-en="Clarify the problem and assemble relevant evidence" data-fa="مسئله را روشن و شواهد مرتبط را گردآوری کند">Clarify the problem and assemble relevant evidence</li><li data-en="Challenge assumptions and prepare options" data-fa="فرض‌ها را نقد و گزینه‌ها را آماده کند">Challenge assumptions and prepare options</li><li data-en="Review governance, roles and monitoring" data-fa="حاکمیت، نقش‌ها و پایش را بازبینی کند">Review governance, roles and monitoring</li><li data-en="Support capability and solution design" data-fa="قابلیت و طراحی راه‌حل را پشتیبانی کند">Support capability and solution design</li></ul></article><article><h3 data-en="The House does not" data-fa="خانه انجام نمی‌دهد">The House does not</h3><ul><li data-en="Define the leader’s purpose for them" data-fa="هدف رهبر را به‌جای او تعریف نمی‌کند">Define the leader’s purpose for them</li><li data-en="Bypass accountable authority" data-fa="اختیار پاسخ‌گو را دور نمی‌زند">Bypass accountable authority</li><li data-en="Become the client’s management team" data-fa="تیم مدیریت سازمان مشتری نمی‌شود">Become the client’s management team</li><li data-en="Own or communicate change instead of the leader" data-fa="مالکیت یا اعلام تغییر را به‌جای رهبر بر عهده نمی‌گیرد">Own or communicate change instead of the leader</li></ul></article></div></section>',

      '<section class="inner-section house-architecture-section" id="architecture" data-chamfer="" data-radius="12">' + label("CORE CONCEPTS", "معماری مفاهیم") + '<h2 data-en="The House is the parent environment. DBR observes. Technocratic Thinking guides action." data-fa="خانه محیط مادر است. رادار دیپ‌بلو مشاهده می‌کند. تفکر تکنوکراتیک اقدام را هدایت می‌کند.">The House is the parent environment. DBR observes. Technocratic Thinking guides action.</h2><div class="house-concept-flow">' + conceptFlow.map(card).join("") + '</div></section>',

      '<section class="inner-section house-roles-section" id="roles" data-chamfer="" data-radius="12">' + label("THREE ROLES, NOT THREE LEVELS", "سه نقش، نه سه سطح") + '<h2 data-en="Roles describe contribution, not rank." data-fa="نقش‌ها نوع مشارکت را توصیف می‌کنند، نه رتبه را.">Roles describe contribution, not rank.</h2><div class="house-role-grid">' + roles.map(card).join("") + '</div><p class="house-note" data-en="A person may contribute differently across contexts. Participation, reputation, invitation or interview presence assigns no role automatically." data-fa="یک فرد می‌تواند در زمینه‌های مختلف مشارکت متفاوتی داشته باشد. مشارکت، شهرت، دعوت یا مصاحبه نقشی را خودکار ایجاد نمی‌کند.">A person may contribute differently across contexts. Participation, reputation, invitation or interview presence assigns no role automatically.</p></section>',

      '<section class="inner-section house-dimensions-section" id="dimensions" data-chamfer="" data-radius="12"><div class="house-split"><article>' + label("ONE HOUSE", "یک خانه") + '<h2 data-en="Physical encounter and digital memory work together." data-fa="مواجهه فیزیکی و حافظه دیجیتال با هم کار می‌کنند.">Physical encounter and digital memory work together.</h2><p data-en="The physical dimension may support conversations, executive sessions, workshops, recordings, scenarios, DBR reviews and arranged visits. The digital dimension can connect DBR, domain and pattern records, knowledge, people, insights, participation, events and approved resources." data-fa="بُعد فیزیکی می‌تواند از گفت‌وگو، نشست اجرایی، کارگاه، ضبط، سناریو، مرور رادار دیپ‌بلو و بازدید با هماهنگی پشتیبانی کند. بُعد دیجیتال می‌تواند رادار، رکوردهای حوزه و الگو، دانش، افراد، بینش‌ها، مشارکت، رویداد و منابع تأییدشده را متصل کند.">The physical dimension may support conversations, executive sessions, workshops, recordings, scenarios, DBR reviews and arranged visits. The digital dimension can connect DBR, domain and pattern records, knowledge, people, insights, participation, events and approved resources.</p></article><aside class="house-dimension-cards"><article><span data-en="PHYSICAL" data-fa="فیزیکی">PHYSICAL</span><p data-en="Place enables focused encounter." data-fa="مکان، مواجهه متمرکز را ممکن می‌کند.">Place enables focused encounter.</p></article><article><span data-en="DIGITAL" data-fa="دیجیتال">DIGITAL</span><p data-en="Records keep learning traceable." data-fa="رکوردها یادگیری را قابل ردیابی نگه می‌دارند.">Records keep learning traceable.</p></article></aside></div></section>',

      '<section class="inner-section house-engagement-section" id="engagement" data-chamfer="" data-radius="12">' + label("ENGAGEMENT JOURNEY", "سفر مشارکت") + '<h2 data-en="Depth of engagement, not membership rank." data-fa="عمق مشارکت، نه رتبه عضویت.">Depth of engagement, not membership rank.</h2><div class="house-journey-grid">' + [
        ["Storytelling", "روایت‌گری", "Content, conversation or a trusted introduction creates awareness.", "محتوا، گفت‌وگو یا معرفی مورد اعتماد، آگاهی می‌سازد."],
        ["Story Playing", "تجربه روایت", "The participant asks questions, uses a resource or joins an approved conversation.", "فرد پرسش می‌پرسد، با منبعی کار می‌کند یا وارد گفت‌وگوی تأییدشده می‌شود."],
        ["Story Listening", "شنیدن روایت", "The House listens to experience and judgment through reviewed evidence and interpretation.", "خانه از طریق شواهد و تفسیر بررسی‌شده به تجربه و قضاوت گوش می‌دهد."],
        ["Story Living", "زیستن روایت", "Engagement becomes sustained contribution in research, content, patterns, pilots or community work.", "تعامل به مشارکت پایدار در پژوهش، محتوا، الگو، پایلوت یا کار جامعه تبدیل می‌شود."]
      ].map(card).join("") + '</div></section>',

      '<section class="inner-section house-activities-section" id="activities" data-chamfer="" data-radius="12">' + label("HOUSE ACTIVITIES", "فعالیت‌های خانه") + '<h2 data-en="What can happen in the House?" data-fa="در خانه چه می‌تواند رخ دهد؟">What can happen in the House?</h2><div class="house-activity-grid">' + activities.map(card).join("") + '</div></section>',

      '<section class="inner-section house-loop-section" id="knowledge-loop" data-chamfer="" data-radius="12">' + label("KNOWLEDGE LOOP", "حلقه دانش") + '<h2 data-en="Contribution begins with traceability." data-fa="مشارکت از قابلیت ردیابی آغاز می‌شود.">Contribution begins with traceability.</h2><p data-en="Experience or evidence enters a conversation, is interpreted, tested against a pattern and counter-evidence, and revised when necessary. A supported insight may inform a framework, pilot or product. Monitoring produces new evidence." data-fa="تجربه یا شاهد وارد گفت‌وگو، تفسیر، مرور الگو و آزمون شواهد مخالف می‌شود و در صورت لزوم اصلاح می‌گردد. بینش پشتیبانی‌شده ممکن است به چارچوب، پایلوت یا محصول جهت دهد. پایش، شواهد تازه می‌سازد.">Experience or evidence enters a conversation, is interpreted, tested against a pattern and counter-evidence, and revised when necessary. A supported insight may inform a framework, pilot or product. Monitoring produces new evidence.</p><div class="house-loop-strip">' + ["Experience / Evidence", "Conversation", "Interpretation", "Pattern review", "Insight", "Counter-evidence", "Revision", "Framework / Pilot / Product", "Monitoring", "New evidence"].map(function (item, index) { var fa = ["تجربه / شواهد", "گفت‌وگو", "تفسیر", "مرور الگو", "بینش", "شواهد مخالف", "اصلاح", "چارچوب / پایلوت / محصول", "پایش", "شواهد تازه"][index]; return '<span' + localizedAttrs(item, fa) + '>' + escapeHtml(item) + '</span>'; }).join("") + '</div></section>',

      '<section class="inner-section house-boundaries-section" id="boundaries" data-chamfer="" data-radius="12">' + label("WHAT THE HOUSE IS NOT", "خانه چه چیزی نیست") + '<h2 data-en="Boundaries protect the institution." data-fa="مرزها از نهاد محافظت می‌کنند.">Boundaries protect the institution.</h2><div class="house-boundary-chips">' + boundaries.map(function (item) { return '<span' + localizedAttrs(item[0], item[1]) + '>' + escapeHtml(item[0]) + '</span>'; }).join("") + '</div></section>',

      '<section class="inner-section house-participate-section" id="participate" data-chamfer="" data-radius="12">' + label("PARTICIPATION", "مشارکت") + '<h2 data-en="Participation begins with context." data-fa="مشارکت با زمینه آغاز می‌شود.">Participation begins with context.</h2><p data-en="Participation may include conversation, evidence, pattern review, an approved event, content, an arranged visit, pilot or solution. Availability depends on relevance, confidentiality and approval." data-fa="مشارکت می‌تواند گفت‌وگو، ارائه شواهد، مرور الگو، حضور در رویداد تأییدشده، تولید محتوا، بازدید با هماهنگی یا همکاری در پایلوت و راه‌حل باشد. موجود بودن هر مسیر به تناسب، محرمانگی و تأیید بستگی دارد.">Participation may include conversation, evidence, pattern review, an approved event, content, an arranged visit, pilot or solution. Availability depends on relevance, confidentiality and approval.</p><div class="house-participate-grid">' + participateRoutes.map(participateCard).join("") + '</div><div class="house-participate-modal" data-house-participate-modal hidden><div class="house-participate-backdrop" data-house-participate-close></div><article class="house-participate-dialog glass-card" role="dialog" aria-modal="true" aria-labelledby="house-participate-modal-title" data-chamfer="br" data-cut="34" data-radius="12" data-fillet="10"><button class="house-participate-close-tab" type="button" data-house-participate-close aria-label="Close participation form"><span data-en="Close" data-fa="بستن">Close</span>' + icon("close") + '</button><div class="house-participate-dialog-body" id="house-participate-modal-title">' + participateRoutes.map(participateModal).join("") + '</div></article></div></section>',

      '<section class="inner-section house-solutions-section" id="solutions" data-chamfer="" data-radius="12">' + label("FROM KNOWLEDGE TO SOLUTIONS", "از دانش تا راه‌حل") + '<h2 data-en="Approved outputs belong in the Service Store." data-fa="خروجی‌های تأییدشده در فروشگاه خدمات قرار می‌گیرند.">Approved outputs belong in the Service Store.</h2><p data-en="Where a problem and its evidence are sufficiently clear, shared knowledge may inform an approved framework, assessment, pilot, tool, dashboard, monitoring product, training or simulation product. Not every pattern requires a product, and not every community activity is commercial." data-fa="وقتی مسئله و شواهد آن به‌اندازه کافی روشن باشند، دانش مشترک می‌تواند به چارچوب، ارزیابی، پایلوت، ابزار، داشبورد، محصول پایش، آموزش یا شبیه‌سازی تأییدشده جهت دهد. هر الگو به محصول نیاز ندارد و هر فعالیت جامعه تجاری نیست.">Where a problem and its evidence are sufficiently clear, shared knowledge may inform an approved framework, assessment, pilot, tool, dashboard, monitoring product, training or simulation product. Not every pattern requires a product, and not every community activity is commercial.</p><a class="button button-outline" href="services.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Explore the Service Store" data-fa="مشاهده فروشگاه خدمات">Explore the Service Store</span>' + icon("arrow") + '</a></section>',

      '<section class="inner-section house-faq-section" id="faq" data-chamfer="" data-radius="12"><h2 data-en="Frequently asked questions" data-fa="پرسش‌های متداول">Frequently asked questions</h2><div class="accordion">' + faq.map(faqItem).join("") + '</div></section>',

      '<section class="inner-section house-final-cta" id="final-cta" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10"><div><p class="dbr-label" data-en="BRING A SERIOUS QUESTION" data-fa="یک پرسش جدی">BRING A SERIOUS QUESTION</p><h2 data-en="Make the context visible." data-fa="زمینه را آشکار کنید.">Make the context visible.</h2><p data-en="Participation may begin with a conversation, an item of evidence, a professional challenge, a review, an approved event or a possible pilot or solution." data-fa="مشارکت می‌تواند با گفت‌وگو، یک شاهد، چالش حرفه‌ای، بررسی، رویداد تأییدشده یا امکان یک پایلوت و راه‌حل آغاز شود.">Participation may begin with a conversation, an item of evidence, a professional challenge, a review, an approved event or a possible pilot or solution.</p></div><a class="button button-primary" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Start with participation" data-fa="شروع مشارکت">Start with participation</span>' + icon("arrow") + '</a></section>'
    ].join("");
  }

  function insightTagMarkup(tag) {
    return '<span data-en="#' + escapeHtml(tag[0]) + '" data-fa="#' + escapeHtml(tag[1]) + '">#' + escapeHtml(tag[0]) + '</span>';
  }

  function insightTitleMarkup(item) {
    var enLines = item.titleLines || [item.title];
    var faLines = item.faTitleLines || [item.faTitle];
    return '<h3 class="insight-card-title" dir="auto" data-en="' + escapeHtml(item.title) + '" data-fa="' + escapeHtml(item.faTitle) + '" data-en-lines="' + escapeHtml(enLines.join("|")) + '" data-fa-lines="' + escapeHtml(faLines.join("|")) + '">' + enLines.map(function (line) { return '<span dir="auto">' + escapeHtml(line) + '</span>'; }).join("") + "</h3>";
  }

  function insightCardMarkup(item, index) {
    var authorImage = item.authorImage || item.image;
    var authorAlt = item.authorImage ? "Portrait of " + item.author : item.alt;
    var faAuthorAlt = item.authorImage ? "پرترهٔ " + item.faAuthor : item.faAlt;
    var order = typeof index === "number" ? index : 0;
    var searchText = [
      item.title, item.faTitle, item.description, item.faDescription,
      item.type, item.faType, item.topic, item.faTopic,
      item.industry, item.faIndustry, item.author, item.faAuthor,
      item.tags.map(function (tag) { return tag.join(" "); }).join(" ")
    ].join(" ");
    return [
      '<a class="person-card people-gallery-card insight-card glass-card" href="' + escapeHtml(item.href) + '" data-search="' + escapeHtml(searchText.toLowerCase()) + '" data-type="' + escapeHtml(item.type) + '" data-subject="' + escapeHtml(item.topic) + '" data-industry="' + escapeHtml(item.industry) + '" data-person="' + escapeHtml(item.author) + '" data-order="' + escapeHtml(String(order)) + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8">',
      '<figure class="insight-card-image"><img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.alt) + '" data-fa-alt="' + escapeHtml(item.faAlt) + '"></figure>',
      '<div class="insight-card-copy person-copy"><div class="person-name-row insight-title-row">' + insightTitleMarkup(item) + '<span class="person-role-tag insight-type-tag" data-en="' + escapeHtml(item.type) + '" data-fa="' + escapeHtml(item.faType) + '">' + escapeHtml(item.type) + '</span></div><div class="insight-author-row"><span class="insight-author-avatar"><img src="' + escapeHtml(authorImage) + '" alt="' + escapeHtml(authorAlt) + '" data-fa-alt="' + escapeHtml(faAuthorAlt) + '"></span><span data-en="' + escapeHtml(item.author) + '" data-fa="' + escapeHtml(item.faAuthor) + '">' + escapeHtml(item.author) + '</span></div><div class="insight-card-tags">' + item.tags.map(insightTagMarkup).join("") + '</div><div class="person-card-meta insight-card-footer"><span data-en="' + escapeHtml(item.topic + " / " + item.date) + '" data-fa="' + escapeHtml(item.faTopic + " / " + item.faDate) + '">' + escapeHtml(item.topic + " / " + item.date) + '</span><span class="person-card-arrow" aria-hidden="true">' + icon("arrow") + '</span></div></div>',
      '</a>'
    ].join("");
  }

  function personRelatedInsightItems(person) {
    return insightItems.filter(function (item) {
      return item.author === person.name || item.faAuthor === person.faName;
    });
  }

  function profileRelatedInsightsMarkup(person) {
    var items = personRelatedInsightItems(person);
    var body = items.length
      ? '<div class="insight-card-grid profile-related-insight-grid">' + items.map(insightCardMarkup).join("") + '</div>'
      : '<div class="empty-state" data-en="No approved podcast, videocast or article is recorded for this profile yet." data-fa="هنوز پادکست، ویدیوکست یا مقالهٔ تأییدشده‌ای برای این پروفایل ثبت نشده است.">No approved podcast, videocast or article is recorded for this profile yet.</div>';
    return [
      '<section class="profile-section-block profile-related-insights-section" data-profile-related-insights="' + escapeHtml(person.id) + '" data-chamfer="" data-radius="12">',
      '<div class="profile-section-heading profile-related-insights-heading"><p class="dbr-label" data-en="RELATED INSIGHTS" data-fa="بینش‌های مرتبط">RELATED INSIGHTS</p><h2 data-en="Insights" data-fa="بینش‌ها">Insights</h2></div>',
      body,
      '</section>'
    ].join("");
  }

  function insightsRichMarkup() {
    function shuffledCopy(items) {
      var copy = items.slice();
      for (var index = copy.length - 1; index > 0; index -= 1) {
        var swapIndex = Math.floor(Math.random() * (index + 1));
        var current = copy[index];
        copy[index] = copy[swapIndex];
        copy[swapIndex] = current;
      }
      return copy;
    }

    function mixedInsightItems() {
      var buckets = insightItems.reduce(function (groups, item) {
        if (!groups[item.type]) groups[item.type] = [];
        groups[item.type].push(item);
        return groups;
      }, {});
      var rowOrders = [
        ["Podcast", "Videocast", "Article"],
        ["Videocast", "Article", "Podcast"],
        ["Article", "Podcast", "Videocast"],
        ["Podcast", "Article", "Videocast"],
        ["Videocast", "Podcast", "Article"],
        ["Article", "Videocast", "Podcast"]
      ];
      var mixed = [];
      var rowIndex = 0;

      Object.keys(buckets).forEach(function (type) {
        buckets[type] = shuffledCopy(buckets[type]);
      });

      while ((buckets.Podcast || []).length && (buckets.Videocast || []).length && (buckets.Article || []).length) {
        rowOrders[rowIndex % rowOrders.length].forEach(function (type) {
          mixed.push(buckets[type].shift());
        });
        rowIndex += 1;
      }

      ["Podcast", "Videocast", "Article"].forEach(function (type) {
        (buckets[type] || []).forEach(function (item) {
          mixed.push(item);
        });
      });

      Object.keys(buckets).forEach(function (type) {
        if (["Podcast", "Videocast", "Article"].indexOf(type) !== -1) return;
        buckets[type].forEach(function (item) {
          mixed.push(item);
        });
      });

      return mixed;
    }

    function optionMarkup(value, en, fa) {
      return '<option value="' + escapeHtml(value) + '" data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '">' + escapeHtml(en) + '</option>';
    }

    function fixedOptions(options, allEn, allFa) {
      return optionMarkup("", allEn, allFa) + options.map(function (option) {
        return optionMarkup(option[0], option[1], option[2]);
      }).join("");
    }

    function uniqueOptions(key, faKey, allEn, allFa) {
      var seen = {};
      var options = insightItems.reduce(function (items, item) {
        if (seen[item[key]]) return items;
        seen[item[key]] = true;
        items.push(optionMarkup(item[key], item[key], item[faKey]));
        return items;
      }, []);
      return optionMarkup("", allEn, allFa) + options.join("");
    }

    var typeOptions = [
      ["Podcast", "Podcast", "پادکست"],
      ["Videocast", "Videocast", "ویدیوکست"],
      ["Article", "Article", "مقاله"],
      ["Interview", "Interview", "مصاحبه"]
    ];

    return [
      '<section class="inner-section insight-library-section" id="insight-library" data-chamfer="" data-radius="12">',
      '<div class="insight-library-heading"><div><p class="dbr-label" data-en="INSIGHT LIBRARY" data-fa="کتابخانه بینش‌ها">INSIGHT LIBRARY</p><h2 data-en="Browse Insights" data-fa="مرور بینش‌ها">Browse Insights</h2></div><p class="insight-result-count dbr-label" aria-live="polite"></p></div>',
      '<div class="insight-search-row"><label><span data-en="Search" data-fa="جست‌وجو">Search</span><input class="insight-search" type="search" data-en-placeholder="Search" data-fa-placeholder="جست‌وجو" placeholder="Search"></label></div>',
      '<div class="filter-bar people-filter-bar insight-filter-bar insight-filter-panel" id="insight-filter-panel"><label><span data-en="Type" data-fa="نوع">Type</span><select class="insight-type-filter">' + fixedOptions(typeOptions, "All types", "همه نوع‌ها") + '</select></label><label><span data-en="Subject" data-fa="موضوع">Subject</span><select class="insight-subject-filter">' + uniqueOptions("topic", "faTopic", "All subjects", "همه موضوع‌ها") + '</select></label><label><span data-en="Industry" data-fa="صنعت">Industry</span><select class="insight-industry-filter">' + uniqueOptions("industry", "faIndustry", "All industries", "همه صنعت‌ها") + '</select></label><label><span data-en="Person" data-fa="فرد">Person</span><select class="insight-person-filter">' + uniqueOptions("author", "faAuthor", "All people", "همه افراد") + '</select></label></div>',
      '<div class="insight-card-grid">' + mixedInsightItems().map(insightCardMarkup).join("") + '</div>',
      '<div class="empty-state insight-empty" hidden data-en="No insights match these filters." data-fa="بینشی با این فیلترها پیدا نشد.">No insights match these filters.</div>',
      '</section>'
    ].join("");
  }

  function directoryMarkup(kind) {
    if (kind === "people") return peopleGalleryMarkup();
    var items = directoryItems[kind] || [];
    var typeLabel = kind === "people" ? "Role" : kind === "insights" ? "Type" : "Subject area";
    return [
      '<section class="inner-section directory-section" data-chamfer="" data-radius="12">',
      '<h2>Browse the directory</h2><p>The current published set and its connected Continuity context.</p>',
      '<div class="filter-bar"><label>Search<input class="directory-search" type="search" placeholder="Search ' + kind + '"></label><label>' + typeLabel + '<select class="directory-filter"><option value="">All</option><option>Continuity</option><option>Governance</option><option>Architecture</option></select></label><label>Sort<select><option>Latest update</option><option>Alphabetical</option></select></label></div>',
      '<p class="result-count dbr-label" aria-live="polite">' + resultCountText(items.length) + "</p>",
      '<div class="content-list directory-results">' + items.map(function (item) {
        return '<a class="content-item" href="' + item[2] + '" data-search="' + escapeHtml((item[0] + " " + item[1] + " " + item[3]).toLowerCase()) + '"><div><p class="dbr-label">' + escapeHtml(item[3]) + '</p><h3>' + escapeHtml(item[0]) + '</h3><p>' + escapeHtml(item[1]) + '</p></div><span class="dbr-label content-action"><span class="content-action-copy">OPEN</span>' + icon("arrow") + "</span></a>";
      }).join("") + "</div>",
      '<div class="empty-state" hidden>No items match. Clear the search or browse the complete directory.</div>',
      "</section>"
    ].join("");
  }

  function peopleGalleryMarkup() {
    return [
      '<section class="inner-section directory-section people-directory-section" data-chamfer="" data-radius="12">',
      '<div class="filter-bar people-filter-bar"><label><span data-en="Search" data-fa="جست‌وجو">Search</span><input class="directory-search" type="search" data-en-placeholder="Search people" data-fa-placeholder="جست‌وجو در افراد" placeholder="Search people"></label><label><span data-en="Role" data-fa="نقش">Role</span><select class="directory-filter"><option value="" data-en="All roles" data-fa="همهٔ نقش‌ها">All roles</option><option value="leader" data-en="Leaders" data-fa="رهبران">Leaders</option><option value="thinker" data-fa="اندیشمندان">Thinkers</option><option value="expert" data-fa="متخصصان">Experts</option></select></label><label><span data-en="Sort" data-fa="مرتب‌سازی">Sort</span><select class="directory-sort"><option value="featured" data-en="Featured" data-fa="برگزیده">Featured</option><option value="alphabetical" data-en="Alphabetical" data-fa="الفبایی">Alphabetical</option></select></label></div>',
      '<div class="people-gallery directory-results" aria-label="People directory">',
      peopleProfiles.map(function (person, index) {
        var roleKey = person.role.toLowerCase().replace("technocratic ", "");
        var roleTag = person.role.replace("Technocratic ", "");
        var faRoleTag = person.faRole.replace("تکنوکرات", "").trim();
        var searchText = [person.name, person.faName, person.role, person.faRole, person.title, person.faTitle, person.subject, person.faSubject].join(" ").toLowerCase();
        return [
          '<a class="person-card people-gallery-card glass-card" href="person.html?person=' + encodeURIComponent(person.id) + '" data-search="' + escapeHtml(searchText) + '" data-role="' + escapeHtml(roleKey) + '" data-order="' + index + '" data-name="' + escapeHtml(person.name.toLowerCase()) + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8">',
          '<div class="person-photo"><img' + (person.imageClass ? ' class="' + escapeHtml(person.imageClass) + '"' : '') + ' src="' + escapeHtml(person.image) + '" alt="Portrait of ' + escapeHtml(person.name) + '" data-fa-alt="پرترهٔ ' + escapeHtml(person.faName) + '"></div>',
          '<div class="person-copy"><div class="person-name-row"><h3 data-en="' + escapeHtml(person.name) + '" data-fa="' + escapeHtml(person.faName) + '">' + escapeHtml(person.name) + '</h3><span class="person-role-tag" data-en="' + escapeHtml(roleTag) + '" data-fa="' + escapeHtml(faRoleTag) + '">' + escapeHtml(roleTag) + '</span></div><p class="person-title" data-en="' + escapeHtml(person.title) + '" data-fa="' + escapeHtml(person.faTitle) + '">' + escapeHtml(person.title) + '</p><div class="person-card-meta"><span data-en="' + escapeHtml(person.subject) + '" data-fa="' + escapeHtml(person.faSubject) + '">' + escapeHtml(person.subject) + '</span><span class="person-card-arrow" aria-hidden="true">' + icon("arrow") + '</span></div></div>',
          '</a>'
        ].join("");
      }).join(""),
      '</div><div class="empty-state" hidden data-en="No people match this search." data-fa="فردی با این جست‌وجو پیدا نشد.">No people match this search.</div>',
      '</section>'
    ].join("");
  }

  function radarCategoryCardMarkup(category, index) {
    var number = String(index + 1).padStart(2, "0");
    var faNumber = persianDigits(number);
    var enPatternCount = category.patterns.length + " Patterns";
    var faPatternCount = persianDigits(category.patterns.length) + " الگو";
    var keywordMap = {
      "continuity-architecture": "domain category pattern backup infrastructure resilience modular service decomposition survivability path diversity route failover redundancy",
      "continuity-smart-management": "domain category pattern ai aiops orchestration signal decision support automation monitoring resilience",
      "continuity-governance": "domain category pattern governance accountability owner ownership resilience continuity responsibility service owner",
      "proactive-continuity-evaluation": "domain category pattern resilience impact tolerance critical service scenario testing severe plausible",
      "security-architectures": "domain category pattern security backup cyber recovery immutable air gap air-gapped resilience zero trust ransomware",
      "win-win-regulation": "domain category pattern regulation regulator supervisory resilience signal exchange protocol ecosystem",
      "financial-continuity": "domain category pattern liquidity treasury settlement backup resilience financial operations",
      "hardware-supply": "domain category pattern hardware infrastructure component procurement supplier vendor multi source resilience",
      "software-supply": "domain category pattern software dependency vendor supplier escrow exit readiness security backup resilience",
      "customer-facing-continuity": "domain category pattern customer channel backup fallback digital substitution communication access resilience",
      "business-process-sla": "domain category pattern process sla backup fallback manual workaround minimum service resilience",
      "continuity-maintenance": "domain category pattern maintenance backup rehearsal recovery review continuity debt resilience",
      "third-party-continuity": "domain category pattern vendor supplier third party partner dependency mapping containment resilience",
      "containment-engineering": "domain category pattern containment graceful degradation shutdown isolation recovery domain resilience",
      "risk-sensing": "domain category pattern risk sensing warning threat security weak signal incident learning resilience",
      "recovery-services": "domain category pattern backup recovery restoration clean room sequencing service resilience"
    };
    var patternSearchText = category.patterns.map(function (pattern) {
      return pattern.join(" ");
    }).join(" ");
    var searchText = [category.id, category.en, category.fa, category.enDescription, category.faDescription, patternSearchText, keywordMap[category.id] || ""].join(" ").toLowerCase();
    var patternItems = category.patterns.map(function (pattern, patternIndex) {
      var patternNumber = String(patternIndex + 1).padStart(2, "0");
      return '<li><span class="dbr-label" data-en="P' + patternNumber + '" data-fa="الگو ' + persianDigits(patternNumber) + '">P' + patternNumber + '</span><strong data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</strong></li>';
    }).join("");
    return [
      '<a class="radar-category-card glass-card" href="' + categoryLink(category) + '" data-search="' + escapeHtml(searchText) + '" data-category="' + escapeHtml(category.id) + '" data-order="' + index + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8">',
      '<div class="radar-category-card-copy"><span class="radar-category-number dbr-label"><span data-en="' + number + '" data-fa="' + faNumber + '">' + number + '</span><small data-en="/ 16" data-fa="از ۱۶">/ 16</small></span><h3 data-en="' + escapeHtml(category.en) + '" data-fa="' + escapeHtml(category.fa) + '">' + escapeHtml(category.en) + '</h3><p data-en="' + escapeHtml(enPatternCount) + '" data-fa="' + escapeHtml(faPatternCount) + '">' + escapeHtml(enPatternCount) + '</p><ul class="radar-category-patterns">' + patternItems + '</ul><span class="radar-card-open" aria-hidden="true">' + icon("arrow") + '</span></div>',
      '</a>'
    ].join("");
  }

  function radarMarkup() {
    return [
      '<section class="inner-section radar-explorer-section" data-chamfer="" data-radius="12">',
      '<div class="radar-explorer-heading"><div><p class="dbr-label" data-en="RADAR EXPLORER" data-fa="RADAR EXPLORER">RADAR EXPLORER</p><h2 data-en="16 Domains · 32 Current Patterns" data-fa="16 Domains · 32 Current Patterns">16 Domains · 32 Current Patterns</h2><p data-en="The current Radar contains 16 MECE Domains and 32 Patterns. They represent the current state of the Pattern Library, not a final or mandatory list for every bank or financial organization." data-fa="نسخه فعلی Radar شامل ۱۶ Domain MECE و ۳۲ Pattern است. این‌ها وضعیت فعلی Pattern Library هستند، نه فهرستی نهایی یا الزامی برای همه بانک‌ها و سازمان‌های مالی.">The current Radar contains 16 MECE Domains and 32 Patterns. They represent the current state of the Pattern Library, not a final or mandatory list for every bank or financial organization.</p></div><label class="radar-filter"><span data-en="Search Domains & Patterns" data-fa="جست‌وجوی Domain و Pattern">Search Domains & Patterns</span><input class="radar-category-search" type="search" data-en-placeholder="Search a Domain or Pattern..." data-fa-placeholder="جست‌وجوی Domain یا Pattern..." placeholder="Search a Domain or Pattern..."></label></div>',
      '<div class="radar-category-card-grid directory-results" aria-label="16 Radar Domains">',
      radarCategories.map(radarCategoryCardMarkup).join(""),
      '</div><p class="radar-filter-count dbr-label" aria-live="polite"></p><div class="empty-state radar-category-empty" hidden data-en="No Domains or Patterns match this search." data-fa="Domain یا Pattern با این جست‌وجو پیدا نشد.">No Domains or Patterns match this search.</div></section>'
    ].join("");
  }

  function radarIcon(name) {
    var paths = {
      scan: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/><path d="M12 12l5-5"/>',
      signal: '<path d="M4 17c4-7 12-7 16 0"/><path d="M7 14c2.8-4 7.2-4 10 0"/><circle cx="12" cy="18" r="1.4"/>',
      isolate: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/><path d="M11 7.5h4M9.5 11l5 5"/>',
      trust: '<path d="M12 3l7 3v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      phase: '<path d="M4 12h14"/><path d="m13 7 5 5-5 5"/><circle cx="5" cy="12" r="2"/>',
      people: '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.3"/><path d="M4 19c.8-3.4 2.9-5 5-5s4.2 1.6 5 5"/><path d="M13.5 15c2.4.2 4.1 1.5 4.8 4"/>'
    };
    return '<svg class="radar-card-icon" aria-hidden="true" viewBox="0 0 24 24">' + paths[name] + "</svg>";
  }

  function localizedAttrs(en, fa) {
    return ' data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '"';
  }

  var radarSignalBlueprints = [
    [-8.2, 0.34, 3, "new"], [6.8, 0.78, 8, "established"],
    [-2.6, 0.44, 5, "new"], [8.4, 0.63, 2, "established"],
    [-7.6, 0.55, 6, "established"], [3.8, 0.29, 1, "new"],
    [-4.1, 0.71, 9, "established"], [9.2, 0.38, 4, "new"],
    [-8.8, 0.83, 10, "established"], [1.9, 0.47, 3, "new"],
    [-5.2, 0.36, 2, "new"], [7.4, 0.68, 7, "established"],
    [-1.3, 0.58, 6, "established"], [9.5, 0.31, 2, "new"],
    [-9.1, 0.74, 8, "established"], [4.2, 0.42, 4, "new"],
    [-3.6, 0.66, 7, "established"], [8.1, 0.27, 1, "new"],
    [-7.9, 0.49, 5, "new"], [2.7, 0.86, 9, "established"],
    [-4.8, 0.33, 3, "new"], [9.0, 0.61, 6, "established"],
    [-8.5, 0.72, 8, "established"], [5.1, 0.39, 4, "new"],
    [-1.8, 0.53, 5, "established"], [8.7, 0.30, 2, "new"],
    [-6.4, 0.82, 10, "established"], [3.3, 0.45, 3, "new"],
    [-9.4, 0.37, 4, "new"], [6.1, 0.69, 7, "established"],
    [-2.2, 0.57, 6, "established"], [9.4, 0.35, 2, "new"]
  ];

  function radarSignalFor(categoryIndex, patternIndex) {
    var blueprint = radarSignalBlueprints[(categoryIndex * 2 + patternIndex) % radarSignalBlueprints.length];
    var score = blueprint[2];
    return {
      angle: categoryIndex * 22.5 + blueprint[0],
      radius: blueprint[1],
      score: score,
      freshness: blueprint[3],
      size: 5.4 + score * 1.05
    };
  }

  function radarLandingMarkup() {
    var content = {"hero":{"en":{"label":"FRAMEWORK · CONTINUITY INTELLIGENCE","title":"A field of view for understanding what affects organizational continuity","text":["Deep Blue Radar (DBR) is the House of Technocrats framework for visualizing and monitoring continuity patterns. These patterns are discovered through the analysis of signals gathered from research, expert interviews, real incidents, technology, regulation, and organizational experience. DBR organizes them across 16 continuity domains and helps banks and organizations identify the patterns and risk drivers most relevant to their own context and build their own Radar."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"FRAMEWORK · CONTINUITY INTELLIGENCE","title":"میدان دیدی برای شناخت آنچه بر تداوم سازمان اثر می‌گذارد","text":["Deep Blue Radar (DBR) چارچوب House of Technocrats برای مشاهده و پایش Patternهای تداوم است؛ Patternهایی که از تحلیل Signalهای حاصل از پژوهش، مصاحبه با متخصصان، رخدادهای واقعی، فناوری، رگولاتوری و تجربه‌های سازمانی کشف می‌شوند. DBR این Patternها را در ۱۶ Domain تداوم سازمان‌دهی می‌کند و به بانک‌ها و سازمان‌ها کمک می‌کند Patternها و Risk Driverهای مرتبط با شرایط خود را بشناسند و Radar اختصاصی خود را شکل دهند."],"subsections":[],"listItems":[],"flow":""},"stats":["16 MECE Domains","32 Current Patterns","Dynamic Radar"]},"definition":{"en":{"label":"01 — DEFINITION","title":"What is Deep Blue Radar?","text":["In banks and financial organizations, many continuity risks appear before they become major disruptions, often as scattered signals across technology, operations, regulation, customer experience, infrastructure, and ecosystem dependencies. DBR brings these signals into a shared field of view so they can be seen and interpreted together.","By connecting related signals, recurring behaviors and responses can be recognized, allowing Continuity Patterns to emerge. Deep Blue Radar is the tool for visualizing and tracking these patterns . It is not the research process itself, nor is it a static risk register.","The current 32 patterns represent the Radar as it stands today. They are not a final set. New signals and evidence may strengthen, weaken, refine, merge, split, or expand the library with entirely new patterns.","Deep Blue Radar is not a static map of continuity. It is a living view of continuity patterns as they emerge and change."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"01 — تعریف","title":"Deep Blue Radar چیست؟","text":["در بانک‌ها و سازمان‌های مالی، بسیاری از ریسک‌های تداوم پیش از آنکه به اختلال جدی تبدیل شوند، در قالب Signalهای پراکنده در فناوری، عملیات، رگولاتوری، تجربه مشتری، زیرساخت و وابستگی‌های اکوسیستم ظاهر می‌شوند. DBR کمک می‌کند این نشانه‌ها در یک میدان دید مشترک دیده و تحلیل شوند.","با کنار هم قرار دادن Signalهای مرتبط، رفتارها و پاسخ‌های تکرارشونده شناسایی می‌شوند و از دل آن‌ها Continuity Pattern ها شکل می‌گیرند. Deep Blue Radar ابزار نمایش و دنبال‌کردن این Patternهاست ؛ نه خودِ فرایند پژوهش و نه یک Risk Register ثابت.","۳۲ Pattern فعلی، تصویر امروز Radar هستند. این مجموعه نهایی نیست و با Signalها و شواهد تازه می‌تواند تقویت، تضعیف، اصلاح، ادغام، تفکیک یا با Patternهای جدید تکمیل شود.","Deep Blue Radar یک نقشه ثابت از تداوم نیست؛ تصویری زنده از Patternهای تداوم در حال ظهور و تغییر است."],"subsections":[],"listItems":[],"flow":""}},"levels":{"en":{"label":"02 — TWO LEVELS OF THE RADAR","title":"Shared intelligence, different organizational radars","text":["Each bank or financial organization evaluates which patterns matter to it based on its critical services, risks, dependencies, architecture, infrastructure, regulatory requirements, and capabilities. An organization’s Radar may include only part of the current 32 patterns, or even new patterns discovered later.","The 32 patterns are not a universal checklist for every bank. They form a shared Pattern Library from which each bank or financial organization builds its own Radar based on its operational reality and continuity risks."],"subsections":[{"title":"Shared Deep Blue Radar","body":"The shared Radar is a dynamic library of patterns discovered so far from multiple signals. It shows which patterns have emerged in each Domain and how new evidence changes their interpretation over time."},{"title":"Organizational Deep Blue Radar","body":"Each bank or financial organization evaluates which patterns matter to it based on its critical services, risks, dependencies, architecture, infrastructure, regulatory requirements, and capabilities. An organization’s Radar may include only part of the current 32 patterns, or even new patterns discovered later."}],"listItems":[],"flow":""},"fa":{"label":"02 — دو سطح رادار","title":"یک دانش مشترک، رادارهای سازمانی متفاوت","text":["هر بانک یا سازمان مالی، بر اساس خدمات حیاتی، ریسک‌ها، وابستگی‌ها، معماری، زیرساخت، الزامات رگولاتوری و قابلیت‌های خودش بررسی می‌کند کدام Patternها برای او مرتبط‌اند. Radar هر بانک می‌تواند فقط بخشی از ۳۲ Pattern فعلی یا حتی Patternهای جدید را شامل شود.","۳۲ Pattern یک Checklist عمومی برای همه بانک‌ها نیستند. آن‌ها یک Pattern Library مشترک‌اند که هر بانک یا سازمان مالی، Radar مخصوص خود را بر اساس واقعیت عملیاتی و ریسک‌های تداومش از میان آن‌ها می‌سازد."],"subsections":[{"title":"Shared Deep Blue Radar","body":"رادار عمومی، کتابخانه‌ای پویا از Patternهایی است که تا امروز از Signalهای مختلف کشف شده‌اند. این Radar نشان می‌دهد در هر Domain چه Patternهایی دیده شده‌اند و شواهد جدید چگونه آن‌ها را تغییر می‌دهند."},{"title":"Organizational Deep Blue Radar","body":"هر بانک یا سازمان مالی، بر اساس خدمات حیاتی، ریسک‌ها، وابستگی‌ها، معماری، زیرساخت، الزامات رگولاتوری و قابلیت‌های خودش بررسی می‌کند کدام Patternها برای او مرتبط‌اند. Radar هر بانک می‌تواند فقط بخشی از ۳۲ Pattern فعلی یا حتی Patternهای جدید را شامل شود."}],"listItems":[],"flow":""}},"concepts":{"en":{"label":"03 — CORE CONCEPTS","title":"Core concepts of Deep Blue Radar","text":["A specific, traceable observation from an incident, research, interview, data source, technology, or environmental change that may indicate a continuity-relevant shift or issue.","A recurring and actionable response, capability, architecture, behavior, or approach discovered across multiple related signals in response to a continuity issue or risk.","A force of change, pressure, expectation, or contextual condition that helps explain why a Continuity Pattern is emerging or becoming more important.","Information and sources that support the existence, scope, or credibility of a Pattern. Counter-evidence may limit or challenge it.","A state in which continuity risks have been identified, addressed, and kept under control."],"subsections":[{"title":"Domain","body":"One of 16 MECE continuity areas used to organize patterns related to a distinct dimension of organizational continuity."},{"title":"Signal","body":"A specific, traceable observation from an incident, research, interview, data source, technology, or environmental change that may indicate a continuity-relevant shift or issue."},{"title":"Pattern","body":"A recurring and actionable response, capability, architecture, behavior, or approach discovered across multiple related signals in response to a continuity issue or risk."},{"title":"Risk Driver","body":"A force of change, pressure, expectation, or contextual condition that helps explain why a Continuity Pattern is emerging or becoming more important."},{"title":"Evidence","body":"Information and sources that support the existence, scope, or credibility of a Pattern. Counter-evidence may limit or challenge it."},{"title":"Deep Blue State","body":"A state in which continuity risks have been identified, addressed, and kept under control."}],"listItems":[],"flow":""},"fa":{"label":"03 — مفاهیم اصلی","title":"مفاهیم اصلی Deep Blue Radar","text":["یک مشاهده مشخص و قابل ردیابی از رخداد، پژوهش، مصاحبه، داده، فناوری یا تغییر محیطی که می‌تواند نشانه‌ای از یک تغییر یا مسئله مرتبط با تداوم باشد.","یک پاسخ، قابلیت، معماری، رفتار یا رویکرد تکرارشونده و قابل‌استفاده که از بررسی چند Signal مرتبط در مواجهه با یک مسئله یا ریسک تداوم کشف می‌شود.","نیروی تغییر، فشار، انتظار یا وضعیت زمینه‌ای که توضیح می‌دهد چرا یک Continuity Pattern در حال ظهور یا اهمیت یافتن است.","اطلاعات و منابعی که وجود، دامنه یا اعتبار یک Pattern را پشتیبانی می‌کنند. Counter-Evidence می‌تواند آن را محدود یا به چالش بکشد.","وضعیتی که در آن ریسک‌های مؤثر بر تداوم شناسایی، پوشش داده و تحت کنترل نگه داشته شده‌اند."],"subsections":[{"title":"Domain — دامین","body":"یکی از ۱۶ حوزه MECE تداوم که Patternهای مرتبط با یک بُعد مشخص از Continuity در آن سازمان‌دهی می‌شوند."},{"title":"Signal — سیگنال","body":"یک مشاهده مشخص و قابل ردیابی از رخداد، پژوهش، مصاحبه، داده، فناوری یا تغییر محیطی که می‌تواند نشانه‌ای از یک تغییر یا مسئله مرتبط با تداوم باشد."},{"title":"Pattern — پترن","body":"یک پاسخ، قابلیت، معماری، رفتار یا رویکرد تکرارشونده و قابل‌استفاده که از بررسی چند Signal مرتبط در مواجهه با یک مسئله یا ریسک تداوم کشف می‌شود."},{"title":"Risk Driver — محرک ریسک","body":"نیروی تغییر، فشار، انتظار یا وضعیت زمینه‌ای که توضیح می‌دهد چرا یک Continuity Pattern در حال ظهور یا اهمیت یافتن است."},{"title":"Evidence — شواهد","body":"اطلاعات و منابعی که وجود، دامنه یا اعتبار یک Pattern را پشتیبانی می‌کنند. Counter-Evidence می‌تواند آن را محدود یا به چالش بکشد."},{"title":"Deep Blue State","body":"وضعیتی که در آن ریسک‌های مؤثر بر تداوم شناسایی، پوشش داده و تحت کنترل نگه داشته شده‌اند."}],"listItems":[],"flow":""}},"discovery":{"en":{"label":"04 — PATTERN DISCOVERY","title":"How is a Pattern discovered and added to the Radar?","text":["A signal does not turn into a Pattern through a linear process. A Pattern emerges when multiple related signals reveal a recurring behavior or response.","Signals are first compared and clustered. If a common behavior or response appears repeatedly across multiple sources, a Candidate Pattern is formed. Evidence, counter-evidence, and expert review test it. A validated Pattern is then placed in the appropriate Domain on the Radar."],"subsections":[],"listItems":[],"flow":"Signals -> Cluster -> Candidate Pattern -> Test -> Validate -> Continuity Pattern -> Deep Blue Radar"},"fa":{"label":"04 — کشف Pattern","title":"Pattern چگونه کشف و وارد Radar می‌شود؟","text":["یک Signal طی یک فرایند به Pattern تبدیل نمی‌شود. Pattern زمانی آشکار می‌شود که چند Signal مرتبط، یک رفتار یا پاسخ تکرارشونده را نشان دهند.","Signalها ابتدا مقایسه و خوشه‌بندی می‌شوند. اگر یک رفتار یا پاسخ مشترک در چند منبع تکرار شود، Candidate Pattern شکل می‌گیرد. شواهد، Counter-Evidence و بازبینی خبرگان آن را آزمون می‌کنند. Pattern معتبر سپس در Domain مناسب روی Radar نمایش داده می‌شود."],"subsections":[],"listItems":[],"flow":"Signals -> Cluster -> Candidate Pattern -> Test -> Validate -> Continuity Pattern -> Deep Blue Radar"}},"explorer":{"en":{"label":"05 — RADAR EXPLORER","title":"Explore Deep Blue Radar","text":["Each sector represents a Domain, and each point represents a Continuity Pattern. Select a Domain to view its current patterns. Confidence and Movement should be driven by real data and evidence, so this prototype intentionally avoids fabricated scores."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"05 — RADAR EXPLORER","title":"Deep Blue Radar را کاوش کنید","text":["هر Sector یک Domain است و هر نقطه یک Continuity Pattern. با انتخاب هر Domain، Patternهای فعلی آن را ببینید. Confidence و Movement هر Pattern باید از داده و شواهد واقعی تغذیه شوند؛ در این نمونه عمداً عدد ساختگی نمایش داده نمی‌شود."],"subsections":[],"listItems":[],"flow":""}},"structure":{"en":{"label":"06 — STRUCTURE","title":"16 Domains · 32 Current Patterns","text":["The current Radar contains 16 MECE Domains and 32 Patterns. They represent the current state of the Pattern Library, not a final or mandatory list for every bank or financial organization."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"06 — ساختار","title":"16 Domains · 32 Current Patterns","text":["نسخه فعلی Radar شامل ۱۶ Domain MECE و ۳۲ Pattern است. این‌ها وضعیت فعلی Pattern Library هستند، نه فهرستی نهایی یا الزامی برای همه بانک‌ها و سازمان‌های مالی."],"subsections":[],"listItems":[],"flow":""}},"patternStructure":{"en":{"label":"07 — PATTERN STRUCTURE","title":"What is examined within each Pattern?","text":["A Pattern in Deep Blue Radar is more than a label on the Radar. Each Pattern carries information explaining what has been observed, why it matters, and what evidence supports it.","The signals, sources, and evidence used to discover and assess the Pattern.","The forces of change, pressures, or conditions that explain why the Pattern is emerging or becoming more important.","Technologies, products, or services that may help apply or support the Pattern.","The degree of evidential support for the Pattern and the direction of its change over time. This status should be updated using real signals and evidence."],"subsections":[{"title":"Pattern Description","body":"A precise definition of the Pattern and what it represents in a continuity context."},{"title":"Signals / Evidence","body":"The signals, sources, and evidence used to discover and assess the Pattern."},{"title":"Risk Drivers That Made the Pattern Emerge","body":"The forces of change, pressures, or conditions that explain why the Pattern is emerging or becoming more important."},{"title":"Opportunities","body":"Technologies / Products / Services: Technologies, products, or services that may help apply or support the Pattern."},{"title":"Confidence / Movement","body":"The degree of evidential support for the Pattern and the direction of its change over time. This status should be updated using real signals and evidence."}],"listItems":[],"flow":""},"fa":{"label":"07 — ساختار هر Pattern","title":"داخل هر Pattern چه چیزی بررسی می‌شود؟","text":["Pattern در Deep Blue Radar فقط یک عنوان روی Radar نیست. برای هر Pattern اطلاعاتی نگهداری می‌شود که توضیح می‌دهد چه چیزی دیده شده، چرا Pattern اهمیت یافته و با چه شواهدی پشتیبانی می‌شود.","Signalها، منابع و شواهدی که در کشف و بررسی Pattern مورد استفاده قرار گرفته‌اند.","نیروهای تغییر، فشارها یا شرایطی که توضیح می‌دهند چرا این Pattern در حال ظهور یا اهمیت یافتن است.","فناوری‌ها، محصولات یا سرویس‌هایی که می‌توانند برای به‌کارگیری یا پشتیبانی از Pattern مورد بررسی قرار گیرند.","میزان پشتیبانی شواهد از Pattern و جهت تغییر آن در طول زمان. این وضعیت باید با Signalها و Evidence واقعی به‌روزرسانی شود."],"subsections":[{"title":"Pattern Description","body":"تعریف دقیق Pattern و آنچه در زمینه Continuity بیان می‌کند."},{"title":"Signals / Evidence","body":"Signalها، منابع و شواهدی که در کشف و بررسی Pattern مورد استفاده قرار گرفته‌اند."},{"title":"Risk Drivers That Made the Pattern Emerge","body":"نیروهای تغییر، فشارها یا شرایطی که توضیح می‌دهند چرا این Pattern در حال ظهور یا اهمیت یافتن است."},{"title":"Opportunities","body":"Technologies / Products / Services: فناوری‌ها، محصولات یا سرویس‌هایی که می‌توانند برای به‌کارگیری یا پشتیبانی از Pattern مورد بررسی قرار گیرند."},{"title":"Confidence / Movement","body":"میزان پشتیبانی شواهد از Pattern و جهت تغییر آن در طول زمان. این وضعیت باید با Signalها و Evidence واقعی به‌روزرسانی شود."}],"listItems":[],"flow":""}},"example":{"en":{"section":{"label":"08 — EXAMPLE","title":"An example Pattern","text":["DOMAIN 01 · CONTINUITY ARCHITECTURE","Pattern Description","Move from monolithic banking systems to decomposed services, microservices, modular recovery domains, and service-by-service survivability.","Opportunities: Technologies / Products / Services","Confidence / Movement","Determining this Pattern’s Confidence and Movement requires real signal data and periodic review to be connected to the Radar."],"subsections":[],"listItems":[],"flow":""},"item":{"domain":"DOMAIN 01 · CONTINUITY ARCHITECTURE","title":"Modular Survivability Architecture","description":"Move from monolithic banking systems to decomposed services, microservices, modular recovery domains, and service-by-service survivability.","note":"Determining this Pattern’s Confidence and Movement requires real signal data and periodic review to be connected to the Radar."},"riskDrivers":["Monolithic core-banking failures","Inability to isolate one failed service","Broad customer disruption from narrow technical defects","Cascade failure across tightly coupled systems"],"opportunities":["Microservices","API gateways","Service mesh","Domain-driven architecture","Active-active architecture","Cloud-native platforms","Event-driven architecture"]},"fa":{"section":{"label":"08 — نمونه","title":"یک نمونه از Pattern","text":["DOMAIN 01 · CONTINUITY ARCHITECTURE","Pattern Description","Move from monolithic banking systems to decomposed services, microservices, modular recovery domains, and service-by-service survivability.","Opportunities: Technologies / Products / Services","Confidence / Movement","برای تعیین Confidence و Movement این Pattern باید داده واقعی Signalها و بازبینی‌های دوره‌ای به Radar متصل شود."],"subsections":[],"listItems":[],"flow":""},"item":{"domain":"DOMAIN 01 · CONTINUITY ARCHITECTURE","title":"Modular Survivability Architecture","description":"Move from monolithic banking systems to decomposed services, microservices, modular recovery domains, and service-by-service survivability.","note":"برای تعیین Confidence و Movement این Pattern باید داده واقعی Signalها و بازبینی‌های دوره‌ای به Radar متصل شود."},"riskDrivers":["Monolithic core-banking failures","Inability to isolate one failed service","Broad customer disruption from narrow technical defects","Cascade failure across tightly coupled systems"],"opportunities":["Microservices","API gateways","Service mesh","Domain-driven architecture","Active-active architecture","Cloud-native platforms","Event-driven architecture"]}},"evidence":{"en":{"label":"09 — Evidence","title":"Evidence and Counter-Evidence","text":["Information that weakens, limits, or challenges a Pattern and helps define the boundaries of its validity more precisely.","Deep Blue Radar does not collect only confirming evidence. Evidence and counter-evidence are both part of validation and may strengthen, refine, narrow, or trigger a review of a Pattern."],"subsections":[{"title":"Evidence","body":"Information and sources that support the existence, scope, or credibility of a Pattern."},{"title":"Counter-Evidence","body":"Information that weakens, limits, or challenges a Pattern and helps define the boundaries of its validity more precisely."}],"listItems":[],"flow":""},"fa":{"label":"09 — Evidence","title":"Evidence و Counter-Evidence","text":["اطلاعاتی که Pattern را تضعیف، محدود یا به چالش می‌کشند و کمک می‌کنند محدوده اعتبار آن دقیق‌تر شود.","Deep Blue Radar فقط شواهد تأییدکننده را جمع نمی‌کند. Evidence و Counter-Evidence هر دو بخشی از اعتبارسنجی‌اند و می‌توانند باعث تقویت، اصلاح، محدود شدن یا بازبینی یک Pattern شوند."],"subsections":[{"title":"Evidence — شواهد","body":"اطلاعات و منابعی که از وجود، دامنه یا اعتبار یک Pattern حمایت می‌کنند."},{"title":"Counter-Evidence — شواهد مخالف","body":"اطلاعاتی که Pattern را تضعیف، محدود یا به چالش می‌کشند و کمک می‌کنند محدوده اعتبار آن دقیق‌تر شود."}],"listItems":[],"flow":""}},"dynamics":{"en":{"label":"10 — PATTERN DYNAMICS","title":"Not all Patterns have the same level of confidence or movement","text":["A Pattern may be newly emerging or supported by multiple independent sources. New evidence may also show that a Pattern is growing, stable, or weakening. Confidence and Movement are two separate attributes.","The direction of change in the Pattern over time as new signals and evidence arrive.","The Radar is never finished. New Patterns may be discovered, while existing Patterns may be strengthened, weakened, split, merged, or redefined."],"subsections":[{"title":"Confidence","body":"The current level of confidence in the Pattern based on the quality, diversity, and recurrence of evidence."},{"title":"Movement","body":"The direction of change in the Pattern over time as new signals and evidence arrive."}],"listItems":[],"flow":""},"fa":{"label":"10 — پویایی Pattern","title":"همه Patternها اعتبار و حرکت یکسانی ندارند","text":["یک Pattern ممکن است تازه در حال ظهور باشد یا توسط منابع مستقل متعدد پشتیبانی شده باشد. از طرف دیگر، شواهد تازه می‌توانند نشان دهند یک Pattern در حال رشد، پایدار یا در حال تضعیف است. Confidence و Movement دو ویژگی جدا هستند.","جهت تغییر Pattern در طول زمان با ورود Signalها و Evidence جدید.","Radar تمام‌شده نیست. Patternهای جدید می‌توانند کشف شوند و Patternهای موجود می‌توانند تقویت، تضعیف، Split، Merge یا بازتعریف شوند."],"subsections":[{"title":"Confidence","body":"میزان اتکای فعلی به Pattern بر اساس کیفیت، تنوع و تکرار شواهد."},{"title":"Movement","body":"جهت تغییر Pattern در طول زمان با ورود Signalها و Evidence جدید."}],"listItems":[],"flow":""}},"organization":{"en":{"label":"11 — YOUR ORGANIZATION","title":"Not all 32 Patterns will be equally relevant or valid for every bank or organization","text":["The relevance and validity of each Pattern for a bank or financial organization depends on its real operating context. Critical services, architecture, dependencies, risks, capabilities, ecosystem, and regulatory requirements may give each organization a different mix, weighting, and priority of Patterns.","A subset of Patterns relevant to the bank or organization’s operating reality, with different weight, confidence, and importance, plus any new Patterns that may emerge from its own signals."],"subsections":[{"title":"Shared Pattern Library","body":"The set of Patterns discovered so far from multiple signals and maintained within the Shared Deep Blue Radar."},{"title":"Organization-Specific Radar","body":"A subset of Patterns relevant to the bank or organization’s operating reality, with different weight, confidence, and importance, plus any new Patterns that may emerge from its own signals."}],"listItems":[],"flow":""},"fa":{"label":"11 — سازمان شما","title":"ممکن است همه ۳۲ Pattern برای همه بانک‌ها و سازمان‌ها به یک اندازه معتبر و مرتبط نباشند","text":["اعتبار و ارتباط هر Pattern برای یک بانک یا سازمان مالی به شرایط واقعی همان مجموعه بستگی دارد. نوع خدمات حیاتی، معماری، وابستگی‌ها، ریسک‌ها، قابلیت‌ها، اکوسیستم و الزامات رگولاتوری می‌توانند باعث شوند Radar هر بانک ترکیب، وزن و اولویت متفاوتی داشته باشد.","زیرمجموعه‌ای از Patternهای مرتبط با واقعیت عملیاتی بانک یا سازمان، با وزن، اعتبار و اهمیت متفاوت؛ به‌علاوه Patternهای جدیدی که ممکن است از Signalهای همان مجموعه کشف شوند."],"subsections":[{"title":"Pattern Library مشترک","body":"مجموعه Patternهایی که تا امروز از Signalهای مختلف کشف و در Shared Deep Blue Radar نگهداری شده‌اند."},{"title":"Radar اختصاصی بانک یا سازمان","body":"زیرمجموعه‌ای از Patternهای مرتبط با واقعیت عملیاتی بانک یا سازمان، با وزن، اعتبار و اهمیت متفاوت؛ به‌علاوه Patternهای جدیدی که ممکن است از Signalهای همان مجموعه کشف شوند."}],"listItems":[],"flow":""}},"stayBlue":{"en":{"label":"12 — STAY DEEP BLUE","title":"The goal is to keep the bank or organization in a Deep Blue state","text":["Deep Blue means that the risks affecting the continuity of critical services have been identified, addressed, and kept under control."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"12 — STAY DEEP BLUE","title":"هدف، نگه داشتن بانک یا سازمان در وضعیت Deep Blue است","text":["Deep Blue یعنی ریسک‌های مؤثر بر تداوم خدمات حیاتی بانک یا سازمان شناسایی، پوشش داده و تحت کنترل نگه داشته شده‌اند."],"subsections":[],"listItems":[],"flow":""}},"contribute":{"en":{"label":"13 — CONTRIBUTE","title":"Contribute to the development of Deep Blue Radar","text":["The Radar stays alive through new signals and evidence. If you have an observation, experience, or source that can clarify a Pattern, you can submit it to the House of Technocrats for review.","Submission does not mean automatic publication. Every item must be reviewed and validated before entering the Radar."],"subsections":[],"listItems":["A traceable signal or incident","Evidence or counter-evidence","Real experience of disruption or recovery","A case that strengthens or challenges a Pattern","A proposed new Pattern based on multiple related signals"],"flow":""},"fa":{"label":"13 — مشارکت","title":"در توسعه Deep Blue Radar مشارکت کنید","text":["Radar با Signalها و شواهد تازه زنده می‌ماند. اگر مشاهده، تجربه یا منبعی دارید که می‌تواند یک Pattern را روشن‌تر کند، می‌توانید آن را برای بررسی در اختیار House of Technocrats قرار دهید.","ارسال به معنی انتشار خودکار نیست. هر مورد باید پیش از ورود به Radar بررسی و اعتبارسنجی شود."],"subsections":[],"listItems":["Signal یا رخداد قابل ردیابی","Evidence یا Counter-Evidence","تجربه واقعی از اختلال یا بازیابی","نمونه‌ای که یک Pattern را تقویت یا به چالش می‌کشد","پیشنهاد یک Pattern جدید بر اساس چند Signal مرتبط"],"flow":""}},"closing":{"en":{"label":"Section 15","title":"See the Patterns, build your Radar, and stay Deep Blue","text":["The Shared Radar provides collective intelligence. Each bank or financial organization’s own Radar shows which Patterns matter most to its operating reality and continuity risks."],"subsections":[],"listItems":[],"flow":""},"fa":{"label":"Section 15","title":"Patternها را ببینید، Radar خود را بسازید و Deep Blue بمانید","text":["Shared Radar دانش مشترک را نشان می‌دهد؛ Radar اختصاصی هر بانک یا سازمان مالی مشخص می‌کند کدام Patternها برای واقعیت عملیاتی و ریسک‌های تداوم آن اهمیت دارند."],"subsections":[],"listItems":[],"flow":""}},"patternDetailFields":[{"number":"01","name":"Pattern Description"},{"number":"02","name":"Signals / Evidence"},{"number":"03","name":"Risk Drivers That Made the Pattern Emerge"},{"number":"04","name":"Opportunities: Technologies / Products / Services"},{"number":"05","name":"Confidence / Movement"}],"confidenceOptions":["Emerging","Supported","Established"],"movementOptions":["Growing","Stable","Weakening"],"formula":"Known Risks + Relevant Patterns + Active Capabilities + Continuous Monitoring = DEEP BLUE"};
    var selected = radarCategories[0];
    var radarDots = radarCategories.map(function (category, categoryIndex) {
      return category.patterns.map(function (pattern, patternIndex) {
        var signal = radarSignalFor(categoryIndex, patternIndex);
        var freshnessEn = signal.freshness === "new" ? "Newer signal" : "Established signal";
        var freshnessFa = signal.freshness === "new" ? "نشانهٔ تازه‌تر" : "نشانهٔ تثبیت‌شده";
        return '<button class="radar-pattern-dot is-' + signal.freshness + '" type="button" style="--dot-size:' + signal.size.toFixed(1) + 'px" data-category-index="' + categoryIndex + '" data-pattern-index="' + patternIndex + '" data-angle="' + signal.angle.toFixed(2) + '" data-radius="' + signal.radius.toFixed(3) + '" data-score="' + signal.score + '" data-freshness="' + signal.freshness + '" data-freshness-en="' + freshnessEn + '" data-freshness-fa="' + freshnessFa + '" aria-label="' + escapeHtml(pattern[0]) + '" data-en-aria-label="' + escapeHtml(pattern[0]) + '" data-fa-aria-label="' + escapeHtml(pattern[1]) + '"><span class="sr-only" data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</span></button>';
      }).join("");
    }).join("");
    var radarSectorButtons = radarCategories.map(function (category, index) {
      var number = String(index + 1).padStart(2, "0");
      return '<button class="radar-sector-button' + (index === 0 ? ' is-active' : '') + '" type="button" data-category-index="' + index + '" aria-label="' + escapeHtml(category.en) + '" data-en-aria-label="' + escapeHtml(category.en) + '" data-fa-aria-label="' + escapeHtml(category.fa) + '"><span data-en="' + number + '" data-fa="' + persianDigits(number) + '">' + number + '</span></button>';
    }).join("");
    var initialPatterns = selected.patterns.map(function (pattern, patternIndex) {
      var patternNumber = pattern[3] || "";
      return '<button class="radar-live-pattern' + (patternIndex === 0 ? ' is-active' : '') + '" type="button" data-pattern-index="' + patternIndex + '"><span class="dbr-label" data-en="PATTERN ' + escapeHtml(patternNumber) + '" data-fa="PATTERN ' + escapeHtml(patternNumber) + '">PATTERN ' + escapeHtml(patternNumber) + '</span><strong data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</strong></button>';
    }).join("");

    function textAttrs(en, fa) {
      return ' data-en="' + escapeHtml(en || "") + '" data-fa="' + escapeHtml(fa || en || "") + '"';
    }
    function p(en, fa) {
      return '<p' + textAttrs(en, fa) + '>' + escapeHtml(en) + '</p>';
    }
    function headingBlock(section) {
      return '<p class="dbr-label"' + textAttrs(section.en.label, section.fa.label) + '>' + escapeHtml(section.en.label) + '</p><h3' + textAttrs(section.en.title, section.fa.title) + '>' + escapeHtml(section.en.title) + '</h3>';
    }
    function statMarkup(stat) {
      return '<span' + textAttrs(stat, stat) + '>' + escapeHtml(stat) + '</span>';
    }
    function conceptMarkup(item, index) {
      var faItem = content.concepts.fa.subsections[index] || item;
      return '<article class="radar-definition-mini-card"><h3' + textAttrs(item.title, faItem.title) + '>' + escapeHtml(item.title) + '</h3><p' + textAttrs(item.body, faItem.body) + '>' + escapeHtml(item.body) + '</p></article>';
    }
    function pairedCardMarkup(item, index, faList) {
      var faItem = faList[index] || item;
      return '<article class="radar-definition-panel"><h4' + textAttrs(item.title, faItem.title) + '>' + escapeHtml(item.title) + '</h4><p' + textAttrs(item.body, faItem.body) + '>' + escapeHtml(item.body) + '</p></article>';
    }
    function patternFieldMarkup(item, index) {
      var faItem = content.patternStructure.fa.subsections[index] || item;
      return '<article class="radar-definition-mini-card"><span class="radar-field-number dbr-label">' + escapeHtml(item.title.split(" ")[0] === "Opportunities" ? "04" : String(index + 1).padStart(2, "0")) + '</span><h3' + textAttrs(item.title, faItem.title) + '>' + escapeHtml(item.title) + '</h3><p' + textAttrs(item.body, faItem.body) + '>' + escapeHtml(item.body) + '</p></article>';
    }
    function listItems(items, faItems) {
      return '<ul class="radar-definition-list">' + items.map(function (item, index) {
        return '<li' + textAttrs(item, faItems[index] || item) + '>' + escapeHtml(item) + '</li>';
      }).join("") + '</ul>';
    }
    function closingParagraph() {
      return '<p class="radar-closing-copy"><span data-en="The Shared Radar provides collective intelligence. Each bank or financial" data-fa="Shared Radar دانش مشترک را نشان می‌دهد؛">The Shared Radar provides collective intelligence. Each bank or financial</span><br><span data-en="organization’s own Radar shows which Patterns matter most to its operating" data-fa="Radar اختصاصی هر بانک یا سازمان مالی مشخص می‌کند">organization’s own Radar shows which Patterns matter most to its operating</span><br><span data-en="reality and continuity risks." data-fa="کدام Patternها برای واقعیت عملیاتی و ریسک‌های تداوم آن اهمیت دارند.">reality and continuity risks.</span></p>';
    }
    function noteP(en, fa) {
      return '<p class="radar-definition-card-note"' + textAttrs(en, fa) + '>' + escapeHtml(en) + '</p>';
    }
    function stayBlueP(en, fa) {
      return '<p><span data-en="Deep Blue means that the risks affecting the continuity of critical services have been " data-fa="Deep Blue یعنی ریسک‌های مؤثر بر تداوم خدمات حیاتی بانک یا سازمان ">' + escapeHtml("Deep Blue means that the risks affecting the continuity of critical services have been ") + '</span><strong data-en="identified, addressed, and kept under control." data-fa="شناسایی، پوشش داده و تحت کنترل نگه داشته شده‌اند.">identified, addressed, and kept under control.</strong></p>';
    }
    function formulaMarkup() {
      var enFormula = "Known Risks + Relevant Patterns + Active Capabilities + Continuous Monitoring =";
      var faFormula = "Known Risks + Relevant Patterns + Active Capabilities + Continuous Monitoring =";
      return '<div class="formula"><div class="formula-line"><span' + textAttrs(enFormula, faFormula) + '>' + escapeHtml(enFormula) + '</span><strong data-en="DEEP BLUE" data-fa="DEEP BLUE">DEEP BLUE</strong></div></div>';
    }
    function splitFlow(flow) {
      return flow.split(/\s*->\s*/);
    }
    function flowMarkup(enFlow, faFlow) {
      var enItems = splitFlow(enFlow);
      var faItems = splitFlow(faFlow);
      return '<div class="radar-definition-flow-strip">' + enItems.map(function (item, index) {
        var arrow = index < enItems.length - 1 ? '<i></i>' : '';
        return '<span' + textAttrs(item, faItems[index] || item) + '>' + escapeHtml(item) + '</span>' + arrow;
      }).join("") + '</div>';
    }
    function domainCardMarkup(category, index) {
      var number = String(index + 1).padStart(2, "0");
      var patternItems = category.patterns.map(function (pattern) { return '<li><span class="dbr-label">' + escapeHtml(pattern[3]) + '</span><strong data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</strong></li>'; }).join("");
      return '<a class="radar-category-card glass-card" href="' + categoryLink(category) + '" data-search="' + escapeHtml([category.en, category.fa, category.enDescription, category.faDescription, category.patterns.map(function (pattern) { return pattern[0]; }).join(" ")].join(" ").toLowerCase()) + '" data-category="' + escapeHtml(category.id) + '" data-order="' + index + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><div class="radar-category-card-copy"><span class="radar-category-number dbr-label"><span data-en="' + number + '" data-fa="' + persianDigits(number) + '">' + number + '</span><small data-en="/ 16" data-fa="از ۱۶">/ 16</small></span><h3' + textAttrs(category.en, category.fa) + '>' + escapeHtml(category.en) + '</h3><p' + textAttrs(category.enDescription, category.faDescription) + '>' + escapeHtml(category.enDescription) + '</p><ul class="radar-category-patterns">' + patternItems + '</ul><span class="radar-card-open" aria-hidden="true">' + icon("arrow") + '</span></div></a>';
    }

    return [
      '<section class="inner-section radar-definition-v2 radar-definition-rich" id="radar-definition" data-chamfer="" data-radius="12">',
      '<article class="radar-definition-hero-copy radar-definition-reference-hero"><p class="dbr-label"' + textAttrs(content.hero.en.label, content.hero.fa.label) + '>' + escapeHtml(content.hero.en.label) + '</p><h2' + textAttrs(content.hero.en.title, content.hero.fa.title) + '>' + escapeHtml(content.hero.en.title) + '</h2>' + p(content.hero.en.text[0], content.hero.fa.text[0]) + '<div class="radar-metrics radar-definition-metrics">' + content.hero.stats.map(statMarkup).join("") + '</div><a class="button button-primary radar-definition-jump" href="#interactive-radar" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span' + textAttrs("Explore Deep Blue Radar", "کاوش در Deep Blue Radar") + '>Explore Deep Blue Radar</span>' + icon("arrow") + '</a></article>',
      '<article class="radar-definition-panel radar-definition-reference-section">' + headingBlock(content.definition) + content.definition.en.text.slice(0, 3).map(function (line, index) { return p(line, content.definition.fa.text[index]); }).join("") + '<p class="radar-definition-callout"' + textAttrs(content.definition.en.text[3], content.definition.fa.text[3]) + '>' + escapeHtml(content.definition.en.text[3]) + '</p></article>',
      '<div class="radar-definition-reference-section">' + headingBlock(content.levels) + '<div class="radar-definition-duo-grid">' + content.levels.en.subsections.map(function (item, index) { return pairedCardMarkup(item, index, content.levels.fa.subsections); }).join("") + '</div><p class="radar-definition-callout"' + textAttrs(content.levels.en.text[1], content.levels.fa.text[1]) + '>' + escapeHtml(content.levels.en.text[1]) + '</p></div>',
      '<div class="radar-definition-reference-section">' + headingBlock(content.concepts) + '<div class="radar-definition-card-grid">' + content.concepts.en.subsections.map(conceptMarkup).join("") + '</div></div>',
      '<div class="radar-definition-reference-section">' + headingBlock(content.discovery) + p(content.discovery.en.text[0], content.discovery.fa.text[0]) + flowMarkup(content.discovery.en.flow, content.discovery.fa.flow) + p(content.discovery.en.text[1], content.discovery.fa.text[1]) + '</div>',
      '</section>',
      '<section class="inner-section radar-interactive-section" id="interactive-radar" data-chamfer="" data-radius="12"><div class="radar-section-head"><div>' + headingBlock(content.explorer) + p(content.explorer.en.text[0], content.explorer.fa.text[0]) + '</div><div class="radar-live-status" aria-live="polite"><span><b class="radar-status-coverage">16 / 16</b><small data-en="Domains" data-fa="Domain">Domains</small></span><span><b class="radar-status-signals">32</b><small data-en="Current Patterns" data-fa="Current Patterns">Current Patterns</small></span><span><b data-en="NO FAKE SCORES" data-fa="بدون امتیاز ساختگی">NO FAKE SCORES</b><small data-en="Confidence needs evidence" data-fa="Confidence نیازمند شواهد است">Confidence needs evidence</small></span></div></div><div class="radar-live-layout"><div class="radar-canvas-stage"><canvas class="radar-interactive-canvas" aria-label="Interactive Deep Blue Radar with 16 Domains and 32 Pattern signals" data-en-aria-label="Interactive Deep Blue Radar with 16 Domains and 32 Pattern signals" data-fa-aria-label="رادار تعاملی دیپ‌بلو با ۱۶ Domain و ۳۲ Pattern"></canvas><div class="radar-sector-buttons">' + radarSectorButtons + '</div><div class="radar-pattern-dots">' + radarDots + '</div><div class="radar-canvas-legend"><span><i class="is-category"></i><b data-en="Domain sector" data-fa="قطاع Domain">Domain sector</b></span><span><i class="is-pattern"></i><b data-en="Continuity Pattern" data-fa="Continuity Pattern">Continuity Pattern</b></span></div></div><aside class="radar-live-detail glass-card" data-chamfer="tr" data-cut="28" data-radius="10" data-fillet="9"><div class="radar-live-detail-head"><span class="radar-live-number" data-en="01" data-fa="۰۱">01</span></div><div class="radar-live-name-block"><p class="dbr-label radar-live-title-label" data-en="Domain Name" data-fa="نام Domain">Domain Name</p><h3 class="radar-live-title"' + textAttrs(selected.en, selected.fa) + '>' + escapeHtml(selected.en) + '</h3></div><div class="radar-live-pattern-name" hidden><p class="dbr-label" data-en="Pattern Name" data-fa="نام Pattern">Pattern Name</p><strong class="radar-live-pattern-heading"' + textAttrs(selected.patterns[0][0], selected.patterns[0][1]) + '>' + escapeHtml(selected.patterns[0][0]) + '</strong></div><p class="radar-live-description"' + textAttrs(selected.enDescription, selected.faDescription) + '>' + escapeHtml(selected.enDescription) + '</p><div class="radar-live-patterns">' + initialPatterns + '</div><div class="radar-live-selection"><span class="dbr-label" data-en="PATTERN SIGNAL" data-fa="نشانهٔ Pattern">PATTERN SIGNAL</span><p class="radar-live-pattern-copy" data-en="This signal shows how the selected Pattern makes continuity observable inside the Domain." data-fa="این نشانه نشان می‌دهد Pattern انتخاب‌شده چگونه تداوم را درون این Domain قابل مشاهده می‌کند.">This signal shows how the selected Pattern makes continuity observable inside the Domain.</p></div><a class="button button-primary radar-live-open" href="' + categoryLink(selected) + '" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="See Domain Details" data-fa="دیدن جزئیات Domain">See Domain Details</span>' + icon("arrow") + '</a></aside></div></section>',
      '<section class="inner-section radar-categories-section" id="categories" data-chamfer="" data-radius="12"><div class="radar-explorer-heading"><div>' + headingBlock(content.structure) + p(content.structure.en.text[0], content.structure.fa.text[0]) + '</div><label class="radar-filter"><span data-en="Search Domains & Patterns" data-fa="جست‌وجوی Domain و Pattern">Search Domains & Patterns</span><input class="radar-category-search" type="search" data-en-placeholder="Search a Domain or Pattern..." data-fa-placeholder="جست‌وجوی Domain یا Pattern..." placeholder="Search a Domain or Pattern..."></label></div><div class="radar-category-card-grid directory-results" aria-label="16 Radar Domains">' + radarCategories.map(domainCardMarkup).join("") + '</div><p class="radar-filter-count dbr-label" aria-live="polite"></p><div class="empty-state radar-category-empty" hidden data-en="No Domains or Patterns match this search." data-fa="Domain یا Pattern با این جست‌وجو پیدا نشد.">No Domains or Patterns match this search.</div></section>',
      '<section class="inner-section radar-definition-reference-section radar-pattern-structure-section" id="pattern-structure" data-chamfer="" data-radius="12">' + headingBlock(content.patternStructure) + p(content.patternStructure.en.text[0], content.patternStructure.fa.text[0]) + '<div class="radar-definition-card-grid radar-pattern-field-grid">' + content.patternStructure.en.subsections.map(patternFieldMarkup).join("") + '</div></section>',
      '<section class="inner-section radar-definition-reference-section radar-example-section" id="pattern-example" data-chamfer="" data-radius="12">' + headingBlock(content.example.en.section ? { en: content.example.en.section, fa: content.example.fa.section } : content.example) + '<article class="pattern-card paper-card radar-example-pattern-card" data-chamfer="br" data-cut="32" data-radius="12" data-fillet="10"><p class="domain-label"' + textAttrs(content.example.en.item.domain, content.example.fa.item.domain) + '>' + escapeHtml(content.example.en.item.domain) + '</p><h3' + textAttrs(content.example.en.item.title, content.example.fa.item.title) + '>' + escapeHtml(content.example.en.item.title) + '</h3><p class="pc-sub" data-en="Pattern Description" data-fa="Pattern Description">Pattern Description</p><p class="quote"' + textAttrs(content.example.en.item.description, content.example.fa.item.description) + '>' + escapeHtml(content.example.en.item.description) + '</p><div class="pc-grid"><div><p class="pc-sub" data-en="Risk Drivers That Made the Pattern Emerge" data-fa="Risk Drivers That Made the Pattern Emerge">Risk Drivers That Made the Pattern Emerge</p>' + listItems(content.example.en.riskDrivers, content.example.fa.riskDrivers) + '</div><div><p class="pc-sub" data-en="Opportunities: Technologies / Products / Services" data-fa="Opportunities: Technologies / Products / Services">Opportunities: Technologies / Products / Services</p>' + listItems(content.example.en.opportunities, content.example.fa.opportunities) + '</div></div><p class="pc-sub" data-en="Confidence / Movement" data-fa="Confidence / Movement">Confidence / Movement</p><p class="radar-example-note"' + textAttrs(content.example.en.item.note, content.example.fa.item.note) + '>' + escapeHtml(content.example.en.item.note) + '</p></article></section>',
      '<section class="inner-section radar-definition-reference-section" id="evidence" data-chamfer="" data-radius="12">' + headingBlock(content.evidence) + '<div class="radar-definition-duo-grid">' + content.evidence.en.subsections.map(function (item, index) { return pairedCardMarkup(item, index, content.evidence.fa.subsections); }).join("") + '</div>' + p(content.evidence.en.text[1], content.evidence.fa.text[1]) + '</section>',
      '<section class="inner-section radar-definition-reference-section" id="pattern-dynamics" data-chamfer="" data-radius="12">' + headingBlock(content.dynamics) + p(content.dynamics.en.text[0], content.dynamics.fa.text[0]) + '<div class="radar-definition-duo-grid">' + content.dynamics.en.subsections.map(function (item, index) { return pairedCardMarkup(item, index, content.dynamics.fa.subsections); }).join("") + '</div>' + noteP(content.dynamics.en.text[2], content.dynamics.fa.text[2]) + '</section>',
      '<section class="inner-section radar-definition-reference-section" id="your-organization" data-chamfer="" data-radius="12">' + headingBlock(content.organization) + p(content.organization.en.text[0], content.organization.fa.text[0]) + '<div class="radar-definition-duo-grid">' + content.organization.en.subsections.map(function (item, index) { return pairedCardMarkup(item, index, content.organization.fa.subsections); }).join("") + '</div></section>',
      '<section class="inner-section radar-definition-reference-section radar-formula-section" id="stay-deep-blue" data-chamfer="" data-radius="12">' + headingBlock(content.stayBlue) + stayBlueP(content.stayBlue.en.text[0], content.stayBlue.fa.text[0]) + formulaMarkup() + '</section>',
      '<section class="inner-section radar-participation-section" id="radar-participate" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10"><div class="radar-participation-copy">' + headingBlock(content.contribute) + p(content.contribute.en.text[0], content.contribute.fa.text[0]) + listItems(content.contribute.en.listItems, content.contribute.fa.listItems) + p(content.contribute.en.text[1], content.contribute.fa.text[1]) + '<div class="radar-participation-actions"><a class="button button-primary" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Submit a Signal or Evidence" data-fa="ارسال Signal یا Evidence">Submit a Signal or Evidence</span></a><a class="button button-outline" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Give Feedback on a Pattern" data-fa="بازخورد درباره Pattern">Give Feedback on a Pattern</span>' + icon("arrow") + '</a></div></div></section>',
      '<section class="inner-section paper-card radar-definition-reference-section radar-closing-section" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10"><h2' + textAttrs(content.closing.en.title, content.closing.fa.title) + '>' + escapeHtml(content.closing.en.title) + '</h2>' + closingParagraph() + '<div class="radar-closing-actions"><a class="button button-primary" href="#interactive-radar" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Explore Deep Blue Radar" data-fa="کاوش در Deep Blue Radar">Explore Deep Blue Radar</span></a><a class="button button-outline" href="#categories" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="View All Patterns" data-fa="مشاهده همه Patternها">View All Patterns</span></a></div></section>'
    ].join("");
  }

  function patternCardDetails(category, pattern, patternIndex) {
    var slug = patternSlug(pattern);
    var details = {
      "modular-survivability-architecture": {
        image: "Assets/pattern-modular-survivability.png",
        enAlt: "Modular service operators inside a continuity architecture environment",
        faAlt: "اپراتورهای سرویس ماژولار در محیط معماری تداوم",
        enSubtitle: "Move from monolithic banking systems to decomposed services, modular recovery domains and service-by-service survivability.",
        faSubtitle: "حرکت از سامانه‌های یکپارچهٔ بانکی به سرویس‌های تجزیه‌شده، دامنه‌های بازیابی ماژولار و بقاپذیری سرویس‌به‌سرویس.",
        tags: [["Microservices", "میکروسرویس"], ["Service mesh", "سرویس‌مش"], ["Active-active", "اکتیو-اکتیو"]]
      },
      "path-and-infrastructure-diversity": {
        image: "Assets/pattern-path-infrastructure.png",
        enAlt: "Infrastructure operators checking an alternate banking route",
        faAlt: "اپراتورهای زیرساخت در حال بررسی مسیر جایگزین بانکی",
        enSubtitle: "Design alternative routes, nodes, data centers, regions and channels so service survives partial infrastructure failure.",
        faSubtitle: "مسیرها، گره‌ها، مراکز داده، ناحیه‌ها و کانال‌های جایگزین طراحی کنید تا سرویس از خرابی جزئی زیرساخت عبور کند.",
        tags: [["Multi-region", "چندنقطه‌ای"], ["SD-WAN", "SD-WAN"], ["Replication", "تکثیر داده"]]
      }
    };
    return details[slug] || {
      image: patternIndex % 2 ? "Assets/pattern-path-infrastructure.png" : "Assets/pattern-modular-survivability.png",
      enAlt: pattern[0] + " pattern image",
      faAlt: "تصویر الگوی " + pattern[1],
      enSubtitle: "A continuity Pattern inside " + category.en + ", maintained with evidence, contributors and management guidance.",
      faSubtitle: "یک الگوی تداوم در " + category.fa + " که با شواهد، مشارکت‌کنندگان و راهنمایی مدیریتی نگهداری می‌شود.",
      tags: [["Evidence", "شواهد"], ["Continuity", "تداوم"], ["Review", "بازبینی"]]
    };
  }

  function patternCardMarkup(category, pattern, patternIndex) {
    var details = patternCardDetails(category, pattern, patternIndex);
    var patternNumber = String(patternIndex + 1).padStart(2, "0");
    var faPatternNumber = persianDigits(patternNumber);
    var tagMarkup = details.tags.map(function (tag) {
      return '<span data-en="' + escapeHtml(tag[0]) + '" data-fa="' + escapeHtml(tag[1]) + '">' + escapeHtml(tag[0]) + '</span>';
    }).join("");
    var searchText = [
      category.en,
      category.fa,
      pattern[0],
      pattern[1],
      details.enSubtitle,
      details.faSubtitle,
      details.tags.map(function (tag) { return tag.join(" "); }).join(" ")
    ].join(" ").toLowerCase();
    return [
      '<a class="record-pattern-card record-pattern-card-visual glass-card" href="' + patternLink(category, pattern) + '" data-search="' + escapeHtml(searchText) + '" data-chamfer="tr" data-cut="26" data-radius="10" data-fillet="8">',
      '<figure class="record-pattern-image"><img src="' + escapeHtml(details.image) + '" alt="' + escapeHtml(details.enAlt) + '" data-fa-alt="' + escapeHtml(details.faAlt) + '" loading="lazy"></figure>',
      '<div class="record-pattern-copy"><div class="record-pattern-title-row"><span class="record-pattern-number"><strong data-en="' + patternNumber + '" data-fa="' + faPatternNumber + '">' + patternNumber + '</strong><small data-en="Pattern" data-fa="الگو">Pattern</small></span><h3 data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</h3></div>',
      '<p class="record-pattern-subtitle" data-en="' + escapeHtml(details.enSubtitle) + '" data-fa="' + escapeHtml(details.faSubtitle) + '">' + escapeHtml(details.enSubtitle) + '</p>',
      '<div class="record-pattern-tags" aria-label="Pattern tags">' + tagMarkup + '</div><span class="radar-card-open" aria-hidden="true">' + icon("arrow") + '</span></div>',
      '</a>'
    ].join("");
  }

  function categoryRecordMarkup() {
    var category = selectedRadarCategory();
    var index = radarCategories.indexOf(category);
    var number = String(index + 1).padStart(2, "0");
    var faNumber = persianDigits(number);
    var related = radarCategories.filter(function (item) { return item.id !== category.id; }).slice(0, 4);
    return [
      '<div class="record-layout category-record-layout">',
      '<aside class="record-sidebar"><section class="record-side-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="RELATED PEOPLE" data-fa="افراد مرتبط">RELATED PEOPLE</p><div class="record-mini-person"><img src="Assets/people-portrait-01.png" alt="Nima Farzan" data-fa-alt="نیما فرزان"><div><strong data-en="Nima Farzan" data-fa="نیما فرزان">Nima Farzan</strong><span data-en="Technocratic Leader" data-fa="رهبر تکنوکرات">Technocratic Leader</span></div></div><div class="record-mini-person"><img src="Assets/people-portrait-02.png" alt="Leila Rahimi" data-fa-alt="لیلا رحیمی"><div><strong data-en="Leila Rahimi" data-fa="لیلا رحیمی">Leila Rahimi</strong><span data-en="Technocratic Expert" data-fa="متخصص تکنوکرات">Technocratic Expert</span></div></div><a class="text-link" href="people.html"><span data-en="View all people" data-fa="مشاهدهٔ همهٔ افراد">View all people</span>' + icon("arrow") + '</a></section><section class="record-side-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="IN THIS CATEGORY" data-fa="در این دسته‌بندی">IN THIS CATEGORY</p><dl><div><dt data-en="Patterns" data-fa="الگو">Patterns</dt><dd data-en="' + String(category.patterns.length) + '" data-fa="' + persianDigits(category.patterns.length) + '">' + String(category.patterns.length) + '</dd></div><div><dt data-en="Evidence" data-fa="شواهد">Evidence</dt><dd data-en="11" data-fa="۱۱">11</dd></div><div><dt data-en="Contributors" data-fa="مشارکت‌کننده">Contributors</dt><dd data-en="6" data-fa="۶">6</dd></div></dl></section><section class="record-side-card record-side-cta glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><h3 data-en="Suggest evidence" data-fa="پیشنهاد شواهد">Suggest evidence</h3><p data-en="Do you have a signal from your organization?" data-fa="نشانه‌ای از سازمان خودتان دارید؟">Do you have a signal from your organization?</p><a class="button button-outline" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Share a signal" data-fa="اشتراک یک نشانه">Share a signal</span></a></section></aside>',
      '<div class="record-main"><section class="record-hero glass-card" data-chamfer="tr" data-cut="28" data-radius="12" data-fillet="10"><p class="dbr-label" data-en="CATEGORY ' + number + ' OF 16" data-fa="دسته‌بندی ' + faNumber + ' از ۱۶">CATEGORY ' + number + ' OF 16</p><h2 data-en="' + escapeHtml(category.en) + '" data-fa="' + escapeHtml(category.fa) + '">' + escapeHtml(category.en) + '</h2><p data-en="' + escapeHtml(category.enDescription) + '" data-fa="' + escapeHtml(category.faDescription) + '">' + escapeHtml(category.enDescription) + '</p><div class="record-meta"><span data-en="' + String(category.patterns.length) + ' Patterns" data-fa="' + persianDigits(category.patterns.length) + ' الگو">' + String(category.patterns.length) + ' Patterns</span><span data-en="Banking" data-fa="بانکداری">Banking</span><span data-en="Updated 12 Jun 2026" data-fa="به‌روزرسانی ۲۲ خرداد">Updated 12 Jun 2026</span></div><div class="radar-rule-lines" aria-hidden="true"><span></span><span></span><span></span></div></section>',
      '<section class="record-question-panel glass-card" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="WHY THIS CATEGORY MATTERS" data-fa="چرا این دسته‌بندی مهم است">WHY THIS CATEGORY MATTERS</p><ul><li data-en="Which services must never disappear from the customer view?" data-fa="کدام سرویس‌ها نباید از دید مشتری ناپدید شوند؟">Which services must never disappear from the customer view?</li><li data-en="Which shared components can turn one failure into a system event?" data-fa="کدام اجزای مشترک می‌توانند یک خرابی را به رویداد سیستمی تبدیل کنند؟">Which shared components can turn one failure into a system event?</li><li data-en="How wide is the likely blast radius?" data-fa="شعاع اثر محتمل چقدر است؟">How wide is the likely blast radius?</li></ul></section>',
      '<section class="record-pattern-section"><div class="record-section-heading"><p class="dbr-label" data-en="PATTERNS IN THIS CATEGORY" data-fa="الگوهای این دسته‌بندی">PATTERNS IN THIS CATEGORY</p></div><div class="record-pattern-list">' + category.patterns.map(function (pattern, patternIndex) {
        return patternCardMarkup(category, pattern, patternIndex);
      }).join("") + '</div></section>',
      '<section class="record-evidence-section"><p class="dbr-label" data-en="SIGNALS & EVIDENCE FOR THIS CATEGORY" data-fa="نشانه‌ها و شواهد این دسته‌بندی">SIGNALS & EVIDENCE FOR THIS CATEGORY</p><div class="record-evidence-list"><article class="record-evidence-card glass-card" data-chamfer="tr" data-cut="20" data-radius="10" data-fillet="8"><p data-en="Microservice design allows one service to fail without stopping the whole bank." data-fa="طراحی میکروسرویسی اجازه می‌دهد یک سرویس از کار بیفتد بدون آنکه کل بانک بایستد.">Microservice design allows one service to fail without stopping the whole bank.</p><span data-en="Expert interview · Mar 2026" data-fa="مصاحبهٔ خبره · اسفند ۱۴۰۴">Expert interview · Mar 2026</span></article><article class="record-evidence-card glass-card" data-chamfer="tr" data-cut="20" data-radius="10" data-fillet="8"><p data-en="Path diversity and replacement channels are repeatedly cited in continuity reviews." data-fa="تنوع مسیر و کانال‌های جایگزین در بازبینی‌های تداوم بارها تکرار می‌شوند.">Path diversity and replacement channels are repeatedly cited in continuity reviews.</p><span data-en="Research note · Jan 2026" data-fa="یادداشت پژوهشی · دی ۱۴۰۴">Research note · Jan 2026</span></article></div></section>',
      '<section class="record-related-section"><p class="dbr-label" data-en="RELATED ARTICLES, VIDEO AND PODCAST" data-fa="مقاله، ویدیو و پادکست مرتبط">RELATED ARTICLES, VIDEO AND PODCAST</p><div class="record-related-grid"><a href="article-technical-recovery.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Article" data-fa="مقاله">Article</span><h3 data-en="Why technical recovery is not customer recovery" data-fa="چرا بازیابی فنی همان بازیابی مشتری نیست">Why technical recovery is not customer recovery</h3></a><a href="video-core-banking.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Videocast" data-fa="ویدیوکست">Videocast</span><h3 data-en="Decomposing a core banking platform" data-fa="تجزیهٔ یک پلتفرم بانکداری متمرکز">Decomposing a core banking platform</h3></a><a href="podcast-ecosystem.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Podcast" data-fa="پادکست">Podcast</span><h3 data-en="When failure must stay small" data-fa="وقتی خرابی باید کوچک بماند">When failure must stay small</h3></a></div></section>',
      '<section class="record-neighbor-section"><p class="dbr-label" data-en="EXPLORE OTHER CATEGORIES" data-fa="کاوش دسته‌بندی‌های دیگر">EXPLORE OTHER CATEGORIES</p><div>' + related.map(function (item) {
        return '<a href="' + categoryLink(item) + '" data-en="' + escapeHtml(item.en) + '" data-fa="' + escapeHtml(item.fa) + '">' + escapeHtml(item.en) + '</a>';
      }).join("") + '</div><a class="button button-outline" href="radar.html#categories" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="All 16 Categories" data-fa="همهٔ ۱۶ دسته‌بندی">All 16 Categories</span></a></section></div></div>'
    ].join("");
  }

  function patternRecordMarkup() {
    var selected = selectedRadarPattern();
    var category = selected.category;
    var pattern = selected.pattern;
    var nextPattern = category.patterns[(selected.index + 1) % category.patterns.length];
    var previousPattern = category.patterns[(selected.index + category.patterns.length - 1) % category.patterns.length];
    return [
      '<div class="record-layout pattern-record-layout">',
      '<aside class="record-sidebar"><section class="record-side-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="IN THIS PATTERN" data-fa="در این الگو">IN THIS PATTERN</p><a href="#why-pattern" data-en="Why it matters" data-fa="چرا مهم است">Why it matters</a><a href="#pattern-drivers" data-en="Risk drivers" data-fa="محرک‌های ریسک">Risk drivers</a><a href="#pattern-evidence" data-en="Signals & Evidence" data-fa="نشانه‌ها و شواهد">Signals & Evidence</a><a href="#pattern-management" data-en="Management use" data-fa="کاربرد مدیریتی">Management use</a><a href="#pattern-people" data-en="People" data-fa="افراد">People</a></section><section class="record-side-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="AT A GLANCE" data-fa="در یک نگاه">AT A GLANCE</p><dl><div><dt data-en="Category" data-fa="دسته‌بندی">Category</dt><dd data-en="' + escapeHtml(category.en) + '" data-fa="' + escapeHtml(category.fa) + '">' + escapeHtml(category.en) + '</dd></div><div><dt data-en="Evidence" data-fa="شواهد">Evidence</dt><dd data-en="11" data-fa="۱۱">11</dd></div><div><dt data-en="Contributors" data-fa="مشارکت‌کننده">Contributors</dt><dd data-en="3" data-fa="۳">3</dd></div></dl></section><section class="record-side-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="SHARING" data-fa="اشتراک‌گذاری">SHARING</p><p data-en="Share this Pattern with a colleague or contribute a signal." data-fa="این الگو را با یک همکار به اشتراک بگذارید یا نشانه‌ای اضافه کنید.">Share this Pattern with a colleague or contribute a signal.</p></section></aside>',
      '<div class="record-main"><section class="record-hero pattern-hero glass-card" data-chamfer="tr" data-cut="28" data-radius="12" data-fillet="10"><p class="dbr-label" data-en="PATTERN · ' + escapeHtml(category.en) + '" data-fa="الگو · ' + escapeHtml(category.fa) + '">PATTERN · ' + escapeHtml(category.en) + '</p><h2 data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(pattern[0]) + '</h2><p data-en="Decompose the service so that one component can fail, recover and return without pulling the whole organization into outage." data-fa="سرویس را چنان تجزیه کنید که یک جزء بتواند از کار بیفتد، بازیابی شود و برگردد بدون آنکه کل سازمان را وارد اختلال کند.">Decompose the service so that one component can fail, recover and return without pulling the whole organization into outage.</p><div class="record-meta"><span data-en="Latest review 12 Jun 2026" data-fa="آخرین بازبینی ۲۲ خرداد ۱۴۰۵">Latest review 12 Jun 2026</span><span data-en="Evidence-supported" data-fa="مبتنی بر شواهد">Evidence-supported</span><span data-en="Management lens" data-fa="لنز مدیریتی">Management lens</span></div><div class="radar-rule-lines" aria-hidden="true"><span></span><span></span><span></span></div></section>',
      '<section class="record-question-panel glass-card" id="why-pattern" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="WHY THIS PATTERN MATTERS" data-fa="چرا این الگو مهم است">WHY THIS PATTERN MATTERS</p><p data-en="A narrow technical defect becomes a customer event when architecture cannot lose one service quietly." data-fa="وقتی معماری نتواند از دست رفتن یک سرویس را بی‌سروصدا نگه دارد، نقص فنی کوچک به رویداد مشتری تبدیل می‌شود.">A narrow technical defect becomes a customer event when architecture cannot lose one service quietly.</p></section>',
      '<section class="pattern-drivers-section" id="pattern-drivers"><h3 data-en="Risk drivers that make this Pattern appear" data-fa="محرک‌های ریسکی که این الگو را پدید می‌آورند">Risk drivers that make this Pattern appear</h3><div class="pattern-driver-grid"><span data-en="Core platform coupling" data-fa="وابستگی هستهٔ بانک">Core platform coupling</span><span data-en="Shared service boundaries" data-fa="مرزهای سرویس مشترک">Shared service boundaries</span><span data-en="Limited fallback route" data-fa="مسیر جایگزین محدود">Limited fallback route</span><span data-en="Operational dependency" data-fa="وابستگی عملیاتی">Operational dependency</span></div></section>',
      '<section class="pattern-impact-section"><p class="dbr-label" data-en="EFFECT ON CONTINUITY" data-fa="اثر بر تداوم">EFFECT ON CONTINUITY</p><div class="radar-rule-lines" aria-hidden="true"><span></span><span></span></div><p data-en="The Pattern reduces blast radius and gives management a path to evaluate, deliver and monitor continuity as a service property." data-fa="این الگو شعاع اثر را کاهش می‌دهد و به مدیریت مسیری می‌دهد تا تداوم را به‌عنوان ویژگی سرویس ارزیابی، تحویل و پایش کند.">The Pattern reduces blast radius and gives management a path to evaluate, deliver and monitor continuity as a service property.</p></section>',
      '<section class="record-evidence-section" id="pattern-evidence"><p class="dbr-label" data-en="SIGNALS & EVIDENCE" data-fa="نشانه‌ها و شواهد">SIGNALS & EVIDENCE</p><div class="record-evidence-list"><article class="record-evidence-card glass-card" data-chamfer="tr" data-cut="20" data-radius="10" data-fillet="8"><p data-en="Large outages repeatedly show that shared technical components can become customer-facing failures." data-fa="اختلال‌های بزرگ بارها نشان می‌دهند که اجزای فنی مشترک می‌توانند به شکست روبه‌مشتری تبدیل شوند.">Large outages repeatedly show that shared technical components can become customer-facing failures.</p><span data-en="Bank CIO interview · Mar 2026" data-fa="مصاحبه با CIO بانک · اسفند ۱۴۰۴">Bank CIO interview · Mar 2026</span></article><article class="record-evidence-card glass-card" data-chamfer="tr" data-cut="20" data-radius="10" data-fillet="8"><p data-en="Decoupling recovery domains lowered the spread of repeated service defects." data-fa="جداسازی دامنه‌های بازیابی، انتشار نقص‌های تکراری سرویس را کاهش داد.">Decoupling recovery domains lowered the spread of repeated service defects.</p><span data-en="Operations note · Jan 2026" data-fa="یادداشت عملیاتی · دی ۱۴۰۴">Operations note · Jan 2026</span></article></div><a class="button button-outline" href="reports.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="View all evidence" data-fa="مشاهدهٔ همهٔ شواهد">View all evidence</span></a></section>',
      '<section class="pattern-management-section" id="pattern-management"><p class="dbr-label" data-en="MANAGEMENT USE" data-fa="کاربرد مدیریتی">MANAGEMENT USE</p><div class="pattern-lens-grid"><article><h3 data-en="Evaluate" data-fa="ارزیابی">Evaluate</h3><p data-en="Map critical services to components, channels and recovery domains." data-fa="خدمات حیاتی را به اجزا، کانال‌ها و دامنه‌های بازیابی وصل کنید.">Map critical services to components, channels and recovery domains.</p></article><article><h3 data-en="Deliver" data-fa="تحویل">Deliver</h3><p data-en="Create a decomposition roadmap and remove avoidable shared failure paths." data-fa="نقشهٔ راه تجزیه بسازید و مسیرهای شکست مشترکِ قابل اجتناب را حذف کنید.">Create a decomposition roadmap and remove avoidable shared failure paths.</p></article><article><h3 data-en="Monitor" data-fa="پایش">Monitor</h3><p data-en="Track blast radius, recovery domain drift and dependency growth." data-fa="شعاع اثر، انحراف دامنهٔ بازیابی و رشد وابستگی را پایش کنید.">Track blast radius, recovery domain drift and dependency growth.</p></article></div></section>',
      '<section class="pattern-opportunity-section"><p class="dbr-label" data-en="TECHNOLOGY & OPPORTUNITY" data-fa="فناوری و فرصت">TECHNOLOGY & OPPORTUNITY</p><div class="pattern-opportunity-grid"><article><h3 data-en="Technologies" data-fa="فناوری‌ها">Technologies</h3><span>API Gateway</span><span>Service Mesh</span><span>Active-active</span></article><article><h3 data-en="Product & service" data-fa="محصول و خدمت">Product & service</h3><span data-en="Dependency observability" data-fa="مشاهده‌پذیری وابستگی">Dependency observability</span><span data-en="Recovery-domain design" data-fa="طراحی دامنهٔ بازیابی">Recovery-domain design</span></article><article><h3 data-en="Governance" data-fa="راهبری">Governance</h3><span data-en="Service-owner accountability" data-fa="پاسخ‌گویی مالک سرویس">Service-owner accountability</span></article></div></section>',
      '<section class="pattern-narrative glass-card" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="CANONICAL NARRATIVE" data-fa="روایت نمونه">CANONICAL NARRATIVE</p><h3 data-en="A professional robot says: a calm robot continues service." data-fa="یک ربات حرفه‌ای می‌گوید: ربات آرام به خدمت ادامه می‌دهد.">A professional robot says: a calm robot continues service.</h3><p data-en="This narrative slot will hold the canonical story for the Pattern." data-fa="این جایگاه، روایت رسمی الگو را نگه می‌دارد.">This narrative slot will hold the canonical story for the Pattern.</p></section>',
      '<section class="record-related-section" id="pattern-people"><p class="dbr-label" data-en="RELATED PEOPLE" data-fa="افراد مرتبط">RELATED PEOPLE</p><div class="record-related-grid record-people-grid"><a href="person.html?person=nima-farzan" class="record-person-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><img src="Assets/people-portrait-01.png" alt="Nima Farzan" data-fa-alt="نیما فرزان"><h3 data-en="Nima Farzan" data-fa="نیما فرزان">Nima Farzan</h3><span data-en="Technocratic Leader" data-fa="رهبر تکنوکرات">Technocratic Leader</span></a><a href="person.html?person=leila-rahimi" class="record-person-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><img src="Assets/people-portrait-02.png" alt="Leila Rahimi" data-fa-alt="لیلا رحیمی"><h3 data-en="Leila Rahimi" data-fa="لیلا رحیمی">Leila Rahimi</h3><span data-en="Technocratic Thinker" data-fa="اندیشمند تکنوکرات">Technocratic Thinker</span></a><a href="person.html?person=arman-yazdi" class="record-person-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><img src="Assets/people-portrait-03.png" alt="Arman Yazdi" data-fa-alt="آرمان یزدی"><h3 data-en="Arman Yazdi" data-fa="آرمان یزدی">Arman Yazdi</h3><span data-en="Technocratic Expert" data-fa="متخصص تکنوکرات">Technocratic Expert</span></a></div></section>',
      '<section class="record-related-section"><p class="dbr-label" data-en="RELATED CONTENT" data-fa="محتوای مرتبط">RELATED CONTENT</p><div class="record-related-grid"><a href="video-core-banking.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Video" data-fa="ویدیو">Video</span><h3 data-en="Decomposing a core banking platform" data-fa="تجزیهٔ یک پلتفرم بانکداری متمرکز">Decomposing a core banking platform</h3></a><a href="article-technical-recovery.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Article" data-fa="مقاله">Article</span><h3 data-en="Technical recovery is not customer recovery" data-fa="بازیابی فنی همان بازیابی مشتری نیست">Technical recovery is not customer recovery</h3></a><a href="podcast-ecosystem.html" class="record-related-card glass-card" data-chamfer="tr" data-cut="22" data-radius="10" data-fillet="8"><span data-en="Audio" data-fa="صدا">Audio</span><h3 data-en="When failure must stay small" data-fa="وقتی خرابی باید کوچک بماند">When failure must stay small</h3></a></div></section>',
      '<section class="pattern-nav-row"><a class="button button-outline" href="' + patternLink(category, previousPattern) + '" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Previous" data-fa="پیشین">Previous</span></a><a class="button button-outline" href="' + categoryLink(category) + '" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Back to Category" data-fa="بازگشت به دسته‌بندی">Back to Category</span></a><a class="button button-outline" href="' + patternLink(category, nextPattern) + '" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Next" data-fa="بعدی">Next</span></a></section>',
      '<section class="radar-participate-section pattern-cta" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10"><div><p class="dbr-label" data-en="CONTRIBUTE" data-fa="مشارکت">CONTRIBUTE</p><h2 data-en="Participate in this Pattern" data-fa="در این الگو مشارکت کنید">Participate in this Pattern</h2><p data-en="Share evidence, a proposed signal or a counter-example before this Pattern is published in the next update." data-fa="پیش از انتشار این الگو در به‌روزرسانی بعدی، شواهد، نشانهٔ پیشنهادی یا نمونهٔ مخالف را به اشتراک بگذارید.">Share evidence, a proposed signal or a counter-example before this Pattern is published in the next update.</p></div><a class="button button-primary" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Share evidence" data-fa="اشتراک شواهد">Share evidence</span></a></section></div></div>'
    ].join("");
  }

  function radarUpdatesMarkup() {
    var updates = [
      ["REPORT", "گزارش", "Continuity Radar Report — 2026 released", "انتشار گزارش رادار تداوم ۱۴۰۵", "The public report documents the current model, evidence base and update method for the 16 Categories and 32 Patterns.", "گزارش عمومی، مدل فعلی، پایهٔ شواهد و روش به‌روزرسانی ۱۶ دسته‌بندی و ۳۲ الگو را مستند می‌کند.", "46-page PDF", "پی‌دی‌اف ۴۶ صفحه‌ای", "02 Aug 2026", "۱۱ مرداد ۱۴۰۵", "radar.html"],
      ["MODEL UPDATE", "به‌روزرسانی مدل", "Category map refreshed for continuity architecture", "به‌روزرسانی نقشهٔ دسته‌بندی برای معماری تداوم", "The architecture branch now links each Category directly to its own Pattern record set.", "شاخهٔ معماری اکنون هر دسته‌بندی را مستقیم به مجموعهٔ رکوردهای الگوی خودش وصل می‌کند.", "Explorer change", "تغییر کاوشگر", "29 Jul 2026", "۷ مرداد ۱۴۰۵", "radar-view.html"],
      ["EVIDENCE NOTE", "یادداشت شواهد", "Customer continuity signals added", "افزوده‌شدن نشانه‌های تداوم مشتری", "New service-access signals have been attached to customer-facing continuity and channel fallback Patterns.", "نشانه‌های تازهٔ دسترسی سرویس به الگوهای تداوم روبه‌مشتری و مسیر جایگزین کانال‌ها اضافه شده‌اند.", "Evidence library", "کتابخانهٔ شواهد", "24 Jul 2026", "۲ مرداد ۱۴۰۵", "article-technical-recovery.html"],
      ["METHOD NOTE", "یادداشت روش", "How weak signals become Radar evidence", "نشانه‌های ضعیف چگونه به شواهد رادار تبدیل می‌شوند", "A short method update explains sourcing, review and the threshold for publishing a Pattern signal.", "یک به‌روزرسانی کوتاه روش، منبع‌یابی، بازبینی و آستانهٔ انتشار نشانهٔ الگو را توضیح می‌دهد.", "Governance", "راهبری", "18 Jul 2026", "۲۷ تیر ۱۴۰۵", "radar.html"],
      ["FIELD NOTE", "یادداشت میدانی", "Third-party continuity review opened", "آغاز بازبینی تداوم طرف سوم", "Partner dependency observations are now being reviewed for the next Radar refresh.", "مشاهدات وابستگی شریک‌ها برای به‌روزرسانی بعدی رادار در حال بازبینی است.", "Open review", "بازبینی باز", "12 Jul 2026", "۲۱ تیر ۱۴۰۵", "category.html?category=third-party-continuity"],
      ["CONVERSATION", "گفت‌وگو", "Ecosystem continuity episode connected to the Radar", "اتصال قسمت تداوم اکوسیستم به رادار", "The podcast transcript now links to regulation, third-party continuity and shared infrastructure evidence.", "متن پیاده‌شدهٔ پادکست اکنون به تنظیم‌گری، تداوم طرف سوم و شواهد زیرساخت مشترک وصل است.", "Podcast", "پادکست", "04 Jul 2026", "۱۳ تیر ۱۴۰۵", "podcast-ecosystem.html"]
    ];
    return [
      '<section class="inner-section radar-updates-section" data-chamfer="" data-radius="12">',
      '<div class="radar-updates-lead"><article><p class="dbr-label" data-en="' + updates[0][0] + '" data-fa="' + updates[0][1] + '">' + updates[0][0] + '</p><h2 data-en="' + escapeHtml(updates[0][2]) + '" data-fa="' + escapeHtml(updates[0][3]) + '">' + escapeHtml(updates[0][2]) + '</h2><p data-en="' + escapeHtml(updates[0][4]) + '" data-fa="' + escapeHtml(updates[0][5]) + '">' + escapeHtml(updates[0][4]) + '</p><div class="update-meta"><span data-en="' + escapeHtml(updates[0][6]) + '" data-fa="' + escapeHtml(updates[0][7]) + '">' + escapeHtml(updates[0][6]) + '</span><span data-en="' + escapeHtml(updates[0][8]) + '" data-fa="' + escapeHtml(updates[0][9]) + '">' + escapeHtml(updates[0][8]) + '</span></div><a class="button button-primary" href="' + escapeHtml(updates[0][10]) + '" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Open update" data-fa="باز کردن خبر">Open update</span>' + icon("arrow") + '</a></article><div class="radar-updates-dial" aria-hidden="true"><div class="radar-showcase-dial"><span></span><span></span><span></span><i></i></div></div></div>',
      '<div class="radar-news-grid">' + updates.slice(1).map(function (item) {
        return '<a class="radar-news-card glass-card" href="' + escapeHtml(item[10]) + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="' + escapeHtml(item[0]) + '" data-fa="' + escapeHtml(item[1]) + '">' + escapeHtml(item[0]) + '</p><h3 data-en="' + escapeHtml(item[2]) + '" data-fa="' + escapeHtml(item[3]) + '">' + escapeHtml(item[2]) + '</h3><p data-en="' + escapeHtml(item[4]) + '" data-fa="' + escapeHtml(item[5]) + '">' + escapeHtml(item[4]) + '</p><div class="update-meta"><span data-en="' + escapeHtml(item[6]) + '" data-fa="' + escapeHtml(item[7]) + '">' + escapeHtml(item[6]) + '</span><span data-en="' + escapeHtml(item[8]) + '" data-fa="' + escapeHtml(item[9]) + '">' + escapeHtml(item[8]) + '</span></div><span class="radar-card-open" aria-hidden="true">' + icon("arrow") + '</span></a>';
      }).join("") + '</div>',
      '</section>'
    ].join("");
  }

  function tabsMarkup(data) {
    return '<section class="inner-section" data-chamfer="" data-radius="12"><h2>Pattern intelligence</h2><div class="tab-list" role="tablist">' + data.tabs.map(function (tab, index) {
      return '<button class="tab-button" type="button" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '" aria-controls="tab-panel-' + index + '">' + escapeHtml(tab[0]) + "</button>";
    }).join("") + '</div><div class="tabs-panels">' + data.tabs.map(function (tab, index) {
      return '<div class="tab-panel" id="tab-panel-' + index + '" role="tabpanel"' + (index === 0 ? "" : " hidden") + '><ul>' + tab[1].map(function (line) { return "<li>" + escapeHtml(line) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div></section>";
  }

  function audioWaveformMarkup(barClass) {
    var heights = [42, 72, 54, 92, 36, 68, 86, 48, 78, 58, 96, 44, 74, 52, 88, 64, 38, 70, 94, 50, 82, 56, 76, 46, 90, 62, 40, 84, 66, 98, 48, 72];
    return heights.map(function (height, index) {
      return '<span class="' + escapeHtml(barClass) + '" style="--bar:' + height + '%" data-bar-index="' + index + '"></span>';
    }).join("");
  }

  function audioPlayerMarkup(data, heading) {
    var playLabel = data.mediaLabel || "Play episode";
    var faPlayLabel = data.faMediaLabel || "پخش قسمت";
    return [
      '<div class="media-stage media-stage-audio" data-chamfer="br" data-cut="28" data-radius="12" data-fillet="8">',
      '<div class="dbr-audio-player" data-audio-player>',
      '<audio preload="metadata" src="' + escapeHtml(data.audioSrc) + '"></audio>',
      '<button class="audio-waveform-control" type="button" data-audio-waveform aria-label="' + escapeHtml(playLabel) + '" data-en-aria-label="' + escapeHtml(playLabel) + '" data-fa-aria-label="' + escapeHtml(faPlayLabel) + '">' + audioWaveformMarkup("audio-wave-bar") + '<span class="audio-progress-fill" data-audio-fill></span></button>',
      '<div class="audio-player-foot"><span data-audio-current>00:00</span><input class="audio-progress" data-audio-progress type="range" min="0" max="1000" value="0" aria-label="Audio progress" data-en-aria-label="Audio progress" data-fa-aria-label="پیشرفت پخش"><span data-audio-duration>--:--</span></div>',
      '<div class="audio-player-action"><button class="button button-primary audio-toggle" type="button" data-audio-toggle data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span class="dbr-button-content">' + icon("play") + '<span data-en="' + escapeHtml(playLabel) + '" data-fa="' + escapeHtml(faPlayLabel) + '">' + escapeHtml(playLabel) + '</span></span></button></div>',
      '</div>',
      '</div>'
    ].join("");
  }

  function articleBodyMarkup(data) {
    var sections = data.sections || [];
    if (!sections.length) return "";
    return '<section class="inner-section article-body-section" data-chamfer="" data-radius="12"><div class="article-body-flow">' + sections.map(function (section) {
      var title = section.title || section[0];
      var body = section.body || section[1];
      var faTitle = section.faTitle || section[4] || title;
      var faBody = section.faBody || section[5] || body;
      return '<article class="article-body-block"><h2 data-en="' + escapeHtml(title) + '" data-fa="' + escapeHtml(faTitle) + '">' + escapeHtml(title) + '</h2><p data-en="' + escapeHtml(body) + '" data-fa="' + escapeHtml(faBody) + '">' + escapeHtml(body) + '</p></article>';
    }).join("") + "</div></section>";
  }

  function mediaMarkup(data) {
    var hideHeading = data.mediaHeading === "";
    var hideDescription = data.mediaDescription === "";
    var heading = hideHeading ? "" : (data.mediaHeading || "Episode and transcript");
    var faHeading = data.faMediaHeading === "" ? "" : (data.faMediaHeading || "قسمت و متن پیاده‌شده");
    var description = hideDescription ? "" : (data.mediaDescription || "Platform links, chapters and the searchable transcript remain together on the canonical episode page.");
    var faDescription = data.faMediaDescription === "" ? "" : (data.faMediaDescription || "لینک‌های پلتفرم، فصل‌بندی و متن قابل جست‌وجو کنار صفحه اصلی قسمت می‌مانند.");
    var stage = data.audioSrc
      ? audioPlayerMarkup(data, heading)
      : data.embedUrl
      ? '<div class="media-stage media-stage-embed" data-chamfer="br" data-cut="28" data-radius="12" data-fillet="8"><div class="media-embed-frame"><iframe src="' + escapeHtml(data.embedUrl) + '" title="' + escapeHtml(heading || data.title) + '" loading="lazy" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen; picture-in-picture"></iframe></div></div>'
      : data.mediaImage
      ? '<figure class="media-stage media-stage-image" data-chamfer="br" data-cut="28" data-radius="12" data-fillet="8"><img src="' + escapeHtml(data.mediaImage) + '" alt="' + escapeHtml(data.mediaAlt || data.title) + '" data-fa-alt="' + escapeHtml(data.faMediaAlt || data.faTitle || data.title) + '"></figure>'
      : '<div class="media-stage"><button class="button button-primary media-open" type="button" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5">' + escapeHtml(data.mediaLabel) + "</button></div>";
    return '<section class="inner-section media-section" data-chamfer="" data-radius="12">' + (hideHeading ? "" : '<h2 data-en="' + escapeHtml(heading) + '" data-fa="' + escapeHtml(faHeading) + '">' + escapeHtml(heading) + '</h2>') + (hideDescription ? "" : '<p data-en="' + escapeHtml(description) + '" data-fa="' + escapeHtml(faDescription) + '">' + escapeHtml(description) + '</p>') + stage + '</section>';
  }

  function localizedElement(tagName, className, en, fa) {
    return '<' + tagName + (className ? ' class="' + className + '"' : "") + ' data-en="' + escapeHtml(en) + '" data-fa="' + escapeHtml(fa) + '">' + escapeHtml(en) + '</' + tagName + '>';
  }

  function localizedChip(item, className) {
    return '<span class="' + (className || "profile-chip") + '" data-en="' + escapeHtml(item[0]) + '" data-fa="' + escapeHtml(item[1]) + '">' + escapeHtml(item[0]) + '</span>';
  }

  function profileLinkedInMarkup(person) {
    var url = person.linkedinUrl || "";
    var linkAttrs = url
      ? ' href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer"'
      : ' aria-disabled="true" tabindex="-1"';
    return [
      '<div class="profile-linkedin-row">',
      '<span class="profile-linkedin-icon" aria-hidden="true"><img src="Assets/linkedin-logo-initials.png" alt="" loading="lazy"></span>',
      '<a class="profile-linkedin-link' + (url ? "" : " is-disabled") + '"' + linkAttrs + '><span data-en="See LinkedIn profile" data-fa="مشاهده پروفایل لینکدین">See LinkedIn profile</span></a>',
      '</div>'
    ].join("");
  }

  function alirezaProfileMarkup(person) {
    var profileNumber = person.profileNumber || "02";
    var faProfileNumber = person.faProfileNumber || persianDigits(profileNumber);
    var portraitClass = person.imageClass ? ' class="' + escapeHtml(person.imageClass) + '"' : "";
    var storyMarkup = person.story.map(function (paragraph) {
      return localizedElement("p", "", paragraph[0], paragraph[1]);
    }).join("");
    var themeMarkup = person.themes.map(function (theme) {
      return localizedChip(theme, "profile-theme-chip");
    }).join("");
    var intersectionMarkup = person.intersections.map(function (item, index) {
      var surfaceClass = index === 1 || index === 3 ? "paper-card" : "glass-card";
      return '<article class="profile-continuity-card ' + surfaceClass + '" data-chamfer="tr" data-cut="24" data-radius="10" data-fillet="8"><span class="profile-card-index">' + String(index + 1).padStart(2, "0") + '</span><h3 data-en="' + escapeHtml(item.title) + '" data-fa="' + escapeHtml(item.faTitle) + '">' + escapeHtml(item.title) + '</h3><p data-en="' + escapeHtml(item.body) + '" data-fa="' + escapeHtml(item.faBody) + '">' + escapeHtml(item.body) + '</p><div class="profile-domain-tags">' + item.domains.map(function (domain) { return localizedChip(domain, "profile-domain-chip"); }).join("") + '</div></article>';
    }).join("");
    var experienceMarkup = person.experience.map(function (item, index) {
      return '<article class="profile-timeline-item"><span class="profile-timeline-number">' + String(index + 1).padStart(2, "0") + '</span><div><p class="dbr-label" data-en="' + escapeHtml(item[4]) + '" data-fa="' + escapeHtml(item[5]) + '">' + escapeHtml(item[4]) + '</p><h3 data-en="' + escapeHtml(item[0]) + '" data-fa="' + escapeHtml(item[1]) + '">' + escapeHtml(item[0]) + '</h3><strong data-en="' + escapeHtml(item[2]) + '" data-fa="' + escapeHtml(item[3]) + '">' + escapeHtml(item[2]) + '</strong><p data-en="' + escapeHtml(item[6]) + '" data-fa="' + escapeHtml(item[7]) + '">' + escapeHtml(item[6]) + '</p></div></article>';
    }).join("");
    var domainMarkup = person.relatedDomains.map(function (domain, index) {
      var surfaceClass = index % 2 === 1 ? "paper-card" : "glass-card";
      return '<article class="profile-domain-card ' + surfaceClass + '" data-chamfer="tr" data-cut="20" data-radius="10" data-fillet="8"><p class="dbr-label" data-en="DBR DOMAIN" data-fa="حوزهٔ DBR">DBR DOMAIN</p><h3 data-en="' + escapeHtml(domain[0]) + '" data-fa="' + escapeHtml(domain[1]) + '">' + escapeHtml(domain[0]) + '</h3><p data-en="' + escapeHtml(domain[2]) + '" data-fa="' + escapeHtml(domain[3]) + '">' + escapeHtml(domain[2]) + '</p></article>';
    }).join("");

    return [
      '<section class="profile-feature-hero profile-monograph-hero" data-chamfer="br" data-cut="48" data-radius="12" data-fillet="10">',
      '<div class="profile-monograph-main">',
      '<div class="profile-monograph-copy">',
      '<h1 data-en="' + escapeHtml(person.name) + '" data-fa="' + escapeHtml(person.faName) + '">' + escapeHtml(person.name) + '</h1>',
      '<p class="profile-monograph-title" data-en="' + escapeHtml(person.title) + '" data-fa="' + escapeHtml(person.faTitle) + '">' + escapeHtml(person.title) + '</p>',
      '<p class="profile-house-role"><strong data-en="' + escapeHtml(person.role) + '" data-fa="' + escapeHtml(person.faRole) + '">' + escapeHtml(person.role) + '</strong></p>',
      '<div class="profile-monograph-tags">' + person.heroTags.map(function (tag) { return localizedChip(tag, "profile-monograph-tag"); }).join("") + '</div>',
      '<p class="profile-monograph-positioning" data-en="' + escapeHtml(person.positioning) + '" data-fa="' + escapeHtml(person.faPositioning) + '">' + escapeHtml(person.positioning) + '</p>',
      profileLinkedInMarkup(person),
      '</div>',
      '<figure class="profile-monograph-portrait" data-chamfer="tl" data-cut="64" data-radius="0" data-fillet="10"><img' + portraitClass + ' src="' + escapeHtml(person.image) + '" alt="Portrait of ' + escapeHtml(person.name) + '" data-fa-alt="پرترهٔ ' + escapeHtml(person.faName) + '"></figure>',
      '</div>',
      '<blockquote class="profile-monograph-statement" data-chamfer="br" data-cut="48" data-radius="0" data-radius-bl="12" data-fillet="10"><span class="profile-statement-mark profile-statement-mark-open" aria-hidden="true">“</span><p data-en="' + escapeHtml(person.quote) + '" data-fa="' + escapeHtml(person.faQuote) + '">' + escapeHtml(person.quote) + '</p><span class="profile-statement-mark profile-statement-mark-close" aria-hidden="true">”</span></blockquote>',
      '</section>',
      '<section class="profile-story-section" data-chamfer="" data-radius="12">',
      '<div class="profile-story-lead"><p class="dbr-label" data-en="PROFESSIONAL ARC" data-fa="مسیر حرفه‌ای">PROFESSIONAL ARC</p><h2 data-en="' + escapeHtml(person.storyTitle) + '" data-fa="' + escapeHtml(person.faStoryTitle) + '">' + escapeHtml(person.storyTitle) + '</h2></div>',
      '<article class="profile-story-body">' + storyMarkup + '<div class="profile-story-themes"><p class="dbr-label" data-en="SELECTED THEMES" data-fa="حوزه‌های منتخب">SELECTED THEMES</p><div class="profile-theme-list">' + themeMarkup + '</div></div></article>',
      '</section>',
      '<section class="profile-section-block" data-chamfer="" data-radius="12">',
      '<div class="profile-section-heading"><p class="dbr-label" data-en="CONTINUITY FIT" data-fa="اتصال به تداوم">CONTINUITY FIT</p><h2 data-en="Where this experience meets Continuity" data-fa="جایی که تجربه او با تداوم تلاقی پیدا می‌کند">Where this experience meets Continuity</h2></div>',
      '<div class="profile-continuity-grid">' + intersectionMarkup + '</div>',
      '</section>',
      '<section class="profile-experience-section" data-chamfer="" data-radius="12">',
      '<div class="profile-section-heading profile-experience-heading"><p class="dbr-label" data-en="SELECTED EXPERIENCE" data-fa="تجربه‌های منتخب">SELECTED EXPERIENCE</p><h2 class="profile-experience-title" data-en="A career moving from systems to service responsibilities" data-fa="مسیری از سامانه تا مسئولیت خدمت">A career moving from systems to service responsibilities</h2></div>',
      '<div class="profile-timeline">' + experienceMarkup + '</div>',
      '</section>',
      '<section class="profile-section-block profile-domain-section" data-chamfer="" data-radius="12">',
      '<div class="profile-section-heading profile-domain-heading"><div><p class="dbr-label" data-en="RELATED DBR DOMAINS" data-fa="حوزه‌های DBR مرتبط">RELATED DBR DOMAINS</p><h2 data-en="Where the profile connects to the Radar" data-fa="جایی که پروفایل به رادار وصل می‌شود">Where the profile connects to the Radar</h2></div><div class="profile-carousel-controls" aria-label="Related DBR domains carousel controls"><button class="profile-carousel-button profile-carousel-button-prev" type="button" data-profile-carousel="prev" aria-label="Previous domains" data-fa-aria-label="حوزه‌های قبلی">' + icon("arrow") + '</button><button class="profile-carousel-button profile-carousel-button-next" type="button" data-profile-carousel="next" aria-label="Next domains" data-fa-aria-label="حوزه‌های بعدی">' + icon("arrow") + '</button></div></div>',
      '<div class="profile-domain-carousel"><div class="profile-domain-grid" tabindex="0" aria-label="Related DBR domains" data-fa-aria-label="حوزه‌های DBR مرتبط">' + domainMarkup + '</div></div>',
      '</section>',
      profileRelatedInsightsMarkup(person)
    ].join("");
  }

  function personProfileMarkup(data) {
    var person = selectedPersonProfile();
    if (person.profileLayout === "monograph" || person.id === "alireza-bozorgmehri") return alirezaProfileMarkup(person);
    return [
      '<section class="inner-section person-profile-section" data-chamfer="" data-radius="12">',
      '<div class="person-profile-grid"><figure class="person-profile-photo" data-chamfer="tr" data-cut="32" data-radius="12" data-fillet="10"><img src="' + escapeHtml(person.image) + '" alt="Portrait of ' + escapeHtml(person.name) + '" data-fa-alt="پرترهٔ ' + escapeHtml(person.faName) + '"></figure>',
      '<div class="person-profile-summary"><p class="dbr-label" data-en="PROFILE DETAILS" data-fa="جزئیات پروفایل">PROFILE DETAILS</p><h2 data-en="' + escapeHtml(person.name) + '" data-fa="' + escapeHtml(person.faName) + '">' + escapeHtml(person.name) + '</h2><dl><div><dt data-en="Role" data-fa="نقش">Role</dt><dd data-en="' + escapeHtml(person.role) + '" data-fa="' + escapeHtml(person.faRole) + '">' + escapeHtml(person.role) + '</dd></div><div><dt data-en="Occupation" data-fa="حرفه">Occupation</dt><dd data-en="' + escapeHtml(person.title) + '" data-fa="' + escapeHtml(person.faTitle) + '">' + escapeHtml(person.title) + '</dd></div><div><dt data-en="Subject" data-fa="موضوع">Subject</dt><dd data-en="' + escapeHtml(person.subject) + '" data-fa="' + escapeHtml(person.faSubject) + '">' + escapeHtml(person.subject) + '</dd></div></dl></div></div>',
      '</section>',
      '<section class="inner-section" data-chamfer="" data-radius="12"><h2 data-en="Biography" data-fa="زندگی‌نامه">Biography</h2><p data-en="' + escapeHtml(person.bio) + '" data-fa="' + escapeHtml(person.faBio) + '">' + escapeHtml(person.bio) + '</p></section>',
      '<section class="inner-section" data-chamfer="" data-radius="12"><h2 data-en="People referrals" data-fa="معرفی افراد">People referrals</h2><p data-en="Accepted public referrals will appear here." data-fa="معرفی‌های عمومی پذیرفته‌شده در این بخش نمایش داده می‌شوند.">Accepted public referrals will appear here.</p></section>',
      profileRelatedInsightsMarkup(person)
    ].join("");
  }

  function routesMarkup() {
    var routes = [
      { type: "activation", icon: "target", title: "Activate Your Invitation", faTitle: "فعال‌سازی دعوت‌نامه", description: "For people who received a personal card and QR code.", faDescription: "برای افرادی که کارت شخصی و QR code دریافت کرده‌اند." },
      { type: "membership", icon: "user", title: "Submit a Membership Request", faTitle: "ارسال درخواست عضویت", description: "For senior Leaders, Thinkers and Experts working on Continuity.", faDescription: "برای رهبران، اندیشمندان و خبرگان ارشد فعال در تداوم." },
      { type: "referral", icon: "arrow", title: "Refer a Technocrat", faTitle: "معرفی یک تکنوکرات", description: "For active Leaders and Thinkers with a remaining referral allowance.", faDescription: "برای رهبران و اندیشمندان فعال با ظرفیت معرفی باقی‌مانده." },
      { type: "contribution", icon: "shield", title: "Share a Contribution", faTitle: "ثبت مشارکت یا نظر", description: "For a comment, proposal, evidence or contribution the House should review.", faDescription: "برای نظر، پیشنهاد، شاهد یا مشارکتی که خانه باید بررسی کند." }
    ];
    return '<section class="inner-section participate-route-section" data-chamfer="" data-radius="12"><div class="participation-route-grid participation-route-grid-modal">' + routes.map(function (route) {
      return '<button class="participation-route-card participation-route-trigger glass-card" type="button" data-house-participate-trigger="' + escapeHtml(route.type) + '"><span class="participation-route-icon">' + icon(route.icon) + '</span><span class="participation-route-copy"><h3 data-en="' + escapeHtml(route.title) + '" data-fa="' + escapeHtml(route.faTitle) + '">' + escapeHtml(route.title) + '</h3><p data-en="' + escapeHtml(route.description) + '" data-fa="' + escapeHtml(route.faDescription) + '">' + escapeHtml(route.description) + '</p></span></button>';
    }).join("") + '</div><div class="house-participate-modal participate-page-modal" data-house-participate-modal hidden><div class="house-participate-backdrop" data-house-participate-close></div><article class="house-participate-dialog glass-card" role="dialog" aria-modal="true" aria-labelledby="participate-modal-title"><button class="house-participate-close-tab" type="button" data-house-participate-close aria-label="Close participation form"><span data-en="Close" data-fa="بستن">Close</span>' + icon("close") + '</button><div class="house-participate-dialog-body" id="participate-modal-title">' + routes.map(function (route, index) {
      return '<div class="house-participate-panel" data-house-participate-panel="' + escapeHtml(route.type) + '"' + (index === 0 ? "" : " hidden") + '>' + participationFormContentMarkup(route.type, { modal: true }) + '</div>';
    }).join("") + '</div></article></div></section>';
  }

  function participationFormConfig(type) {
    var configs = {
      activation: {
        title: "Identity and professional profile",
        intro: "Required fields are marked *. Validation stays beside the field and no information is published before the stated review step.",
        fields: [["Full name *", "text", "Name Surname"], ["Mobile *", "tel", "+98"], ["Email *", "email", "name@organization"], ["Current title", "text", "Chief Risk Officer"], ["Organization", "text", "Bank name"]],
        submit: "Submit",
        success: "Registration saved. Step 3 is ready: confirm the public profile."
      },
      membership: {
        title: "About you and your relationship to Continuity",
        intro: "Required fields are marked *. Validation stays beside the field and no information is published before the stated review step.",
        fields: [
          ["Full name *", "text", ""],
          ["Email *", "email", ""],
          ["Current title *", "text", ""],
          ["Organization *", "text", ""],
          ["Industry *", "text", "Banking"],
          ["What would you contribute?", "checkboxGroup", "", ["Podcast production", "Videocast production", "Article writing", "Events and sessions participation"]],
          ["Your LinkedIn profile link", "url", "https://linkedin.com/in/..."]
        ],
        submit: "Submit",
        success: "Request received / HT-2026-0418 / under review. We respond within 30 days."
      },
      referral: {
        title: "Candidate and reason for referral",
        intro: "Required fields are marked *. Validation stays beside the field and no information is published before the stated review step.",
        fields: [["Candidate full name *", "text", ""], ["Current title *", "text", ""], ["Organization *", "text", ""], ["Email *", "email", ""], ["Suggested role *", "text", "Leader / Thinker / Expert"], ["Reason for referral *", "textarea", "What would they contribute to Continuity?"]],
        submit: "Submit",
        success: "Referral submitted. Status: Under review. Your remaining allowance is now 2."
      },
      contribution: {
        title: "Contribution, comment or evidence",
        intro: "Required fields are marked *. Validation stays beside the field and no information is published before the stated review step.",
        fields: [["Full name *", "text", ""], ["Email *", "email", ""], ["Organization", "text", ""], ["Contribution type *", "text", "Comment / proposal / evidence / conversation subject"], ["Subject *", "text", ""], ["What would you like to contribute or say? *", "textarea", "Share the comment, proposal, experience or evidence"]],
        submit: "Submit",
        success: "Contribution received. Nothing is published automatically; the editorial review starts now."
      }
    };
    return configs[type] || configs.membership;
  }

  function participationFormContentMarkup(type, options) {
    var config = participationFormConfig(type);
    var formClass = options && options.modal ? "site-form house-modal-form" : "site-form";
    return '<h2>' + escapeHtml(config.title) + '</h2><p class="participation-form-intro">' + escapeHtml(config.intro) + '</p><form class="' + formClass + '" data-form-type="' + type + '" data-success="' + escapeHtml(config.success) + '" data-success-url="participation-confirmation.html?type=' + type + '" novalidate>' + config.fields.map(function (field) {
      var wide = field[1] === "textarea" ? " field-wide" : "";
      var required = /\*$/.test(field[0].trim()) ? " required" : "";
      if (field[1] === "checkboxGroup") {
        return '<fieldset class="field-wide participation-checkbox-group"><legend>' + escapeHtml(field[0]) + '</legend><div>' + field[3].map(function (option) {
          return '<label><input type="checkbox" value="' + escapeHtml(option) + '"><span>' + escapeHtml(option) + '</span></label>';
        }).join("") + '</div></fieldset>';
      }
      var control = field[1] === "textarea" ? '<textarea rows="3" placeholder="' + escapeHtml(field[2]) + '"' + required + '></textarea>' : '<input type="' + field[1] + '" placeholder="' + escapeHtml(field[2]) + '"' + required + '>';
      return '<label class="' + wide + '">' + escapeHtml(field[0]) + control + "</label>";
    }).join("") + '<label class="field-wide"><span>Confirmation</span><span><input type="checkbox" required style="width:auto;min-height:0;margin-inline-end:8px">I confirm the information is accurate and may be reviewed by the House.</span></label><div class="form-actions"><button class="button button-primary" type="submit" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5">Submit</button><button class="button button-outline save-draft" type="button">Save</button></div><p class="form-message dbr-label" aria-live="polite"></p></form>';
  }

  function aboutContactMarkup(data) {
    var sections = data.sections || [];
    var address = sections[1] || ["House Address", "Tehran, Iran / exact visiting address supplied after appointment."];
    var phone = sections[2] || ["WhatsApp", "+98 912 000 0000"];
    var faAddress = "ایران، تهران، بزرگراه حکیم، قبل از پل سیدخندان، خیابان برازنده، خیابان سروش، کوچه حبیبی، پلاک ۳";
    var faPhone = "+۹۸ ۹۱۲ ۰۰۰ ۰۰۰۰";
    return [
      '<section class="inner-section about-contact-section" id="contact" data-chamfer="br" data-cut="40" data-radius="12" data-fillet="10">',
      '<figure class="about-contact-image"><img src="Assets/contact-house-courtyard.png" alt="House of Technocrats courtyard" data-fa-alt="حیاط خانهٔ تکنوکرات‌ها"></figure>',
      '<div class="about-contact-copy">',
      '<p class="dbr-label" data-en="CONTACT US" data-fa="تماس با ما">CONTACT US</p>',
      '<h2 data-en="House of Technocrats" data-fa="خانه تکنوکرات‌ها" data-en-lines="House of|Technocrats" data-fa-lines="خانه|تکنوکرات‌ها"><span>House of</span><span>Technocrats</span></h2>',
      '<dl><div><dt data-en="' + escapeHtml(address[0]) + '" data-fa="نشانی خانه">' + escapeHtml(address[0]) + '</dt><dd class="contact-address-text" data-en="' + escapeHtml(address[1]) + '" data-fa="' + escapeHtml(faAddress) + '">' + escapeHtml(address[1]) + '</dd></div><div><dt data-en="' + escapeHtml(phone[0]) + '" data-fa="واتس‌اپ">' + escapeHtml(phone[0]) + '</dt><dd class="contact-phone-number" dir="ltr" data-en="' + escapeHtml(phone[1]) + '" data-fa="' + escapeHtml(faPhone) + '">' + escapeHtml(phone[1]) + '</dd></div></dl>',
      '</div></section>'
    ].join("");
  }

  function formMarkup(type) {
    return '<section class="inner-section" data-chamfer="" data-radius="12">' + participationFormContentMarkup(type) + '</section>';
  }

  function confirmationMarkup() {
    var type = new URLSearchParams(window.location.search).get("type") || "participation";
    var reference = "HT-" + type.toUpperCase().slice(0, 4) + "-2026-0418";
    return [
      '<section class="inner-section participation-confirmation" data-chamfer="br" data-cut="34" data-radius="12" data-fillet="10">',
      '<p class="dbr-label" data-en="TASK COMPLETE" data-fa="کار کامل شد">TASK COMPLETE</p>',
      '<h2 data-en="Your submission is now in the right workflow." data-fa="ارسال شما اکنون در مسیر درست قرار دارد.">Your submission is now in the right workflow.</h2>',
      '<p data-en="Nothing has been published automatically. The House will follow the review and response policy stated on the previous step." data-fa="هیچ چیزی به‌صورت خودکار منتشر نشده است. خانه فرایند بررسی و پاسخ اعلام‌شده در گام قبل را دنبال می‌کند.">Nothing has been published automatically. The House will follow the review and response policy stated on the previous step.</p>',
      '<div class="confirmation-reference"><span data-en="REFERENCE" data-fa="شناسه">REFERENCE</span><strong>' + escapeHtml(reference) + '</strong></div>',
      '<div class="form-actions"><a class="button button-primary" href="participate.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Return to Participate" data-fa="بازگشت به مشارکت">Return to Participate</span></a><a class="button button-outline" href="index.html" data-chamfer="br" data-cut="12" data-radius="10" data-fillet="5"><span data-en="Home" data-fa="خانه">Home</span></a></div>',
      '</section>'
    ].join("");
  }

  function searchPageMarkup() {
    var params = new URLSearchParams(window.location.search);
    var query = params.get("q") || "impact tolerance";
    return '<section class="inner-section" data-chamfer="" data-radius="12"><h2>Results for “<span class="search-query-title">' + escapeHtml(query) + '</span>”</h2><div class="filter-bar"><label>Search<input class="full-search-input" type="search" value="' + escapeHtml(query) + '"></label><label>Object<select><option value="">All</option><option>Pattern</option><option>Category</option><option>Content</option><option>Person</option></select></label><label>Language<select><option>Current language first</option><option>English</option><option>Persian</option></select></label></div><p class="result-count dbr-label" aria-live="polite"></p><div class="content-list full-search-results"></div><div class="empty-state full-search-empty" hidden><h3>Nothing matches this search.</h3><p>Try a broader term, browse the 16 Categories, open all 32 Patterns or search the Insights library.</p></div></section>';
  }

  function renderInnerContent(data) {
    if (data.special === "continuityRich") return continuityRichMarkup();
    if (data.special === "thinkingRich") return technocraticThinkingSourceMarkup();
    if (data.special === "houseRich") return houseRichMarkup();
    if (data.special === "insightsRich") return insightsRichMarkup();
    if (data.special === "directory") return directoryMarkup(data.directory);
    if (data.special === "radar") return radarMarkup();
    if (data.special === "radarLanding") return radarLandingMarkup();
    if (data.special === "categoryRecord") return categoryRecordMarkup();
    if (data.special === "patternRecord") return patternRecordMarkup();
    if (data.special === "radarUpdates") return radarUpdatesMarkup();
    if (data.special === "tabs") return tabsMarkup(data);
    if (data.special === "media") {
      return mediaMarkup(data) + (data.articleBody ? articleBodyMarkup(data) : (data.sections || []).map(sectionMarkup).join("")) + accordionMarkup(data.faq);
    }
    if (data.special === "person") return personProfileMarkup(data);
    if (data.special === "routes") return routesMarkup();
    if (data.special === "aboutContact") return aboutContactMarkup(data);
    if (data.special === "form") return formMarkup(data.formType);
    if (data.special === "confirmation") return confirmationMarkup();
    if (data.special === "search") return searchPageMarkup();
    return (data.sections || []).map(sectionMarkup).join("") + accordionMarkup(data.faq, data.faqAnchor || (data.anchorTabs ? "continuity-faq" : ""));
  }

  function breadcrumbMarkup(page, data) {
    var crumbs = [["Home", "خانه", "index.html"]];
    if (data.nav === "radar" && page !== "radar") {
      crumbs.push(["Deep Blue Radar", "رادار دیپ‌بلو", "radar.html"]);
      if (["radar-view", "categories", "patterns", "category", "pattern"].includes(page)) {
        crumbs.push(["Explorer", "کاوشگر", "radar-view.html"]);
      }
      if (page === "pattern") {
        var selected = selectedRadarPattern();
        crumbs.push([selected.category.en, selected.category.fa, categoryLink(selected.category)]);
      }
    } else if (data.nav === "insights" && page !== "insights") {
      crumbs.push(["Insights", "بینش‌ها", "insights.html"]);
    } else if (data.nav === "people" && page !== "people") {
      crumbs.push(["People", "افراد", "people.html"]);
    } else if (data.nav === "thinking" && page !== "thinking") {
      crumbs.push(["Technocratic Thinking", "تفکر تکنوکراتیک", "technocratic-thinking.html"]);
    } else if (data.nav === "house" && page !== "house") {
      crumbs.push(["The House", "خانه", "house.html"]);
    } else if (data.nav === "participate" && page !== "participate") {
      crumbs.push(["Participate", "مشارکت", "participate.html"]);
    } else if (data.nav === "services" && page !== "services") {
      crumbs.push(["Technocratic Service Store", "فروشگاه خدمات تکنوکراتیک", "services.html"]);
    }

    crumbs.push([data.title, data.faTitle || data.title, ""]);
    return '<nav class="breadcrumbs" aria-label="Breadcrumb">' + crumbs.map(function (crumb, index) {
      var label = '<span data-en="' + escapeHtml(crumb[0]) + '" data-fa="' + escapeHtml(crumb[1]) + '">' + escapeHtml(crumb[0]) + '</span>';
      if (crumb[2] && index < crumbs.length - 1) return '<a href="' + crumb[2] + '">' + label + '</a>';
      return label;
    }).join('<span aria-hidden="true">/</span>') + '</nav>';
  }

  function renderSecondary(page) {
    var data = pageData[page];
    var app = document.getElementById("app");
    if (!data || !app) return;
    if (page === "person") {
      var person = selectedPersonProfile();
      data = Object.assign({}, data, {
        label: person.role,
        title: person.name,
        faTitle: person.faName,
        lede: person.title + " · " + person.subject,
        faLede: person.faTitle + " · " + person.faSubject,
        hideInnerHero: person.profileLayout === "monograph" || person.id === "alireza-bozorgmehri"
      });
    } else if (page === "category") {
      var category = selectedRadarCategory();
      var categoryNumber = String(radarCategories.indexOf(category) + 1).padStart(2, "0");
      data = Object.assign({}, data, {
        label: "Category " + categoryNumber + " of 16",
        faLabel: "دسته‌بندی " + persianDigits(categoryNumber) + " از ۱۶",
        title: category.en,
        faTitle: category.fa,
        lede: category.enDescription,
        faLede: category.faDescription
      });
    } else if (page === "pattern") {
      var patternRecord = selectedRadarPattern();
      data = Object.assign({}, data, {
        label: "Pattern / " + patternRecord.category.en,
        faLabel: "الگو / " + patternRecord.category.fa,
        title: patternRecord.pattern[0],
        faTitle: patternRecord.pattern[1],
        lede: "A Pattern record inside " + patternRecord.category.en + ". Evidence, drivers and management use stay attached to the same canonical route.",
        faLede: "رکورد الگو درون " + patternRecord.category.fa + ". شواهد، محرک‌ها و کاربرد مدیریتی در همان مسیر رسمی نگهداری می‌شوند."
      });
    }
    var subtitleMarkup = data.subtitle ? '<p class="inner-hero-subtitle" dir="auto" data-en="' + escapeHtml(data.subtitle) + '" data-fa="' + escapeHtml(data.faSubtitle || data.subtitle) + '">' + escapeHtml(data.subtitle) + '</p>' : "";
    var innerHeroMarkup = data.hideInnerHero ? "" : '<section class="inner-hero" data-chamfer="br" data-cut="44" data-radius="12" data-fillet="10"><div><p class="dbr-label" data-en="' + escapeHtml(data.label) + '" data-fa="' + escapeHtml(data.faLabel || literalTranslations[data.label] || data.label) + '">' + escapeHtml(data.label) + '</p><h1 dir="auto" data-en="' + escapeHtml(data.title) + '" data-fa="' + escapeHtml(data.faTitle || data.title) + '">' + escapeHtml(data.title) + '</h1>' + subtitleMarkup + '<p class="lede" data-en="' + escapeHtml(data.lede) + '" data-fa="' + escapeHtml(data.faLede || data.lede) + '">' + escapeHtml(data.lede) + "</p></div></section>";
    document.body.classList.add("inner-page");
    app.innerHTML = [
      '<div class="site-field"><div class="page-frame">',
      headerMarkup(data.nav),
      '<main class="inner-main">' + breadcrumbMarkup(page, data),
      innerHeroMarkup,
      anchorNavMarkup(data),
      '<div class="inner-layout"><div>' + renderInnerContent(data) + "</div></div></main>",
      footerMarkup(),
      "</div></div>",
      searchMarkup()
    ].join("");
    document.title = data.title + " — House of Technocrats";
  }

  function currentLanguage() {
    return new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "fa";
  }

  function translateLiteralText(lang) {
    function visit(node) {
      Array.from(node.childNodes || []).forEach(function (child) {
        if (child.nodeType === 3) {
          var original = translatedTextNodes.get(child) || child.nodeValue;
          var key = original.trim();
          var translated = literalTranslations[key] || applyPersianTermFallback(key);
          if (translated === key) return;
          if (!translatedTextNodes.has(child)) {
            translatedTextNodes.set(child, original);
          }
          var leading = (original.match(/^\s*/) || [""])[0];
          var trailing = (original.match(/\s*$/) || [""])[0];
          child.nodeValue = lang === "fa"
            ? leading + translated + trailing
            : original;
        } else if (child.nodeType === 1 && !child.matches("script, style")) {
          visit(child);
        }
      });
    }
    visit(document.body);
  }

  function translateAttributes(lang) {
    var placeholders = {
      "Search Categories, Patterns, People and Content": "جست‌وجو در دسته‌بندی‌ها، الگوها، افراد و محتوا",
      "Search categories": "جست‌وجو در دسته‌بندی‌ها",
      "Search patterns": "جست‌وجو در الگوها",
      "Search insights": "جست‌وجو در بینش‌ها",
      "Search people": "جست‌وجو در افراد",
      "Search the model": "جست‌وجو در مدل",
      "Name Surname": "نام و نام خانوادگی",
      "Chief Risk Officer": "مدیر ارشد ریسک",
      "Bank name": "نام بانک",
      "Draft biography…": "پیش‌نویس زندگی‌نامه…",
      "Banking": "بانکداری",
      "Maximum 800 characters": "حداکثر ۸۰۰ نویسه",
      "Leader / Thinker / Expert": "رهبر / اندیشمند / متخصص",
      "What would they contribute to Continuity?": "چه چیزی به تداوم اضافه می‌کنند؟",
      "Signal / document / experience": "نشانه / سند / تجربه",
      "Summarize the evidence and why it matters": "شواهد و دلیل اهمیت آن را خلاصه کنید",
      "https://linkedin.com/in/...": "https://linkedin.com/in/...",
      "Comment / proposal / evidence / conversation subject": "نظر / پیشنهاد / شاهد / موضوع گفت‌وگو",
      "Share the comment, proposal, experience or evidence": "نظر، پیشنهاد، تجربه یا شاهد را بنویسید",
      "Explain the reason, context or supporting evidence": "دلیل، زمینه یا شاهد پشتیبان را توضیح دهید",
      "your@email": "name@example.com"
    };
    var ariaLabels = {
      "Search": "جست‌وجو",
      "Search the site": "جست‌وجو در سایت",
      "Close search": "بستن جست‌وجو",
      "Open menu": "باز کردن فهرست",
      "Switch language": "تغییر زبان",
      "House of Technocrats home": "صفحهٔ اصلی خانه تکنوکرات‌ها",
      "Primary navigation": "ناوبری اصلی",
      "Selected people": "افراد برگزیده",
      "16 Radar Categories": "۱۶ دسته‌بندی رادار"
    };

    document.querySelectorAll("[placeholder]").forEach(function (element) {
      var original = element.getAttribute("data-en-placeholder") || element.getAttribute("placeholder");
      if (!element.hasAttribute("data-en-placeholder")) element.setAttribute("data-en-placeholder", original);
      var localizedPlaceholder = element.getAttribute("data-fa-placeholder") || placeholders[original];
      element.setAttribute("placeholder", lang === "fa" && localizedPlaceholder ? localizedPlaceholder : original);
    });

    document.querySelectorAll("[aria-label]").forEach(function (element) {
      var original = element.getAttribute("data-en-aria-label") || element.getAttribute("aria-label");
      if (!element.hasAttribute("data-en-aria-label")) element.setAttribute("data-en-aria-label", original);
      var localizedAriaLabel = element.getAttribute("data-fa-aria-label") || ariaLabels[original];
      element.setAttribute("aria-label", lang === "fa" && localizedAriaLabel ? localizedAriaLabel : original);
    });

    document.querySelectorAll("[alt]").forEach(function (element) {
      var original = element.getAttribute("data-en-alt") || element.getAttribute("alt");
      if (!element.hasAttribute("data-en-alt")) element.setAttribute("data-en-alt", original);
      var localizedAlt = element.getAttribute("data-fa-alt") || literalTranslations[original];
      element.setAttribute("alt", lang === "fa" && localizedAlt ? localizedAlt : original);
    });
  }

  function selectOptionLabel(option) {
    if (!option) return "";
    return currentLanguage() === "fa" && option.getAttribute("data-fa")
      ? option.getAttribute("data-fa")
      : option.getAttribute("data-en") || option.textContent;
  }

  function closeAidaSelects(except) {
    document.querySelectorAll(".aida-select.is-open").forEach(function (dropdown) {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      var button = dropdown.querySelector(".aida-select-button");
      var menu = dropdown.querySelector(".aida-select-menu");
      if (button) button.setAttribute("aria-expanded", "false");
      if (menu) menu.hidden = true;
    });
  }

  function syncAidaFilterSelects() {
    document.querySelectorAll(".aida-select").forEach(function (dropdown) {
      var select = dropdown.previousElementSibling;
      if (!select || select.tagName !== "SELECT") return;
      var value = dropdown.querySelector(".aida-select-value");
      var selectedOption = select.options[select.selectedIndex];
      if (value) value.textContent = selectOptionLabel(selectedOption);
      dropdown.querySelectorAll(".aida-select-option").forEach(function (optionButton) {
        var option = select.options[Number(optionButton.getAttribute("data-option-index"))];
        var selected = option && option.selected;
        optionButton.textContent = selectOptionLabel(option);
        optionButton.classList.toggle("is-selected", Boolean(selected));
        optionButton.setAttribute("aria-selected", String(Boolean(selected)));
      });
    });
  }

  function enhanceAidaFilterSelects() {
    var selects = Array.from(document.querySelectorAll(".filter-bar select, .people-filter-bar select, .insight-filter-bar select"));
    selects.forEach(function (select, selectIndex) {
      if (select.dataset.aidaSelect === "ready") return;
      select.dataset.aidaSelect = "ready";
      select.classList.add("aida-native-select");
      var dropdown = document.createElement("div");
      var menuId = "aida-select-menu-" + selectIndex + "-" + Math.random().toString(36).slice(2, 8);
      dropdown.className = "aida-select";
      dropdown.innerHTML = '<button class="aida-select-button" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + menuId + '"><span class="aida-select-value"></span>' + icon("chevron") + '</button><div class="aida-select-menu" id="' + menuId + '" role="listbox" hidden></div>';
      var menu = dropdown.querySelector(".aida-select-menu");
      Array.from(select.options).forEach(function (option, index) {
        var optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "aida-select-option";
        optionButton.setAttribute("role", "option");
        optionButton.setAttribute("data-option-index", String(index));
        optionButton.addEventListener("click", function () {
          select.selectedIndex = index;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          syncAidaFilterSelects();
          closeAidaSelects();
        });
        menu.appendChild(optionButton);
      });
      var toggle = dropdown.querySelector(".aida-select-button");
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var open = dropdown.classList.contains("is-open");
        closeAidaSelects(dropdown);
        dropdown.classList.toggle("is-open", !open);
        toggle.setAttribute("aria-expanded", String(!open));
        menu.hidden = open;
      });
      toggle.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowDown" && event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        menu.hidden = false;
        var selected = menu.querySelector(".aida-select-option.is-selected") || menu.querySelector(".aida-select-option");
        if (selected) selected.focus();
      });
      menu.addEventListener("keydown", function (event) {
        var options = Array.from(menu.querySelectorAll(".aida-select-option"));
        var current = options.indexOf(document.activeElement);
        if (event.key === "Escape") {
          closeAidaSelects();
          toggle.focus();
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          (options[current + 1] || options[0]).focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          (options[current - 1] || options[options.length - 1]).focus();
        }
      });
      select.insertAdjacentElement("afterend", dropdown);
    });
    syncAidaFilterSelects();
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      var original = element.getAttribute("data-en");
      if (!original) {
        original = element.innerHTML;
        element.setAttribute("data-en", original);
      }
      if (lang === "fa" && translations.fa[key]) {
        element.innerHTML = translations.fa[key];
      } else {
        element.innerHTML = original;
      }
    });
    document.querySelectorAll("[data-en][data-fa]:not([data-i18n])").forEach(function (element) {
      if (element.hasAttribute("data-en-lines") && element.hasAttribute("data-fa-lines")) {
        var lines = (lang === "fa" ? element.getAttribute("data-fa-lines") : element.getAttribute("data-en-lines")).split("|");
        var lineDir = lang === "fa" ? "rtl" : "auto";
        element.innerHTML = lines.map(function (line) { return '<span dir="' + lineDir + '">' + escapeHtml(line) + "</span>"; }).join("");
        return;
      }
      element.textContent = lang === "fa" ? element.getAttribute("data-fa") : element.getAttribute("data-en");
    });
    translateLiteralText(lang);
    translateAttributes(lang);
    document.querySelectorAll(".language-toggle").forEach(function (button) {
      button.textContent = lang === "fa" ? "EN / فا" : "FA / EN";
      button.setAttribute("aria-label", lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
    });
    var page = document.body.getAttribute("data-page") || "home";
    if (page === "home") {
      document.title = lang === "fa" ? "خانهٔ تکنوکرات‌ها — تداوم" : "House of Technocrats — Continuity";
    } else if (pageData[page]) {
      var titleData = page === "person" ? selectedPersonProfile() : page === "category" ? selectedRadarCategory() : page === "pattern" ? selectedRadarPattern() : pageData[page];
      var localizedTitle = page === "person"
        ? (lang === "fa" ? titleData.faName : titleData.name)
        : page === "category"
          ? (lang === "fa" ? titleData.fa : titleData.en)
        : page === "pattern"
          ? (lang === "fa" ? titleData.pattern[1] : titleData.pattern[0])
        : (lang === "fa" ? titleData.faTitle || titleData.title : titleData.title);
      document.title = localizedTitle +
        (lang === "fa" ? " — خانهٔ تکنوکرات‌ها" : " — House of Technocrats");
    }
    syncAidaFilterSelects();
    if (window.dbrApplyFillets) window.dbrApplyFillets();
  }

  function toggleLanguage() {
    var next = currentLanguage() === "fa" ? "en" : "fa";
    var url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.location.href = url.toString();
  }

  function renderSuggestions(container, query) {
    var term = query.trim();
    var matches = term ? searchIndex.filter(function (item) {
      return searchMatches(item.type + " " + item.title + " " + item.detail, term);
    }) : searchIndex.slice(0, 8);
    var groups = {};
    matches.forEach(function (item) {
      if (!groups[item.type]) groups[item.type] = [];
      if (groups[item.type].length < 3) groups[item.type].push(item);
    });
    function localized(value) {
      return currentLanguage() === "fa" && literalTranslations[value] ? literalTranslations[value] : value;
    }
    container.innerHTML = Object.keys(groups).map(function (type) {
      return '<div class="suggestion-group"><p class="dbr-label">' + escapeHtml(localized(type)) + '</p>' + groups[type].map(function (item) {
        return '<a href="' + item.href + '"><span>' + escapeHtml(localized(item.title)) + '</span><small>' + escapeHtml(localized(item.detail)) + "</small></a>";
      }).join("") + "</div>";
    }).join("") || '<div class="empty-state">' + escapeHtml(localized("No suggestions yet. Submit the search to see the full no-result state.")) + "</div>";
  }

  function bindCommonInteractions() {
    document.addEventListener("click", function () {
      closeAidaSelects();
    });

    var dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    dropdownTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var panel = document.getElementById(trigger.getAttribute("aria-controls"));
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        dropdownTriggers.forEach(function (otherTrigger) {
          if (otherTrigger === trigger) return;
          otherTrigger.setAttribute("aria-expanded", "false");
          var otherPanel = document.getElementById(otherTrigger.getAttribute("aria-controls"));
          if (otherPanel) otherPanel.hidden = true;
        });
        trigger.setAttribute("aria-expanded", String(!isOpen));
        if (panel) panel.hidden = isOpen;
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-dropdown")) {
        dropdownTriggers.forEach(function (trigger) {
          trigger.setAttribute("aria-expanded", "false");
          var panel = document.getElementById(trigger.getAttribute("aria-controls"));
          if (panel) panel.hidden = true;
        });
      }
    });

    var menuTrigger = document.querySelector(".menu-trigger");
    var mobilePanel = document.querySelector(".mobile-panel");
    if (menuTrigger && mobilePanel) {
      menuTrigger.addEventListener("click", function () {
        var open = menuTrigger.getAttribute("aria-expanded") === "true";
        menuTrigger.setAttribute("aria-expanded", String(!open));
        mobilePanel.hidden = open;
      });
    }

    var overlay = document.querySelector(".search-overlay");
    var searchInput = overlay && overlay.querySelector('input[type="search"]');
    var suggestionBox = overlay && overlay.querySelector(".search-suggestions");
    document.querySelectorAll(".search-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        if (!overlay) return;
        overlay.hidden = false;
        renderSuggestions(suggestionBox, searchInput.value);
        window.setTimeout(function () { searchInput.focus(); }, 30);
      });
    });
    var searchClose = overlay && overlay.querySelector(".search-close");
    if (searchClose) searchClose.addEventListener("click", function () { overlay.hidden = true; });
    if (overlay) overlay.addEventListener("click", function (event) {
      if (event.target === overlay) overlay.hidden = true;
    });
    if (searchInput) searchInput.addEventListener("input", function () {
      renderSuggestions(suggestionBox, searchInput.value);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay && !overlay.hidden) {
        overlay.hidden = true;
      }
    });

    document.querySelectorAll(".language-toggle").forEach(function (button) {
      button.addEventListener("click", toggleLanguage);
    });

    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href$=".html"], a[href*=".html#"], a[href*=".html?"]');
      if (!link || link.origin !== window.location.origin) return;
      var target = new URL(link.href);
      if (currentLanguage() === "en") target.searchParams.set("lang", "en");
      else target.searchParams.delete("lang");
      link.href = target.href;
    }, true);

    document.querySelectorAll("[data-profile-carousel]").forEach(function (button) {
      button.addEventListener("click", function () {
        var section = button.closest(".profile-domain-section");
        var track = section && section.querySelector(".profile-domain-grid");
        if (!track) return;
        var step = Math.max(280, track.clientWidth * 0.74);
        var direction = button.getAttribute("data-profile-carousel") === "next" ? 1 : -1;
        track.scrollBy({ left: step * direction, behavior: "smooth" });
      });
    });

    document.querySelectorAll("[data-audio-player]").forEach(function (player) {
      var audio = player.querySelector("audio");
      var toggle = player.querySelector("[data-audio-toggle]");
      var progress = player.querySelector("[data-audio-progress]");
      var current = player.querySelector("[data-audio-current]");
      var duration = player.querySelector("[data-audio-duration]");
      var fill = player.querySelector("[data-audio-fill]");
      var waveform = player.querySelector("[data-audio-waveform]");
      if (!audio || !toggle || !progress) return;

      function formatTime(value) {
        if (!isFinite(value) || value < 0) return "--:--";
        var minutes = Math.floor(value / 60);
        var seconds = Math.floor(value % 60);
        return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
      }

      function setPlaying(isPlaying) {
        player.classList.toggle("is-playing", isPlaying);
        var label = toggle.querySelector("[data-en]");
        if (!label) return;
        var en = isPlaying ? "Pause" : "Play episode";
        var fa = isPlaying ? "توقف" : "پخش قسمت";
        label.setAttribute("data-en", en);
        label.setAttribute("data-fa", fa);
        label.textContent = currentLanguage() === "fa" ? fa : en;
      }

      function updateProgress() {
        var ratio = audio.duration ? audio.currentTime / audio.duration : 0;
        progress.value = String(Math.round(ratio * 1000));
        if (fill) fill.style.inlineSize = Math.max(0, Math.min(100, ratio * 100)) + "%";
        if (current) current.textContent = formatTime(audio.currentTime);
        if (duration) duration.textContent = formatTime(audio.duration);
      }

      toggle.addEventListener("click", function () {
        if (audio.paused) {
          document.querySelectorAll("[data-audio-player] audio").forEach(function (otherAudio) {
            if (otherAudio !== audio) otherAudio.pause();
          });
          audio.play().then(function () { setPlaying(true); }).catch(function () { setPlaying(false); });
        } else {
          audio.pause();
        }
      });

      progress.addEventListener("input", function () {
        if (!audio.duration) return;
        audio.currentTime = (Number(progress.value) / 1000) * audio.duration;
      });

      if (waveform) {
        waveform.addEventListener("click", function (event) {
          if (!audio.duration) return;
          var rect = waveform.getBoundingClientRect();
          var ratio = (event.clientX - rect.left) / rect.width;
          audio.currentTime = Math.max(0, Math.min(1, ratio)) * audio.duration;
        });
      }

      audio.addEventListener("loadedmetadata", updateProgress);
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("play", function () { setPlaying(true); });
      audio.addEventListener("pause", function () { setPlaying(false); });
      audio.addEventListener("ended", function () {
        setPlaying(false);
        updateProgress();
      });
      updateProgress();
    });
  }

  function bindLandingInteractions() {
    var newsletter = document.querySelector(".newsletter-card");
    if (newsletter) {
      newsletter.addEventListener("submit", function (event) {
        event.preventDefault();
        var email = newsletter.querySelector('input[type="email"]');
        var status = newsletter.querySelector(".form-status");
        if (!email.checkValidity()) {
          status.textContent = currentLanguage() === "fa" ? "یک نشانی ایمیل معتبر وارد کنید." : "Enter a valid email address.";
          email.focus();
          return;
        }
        status.textContent = currentLanguage() === "fa"
          ? "عضویت انجام شد. یادداشت بعدی رادار با ایمیل ارسال می‌شود."
          : "Subscribed. The next Radar field note will arrive by email.";
        newsletter.reset();
      });
    }

    var conversation = document.querySelector(".play-button");
    if (conversation) {
      conversation.addEventListener("click", function () {
        window.location.href = "podcast-ecosystem.html";
      });
    }
  }

  function bindInteractiveRadar() {
    var canvas = document.querySelector(".radar-interactive-canvas");
    var stage = document.querySelector(".radar-canvas-stage");
    var detail = document.querySelector(".radar-live-detail");
    if (!canvas || !stage || !detail) return;

    var context = canvas.getContext("2d");
    var sectorButtons = Array.from(stage.querySelectorAll(".radar-sector-button"));
    var dotButtons = Array.from(stage.querySelectorAll(".radar-pattern-dot"));
    var patternList = detail.querySelector(".radar-live-patterns");
    var selectedCategoryIndex = 0;
    var selectedPatternIndex = 0;
    var selectedIsPattern = false;
    var geometry = { width: 0, height: 0, centerX: 0, centerY: 0, radius: 0 };
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var startedAt = performance.now();

    function setBilingual(element, en, fa) {
      if (!element) return;
      element.setAttribute("data-en", en);
      element.setAttribute("data-fa", fa);
      element.textContent = currentLanguage() === "fa" ? fa : en;
    }

    function patternButtonsMarkup(category, activeIndex) {
      return category.patterns.map(function (pattern, index) {
        var number = String(index + 1).padStart(2, "0");
        return '<button class="radar-live-pattern' + (index === activeIndex ? ' is-active' : '') + '" type="button" data-pattern-index="' + index + '"><span class="dbr-label" data-en="PATTERN ' + number + '" data-fa="الگو ' + persianDigits(number) + '">' + (currentLanguage() === "fa" ? "الگو " + persianDigits(number) : "PATTERN " + number) + '</span><strong data-en="' + escapeHtml(pattern[0]) + '" data-fa="' + escapeHtml(pattern[1]) + '">' + escapeHtml(currentLanguage() === "fa" ? pattern[1] : pattern[0]) + '</strong></button>';
      }).join("");
    }

    function renderSelection(categoryIndex, patternIndex, showPattern) {
      var category = radarCategories[categoryIndex];
      var pattern = category.patterns[patternIndex];
      var number = String(categoryIndex + 1).padStart(2, "0");
      var patternNumber = String(patternIndex + 1).padStart(2, "0");
      var signal = radarSignalFor(categoryIndex, patternIndex);
      var signalScore = String(signal.score);
      var freshnessEn = signal.freshness === "new" ? "newer signal, closer to the center" : "established signal, farther from the center";
      var freshnessFa = signal.freshness === "new" ? "نشانهٔ تازه‌تر، نزدیک‌تر به مرکز" : "نشانهٔ تثبیت‌شده، دورتر از مرکز";
      selectedCategoryIndex = categoryIndex;
      selectedPatternIndex = patternIndex;
      selectedIsPattern = showPattern;

      detail.classList.toggle("is-category-view", !showPattern);
      detail.classList.toggle("is-pattern-view", showPattern);
      var numberElement = detail.querySelector(".radar-live-number");
      setBilingual(numberElement, number, persianDigits(number));
      if (numberElement) numberElement.hidden = false;
      var titleLabel = detail.querySelector(".radar-live-title-label");
      setBilingual(titleLabel, "Category Name", "نام دسته‌بندی");
      if (titleLabel) titleLabel.hidden = showPattern;
      setBilingual(detail.querySelector(".radar-live-title"), category.en, category.fa);
      var patternName = detail.querySelector(".radar-live-pattern-name");
      if (patternName) patternName.hidden = !showPattern;
      setBilingual(detail.querySelector(".radar-live-pattern-heading"), pattern[0], pattern[1]);
      setBilingual(
        detail.querySelector(".radar-live-description"),
        showPattern ? "A Pattern signal inside " + category.en + ". It marks a recurring mechanism that the Radar watches through evidence, weak signals and continuity impact." : category.enDescription,
        showPattern ? "نشانهٔ الگویی در " + category.fa + "؛ سازوکاری تکرارشونده که رادار از راه شواهد، نشانه‌های ضعیف و اثر بر تداوم پایش می‌کند." : category.faDescription
      );
      patternList.innerHTML = patternButtonsMarkup(category, patternIndex);
      patternList.hidden = showPattern;
      setBilingual(
        detail.querySelector(".radar-live-pattern-copy"),
        "Signal score " + signalScore + "/10; " + freshnessEn + ".",
        "امتیاز نشانه " + persianDigits(signalScore) + " از ۱۰؛ " + freshnessFa + "."
      );
      var selection = detail.querySelector(".radar-live-selection");
      if (selection) selection.hidden = !showPattern;

      var openLink = detail.querySelector(".radar-live-open");
      openLink.href = showPattern ? patternLink(category, pattern) : categoryLink(category);
      setBilingual(openLink.querySelector("span"), showPattern ? "See Pattern Details" : "See Category Details", showPattern ? "دیدن جزئیات الگو" : "دیدن جزئیات دسته‌بندی");

      sectorButtons.forEach(function (button, index) {
        button.classList.toggle("is-active", index === categoryIndex);
        button.setAttribute("aria-pressed", String(index === categoryIndex));
      });
      dotButtons.forEach(function (button) {
        var isActive = Number(button.dataset.categoryIndex) === categoryIndex && Number(button.dataset.patternIndex) === patternIndex && showPattern;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      drawRadar(performance.now());
      if (window.dbrApplyFillets) window.dbrApplyFillets();
    }

    function positionControls() {
      var width = stage.clientWidth;
      var height = stage.clientHeight;
      var centerX = width * 0.46;
      var centerY = height * 0.5;
      var radius = Math.min(width * 0.39, height * 0.41);
      geometry = { width: width, height: height, centerX: centerX, centerY: centerY, radius: radius };
      var ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      sectorButtons.forEach(function (button, index) {
        var angle = (index * 22.5 - 90) * Math.PI / 180;
        button.style.left = (centerX + Math.cos(angle) * (radius + 29)) + "px";
        button.style.top = (centerY + Math.sin(angle) * (radius + 29)) + "px";
      });
      dotButtons.forEach(function (button) {
        var angle = (Number(button.dataset.angle) - 90) * Math.PI / 180;
        var pointRadius = radius * Number(button.dataset.radius);
        button.style.left = (centerX + Math.cos(angle) * pointRadius) + "px";
        button.style.top = (centerY + Math.sin(angle) * pointRadius) + "px";
      });
      drawRadar(performance.now());
    }

    function drawRadar(time) {
      var width = geometry.width;
      var height = geometry.height;
      var centerX = geometry.centerX;
      var centerY = geometry.centerY;
      var radius = geometry.radius;
      if (!width || !height || !radius) return;
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(centerX, centerY);

      var arc = Math.PI * 2 / 16;
      function strokeRadarLines(strokeStyle, outerStyle, lineWidth) {
        context.strokeStyle = strokeStyle;
        context.lineWidth = lineWidth;
        for (var ring = 1; ring <= 4; ring += 1) {
          context.beginPath();
          context.arc(0, 0, radius * ring / 4, 0, Math.PI * 2);
          context.stroke();
        }
        for (var index = 0; index < 16; index += 1) {
          var lineAngle = -Math.PI / 2 + index * arc - arc / 2;
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(Math.cos(lineAngle) * radius, Math.sin(lineAngle) * radius);
          context.stroke();
        }
        context.strokeStyle = outerStyle || strokeStyle;
        context.lineWidth = lineWidth + 0.7;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.stroke();
      }

      var selectedStart = -Math.PI / 2 + selectedCategoryIndex * arc - arc / 2;
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, radius, selectedStart, selectedStart + arc);
      context.closePath();
      context.fillStyle = "rgba(28, 73, 109, 0.16)";
      context.fill();

      strokeRadarLines("rgba(29, 70, 103, 0.2)", "rgba(29, 70, 103, 0.28)", 1);

      var elapsed = reduceMotion ? 0 : (time - startedAt) / 1000;
      var sweepAngle = -Math.PI / 2 + elapsed * 0.34;
      var sweepWidth = 0.72;
      var sweepStart = sweepAngle - sweepWidth;
      var sweepGradient = context.createLinearGradient(
        Math.cos(sweepStart) * radius * 0.35,
        Math.sin(sweepStart) * radius * 0.35,
        Math.cos(sweepAngle) * radius,
        Math.sin(sweepAngle) * radius
      );
      sweepGradient.addColorStop(0, "rgba(113, 205, 255, 0.02)");
      sweepGradient.addColorStop(0.46, "rgba(113, 205, 255, 0.13)");
      sweepGradient.addColorStop(1, "rgba(190, 235, 255, 0.36)");
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, radius, sweepStart, sweepAngle);
      context.closePath();
      context.fillStyle = sweepGradient;
      context.fill();
      context.save();
      context.clip();
      strokeRadarLines("rgba(113, 205, 255, 0.62)", "rgba(166, 226, 255, 0.84)", 1.4);
      context.restore();
      context.strokeStyle = "rgba(190, 235, 255, 0.9)";
      context.lineWidth = 2.5;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(Math.cos(sweepAngle) * radius, Math.sin(sweepAngle) * radius);
      context.stroke();
      context.restore();
    }

    function animate(time) {
      drawRadar(time);
      if (!reduceMotion) window.requestAnimationFrame(animate);
    }

    sectorButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        renderSelection(Number(button.dataset.categoryIndex), 0, false);
      });
    });
    dotButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        renderSelection(Number(button.dataset.categoryIndex), Number(button.dataset.patternIndex), true);
      });
    });
    patternList.addEventListener("click", function (event) {
      var button = event.target.closest(".radar-live-pattern");
      if (button) renderSelection(selectedCategoryIndex, Number(button.dataset.patternIndex), true);
    });
    canvas.addEventListener("click", function (event) {
      var bounds = canvas.getBoundingClientRect();
      var x = event.clientX - bounds.left - geometry.centerX;
      var y = event.clientY - bounds.top - geometry.centerY;
      if (Math.hypot(x, y) > geometry.radius) return;
      var degrees = (Math.atan2(y, x) * 180 / Math.PI + 90 + 360) % 360;
      var categoryIndex = Math.floor((degrees + 11.25) / 22.5) % 16;
      renderSelection(categoryIndex, 0, false);
    });

    if (!reduceMotion) {
      window.setInterval(function () {
        dotButtons.forEach(function (button) {
          if (Math.random() > 0.54) button.classList.add("is-flashing");
          else button.classList.remove("is-flashing");
        });
        var signalCount = document.querySelector(".radar-status-signals");
        if (signalCount) setBilingual(signalCount, "32", persianDigits(32));
      }, 2000);
    }

    if ("ResizeObserver" in window) new ResizeObserver(positionControls).observe(stage);
    else window.addEventListener("resize", positionControls);
    positionControls();
    renderSelection(0, 0, false);
    window.requestAnimationFrame(animate);
  }

  function bindInsightsPage() {
    var slides = Array.from(document.querySelectorAll(".insight-slide"));
    var dots = Array.from(document.querySelectorAll(".insight-carousel-dot"));
    var current = 0;

    function showSlide(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
      if (window.dbrApplyFillets) window.dbrApplyFillets();
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-slide-index")) || 0);
      });
    });

    if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.setInterval(function () { showSlide(current + 1); }, 5600);
    }

    var search = document.querySelector(".insight-search");
    var typeFilter = document.querySelector(".insight-type-filter");
    var subjectFilter = document.querySelector(".insight-subject-filter");
    var industryFilter = document.querySelector(".insight-industry-filter");
    var personFilter = document.querySelector(".insight-person-filter");
    var grid = document.querySelector(".insight-card-grid");
    var cards = Array.from(document.querySelectorAll(".insight-card"));
    var count = document.querySelector(".insight-result-count");
    var empty = document.querySelector(".insight-empty");

    function setLocalizedText(element, en, fa) {
      if (!element) return;
      element.setAttribute("data-en", en);
      element.setAttribute("data-fa", fa);
      element.textContent = currentLanguage() === "fa" ? fa : en;
    }

    function updateInsights() {
      if (!cards.length) return;
      var shown = 0;
      var typeValue = typeFilter ? typeFilter.value : "";
      var subjectValue = subjectFilter ? subjectFilter.value : "";
      var industryValue = industryFilter ? industryFilter.value : "";
      var personValue = personFilter ? personFilter.value : "";
      var searchValue = search ? search.value : "";
      var activeFilters = Boolean(typeValue || subjectValue || industryValue || personValue || searchValue.trim());
      var visibleCards = [];
      var hiddenCards = [];
      var insightGridItem = function (card) {
        var shell = card.closest("[data-dbr-shell]");
        return shell && grid && shell.parentElement === grid ? shell : card;
      };
      cards.forEach(function (card) {
        var visible = (!typeValue || card.getAttribute("data-type") === typeValue) &&
          (!subjectValue || card.getAttribute("data-subject") === subjectValue) &&
          (!industryValue || card.getAttribute("data-industry") === industryValue) &&
          (!personValue || card.getAttribute("data-person") === personValue) &&
          searchMatches((card.getAttribute("data-search") || "") + " " + card.textContent, searchValue);
        var gridItem = insightGridItem(card);
        card.hidden = !visible;
        card.classList.toggle("is-insight-hidden", !visible);
        if (gridItem !== card) {
          gridItem.hidden = !visible;
          gridItem.classList.toggle("is-insight-hidden", !visible);
          gridItem.setAttribute("data-order", card.getAttribute("data-order") || "0");
        }
        if (visible) shown += 1;
        (visible ? visibleCards : hiddenCards).push(gridItem);
      });
      if (grid) {
        grid.classList.toggle("is-filtered", activeFilters);
        var itemOrder = function (item) {
          var card = item.classList.contains("insight-card") ? item : item.querySelector(".insight-card");
          return Number((card && card.getAttribute("data-order")) || item.getAttribute("data-order") || 0);
        };
        var byOriginalOrder = function (a, b) {
          return itemOrder(a) - itemOrder(b);
        };
        visibleCards.sort(byOriginalOrder).concat(hiddenCards.sort(byOriginalOrder)).forEach(function (card) { grid.appendChild(card); });
      }
      setLocalizedText(count, shown + " results shown", persianDigits(shown) + " نتیجه نمایش داده شد");
      if (empty) empty.hidden = shown !== 0;
      if (window.dbrApplyFillets) window.dbrApplyFillets();
    }

    if (search) search.addEventListener("input", updateInsights);
    [typeFilter, subjectFilter, industryFilter, personFilter].forEach(function (filter) {
      if (filter) filter.addEventListener("change", updateInsights);
    });
    updateInsights();
  }

  function bindSecondaryInteractions(page) {
    bindInteractiveRadar();
    bindInsightsPage();
    document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!open));
        var panel = document.getElementById(trigger.getAttribute("aria-controls"));
        if (panel) panel.hidden = open;
        if (window.dbrApplyFillets) window.dbrApplyFillets();
      });
    });

    var directorySearch = document.querySelector(".directory-search");
    if (directorySearch) {
      var directoryResults = Array.from(document.querySelectorAll(".directory-results [data-search]"));
      var directoryCount = document.querySelector(".result-count");
      var directoryEmpty = document.querySelector(".directory-section .empty-state");
      var directoryFilter = document.querySelector(".directory-filter");
      var directorySort = document.querySelector(".directory-sort");
      var directoryContainer = document.querySelector(".directory-results");

      function updateDirectory() {
        var shown = 0;
        var role = directoryFilter ? directoryFilter.value : "";
        directoryResults.forEach(function (item) {
          var searchableText = (item.getAttribute("data-search") || "") + " " + item.textContent;
          var matchesRole = !role || item.getAttribute("data-role") === role;
          var visible = matchesRole && searchMatches(searchableText, directorySearch.value);
          item.hidden = !visible;
          if (visible) shown += 1;
        });
        if (directorySort && directoryContainer) {
          directoryResults.slice().sort(function (a, b) {
            if (directorySort.value === "alphabetical") return (a.getAttribute("data-name") || "").localeCompare(b.getAttribute("data-name") || "");
            return Number(a.getAttribute("data-order") || 0) - Number(b.getAttribute("data-order") || 0);
          }).forEach(function (item) { directoryContainer.appendChild(item); });
        }
        if (directoryCount) directoryCount.textContent = resultCountText(shown);
        directoryEmpty.hidden = shown !== 0;
      }

      directorySearch.addEventListener("input", updateDirectory);
      if (directoryFilter) directoryFilter.addEventListener("change", updateDirectory);
      if (directorySort) directorySort.addEventListener("change", updateDirectory);
    }

    var radarCards = Array.from(document.querySelectorAll(".radar-category-card"));
    if (radarCards.length) {
      var categorySearch = document.querySelector(".radar-category-search");
      var categoryCount = document.querySelector(".radar-filter-count");
      var categoryEmpty = document.querySelector(".radar-category-empty");

      function setLocalizedContent(element, en, fa) {
        if (!element) return;
        element.setAttribute("data-en", en);
        element.setAttribute("data-fa", fa);
        element.textContent = currentLanguage() === "fa" ? fa : en;
      }

      function updateRadarCards() {
        var shown = 0;
        radarCards.forEach(function (card) {
          var visible = searchMatches(card.getAttribute("data-search") || "", categorySearch ? categorySearch.value : "");
          card.hidden = !visible;
          if (visible) shown += 1;
        });
        setLocalizedContent(categoryCount, shown + " of 16 Domains shown", persianDigits(shown) + " از ۱۶ دامنه نمایش داده شده");
        if (categoryEmpty) categoryEmpty.hidden = shown !== 0;
      }

      if (categorySearch) categorySearch.addEventListener("input", updateRadarCards);
      updateRadarCards();
    }

    var tabs = Array.from(document.querySelectorAll(".tab-button"));
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (item) {
          item.setAttribute("aria-selected", String(item === tab));
          var panel = document.getElementById(item.getAttribute("aria-controls"));
          if (panel) panel.hidden = item !== tab;
        });
      });
    });

    var anchorLinks = Array.from(document.querySelectorAll(".anchor-tabs a"));
    if (anchorLinks.length) {
      var anchorTargets = anchorLinks.map(function (link) {
        return document.getElementById(link.getAttribute("data-anchor-id"));
      });
      function setActiveAnchor(id) {
        anchorLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("data-anchor-id") === id);
        });
      }
      anchorLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          setActiveAnchor(link.getAttribute("data-anchor-id"));
        });
      });
      if ("IntersectionObserver" in window) {
        var anchorObserver = new IntersectionObserver(function (entries) {
          var visible = entries
            .filter(function (entry) { return entry.isIntersecting; })
            .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
          if (visible) setActiveAnchor(visible.target.id);
        }, { rootMargin: "-24% 0px -62% 0px", threshold: [0.05, 0.3, 0.6] });
        anchorTargets.forEach(function (target) {
          if (target) anchorObserver.observe(target);
        });
      }
      if (window.location.hash) {
        var target = document.getElementById(window.location.hash.slice(1));
        if (target) requestAnimationFrame(function () { target.scrollIntoView(); });
      }
    }

    var mediaOpen = document.querySelector(".media-open");
    if (mediaOpen) {
      mediaOpen.addEventListener("click", function () {
        var firstAccordion = document.querySelector(".accordion-trigger");
        if (firstAccordion) {
          firstAccordion.click();
          firstAccordion.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    }

    var houseModal = document.querySelector("[data-house-participate-modal]");
    if (houseModal) {
      var housePanels = Array.from(houseModal.querySelectorAll("[data-house-participate-panel]"));
      var houseLastTrigger = null;

      function closeHouseModal() {
        houseModal.classList.remove("is-open");
        houseModal.hidden = true;
        document.body.classList.remove("modal-open");
        if (houseLastTrigger) houseLastTrigger.focus();
      }

      function openHouseModal(type, trigger) {
        houseLastTrigger = trigger;
        housePanels.forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-house-participate-panel") !== type;
        });
        houseModal.hidden = false;
        houseModal.classList.add("is-open");
        document.body.classList.add("modal-open");
        if (window.dbrApplyFillets) window.dbrApplyFillets();
        requestAnimationFrame(function () {
          var activePanel = houseModal.querySelector('[data-house-participate-panel="' + type + '"]');
          var firstField = activePanel ? activePanel.querySelector("input, textarea, select, button") : null;
          if (firstField) firstField.focus();
        });
      }

      document.querySelectorAll("[data-house-participate-trigger]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          openHouseModal(trigger.getAttribute("data-house-participate-trigger"), trigger);
        });
      });

      houseModal.querySelectorAll("[data-house-participate-close]").forEach(function (closeButton) {
        closeButton.addEventListener("click", closeHouseModal);
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !houseModal.hidden) closeHouseModal();
      });
    }

    document.querySelectorAll(".site-form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var message = form.querySelector(".form-message");
        if (!form.checkValidity()) {
          var invalidMessage = "Complete the required fields before continuing.";
          message.textContent = currentLanguage() === "fa" ? literalTranslations[invalidMessage] : invalidMessage;
          var invalid = form.querySelector(":invalid");
          if (invalid) invalid.focus();
          return;
        }
        var successMessage = form.getAttribute("data-success");
        var localizedSuccess = form.getAttribute("data-success-fa") || literalTranslations[successMessage];
        message.textContent = currentLanguage() === "fa" && localizedSuccess ? localizedSuccess : successMessage;
        form.querySelectorAll("input, textarea, button").forEach(function (control) {
          control.disabled = true;
        });
        var successUrl = form.getAttribute("data-success-url");
        if (successUrl) {
          var target = new URL(successUrl, window.location.href);
          if (currentLanguage() === "en") target.searchParams.set("lang", "en");
          window.setTimeout(function () { window.location.href = target.href; }, 450);
        }
      });
      var saveDraft = form.querySelector(".save-draft");
      if (saveDraft) saveDraft.addEventListener("click", function () {
        var draftMessage = "Draft saved for this session.";
        form.querySelector(".form-message").textContent = currentLanguage() === "fa" ? literalTranslations[draftMessage] : draftMessage;
      });
    });

    if (page === "search") bindSearchPage();
  }

  function bindSearchPage() {
    var input = document.querySelector(".full-search-input");
    var results = document.querySelector(".full-search-results");
    var count = document.querySelector(".result-count");
    var empty = document.querySelector(".full-search-empty");
    var title = document.querySelector(".search-query-title");
    if (!input || !results) return;

    function update() {
      var term = input.value.trim();
      var matches = searchIndex.filter(function (item) {
        return !term || searchMatches(item.type + " " + item.title + " " + item.detail, term);
      });
      title.textContent = input.value || "all";
      results.innerHTML = matches.map(function (item) {
        return '<a class="content-item" href="' + item.href + '"><div><p class="dbr-label">' + item.type + '</p><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.detail) + '</p></div><span class="dbr-label content-action"><span class="content-action-copy">OPEN</span>' + icon("arrow") + "</span></a>";
      }).join("");
      count.textContent = matches.length + " grouped results / Persian and English";
      empty.hidden = matches.length !== 0;
    }

    input.addEventListener("input", update);
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page") || "home";
    if (page !== "home") renderSecondary(page);
    bindCommonInteractions();
    if (page === "home") bindLandingInteractions();
    else bindSecondaryInteractions(page);
    applyLanguage(currentLanguage());
    enhanceAidaFilterSelects();
    if (window.dbrApplyFillets) window.dbrApplyFillets();
  });
})();

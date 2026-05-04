export type Section = {
  id: string;
  title: string;
  intro?: string;
  blocks: Block[];
};

export type Block =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone?: "info" | "warn" | "tip"; title?: string; content: string }
  | { type: "link"; label: string; url: string; description?: string }
  | { type: "keys"; items: string[] };

export type Quiz = {
  question: string;
  options: string[];
  answer: number;
  explain?: string;
};

export type Module = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  icon: string; // emoji
  estMinutes: number;
  color: "amber" | "copper" | "keycap" | "primary";
  sections: Section[];
  quiz: Quiz[];
};

export const modules: Module[] = [
  {
    id: "intro",
    number: 1,
    title: "Introduction to the Company",
    tagline: "Where mechanical keyboards meet a perfect cup of coffee.",
    icon: "☕",
    estMinutes: 15,
    color: "copper",
    sections: [
      {
        id: "overview",
        title: "1.1 Overview of the Shop",
        blocks: [
          { type: "text", content: "Click N Brew is the first custom mechanical keyboard shop with a coffee bar in Malaysia — a space built by enthusiasts, for enthusiasts." },
          { type: "callout", tone: "tip", title: "Mission", content: "To craft personalised typing experiences while serving great coffee, building a community of makers and tinkerers." },
          { type: "list", items: [
            "Founded by passionate mechanical keyboard hobbyists",
            "Custom builds, workshops, and repair services",
            "A 'shop' AND a 'playground' for keyboard enthusiasts",
            "Core values: innovation, customer satisfaction, attention to detail",
          ]},
        ],
      },
      {
        id: "tour",
        title: "1.2 Tour of the Shop",
        blocks: [
          { type: "list", items: [
            "Sales floor — product display & customer interaction",
            "Workshop area — assembly, customisation & repair",
            "Coffee bar — espresso, lattes & specialty drinks",
            "Storage rooms — inventory & spare parts",
            "Toilets & customer seating",
          ]},
          { type: "callout", tone: "warn", title: "CCTV Zones", content: "CCTV is active across sales floor, workshop, coffee bar and entry points. Always behave professionally — you are on camera." },
        ],
      },
      {
        id: "team",
        title: "1.3 Team Introduction",
        blocks: [
          { type: "text", content: "Meet the team, learn the reporting line, and understand what's expected of you during your probation period." },
          { type: "list", items: [
            "Clear communication of performance expectations",
            "Strong work ethic & teamwork",
            "Probation period evaluation criteria",
          ]},
        ],
      },
    ],
    quiz: [
      { question: "What makes Click N Brew unique in Malaysia?", options: ["First custom keyboard + coffee bar", "Largest gaming café", "Cheapest keycap supplier"], answer: 0 },
      { question: "Which of these is a core company value?", options: ["Speed at all costs", "Attention to detail", "Volume sales only"], answer: 1 },
    ],
  },
  {
    id: "product",
    number: 2,
    title: "Product Knowledge",
    tagline: "Switches, keycaps, profiles — speak the language of mech.",
    icon: "⌨️",
    estMinutes: 30,
    color: "keycap",
    sections: [
      {
        id: "basics",
        title: "2.1 Mechanical Keyboard Basics",
        blocks: [
          { type: "text", content: "A mechanical keyboard uses individual switches under each key, unlike membrane keyboards which use a single rubber dome sheet." },
          { type: "callout", tone: "info", title: "The 6 Core Components", content: "Switches • Keycaps • PCB • Case • Stabilizers • Plate" },
        ],
      },
      {
        id: "switches",
        title: "2.2 Types of Key Switches",
        intro: "Switches define how a keyboard feels and sounds. Help customers find their match.",
        blocks: [
          { type: "list", items: [
            "Linear — smooth top-to-bottom, no bump",
            "Tactile — noticeable bump mid-press",
            "Clicky — tactile bump + audible click",
            "Silent — dampened for quiet typing",
            "Magnetic / Hall Effect — analog, adjustable actuation",
            "Alps & Low-profile — niche & slim form factors",
          ]},
          { type: "keys", items: ["Gateron", "Kailh", "HMX", "BSUN", "Jerrzi", "KTT", "AKKO", "Outemu", "JWK", "TTC"] },
          { type: "callout", tone: "tip", title: "Switch Tester", content: "Always offer the switch tester. Let customers feel the difference — words rarely beat hands-on." },
        ],
      },
      {
        id: "keycaps",
        title: "2.3 Keycap Materials & Profiles",
        blocks: [
          { type: "text", content: "Two main materials, several profile shapes — each with its own feel & sound." },
          { type: "list", items: [
            "ABS — smoother, brighter sound, may shine over time",
            "PBT — textured, deeper sound, more durable",
            "Profiles: OEM, Cherry, SA, DSA, XDA, MDA",
          ]},
        ],
      },
      {
        id: "custom",
        title: "2.4 Customizing Keyboards",
        blocks: [
          { type: "text", content: "Help customers personalise: case colour, RGB lighting, layout, weights, sound dampening." },
          { type: "keys", items: ["ANSI", "ISO", "60%", "65%", "TKL", "1800", "Full"] },
        ],
      },
      {
        id: "accessories",
        title: "2.5 Accessories, Products & Gift Cards",
        blocks: [
          { type: "text", content: "Know every product on the shelf — desk mats, cables, lube, films, tools, gift cards. Memorise pricing tiers and key specs." },
        ],
      },
    ],
    quiz: [
      { question: "Which switch type has a bump AND an audible click?", options: ["Linear", "Tactile", "Clicky"], answer: 2 },
      { question: "PBT keycaps are generally…", options: ["Smoother & shinier", "More textured & durable", "Always cheaper"], answer: 1 },
      { question: "Which is NOT a keyboard layout size?", options: ["TKL", "1800", "ESPRESSO"], answer: 2 },
    ],
  },
  {
    id: "service",
    number: 3,
    title: "Customer Service Excellence",
    tagline: "Every customer leaves smiling — even the tricky ones.",
    icon: "🤝",
    estMinutes: 20,
    color: "amber",
    sections: [
      {
        id: "needs",
        title: "3.1 Understanding Customer Needs",
        blocks: [
          { type: "list", items: [
            "Ask open questions: 'What do you use your keyboard for?'",
            "Translate jargon into everyday analogies",
            "Tailor recommendations to budget AND use-case",
            "Encourage hands-on trying before buying",
          ]},
        ],
      },
      {
        id: "queries",
        title: "3.2 Handling Common Queries",
        blocks: [
          { type: "text", content: "Master the FAQ: hot-swap vs soldered, sound profile, lubing, build time, warranty." },
          { type: "callout", tone: "warn", title: "Escalation", content: "If a switch/PCB issue is beyond basic troubleshooting — escalate to the technician. Never guess." },
        ],
      },
      {
        id: "difficult",
        title: "3.3 Dealing with Difficult Customers",
        blocks: [
          { type: "list", items: [
            "Stay calm. Lower your voice, never match their tone",
            "Acknowledge frustration before defending policy",
            "Offer options, not ultimatums",
            "When stuck — bring in a senior teammate",
          ]},
        ],
      },
    ],
    quiz: [
      { question: "First step when a customer is upset?", options: ["Defend the policy", "Acknowledge their frustration", "Offer a refund instantly"], answer: 1 },
      { question: "When should you escalate a technical issue?", options: ["Immediately, always", "After basic troubleshooting fails", "Never"], answer: 1 },
    ],
  },
  {
    id: "sales",
    number: 4,
    title: "Sales Techniques",
    tagline: "Demo, upsell, close — the natural way.",
    icon: "💸",
    estMinutes: 20,
    color: "amber",
    sections: [
      {
        id: "demo",
        title: "4.1 Product Demonstration",
        blocks: [
          { type: "list", items: [
            "Lead with feel — let them type before you talk",
            "Highlight 1–2 standout features, not all 10",
            "Compare two options side-by-side to anchor value",
          ]},
        ],
      },
      {
        id: "upsell",
        title: "4.2 Upselling & Cross-Selling",
        blocks: [
          { type: "callout", tone: "tip", title: "Natural pairings", content: "Keyboard → desk mat • Switches → lube + brush • Keycaps → puller • Custom build → carrying case" },
        ],
      },
      {
        id: "close",
        title: "4.3 Closing the Sale",
        blocks: [
          { type: "list", items: [
            "Address objections with empathy + facts",
            "Summarise the customer's choice back to them",
            "Offer a clear next step: 'Shall I ring this up?'",
          ]},
        ],
      },
    ],
    quiz: [
      { question: "Best cross-sell with a new keyboard?", options: ["A toaster", "A desk mat", "Another keyboard"], answer: 1 },
      { question: "When demoing, you should…", options: ["List every spec", "Let them feel it first", "Start with the price"], answer: 1 },
    ],
  },
  {
    id: "ops",
    number: 5,
    title: "Operational Procedures",
    tagline: "Open, run, close — keep the shop humming.",
    icon: "🔑",
    estMinutes: 25,
    color: "primary",
    sections: [
      {
        id: "openclose",
        title: "5.1 Opening & Closing",
        blocks: [
          { type: "callout", tone: "info", title: "Morning", content: "Unlock • turn on lights/AC/fans • set up displays • tidy keyboard section & seating • wipe dust • check inventory" },
          { type: "callout", tone: "info", title: "Evening", content: "Cash handling • sweep & mop • clean toilet • test booth + switch tester reset • switch off fans/AC/lights • lock all doors" },
        ],
      },
      {
        id: "inventory",
        title: "5.2 Inventory Management",
        blocks: [
          { type: "list", items: [
            "Full stock check — first week of every month",
            "Restock shelves & displays daily",
            "Report discrepancies and damaged items immediately",
          ]},
        ],
      },
      {
        id: "pos",
        title: "5.3 Point of Sale (POS)",
        blocks: [
          { type: "text", content: "Master the POS for sales, returns, exchanges, and end-of-day reports + cash reconciliation." },
        ],
      },
      {
        id: "repairs",
        title: "5.4 Repairs & Custom Orders",
        blocks: [
          { type: "link", label: "Service Intake Form", url: "https://docs.google.com/forms/d/e/1FAIpQLSenOLDvoNwtpqUNhYtrHS899bMmQtBrXAjar7WEAKB4aG0y5Q/viewform", description: "Use for every repair / custom intake" },
          { type: "link", label: "Charges & Service Scope", url: "https://www.clicknbrewcafe.com/collections/services", description: "Reference for pricing and what's included" },
          { type: "callout", tone: "warn", title: "Policies to know", content: "Refund Policy • Warranty Policy • Gift Card Policy — read these in full and refer to them by name." },
        ],
      },
    ],
    quiz: [
      { question: "When is the monthly full stock check?", options: ["Last day of month", "First week of month", "Whenever quiet"], answer: 1 },
      { question: "Which form is used for repair intake?", options: ["Walk-in note", "Google Service Form", "WhatsApp message"], answer: 1 },
    ],
  },
  {
    id: "workshop",
    number: 6,
    title: "Workshop Procedures",
    tagline: "Run a workshop people remember.",
    icon: "🛠️",
    estMinutes: 20,
    color: "copper",
    sections: [
      {
        id: "types",
        title: "6.1 Corporate vs Non-Corporate Workshops",
        blocks: [
          { type: "text", content: "Non-corporate is open to individual hobbyists; corporate is a booked group experience for companies — pricing, scope and logistics differ." },
          { type: "link", label: "Non-Corporate Workshop Page", url: "https://www.clicknbrewcafe.com/products/workshop-trial-" },
        ],
      },
      {
        id: "setup",
        title: "Workshop Setup & Guiding",
        blocks: [
          { type: "list", items: [
            "Pre-stage all tools: tweezers, lube, switch puller, mats",
            "Walk participants step-by-step, never skip safety",
            "Maintain QC — check each build before send-off",
          ]},
        ],
      },
      {
        id: "knowledge",
        title: "6.2 Knowledge Transfer",
        blocks: [
          { type: "text", content: "Teach customers how to maintain their boards and point them to DIY resources for continued learning." },
        ],
      },
      {
        id: "events",
        title: "6.3 Roadshows, Events & Offsite",
        blocks: [
          { type: "text", content: "Pack-list, transport, on-site setup, branded display — represent Click N Brew the same way you would in-store." },
        ],
      },
    ],
    quiz: [
      { question: "What's the key difference for corporate workshops?", options: ["Free entry", "Group booking, custom scope & pricing", "Only on Sundays"], answer: 1 },
    ],
  },
  {
    id: "coffee",
    number: 7,
    title: "Coffee Bar",
    tagline: "Espresso, lattes, and the perfect pairing.",
    icon: "☕",
    estMinutes: 25,
    color: "copper",
    sections: [
      {
        id: "barista",
        title: "7.1 Barista Basics",
        blocks: [
          { type: "list", items: [
            "Know the menu and brewing methods cold",
            "Pull consistent espresso — dose, tamp, time",
            "Steam milk to silky microfoam for latte art",
            "Daily clean & maintain machine + grinder",
          ]},
        ],
      },
      {
        id: "combo",
        title: "7.2 Coffee + Customization",
        blocks: [
          { type: "callout", tone: "tip", title: "The signature experience", content: "Offer a coffee while customers test switches. A relaxed customer is a confident buyer — and combo deals lift average spend." },
        ],
      },
    ],
    quiz: [
      { question: "What lifts the customer experience most?", options: ["Rushing the order", "Coffee while testing switches", "Loud music"], answer: 1 },
    ],
  },
  {
    id: "review",
    number: 8,
    title: "Review & Assessment",
    tagline: "Prove what you know. Keep growing.",
    icon: "🎓",
    estMinutes: 15,
    color: "keycap",
    sections: [
      {
        id: "review",
        title: "8.1 Knowledge Review",
        blocks: [
          { type: "text", content: "Combination of written quizzes (per module) and live role-play covering customer service & sales scenarios." },
        ],
      },
      {
        id: "support",
        title: "8.2 Ongoing Support",
        blocks: [
          { type: "list", items: [
            "Paired with a mentor for your first months",
            "Continued training — switch launches, new techniques",
            "Industry events & community meetups",
          ]},
        ],
      },
    ],
    quiz: [
      { question: "What support do new joiners get?", options: ["None — sink or swim", "A mentor + ongoing training", "Only YouTube videos"], answer: 1 },
    ],
  },
];

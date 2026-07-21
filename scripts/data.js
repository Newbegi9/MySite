const PORTFOLIO_DATA = {
  hero: {
    tagline: "Product designer and strategist blending AI-driven systems, hands-on craft, and performance coaching.",
    bioShort: "Building intelligent digital tools, custom e-commerce experiences, tangible crafted objects, and high-performance aquatic athletes.",
    metrics: [
      { label: "AI & Design Systems", value: "12+" },
      { label: "Shopify GMV Optimization", value: "$4.2M+" },
      { label: "Physical Craft Projects", value: "25+" },
      { label: "Athletes Mentored", value: "150+" }
    ]
  },
  
  featured: [
    {
      id: "synthflow-ai",
      title: "SynthFlow AI Design Studio",
      category: "ai",
      categoryLabel: "AI & Design Case Study",
      tag: "AI / UX Systems",
      accent: "indigo",
      image: "assets/images/ai_case_study.jpg",
      summary: "Autonomous AI-assisted workflow engine that transforms user feedback into interactive wireframes and design system tokens.",
      metrics: "3.4x faster design iteration"
    },
    {
      id: "aurora-luxe-shopify",
      title: "Aurora Luxe Shopify Plus Storefront",
      category: "shopify",
      categoryLabel: "Shopify Build",
      tag: "Shopify / E-Commerce",
      accent: "emerald",
      image: "assets/images/shopify_storefront.jpg",
      summary: "Headless Shopify storefront redesign with dynamic liquid sections, custom checkout extensions, and tailored product builders.",
      metrics: "+41% conversion rate increase"
    },
    {
      id: "kinetic-wood-craft",
      title: "Kinetic Ergonomic Workstation Craft",
      category: "craft",
      categoryLabel: "Craft Highlight",
      tag: "Physical Craft / Industrial Design",
      accent: "amber",
      image: "assets/images/craft_physical.jpg",
      summary: "Bespoke walnut & hand-stitched leather physical studio object designed for high-focus creative work environments.",
      metrics: "Handcrafted physical build"
    },
    {
      id: "swim-performance-lab",
      title: "Apex High-Performance Swim Program",
      category: "coaching",
      categoryLabel: "Coaching Summary",
      tag: "Leadership / Aquatic Coaching",
      accent: "cyan",
      image: "assets/images/swim_coaching.jpg",
      summary: "Biomechanics-focused swim coaching methodology combining high-pressure leadership, real-time video feedback, and squad growth.",
      metrics: "18 National Qualifiers mentored"
    }
  ],

  work: [
    {
      id: "synthflow-ai",
      type: "ai",
      title: "SynthFlow AI Design Studio",
      subtitle: "Generative UX System & Multimodal Design Assistant",
      tag: "AI & Design",
      accent: "indigo",
      image: "assets/images/ai_case_study.jpg",
      problem: "Design teams faced massive friction converting raw user research and voice transcripts into actionable design components and state matrices.",
      methodology: "Developed an AI assistant integrating LLM structured output with design token schemas. Engineered real-time layout generation canvas with live preview and human-in-the-loop editing controls.",
      outcomes: "Reduced wireframing cycle from 5 days to 4 hours while enabling non-technical stakeholders to iterate on UI ideas seamlessly.",
      techStack: ["Gemini AI API", "TypeScript", "React", "Tailwind Design System", "Figma API"]
    },
    {
      id: "aurora-luxe-shopify",
      type: "shopify",
      title: "Aurora Luxe Shopify Storefront & Custom Apps",
      subtitle: "High-Growth E-Commerce Architecture & Conversion Engine",
      tag: "Shopify E-Commerce",
      accent: "emerald",
      image: "assets/images/shopify_storefront.jpg",
      problem: "A high-end luxury fashion brand suffered high cart abandonment (41%) due to slow mobile loading speeds and rigid default theme templates.",
      methodology: "Architected a custom Shopify Liquid theme with micro-animated product visualizers, dynamic cart upsell widgets, and zero-layout-shift image optimization.",
      outcomes: "Achieved a 7.2% overall conversion rate (+41% lift), reduced mobile load time to under 1.2s, and increased Average Order Value (AOV) by $45.",
      techStack: ["Shopify Plus", "Liquid Engine", "GraphQL Storefront API", "JavaScript", "Shopify Functions"]
    },
    {
      id: "cognitive-design-system",
      type: "ai",
      title: "Cognitive Design System Tokenizer",
      subtitle: "Adaptive Accessibility & Contrast Engine",
      tag: "AI & Design",
      accent: "indigo",
      image: "assets/images/ai_case_study.jpg",
      problem: "Ensuring WCAG AAA compliance across dynamic dark/light themes was tedious and prone to human color contrast oversight.",
      methodology: "Built an intelligent CSS color space calculator that dynamically evaluates contrast ratios and auto-corrects token palettes based on context.",
      outcomes: "Automated color accessibility audits for over 450 UI components across 3 product lines.",
      techStack: ["ColorJS", "CSS Custom Properties", "Node.js", "Design Tokens Schema"]
    },
    {
      id: "custom-shopify-bundle-builder",
      type: "shopify",
      title: "Custom Shopify Subscription & Bundle Engine",
      subtitle: "Dynamic Checkout Customization for Direct-to-Consumer Brands",
      tag: "Shopify E-Commerce",
      accent: "emerald",
      image: "assets/images/shopify_storefront.jpg",
      problem: "Customers wanted custom mix-and-match product bundles, but existing Shopify app solutions caused cart sync delays and clunky UI.",
      methodology: "Engineered a custom vanilla JS bundle composer directly integrated with Shopify's Cart AJAX API and dynamic discounts.",
      outcomes: "Increased subscription bundle signups by 68% and eliminated 3rd party plugin monthly costs.",
      techStack: ["Shopify Cart API", "Vanilla JavaScript", "Custom Metafields", "CSS Container Queries"]
    }
  ],

  craft: [
    {
      id: "kinetic-desk",
      title: "Walnut & Stitched Leather Studio Chair",
      materials: "Black Walnut, Hand-stitched Saddle Leather, Brass Hardware",
      process: "Designed through physical mockups, hand-carved joinery, oil rubbed finishing, and precision hand stitching.",
      image: "assets/images/craft_physical.jpg",
      details: "An exploration into tactile ergonomics. Made entirely using traditional hand joinery blended with modern laser-cut template alignment."
    },
    {
      id: "tactile-keyboard-casing",
      title: "Anodized Aluminum & Timber Mechanical Deck",
      materials: "6061 Anodized Aluminum, Japanese Cedar, Brass Weight Insert",
      process: "CNC milled aluminum chassis paired with hand-lathed wood side panels and acoustic foam internal dampening.",
      image: "assets/images/craft_physical.jpg",
      details: "Bridging digital typing interaction with organic warm physical materials."
    },
    {
      id: "leather-tool-roll",
      title: "Master Craftsman Leather Tool Suite",
      materials: "Full Grain Italian Vegetable-Tanned Leather, Waxed Thread",
      process: "Hand cut, burnished edges, saddle-stitched for extreme durability in workshop environments.",
      image: "assets/images/craft_physical.jpg",
      details: "Built to store precision woodworking chisels, digital calipers, and design pencils."
    }
  ],

  coaching: {
    philosophy: "In the pool as in product design: true performance is built on foundational technique, continuous feedback loops, and mental fortitude under pressure.",
    stats: [
      { label: "Years Coaching Elite Squads", value: "7+" },
      { label: "State & National Medalists", value: "24" },
      { label: "Personal Bests Achieved", value: "94%" },
      { label: "Squad Retention Rate", value: "98%" }
    ],
    pillars: [
      {
        title: "Methodology & Technique First",
        description: "Breaking complex stroke mechanics into micro-adjustments. Harnessing video analysis and data analytics to refine efficiency."
      },
      {
        title: "Communication Under Pressure",
        description: "Creating a calm, decisive environment on race days so athletes perform at their absolute peak when stakes are highest."
      },
      {
        title: "Leadership & Squad Culture",
        description: "Fostering accountability, mutual encouragement, and a high-trust squad culture where every swimmer thrives."
      }
    ],
    testimonials: [
      {
        quote: "The stroke technique breakdowns and high-performance mindset transformed my swimming. I cut 2.4 seconds off my 100m freestyle state qualifying time.",
        author: "Marcus T.",
        role: "State Championship Gold Medalist"
      },
      {
        quote: "An extraordinary leader who brings product design clarity and calm focus directly to the poolside deck. The best mentor our team has ever had.",
        author: "Sarah L.",
        role: "Head Swim Club Director"
      }
    ]
  },

  about: {
    bio: "I am a multidisciplinary product designer, strategist, and athletic coach with a passion for building thoughtful systems across digital and physical mediums.",
    story: "Whether I'm architecting AI-powered design tools, optimizing high-converting Shopify storefronts, carving hardwood in my studio workshop, or guiding swimmers to state titles on the deck—my core conviction remains the same: Great work comes from deep mastery, continuous iteration, and empathy.",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "Shopify Experts Profile", url: "https://shopify.com", icon: "shopping-bag" },
      { name: "Twitter / X", url: "https://twitter.com", icon: "twitter" }
    ]
  }
};

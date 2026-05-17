// ─────────────────────────────────────────────
// OASIS Wave of Wellness — Site Config
// Edit this file to customise for a new client.
// ─────────────────────────────────────────────

export const site = {

  // ── Identity ──────────────────────────────
  name:       'OASIS Wave of Wellness',
  shortName:  'OASIS',
  tagline:    'Wave of Wellness',
  conceptBy:  'Concept by Sapna Tiwari',
  founder:    'Sapna Tiwari',

  // ── Meta ──────────────────────────────────
  meta: {
    title:       'OASIS Wave of Wellness — Concept by Sapna Tiwari',
    description: 'Premium wellness clinic offering facial rejuvenation, hair restoration, and advanced skincare. Three locations across Delhi NCR.',
  },

  // ── Loader ────────────────────────────────
  loader: {
    wordmark: 'OASIS',
    tagline:  'Wave of Wellness · Concept by Sapna Tiwari',
  },

  // ── Announce bar ──────────────────────────
  announce: {
    text:   'Now Open In Noida Sector 18',
    suffix: '4.9★ Rated Across Delhi NCR',
  },

  // ── Contact ───────────────────────────────
  phone:    '+91 98765 43210',
  phoneRaw: '919876543210',

  // ── Social ────────────────────────────────
  social: [
    {
      name: 'Instagram',
      url:  'https://www.instagram.com/oasiswaveofwellness_noida/',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
      name: 'YouTube',
      url:  'https://www.youtube.com/@Oasis.WaveofWellness',
      icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
    {
      name: 'Facebook',
      url:  'https://www.facebook.com/oasis.waveofwellness/',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
  ],

  // ── Locations ─────────────────────────────
  locations: [
    {
      id:       'noida',
      city:     'Noida',
      area:     'Sector 18',
      address:  'Opposite Metro Pillar No. 67, Noida Sector 18',
      phone:    '+91 98765 43210',
      whatsapp: '919876543210',
      hours:    'Mon–Sat: 10 AM – 8 PM · Sun: 11 AM – 6 PM',
      rating:   '4.9',
      reviews:  '75+',
      img:      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop',
      badge:    'New',
    },
    {
      id:       'gurgaon',
      city:     'Gurgaon',
      area:     'DLF Phase 1',
      address:  'Above Tata Motors, Sikandarpur Metro Station, Golf Course Road',
      phone:    '+91 98765 43211',
      whatsapp: '919876543211',
      hours:    'Mon–Sat: 10 AM – 8 PM · Sun: 11 AM – 6 PM',
      rating:   '4.6',
      reviews:  '119',
      img:      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&auto=format&fit=crop',
      badge:    null,
    },
    {
      id:       'ghaziabad',
      city:     'Ghaziabad',
      area:     'Indirapuram',
      address:  'Opposite ATS Gate No. 5, Niti Khand 1, Indirapuram',
      phone:    '+91 98765 43212',
      whatsapp: '919876543212',
      hours:    'Mon–Sat: 10 AM – 8 PM · Sun: 11 AM – 6 PM',
      rating:   '4.9',
      reviews:  '75+',
      img:      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80&auto=format&fit=crop',
      badge:    null,
    },
  ],

  // ── Stats ─────────────────────────────────
  stats: [
    { value: '4.9★', label: 'Average Rating' },
    { value: '130+', label: 'Happy Clients' },
    { value: '3',    label: 'NCR Locations' },
    { value: '10+',  label: 'Years Expertise' },
  ],

  // ── Hero slides ───────────────────────────
  heroSlides: [
    {
      img:   'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=85&auto=format&fit=crop',
      label: 'The Third Place',
      line1: 'Your Oasis',
      line2: 'Awaits',
      sub:   'Where beauty meets balance — personalised skin, hair & wellness treatments by expert practitioners.',
    },
    {
      img:   'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop',
      label: 'Advanced Skincare',
      line1: 'Science Meets',
      line2: 'Serenity',
      sub:   'Medical-grade treatments tailored to your skin profile. Visible results from the very first session.',
    },
    {
      img:   'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85&auto=format&fit=crop',
      label: 'A Decade of Trust',
      line1: 'Expert Hands,',
      line2: 'Caring Hearts',
      sub:   'Rated 4.9★ across Delhi NCR. 10,000+ clients who return not just for results — but for the experience.',
    },
  ],

  // ── Services ──────────────────────────────
  // Used by homepage Services.astro (title/desc/img/tag)
  // AND by /services page (full detail with treatments)
  services: [
    {
      id:       'facial',
      tag:      'Skin',
      title:    'Facial Rejuvenation',
      subtitle: 'Restore radiance, reverse time',
      desc:     'Our facial treatments combine medical-grade technology with curated skincare to deliver visible results. From deep hydration to precision anti-ageing protocols, every session is tailored to your unique skin profile.',
      img:      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'HydraFacial MD',    desc: 'Cleanse, extract, and hydrate in one signature treatment. Visible glow from the first session.',                        duration: '60 min' },
        { name: 'Chemical Peels',    desc: 'Targeted exfoliation to resurface and reveal smoother, brighter skin beneath.',                                         duration: '45 min' },
        { name: 'Anti-Ageing Facial',desc: 'Peptide-rich protocols targeting fine lines, loss of firmness, and dullness.',                                          duration: '75 min' },
        { name: 'LED Light Therapy', desc: 'Clinically proven light wavelengths to stimulate collagen production and reduce inflammation.',                          duration: '30 min' },
      ],
    },
    {
      id:       'hair',
      tag:      'Hair',
      title:    'Hair Restoration',
      subtitle: 'Science for every strand',
      desc:     'Hair loss is deeply personal. Our restorative therapies are evidence-based, minimally invasive, and designed to deliver measurable results — whether you\'re addressing early thinning or significant loss.',
      img:      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'PRP Hair Therapy',        desc: 'Platelet-rich plasma injected to stimulate dormant follicles and accelerate regrowth.',                            duration: '60 min' },
        { name: 'Scalp Mesotherapy',       desc: 'Micro-injections of growth factors and vitamins directly into the scalp.',                                        duration: '45 min' },
        { name: 'Low-Level Laser Therapy', desc: 'Non-invasive laser stimulation for improved follicle health and reduced shedding.',                               duration: '30 min' },
        { name: 'Hair Growth Infusion',    desc: 'Customised vitamin and mineral infusions delivered topically for scalp nourishment.',                             duration: '45 min' },
      ],
    },
    {
      id:       'skincare',
      tag:      'Skin',
      title:    'Advanced Skincare',
      subtitle: 'Precision care for complex concerns',
      desc:     'Hyperpigmentation, acne, scarring, uneven texture — these are not problems to mask but conditions to treat. Our dermatologist-guided skincare protocols address root causes with clinical precision.',
      img:      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'Acne Management Protocol', desc: 'A multi-step clinical approach targeting active acne, sebum control, and post-acne marks.',                     duration: '60 min' },
        { name: 'Pigmentation Correction',  desc: 'Targeted brightening therapies for melasma, sunspots, and uneven skin tone.',                                  duration: '45 min' },
        { name: 'Microneedling',            desc: 'Collagen induction therapy for texture refinement, pore reduction, and scar treatment.',                        duration: '75 min' },
        { name: 'Skin Brightening Peel',    desc: 'Vitamin C and kojic acid-based peel for visible luminosity after a single session.',                            duration: '45 min' },
      ],
    },
    {
      id:       'weight',
      tag:      'Wellness',
      title:    'Weight Wellness',
      subtitle: 'Body confidence, inside out',
      desc:     'We approach weight management holistically — combining advanced body contouring technology with nutrition guidance and wellness coaching to help you achieve and sustain your goals.',
      img:      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'Body Contouring',      desc: 'Non-invasive RF and ultrasound technology to sculpt, define, and tighten problem areas.',                          duration: '60 min' },
        { name: 'Inch Loss Wrap',       desc: 'Detoxifying body wrap to reduce localised fat deposits and flush retained fluid.',                                  duration: '75 min' },
        { name: 'Nutrition Consultation', desc: 'One-on-one session with our wellness advisor for a customised, sustainable plan.',                                duration: '45 min' },
        { name: 'Lymphatic Drainage',   desc: 'Therapeutic massage that stimulates lymph flow to reduce puffiness and support detox.',                             duration: '60 min' },
      ],
    },
    {
      id:       'aesthetic',
      tag:      'Clinical',
      title:    'Aesthetic Dermatology',
      subtitle: 'Clinical solutions, precise outcomes',
      desc:     'For conditions that require a medical eye — our aesthetic dermatology services deliver safe, effective, minimally invasive procedures under qualified supervision.',
      img:      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'Mole & Skin Tag Removal', desc: 'Safe, precise removal via electrocautery with minimal downtime and scarring.',                                   duration: '30 min' },
        { name: 'Keloid & Scar Treatment', desc: 'Intralesional injections and laser therapy for progressive scar flattening.',                                    duration: '45 min' },
        { name: 'Laser Hair Reduction',    desc: 'Long-term hair reduction across all skin types using calibrated diode laser.',                                   duration: '30–60 min' },
        { name: 'Wart & Corn Removal',     desc: 'Targeted cryotherapy or electrocautery for effective, lasting removal.',                                        duration: '30 min' },
      ],
    },
    {
      id:       'holistic',
      tag:      'Wellness',
      title:    'Holistic Treatments',
      subtitle: 'Rest, restore, rebalance',
      desc:     'True wellness begins where stress ends. Our holistic therapies draw on time-tested healing traditions to calm the nervous system, release tension, and return you to yourself.',
      img:      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80&auto=format&fit=crop',
      treatments: [
        { name: 'Swedish Relaxation Massage', desc: 'Full-body stress relief using flowing strokes, gentle pressure, and warmed oils.',                           duration: '60 min' },
        { name: 'Aromatherapy Ritual',        desc: 'Curated essential oil blends combined with therapeutic touch for deep calm.',                                duration: '75 min' },
        { name: 'Foot Reflexology',           desc: 'Pressure-point therapy that stimulates organ systems and restores energy flow.',                             duration: '45 min' },
        { name: 'Deep Tissue Massage',        desc: 'Targets chronic muscle tension, postural imbalances, and held stress points.',                              duration: '60 min' },
      ],
    },
  ],

  // ── WhyUs pillars (homepage) ──────────────
  whyUsPillars: [
    {
      title: 'Skin & Beauty',
      desc:  'Promote radiance and restore confidence with healing bodywork and therapeutic treatments.',
      icon:  '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>',
    },
    {
      title: 'Health & Performance',
      desc:  'Go beyond symptoms with personalised plans for prevention from physicians and experts.',
      icon:  '<path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>',
    },
    {
      title: 'Fitness & Movement',
      desc:  'Enhance everyday mobility and athletic performance guided by exercise experts.',
      icon:  '<path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>',
    },
    {
      title: 'Mind & Spirit',
      desc:  'Pursue balance and purpose with behavioural therapy, coaching, and spiritual guidance.',
      icon:  '<path d="M17 8C8 10 5.9 16.17 3.82 19.66L5.71 21l1-1.5A4.5 4.5 0 008 19c.5 0 1 .1 1.4.3L11 16.5c-.8-.3-1.3-1.1-1.3-2 0-1.1.9-2 2-2s2 .9 2 2c0 .5-.2 1-.5 1.4l1.7 1.7C17.7 16 19.4 14 19 8h-2z"/>',
    },
    {
      title: 'Nutrition & Food',
      desc:  'Optimal weight and holistic health strategies informed by nutritionists and wellness experts.',
      icon:  '<path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.21-1.12-4.36-3.06-5.97A9.07 9.07 0 009.03 7H7.02C3.14 7 1 9.06 1 14.99v2h15.03v-2z"/>',
    },
  ],

  // ── Reviews ───────────────────────────────
  reviews: [
    {
      name:     'Priya M.',
      location: 'Ghaziabad',
      rating:   5,
      text:     'Absolutely transformed my skin. The team is knowledgeable, professional, and the clinic is spotless. Best decision I made for my skincare journey.',
    },
    {
      name:     'Anjali S.',
      location: 'Noida',
      rating:   5,
      text:     'The ambiance itself is healing — true to the "Third Place" concept. My hair treatment showed visible results in just 3 sessions. Highly recommended.',
    },
    {
      name:     'Ritu K.',
      location: 'Gurgaon',
      rating:   5,
      text:     "Sapna Tiwari's concept is truly one of a kind. Felt completely pampered and cared for. The weight wellness program is life-changing.",
    },
  ],

  // ── About ─────────────────────────────────
  about: {
    founderImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop',
    founderQuote: "I didn't set out to open a clinic. I set out to create a place where women could walk in feeling drained — and walk out feeling like themselves again.",
    founderStory: [
      "Sapna Tiwari's journey began long before OASIS — in years of training, research, and a quiet frustration with wellness spaces that were either too clinical or too superficial. She envisioned a third way: expert care delivered with warmth, in an environment that felt genuinely restorative.",
      "In 2014, she turned that vision into OASIS Wave of Wellness in Noida Sector 18. A decade later, OASIS spans three locations across Delhi NCR, employs a team of certified specialists, and serves thousands of clients who return — not just for results, but for the experience.",
    ],
    founderStats: [
      { num: '10+',  label: 'Years Experience' },
      { num: '10K+', label: 'Clients Served' },
      { num: '4.9★', label: 'Google Rating' },
    ],
    philosophyPillars: [
      {
        icon:  '◇',
        title: 'Science First',
        desc:  'Every treatment at OASIS is grounded in clinical evidence. We use only certified equipment and protocols validated by dermatological research — no fads, no guesswork.',
      },
      {
        icon:  '◇',
        title: 'Personalised Always',
        desc:  'No two skin types, hair textures, or wellness journeys are identical. Every client receives a bespoke assessment before any treatment begins.',
      },
      {
        icon:  '◇',
        title: 'The Third Place',
        desc:  'Home is the first place. Work is the second. OASIS is your third — a sanctuary where self-care is a ritual, not a chore, and you are never just a booking.',
      },
    ],
    milestones: [
      { year: '2014', event: 'OASIS founded in Noida Sector 18 with a vision for accessible luxury wellness in Delhi NCR.' },
      { year: '2017', event: 'Expanded to Gurgaon DLF Phase 1, bringing the OASIS philosophy to the city\'s professional community.' },
      { year: '2020', event: 'Launched advanced aesthetic dermatology services and clinical-grade skincare protocols.' },
      { year: '2023', event: 'Third location opened in Ghaziabad Indirapuram. Crossed 10,000 satisfied clients.' },
      { year: '2024', event: 'Rated 4.9★ across Noida and Ghaziabad on Google. 130+ verified reviews and counting.' },
    ],
    credentials: [
      'International Association of Trichologists',
      'Certified Laser Safety Officer',
      'ISO 9001:2015 Quality Management',
      'AYUSH-Registered Holistic Practitioners',
      'NABH-Compliant Clinical Protocols',
      'Advanced Aesthetic Dermatology Certification',
    ],
    team: [
      { name: 'Dr. Priya Mehta',  role: 'Lead Dermatologist',   img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80&auto=format&fit=crop' },
      { name: 'Dr. Arjun Sharma', role: 'Aesthetic Physician',   img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80&auto=format&fit=crop' },
      { name: 'Kavita Bose',      role: 'Senior Trichologist',   img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&q=80&auto=format&fit=crop' },
      { name: 'Meera Joshi',      role: 'Wellness & Holistic Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&auto=format&fit=crop' },
    ],
  },

  // ── Book form services dropdown ────────────
  bookServices: [
    'Facial Rejuvenation',
    'Hair Restoration',
    'Advanced Skincare',
    'Weight Wellness',
    'Aesthetic Dermatology',
    'Holistic Treatments',
    'Consultation Only',
    'Not Sure — Help Me Choose',
  ],

} as const;

export type Site = typeof site;

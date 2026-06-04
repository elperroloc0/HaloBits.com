// =============================================================================
// content.ts — all page & section copy, in both languages.
//
// `Record<Lang, SiteContent>` is the safety net: `en` and `es` must have the
// EXACT same structure, so a half-translated site won't compile. Components read
// from here by language; they never hard-code English.
//
// Voice: warm, human, calm, people-first. Company-focused (this is the studio's
// site) — products are only mentioned lightly and link out to their own sites.
// Grounded in Concierge_app/sidefiles/brand_copy.md.
// =============================================================================
import type { Lang } from './ui';

interface Meta {
  title: string;
  description: string;
}
interface TitleBody {
  title: string;
  body: string;
}
interface Step extends TitleBody {
  n: string;
}
interface ShippedItem extends TitleBody {
  status: string;
  href: string;
  cta: string;
}
interface FaqItem {
  q: string;
  a: string;
  /** Optional inline link at the end of the answer (e.g. → Contact). */
  linkLabel?: string;
  /** Internal path (localized automatically) or absolute/mailto URL. */
  linkHref?: string;
}

export interface SiteContent {
  meta: {
    home: Meta;
    whatWeBuild: Meta;
    about: Meta;
    contact: Meta;
    faq: Meta;
    notFound: Meta;
  };
  hero: { slogan: string; sub: string; ctaBuild: string; ctaTalk: string };
  philosophy: { kicker: string; title: string; lead: string; pillars: TitleBody[] };
  whatWeBuild: {
    kicker: string;
    title: string;
    lead: string;
    capabilities: TitleBody[];
    scaleNote: string;
  };
  howWePartner: { kicker: string; title: string; steps: Step[] };
  shipped: { kicker: string; title: string; lead: string; items: ShippedItem[] };
  cta: { title: string; body: string; button: string };
  whatWeBuildPage: {
    kicker: string;
    title: string;
    // LIVE NOW — Concierge hero block
    live: { label: string; name: string; body: string; cta: string; href: string };
    // Capabilities grid
    capKicker: string;
    capTitle: string;
    capLead: string;
    capabilities: TitleBody[];
    // On the way (roadmap teaser)
    next: { kicker: string; title: string; body: string };
    // Closing CTA (page-specific copy)
    cta: { title: string; body: string; button: string };
  };
  about: {
    kicker: string;
    title: string;
    essential: string;
    details: TitleBody[];
  };
  faq: {
    kicker: string;
    title: string;
    items: FaqItem[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    emailTitle: string;
    emailBody: string;
    email: string;
    productTitle: string;
    productBody: string;
    productCta: string;
    addr: string;
  };
  notFound: { title: string; lead: string; home: string; build: string };
}

export const content: Record<Lang, SiteContent> = {
  en: {
    meta: {
      home: {
        title: 'HaloBits — Not a service, a partner',
        description:
          'A Miami studio building calm, bilingual AI tools for small businesses — and partnering to make them work.',
      },
      whatWeBuild: {
        title: 'What we build — HaloBits',
        description:
          'From a single AI receptionist to a full custom platform — bilingual AI tools for small and mid-sized businesses.',
      },
      about: {
        title: 'About — HaloBits',
        description:
          'HaloBits is a small Miami studio building AI that earns its keep for small businesses.',
      },
      contact: {
        title: 'Contact — HaloBits',
        description: "Tell us what eats your day. Let's see what we can build together.",
      },
      faq: {
        title: 'FAQ — HaloBits',
        description: 'Straight answers about how HaloBits builds custom software, pricing, and what to expect.',
      },
      notFound: { title: 'Page not found — HaloBits', description: '' },
    },
    hero: {
      slogan: 'Not a service. A partner.',
      sub: 'Not just a tool — a partner that learns your business, speaks your language, and helps you grow. We build calm, reliable AI for small businesses, and we stay to make it work.',
      ctaBuild: 'What we build',
      ctaTalk: "Let's talk",
    },
    philosophy: {
      kicker: 'Our philosophy',
      title: "We don't sell software and disappear.",
      lead: 'A service hands you a tool and a login. A partner learns how you actually work, builds around it, and stays on the line when it matters. That difference is the whole company.',
      pillars: [
        {
          title: 'Learns your business',
          body: 'We start with your day — the calls, the rush, the things that slip. The AI is shaped around that, not the other way around.',
        },
        {
          title: 'Speaks your language',
          body: "Bilingual from the first line of code. English and Spanish aren't an add-on here — they're how Miami actually talks.",
        },
        {
          title: 'Helps you grow',
          body: "We measure what changes: calls answered, guests remembered, hours handed back. If it isn't helping, it isn't done.",
        },
      ],
    },
    whatWeBuild: {
      kicker: 'What we build',
      title: 'AI that fits the work — not the other way around.',
      lead: 'We build custom AI systems for small and mid-sized businesses. Not off-the-shelf tools with your logo on them — systems shaped around how you actually work, in the language your customers speak.',
      capabilities: [
        {
          title: 'Automation that fits your workflow',
          body: 'We find the work that slips through the cracks and build something that handles it — without disrupting everything else.',
        },
        {
          title: 'AI that speaks your customers\' language',
          body: 'Native bilingual support, built in from the start — not a translation layer bolted on after.',
        },
        {
          title: 'Systems that learn and remember',
          body: 'Not one-off transactions, but tools that build context over time — so every interaction gets smarter.',
        },
        {
          title: 'Insight without the overhead',
          body: 'Plain-language intelligence from your own data, without the dashboards nobody opens and the reports nobody reads.',
        },
      ],
      scaleNote: 'We build the smallest thing that solves it — then grow it with you.',
    },
    howWePartner: {
      kicker: 'How we partner',
      title: "Three steps — and we're in it with you.",
      steps: [
        {
          n: '01',
          title: 'Discovery',
          body: 'We sit with your team, learn the workflow, and find the work worth automating. No jargon, no fixed menu.',
        },
        {
          n: '02',
          title: 'Build',
          body: 'We design and ship a first version fast, tuned to your business — then refine it with you, in the real world.',
        },
        {
          n: '03',
          title: 'Run it together',
          body: "We don't hand off and vanish. We watch, fix quickly, and keep improving as your business changes.",
        },
      ],
    },
    shipped: {
      kicker: 'In the wild',
      title: 'Already working, in real Miami businesses.',
      lead: "Our products live on their own sites. Here's what's running today.",
      items: [
        {
          title: 'Concierge',
          status: 'Live',
          body: 'A bilingual AI receptionist for restaurants and service businesses — answers every call, remembers every guest.',
          href: 'https://concierge.halobits.com',
          cta: 'Visit Concierge →',
        },
        {
          title: 'Next',
          status: 'In the works',
          body: "We're choosing the next problem worth automating for small business owners. Have one? Tell us.",
          href: 'mailto:hello@halobits.com',
          cta: 'Pitch us a problem →',
        },
      ],
    },
    cta: {
      title: "Let's build something that earns its keep.",
      body: "Tell us what eats your day. If we can take it off your plate, we will — and we'll stick around to make sure it stays gone.",
      button: 'Start a conversation',
    },
    whatWeBuildPage: {
      kicker: 'What we build',
      title: 'We take the routine, you take the joy.',
      live: {
        label: 'Running today',
        name: 'Concierge AI',
        body: 'A virtual receptionist that answers your phone around the clock — picking up, booking, and remembering your customers in English and Spanish — so a busy moment never costs you a booking.',
        cta: 'See Concierge AI',
        href: 'https://concierge.halobits.com',
      },
      capKicker: 'What we do',
      capTitle: 'A few things we build well.',
      capLead:
        "These aren't products off a shelf — each one is built to fit your business. If your problem is on this list, it's something we've done before and can do again.",
      capabilities: [
        {
          title: 'Web design & development',
          body: 'Custom websites and web applications, built clean and fast — from a landing page to a full customer-facing platform.',
        },
        {
          title: 'Automation scripts',
          body: 'Repetitive tasks that eat your day — data entry, file processing, scheduled reports, notifications — turned into software that runs without you.',
        },
        {
          title: 'Data systems & databases',
          body: 'Structured storage for the information your business runs on: customer records, inventory, transactions, history.',
        },
        {
          title: 'Document parsing & data extraction',
          body: 'Software that reads invoices, receipts, forms, and PDFs and pulls the data you need into a clean, usable format.',
        },
        {
          title: 'Third-party integrations',
          body: 'Connecting the tools you already use — payment processors, phone systems, booking platforms, external APIs — so they work together instead of in silos.',
        },
        {
          title: 'Internal dashboards & admin portals',
          body: 'A private interface for your team to see what\'s happening, manage records, and run the day without digging through spreadsheets.',
        },
        {
          title: 'File storage & management systems',
          body: 'Secure, private systems for storing, organizing, and sharing files within your business — without relying on consumer cloud tools.',
        },
      ],
      next: {
        kicker: 'On the way',
        title: "More is coming.",
        body: "We're picking the next problem worth solving for small businesses. Have one that eats your day? That conversation is free — tell us.",
      },
      cta: {
        title: "Let's build something that will make your life easier.",
        body: "Tell us what eats your day, and we'll stick around to make sure it stays gone.",
        button: 'Start a conversation',
      },
    },
    about: {
      kicker: 'About',
      title: 'We make software that earns its keep.',
      essential:
        'HaloBits is a software studio in Miami building custom software for small and mid-sized businesses — the capability big companies have always had, now within reach of the ones that were priced out of it. We design it, build it, and stay to run it with you. Our first tool is already live, working for a Miami business.',
      details: [
        {
          title: 'What we do.',
          body: 'We build software that takes repetitive, boring work off your plate — making it more fun, less noticeable, or even invisible. We work across the modern stack, AI included where it actually earns its place. Each tool is fit to one business at a time: we ship a working first version, refine it with you in the real world, and stay on after launch instead of selling a license and walking away.',
        },
        {
          title: 'Who we are.',
          body: 'An independent studio that handles the whole job in-house — strategy, software, and the support that comes after. You work directly with the people building your tool, start to finish.',
        },
        {
          title: 'Where.',
          body: 'Miami, Florida. Bilingual by default, English and Spanish, the way this city does business.',
        },
        {
          title: 'Why we exist.',
          body: 'Powerful software has always come with an enterprise budget and an IT team to run it. Everyone else made do. HaloBits puts that capability within reach of the businesses that were left out, and answers to one question: did your day get easier?',
        },
        {
          title: 'How we work.',
          body: "Month to month, cancel anytime, no contract that locks you in. We keep the technology quiet and dependable — the kind you forget is running — and when something breaks we're usually on it the same day.",
        },
      ],
    },
    faq: {
      kicker: 'Questions',
      title: 'Straight answers before you commit.',
      items: [
        {
          q: 'What kinds of software can you build?',
          a: "A wide range — if it runs on repetition, we can probably automate it. If you're not sure your problem fits, tell us what it is — that conversation is free — and we'll tell you straight whether it's something we can build.",
          linkLabel: 'Tell us your problem →',
          linkHref: '/contact/',
        },
        {
          q: 'Do you only build for restaurants?',
          a: "No. We come out of hospitality, so that's where we started, but we build for any small or mid-sized business.",
        },
        {
          q: "We're small. Are we too small for you?",
          a: "Almost certainly not — small is who we build for. We'd rather be the right size for you than the biggest name you can't reach on the phone. If your problem genuinely needs a large enterprise vendor, we'll tell you that too.",
        },
        {
          q: 'What does it cost?',
          a: 'You start small — a setup fee and a monthly fee, month to month, cancel anytime. No long contract, no lock-in. We keep the specifics on each tool\'s own page so the numbers are tied to what you\'re actually getting. And if you\'d rather buy a program outright to own, we can do that too.',
          linkLabel: 'See our tools →',
          linkHref: '/what-we-build/',
        },
        {
          q: 'What do you need from me to start?',
          a: "Less than you'd think. We start with a conversation about your day and the one thing that's costing you most — no spec, no documents, no homework. From there we handle the building; we'll only ask for what we genuinely need along the way, like access to a tool you already use or a few minutes to see how the work really flows. You bring the business knowledge; we bring everything else.",
        },
        {
          q: "How long until it's working?",
          a: "Faster than you'd expect. You see something live in weeks. We ship a working first version early, put it in front of your real day, and refine from there.",
        },
        {
          q: 'What happens after it launches?',
          a: "A launch is the start of the relationship, not the end of the job. We stay on — watching, improving as your business changes. When something breaks, we fix it as fast as we can.",
        },
        {
          q: 'Do I have to be technical?',
          a: 'Not at all. You bring the business; we bring the software. We set it up, run it, and explain anything you want to understand in plain language.',
        },
        {
          q: 'Will I actually talk to a person?',
          a: "Yes — the people who build your tool are the people who answer you. Reach us by email or Telegram and you're talking directly to the studio, not a front desk or a ticket number.",
        },
        {
          q: "What if it's not working out?",
          a: "Then you leave, no hard feelings — that's what month-to-month means. We'd rather lose a customer cleanly than trap one. But our whole model is built so that doesn't happen: if a tool isn't earning its keep, we'll improve it until it does.",
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Say hello.',
      lead: "Whether you have a problem worth automating or just want to think out loud, we'd love to hear from you.",
      emailTitle: 'Email us',
      emailBody: 'For collaboration, partnership, or anything else.',
      email: 'hello@halobits.com',
      productTitle: 'Looking for a product?',
      productBody:
        'Our products live on their own sites. Concierge — our bilingual AI receptionist — is the one that is live today.',
      productCta: 'Visit Concierge →',
      addr: 'HaloBits LLC · Miami, FL',
    },
    notFound: {
      title: 'This page wandered off.',
      lead: "The link is broken or the page moved. Let's get you back on track.",
      home: 'Back home',
      build: 'What we build',
    },
  },

  es: {
    meta: {
      home: {
        title: 'HaloBits — No es un servicio, es un socio',
        description:
          'Un estudio de Miami que crea herramientas de IA tranquilas y bilingües para pequeños negocios — y se queda para que funcionen.',
      },
      whatWeBuild: {
        title: 'Qué construimos — HaloBits',
        description:
          'Desde un solo recepcionista de IA hasta una plataforma a medida — herramientas de IA bilingües para pequeños y medianos negocios.',
      },
      about: {
        title: 'Nosotros — HaloBits',
        description:
          'HaloBits es un pequeño estudio de Miami que crea IA que se gana su lugar para los pequeños negocios.',
      },
      contact: {
        title: 'Contacto — HaloBits',
        description: 'Cuéntanos qué te consume el día. Veamos qué podemos construir juntos.',
      },
      faq: {
        title: 'Preguntas frecuentes — HaloBits',
        description: 'Respuestas directas sobre cómo HaloBits crea software a medida, precios y qué esperar.',
      },
      notFound: { title: 'Página no encontrada — HaloBits', description: '' },
    },
    hero: {
      slogan: 'No es un servicio. Es un socio.',
      sub: 'No solo una herramienta — un socio que aprende tu negocio, habla tu idioma y te ayuda a crecer. Creamos IA tranquila y confiable para pequeños negocios, y nos quedamos para que funcione.',
      ctaBuild: 'Qué construimos',
      ctaTalk: 'Hablemos',
    },
    philosophy: {
      kicker: 'Nuestra filosofía',
      title: 'No vendemos software y desaparecemos.',
      lead: 'Un servicio te entrega una herramienta y un login. Un socio aprende cómo trabajas de verdad, construye a tu alrededor y está al teléfono cuando importa. Esa diferencia es toda la empresa.',
      pillars: [
        {
          title: 'Aprende tu negocio',
          body: 'Empezamos por tu día — las llamadas, el ajetreo, lo que se escapa. La IA se moldea alrededor de eso, no al revés.',
        },
        {
          title: 'Habla tu idioma',
          body: 'Bilingüe desde la primera línea de código. Inglés y español no son un extra aquí — así habla Miami de verdad.',
        },
        {
          title: 'Te ayuda a crecer',
          body: 'Medimos lo que cambia: llamadas contestadas, clientes recordados, horas devueltas. Si no ayuda, no está terminado.',
        },
      ],
    },
    whatWeBuild: {
      kicker: 'Qué construimos',
      title: 'IA que se adapta al trabajo — no al revés.',
      lead: 'Construimos sistemas de IA a medida para pequeños y medianos negocios. No herramientas genéricas con tu logo encima — sistemas moldeados alrededor de cómo trabajas de verdad, en el idioma que hablan tus clientes.',
      capabilities: [
        {
          title: 'Automatización que encaja en tu flujo',
          body: 'Encontramos el trabajo que se escapa y construimos algo que lo maneja — sin interrumpir todo lo demás.',
        },
        {
          title: 'IA que habla el idioma de tus clientes',
          body: 'Soporte bilingüe nativo, integrado desde el principio — no una capa de traducción añadida después.',
        },
        {
          title: 'Sistemas que aprenden y recuerdan',
          body: 'No transacciones únicas, sino herramientas que construyen contexto con el tiempo — para que cada interacción sea más inteligente.',
        },
        {
          title: 'Inteligencia sin el peso extra',
          body: 'Comprensión en lenguaje claro de tus propios datos, sin los dashboards que nadie abre ni los reportes que nadie lee.',
        },
      ],
      scaleNote: 'Construimos lo más pequeño que resuelve el problema — y lo hacemos crecer contigo.',
    },
    howWePartner: {
      kicker: 'Cómo colaboramos',
      title: 'Tres pasos — y lo recorremos contigo.',
      steps: [
        {
          n: '01',
          title: 'Descubrimiento',
          body: 'Nos sentamos con tu equipo, aprendemos el flujo y encontramos el trabajo que vale la pena automatizar. Sin jerga, sin menú fijo.',
        },
        {
          n: '02',
          title: 'Construcción',
          body: 'Diseñamos y lanzamos una primera versión rápido, ajustada a tu negocio — y luego la refinamos contigo, en el mundo real.',
        },
        {
          n: '03',
          title: 'Lo operamos juntos',
          body: 'No entregamos y desaparecemos. Observamos, arreglamos rápido y seguimos mejorando a medida que tu negocio cambia.',
        },
      ],
    },
    shipped: {
      kicker: 'En funcionamiento',
      title: 'Ya trabajando, en negocios reales de Miami.',
      lead: 'Nuestros productos viven en sus propios sitios. Esto es lo que ya está funcionando hoy.',
      items: [
        {
          title: 'Concierge',
          status: 'En vivo',
          body: 'Un recepcionista de IA bilingüe para restaurantes y negocios de servicio — contesta cada llamada, recuerda a cada cliente.',
          href: 'https://concierge.halobits.com',
          cta: 'Visitar Concierge →',
        },
        {
          title: 'Siguiente',
          status: 'En camino',
          body: 'Estamos eligiendo el próximo problema que vale la pena automatizar para dueños de pequeños negocios. ¿Tienes uno? Cuéntanos.',
          href: 'mailto:hello@halobits.com',
          cta: 'Propónnos un problema →',
        },
      ],
    },
    cta: {
      title: 'Construyamos algo que se gane su lugar.',
      body: 'Cuéntanos qué te consume el día. Si podemos quitártelo de encima, lo haremos — y nos quedaremos para que siga resuelto.',
      button: 'Empezar una conversación',
    },
    whatWeBuildPage: {
      kicker: 'Qué construimos',
      title: 'Nosotros la rutina, tú el placer.',
      live: {
        label: 'En funcionamiento',
        name: 'Concierge AI',
        body: 'Un recepcionista virtual que contesta tu teléfono las 24 horas — atiende, reserva y recuerda a tus clientes en inglés y español — para que un momento de ajetreo nunca te cueste una reserva.',
        cta: 'Ver Concierge AI',
        href: 'https://concierge.halobits.com',
      },
      capKicker: 'Qué hacemos',
      capTitle: 'Algunas cosas que hacemos bien.',
      capLead:
        'No son productos de estantería — cada uno se construye a la medida de tu negocio. Si tu problema está en esta lista, es algo que ya hemos hecho y podemos volver a hacer.',
      capabilities: [
        {
          title: 'Diseño y desarrollo web',
          body: 'Sitios y aplicaciones web a medida, limpios y rápidos — desde una landing hasta una plataforma completa de cara al cliente.',
        },
        {
          title: 'Scripts de automatización',
          body: 'Tareas repetitivas que te consumen el día — captura de datos, procesamiento de archivos, reportes programados, notificaciones — convertidas en software que corre sin ti.',
        },
        {
          title: 'Sistemas de datos y bases de datos',
          body: 'Almacenamiento estructurado para la información con la que funciona tu negocio: clientes, inventario, transacciones, historial.',
        },
        {
          title: 'Lectura de documentos y extracción de datos',
          body: 'Software que lee facturas, recibos, formularios y PDFs y extrae los datos que necesitas a un formato limpio y usable.',
        },
        {
          title: 'Integraciones con terceros',
          body: 'Conectamos las herramientas que ya usas — procesadores de pago, sistemas telefónicos, plataformas de reservas, APIs externas — para que trabajen juntas y no en silos.',
        },
        {
          title: 'Dashboards internos y portales de administración',
          body: 'Una interfaz privada para que tu equipo vea qué pasa, gestione registros y lleve el día sin escarbar en hojas de cálculo.',
        },
        {
          title: 'Sistemas de almacenamiento de archivos',
          body: 'Sistemas seguros y privados para guardar, organizar y compartir archivos dentro de tu negocio — sin depender de la nube de consumo.',
        },
      ],
      next: {
        kicker: 'En camino',
        title: 'Viene más.',
        body: 'Estamos eligiendo el próximo problema que vale la pena resolver para pequeños negocios. ¿Tienes uno que te consume el día? Esa conversación es gratis — cuéntanos.',
      },
      cta: {
        title: 'Construyamos algo que te haga la vida más fácil.',
        body: 'Cuéntanos qué te consume el día, y nos quedamos para asegurarnos de que siga resuelto.',
        button: 'Empezar una conversación',
      },
    },
    about: {
      kicker: 'Nosotros',
      title: 'Hacemos software que se gana su lugar.',
      essential:
        'HaloBits es un estudio de software en Miami que crea software a medida para pequeños y medianos negocios — la capacidad que las grandes empresas siempre han tenido, ahora al alcance de quienes quedaban fuera por el precio. Lo diseñamos, lo construimos, y nos quedamos para operarlo contigo. Nuestra primera herramienta ya está en vivo, trabajando para un negocio de Miami.',
      details: [
        {
          title: 'Qué hacemos.',
          body: 'Construimos software que te quita el trabajo repetitivo y aburrido — haciéndolo más llevadero, menos notable, o incluso invisible. Trabajamos con el stack moderno, IA incluida donde de verdad se gana su lugar. Cada herramienta se hace a la medida de un negocio a la vez: lanzamos una primera versión funcional, la refinamos contigo en el mundo real, y nos quedamos después del lanzamiento en vez de vender una licencia y desaparecer.',
        },
        {
          title: 'Quiénes somos.',
          body: 'Un estudio independiente que hace todo el trabajo en casa — estrategia, software y el soporte que viene después. Trabajas directamente con las personas que construyen tu herramienta, de principio a fin.',
        },
        {
          title: 'Dónde.',
          body: 'Miami, Florida. Bilingüe por defecto, inglés y español, como hace negocios esta ciudad.',
        },
        {
          title: 'Por qué existimos.',
          body: 'El software potente siempre vino con presupuesto de empresa grande y un equipo de IT para operarlo. Los demás se las arreglaban. HaloBits pone esa capacidad al alcance de los negocios que quedaban fuera, y responde a una sola pregunta: ¿se te hizo más fácil el día?',
        },
        {
          title: 'Cómo trabajamos.',
          body: 'Mes a mes, cancela cuando quieras, sin contrato que te amarre. Mantenemos la tecnología silenciosa y confiable — de esa que olvidas que está corriendo — y cuando algo se rompe normalmente estamos en ello el mismo día.',
        },
      ],
    },
    faq: {
      kicker: 'Preguntas',
      title: 'Respuestas directas antes de comprometerte.',
      items: [
        {
          q: '¿Qué tipo de software pueden construir?',
          a: 'Una gama amplia — si funciona a base de repetición, probablemente lo podemos automatizar. Si no estás seguro de que tu problema encaje, cuéntanos cuál es — esa conversación es gratis — y te diremos sin rodeos si es algo que podemos construir.',
          linkLabel: 'Cuéntanos tu problema →',
          linkHref: '/contact/',
        },
        {
          q: '¿Solo construyen para restaurantes?',
          a: 'No. Venimos de la hostelería, así que ahí empezamos, pero construimos para cualquier negocio pequeño o mediano.',
        },
        {
          q: 'Somos pequeños. ¿Somos demasiado pequeños para ustedes?',
          a: 'Casi seguro que no — los pequeños son justo para quienes construimos. Preferimos ser el tamaño correcto para ti que el nombre más grande al que no puedes llamar por teléfono. Si tu problema de verdad necesita un gran proveedor empresarial, también te lo diremos.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Empiezas pequeño — una cuota de instalación y una mensualidad, mes a mes, cancela cuando quieras. Sin contrato largo, sin amarres. Mantenemos los detalles en la página de cada herramienta, para que los números estén atados a lo que realmente recibes. Y si prefieres comprar un programa para tenerlo en propiedad, también lo hacemos.',
          linkLabel: 'Ver nuestras herramientas →',
          linkHref: '/what-we-build/',
        },
        {
          q: '¿Qué necesitan de mí para empezar?',
          a: 'Menos de lo que crees. Empezamos con una conversación sobre tu día y lo único que más te cuesta — sin especificación, sin documentos, sin tareas. De ahí nosotros nos encargamos de construir; solo pediremos lo que de verdad necesitemos en el camino, como acceso a una herramienta que ya usas o unos minutos para ver cómo fluye el trabajo. Tú aportas el conocimiento del negocio; nosotros, todo lo demás.',
        },
        {
          q: '¿Cuánto tarda en funcionar?',
          a: 'Más rápido de lo que esperas. Ves algo en vivo en semanas. Lanzamos una primera versión funcional pronto, la ponemos frente a tu día real, y refinamos desde ahí.',
        },
        {
          q: '¿Qué pasa después del lanzamiento?',
          a: 'Un lanzamiento es el inicio de la relación, no el final del trabajo. Nos quedamos — observando, mejorando conforme cambia tu negocio. Cuando algo se rompe, lo arreglamos lo más rápido posible.',
        },
        {
          q: '¿Tengo que ser técnico?',
          a: 'Para nada. Tú aportas el negocio; nosotros el software. Lo configuramos, lo operamos y te explicamos en lenguaje claro lo que quieras entender.',
        },
        {
          q: '¿De verdad voy a hablar con una persona?',
          a: 'Sí — las personas que construyen tu herramienta son las que te responden. Escríbenos por email o Telegram y hablas directamente con el estudio, no con una recepción ni un número de ticket.',
        },
        {
          q: '¿Y si no funciona?',
          a: 'Entonces te vas, sin resentimientos — para eso es el mes a mes. Preferimos perder un cliente limpiamente que atrapar a uno. Pero todo nuestro modelo está hecho para que eso no pase: si una herramienta no se gana su lugar, la mejoramos hasta que lo haga.',
        },
      ],
    },
    contact: {
      kicker: 'Contacto',
      title: 'Saluda.',
      lead: 'Ya sea que tengas un problema que vale la pena automatizar o solo quieras pensar en voz alta, nos encantaría saber de ti.',
      emailTitle: 'Escríbenos',
      emailBody: 'Para colaboración, alianzas o cualquier otra cosa.',
      email: 'hello@halobits.com',
      productTitle: '¿Buscas un producto?',
      productBody:
        'Nuestros productos viven en sus propios sitios. Concierge — nuestro recepcionista de IA bilingüe — es el que está en vivo hoy.',
      productCta: 'Visitar Concierge →',
      addr: 'HaloBits LLC · Miami, FL',
    },
    notFound: {
      title: 'Esta página se perdió.',
      lead: 'El enlace está roto o la página se movió. Volvamos al camino.',
      home: 'Volver al inicio',
      build: 'Qué construimos',
    },
  },
};

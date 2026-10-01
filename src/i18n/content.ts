// =============================================================================
// content.ts — all page & section copy, in both languages.
//
// `Record<Lang, SiteContent>` is the safety net: `en` and `es` must have the
// EXACT same structure, so a half-translated site won't compile. Components read
// from here by language; they never hard-code English.
//
// Source of truth: the `COPY` objects in the design files (see
// missing-design-images/project/*.dc.html). Spanish runs 20–30% longer, so
// layouts size text with max-width in rem/ch — never fixed heights.
//
// Internal links are written as canonical EN paths ('/contact/'); components run
// them through localizePath() so the ES page links to /es/contact/.
// Strings containing "[PLACEHOLDER]" are slots for real content: they only render
// in dev (see lib/placeholders.ts).
// =============================================================================
import type { Lang } from './ui';

interface Meta {
  title: string;
  description: string;
}
interface Product {
  name: string;
  for: string;
  line: string;
  href: string;
}
interface FaqItem {
  q: string;
  a: string;
  /** Optional link under the answer. `href` is a canonical EN path. */
  link?: string;
  href?: string;
}
/** One entry of the Products tabs. To add a project: add an object to `buildPage.projects`
 *  in BOTH languages (same `id`) and, optionally, a screenshot at src/assets/projects/<id>.png|jpg|webp. */
interface Project {
  id: string;
  name: string;
  for: string;
  /** The pain, in one or two sentences (real, from the client's own words). */
  problem: string;
  /** What we built. */
  desc: string;
  /** Measured result. Leave out until there is a real, approved number. */
  result?: string;
  includes?: string[];
  /** Real numbers only (shown big, in butter). Leave out until you have them. */
  stats?: Array<{ v: string; l: string }>;
  /** Small line above the numbers: where they come from. */
  statsCaption?: string;
  who: string;
  /** href: canonical EN path ('/contact/') or an absolute URL */
  cta: { label: string; href: string; external?: boolean };
  /** shape sets the frame (wide = 16:9, phone = 9:19, standard = 4:3). ph is the dev-only
   *  placeholder caption; alt is the real alt text once a screenshot exists. */
  media: { shape: 'wide' | 'phone' | 'standard'; ph: string; alt: string };
}
interface ServiceItem {
  t: string;
  b: string;
  /** Starting price, e.g. '$1,500'. Leave out until the real number is decided. */
  from?: string;
}
interface Detail {
  t: string;
  b: string;
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
  home: {
    hero: { l1: string; l2: string; tag: string; sub: string; alt: string };
    problems: { title: string; items: Array<{ t: string; b: string }> };
    pricing: {
      title: string;
      lead: string;
      items: Array<{ t: string; p: string; b: string }>;
      foot: string;
    };
    build: { title: string; all: string; items: Product[]; note: string };
    partner: {
      title: string;
      lead: string;
      s1c: string;
      s1t: string;
      s1b: string;
      s2c: string;
      s2t: string;
      s2b: string;
      s3c: string;
      s3t: string;
      s3b: string;
      /** "Month" — used for the mobile tick labels ("Month 1") */
      month: string;
      /** "M" — used for the desktop tick labels ("M1") */
      m: string;
    };
    cta: { title: string; body: string; btn: string; alt2: string; alt: string };
  };
  buildPage: {
    title: string;
    lead: string;
    modeLabel: string;
    products: string;
    services: string;
    projectsLabel: string;
    includes: string;
    who: string;
    problemLabel: string;
    builtLabel: string;
    resultLabel: string;
    projects: Project[];
    servicesPanel: {
      lead: string;
      fromLabel: string;
      cta: string;
      items: ServiceItem[];
    };
  };
  about: {
    title: string;
    alt: string;
    essential: string;
    details: Detail[];
    team: { title: string; ph: string; q: string; q2: string; qn: string };
    people: Array<{ name: string; role: string; photoAlt: string }>;
    cta: string;
    cta2: string;
  };
  faq: { title: string; lead: string; ask: string; items: FaqItem[] };
  contact: {
    title: string;
    name: string;
    biz: string;
    optional: string;
    email: string;
    pref: string;
    msg: string;
    send: string;
    sending: string;
    errName: string;
    errEmail: string;
    errMsg: string;
    quickTitle: string;
    errSend: string;
    sentTitle: string;
    sentBody: string;
    /** Shown instead of sentTitle/sentBody when no form backend is configured */
    mailTitle: string;
    mailBody: string;
    another: string;
    /** Subject line for the mailto fallback */
    subject: string;
  };
  notFound: { title: string; lead: string; home: string; contact: string };
}

export const content: Record<Lang, SiteContent> = {
  // ---------------------------------------------------------------------------
  en: {
    meta: {
      home: {
        title: 'HaloBits — Custom software and websites for small businesses in Miami',
        description:
          'Websites, automation and custom software for small businesses. Built in Miami, in English and Spanish. First version in 2 weeks to a month, then month to month. From $100.',
      },
      whatWeBuild: {
        title: 'What we build — HaloBits',
        description:
          'AI Concierge, Van Tracker, Receipt Scanner and custom software — tools built for one business, ready for yours.',
      },
      about: {
        title: 'About — HaloBits',
        description:
          'HaloBits is a small Miami software studio. We build custom tools and websites for small businesses, and stay to run them with you.',
      },
      contact: {
        title: 'Contact — HaloBits',
        description: 'Tell us what eats your day. Text us, book a free call or send a message. We answer in English or Spanish.',
      },
      faq: {
        title: 'FAQ — HaloBits',
        description:
          'Straight answers about how HaloBits builds custom software, what it costs, and what to expect.',
      },
      notFound: { title: 'Page not found — HaloBits', description: '' },
    },

    home: {
      hero: {
        l1: 'The repetitive work,',
        l2: 'off your plate.',
        tag: 'Not a service. A partner.',
        sub: 'Custom software, automation and websites for small businesses. Built in Miami, in English and Spanish. A first version in 2 weeks to a month, then we run it with you. Month to month, cancel anytime.',
        alt: 'Painting of an old computer on a grassy hill above the sea, with the Miami skyline and a large orange sun.',
      },
      problems: {
        title: 'The work that keeps coming back.',
        items: [
          { t: 'The phone rings and nobody can pick up.', b: 'Every missed call is a customer who may go somewhere else.' },
          { t: '“Where is the van?”', b: 'The same question to the front desk, every afternoon.' },
          { t: 'Receipts pile up.', b: 'Paper to chase and sort before the accountant can use any of it.' },
        ],
      },
      build: {
        title: 'Work we have built, for businesses like yours.',
        all: 'See what we build',
        items: [
          {
            name: 'AI Concierge',
            for: 'Built for a restaurant in Miami',
            line: 'Answers calls in English or Spanish.',
            href: '/what-we-build/#concierge',
          },
          {
            name: 'Van Tracker',
            for: 'Built for a gymnastics center',
            line: 'Parents get a message when the van arrives.',
            href: '/what-we-build/#van',
          },
          {
            name: 'Receipt Scanner',
            for: 'Built for the inventory lead at a residential business',
            line: 'Snap a receipt, get a spreadsheet your accountant can use.',
            href: '/what-we-build/#receipts',
          },
        ],
        note: 'Most of our work is custom, built around one business at a time.',
      },
      partner: {
        title: 'We stay after launch.',
        lead: 'Discovery and building take 2 weeks to a month, depending on size. Running it together is month to month, for as long as it helps.',
        s1c: 'Free first conversation',
        s1t: 'Discovery',
        s1b: 'We sit with your team, learn the workflow and find the work worth automating. It is free. You leave knowing what we would build and what it costs.',
        s2c: 'First version live',
        s2t: 'Build',
        s2b: 'In 2 weeks to a month you get a working first version. You use it in your real day and we refine it with you.',
        s3c: 'Every month after',
        s3t: 'Run it together',
        s3b: 'We watch it, fix what breaks, usually the same day, and change it as your business changes.',
        month: 'Month',
        m: 'M',
      },
      pricing: {
        title: 'Simple prices. No contract.',
        lead: 'Month to month, cancel anytime. The first conversation is free.',
        items: [
          { t: 'Landing page', p: 'From $100', b: 'One clear page that says what you do and how to reach you.' },
          { t: 'Website with more inside', p: 'From $500', b: 'Bookings, logins, payments, a back end. Whatever the site needs to do.' },
          { t: 'Software and automation', p: 'From $200', b: 'Tools that take repetitive work off your plate: calls, reports, receipts, reminders.' },
          { t: 'Running it together', p: 'About $100 a month', b: 'We watch it, fix what breaks and change it as your business changes.' },
        ],
        foot: 'A first version takes 2 weeks to a month, depending on size. You get a price after the first conversation.',
      },
      cta: {
        title: "Let's build something together.",
        body: 'Bring us the task that keeps coming back. The first conversation is free, in English or Spanish.',
        btn: 'Start a conversation',
        alt2: 'Browse what we already offer',
        alt: 'Painted sunset over the sea with a large orange sun, pixelated clouds and a distant skyline.',
      },
    },

    buildPage: {
      title: 'We take the routine, you take the joy.',
      lead: 'Each of these started with one business and one problem that kept eating the day. Most of our work is custom.',
      modeLabel: 'Show',
      products: 'Products',
      services: 'Services',
      projectsLabel: 'Projects',
      includes: 'Includes',
      who: "Who it's for",
      problemLabel: 'The problem',
      builtLabel: 'What we built',
      resultLabel: 'Result',
      projects: [
        {
          id: 'concierge',
          name: 'AI Concierge',
          for: 'Built for a restaurant in Miami',
          problem: 'The owner could not answer every call. Missed calls meant lost guests, and callers who got no answer were frustrated.',
          desc: 'An AI receptionist that answers calls in English or Spanish, takes reservation requests and sends them to the owner, and shows what callers ask and when the restaurant is busiest.',
          includes: [
            'Reservation requests with date, time and party size, sent to you to confirm',
            'Answers about hours, menu, parking and events, from your own information',
            'Recognizes returning guests and remembers their preferences',
            'Passes the call to you or a manager when it needs a person',
            'Alerts for complaints and bookings, a daily summary and a weekly report',
          ],
          who: "The owner who's on the floor at 8 pm while the phone keeps ringing.",
          cta: { label: 'Want something like this? Let’s talk', href: '/contact/' },
          media: {
            shape: 'wide',
            ph: 'Screenshot · AI Concierge owner portal, daily report · 16:9',
            alt: 'AI Concierge owner portal showing the daily report of answered calls and bookings.',
          },
        },
        {
          id: 'van',
          name: 'Van Tracker',
          for: 'Built for a gymnastics center',
          problem: 'The same “where is the van?” call to the front desk, every afternoon.',
          desc: "Parents get a message when the van arrives, and a live map of only their child's ride. No calls to the front desk, no guessing.",
          who: 'Any business that drives kids, patients or crews and gets the same “where are they?” call every afternoon.',
          cta: { label: 'Want something like this? Let’s talk', href: '/contact/' },
          media: {
            shape: 'phone',
            ph: "Screenshot · Parent's phone, arrival message and live map · 9:19",
            alt: "Van Tracker on a parent's phone: a live map of the van's route from the school to the gym, with the message 'on the way' and an arrival time of 4:20 PM.",
          },
        },
        {
          id: 'receipts',
          name: 'Receipt Scanner',
          for: 'Built for the inventory lead at a residential business',
          problem: 'Chasing paper receipts every week to keep the inventory and the books straight.',
          desc: 'Snap a receipt, get clean line items and a spreadsheet your accountant can use.',
          who: 'The person who keeps the inventory at a residential business and chases receipts every week.',
          cta: { label: 'Want something like this? Let’s talk', href: '/contact/' },
          media: {
            shape: 'phone',
            ph: 'Screenshot · Receipt scan screen on a phone · 9:19',
            alt: 'Receipt Scanner on a phone: the camera is pointed at a paper receipt and the app is ready to read its details.',
          },
        },
      ],
      servicesPanel: {
        lead: 'Not sure which one fits? Describe the problem and we will tell you straight whether we can help.',
        fromLabel: 'From',
        cta: 'Tell us your problem',
        items: [
          { t: 'Websites and web apps', b: 'From a single page to a platform your customers log in to. Bookings, orders and payments included when you need them.' },
          { t: 'Automation and integrations', b: 'Reports, reminders and notifications that run by themselves, and your payments, phones and booking tools working together.' },
          { t: 'AI integration', b: 'Assistants that answer calls and messages in English or Spanish, and tools that read invoices, receipts and forms into clean data.' },
        ],
      },
    },

    about: {
      title: 'Software that makes your day easier.',
      alt: 'Painting of a grassy hill above the sea at golden hour, with palm trees and the Miami skyline in the distance.',
      essential:
        'HaloBits is a software studio in Miami. We build custom tools and websites for small businesses, the kind of capability big companies always had, now within reach of the ones that were priced out. We design it, build it, and stay to run it with you.',
      details: [
        {
          t: 'What we do',
          b: 'We build software that takes repetitive, boring work off your plate. Each tool is fitted to one business: we ship a working first version and refine it with you in the real world.',
        },
        {
          t: 'Who we are',
          b: 'An independent studio that handles the whole job in house: strategy, software, and the support that comes after.',
        },
        { t: 'Where', b: 'Miami, Florida. Bilingual by default, English and Spanish, the way this city does business.' },
        {
          t: 'Why we exist',
          b: 'Powerful software used to come with an enterprise budget and an IT team to run it. Everyone else made do. We answer to one question: did your day get easier?',
        },
        {
          t: 'How we work',
          b: "Month to month, cancel anytime, no contract that locks you in. We keep the technology quiet and dependable.",
        },
      ],
      team: {
        title: 'Who you will talk to',
        ph: 'Photo · The HaloBits team in Miami · [PLACEHOLDER]',
        q: "[PLACEHOLDER] A client's words about working with us, in the language they speak.",
        q2: '[PLACEHOLDER] A second client quote. Only publish real, approved words.',
        qn: '[PLACEHOLDER] Name · Business · Neighborhood',
      },
      people: [{ name: 'Angel Garcia', role: 'Owner', photoAlt: 'Portrait of Angel Garcia, owner of HaloBits.' }],
      cta: "Let's talk",
      cta2: 'See what we build',
    },

    faq: {
      title: 'Straight answers before you commit.',
      lead: "Didn't find yours? Ask us directly. The first conversation is free.",
      ask: 'Ask a question',
      items: [
        {
          q: 'What kinds of software can you build?',
          a: "A wide range. If it runs on repetition, we can probably automate it. If you're not sure your problem fits, tell us what it is and we'll say straight whether we can build it.",
          link: 'Tell us your problem',
          href: '/contact/',
        },
        {
          q: 'Do you only build for restaurants?',
          a: 'No. We come out of hospitality, so that is where we started, but we build for any small or mid-sized business.',
        },
        {
          q: "We're small. Are we too small for you?",
          a: "Almost certainly not. Small is who we build for. If your problem really needs a large enterprise vendor, we'll tell you that too.",
        },
        {
          q: 'What does it cost?',
          a: "You start small: a setup fee and a monthly fee, month to month, cancel anytime. No long contract. Each tool's page has its own numbers, so the price is tied to what you actually get. If you'd rather buy a program outright, we can do that too.",
          link: 'See our tools',
          href: '/what-we-build/',
        },
        {
          q: 'What do you need from me to start?',
          a: "Less than you'd think. We start with a conversation about your day and the one thing costing you most. No spec, no documents, no homework. Along the way we'll only ask for what we need, like access to a tool you already use or a few minutes to watch how the work flows.",
        },
        {
          q: "How long until it's working?",
          a: 'You see something live in weeks. We ship a working first version early, put it in front of your real day, and refine from there.',
        },
        {
          q: 'What happens after it launches?',
          a: 'A launch is the start of the relationship. We stay on, watching and improving as your business changes. When something breaks, we fix it as fast as we can.',
        },
        {
          q: 'Do I have to be technical?',
          a: 'Not at all. You bring the business, we bring the software. We set it up, run it, and explain anything you want to understand in plain language.',
        },
        {
          q: 'Will I actually talk to a person?',
          a: "Yes. The people who build your tool are the people who answer you, by email or Telegram. You're talking to the studio, not a front desk or a ticket number.",
        },
        {
          q: "What if it's not working out?",
          a: "Then you leave, no hard feelings. But if a tool isn't working, our first move is to improve it until it does.",
        },
      ],
    },

    contact: {
      title: 'Tell us what eats your day.',
      name: 'Your name',
      biz: 'Business',
      optional: '(optional)',
      email: 'Email or phone',
      pref: 'Language for our reply',
      msg: 'What task keeps coming back?',
      send: 'Send message',
      sending: 'Sending…',
      errName: 'Tell us what to call you.',
      errEmail: 'Add an email or a phone number so we can reply.',
      errMsg: 'A sentence or two about the problem helps us reply.',
      quickTitle: 'Prefer something faster?',
      errSend: 'Something went wrong sending that. Please email us at hello@halobits.com.',
      sentTitle: 'Thanks, it’s on its way.',
      sentBody: 'We read every message ourselves and will reply from hello@halobits.com in the language you picked.',
      mailTitle: 'One last step: press send.',
      mailBody: 'Your email app should have opened with your message ready to go. If nothing opened, write to hello@halobits.com and we will reply in the language you picked.',
      another: 'Send another message',
      subject: 'Message from halobits.com',
    },

    notFound: {
      title: 'This page wandered off.',
      lead: "The link is broken or the page moved. Let's get you back on track.",
      home: 'Back home',
      contact: 'Contact us',
    },
  },

  // ---------------------------------------------------------------------------
  es: {
    meta: {
      home: {
        title: 'HaloBits — Software y sitios web a la medida para negocios pequeños en Miami',
        description:
          'Sitios web, automatización y software a la medida para negocios pequeños. Hecho en Miami, en inglés y en español. Primera versión en 2 semanas a un mes, después mes a mes. Desde $100.',
      },
      whatWeBuild: {
        title: 'Qué hacemos — HaloBits',
        description:
          'AI Concierge, Van Tracker, Receipt Scanner y software a la medida: herramientas hechas para un negocio, listas para el tuyo.',
      },
      about: {
        title: 'Nosotros — HaloBits',
        description:
          'HaloBits es un pequeño estudio de software en Miami. Hacemos herramientas y sitios web a la medida para negocios pequeños, y nos quedamos para operarlos contigo.',
      },
      contact: {
        title: 'Contacto — HaloBits',
        description: 'Cuéntanos qué te quita tiempo. Escríbenos por SMS, agenda una llamada gratis o manda un mensaje. Respondemos en inglés o en español.',
      },
      faq: {
        title: 'Preguntas frecuentes — HaloBits',
        description:
          'Respuestas directas sobre cómo HaloBits crea software a medida, cuánto cuesta y qué esperar.',
      },
      notFound: { title: 'Página no encontrada — HaloBits', description: '' },
    },

    home: {
      hero: {
        l1: 'Quítate de encima',
        l2: 'el trabajo repetitivo.',
        tag: 'No es un servicio. Es un socio.',
        sub: 'Software a la medida, automatización y sitios web para negocios pequeños. Hecho en Miami, en inglés y en español. Una primera versión en 2 semanas a un mes, y después lo manejamos contigo. Mes a mes, cancelas cuando quieras.',
        alt: 'Pintura de una computadora antigua sobre una loma frente al mar, con el skyline de Miami y un gran sol naranja.',
      },
      problems: {
        title: 'El trabajo que siempre vuelve.',
        items: [
          { t: 'Suena el teléfono y nadie puede contestar.', b: 'Cada llamada perdida es un cliente que puede irse a otro lado.' },
          { t: '“¿Dónde está la van?”', b: 'La misma pregunta a la recepción, todas las tardes.' },
          { t: 'Los recibos se acumulan.', b: 'Papeles que perseguir y ordenar antes de que tu contador pueda usarlos.' },
        ],
      },
      build: {
        title: 'Trabajos que hicimos, para negocios como el tuyo.',
        all: 'Mira lo que hacemos',
        items: [
          {
            name: 'AI Concierge',
            for: 'Hecho para un restaurante de Miami',
            line: 'Contesta llamadas en inglés o en español.',
            href: '/what-we-build/#concierge',
          },
          {
            name: 'Van Tracker',
            for: 'Hecho para un centro de gimnasia',
            line: 'Los padres reciben un mensaje cuando llega la van.',
            href: '/what-we-build/#van',
          },
          {
            name: 'Receipt Scanner',
            for: 'Hecho para quien lleva el inventario en un negocio residencial',
            line: 'Tómale una foto al recibo y obtén una hoja de cálculo que tu contador sí puede usar.',
            href: '/what-we-build/#receipts',
          },
        ],
        note: 'Casi todo lo que hacemos es a la medida, pensado para un negocio a la vez.',
      },
      partner: {
        title: 'Nos quedamos después del lanzamiento.',
        lead: 'Descubrir y construir toma de 2 semanas a un mes, según el tamaño. Operarlo juntos va mes a mes, mientras te sirva.',
        s1c: 'Primera conversación gratis',
        s1t: 'Descubrimiento',
        s1b: 'Nos sentamos con tu equipo, aprendemos cómo trabajan y encontramos lo que vale la pena automatizar. Es gratis. Sales sabiendo qué haríamos y cuánto cuesta.',
        s2c: 'Primera versión en vivo',
        s2t: 'Construcción',
        s2b: 'En 2 semanas a un mes tienes una primera versión funcionando. La usas en tu día a día y la ajustamos contigo.',
        s3c: 'Cada mes después',
        s3t: 'Lo operamos juntos',
        s3b: 'La vigilamos, arreglamos lo que falle, casi siempre el mismo día, y la vamos cambiando a medida que cambia tu negocio.',
        month: 'Mes',
        m: 'M',
      },
      pricing: {
        title: 'Precios claros. Sin contrato.',
        lead: 'Mes a mes, cancelas cuando quieras. La primera conversación es gratis.',
        items: [
          { t: 'Página de aterrizaje', p: 'Desde $100', b: 'Una página clara que dice qué haces y cómo contactarte.' },
          { t: 'Sitio web con más funciones', p: 'Desde $500', b: 'Reservas, cuentas de usuario, pagos, un back end. Lo que tu sitio necesite hacer.' },
          { t: 'Software y automatización', p: 'Desde $200', b: 'Herramientas que te quitan el trabajo repetitivo: llamadas, reportes, recibos, recordatorios.' },
          { t: 'Lo operamos juntos', p: 'Unos $100 al mes', b: 'La vigilamos, arreglamos lo que falle y la cambiamos a medida que cambia tu negocio.' },
        ],
        foot: 'La primera versión toma de 2 semanas a un mes, según el tamaño. Después de la primera conversación te damos un precio.',
      },
      cta: {
        title: 'Construyamos algo juntos.',
        body: 'Tráenos la tarea que siempre vuelve. La primera conversación es gratis, en inglés o en español.',
        btn: 'Empezar a hablar',
        alt2: 'Mira lo que ya ofrecemos',
        alt: 'Atardecer pintado sobre el mar con un gran sol naranja, nubes pixeladas y un skyline a lo lejos.',
      },
    },

    buildPage: {
      title: 'Nosotros la rutina, tú el placer.',
      lead: 'Cada una de estas empezó con un negocio y un problema que le quitaba el día. Casi todo nuestro trabajo es a la medida.',
      modeLabel: 'Mostrar',
      products: 'Productos',
      services: 'Servicios',
      projectsLabel: 'Proyectos',
      includes: 'Incluye',
      who: 'Para quién',
      problemLabel: 'El problema',
      builtLabel: 'Lo que hicimos',
      resultLabel: 'Resultado',
      projects: [
        {
          id: 'concierge',
          name: 'AI Concierge',
          for: 'Hecho para un restaurante de Miami',
          problem: 'El dueño no podía contestar todas las llamadas. Las llamadas perdidas eran clientes perdidos, y quienes no recibían respuesta se molestaban.',
          desc: 'Una recepcionista con IA que contesta llamadas en inglés o en español, toma solicitudes de reserva y se las envía al dueño, y muestra qué preguntan los clientes y cuándo hay más movimiento.',
          includes: [
            'Solicitudes de reserva con fecha, hora y número de personas, para que tú las confirmes',
            'Respuestas sobre horario, menú, estacionamiento y eventos, con tu propia información',
            'Reconoce a los clientes que vuelven y recuerda sus preferencias',
            'Te pasa la llamada a ti o a un gerente cuando hace falta una persona',
            'Avisos de quejas y reservas, un resumen diario y un reporte semanal',
          ],
          who: 'El dueño que está en el salón a las 8 de la noche mientras el teléfono no para de sonar.',
          cta: { label: '¿Quieres algo así? Hablemos', href: '/contact/' },
          media: {
            shape: 'wide',
            ph: 'Captura · Portal del dueño de AI Concierge, reporte diario · 16:9',
            alt: 'Portal del dueño de AI Concierge con el reporte diario de llamadas contestadas y reservas.',
          },
        },
        {
          id: 'van',
          name: 'Van Tracker',
          for: 'Hecho para un centro de gimnasia',
          problem: 'La misma llamada a la recepción, todas las tardes: «¿dónde está la van?».',
          desc: 'Los padres reciben un mensaje cuando llega la van, y un mapa en vivo solo del recorrido de su hijo. Sin llamadas a la recepción, sin adivinar.',
          who: 'Cualquier negocio que transporta niños, pacientes o equipos y recibe la misma llamada de “¿por dónde vienen?” todas las tardes.',
          cta: { label: '¿Quieres algo así? Hablemos', href: '/contact/' },
          media: {
            shape: 'phone',
            ph: 'Captura · Teléfono de un padre, aviso de llegada y mapa en vivo · 9:19',
            alt: 'Van Tracker en el teléfono de un padre: un mapa en vivo del recorrido de la van de la escuela al gimnasio, con el aviso «en camino» y la llegada a las 4:20 PM.',
          },
        },
        {
          id: 'receipts',
          name: 'Receipt Scanner',
          for: 'Hecho para quien lleva el inventario en un negocio residencial',
          problem: 'Perseguir recibos de papel cada semana para tener el inventario y las cuentas en orden.',
          desc: 'Tómale una foto al recibo y obtén cada línea limpia y una hoja de cálculo que tu contador sí puede usar.',
          who: 'Quien lleva el inventario en un negocio residencial y persigue recibos todas las semanas.',
          cta: { label: '¿Quieres algo así? Hablemos', href: '/contact/' },
          media: {
            shape: 'phone',
            ph: 'Captura · Pantalla de escaneo de recibos en el teléfono · 9:19',
            alt: 'Receipt Scanner en un teléfono: la cámara apunta a un recibo de papel y la app está lista para leer sus datos.',
          },
        },
      ],
      servicesPanel: {
        lead: '¿No sabes cuál te sirve? Cuéntanos el problema y te decimos sin rodeos si podemos ayudar.',
        fromLabel: 'Desde',
        cta: 'Cuéntanos tu problema',
        items: [
          { t: 'Sitios y aplicaciones web', b: 'Desde una sola página hasta una plataforma donde entran tus clientes. Con reservas, pedidos y pagos cuando los necesites.' },
          { t: 'Automatización e integraciones', b: 'Reportes, recordatorios y avisos que corren solos, y tus pagos, teléfonos y herramientas de reservas trabajando juntos.' },
          { t: 'Integración de IA', b: 'Asistentes que contestan llamadas y mensajes en inglés o en español, y herramientas que convierten facturas, recibos y formularios en datos limpios.' },
        ],
      },
    },

    about: {
      title: 'Software que te hace el día más fácil.',
      alt: 'Pintura de una loma frente al mar al atardecer, con palmas y el skyline de Miami a lo lejos.',
      essential:
        'HaloBits es un estudio de software en Miami. Hacemos herramientas y sitios web a la medida para negocios pequeños, la capacidad que las grandes empresas siempre tuvieron, ahora al alcance de quienes quedaban fuera por el precio. Lo diseñamos, lo construimos y nos quedamos para operarlo contigo.',
      details: [
        {
          t: 'Qué hacemos',
          b: 'Hacemos software que te quita de encima el trabajo repetitivo y aburrido. Cada herramienta se ajusta a un negocio: lanzamos una primera versión que funciona y la afinamos contigo en el día a día.',
        },
        {
          t: 'Quiénes somos',
          b: 'Un estudio independiente que hace todo el trabajo en casa: estrategia, software y el soporte que viene después.',
        },
        { t: 'Dónde', b: 'Miami, Florida. Bilingües por defecto, inglés y español, como se hacen los negocios en esta ciudad.' },
        {
          t: 'Por qué existimos',
          b: 'El software potente venía con presupuesto de empresa grande y un equipo de IT para operarlo. Los demás se las arreglaban. Respondemos a una sola pregunta: ¿se te hizo más fácil el día?',
        },
        {
          t: 'Cómo trabajamos',
          b: 'Mes a mes, cancelas cuando quieras, sin contrato que te amarre. Mantenemos la tecnología silenciosa y confiable.',
        },
      ],
      team: {
        title: 'Con quién vas a hablar',
        ph: 'Foto · El equipo de HaloBits en Miami · [PLACEHOLDER]',
        q: '[PLACEHOLDER] Las palabras de un cliente sobre trabajar con nosotros, en el idioma que habla.',
        q2: '[PLACEHOLDER] Una segunda cita. Publicar solo palabras reales y aprobadas.',
        qn: '[PLACEHOLDER] Nombre · Negocio · Barrio',
      },
      people: [{ name: 'Angel Garcia', role: 'Dueño', photoAlt: 'Retrato de Angel Garcia, dueño de HaloBits.' }],
      cta: 'Hablemos',
      cta2: 'Mira lo que hacemos',
    },

    faq: {
      title: 'Respuestas directas antes de comprometerte.',
      lead: '¿No encontraste la tuya? Pregúntanos directamente. La primera conversación es gratis.',
      ask: 'Haz una pregunta',
      items: [
        {
          q: '¿Qué tipo de software pueden hacer?',
          a: 'Mucho. Si funciona a base de repetición, probablemente lo podemos automatizar. Si no sabes si tu problema encaja, cuéntanos cuál es y te decimos sin rodeos si lo podemos construir.',
          link: 'Cuéntanos tu problema',
          href: '/contact/',
        },
        {
          q: '¿Solo trabajan con restaurantes?',
          a: 'No. Venimos de la hostelería, por eso empezamos ahí, pero hacemos software para cualquier negocio pequeño o mediano.',
        },
        {
          q: 'Somos pequeños. ¿Somos demasiado pequeños para ustedes?',
          a: 'Casi seguro que no. Los negocios pequeños son justo para quienes trabajamos. Si tu problema de verdad necesita un gran proveedor empresarial, también te lo vamos a decir.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Empiezas en pequeño: una cuota de instalación y una mensualidad, mes a mes, cancelas cuando quieras. Sin contrato largo. Cada herramienta tiene sus números en su propia página, así el precio va atado a lo que recibes. Si prefieres comprar un programa y quedártelo, también se puede.',
          link: 'Ver nuestras herramientas',
          href: '/what-we-build/',
        },
        {
          q: '¿Qué necesitan de mí para empezar?',
          a: 'Menos de lo que crees. Empezamos con una conversación sobre tu día y lo que más te está costando. Sin especificaciones, sin documentos, sin tareas. En el camino solo pedimos lo necesario, como acceso a una herramienta que ya usas o unos minutos para ver cómo fluye el trabajo.',
        },
        {
          q: '¿Cuánto tarda en funcionar?',
          a: 'Ves algo en vivo en semanas. Lanzamos pronto una primera versión que funciona, la ponemos a trabajar en tu día real y la afinamos desde ahí.',
        },
        {
          q: '¿Qué pasa después del lanzamiento?',
          a: 'El lanzamiento es el comienzo de la relación. Nos quedamos, vigilando y mejorando a medida que cambia tu negocio. Cuando algo falla, lo arreglamos lo más rápido posible.',
        },
        {
          q: '¿Tengo que saber de tecnología?',
          a: 'Para nada. Tú pones el negocio, nosotros el software. Lo instalamos, lo operamos y te explicamos lo que quieras entender en palabras sencillas.',
        },
        {
          q: '¿De verdad voy a hablar con una persona?',
          a: 'Sí. Quienes construyen tu herramienta son quienes te contestan, por email o Telegram. Hablas con el estudio, no con una recepción ni con un número de ticket.',
        },
        {
          q: '¿Y si no funciona?',
          a: 'Entonces te vas, sin resentimientos. Pero si una herramienta no funciona, lo primero que hacemos es mejorarla hasta que lo haga.',
        },
      ],
    },

    contact: {
      title: 'Cuéntanos qué te consume el día.',
      name: 'Tu nombre',
      biz: 'Negocio',
      optional: '(opcional)',
      email: 'Email o teléfono',
      pref: 'Idioma para responderte',
      msg: '¿Qué tarea te sigue quitando tiempo?',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      errName: 'Dinos cómo te llamas.',
      errEmail: 'Escribe un email o un teléfono para poder responderte.',
      errMsg: 'Una o dos frases sobre el problema nos ayudan a responder.',
      quickTitle: '¿Prefieres algo más rápido?',
      errSend: 'No pudimos enviarlo. Escríbenos a hello@halobits.com.',
      sentTitle: 'Gracias, ya va en camino.',
      sentBody: 'Leemos cada mensaje nosotros mismos y te responderemos desde hello@halobits.com en el idioma que elegiste.',
      mailTitle: 'Un último paso: dale a enviar.',
      mailBody: 'Tu app de correo debería haberse abierto con el mensaje listo. Si no se abrió, escribe a hello@halobits.com y te respondemos en el idioma que elegiste.',
      another: 'Enviar otro mensaje',
      subject: 'Mensaje desde halobits.com',
    },

    notFound: {
      title: 'Esta página se perdió.',
      lead: 'El enlace está roto o la página se movió. Volvamos al camino.',
      home: 'Volver al inicio',
      contact: 'Escríbenos',
    },
  },
};

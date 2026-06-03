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

export interface SiteContent {
  meta: { home: Meta; whatWeBuild: Meta; about: Meta; contact: Meta; notFound: Meta };
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
    lead: string;
    possibilities: TitleBody[];
    techNote: TitleBody;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    valuesTitle: string;
    values: TitleBody[];
    signoff: string;
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
      title: 'Sized to your problem — from a single assistant to a whole platform.',
      lead: 'Most studios sell you the biggest thing they can. We build the smallest thing that actually fixes the problem, then grow it with you. Here is the range.',
      possibilities: [
        {
          title: 'Answer every call',
          body: 'An AI receptionist that picks up 24/7, books tables, and texts guests back — bilingual, always patient.',
        },
        {
          title: 'Remember every customer',
          body: 'A lightweight CRM with caller memory, so repeat guests feel known and your team always has context.',
        },
        {
          title: 'Understand your week',
          body: 'AI-written reports and clean dashboards that turn raw calls into decisions, in plain language.',
        },
        {
          title: 'Automate the boring middle',
          body: 'The repetitive work between a call and a happy customer — confirmations, follow-ups, reminders — handled.',
        },
        {
          title: 'Something only you need',
          body: 'Bespoke tools for businesses with their own quirks: custom flows, custom interface, dedicated support.',
        },
      ],
      techNote: {
        title: 'Built on tools we trust',
        body: 'We build on modern, dependable foundations — including Claude for the language work — and we keep the stack boring on purpose. Reliable beats clever.',
      },
    },
    about: {
      kicker: 'About',
      title: 'We make AI that earns its keep.',
      paragraphs: [
        'HaloBits is a small studio in Miami building AI tools for small and mid-sized businesses. We started because the businesses we love — restaurants, salons, clinics, family shops — keep losing customers to dropped calls, missed messages, and software that was never built for them.',
        "We believe the best technology disappears. It doesn't ask for attention; it quietly gives you your time back. So we build calm, reliable tools, in English and Spanish, and we judge them by one thing: did your day get easier?",
        'And we don\'t sell and disappear. We stay — watching, fixing, improving — because a partner is measured by what happens after the launch, not before it.',
        "We move slowly on copy, quickly on bugs, and we never ship anything we wouldn't run in our own shop.",
      ],
      valuesTitle: 'What we hold to',
      values: [
        {
          title: 'Partner, not vendor',
          body: 'We win when you win — and we stay on the line long after launch day.',
        },
        {
          title: 'Bilingual by birth',
          body: 'Miami is bilingual, so everything we build is too, from the very first day.',
        },
        {
          title: 'Calm technology',
          body: 'Reliable, quiet, out of the way. The best tool is the one you forget is there.',
        },
        {
          title: 'Honest about scope',
          body: 'We build the smallest thing that solves it — and tell you the truth about the rest.',
        },
      ],
      signoff: '— The HaloBits team',
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
      title: 'A la medida de tu problema — de un solo asistente a una plataforma entera.',
      lead: 'La mayoría de los estudios te venden lo más grande que pueden. Nosotros construimos lo más pequeño que de verdad resuelve el problema, y luego lo hacemos crecer contigo. Este es el rango.',
      possibilities: [
        {
          title: 'Contesta cada llamada',
          body: 'Un recepcionista de IA que atiende 24/7, reserva mesas y responde por mensaje — bilingüe, siempre paciente.',
        },
        {
          title: 'Recuerda a cada cliente',
          body: 'Un CRM ligero con memoria de llamadas, para que los clientes habituales se sientan reconocidos y tu equipo tenga contexto.',
        },
        {
          title: 'Entiende tu semana',
          body: 'Reportes escritos por IA y dashboards claros que convierten llamadas en decisiones, en lenguaje sencillo.',
        },
        {
          title: 'Automatiza el medio aburrido',
          body: 'El trabajo repetitivo entre una llamada y un cliente feliz — confirmaciones, seguimientos, recordatorios — resuelto.',
        },
        {
          title: 'Algo que solo tú necesitas',
          body: 'Herramientas a medida para negocios con sus propias particularidades: flujos propios, interfaz propia, soporte dedicado.',
        },
      ],
      techNote: {
        title: 'Construido sobre herramientas en las que confiamos',
        body: 'Construimos sobre bases modernas y confiables — incluido Claude para el lenguaje — y mantenemos el stack aburrido a propósito. Confiable le gana a ingenioso.',
      },
    },
    about: {
      kicker: 'Nosotros',
      title: 'Hacemos IA que se gana su lugar.',
      paragraphs: [
        'HaloBits es un pequeño estudio en Miami que crea herramientas de IA para pequeños y medianos negocios. Empezamos porque los negocios que queremos — restaurantes, salones, clínicas, negocios familiares — siguen perdiendo clientes por llamadas perdidas, mensajes sin responder y software que nunca se hizo para ellos.',
        'Creemos que la mejor tecnología desaparece. No pide atención; en silencio te devuelve tu tiempo. Por eso creamos herramientas tranquilas y confiables, en inglés y español, y las medimos por una sola cosa: ¿se te hizo más fácil el día?',
        'Y no vendemos y desaparecemos. Nos quedamos — observando, arreglando, mejorando — porque a un socio se le mide por lo que pasa después del lanzamiento, no antes.',
        'Vamos despacio con el texto, rápido con los errores, y nunca lanzamos nada que no usaríamos en nuestro propio negocio.',
      ],
      valuesTitle: 'A lo que nos atenemos',
      values: [
        {
          title: 'Socio, no proveedor',
          body: 'Ganamos cuando tú ganas — y seguimos al teléfono mucho después del día del lanzamiento.',
        },
        {
          title: 'Bilingüe de nacimiento',
          body: 'Miami es bilingüe, así que todo lo que construimos también lo es, desde el primer día.',
        },
        {
          title: 'Tecnología tranquila',
          body: 'Confiable, silenciosa, sin estorbar. La mejor herramienta es la que olvidas que está ahí.',
        },
        {
          title: 'Honestos con el alcance',
          body: 'Construimos lo más pequeño que lo resuelve — y te decimos la verdad sobre lo demás.',
        },
      ],
      signoff: '— El equipo de HaloBits',
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

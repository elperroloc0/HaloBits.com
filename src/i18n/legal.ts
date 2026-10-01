// =============================================================================
// legal.ts — Privacy and Terms copy, both languages. Conservative template text.
// It describes ONLY what the site actually does (a contact form, cookieless
// page-view analytics). It says nothing about call recording or consent — add
// that only if the owner provides it. Must be reviewed by an attorney before
// launch (the Legal page emits a TODO_OWNER marker the release check reports).
// =============================================================================
import type { Lang } from './ui';

interface Section {
  h: string;
  p: string[];
}
interface Doc {
  title: string;
  description: string;
  updated: string;
  sections: Section[];
}
export interface LegalContent {
  privacy: Doc;
  terms: Doc;
  reviewNote: string;
}

const EMAIL = 'hello@halobits.com';

export const legal: Record<Lang, LegalContent> = {
  en: {
    reviewNote: 'TODO_OWNER: review by attorney',
    privacy: {
      title: 'Privacy',
      description: 'What halobits.com collects when you write to us, why, how long we keep it, and how to ask us to delete it.',
      updated: 'Last updated: September 2026',
      sections: [
        {
          h: 'What we collect',
          p: [
            'When you use the contact form we collect your name, your email address, your business name (optional), the language you want us to reply in, and the message you write.',
            'If you email or call us directly, we keep that email or the phone number and what you tell us.',
            'We also count page views with a cookieless analytics tool. It does not use cookies and does not build a profile of you.',
          ],
        },
        {
          h: 'Why we collect it',
          p: ['Only to read your message, reply to you, and keep a record of the conversation. We do not sell your information and we do not use it for advertising.'],
        },
        {
          h: 'Who sees it',
          p: ['Messages from the form reach us by email through the service that delivers the form. Our hosting provider and that delivery service process data on our behalf. We share your information with others only if the law requires it.'],
        },
        {
          h: 'How long we keep it',
          p: ['We keep messages for as long as we need them to answer you and to keep a record of our work together. If we never end up working together, you can ask us to delete them at any time.'],
        },
        {
          h: 'Your choices',
          p: [`To see, correct or delete what we have about you, email ${EMAIL}. We will answer within a reasonable time.`],
        },
        {
          h: 'Contact',
          p: [`HaloBits LLC, Miami, FL · ${EMAIL}`],
        },
      ],
    },
    terms: {
      title: 'Terms',
      description: 'The simple terms for using halobits.com.',
      updated: 'Last updated: September 2026',
      sections: [
        {
          h: 'This website',
          p: ['halobits.com is run by HaloBits LLC, a small software studio in Miami, FL. It describes what we do. It is not an offer that binds us.'],
        },
        {
          h: 'Working with us',
          p: ['Custom work, pricing, timelines and ongoing support are agreed in writing with each client. What this site says does not replace that agreement.'],
        },
        {
          h: 'Our content',
          p: ['The text, designs and images on this site belong to HaloBits or are used with permission. Please ask before reusing them.'],
        },
        {
          h: 'Links to other sites',
          p: ['We link to sites we run (like our AI Concierge product) and may link to others. We are not responsible for the content or practices of sites we do not run.'],
        },
        {
          h: 'No guarantees',
          p: ['We work to keep this site accurate and available, but we provide it as is, without warranties of any kind, and to the extent the law allows we are not liable for losses from using it.'],
        },
        {
          h: 'Questions',
          p: [`Write to ${EMAIL}.`],
        },
      ],
    },
  },

  es: {
    reviewNote: 'TODO_OWNER: review by attorney',
    privacy: {
      title: 'Privacidad',
      description: 'Qué datos recoge halobits.com cuando nos escribes, para qué, cuánto tiempo los guardamos y cómo pedir que los borremos.',
      updated: 'Última actualización: septiembre de 2026',
      sections: [
        {
          h: 'Qué datos recogemos',
          p: [
            'Cuando usas el formulario de contacto recibimos tu nombre, tu correo, el nombre de tu negocio (opcional), el idioma en que prefieres la respuesta y tu mensaje.',
            'Si nos escribes por correo o nos llamas, guardamos ese correo o tu número de teléfono y lo que nos cuentes.',
            'También contamos las visitas a las páginas con una herramienta de analítica sin cookies. No te sigue ni crea un perfil tuyo.',
          ],
        },
        {
          h: 'Para qué los usamos',
          p: ['Solo para leer tu mensaje, responderte y guardar el registro de la conversación. No vendemos tus datos ni los usamos para publicidad.'],
        },
        {
          h: 'Quién los ve',
          p: ['Los mensajes del formulario nos llegan por correo a través del servicio que entrega el formulario. Nuestro proveedor de hosting y ese servicio procesan datos por nuestra cuenta. Solo compartimos tus datos con otras personas si la ley lo exige.'],
        },
        {
          h: 'Cuánto tiempo los guardamos',
          p: ['Los guardamos mientras los necesitemos para responderte y para llevar el registro de nuestro trabajo juntos. Si al final no trabajamos juntos, puedes pedirnos que los borremos cuando quieras.'],
        },
        {
          h: 'Tus opciones',
          p: [`Para ver, corregir o borrar lo que tenemos sobre ti, escribe a ${EMAIL}. Te respondemos en un plazo razonable.`],
        },
        {
          h: 'Contacto',
          p: [`HaloBits LLC, Miami, FL · ${EMAIL}`],
        },
      ],
    },
    terms: {
      title: 'Términos',
      description: 'Los términos sencillos para usar halobits.com.',
      updated: 'Última actualización: septiembre de 2026',
      sections: [
        {
          h: 'Este sitio',
          p: ['halobits.com lo opera HaloBits LLC, un estudio de software pequeño en Miami, FL. Explica lo que hacemos. No es una oferta que nos obligue.'],
        },
        {
          h: 'Trabajar con nosotros',
          p: ['El trabajo a la medida, los precios, los plazos y el soporte continuo se acuerdan por escrito con cada cliente. Lo que dice este sitio no reemplaza ese acuerdo.'],
        },
        {
          h: 'Nuestro contenido',
          p: ['Los textos, diseños e imágenes de este sitio son de HaloBits o se usan con permiso. Pídenos permiso antes de reutilizarlos.'],
        },
        {
          h: 'Enlaces a otros sitios',
          p: ['Enlazamos a sitios que operamos (como nuestro producto AI Concierge) y podemos enlazar a otros. No somos responsables del contenido ni de las prácticas de sitios que no operamos.'],
        },
        {
          h: 'Sin garantías',
          p: ['Nos esforzamos por mantener el sitio correcto y disponible, pero lo ofrecemos tal cual, sin garantías de ningún tipo y, hasta donde lo permita la ley, sin responsabilidad por pérdidas derivadas de su uso.'],
        },
        {
          h: 'Preguntas',
          p: [`Escribe a ${EMAIL}.`],
        },
      ],
    },
  },
};

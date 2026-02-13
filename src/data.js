export const MODULES = [
  {
    id: 'web',
    name: 'Sitio Web + Motor de Reservas',
    description: 'Diseño premium, optimización SEO y motor de conversión directa.',
    price: { initial: 85000, monthly: 3500 },
    type: 'checkbox',
    category: 'Core'
  },
  {
    id: 'siteminder',
    name: 'Integración SiteMinder',
    description: 'Conexión bidireccional con OTAs (Booking, Expedia, etc).',
    price: { initial: 12000, monthly: 0 },
    type: 'checkbox',
    category: 'Core'
  },
  {
    id: 'crm',
    name: 'CRM Hotelero',
    description: 'Centralización de datos de huéspedes y segmentación.',
    price: { initial: 28000, monthly: 2500 },
    type: 'checkbox',
    category: 'Growth'
  },
  {
    id: 'social',
    name: 'Redes Sociales',
    description: 'Gestión de contenido y comunidad (Instagram/Facebook).',
    price: { initial: 0, monthly: 18000 },
    type: 'checkbox',
    category: 'Marketing'
  },
  // Dynamic pricing for 360 tours
  {
    id: 'tour_lobby',
    name: 'Recorrido 360° - Lobbys/Áreas',
    description: 'Experiencia inmersiva de áreas comunes.',
    price: { initial: 4000, monthly: 0 },
    type: 'number',
    defaultValue: 1,
    category: 'Visual'
  },
  {
    id: 'tour_room',
    name: 'Recorrido 360° - Habitaciones',
    description: 'Captura de habitaciones y suites.',
    price: { initial: 3000, monthly: 0 },
    type: 'number',
    defaultValue: 0,
    category: 'Visual'
  }
];

export const PLANS = [
  {
    id: 'premium',
    name: 'Plan Full Premium',
    price: 25000,
    features: ['Atención telefónica personalizada', 'Gestión total del ecosistema', 'Respuesta inmediata', 'Consultoría estratégica'],
    color: '#ef4444' // Red
  },
  {
    id: 'professional',
    name: 'Plan Profesional',
    price: 3000,
    features: ['Soporte en horario laboral', 'Atención vía WhatsApp y email', 'Gestión operativa y técnica'],
    color: '#f97316' // Orange
  },
  {
    id: 'basic',
    name: 'Plan Básico',
    price: 1000,
    features: ['Soporte técnico por tickets', 'Mantenimiento correctivo', 'Respuesta en 48 hrs hábiles'],
    color: '#22c55e' // Green
  }
];

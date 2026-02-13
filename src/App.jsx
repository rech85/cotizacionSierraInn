import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Smartphone,
  Globe,
  Gift,
  Users,
  Share2,
  Mail,
  Video,
  Check,
  X,
  ChevronRight,
  Menu,
  Phone,
  MessageCircle,
  ShieldCheck,
  Star
} from 'lucide-react';
import { MODULES, PLANS } from './data';
import './index.css';

// --- Navbar ---
const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md"
  >
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Sierra Inn" className="h-12 w-auto object-contain" />
    </div>
    <button className="text-slate-900 hover:text-emerald-600 transition-colors">
      <Menu size={24} />
    </button>
  </motion.nav>
);

// --- Hero Section ---
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <Navbar />
    <div className="absolute inset-0 bg-slate-950/40 z-10" />
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80)' }} // Modern beige hotel
    />

    <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent/90 text-white px-4 py-1 rounded-full uppercase tracking-widest text-xs font-semibold mb-6 inline-block shadow-lg"
      >
        Propuesta Digital Exclusiva
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg"
      >
        La experiencia digital que <span className="text-white italic">Hoteles Sierra Inn</span> merece
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
      >
        Plataforma integral para reservas directas, lealtad de clientes y operación sin fricciones.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Arma tu propuesta personalizada
        </button>
        <button
          onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}
          className="bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-full transition-all font-medium"
        >
          Ver alcance completo
        </button>
      </motion.div>
    </div>
  </section>
);

// --- Vision Section ---
const Vision = () => (
  <motion.section
    id="vision"
    className="section bg-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
  >
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-emerald-100 blur-3xl rounded-full opacity-60" />
        <img
          src="/vision.jpg"
          alt="Tecnología y Calidez Humana"
          className="relative rounded-2xl shadow-xl transition-transform hover:scale-[1.02] duration-500"
        />
      </div>
      <div>
        <h2 className="text-4xl text-slate-900 mb-6">Más que una página web: el corazón digital de tus hoteles</h2>
        <p className="text-lg text-slate-600 mb-6">
          Unimos diseño web, reservas directas, CRM y automatización de comunicación en un solo ecosistema.
        </p>
        <p className="text-lg text-slate-600 font-medium">
          El resultado: más reservas directas, mejor experiencia del huésped y una operación digital ordenada, diseñada para escalar sin fricciones.
        </p>
      </div>
    </div>
  </motion.section>
);

// --- Calculator Section ---
const Calculator = ({ selectedModules, toggleModule, moduleQuantities, updateQuantity, selectedPlan, selectPlan }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'web': return <Globe />;
      case 'siteminder': return <Share2 />;
      case 'app': return <Smartphone />;
      case 'rewards': return <Gift />;
      case 'crm': return <Users />;
      case 'social': return <Share2 />;
      case 'email': return <Mail />;
      default: return <Video />;
    }
  };

  return (
    <motion.section
      id="calculator"
      className="section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">Tu Inversión</span>
        <h2 className="text-4xl mt-4 text-slate-900">Configura tu Ecosistema Digital</h2>
        <p className="max-w-xl mx-auto mt-4 text-slate-600">Selecciona los módulos que necesitas y visualiza tu inversión en tiempo real.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Module Selection */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl mb-6 flex items-center gap-2 text-slate-800">
            <Building2 className="text-accent" /> Módulos Tecnológicos
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {MODULES.filter(m => m.type === 'checkbox').map(module => (
              <label
                key={module.id}
                className={`card relative cursor-pointer group select-none flex flex-col justify-between h-full transition-all duration-200
                  ${selectedModules[module.id]
                    ? 'border-2 border-emerald-600 bg-emerald-50/80 shadow-lg ring-1 ring-emerald-500/20 transform scale-[1.02] z-10'
                    : 'bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md'
                  }
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl transition-colors duration-200 ${selectedModules[module.id] ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'}`}>
                    {getIcon(module.id)}
                  </div>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedModules[module.id] ? 'bg-emerald-600 border-emerald-600 text-white scale-110' : 'border-slate-300 bg-white group-hover:border-emerald-300'}`}>
                    {selectedModules[module.id] && <Check size={16} strokeWidth={4} />}
                  </div>
                  <input
                    type="checkbox"
                    checked={!!selectedModules[module.id]}
                    onChange={() => toggleModule(module.id)}
                    className="hidden"
                  />
                </div>

                <div>
                  <h4 className={`text-lg font-bold mb-2 transition-colors ${selectedModules[module.id] ? 'text-emerald-900' : 'text-slate-800'}`}>{module.name}</h4>
                  <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed opacity-90">{module.description}</p>
                </div>

                <div className={`mt-auto border-t pt-4 flex justify-between items-end text-sm -mx-6 -mb-6 p-6 transition-colors ${selectedModules[module.id] ? 'bg-emerald-100/50 border-emerald-200' : 'bg-slate-50 border-slate-100'}`}>
                  <div>
                    <div className={`text-xs uppercase font-extrabold tracking-wider mb-1 ${selectedModules[module.id] ? 'text-emerald-700' : 'text-slate-500'}`}>Pago Inicial</div>
                    <div className={`font-black text-xl ${selectedModules[module.id] ? 'text-emerald-900' : 'text-slate-900'}`}>${module.price.initial.toLocaleString()}</div>
                  </div>
                  {module.price.monthly > 0 && (
                    <div className="text-right">
                      <div className={`text-xs uppercase font-extrabold tracking-wider mb-1 ${selectedModules[module.id] ? 'text-emerald-700' : 'text-slate-500'}`}>Mensualidad</div>
                      <div className="font-black text-emerald-600 text-xl">+${module.price.monthly.toLocaleString()}</div>
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="text-xl text-slate-900 mb-6 flex items-center gap-2 font-bold">
              <Video className="text-accent" /> Recorridos Virtuales 360°
            </h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {MODULES.filter(m => m.type === 'number').map(module => (
                <div key={module.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <label className="block text-sm text-slate-800 font-bold mb-1">{module.name}</label>
                  <p className="text-xs text-slate-500 mb-4 h-8">{module.description}</p>
                  <div className="flex items-center justify-between mt-3 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-emerald-700 text-sm font-bold flex flex-col">
                      <span>${module.price.initial.toLocaleString()}</span>
                      <span className="text-[10px] font-normal text-slate-500 uppercase">Pago Único</span>
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={moduleQuantities[module.id]}
                      onChange={(e) => updateQuantity(module.id, parseInt(e.target.value) || 0)}
                      className="bg-white border border-slate-300 rounded-md w-20 text-center text-slate-900 font-bold focus:ring-2 focus:ring-accent focus:border-transparent py-2 shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl mb-6 flex items-center gap-2 text-slate-800">
            <ShieldCheck className="text-accent" /> Plan de Atención
          </h3>
          <div className="space-y-4 sticky top-24">
            {PLANS.map(plan => (
              <div
                key={plan.id}
                onClick={() => selectPlan(plan.id)}
                className={`card cursor-pointer transition-all duration-200 relative overflow-hidden
                  ${selectedPlan === plan.id
                    ? 'border-2 border-emerald-600 bg-emerald-50 shadow-xl shadow-emerald-500/20 transform scale-[1.02] z-20'
                    : 'bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md'
                  }
                `}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider shadow-sm z-10">
                    Recomendado
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200
                    ${selectedPlan === plan.id ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300 bg-white group-hover:border-emerald-400'}
                  `}>
                    {selectedPlan === plan.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                  <h4 className={`text-lg font-bold m-0 transition-colors ${selectedPlan === plan.id ? 'text-emerald-900' : 'text-slate-800'}`}>{plan.name}</h4>
                </div>

                <div className={`text-3xl font-serif mb-4 ml-9 font-bold transition-colors ${selectedPlan === plan.id ? 'text-emerald-700' : 'text-slate-900'}`}>
                  ${plan.price.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-medium">/mes</span>
                </div>

                <ul className="space-y-3 ml-9">
                  {plan.features.map((feat, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 transition-colors ${selectedPlan === plan.id ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>
                      <Check size={16} className={`${selectedPlan === plan.id ? 'text-emerald-600' : 'text-emerald-500'} shrink-0`} strokeWidth={selectedPlan === plan.id ? 3 : 2} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// --- Summary Bar ---
const SummaryBar = ({ totals }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="summary-bar bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center w-full md:w-auto">
        <div className="flex-1 md:flex-none">
          <div className="text-xs text-slate-600 uppercase tracking-widest font-bold mb-1">Pago Inicial Único</div>
          <div className="text-3xl md:text-4xl font-serif text-slate-900 font-bold tracking-tight">${totals.initial.toLocaleString()}</div>
        </div>
        <div className="h-12 w-px bg-slate-300 hidden md:block"></div>
        <div className="flex-1 md:flex-none">
          <div className="text-xs text-emerald-700 uppercase tracking-widest font-bold mb-1">Suscripción Mensual</div>
          <div className="text-3xl md:text-4xl font-serif text-emerald-600 font-bold tracking-tight">${totals.monthly.toLocaleString()} <span className="text-base text-slate-400 font-sans font-normal">/mes</span></div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => window.print()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          title="Guardar como PDF"
        >
          <Share2 size={18} /> <span>Exportar Cotización PDF</span>
        </button>
      </div>
    </motion.div>
  );
};

// --- Terms Section ---
const Terms = () => (
  <motion.section
    className="py-20 bg-slate-50 border-t border-slate-200"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="container max-w-4xl mx-auto text-center">
      <h3 className="text-2xl font-serif text-slate-900 mb-8">Condiciones Generales</h3>
      <div className="grid md:grid-cols-2 gap-8 text-left text-sm text-slate-600 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <ul className="space-y-4">
          <li className="flex gap-3"><Check size={18} className="text-accent shrink-0" /> Anticipo: 50% para inicio de cada desarrollo.</li>
          <li className="flex gap-3"><Check size={18} className="text-accent shrink-0" /> Tiempos de entrega: Web: 6–8 semanas.</li>
          <li className="flex gap-3"><Check size={18} className="text-accent shrink-0" /> Contratos de suscripción: mínimo 6 meses.</li>
        </ul>
        <ul className="space-y-4">
          <li className="flex gap-3"><ShieldCheck size={18} className="text-accent shrink-0" /> Propiedad: El cliente es dueño de la información; código y licencias bajo contrato.</li>
          <li className="flex gap-3"><X size={18} className="text-rose-400 shrink-0" /> Precios: No incluyen I.V.A.</li>
          <li className="flex gap-3"><X size={18} className="text-rose-400 shrink-0" /> Alcance: Cambios mayores se cotizan por separado.</li>
        </ul>
      </div>
    </div>
  </motion.section>
);

// --- App Component ---
function App() {
  // Initialize state
  const [selectedModules, setSelectedModules] = useState(() => {
    const initial = {};
    MODULES.filter(m => m.type === 'checkbox').forEach(m => initial[m.id] = false);
    // Suggest 'web' and 'crm' as defaults? Let's leave clear for user to build.
    return initial;
  });

  const [moduleQuantities, setModuleQuantities] = useState(() => {
    const initial = {};
    MODULES.filter(m => m.type === 'number').forEach(m => initial[m.id] = m.defaultValue || 0);
    return initial;
  });

  const [selectedPlan, setSelectedPlan] = useState('premium');

  // Toggle handlers
  const toggleModule = (id) => setSelectedModules(prev => ({ ...prev, [id]: !prev[id] }));

  const updateQuantity = (id, val) => setModuleQuantities(prev => ({ ...prev, [id]: Math.max(0, val) }));

  // Calculate totals
  const totals = useMemo(() => {
    let initial = 0;
    let monthly = 0;

    // Modules (Checkbox)
    MODULES.filter(m => m.type === 'checkbox').forEach(m => {
      if (selectedModules[m.id]) {
        initial += m.price.initial;
        monthly += m.price.monthly;
      }
    });

    // Modules (Numeric)
    MODULES.filter(m => m.type === 'number').forEach(m => {
      const qty = moduleQuantities[m.id] || 0;
      initial += m.price.initial * qty;
      monthly += m.price.monthly * qty;
    });

    // Plan
    const plan = PLANS.find(p => p.id === selectedPlan);
    if (plan) {
      monthly += plan.price;
    }

    return { initial, monthly };
  }, [selectedModules, moduleQuantities, selectedPlan]);

  return (
    <div className="min-h-screen pb-32">
      <Hero />
      <Vision />
      <Calculator
        selectedModules={selectedModules}
        toggleModule={toggleModule}
        moduleQuantities={moduleQuantities}
        updateQuantity={updateQuantity}
        selectedPlan={selectedPlan}
        selectPlan={setSelectedPlan}
      />
      <Terms />

      {/* Emotional Closing */}
      <section className="py-24 text-center container">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">¿Hablamos del futuro?</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          No solo desarrollamos tecnología. Diseñamos experiencias que convierten huéspedes en clientes fieles de Sierra Inn.
        </p>
        <a
          href="https://wa.me/524448509982"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <MessageCircle size={24} /> Hablemos de la experiencia Sierra Inn
        </a>
      </section>

      <SummaryBar totals={totals} />
    </div>
  );
}

export default App;

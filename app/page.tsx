import {
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  Clock
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-rose-200">
      {/* HERO SECTION */}
      <header className="bg-white border-b border-neutral-200 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-800 text-sm font-bold mb-6 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                Deja de desperdiciar material caro
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Conviértete en <span className="text-amber-500 underline decoration-amber-200 underline-offset-4">Experto Aplicador de Resina</span> en Menos de 7 Días
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong className="text-neutral-900">Aprende paso a paso y comienza tu propio negocio desde casa o taller, sin herramientas costosas.</strong> ¿Harta de desperdiciar material? Te llevo de la mano para que domines el Porcelanato Líquido y generes ingresos reales.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-rose-500/30 w-full sm:w-auto"
                >
                  DESCARGA EL LIBRO AHORA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" /> Garantía de 7 días
                • Acceso Inmediato
              </p>
            </div>
            
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-4 border-white bg-neutral-900">
                <iframe 
                  src="https://player.vimeo.com/video/1180591749?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="VSL Resina"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE DE MEDIOS / ARTÍCULOS DE PRENSA EN LOOP */}
      <section className="py-10 bg-amber-500 text-neutral-900 overflow-hidden border-y border-amber-600">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-neutral-900 opacity-90">
            Visto en revistas, diarios y medios internacionales de decoración y emprendimiento
          </p>
        </div>
        <div className="flex w-full overflow-x-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[
              { name: "Revista Hogar & Diseño", quote: "El manual definitivo para emprender en resina desde casa." },
              { name: "Diario El Clarín", quote: "El arte del porcelanato líquido revoluciona los talleres independientes." },
              { name: "Emprende Hoy Magazine", quote: "Cientos de alumnos facturan su primer mes gracias al método paso a paso." },
              { name: "Arquitectura & Estilo", quote: "Técnicas profesionales al alcance de cualquier principiante." },
              { name: "Revista Hogar & Diseño", quote: "El manual definitivo para emprender en resina desde casa." },
              { name: "Diario El Clarín", quote: "El arte del porcelanato líquido revoluciona los talleres independientes." }
            ].map((media, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-amber-400">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-black text-sm text-neutral-900">{media.name}</p>
                  <p className="text-xs text-neutral-600 italic">"{media.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS / PRUEBAS SOCIALES CON FOTOS Y PADRE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-bold mb-4 uppercase tracking-wider">
              <Star className="w-4 h-4 fill-current text-amber-500" />
              Casos de éxito reales
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4">
              Lo que dicen nuestros alumnos y el legado de nuestro maestro fundacional
            </h2>
            <p className="text-lg text-neutral-600">
              Personas comunes que comenzaron desde cero y hoy tienen su propio taller respaldados por más de 30 años de experiencia familiar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Don Roberto (El Padre y Maestro)",
                location: "Fundador y Maestro Artesano",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
                quote: "Transmiitir este oficio a mi hija Maria Alejandra y a miles de alumnos en toda Latinoamérica es la mayor satisfacción de mi vida.",
                stars: 5,
                highlight: "Legado de 30+ años"
              },
              {
                name: "Carla Mendoza",
                location: "Buenos Aires, Argentina",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
                quote: "Recuperé mi inversión en la primera mesa que vendí. Las explicaciones paso a paso de Maria Alejandra y el legado de su padre te dan una confianza inmensa.",
                stars: 5,
                highlight: "Vendió su 1ra mesa en 5 días"
              },
              {
                name: "Esteban Valenzuela",
                location: "Santiago de Chile",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
                quote: "Cometía muchos errores desperdiciando material costoso. Este curso me salvó literalmente el bolsillo. Ahora trabajo desde mi casa con total seguridad.",
                stars: 5,
                highlight: "Ahorró 40% en materiales"
              }
            ].map((t, i) => (
              <div key={i} className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow">
                <div className="absolute top-6 right-6 px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-extrabold rounded-full">
                  {t.highlight}
                </div>
                <div>
                  <div className="flex text-amber-400 mb-6">
                    {[...Array(t.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base">{t.name}</h3>
                    <p className="text-xs text-neutral-500 font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Maria Alejandra - Instructora" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Tu Instructora: <span className="text-amber-500">Maria Alejandra</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Profesional con <strong>más de 10 años de experiencia</strong>, trabaja con resina desde niña junto a su padre (Don Roberto) y abuelo.
                </p>
                <p>
                  En los últimos 4 años ha capacitado a <strong>más de 6.500 personas</strong> en Argentina, Chile, Paraguay y Uruguay, ayudándolas a transformar su pasión en un negocio rentable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Necesito experiencia previa para empezar?</h4>
              <p className="text-neutral-300 leading-relaxed">¡Absolutamente no! El libro está diseñado desde cero, paso a paso.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

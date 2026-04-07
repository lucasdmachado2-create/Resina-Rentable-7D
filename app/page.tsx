import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  XCircle,
  Gift,
  Clock,
  PlayCircle,
  TrendingUp,
  Award,
  Video,
  Quote,
  ThumbsUp,
  Heart,
  Zap,
  Users
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

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white p-2 sm:p-3 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-2 sm:gap-3 animate-bounce-slow z-20">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Alumna" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Alumna" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alumna" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex text-amber-400">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /><Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /><Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /><Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /><Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-neutral-900">+6,500 alumnas</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-2 sm:-right-6 bg-white p-2 sm:p-3 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-2 sm:gap-3 z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-neutral-900">Alta Demanda</p>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500">Negocio rentable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* GALERIA DE INSPIRAÇÃO */}
      <section className="py-16 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Imagina poder crear estas piezas con tus propias manos...</h2>
            <p className="text-neutral-400">Y lo mejor: iniciar tu propio negocio en casa y generar ingresos reales en tiempo récord.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* INSTRUÇÃO PARA O USUÁRIO: Substitua os src abaixo pelas suas imagens de artesanato (ex: "/image_2.jpg") */}
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src="https://image.pollinations.ai/prompt/epoxy-resin-jewelry-necklace-pendant-macro-photography?width=400&height=400&nologo=true" alt="Joyería en resina" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src="https://image.pollinations.ai/prompt/epoxy-resin-wall-clock-ocean-waves-art?width=400&height=400&nologo=true" alt="Reloj en resina" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src="https://image.pollinations.ai/prompt/epoxy-resin-lamp-wood-glowing-art?width=400&height=400&nologo=true" alt="Lámpara en resina" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src="https://image.pollinations.ai/prompt/epoxy-resin-river-table-wood-furniture?width=400&height=400&nologo=true" alt="Mesa en resina" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICACIÓN / DOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-neutral-900">
            ¿Te identificas con esto?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:border-amber-300 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-neutral-900">¿Buscás ingresos extras?</h3>
              <p className="text-neutral-600 leading-relaxed">No encontrás opciones para generar dinero adicional en esta época.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:border-amber-300 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-neutral-900">¿Sin saber por dónde empezar?</h3>
              <p className="text-neutral-600 leading-relaxed">Querés el paso a paso garantizado para elaborar diseños increíbles con resina.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:border-amber-300 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-neutral-900">¿Dónde comprar materiales?</h3>
              <p className="text-neutral-600 leading-relaxed">No sabés dónde conseguir resina y moldes a buen precio en tu ciudad.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:border-amber-300 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-neutral-900">¿Sin inversión grande?</h3>
              <p className="text-neutral-600 leading-relaxed">Podés crear diseños increíbles y montar tu negocio sin herramientas costosas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUE VAS A APRENDER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-neutral-900">
            ¿Qué vas a Aprender?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-amber-600 font-serif text-xl">📖</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">De lo básico a lo avanzado</h3>
                <p className="text-neutral-600">Diseñá, preparate y aplicá correctamente la Resina Epóxica.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-amber-600 font-serif text-xl">🗝️</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Método SECRETO</h3>
                <p className="text-neutral-600">Técnicas de los mejores aplicadores para lograr diseños increíbles con poca inversión.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-amber-600 font-serif text-xl">🧪</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Tipos de Resina</h3>
                <p className="text-neutral-600">Conocé cuál resina usar en cada tipo de proyecto.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-amber-600 font-serif text-xl">💰</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-neutral-900">Ahorrá hasta un 80%</h3>
                <p className="text-neutral-600">Técnicas de ahorro y cálculo exacto de materiales sin desperdiciar ni una gota.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A QUIEN VA DIRIGIDO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
                ¿A Quién Va Dirigido?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-800 p-8 rounded-3xl border border-neutral-700">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                    <span className="text-2xl">🏠</span> Cualquier persona
                  </h3>
                  <p className="text-neutral-400">Con o sin conocimiento previo, que quiera crear obras de arte para su hogar.</p>
                </div>
                
                <div className="bg-neutral-800 p-8 rounded-3xl border border-neutral-700">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                    <span className="text-2xl">💼</span> Emprendedores
                  </h3>
                  <p className="text-neutral-400">Que quieran iniciar un negocio innovador y rentable desde casa.</p>
                </div>
                
                <div className="bg-neutral-800 p-8 rounded-3xl border border-neutral-700">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                    <span className="text-2xl">🪚</span> Carpinteros
                  </h3>
                  <p className="text-neutral-400">En busca de ideas alternativas con innovación para su negocio.</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop" 
                alt="Grupo de personas aprendiendo" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS DEL LIBRO DIGITAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-neutral-900">
            Beneficios del Libro Digital
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-neutral-900">Aprende desde Casa</h3>
              <p className="text-neutral-600">A tu propio ritmo, sin horarios fijos ni desplazamientos.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-neutral-900">Acceso Inmediato</h3>
              <p className="text-neutral-600">Comenzá a leer y aplicar las técnicas hoy mismo, sin esperas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-neutral-900">Genera Ganancias</h3>
              <p className="text-neutral-600">Convertí tu nuevo conocimiento en una fuente de ingresos rentable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VILÃO EXTERNO & MECANISMO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mírame bien: <span className="text-rose-600">No es tu culpa.</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              No te falta talento. El problema es que YouTube y TikTok están llenos de "tutoriales rápidos" que omiten los detalles más importantes para ganar likes. Te enseñan a improvisar, no a trabajar como profesional.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Conoce el <span className="text-amber-400">Método Curado Perfecto (MCP)</span>
              </h3>
              <p className="text-xl text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
                Un programa paso a paso, diseñado para principiantes, que te enseña a dominar el Porcelanato Líquido en menos de 7 días. Elimina el 99% de las burbujas y garantiza que tu resina quede dura como piedra y brillante como cristal para que puedas vender tus piezas.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-rose-500/30">
                    1
                  </div>
                  <h4 className="text-xl font-bold mb-3">Proporción Milimétrica</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Cómo medir (sin básculas caras) para que la mezcla química sea exacta y nunca quede chiclosa.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-amber-500/30">
                    2
                  </div>
                  <h4 className="text-xl font-bold mb-3">Control de Temperatura</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    El truco casero para calentar la resina antes de mezclarla que hace que las burbujas desaparezcan solas.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-emerald-500/30">
                    3
                  </div>
                  <h4 className="text-xl font-bold mb-3">Curado Blindado</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Cómo proteger tu pieza mientras seca para que la humedad y el polvo no arruinen el brillo final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AS SEEN ON / TRUST BAR */}
      <section className="py-10 border-y border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">Nuestras alumnas venden sus piezas en:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="text-xl font-black font-serif">Instagram</div>
            <div className="text-xl font-black font-sans tracking-tighter">TikTok</div>
            <div className="text-xl font-black">Facebook Marketplace</div>
            <div className="text-xl font-black font-serif italic">Etsy</div>
            <div className="text-xl font-black uppercase tracking-widest">Ferias Locales</div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - RESULTADOS REAIS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-6 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              Comunidad Activa
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Opiniones del Libro
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Más de 6,500 alumnas ya están creando piezas increíbles y generando ingresos extra desde la mesa de su comedor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Liliana" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">Liliana Fissolo</p>
                  <div className="flex text-amber-400 text-sm">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 mb-4 flex-grow italic">
                "Hola grupo: está fue mi primera feria de artesanías el domingo 5 de diciembre. Pude exponer la joyería y llaveros realizados en resina epoxi. Toda una novedad para mi comunidad."
              </p>
              {/* INSTRUÇÃO: Substitua pelo src da imagem da Liliana (image_4.jpg) */}
              <div className="relative h-48 rounded-xl overflow-hidden mt-4">
                <img src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=400&auto=format&fit=crop" alt="Feria de Liliana" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Pamela" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">Pamela Fuenzalida</p>
                  <div className="flex text-amber-400 text-sm">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 mb-4 flex-grow italic">
                "Hola!!! Les muestro mi primer trabajo con resina 🤩 estaba hace tiempo muy entusiasmada en aprender... este fue el primer resultado y me siento feliz!! Así que ahora más que motivada a seguir probando."
              </p>
              {/* INSTRUÇÃO: Substitua pelo src da imagem da Pamela (image_5.jpg) */}
              <div className="relative h-48 rounded-xl overflow-hidden mt-4">
                <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=400&auto=format&fit=crop" alt="Llaveros de Pamela" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Testimonial 3 (Messages) */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Luis" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">Luis</p>
                </div>
                <p className="text-neutral-700 text-sm italic">
                  "OK hasta el momento los cursos que he tenido han sido medianamente buenos... pero hacía falta la parte teórica explicada en detalle, del porque usar esta u otra resina, los tiempos de secado... Excelente."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Adri" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">Adri Hensen</p>
                </div>
                <p className="text-neutral-700 text-sm italic">
                  "Hola ! Soy Adri Hensen! Acabo de adquirir el libro de resina y estoy feliz. Gracias!!! Ya preguntaré mis dudas!!!"
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Fabián" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">Fabián Morales</p>
                </div>
                <p className="text-neutral-700 text-sm italic">
                  "Buenisimo el libro muy bien explicado cada detalle. Lo estoy leyendo en este momento."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                    <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="María" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">María José</p>
                </div>
                <p className="text-neutral-700 text-sm italic">
                  "¡Por fin logré que mis llaveros no queden pegajosos! El truco de la temperatura me salvó la vida y el bolsillo. Ya vendí mis primeros 5."
                </p>
              </div>
            </div>
            
            {/* Testimonial 4 (Image) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-200 flex flex-col lg:col-span-3 md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden">
                  {/* INSTRUÇÃO: Substitua pelo src da imagem de antes/depois ou resultado increíble */}
                  <img src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=600&auto=format&fit=crop" alt="Resultado de alumna" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-neutral-900 shadow-sm">
                    Mi primera mesa 🥺
                  </div>
                </div>
                <div>
                  <Quote className="w-12 h-12 text-rose-200 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">"De un pasatiempo frustrante a un negocio rentable en 3 semanas"</h3>
                  <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                    "Gasté muchísimo dinero en resina que tuve que botar porque quedaba opaca o llena de burbujas. Estaba a punto de rendirme hasta que encontré este método. La diferencia es abismal. Ahora mis amigas me piden que les haga mesas y bandejas, ¡y me pagan por ello!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-neutral-200 rounded-full overflow-hidden relative shrink-0">
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Avatar" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 text-lg">Carmen R.</p>
                      <p className="text-neutral-500">Emprendedora desde casa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-lg font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
              >
                QUIERO LOGRAR ESTOS RESULTADOS
                <ArrowRight className="w-5 h-5" />
              </a>
          </div>
        </div>
      </section>

      {/* OFERTA (STACK) & PREÇO */}
      <section id="oferta" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50 via-white to-white pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Todo lo que necesitas para empezar hoy
            </h2>
            <p className="text-xl text-neutral-600">
              Sin secretos, sin relleno. El paso a paso exacto para crear y vender.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Visual / Arte em Resina */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-8">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format&fit=crop" 
                    alt="Arte en Resina" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Discount Overlay */}
                  <div className="absolute top-4 right-4 bg-rose-600 text-white font-black text-xl px-4 py-2 rounded-full shadow-lg transform rotate-12 z-20 border-2 border-white">
                    -66%
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 uppercase tracking-wide animate-pulse">
                      Acceso Inmediato
                    </div>
                    <h4 className="text-2xl font-bold mb-2 leading-tight">Empieza a crear hoy mismo</h4>
                    <p className="text-neutral-200 text-sm">Únete a más de 6,500 alumnas que ya están generando ingresos con este método exacto.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stack Details */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] shadow-2xl border border-neutral-100 overflow-hidden">
                <div className="bg-neutral-900 p-8 text-white">
                  <div className="inline-block bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Oferta Especial
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    Libro Digital: Obras de Arte con Resina Epóxica
                  </h3>
                  <p className="text-neutral-400">
                    + Paquete completo de bonos aceleradores
                  </p>
                </div>
                
                <div className="p-8 md:p-10">
                  <CountdownTimer />
                  
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Libro Digital Principal <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $47)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Toda la teoría, tiempos de secado, lijas a usar y el porqué de cada paso. Aprenderás a dominar las mezclas de manera correcta, eliminar fácilmente las burbujas y lograr acabados perfectos para evitar que la resina se opaque, se raye o se ponga amarilla con el tiempo.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 1: Lista de Proveedores por País <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $25)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Directorio por país para comprar materiales al mejor precio en tu ciudad.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 2: Moldes Caseros de Silicona <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $21)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Elaborá tus propios moldes en casa y ahorrá dinero.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 3: Lámparas con Resina <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $21)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Creá hermosas lámparas paso a paso.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 4: Checklist + Plantilla de Precios <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $36)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">No te olvidés ningún paso y calculá tu precio de venta en menos de 5 minutos.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 5: El Arte de Vender + Membresía VIP <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $36)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Estrategias de venta probadas y actualizaciones mes a mes sin costo adicional.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-neutral-900">Bono 6: Certificado de Finalización <span className="text-neutral-400 font-normal text-sm line-through ml-2">(Valor $18)</span></p>
                        <p className="text-neutral-600 text-sm mt-1">Recibí tu certificado como aplicador profesional de Resina al completar el programa.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-amber-50 p-8 rounded-3xl border-2 border-amber-200 text-center mb-8 relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-amber-100">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide animate-pulse">
                        <Zap className="w-3 h-3" /> Más del 66% de descuento
                      </div>
                      <p className="text-neutral-500 mb-2 font-medium">Valor Total del Paquete: <span className="line-through decoration-amber-400 decoration-2">$132.00 dólares</span></p>
                      <p className="text-neutral-900 font-bold mb-4 text-lg">Precio especial HOY:</p>
                      
                      <div className="flex justify-center items-baseline gap-2 mb-2">
                        <div className="text-7xl font-black text-amber-500 tracking-tighter drop-shadow-sm">
                          $6
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-2xl text-amber-500 font-black leading-none">.97</span>
                          <span className="text-sm text-neutral-500 font-bold">USD</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-amber-600 font-bold flex items-center justify-center gap-2 mt-4 bg-amber-100/50 py-2 rounded-lg">
                        <Clock className="w-4 h-4 animate-pulse" /> ¡Esta oferta expira pronto!
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 text-xl font-black py-6 px-8 rounded-2xl transition-all transform hover:scale-[1.02] shadow-2xl hover:shadow-amber-500/40 flex items-center justify-center gap-3">
                    QUIERO EL LIBRO CON TODOS LOS BONOS
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-neutral-600">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Pago 100% Seguro. Garantía de 7 Días.</span>
                  </div>
                </div>
              </div>
            </div>
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
                  Profesional con <strong>más de 10 años de experiencia</strong>, trabaja con resina desde niña junto a su padre y abuelo.
                </p>
                <p>
                  En los últimos 4 años ha capacitado a <strong>más de 6.500 personas</strong> en Argentina, Chile, Paraguay y Uruguay, ayudándolas a transformar su pasión en un negocio rentable.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="Alumna" /></div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="Alumna" /></div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="Alumna" /></div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-800 flex items-center justify-center text-white text-xs font-bold">+6k</div>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">Alumnos formados con éxito</p>
                </div>
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
              <p className="text-neutral-300 leading-relaxed">¡Absolutamente no! El libro está diseñado desde cero, paso a paso. Te explicamos desde qué materiales comprar hasta cómo hacer tu primera mezcla con éxito, ideal para principiantes.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Es un libro físico o digital?</h4>
              <p className="text-neutral-300 leading-relaxed">Es un producto 100% DIGITAL (E-book en formato PDF). Esto te permite acceder INMEDIATAMENTE después de tu compra, sin esperar envíos, y puedes leerlo desde tu celular, tablet o computadora.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Qué pasa si tengo dudas durante el proceso?</h4>
              <p className="text-neutral-300 leading-relaxed">No estarás sola. Con tu compra hoy, obtienes acceso a nuestra Membresía VIP, donde podrás resolver todas tus dudas y recibir soporte continuo de nuestra comunidad.</p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Dónde puedo comprar la resina en mi ciudad?</h4>
              <p className="text-neutral-300 leading-relaxed">No te preocupes por eso. En el Bono #3 (Lista de Proveedores) te entregamos un directorio detallado por país para que sepas exactamente dónde comprar resina y materiales al mejor precio.</p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Es seguro comprar en este sitio web?</h4>
              <p className="text-neutral-300 leading-relaxed">Sí, 100% seguro. El pago se procesa a través de Hotmart, la plataforma de educación digital más grande y segura de Latinoamérica. Nosotros no tenemos acceso a tus datos financieros.</p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
              <h4 className="text-lg font-bold mb-3 text-rose-400">¿Puedo comprar si soy de otro país?</h4>
              <p className="text-neutral-300 leading-relaxed">¡Claro que sí! Al hacer clic en el botón de compra, la plataforma adaptará automáticamente el precio a la moneda local de tu país y te mostrará los métodos de pago disponibles.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-black text-neutral-500 py-10 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc.</p>
          <p>© {new Date().getFullYear()} Obras de Arte con Resina. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}


import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageHero from '../components/PageHero'

// Import images
import heroImg from '../assets/interni/interni-3.webp'
import interni1 from '../assets/interni/interni-1.webp'
import interni2 from '../assets/interni/interni-2.webp'
import interni7 from '../assets/interni/interni-7.webp'
import esterni3 from '../assets/esterni/esterni-3.webp'
import esterni5 from '../assets/esterni/esterni-5.webp'

export default function Crotto() {
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <div className="grain bg-dark">
      <PageHero
        title="Il Crotto"
        subtitle="Una cavità naturale nella roccia, un tesoro della tradizione valchiavennasca."
        eyebrow="La tradizione"
        image={heroImg}
      />

      {/* What is a Crotto */}
      <section className="py-32 lg:py-48 bg-dark relative overflow-hidden">
        <div className="number-marker -left-10 top-20 text-cream/5">01</div>

        <div className="container-wide">
          <div className="grid-asymmetric items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-eyebrow text-gold mb-8">Cos'è un Crotto?</p>
              <h2 className="text-display text-cream mb-10">
                Una cavità<br />
                <span className="italic text-cream/60">naturale</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />

              <div className="space-y-6 text-body-lg text-cream/50">
                <p>
                  Il <strong className="text-cream">crotto</strong> è una costruzione tipica delle Alpi lombarde.
                  Si tratta di una cavità naturale nella roccia da cui fuoriesce un soffio costante
                  di aria fresca chiamato <em className="text-gold">"sorel"</em>.
                </p>
                <p>
                  Questa corrente d'aria, che mantiene una temperatura costante tra i 4 e gli 8 gradi
                  tutto l'anno, ha reso i crotti luoghi ideali per la conservazione dei cibi molto prima
                  dell'invenzione del frigorifero.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="img-cinematic aspect-[4/5]">
                <img src={interni1} alt="Le botti nella cantina del crotto" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-12 -left-12 w-2/3 aspect-square hidden lg:block"
              >
                <div className="img-cinematic h-full">
                  <img src={interni7} alt="Dettaglio" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History - Full width with parallax */}
      <section ref={parallaxRef} className="relative min-h-screen bg-black overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={esterni5} alt="Valchiavenna" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex items-center py-32">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-eyebrow text-gold mb-8">La storia</p>
                <h2 className="text-display text-cream mb-10">
                  I Crotti della<br />
                  <span className="italic text-cream/60">Valchiavenna</span>
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />

                <div className="space-y-6 text-body-lg text-cream/50 leading-relaxed">
                  <p>
                    La tradizione dei crotti in Valchiavenna risale a secoli fa. Le rocce della
                    zona, fratturate da antichi movimenti geologici, permettono all'aria di circolare
                    creando microclimi perfetti per la conservazione.
                  </p>
                  <p>
                    Ogni crotto ha la sua storia, le sue ricette, i suoi segreti tramandati di
                    generazione in generazione.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-warm/80 backdrop-blur-sm p-10 lg:p-14"
              >
                <h3 className="text-title text-cream mb-10">Il Crotto Belvedere</h3>
                <div className="space-y-8">
                  {[
                    { label: 'Dal 1961', desc: 'Oltre sessant\'anni di tradizione' },
                    { label: 'Prosto di Piuro', desc: 'Nel cuore della Valchiavenna' },
                    { label: 'Ambiente Naturale', desc: 'Circondato dalle Alpi e dal fiume Mera' },
                    { label: 'Passione di Famiglia', desc: 'Gestione familiare con amore' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 border-b border-cream/10 pb-6">
                      <span className="text-gold text-eyebrow">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="text-cream font-serif text-xl">{item.label}</p>
                        <p className="text-cream/50 font-light text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-dark">
        <div className="grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="img-cinematic aspect-square md:aspect-auto"
          >
            <img src={interni2} alt="Interno del crotto" className="w-full h-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="img-cinematic aspect-square md:aspect-auto"
          >
            <img src={esterni3} alt="Esterno del crotto" className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-32 lg:py-48 bg-warm">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-eyebrow text-gold mb-6">L'esperienza</p>
            <h2 className="text-display text-cream mb-10">
              Più di un<br />
              <span className="italic text-cream/60">ristorante</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16" />

            <p className="text-body-lg text-cream/50 leading-relaxed mb-20 max-w-2xl mx-auto">
              Venire al Crotto Belvedere significa vivere un'esperienza completa:
              non solo gustare piatti eccellenti, ma immergersi nella cultura
              e nelle tradizioni di un territorio unico.
            </p>

            <div className="grid sm:grid-cols-3 gap-12 lg:gap-20">
              {[
                { value: '60+', label: 'Anni di storia' },
                { value: '100%', label: 'Tradizione locale' },
                { value: '∞', label: 'Passione' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-serif text-6xl lg:text-7xl text-gold mb-4 font-light">{stat.value}</p>
                  <p className="text-cream/40 text-eyebrow">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-48 bg-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-display text-cream mb-8">
              Vieni a scoprire<br />
              <span className="italic text-cream/60">il crotto</span>
            </h2>
            <p className="text-body-lg text-cream/50 mb-12 max-w-lg mx-auto">
              Ti aspettiamo per farti vivere l'atmosfera unica
              e per farti assaporare i piatti della nostra tradizione.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/cucina" className="btn-solid">
                Scopri la cucina
              </Link>
              <Link to="/contatti" className="btn-outline">
                Contattaci
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

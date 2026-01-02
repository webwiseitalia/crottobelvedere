import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

// Import images
import heroImg from '../assets/interni/interni-3.webp'
import interni1 from '../assets/interni/interni-1.webp'
import interni2 from '../assets/interni/interni-2.webp'
import esterni3 from '../assets/esterni/esterni-3.webp'

export default function Crotto() {
  return (
    <>
      <PageHero
        title="Il Crotto"
        subtitle="La tradizione"
        image={heroImg}
      />

      {/* What is a Crotto */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">Cos'è un Crotto?</p>
              <h2 className="heading-lg text-stone mb-6">
                Una cavità naturale, un tesoro della tradizione
              </h2>
              <div className="divider mb-8" />

              <div className="space-y-6 text-body-lg text-stone/70">
                <p>
                  Il <strong className="text-stone">crotto</strong> è una costruzione tipica delle Alpi lombarde,
                  in particolare della Valchiavenna e della Valtellina. Si tratta di una cavità naturale
                  nella roccia, o di un ambiente costruito addossato alla montagna, da cui fuoriesce
                  un soffio costante di aria fresca chiamato <em>"sorel"</em>.
                </p>
                <p>
                  Questa corrente d'aria naturale, che mantiene una temperatura costante tra i 4 e gli 8 gradi
                  tutto l'anno, ha reso i crotti luoghi ideali per la conservazione dei cibi molto prima
                  dell'invenzione del frigorifero.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={interni1}
                alt="Le botti nella cantina del crotto"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">La storia</p>
              <h2 className="heading-lg text-stone mb-6">
                I Crotti della Valchiavenna
              </h2>
              <div className="divider mb-8" />

              <div className="space-y-6 text-body-lg text-stone/70 leading-relaxed">
                <p>
                  La tradizione dei crotti in Valchiavenna risale a secoli fa, quando le comunità
                  locali scoprirono le proprietà uniche di queste cavità naturali. Le rocce della
                  zona, fratturate da antichi movimenti geologici, permettono all'aria di circolare
                  creando microclimi perfetti per la conservazione degli alimenti.
                </p>
                <p>
                  Ogni crotto ha la sua storia, le sue ricette, i suoi segreti tramandati di
                  generazione in generazione. Il Crotto Belvedere custodisce questa eredità
                  da oltre sessant'anni, offrendo ai suoi ospiti un'esperienza autentica
                  che affonda le radici nella cultura locale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 lg:p-12"
            >
              <h3 className="heading-md text-stone mb-8">
                Il Crotto Belvedere
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Dal 1961', desc: 'Oltre sessant\'anni di tradizione e ospitalità' },
                  { label: 'Prosto di Piuro', desc: 'Nel cuore della Valchiavenna' },
                  { label: 'Ambiente Naturale', desc: 'Circondato dalle Alpi e dal fiume Mera' },
                  { label: 'Passione di Famiglia', desc: 'Gestione familiare con amore per la tradizione' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-stone text-cream flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-stone">{item.label}</p>
                      <p className="text-small text-stone/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-stone">
        <div className="grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={interni2}
              alt="Interno del crotto"
              className="w-full h-full aspect-square md:aspect-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={esterni3}
              alt="Esterno del crotto"
              className="w-full h-full aspect-square md:aspect-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-stone text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">L'esperienza</p>
              <h2 className="heading-lg mb-6">Più di un ristorante</h2>
              <div className="divider mx-auto mb-10" />

              <p className="text-body-lg text-white/70 leading-relaxed mb-16">
                Venire al Crotto Belvedere significa vivere un'esperienza completa:
                non solo gustare piatti eccellenti, ma immergersi nella cultura
                e nelle tradizioni di un territorio unico.
              </p>

              <div className="grid sm:grid-cols-3 gap-12">
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
                    <p className="font-serif text-5xl text-gold mb-2">{stat.value}</p>
                    <p className="text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-stone mb-6">
                Vieni a scoprire il crotto
              </h2>
              <p className="text-body-lg text-stone/70 mb-10">
                Ti aspettiamo per farti vivere l'atmosfera unica del nostro crotto
                e per farti assaporare i piatti della nostra tradizione.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cucina" className="btn-primary">
                  Scopri la cucina
                </Link>
                <Link to="/contatti" className="btn-secondary">
                  Contattaci
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

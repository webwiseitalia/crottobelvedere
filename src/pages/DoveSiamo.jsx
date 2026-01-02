import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

import heroImg from '../assets/esterni/esterni-1.webp'

export default function DoveSiamo() {
  const directions = [
    { from: 'Da Milano', description: 'Autostrada A9 direzione Como-Chiasso, poi superstrada SS36 fino a Chiavenna.', time: 'Circa 1 ora e 30 minuti' },
    { from: 'Da Como', description: 'Superstrada SS36 direzione Colico-Chiavenna. Proseguire fino a Chiavenna.', time: 'Circa 1 ora' },
    { from: 'Dalla Svizzera', description: 'Dal Passo del Maloja o Spluga scendere verso Chiavenna.', time: 'Variabile' },
    { from: 'Da Sondrio', description: 'SS38 direzione Colico, poi SS36 verso Chiavenna.', time: 'Circa 50 minuti' }
  ]

  const nearbyAttractions = [
    { name: 'Chiavenna', distance: '2 km', desc: 'Centro medievale, crotti e Marmitte dei Giganti' },
    { name: 'Palazzo Vertemate Franchi', distance: '500 m', desc: 'Gioiello rinascimentale con affreschi e giardini' },
    { name: 'Cascate dell\'Acquafraggia', distance: '3 km', desc: 'Spettacolari cascate di oltre 100 metri' },
    { name: 'Val Bregaglia', distance: '5 km', desc: 'Valle che sale verso la Svizzera' },
    { name: 'Lago di Como', distance: '25 km', desc: 'La punta nord del lago a Colico' },
    { name: 'Passo dello Spluga', distance: '30 km', desc: 'Valico alpino con panorami mozzafiato' },
  ]

  return (
    <>
      <PageHero title="Dove Siamo" subtitle="Raggiungici" image={heroImg} />

      {/* Address */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">La nostra posizione</p>
              <h2 className="heading-lg text-stone mb-6">Il nostro indirizzo</h2>
              <div className="divider mb-8" />

              <div className="bg-white p-10 mb-6">
                <div className="flex items-start gap-5">
                  <span className="w-12 h-12 bg-stone text-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="heading-sm text-stone mb-3">Crotto Belvedere</h3>
                    <p className="text-stone/70 text-body-lg">
                      Via alla Chiesa, 6<br />
                      23020 Prosto di Piuro (SO)<br />
                      Italia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone text-white p-10">
                <h3 className="heading-sm mb-6">Coordinate GPS</h3>
                <p className="text-white/60 mb-6">Per i navigatori satellitari:</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-terracotta text-small mb-1">Latitudine</span>
                    <span className="font-mono">46.3297° N</span>
                  </div>
                  <div>
                    <span className="block text-terracotta text-small mb-1">Longitudine</span>
                    <span className="font-mono">9.4197° E</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cream-dark aspect-square flex items-center justify-center"
            >
              <div className="text-center p-8">
                <p className="font-serif text-6xl text-stone/10 mb-4">🗺</p>
                <p className="text-stone/40">
                  Mappa interattiva<br />
                  <span className="text-small">(In fase di implementazione)</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Come arrivare</p>
            <h2 className="heading-lg text-stone">Indicazioni stradali</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-stone text-cream rounded-full flex items-center justify-center font-serif">
                    {index + 1}
                  </span>
                  <h3 className="heading-sm text-stone">{direction.from}</h3>
                </div>
                <p className="text-stone/70 mb-4">{direction.description}</p>
                <span className="inline-flex items-center gap-2 text-small text-stone/50">
                  ⏱ {direction.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Cosa vedere</p>
            <h2 className="heading-lg text-stone">Nei dintorni</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="heading-sm text-stone">{attraction.name}</h3>
                  <span className="text-label text-terracotta">{attraction.distance}</span>
                </div>
                <p className="text-small text-stone/60">{attraction.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-wine text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Ti aspettiamo</h2>
              <p className="text-body-lg text-white/70 mb-10">
                Raggiungici al Crotto Belvedere e vivi un'esperienza gastronomica nel cuore della Valchiavenna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+390343335889" className="btn-primary bg-white text-wine hover:bg-cream">
                  Prenota ora
                </a>
                <Link to="/contatti" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-wine">
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

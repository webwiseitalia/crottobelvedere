import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

import heroImg from '../assets/interni/interni-2.webp'
import interni4 from '../assets/interni/interni-4.webp'
import interni5 from '../assets/interni/interni-5.webp'
import interni6 from '../assets/interni/interni-6.webp'

export default function TreSale() {
  const rooms = [
    {
      name: 'Sala Principale',
      capacity: '40 posti',
      description: 'La sala più grande, con camino e vista sul giardino. Perfetta per gruppi e occasioni speciali.',
      features: ['Camino funzionante', 'Vista sul giardino', 'Ideale per gruppi'],
      img: interni4
    },
    {
      name: 'Sala Intima',
      capacity: '20 posti',
      description: 'Ambiente raccolto e riservato, ideale per cene romantiche o piccoli gruppi.',
      features: ['Atmosfera riservata', 'Muri in pietra', 'Illuminazione soffusa'],
      img: interni5
    },
    {
      name: 'Sala del Crotto',
      capacity: '25 posti',
      description: 'Il cuore storico del locale, dove si respira l\'aria fresca del sorel.',
      features: ['Il vero crotto', 'Temperatura naturale', 'Esperienza unica'],
      img: interni6
    }
  ]

  return (
    <>
      <PageHero title="Gli Spazi" subtitle="Le tre sale" image={heroImg} />

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">I nostri ambienti</p>
              <h2 className="heading-lg text-stone mb-6">Tre sale, tre atmosfere</h2>
              <div className="divider mx-auto mb-8" />
              <p className="text-body-lg text-stone/70">
                Il Crotto Belvedere offre tre ambienti interni distinti, ognuno con la propria
                personalità. Dalle sale con muri in pietra all'autentico crotto,
                ogni spazio racconta una storia diversa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="space-y-24">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-label text-terracotta mb-4 block">0{index + 1}</span>
                  <h3 className="heading-lg text-stone mb-2">{room.name}</h3>
                  <p className="text-body text-stone/50 mb-6">{room.capacity}</p>
                  <p className="text-body-lg text-stone/70 mb-8">{room.description}</p>
                  <ul className="space-y-3">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone/70">
                        <span className="text-terracotta">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-stone text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Caratteristiche</p>
            <h2 className="heading-lg">Ogni dettaglio conta</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Muri in Pietra', desc: 'Pareti originali che raccontano secoli di storia' },
              { title: 'Illuminazione Calda', desc: 'Luci soffuse per un\'atmosfera accogliente' },
              { title: 'Camini', desc: 'Calore autentico nelle serate più fredde' },
              { title: 'Aria del Crotto', desc: 'Il sorel che rinfresca naturalmente l\'ambiente' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-label text-gold mb-4 block">0{i + 1}</span>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Spaces */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Altri spazi</p>
            <h2 className="heading-lg text-stone">All'aperto</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/terrazzo" className="block bg-white p-10 hover:shadow-lg transition-all group">
                <h3 className="heading-md text-stone mb-3 group-hover:text-terracotta transition-colors">
                  Il Terrazzo
                </h3>
                <p className="text-stone/60 mb-4">
                  Spazio coperto all'aperto, perfetto per pranzi in ogni stagione.
                </p>
                <span className="btn-ghost">
                  Scopri di più <span className="ml-2">→</span>
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/giardino" className="block bg-white p-10 hover:shadow-lg transition-all group">
                <h3 className="heading-md text-stone mb-3 group-hover:text-terracotta transition-colors">
                  Il Giardino
                </h3>
                <p className="text-stone/60 mb-4">
                  80 posti sulle rive del fiume Mera per l'estate.
                </p>
                <span className="btn-ghost">
                  Scopri di più <span className="ml-2">→</span>
                </span>
              </Link>
            </motion.div>
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
              <h2 className="heading-lg mb-6">Prenota il tuo tavolo</h2>
              <p className="text-body-lg text-white/70 mb-10">
                Scegli l'ambiente che preferisci per la tua prossima visita al Crotto Belvedere.
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

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

import heroImg from '../assets/esterni/esterni-1.webp'
import esterni2 from '../assets/esterni/esterni-2.webp'

export default function StayPiuro() {
  const experiences = [
    { title: 'Natura e Trekking', desc: 'Sentieri per tutti i livelli tra boschi e vette' },
    { title: 'Arte e Cultura', desc: 'Palazzo Vertemate Franchi, chiese storiche, borghi antichi' },
    { title: 'Enogastronomia', desc: 'Crotti, ristoranti tipici, cantine della Valtellina' },
    { title: 'Sport all\'Aria Aperta', desc: 'Arrampicata, mountain bike, sci nelle stazioni vicine' },
  ]

  const attractions = [
    { name: 'Palazzo Vertemate Franchi', location: 'Prosto di Piuro', description: 'Villa rinascimentale del XVI secolo con affreschi, stucchi e giardini.', highlight: 'A 500 metri' },
    { name: 'Marmitte dei Giganti', location: 'Chiavenna', description: 'Formazioni rocciose scavate dai ghiacciai, oggi parco naturale.', highlight: 'A 3 km' },
    { name: 'Cascate dell\'Acquafraggia', location: 'Borgonuovo', description: 'Due salti spettacolari per oltre 100 metri.', highlight: 'A 3 km' },
    { name: 'Centro Storico di Chiavenna', location: 'Chiavenna', description: 'Vie medievali, palazzi storici, crotti e botteghe artigiane.', highlight: 'A 2 km' }
  ]

  return (
    <>
      <PageHero title="StayPiuro" subtitle="Scopri il territorio" image={heroImg} />

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">Benvenuti</p>
              <h2 className="heading-lg text-stone mb-6">Benvenuti in Valchiavenna</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-body-lg text-stone/70">
                <p>
                  La Valchiavenna è molto più di una destinazione: è un'esperienza che coinvolge
                  tutti i sensi. Dalle cime innevate ai fondovalle verdeggianti, dai borghi
                  medievali ai crotti scavati nella roccia.
                </p>
                <p>
                  Il Crotto Belvedere è il punto di partenza ideale per scoprire
                  le meraviglie di questa valle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Cosa fare</p>
            <h2 className="heading-lg text-stone">Esperienze da vivere</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-8"
              >
                <span className="text-label text-terracotta mb-4 block">0{index + 1}</span>
                <h3 className="heading-sm text-stone mb-4">{exp.title}</h3>
                <p className="text-small text-stone/60">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Da non perdere</p>
            <h2 className="heading-lg text-stone">Le attrazioni principali</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-label text-terracotta">{attraction.location}</span>
                    <h3 className="heading-sm text-stone mt-1">{attraction.name}</h3>
                  </div>
                  <span className="text-label text-stone/40">{attraction.highlight}</span>
                </div>
                <p className="text-stone/60">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Valley */}
      <section className="section-padding bg-sage text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-white/50 mb-4">Il territorio</p>
              <h2 className="heading-lg mb-6">Una valle da scoprire</h2>
              <div className="divider mb-8" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }} />
              <div className="space-y-6 text-body-lg text-white/70 leading-relaxed">
                <p>
                  La Valchiavenna si estende dal Lago di Como ai passi alpini dello
                  Spluga e del Maloja. Terra di confine da sempre, ha sviluppato
                  una cultura unica che fonde tradizioni lombarde e alpine.
                </p>
                <p>
                  I crotti, cavità naturali nella roccia, sono il simbolo di questa
                  valle. Usati da secoli per conservare vino, formaggi e salumi.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { title: 'Stagioni', desc: 'Ogni stagione offre esperienze diverse: fiori primaverili, frescura estiva, colori autunnali, magia invernale.' },
                { title: 'Accessibilità', desc: 'A un\'ora e mezza da Milano, facilmente raggiungibile per un weekend.' },
                { title: 'Ospitalità', desc: 'Hotel, B&B, agriturismi. Scopri il nostro pacchetto Bed & Crotto.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-8">
                  <h3 className="heading-sm mb-3">{item.title}</h3>
                  <p className="text-white/70 text-small">{item.desc}</p>
                </div>
              ))}
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
              <h2 className="heading-lg mb-6">Inizia dal Crotto Belvedere</h2>
              <p className="text-body-lg text-white/70 mb-10">
                Il modo migliore per scoprire la Valchiavenna? Una cena al Crotto Belvedere,
                per assaporare i prodotti del territorio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/bed-and-crotto" className="btn-primary bg-white text-wine hover:bg-cream">
                  Pacchetto Bed & Crotto
                </Link>
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

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

import heroImg from '../assets/esterni/esterni-3.webp'

export default function BedAndCrotto() {
  const includes = [
    'Cena completa al Crotto Belvedere',
    'Pernottamento in struttura partner',
    'Prima colazione inclusa',
    'Posto auto riservato'
  ]

  const partners = [
    { name: 'Hotel Crimea', type: 'Hotel 3 stelle', distance: 'Chiavenna - 2 km' },
    { name: 'B&B La Casa di Piero', type: 'Bed & Breakfast', distance: 'Prosto - 500 m' },
    { name: 'Agriturismo Al Maso', type: 'Agriturismo', distance: 'Piuro - 1 km' },
  ]

  return (
    <>
      <PageHero title="Bed & Crotto" subtitle="Pacchetto speciale" image={heroImg} />

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">L'esperienza completa</p>
              <h2 className="heading-lg text-stone mb-6">Cena e pernottamento</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-body-lg text-stone/70">
                <p>
                  Bed & Crotto è il modo perfetto per vivere la Valchiavenna. Una cena completa
                  al Crotto Belvedere, seguita da una notte di riposo in una delle nostre
                  strutture partner.
                </p>
                <p>
                  Il pacchetto è pensato per chi vuole prendersi il tempo di gustare
                  i nostri piatti senza fretta, magari accompagnandoli con i vini della Valtellina.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-stone text-white p-10 lg:p-12"
            >
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="heading-md">Il pacchetto include</h3>
                <span className="text-label text-gold">Da 60€ / persona</span>
              </div>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="text-terracotta">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">La cena</p>
              <h2 className="heading-lg text-stone mb-6">Un menu dedicato</h2>
              <div className="divider mx-auto mb-8" />
              <p className="text-body-lg text-stone/70 mb-12">
                Il menu Bed & Crotto è studiato per farvi assaporare il meglio
                della nostra cucina tradizionale.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  { course: 'Antipasto', desc: 'Tagliere di salumi e formaggi valtellinesi' },
                  { course: 'Primo', desc: 'Pizzoccheri o polenta taragna a scelta' },
                  { course: 'Secondo', desc: 'Piatto di carne del giorno con contorno' },
                  { course: 'Dolce', desc: 'Bisciola o dolce della casa' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white p-8"
                  >
                    <span className="text-label text-terracotta mb-2 block">{item.course}</span>
                    <p className="text-stone/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-small text-stone/50 mt-8 italic">
                Acqua e un quartino di vino della casa inclusi
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Dove dormire</p>
            <h2 className="heading-lg text-stone">Le strutture partner</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <h3 className="heading-sm text-stone mb-2">{partner.name}</h3>
                <p className="text-terracotta text-small mb-1">{partner.type}</p>
                <p className="text-small text-stone/50">{partner.distance}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-stone/50 text-small mt-8">
            Altre strutture disponibili su richiesta
          </p>
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
              <h2 className="heading-lg mb-6">Prenota il tuo Bed & Crotto</h2>
              <p className="text-body-lg text-white/70 mb-10">
                Contattateci per prenotare il pacchetto e scegliere la struttura
                che preferite. Vi aspettiamo in Valchiavenna!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+390343335889" className="btn-primary bg-white text-wine hover:bg-cream">
                  Chiama per prenotare
                </a>
                <a href="mailto:info@crottobelvedere.com" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-wine">
                  Scrivi un'email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

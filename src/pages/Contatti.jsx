import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

export default function Contatti() {
  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Vieni a trovarci"
      />

      {/* Contact Info */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">Contattaci</p>
              <h2 className="heading-lg text-stone mb-6">
                Come contattarci
              </h2>
              <div className="divider mb-8" />
              <p className="text-body-lg text-stone/70 mb-10">
                Per prenotazioni e informazioni, potete contattarci telefonicamente
                o via email. Saremo lieti di rispondere a ogni vostra domanda.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+390343335889"
                  className="flex items-start gap-5 p-6 bg-white hover:shadow-lg transition-all group"
                >
                  <span className="w-12 h-12 bg-stone text-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-small text-stone/50 mb-1">Telefono Fisso</span>
                    <span className="block text-xl font-serif text-stone">+39 0343 33589</span>
                    <span className="block text-small text-stone/50 mt-1">Per prenotazioni e informazioni</span>
                  </div>
                </a>

                {/* Mobile */}
                <a
                  href="tel:+393477092022"
                  className="flex items-start gap-5 p-6 bg-white hover:shadow-lg transition-all group"
                >
                  <span className="w-12 h-12 bg-stone text-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-small text-stone/50 mb-1">Cellulare (Marco)</span>
                    <span className="block text-xl font-serif text-stone">+39 347 7092022</span>
                    <span className="block text-small text-stone/50 mt-1">Per contatti diretti</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@crottobelvedere.com"
                  className="flex items-start gap-5 p-6 bg-white hover:shadow-lg transition-all group"
                >
                  <span className="w-12 h-12 bg-stone text-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-small text-stone/50 mb-1">Email</span>
                    <span className="block text-xl font-serif text-stone">info@crottobelvedere.com</span>
                    <span className="block text-small text-stone/50 mt-1">Rispondiamo entro 24 ore</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Reservation Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-stone text-white p-10 mb-6">
                <h3 className="heading-md mb-6">Prenotazioni</h3>
                <p className="text-white/70 mb-8">
                  Vi consigliamo di prenotare, soprattutto nei weekend e durante le festività.
                  Per gruppi numerosi, la prenotazione è obbligatoria.
                </p>
                <ul className="space-y-4 text-white/80">
                  {[
                    'Prenotazione consigliata per pranzo e cena',
                    'Obbligatoria per gruppi oltre 8 persone',
                    'Menu personalizzabili su richiesta',
                    'Possibilità di sala privata per eventi'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-terracotta mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-10">
                <h3 className="heading-sm text-stone mb-4">Indirizzo</h3>
                <p className="text-stone/70 mb-6">
                  <strong className="text-stone">Crotto Belvedere</strong><br />
                  Via alla Chiesa, 6<br />
                  23020 Prosto di Piuro (SO)<br />
                  Italia
                </p>
                <Link
                  to="/dove-siamo"
                  className="btn-ghost"
                >
                  Come raggiungerci
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">Eventi speciali</p>
              <h2 className="heading-lg text-stone mb-6">Festività ed eventi</h2>
              <div className="divider mx-auto mb-10" />
              <p className="text-body-lg text-stone/70 mb-16">
                Il Crotto Belvedere è il luogo ideale per celebrare le occasioni speciali:
                pranzi di Natale, cenoni di Capodanno, compleanni e anniversari.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: 'Natale', desc: 'Pranzi e cene delle feste' },
                  { title: 'Capodanno', desc: 'Cenone di San Silvestro' },
                  { title: 'Eventi Privati', desc: 'Compleanni e ricorrenze' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-8 bg-white"
                  >
                    <span className="text-label text-terracotta mb-3 block">0{i + 1}</span>
                    <h3 className="heading-sm text-stone mb-2">{item.title}</h3>
                    <p className="text-small text-stone/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10"
            >
              <h3 className="heading-sm text-stone mb-8">Dati aziendali</h3>
              <div className="grid sm:grid-cols-2 gap-8 text-body text-stone/70">
                <div>
                  <span className="block text-stone font-medium mb-1">Ragione Sociale</span>
                  Belvedere S.R.L.
                </div>
                <div>
                  <span className="block text-stone font-medium mb-1">Partita IVA / C.F.</span>
                  00730640141
                </div>
                <div>
                  <span className="block text-stone font-medium mb-1">REA</span>
                  SO – 55715
                </div>
                <div>
                  <span className="block text-stone font-medium mb-1">Sede Legale</span>
                  Via Nazionale 10, 23020 Piuro (SO)
                </div>
              </div>
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
              <h2 className="heading-lg mb-6">Prenota ora</h2>
              <p className="text-body-lg text-white/70 mb-10">
                Ti aspettiamo al Crotto Belvedere per farti vivere
                un'esperienza gastronomica indimenticabile.
              </p>
              <a
                href="tel:+390343335889"
                className="btn-primary bg-white text-wine hover:bg-cream"
              >
                Chiama +39 0343 33589
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

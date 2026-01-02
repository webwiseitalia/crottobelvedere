import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import esterni2 from '../assets/esterni/esterni-2.webp'

export default function Contatti() {
  return (
    <div className="grain bg-dark">
      {/* Hero - Minimal */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={esterni2} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />
        </div>

        <div className="container-wide relative z-10 pb-16 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-eyebrow text-gold mb-6"
          >
            Vieni a trovarci
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-hero text-cream"
            >
              Contatti
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 w-24 h-px bg-gradient-to-r from-gold to-transparent origin-left"
          />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 lg:py-48 bg-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-eyebrow text-gold mb-8">Contattaci</p>
              <h2 className="text-display text-cream mb-10">
                Come<br />
                <span className="italic text-cream/60">raggiungerci</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-12" />

              <div className="space-y-8">
                {/* Phone */}
                <a
                  href="tel:+390343335889"
                  className="group flex items-start gap-6 p-8 bg-warm/50 hover:bg-warm transition-colors"
                >
                  <span className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-dark transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-eyebrow text-cream/40 mb-2">Telefono</span>
                    <span className="block text-2xl font-serif text-cream group-hover:text-gold transition-colors">
                      +39 0343 33589
                    </span>
                    <span className="block text-cream/40 text-sm mt-2">Per prenotazioni</span>
                  </div>
                </a>

                {/* Mobile */}
                <a
                  href="tel:+393477092022"
                  className="group flex items-start gap-6 p-8 bg-warm/50 hover:bg-warm transition-colors"
                >
                  <span className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-dark transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-eyebrow text-cream/40 mb-2">Cellulare</span>
                    <span className="block text-2xl font-serif text-cream group-hover:text-gold transition-colors">
                      +39 347 7092022
                    </span>
                    <span className="block text-cream/40 text-sm mt-2">Contatto diretto</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@crottobelvedere.com"
                  className="group flex items-start gap-6 p-8 bg-warm/50 hover:bg-warm transition-colors"
                >
                  <span className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-dark transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-eyebrow text-cream/40 mb-2">Email</span>
                    <span className="block text-2xl font-serif text-cream group-hover:text-gold transition-colors">
                      info@crottobelvedere.com
                    </span>
                    <span className="block text-cream/40 text-sm mt-2">Rispondiamo in 24 ore</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-rust p-10 lg:p-14"
              >
                <h3 className="text-title text-white mb-8">Prenotazioni</h3>
                <p className="text-white/70 mb-8 text-lg font-light leading-relaxed">
                  Vi consigliamo di prenotare, soprattutto nei weekend e durante le festività.
                </p>
                <ul className="space-y-4 text-white/80">
                  {[
                    'Consigliata per pranzo e cena',
                    'Obbligatoria per gruppi oltre 8 persone',
                    'Menu personalizzabili su richiesta',
                    'Sala privata per eventi'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-white/40 text-eyebrow">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-warm p-10 lg:p-14"
              >
                <h3 className="text-title text-cream mb-6">Dove siamo</h3>
                <p className="text-cream/60 text-lg font-light mb-8">
                  <strong className="text-cream">Crotto Belvedere</strong><br />
                  Via alla Chiesa, 6<br />
                  23020 Prosto di Piuro (SO)
                </p>
                <Link to="/dove-siamo" className="btn-line text-cream">
                  Come raggiungerci
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-32 bg-black">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-eyebrow text-gold mb-6">Eventi speciali</p>
            <h2 className="text-display text-cream mb-16">
              Festività ed<br />
              <span className="italic text-cream/60">eventi</span>
            </h2>

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
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-10 bg-warm/50 text-left"
                >
                  <span className="text-eyebrow text-gold mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-title text-cream mb-2">{item.title}</h3>
                  <p className="text-cream/50 font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20 bg-dark border-t border-cream/5">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-cream/40"
          >
            <div>
              <span className="text-eyebrow text-cream/20 mb-2 block">Ragione Sociale</span>
              <p className="text-cream/60">Belvedere S.R.L.</p>
            </div>
            <div>
              <span className="text-eyebrow text-cream/20 mb-2 block">Partita IVA</span>
              <p className="text-cream/60">00730640141</p>
            </div>
            <div>
              <span className="text-eyebrow text-cream/20 mb-2 block">REA</span>
              <p className="text-cream/60">SO – 55715</p>
            </div>
            <div>
              <span className="text-eyebrow text-cream/20 mb-2 block">Sede Legale</span>
              <p className="text-cream/60">Via Nazionale 10, 23020 Piuro (SO)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-48 bg-gold">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-display text-dark mb-8">
              Prenota<br />
              <span className="italic">ora</span>
            </h2>
            <p className="text-body-lg text-dark/60 mb-12 max-w-lg mx-auto">
              Ti aspettiamo al Crotto Belvedere per un'esperienza gastronomica indimenticabile.
            </p>
            <a
              href="tel:+390343335889"
              className="btn-solid bg-dark text-cream hover:bg-warm"
            >
              Chiama +39 0343 33589
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Import images
import heroImg from '../assets/esterni/esterni-3.webp'
import cibo1 from '../assets/cibo/cibo-1.webp'
import cibo5 from '../assets/cibo/cibo-5.webp'
import cibo2 from '../assets/cibo/cibo-2.webp'
import interni1 from '../assets/interni/interni-1.webp'
import interni3 from '../assets/interni/interni-3.webp'
import esterni1 from '../assets/esterni/esterni-1.webp'
import esterni5 from '../assets/esterni/esterni-5.webp'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Crotto Belvedere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone/40 via-stone/20 to-stone/70" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-label text-white/70 mb-6"
          >
            Dal 1961 · Prosto di Piuro
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="heading-hero text-white mb-6"
          >
            Crotto<br />
            <span className="italic font-normal">Belvedere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-2xl md:text-3xl text-white/80 italic mb-10"
          >
            "Vi prende per la gola!"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/cucina" className="btn-primary bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-stone">
              Scopri il menu
            </Link>
            <a href="tel:+390343335889" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-stone">
              Prenota ora
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-transparent to-white/60"
          />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label text-terracotta mb-6"
            >
              Il nostro crotto
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-xl text-stone mb-8"
            >
              Un luogo dove il tempo sembra essersi fermato
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="divider mx-auto mb-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-lg text-stone/70 leading-relaxed mb-10"
            >
              Situato a Prosto di Piuro, il Crotto Belvedere custodisce i segreti
              della tradizione gastronomica locale da oltre sessant'anni.
              Tra antiche mura in pietra e l'aria fresca che sale dalla roccia,
              vi accogliamo con i piatti autentici della cucina valtellinese.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/crotto" className="btn-ghost">
                Scopri la storia del crotto
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-cream-dark">
        <div className="container-custom py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[cibo1, interni1, cibo5, esterni1].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                num: '01',
                title: 'La Cucina',
                desc: 'Pizzoccheri, sciatt, polenta taragna. Ricette tramandate di generazione in generazione con ingredienti del territorio.',
                path: '/cucina',
                img: cibo2
              },
              {
                num: '02',
                title: 'La Cantina',
                desc: 'Vini della Valtellina DOC. Sforzato, Sassella, Inferno per accompagnare ogni piatto con il giusto abbinamento.',
                path: '/cantina',
                img: interni3
              },
              {
                num: '03',
                title: 'Gli Spazi',
                desc: 'Tre sale interne, terrazzo coperto e giardino estivo sulle rive del fiume Mera per ogni occasione.',
                path: '/tre-sale',
                img: esterni5
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to={item.path} className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-label text-terracotta mb-3">{item.num}</p>
                  <h3 className="heading-md text-stone mb-4 group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body text-stone/60 mb-4">{item.desc}</p>
                  <span className="btn-ghost">
                    Scopri di più
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-stone text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-8">
                "Dove la montagna incontra la tavola, e ogni piatto racconta una storia"
              </p>
              <div className="divider mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #c17f59, #b8976a)' }} />
              <p className="text-white/50 text-label">
                Crotto Belvedere, dal 1961
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-6">I nostri prodotti</p>
              <h2 className="heading-lg text-stone mb-8">
                Sapori autentici della Valtellina
              </h2>
              <div className="divider mb-8" />
              <p className="text-body-lg text-stone/70 leading-relaxed mb-8">
                Dalla bresaola al bitto, dai pizzoccheri alla bisciola.
                Ogni prodotto racconta la storia del nostro territorio.
                Materie prime selezionate, ricette tradizionali e l'amore
                per la qualità che ci contraddistingue dal 1961.
              </p>
              <Link to="/prodotti" className="btn-primary">
                Scopri i prodotti
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { name: 'Pizzoccheri', cat: 'Primo piatto' },
                { name: 'Sciatt', cat: 'Antipasto' },
                { name: 'Bresaola', cat: 'Salume' },
                { name: 'Bitto DOP', cat: 'Formaggio' },
                { name: 'Polenta Taragna', cat: 'Primo piatto' },
                { name: 'Bisciola', cat: 'Dolce' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-xs text-terracotta uppercase tracking-wider mb-2">{item.cat}</p>
                  <p className="font-serif text-xl text-stone">{item.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bed & Crotto */}
      <section className="section-padding bg-wine text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-white/50 mb-6">Pacchetto speciale</p>
              <h2 className="heading-lg mb-8">Bed & Crotto</h2>
              <div className="divider mx-auto mb-8" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }} />
              <p className="text-body-lg text-white/80 leading-relaxed mb-4">
                Cena al crotto e pernottamento nelle strutture partner.
              </p>
              <p className="text-white/60 mb-10">
                L'esperienza completa della Valchiavenna, a partire da 60€ a persona.
              </p>
              <Link
                to="/bed-and-crotto"
                className="btn-primary bg-white text-wine hover:bg-cream"
              >
                Scopri il pacchetto
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-6">Vieni a trovarci</p>
              <h2 className="heading-lg text-stone mb-8">Prenota il tuo tavolo</h2>
              <div className="divider mb-8" />
              <p className="text-body-lg text-stone/70 mb-10">
                Per prenotazioni e informazioni, contattateci telefonicamente
                o via email. Saremo lieti di accogliervi al Crotto Belvedere.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+390343335889"
                  className="flex items-center gap-5 group"
                >
                  <span className="w-14 h-14 rounded-full bg-stone flex items-center justify-center text-cream group-hover:bg-terracotta transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-small text-stone/50">Telefono</p>
                    <p className="text-stone font-medium text-lg">+39 0343 33589</p>
                  </div>
                </a>

                <a
                  href="mailto:info@crottobelvedere.com"
                  className="flex items-center gap-5 group"
                >
                  <span className="w-14 h-14 rounded-full bg-stone flex items-center justify-center text-cream group-hover:bg-terracotta transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-small text-stone/50">Email</p>
                    <p className="text-stone font-medium text-lg">info@crottobelvedere.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 lg:p-12"
            >
              <h3 className="heading-sm text-stone mb-6">Dove siamo</h3>
              <p className="text-stone/70 mb-6 leading-relaxed">
                <strong className="text-stone">Crotto Belvedere</strong><br />
                Via alla Chiesa, 6<br />
                23020 Prosto di Piuro (SO)
              </p>
              <p className="text-stone/50 text-small mb-8">
                Nel cuore della Valchiavenna, a pochi minuti da Chiavenna,
                facilmente raggiungibile da Milano in circa 1h30.
              </p>
              <Link to="/dove-siamo" className="btn-secondary w-full justify-center">
                Indicazioni stradali
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

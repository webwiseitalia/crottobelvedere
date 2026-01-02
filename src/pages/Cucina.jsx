import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageHero from '../components/PageHero'

// Import images
import heroImg from '../assets/cibo/cibo-2.webp'
import cibo1 from '../assets/cibo/cibo-1.webp'
import cibo3 from '../assets/cibo/cibo-3.webp'
import cibo4 from '../assets/cibo/cibo-4.webp'
import cibo5 from '../assets/cibo/cibo-5.webp'
import cibo6 from '../assets/cibo/cibo-6.webp'
import cibo7 from '../assets/cibo/cibo-7.webp'

export default function Cucina() {
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  const categories = [
    {
      name: 'Antipasti',
      dishes: [
        { name: 'Sciatt', description: 'Frittelle di grano saraceno ripiene di formaggio fuso' },
        { name: 'Bresaola della Valtellina IGP', description: 'Con rucola, grana e olio extravergine' },
        { name: 'Tagliere Valtellinese', description: 'Selezione di salumi e formaggi del territorio' },
        { name: 'Carpaccio di Bresaola', description: 'Con scaglie di formaggio stagionato e noci' }
      ]
    },
    {
      name: 'Primi',
      dishes: [
        { name: 'Pizzoccheri della Valtellina', description: 'Pasta di grano saraceno con verze, patate e formaggio' },
        { name: 'Polenta Taragna', description: 'Con abbondante formaggio fuso' },
        { name: 'Polenta Uncia', description: 'Condita con burro, aglio e formaggio locale' },
        { name: 'Gnocchi di Patate', description: 'Con burro e salvia o ragù di carne' }
      ]
    },
    {
      name: 'Secondi',
      dishes: [
        { name: 'Brasato al Vino Rosso', description: 'Carne di manzo brasata nel vino della Valtellina' },
        { name: 'Costine di Maiale', description: 'Cotte lentamente fino a diventare tenerissime' },
        { name: 'Spezzatino con Polenta', description: 'Carne di manzo in umido con polenta fumante' },
        { name: 'Selvaggina di Stagione', description: 'Preparata secondo ricetta tradizionale' }
      ]
    },
    {
      name: 'Dolci',
      dishes: [
        { name: 'Bisciola', description: 'Dolce tipico con frutta secca, noci e fichi' },
        { name: 'Torta di Grano Saraceno', description: 'Con marmellata di mirtilli rossi' },
        { name: 'Dolci della Casa', description: 'Preparazioni artigianali della stagione' }
      ]
    }
  ]

  return (
    <div className="grain bg-dark">
      <PageHero
        title="La Cucina"
        subtitle="Ricette tramandate di generazione in generazione, ingredienti del territorio, passione artigianale."
        eyebrow="I sapori della tradizione"
        image={heroImg}
      />

      {/* Introduction - Asymmetric */}
      <section className="py-32 lg:py-48 bg-dark relative overflow-hidden">
        <div className="number-marker -right-10 top-20 text-cream/5">01</div>

        <div className="container-wide">
          <div className="grid-asymmetric items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-eyebrow text-gold mb-8">La nostra filosofia</p>
              <h2 className="text-display text-cream mb-10">
                Cucina di<br />
                <span className="italic text-cream/60">territorio</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />
              <div className="space-y-6 text-body-lg text-cream/50">
                <p>
                  La cucina del Crotto Belvedere è un omaggio alla tradizione gastronomica della
                  Valtellina. Ogni piatto racconta la storia di questa terra, dei suoi contadini,
                  dei suoi pastori e delle famiglie che per generazioni hanno custodito ricette e sapori.
                </p>
                <p>
                  Utilizziamo ingredienti locali, seguiamo le stagioni e prepariamo tutto
                  con la cura di chi ama il proprio lavoro.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="img-cinematic aspect-[3/4]">
                <img src={cibo1} alt="Polenta" />
              </div>
              <div className="img-cinematic aspect-[3/4] mt-12">
                <img src={cibo5} alt="Costine" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles - Horizontal scroll */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="container-wide mb-10">
          <p className="text-eyebrow text-gold">I nostri principi</p>
        </div>

        <div className="scroll-horizontal px-8 lg:px-16 pb-8">
          {[
            { num: '01', title: 'Ingredienti Locali', desc: 'Prodotti del territorio, selezionati da produttori della Valchiavenna' },
            { num: '02', title: 'Ricette Tradizionali', desc: 'Tramandate di generazione in generazione, senza compromessi' },
            { num: '03', title: 'Preparazioni Artigianali', desc: 'Ogni piatto preparato con cura e attenzione ai dettagli' },
            { num: '04', title: 'Stagionalità', desc: 'Seguiamo il ritmo delle stagioni e i loro frutti migliori' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[80vw] md:w-[40vw] lg:w-[25vw] bg-warm p-10 lg:p-12"
            >
              <span className="text-gold text-eyebrow">{item.num}</span>
              <h3 className="text-title text-cream mt-4 mb-4">{item.title}</h3>
              <p className="text-cream/50 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-32 lg:py-48 bg-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-eyebrow text-gold mb-6">I nostri piatti</p>
            <h2 className="text-display text-cream">Dal Menu</h2>
          </motion.div>

          <div className="space-y-24">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-8 mb-12">
                  <span className="text-gold/30 font-serif text-6xl lg:text-8xl font-light">
                    {String(catIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-title text-cream">{category.name}</h3>
                  </div>
                  <div className="h-px flex-grow bg-cream/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 lg:pl-24">
                  {category.dishes.map((dish, dishIndex) => (
                    <motion.div
                      key={dishIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: dishIndex * 0.05 }}
                      className="group border-b border-cream/10 pb-6"
                    >
                      <h4 className="text-xl text-cream group-hover:text-gold transition-colors mb-2 font-serif">
                        {dish.name}
                      </h4>
                      <p className="text-cream font-light">{dish.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-cream italic mt-20"
          >
            Il menu può variare in base alla stagionalità degli ingredienti
          </motion.p>
        </div>
      </section>

      {/* Signature Dish - Full width cinematic */}
      <section ref={parallaxRef} className="relative min-h-screen bg-black overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={cibo3} alt="Pizzoccheri" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container-wide py-32">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-eyebrow text-gold mb-8">Il nostro cavallo di battaglia</p>
                <h2 className="text-hero text-cream mb-8">
                  I Pizzoccheri
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />
                <div className="space-y-6 text-body-lg text-cream/60 leading-relaxed">
                  <p>
                    Il piatto simbolo della Valtellina, preparato secondo la ricetta tradizionale
                    dell'Accademia del Pizzocchero. Pasta fresca di grano saraceno cotta insieme
                    a verze e patate, condita con abbondante burro fuso e formaggio casera.
                  </p>
                  <p>
                    Al Crotto Belvedere i pizzoccheri sono preparati con farina di grano saraceno
                    macinata a pietra e formaggi provenienti da produttori locali.
                  </p>
                </div>
                <Link to="/contatti" className="btn-solid mt-12 inline-flex">
                  Prenota un tavolo
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-dark py-8">
        <div className="flex gap-4 overflow-hidden">
          {[cibo4, cibo6, cibo7, cibo1].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[40vw] lg:w-[25vw] flex-shrink-0 aspect-square img-cinematic"
            >
              <img src={img} alt="" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-48 bg-warm">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-display text-cream mb-8">
              Vieni a<br />
              <span className="italic text-cream/60">trovarci</span>
            </h2>
            <p className="text-body-lg text-cream/50 mb-12 max-w-lg mx-auto">
              Prenota il tuo tavolo e vieni a gustare i sapori della nostra cucina.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+390343335889" className="btn-solid">
                Prenota ora
              </a>
              <Link to="/cantina" className="btn-outline">
                Scopri la cantina
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

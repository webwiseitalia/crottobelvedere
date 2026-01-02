import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

// Import images
import heroImg from '../assets/esterni/esterni-3.webp'
import cibo1 from '../assets/cibo/cibo-1.webp'
import cibo2 from '../assets/cibo/cibo-2.webp'
import cibo3 from '../assets/cibo/cibo-3.webp'
import cibo4 from '../assets/cibo/cibo-4.webp'
import cibo5 from '../assets/cibo/cibo-5.webp'
import interni1 from '../assets/interni/interni-1.webp'
import interni2 from '../assets/interni/interni-2.webp'
import interni3 from '../assets/interni/interni-3.webp'
import esterni1 from '../assets/esterni/esterni-1.webp'
import esterni2 from '../assets/esterni/esterni-2.webp'
import esterni5 from '../assets/esterni/esterni-5.webp'

export default function Home() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const galleryRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  })

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.2])
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 0.5, 0])
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"])

  const storyY = useTransform(storyProgress, [0, 1], ["20%", "-20%"])

  const isStoryInView = useInView(storyRef, { once: true, margin: "-20%" })
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-10%" })

  return (
    <div className="grain bg-black">
      {/* Hero - Full screen cinematic */}
      <section ref={heroRef} className="section-screen overflow-hidden">
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Crotto Belvedere - Vista esterna del ristorante"
            title="Crotto Belvedere"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full"
        >
          <div className="container-wide">
            <div className="min-h-screen flex flex-col justify-end pb-20 lg:pb-32">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-eyebrow text-gold mb-8"
              >
                Prosto di Piuro · Valchiavenna · Dal 1961
              </motion.p>

              {/* Main title - Asymmetric */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-massive text-cream"
                >
                  Crotto
                </motion.h1>
              </div>

              <div className="overflow-hidden mb-12 lg:ml-[15vw]">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="text-massive text-cream italic font-light"
                >
                  Belvedere
                </motion.h1>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-cream text-xl lg:text-2xl font-light max-w-xl mb-12"
              >
                Dove la tradizione alpina incontra l'autenticità.
                Un viaggio attraverso i sapori della Valtellina.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-wrap gap-6"
              >
                <Link to="/cucina" className="btn-solid">
                  Esplora il menu
                </Link>
                <a href="tel:+390343335889" className="btn-outline">
                  Prenota ora
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-20 bg-gradient-to-b from-transparent via-cream/50 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Story section - Parallax text reveal */}
      <section ref={storyRef} className="relative py-32 lg:py-48 bg-dark overflow-hidden">
        {/* Background number */}
        <div className="number-marker -left-10 top-20 text-cream/5">01</div>

        <div className="container-wide relative z-10">
          <div className="grid-asymmetric items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-eyebrow text-gold mb-8">La nostra storia</p>
              <h2 className="text-display text-cream mb-10">
                Un luogo scolpito<br />
                <span className="italic text-cream/60">dal tempo</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />
              <p className="text-body-lg text-cream mb-8 max-w-lg">
                Scavato nella roccia della montagna, il crotto conserva naturalmente
                la temperatura ideale per stagionare formaggi e affettati.
                Una cantina naturale che da generazioni custodisce i segreti della Valchiavenna.
              </p>
              <Link to="/crotto" className="btn-line text-cream">
                Scopri il crotto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Image side - offset */}
            <motion.div
              style={{ y: storyY }}
              className="relative"
            >
              <div className="img-cinematic aspect-[3/4] lg:aspect-[4/5]">
                <img src={interni3} alt="Interno del crotto con tavoli" title="Il crotto" width={800} height={1000} loading="lazy" className="w-full h-full object-cover" />
              </div>
              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-12 -left-12 lg:-left-24 w-2/3 aspect-square hidden lg:block"
              >
                <div className="img-cinematic h-full">
                  <img src={interni1} alt="Botti per la stagionatura" title="Le botti" width={600} height={600} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal gallery */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="container-wide mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-eyebrow text-gold"
          >
            La cucina
          </motion.p>
        </div>

        <div className="scroll-horizontal px-8 lg:px-16 pb-8">
          {[
            { img: cibo2, title: "Pizzoccheri", sub: "della tradizione" },
            { img: cibo1, title: "Polenta", sub: "taragna" },
            { img: cibo5, title: "Costine", sub: "alla brace" },
            { img: cibo3, title: "Sciatt", sub: "croccanti" },
            { img: cibo4, title: "Bresaola", sub: "valtellinese" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[80vw] md:w-[50vw] lg:w-[35vw] group cursor-pointer"
            >
              <div className="img-cinematic aspect-[4/5] mb-6">
                <img src={item.img} alt={item.title} title={item.title} width={600} height={750} loading="lazy" />
              </div>
              <h3 className="text-title text-cream group-hover:text-gold transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-cream italic">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="container-wide mt-12">
          <Link to="/cucina" className="btn-line text-cream">
            Scopri tutto il menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Quote - Full screen */}
      <section className="section-screen bg-warm flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={esterni2} alt="Panorama della Valchiavenna" title="Valchiavenna" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-warm/80" />

        <div className="container-narrow relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-gold text-6xl mb-8 font-serif">"</div>
            <p className="text-hero text-cream italic mb-12">
              Vi prende per la gola
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="text-eyebrow text-cream">
              — Il nostro motto dal 1961
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spaces - Asymmetric gallery */}
      <section ref={galleryRef} className="py-32 lg:py-48 bg-dark relative overflow-hidden">
        <div className="number-marker -right-10 top-32 text-cream/5">02</div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <p className="text-eyebrow text-gold mb-6">Gli spazi</p>
            <h2 className="text-display text-cream max-w-3xl">
              Tre sale, un terrazzo,<br />
              <span className="italic text-cream/60">infinite possibilità</span>
            </h2>
          </motion.div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Large left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 lg:col-span-7"
            >
              <Link to="/tre-sale" className="group block">
                <div className="img-cinematic aspect-[16/10]">
                  <img src={interni2} alt="Sala principale del ristorante" title="La sala principale" width={1200} height={750} loading="lazy" />
                </div>
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-title text-cream group-hover:text-gold transition-colors">Le Tre Sale</h3>
                    <p className="text-cream">Ambienti intimi e caratteristici</p>
                  </div>
                  <span className="btn-line text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                    Esplora
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Stacked right */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/cantina" className="group block">
                  <div className="img-cinematic aspect-[16/9]">
                    <img src={interni1} alt="La cantina con le botti" title="La cantina" width={800} height={450} loading="lazy" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl text-cream group-hover:text-gold transition-colors">La Cantina</h3>
                    <p className="text-cream text-sm">Vini della Valtellina</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/dove-siamo" className="group block">
                  <div className="img-cinematic aspect-[16/9]">
                    <img src={esterni5} alt="Panorama del territorio" title="Il territorio" width={800} height={450} loading="lazy" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl text-cream group-hover:text-gold transition-colors">Il Territorio</h3>
                    <p className="text-cream text-sm">Valchiavenna, Alpi italiane</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bed & Crotto - Cinematic promo */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-[60vh] lg:h-auto">
            <img
              src={esterni1}
              alt="Vista panoramica sulla Valchiavenna"
              title="Bed & Crotto"
              width={1200}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:bg-gradient-to-t lg:from-transparent lg:to-black/30" />
          </div>

          {/* Content side */}
          <div className="bg-rust py-20 lg:py-32 px-8 lg:px-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-eyebrow text-white/50 mb-6">Esperienza completa</p>
              <h2 className="text-display text-white mb-8">
                Bed &<br />
                <span className="italic">Crotto</span>
              </h2>
              <p className="text-body-lg text-white/70 mb-10 max-w-md">
                Cena tradizionale e pernottamento nelle strutture partner.
                L'esperienza completa della Valchiavenna, a partire da €60 a persona.
              </p>
              <Link
                to="/bed-and-crotto"
                className="btn-solid bg-white text-rust hover:bg-gold hover:text-black"
              >
                Scopri il pacchetto
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-32 lg:py-48 bg-black">
        <div className="container-wide">
          <div className="grid-asymmetric-reverse items-start">
            {/* Info side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-eyebrow text-gold mb-6">Vieni a trovarci</p>
              <h2 className="text-display text-cream mb-10">
                Prenota il<br />
                <span className="italic text-cream/60">tuo tavolo</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />

              <div className="space-y-8 mb-12">
                <div>
                  <p className="text-eyebrow text-gold mb-2">Telefono</p>
                  <a href="tel:+390343335889" className="text-2xl text-cream hover:text-gold transition-colors">
                    +39 0343 33589
                  </a>
                </div>
                <div>
                  <p className="text-eyebrow text-gold mb-2">Email</p>
                  <a href="mailto:info@crottobelvedere.com" className="text-2xl text-cream hover:text-gold transition-colors">
                    info@crottobelvedere.com
                  </a>
                </div>
                <div>
                  <p className="text-eyebrow text-gold mb-2">Indirizzo</p>
                  <p className="text-xl text-cream">
                    Via alla Chiesa, 6<br />
                    23020 Prosto di Piuro (SO)
                  </p>
                </div>
              </div>

              <Link to="/contatti" className="btn-line text-cream">
                Contatti e orari
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Map/image side */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="img-cinematic aspect-[4/5]">
                <img src={esterni2} alt="Esterno del Crotto Belvedere" title="Crotto Belvedere" width={800} height={1000} loading="lazy" />
              </div>
              <div className="mt-8 flex gap-8 text-cream text-sm">
                <span>45 min da Lecco</span>
                <span>·</span>
                <span>1h30 da Milano</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

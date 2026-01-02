import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

import heroImg from '../assets/interni/interni-1.webp'

export default function Cantina() {
  const wines = [
    { name: 'Sforzato di Valtellina DOCG', type: 'Rosso', description: 'Il re dei vini valtellinesi. Ottenuto da uve Nebbiolo appassite, è un vino potente, complesso e longevo.' },
    { name: 'Valtellina Superiore DOCG', type: 'Rosso', description: 'Prodotto nelle sottozone Sassella, Grumello, Inferno, Valgella e Maroggia. Elegante, con tannini setosi.' },
    { name: 'Sassella', type: 'Rosso DOCG', description: 'Dalla sottozona più pregiata. Vino strutturato con note di ciliegia, viola e sentori minerali.' },
    { name: 'Inferno', type: 'Rosso DOCG', description: 'Nome evocativo per un vino prodotto su pendii così ripidi da sembrare infernali. Intenso e speziato.' },
    { name: 'Grumello', type: 'Rosso DOCG', description: 'Equilibrato e armonico, con profumi di fiori rossi e un palato elegante e persistente.' },
    { name: 'Rosso di Valtellina DOC', type: 'Rosso', description: 'Più giovane e beverino, perfetto per accompagnare i piatti quotidiani della tradizione.' }
  ]

  const pairings = [
    { dish: 'Pizzoccheri', wine: 'Rosso di Valtellina DOC', reason: 'La freschezza del Rosso bilancia la ricchezza del piatto.' },
    { dish: 'Sciatt', wine: 'Valtellina Superiore Sassella', reason: 'La struttura del Sassella si sposa con il formaggio fuso.' },
    { dish: 'Bresaola', wine: 'Valtellina Superiore Grumello', reason: 'L\'eleganza del Grumello esalta la delicatezza della bresaola.' },
    { dish: 'Brasato', wine: 'Sforzato di Valtellina', reason: 'La potenza dello Sforzato regge il confronto con la carne brasata.' },
  ]

  return (
    <>
      <PageHero title="La Cantina" subtitle="I vini del territorio" image={heroImg} />

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
              <p className="text-label text-terracotta mb-4">Viticoltura eroica</p>
              <h2 className="heading-lg text-stone mb-6">I vini della Valtellina</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-body-lg text-stone/70">
                <p>
                  La Valtellina è una delle zone vitivinicole più eroiche d'Italia.
                  I vigneti, coltivati su ripidi terrazzamenti sostenuti da muretti a secco,
                  producono vini di straordinaria qualità dal vitigno Nebbiolo, qui chiamato
                  Chiavennasca.
                </p>
                <p>
                  Al Crotto Belvedere selezioniamo con cura i vini delle migliori
                  cantine locali, per offrirvi un'esperienza enologica autentica.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">La nostra selezione</p>
            <h2 className="heading-lg text-stone">I vini in carta</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wines.map((wine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-label text-wine">{wine.type}</span>
                <h3 className="heading-sm text-stone mt-2 mb-4 group-hover:text-wine transition-colors">
                  {wine.name}
                </h3>
                <p className="text-stone/60 leading-relaxed">{wine.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-stone/50 mt-12 italic">
            La carta dei vini completa è disponibile presso il ristorante.
          </p>
        </div>
      </section>

      {/* Terroir */}
      <section className="section-padding bg-wine text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-white/50 mb-4">Il territorio</p>
              <h2 className="heading-lg mb-6">Viticoltura eroica</h2>
              <div className="divider mb-8" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }} />
              <div className="space-y-6 text-body-lg text-white/70 leading-relaxed">
                <p>
                  I vigneti della Valtellina si estendono lungo il versante retico delle Alpi,
                  su terrazzamenti che sfidano la gravità. Qui, dove le macchine non possono
                  arrivare, ogni operazione è compiuta a mano.
                </p>
                <p>
                  L'esposizione a sud, l'escursione termica e il terreno sassoso
                  conferiscono ai vini valtellinesi carattere, eleganza
                  e una mineralità inconfondibile.
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
                { title: 'Il Nebbiolo Chiavennasca', desc: 'Il Nebbiolo trova in Valtellina la sua espressione più montana.' },
                { title: 'Lo Sforzato', desc: 'Tecnica antica che prevede l\'appassimento delle uve per concentrare zuccheri e aromi.' },
                { title: 'Le Sottozone', desc: 'Sassella, Grumello, Inferno, Valgella e Maroggia: cinque territori, cinque espressioni.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-8">
                  <h3 className="heading-sm mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pairings */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">Abbinamenti consigliati</p>
            <h2 className="heading-lg text-stone">Vino e cucina</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pairings.map((pairing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 flex items-start gap-5"
              >
                <span className="w-10 h-10 bg-wine text-white rounded-full flex items-center justify-center flex-shrink-0 font-serif text-lg">
                  {index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="heading-sm text-stone">{pairing.dish}</h3>
                    <span className="text-stone/30">+</span>
                    <span className="text-wine font-medium text-small">{pairing.wine}</span>
                  </div>
                  <p className="text-small text-stone/60">{pairing.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-stone mb-6">Scopri la nostra carta dei vini</h2>
              <p className="text-body-lg text-stone/70 mb-10">
                Vieni al Crotto Belvedere e lasciati consigliare nell'abbinamento perfetto
                tra i nostri piatti e i vini della Valtellina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+390343335889" className="btn-primary">Prenota un tavolo</a>
                <Link to="/cucina" className="btn-secondary">Scopri il menu</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

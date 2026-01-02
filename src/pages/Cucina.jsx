import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

// Import images
import heroImg from '../assets/cibo/cibo-2.webp'
import cibo1 from '../assets/cibo/cibo-1.webp'
import cibo5 from '../assets/cibo/cibo-5.webp'
import cibo3 from '../assets/cibo/cibo-3.webp'
import cibo4 from '../assets/cibo/cibo-4.webp'

export default function Cucina() {
  const categories = [
    {
      name: 'Antipasti',
      description: 'Un viaggio nei sapori del territorio',
      dishes: [
        { name: 'Sciatt', description: 'Frittelle di grano saraceno ripiene di formaggio fuso, croccanti fuori e filanti dentro' },
        { name: 'Bresaola della Valtellina IGP', description: 'Affettata finemente, servita con rucola, grana e un filo d\'olio extravergine' },
        { name: 'Tagliere Valtellinese', description: 'Selezione di salumi e formaggi del territorio: bresaola, coppa, pancetta, bitto e casera' },
        { name: 'Carpaccio di Bresaola', description: 'Con scaglie di formaggio stagionato e noci' }
      ]
    },
    {
      name: 'Primi Piatti',
      description: 'Le ricette della tradizione valtellinese',
      dishes: [
        { name: 'Pizzoccheri della Valtellina', description: 'Il piatto simbolo: pasta di grano saraceno con verze, patate, burro fuso, casera e grana' },
        { name: 'Polenta Taragna', description: 'Polenta di mais e grano saraceno con abbondante formaggio fuso' },
        { name: 'Polenta Uncia', description: 'Polenta condita con burro, aglio e formaggio locale' },
        { name: 'Gnocchi di Patate', description: 'Conditi con burro e salvia o ragù di carne' }
      ]
    },
    {
      name: 'Secondi Piatti',
      description: 'Carni e piatti sostanziosi della montagna',
      dishes: [
        { name: 'Brasato al Vino Rosso', description: 'Carne di manzo brasata lentamente nel vino rosso della Valtellina' },
        { name: 'Costine di Maiale', description: 'Cotte lentamente fino a diventare tenerissime' },
        { name: 'Spezzatino con Polenta', description: 'Carne di manzo in umido accompagnata da polenta fumante' },
        { name: 'Selvaggina di Stagione', description: 'Quando disponibile, preparata secondo ricetta tradizionale' }
      ]
    },
    {
      name: 'Dolci',
      description: 'Per concludere in dolcezza',
      dishes: [
        { name: 'Bisciola', description: 'Il dolce tipico valtellinese con frutta secca, noci e fichi' },
        { name: 'Torta di Grano Saraceno', description: 'Con marmellata di mirtilli rossi' },
        { name: 'Dolci della Casa', description: 'Preparazioni artigianali che variano secondo la stagione' }
      ]
    }
  ]

  return (
    <>
      <PageHero
        title="La Cucina"
        subtitle="I sapori della tradizione"
        image={heroImg}
      />

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
              <p className="text-label text-terracotta mb-4">La nostra filosofia</p>
              <h2 className="heading-lg text-stone mb-6">
                Cucina di territorio
              </h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-body-lg text-stone/70">
                <p>
                  La cucina del Crotto Belvedere è un omaggio alla tradizione gastronomica della
                  Valtellina e della Valchiavenna. Ogni piatto racconta la storia di questa terra,
                  dei suoi contadini, dei suoi pastori e delle famiglie che per generazioni hanno
                  custodito ricette e sapori.
                </p>
                <p>
                  Utilizziamo ingredienti locali, seguiamo le stagioni e prepariamo tutto
                  con la cura e la passione di chi ama il proprio lavoro.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={cibo1} alt="Polenta" className="w-full aspect-[3/4] object-cover" />
              <img src={cibo5} alt="Costine" className="w-full aspect-[3/4] object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Ingredienti Locali', desc: 'Prodotti del territorio, selezionati da produttori locali' },
              { title: 'Ricette Tradizionali', desc: 'Tramandate di generazione in generazione' },
              { title: 'Preparazioni Artigianali', desc: 'Ogni piatto preparato con cura, come una volta' },
              { title: 'Stagionalità', desc: 'Seguiamo le stagioni e i loro frutti migliori' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8"
              >
                <span className="text-label text-terracotta mb-4 block">0{i + 1}</span>
                <h3 className="heading-sm text-stone mb-3">{item.title}</h3>
                <p className="text-stone/60 text-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-label text-terracotta mb-4">I nostri piatti</p>
            <h2 className="heading-lg text-stone">Dal Menu</h2>
          </div>

          <div className="space-y-20">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-px flex-grow bg-stone/10" />
                  <div className="text-center">
                    <h3 className="heading-md text-stone">{category.name}</h3>
                    <p className="text-small text-stone/50 mt-1">{category.description}</p>
                  </div>
                  <div className="h-px flex-grow bg-stone/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <motion.div
                      key={dishIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: dishIndex * 0.05 }}
                      className="bg-white p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="heading-sm text-stone mb-3">{dish.name}</h4>
                      <p className="text-stone/60 leading-relaxed">{dish.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-stone/50 italic mt-16">
            Il menu completo è disponibile presso il ristorante e può variare in base alla stagionalità degli ingredienti.
          </p>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-padding bg-stone text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-terracotta mb-4">Il nostro cavallo di battaglia</p>
              <h2 className="heading-lg mb-6">I Pizzoccheri</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-white/70 text-body-lg leading-relaxed">
                <p>
                  Il piatto simbolo della Valtellina, preparato secondo la ricetta tradizionale
                  dell'Accademia del Pizzocchero. Pasta fresca di grano saraceno cotta insieme
                  a verze e patate, poi condita con abbondante burro fuso, formaggio casera
                  e grana.
                </p>
                <p>
                  Al Crotto Belvedere i pizzoccheri sono preparati con farina di grano saraceno
                  macinata a pietra e formaggi provenienti da produttori locali.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={cibo3} alt="Piatto" className="w-full aspect-square object-cover" />
              <img src={cibo4} alt="Piatto" className="w-full aspect-square object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-stone mb-6">Vieni a trovarci</h2>
              <p className="text-body-lg text-stone/70 mb-10">
                Prenota il tuo tavolo e vieni a gustare i sapori della nostra cucina.
                Ti aspettiamo al Crotto Belvedere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+390343335889" className="btn-primary">
                  Prenota ora
                </a>
                <Link to="/cantina" className="btn-secondary">
                  Scopri la cantina
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

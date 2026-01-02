import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Prodotti() {
  const categories = [
    {
      name: 'Salumi',
      description: 'Le eccellenze della norcineria valtellinese',
      products: [
        {
          name: 'Bresaola della Valtellina IGP',
          description: 'Il salume più famoso della Valtellina. Carne bovina salata, speziata e stagionata all\'aria delle Alpi.'
        },
        {
          name: 'Slinzega',
          description: 'Carne di manzo o cavallo essiccata, più intensa e saporita della bresaola. Prodotto antico, oggi raro e prezioso.'
        },
        {
          name: 'Salame Valtellinese',
          description: 'Impasto di carne suina macinata fine con spezie tradizionali. Stagionato nelle cantine fresche delle Alpi.'
        },
        {
          name: 'Coppa e Pancetta',
          description: 'Tagli pregiati di suino stagionati secondo tradizione. Perfetti nel tagliere misto.'
        }
      ]
    },
    {
      name: 'Formaggi',
      description: 'I tesori degli alpeggi valtellinesi',
      products: [
        {
          name: 'Bitto DOP',
          description: 'Il formaggio più pregiato delle Alpi. Prodotto solo durante l\'estate negli alpeggi con latte vaccino e caprino.'
        },
        {
          name: 'Casera DOP',
          description: 'Formaggio a pasta semicotta, prodotto tutto l\'anno. Base di molte ricette tradizionali come pizzoccheri e sciatt.'
        },
        {
          name: 'Scimudin',
          description: 'Piccolo formaggio fresco a pasta molle, tipico della Valchiavenna. Cremoso e delicato.'
        },
        {
          name: 'Formaggi d\'Alpe',
          description: 'Formaggi prodotti durante l\'alpeggio estivo, quando le mucche pascolano sui prati in quota.'
        }
      ]
    },
    {
      name: 'Piatti Tipici',
      description: 'Le ricette della tradizione',
      products: [
        {
          name: 'Pizzoccheri',
          description: 'Pasta di grano saraceno con verze, patate, burro fuso e formaggi. Il piatto simbolo della Valtellina.'
        },
        {
          name: 'Sciatt',
          description: 'Frittelle di grano saraceno ripiene di formaggio casera. Croccanti fuori, filanti dentro.'
        },
        {
          name: 'Polenta Taragna',
          description: 'Polenta di mais e grano saraceno con abbondante formaggio fuso.'
        },
        {
          name: 'Polenta Uncia',
          description: 'Polenta condita con burro, aglio e formaggio locale. Semplice e irresistibile.'
        }
      ]
    },
    {
      name: 'Dolci e Prodotti',
      description: 'Le dolcezze della valle',
      products: [
        {
          name: 'Bisciola',
          description: 'Pane dolce tipico con frutta secca, noci, fichi e spezie. Simbolo delle feste natalizie.'
        },
        {
          name: 'Biscotin de Prost',
          description: 'Biscotti tipici di Prosto di Piuro. Semplici e fragranti.'
        },
        {
          name: 'Miele di Montagna',
          description: 'Miele prodotto dalle api che bottinano sui fiori di montagna. Millefiori, rododendro, castagno.'
        },
        {
          name: 'Farina di Grano Saraceno',
          description: 'La base di pizzoccheri e sciatt. Macinata a pietra nei mulini storici della valle.'
        }
      ]
    }
  ]

  return (
    <>
      <PageHero
        title="I Prodotti"
        subtitle="Il meglio del territorio"
      />

      {/* Introduction */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <p className="text-subtle mb-6">Eccellenze locali</p>
            <h2 className="title-md text-dark mb-8">
              Eccellenze del territorio
            </h2>
            <div className="divider-line mb-10" />

            <div className="space-y-6 text-lead">
              <p>
                La Valtellina e la Valchiavenna sono terre ricche di prodotti straordinari,
                nati dall'incontro tra una natura generosa e la sapienza di generazioni di
                contadini, casari e artigiani.
              </p>
              <p>
                Al Crotto Belvedere utilizziamo questi prodotti nelle nostre ricette,
                valorizzandone la qualità e l'autenticità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-space ${catIndex % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="container-lg">
            <div className="text-center mb-12">
              <p className="text-subtle mb-4">{category.description}</p>
              <h2 className="title-sm text-dark">{category.name}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.products.map((product, prodIndex) => (
                <div
                  key={prodIndex}
                  className={`p-8 ${catIndex % 2 === 0 ? 'bg-cream' : 'bg-white'} hover:shadow-lg transition-all duration-300`}
                >
                  <h3 className="font-display text-xl text-dark mb-4">
                    {product.name}
                  </h3>
                  <p className="text-dark/60 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quality Statement */}
      <section className="section-space bg-dark text-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-subtle text-warm mb-6">La nostra filosofia</p>
            <h2 className="title-md mb-8">Qualità e autenticità</h2>
            <div className="divider-line mx-auto mb-10" />

            <p className="text-cream/70 text-lg leading-relaxed mb-16">
              Ogni prodotto che utilizziamo è selezionato con cura, privilegiando
              i produttori locali e le lavorazioni artigianali. Crediamo che la
              qualità degli ingredienti sia la base di una buona cucina.
            </p>

            <div className="grid sm:grid-cols-3 gap-12">
              {[
                { value: 'DOP & IGP', label: 'Prodotti certificati' },
                { value: 'Km 0', label: 'Produttori locali' },
                { value: '60+', label: 'Anni di tradizione' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-4xl text-warm mb-2">{stat.value}</p>
                  <p className="text-cream/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md text-dark mb-6">
              Vieni a gustarli
            </h2>
            <p className="text-lead mb-10">
              Scopri questi prodotti straordinari nei piatti del Crotto Belvedere.
              Ogni ricetta valorizza al meglio le eccellenze del nostro territorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cucina" className="btn-dark">
                Scopri il menu
              </Link>
              <Link to="/ricette" className="btn-outline">
                Le nostre ricette
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

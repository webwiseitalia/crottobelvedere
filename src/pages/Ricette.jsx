import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Ricette() {
  const recipes = [
    {
      name: 'Pizzoccheri della Valtellina',
      category: 'Primo',
      time: '60 minuti',
      difficulty: 'Media',
      description: 'Il piatto simbolo della cucina valtellinese. Una pasta di grano saraceno cotta con verze e patate, poi condita con burro fuso, formaggio casera e grana.',
      story: 'I pizzoccheri nascono come piatto povero delle famiglie contadine valtellinesi. Il grano saraceno, che cresce bene anche in alta quota, era la base dell\'alimentazione. Oggi sono riconosciuti come patrimonio gastronomico e tutelati dall\'Accademia del Pizzocchero.',
      ingredients: [
        '400g di farina di grano saraceno',
        '100g di farina bianca',
        '200g di verze',
        '200g di patate',
        '200g di formaggio Casera DOP',
        '100g di grana grattugiato',
        '150g di burro',
        '2 spicchi d\'aglio',
        'Salvia fresca',
        'Sale e pepe'
      ],
      steps: [
        'Preparare l\'impasto con le farine, acqua e un pizzico di sale.',
        'Stendere la pasta e tagliarla in losanghe.',
        'Cuocere le patate a dadini per 5 minuti, poi aggiungere le verze.',
        'Dopo 5 minuti, aggiungere i pizzoccheri e cuocere per 10-12 minuti.',
        'Sciogliere il burro con aglio e salvia.',
        'Disporre a strati: pasta con verdure, casera, grana, burro fuso.',
        'Servire immediatamente, ben caldo.'
      ]
    },
    {
      name: 'Sciatt',
      category: 'Antipasto',
      time: '40 minuti',
      difficulty: 'Media',
      description: 'Frittelle di grano saraceno ripiene di formaggio casera. Il nome in dialetto significa "rospi", per la forma irregolare.',
      story: 'Gli sciatt sono un\'antica preparazione della Valtellina, nata per utilizzare gli avanzi di pasta di grano saraceno riempiti con il formaggio.',
      ingredients: [
        '200g di farina di grano saraceno',
        '50g di farina bianca',
        '200ml di acqua frizzante',
        '40ml di grappa',
        '200g di formaggio Casera DOP',
        'Olio per friggere',
        'Sale'
      ],
      steps: [
        'Mescolare le farine con l\'acqua frizzante e la grappa.',
        'Salare e far riposare per 20 minuti.',
        'Tagliare il casera a dadini di circa 1 cm.',
        'Scaldare abbondante olio a 180°C.',
        'Avvolgere ogni dadino di formaggio nella pastella.',
        'Friggere fino a doratura (2-3 minuti).',
        'Servire caldi su un letto di cicoria.'
      ]
    },
    {
      name: 'Polenta Taragna',
      category: 'Primo',
      time: '90 minuti',
      difficulty: 'Facile',
      description: 'La polenta più ricca della tradizione valtellinese. Un impasto di farina di mais e grano saraceno arricchito con abbondante formaggio.',
      story: 'Il nome "taragna" deriva dal "tarai", il bastone usato per mescolare la polenta nel paiolo di rame.',
      ingredients: [
        '300g di farina di mais',
        '100g di farina di grano saraceno',
        '1.5 litri di acqua',
        '300g di formaggio Casera DOP',
        '100g di burro',
        'Sale'
      ],
      steps: [
        'Portare l\'acqua salata a ebollizione.',
        'Versare le farine a pioggia mescolando continuamente.',
        'Cuocere mescolando per 45-60 minuti.',
        'Aggiungere il formaggio e il burro.',
        'Mescolare finché il formaggio non è fuso.',
        'Servire fumante con carne in umido o salumi.'
      ]
    },
    {
      name: 'Bisciola',
      category: 'Dolce',
      time: '120 minuti',
      difficulty: 'Facile',
      description: 'Il pane dolce tipico della Valtellina, ricco di frutta secca, noci e fichi.',
      story: 'La bisciola nasce nelle case contadine come dolce delle feste. Ogni famiglia aveva la propria ricetta, tramandata di madre in figlia.',
      ingredients: [
        '500g di farina 00',
        '200g di zucchero',
        '100g di burro',
        '3 uova',
        '200g di noci',
        '200g di fichi secchi',
        '100g di uvetta',
        '1 bustina di lievito',
        'Scorza di limone',
        'Un bicchierino di grappa'
      ],
      steps: [
        'Ammorbidire l\'uvetta in acqua tiepida e grappa.',
        'Impastare farina, zucchero, burro morbido, uova e lievito.',
        'Aggiungere la frutta secca tagliata grossolanamente.',
        'Incorporare l\'uvetta e la scorza di limone.',
        'Dare la forma di un pane ovale.',
        'Cuocere a 180°C per 50-60 minuti.',
        'Far raffreddare prima di affettare.'
      ]
    }
  ]

  return (
    <>
      <PageHero
        title="Le Ricette"
        subtitle="Tradizione in cucina"
      />

      {/* Introduction */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <p className="text-subtle mb-6">I nostri segreti</p>
            <h2 className="title-md text-dark mb-8">
              Ricette della tradizione
            </h2>
            <div className="divider-line mb-10" />

            <div className="space-y-6 text-lead">
              <p>
                La cucina valtellinese è fatta di piatti semplici ma ricchi di storia,
                nati dalla necessità di nutrirsi con quello che la montagna offriva.
              </p>
              <p>
                Condividiamo con voi alcune delle ricette che prepariamo al Crotto Belvedere,
                perché possiate portare a casa un pezzo della nostra tradizione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="space-y-24">
            {recipes.map((recipe, index) => (
              <article key={index} id={recipe.name.toLowerCase().replace(/\s+/g, '-')}>
                {/* Recipe Header */}
                <div className="max-w-3xl mb-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-dark text-cream text-xs font-medium tracking-wide">
                      {recipe.category}
                    </span>
                    <span className="text-sm text-dark/50">
                      {recipe.time}
                    </span>
                    <span className="text-sm text-dark/50">
                      Difficoltà: {recipe.difficulty}
                    </span>
                  </div>
                  <h2 className="title-sm text-dark mb-4">{recipe.name}</h2>
                  <p className="text-lead">{recipe.description}</p>
                </div>

                {/* Recipe Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Story */}
                  <div className="bg-cream p-8">
                    <h3 className="font-display text-lg text-dark mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-dark text-cream rounded-full flex items-center justify-center text-sm">1</span>
                      La Storia
                    </h3>
                    <p className="text-dark/60 leading-relaxed text-sm">
                      {recipe.story}
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="bg-cream p-8">
                    <h3 className="font-display text-lg text-dark mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-dark text-cream rounded-full flex items-center justify-center text-sm">2</span>
                      Ingredienti
                    </h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="text-sm text-dark/60 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-warm rounded-full mt-2 flex-shrink-0" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="bg-cream p-8">
                    <h3 className="font-display text-lg text-dark mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-dark text-cream rounded-full flex items-center justify-center text-sm">3</span>
                      Preparazione
                    </h3>
                    <ol className="space-y-4">
                      {recipe.steps.map((step, i) => (
                        <li key={i} className="text-sm text-dark/60 flex items-start gap-3">
                          <span className="w-5 h-5 bg-warm/20 text-dark rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {index < recipes.length - 1 && (
                  <div className="divider-line mt-24" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-dark text-cream">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md mb-6">
              Lasciati guidare dalla tradizione
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Se vuoi assaggiare questi piatti preparati con maestria e ingredienti
              selezionati, vieni a trovarci al Crotto Belvedere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+390343335889" className="btn bg-cream text-dark hover:bg-white">
                Prenota un tavolo
              </a>
              <Link to="/prodotti" className="btn border border-cream/30 text-cream hover:bg-cream/10">
                Scopri i prodotti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

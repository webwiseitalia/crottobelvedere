import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Filastrocca() {
  return (
    <>
      <PageHero
        title="La Filastrocca"
        subtitle="Tradizione e poesia"
      />

      {/* The Poem */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 md:p-16">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl text-dark italic">
                  "Vi prende per la gola"
                </h2>
                <div className="divider-line mx-auto mt-8" />
              </div>

              <div className="font-display text-lg md:text-xl text-dark leading-relaxed space-y-8 text-center">
                <p className="italic">
                  Nel cuore della valle, tra rocce e tradizione,<br />
                  sorge il Crotto Belvedere con la sua passione.
                </p>

                <p className="italic">
                  Qui l'aria è fresca e il soffio del sorel<br />
                  conserva i formaggi e rende il vino bel.
                </p>

                <p className="italic">
                  Pizzoccheri fumanti nel piatto rotondo,<br />
                  sciatt croccanti, i più buoni del mondo.
                </p>

                <p className="italic">
                  Bresaola affettata, Bitto stagionato,<br />
                  ogni boccone è un dono prelibato.
                </p>

                <p className="italic">
                  La polenta taragna col formaggio fuso,<br />
                  chi l'assaggia una volta ne rimane confuso.
                </p>

                <p className="italic">
                  Nel bicchiere il rosso della Valtellina,<br />
                  Sforzato e Sassella, una scelta divina.
                </p>

                <p className="italic">
                  E quando la sera scende sulla valle,<br />
                  il crotto si accende di mille scintille.
                </p>

                <p className="italic">
                  Venite a trovarci, amici e forestieri,<br />
                  vi attendono piatti sinceri e leggeri.
                </p>

                <p className="italic text-wine font-medium">
                  Al Crotto Belvedere, dal sessantuno,<br />
                  vi prendiamo per la gola, uno per uno.
                </p>
              </div>

              <div className="text-center mt-12">
                <span className="text-dark/40 text-sm">
                  — Crotto Belvedere, Prosto di Piuro —
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Behind */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-subtle mb-6">La storia</p>
              <h2 className="title-sm text-dark mb-8">
                Parole che raccontano
              </h2>
              <div className="divider-line mb-10" />

              <div className="space-y-6 text-lead">
                <p>
                  La filastrocca del Crotto Belvedere nasce dalla tradizione orale
                  della Valchiavenna, dove le rime e i versi accompagnavano i momenti
                  di convivialità.
                </p>
                <p>
                  "Vi prende per la gola" non è solo uno slogan: è una promessa.
                  La promessa di un'esperienza che coinvolge i sensi, scalda il cuore
                  e lascia un ricordo indelebile.
                </p>
              </div>
            </div>
            <div className="bg-cream p-10">
              <h3 className="font-display text-xl text-dark mb-8">I nostri valori</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Tradizione', desc: 'Ricette tramandate, sapori autentici' },
                  { title: 'Territorio', desc: 'Prodotti locali, filiera corta' },
                  { title: 'Famiglia', desc: 'Passione che si tramanda' },
                  { title: 'Ospitalità', desc: 'Accoglienza sincera e calorosa' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-dark text-cream rounded-full flex items-center justify-center flex-shrink-0 text-sm font-display">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-medium text-dark">{item.title}</h4>
                      <p className="text-sm text-dark/60">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-space bg-dark text-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl italic mb-8">
              "Vi prende per la gola!"
            </p>
            <p className="text-cream/50">
              — Il motto del Crotto Belvedere dal 1961 —
            </p>
          </div>
        </div>
      </section>

      {/* Tradition */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-subtle mb-6">La tradizione continua</p>
            <h2 className="title-sm text-dark mb-8">
              Oltre sessant'anni di storia
            </h2>
            <div className="divider-line mx-auto mb-10" />

            <div className="space-y-6 text-lead mb-16">
              <p>
                Dal 1961 il Crotto Belvedere accoglie viaggiatori, famiglie e buongustai
                nel cuore della Valchiavenna. Tre generazioni hanno custodito e trasmesso
                l'amore per la buona tavola e l'arte dell'ospitalità.
              </p>
              <p>
                La filastrocca è il nostro modo di raccontare questa storia:
                con parole semplici che parlano al cuore.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-12">
              {[
                { value: '1961', label: 'Anno di fondazione' },
                { value: '3', label: 'Generazioni' },
                { value: '∞', label: 'Piatti serviti con amore' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-5xl text-wine mb-2">{stat.value}</p>
                  <p className="text-dark/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md text-dark mb-6">
              Vieni a scrivere la tua storia
            </h2>
            <p className="text-lead mb-10">
              Ogni ospite porta con sé un nuovo capitolo della storia del Crotto Belvedere.
              Ti aspettiamo per condividere insieme i sapori della nostra tradizione.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cucina" className="btn-dark">
                Scopri il menu
              </Link>
              <Link to="/contatti" className="btn-outline">
                Prenota un tavolo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

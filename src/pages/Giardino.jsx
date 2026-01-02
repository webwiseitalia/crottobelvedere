import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Giardino() {
  return (
    <>
      <PageHero
        title="Il Giardino"
        subtitle="Estate al crotto"
      />

      {/* Introduction */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-forest/10 aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <div className="text-center p-8">
                <p className="font-display text-6xl text-forest/20 mb-2">80</p>
                <p className="text-forest/40 text-sm uppercase tracking-wide">Posti a sedere</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-subtle mb-6">Il nostro gioiello estivo</p>
              <h2 className="title-md text-dark mb-8">
                Un'oasi di verde
              </h2>
              <div className="divider-line mb-10" />

              <div className="space-y-6 text-lead">
                <p>
                  Il giardino del Crotto Belvedere è uno spazio magico che si apre durante
                  la bella stagione, trasformando il pranzo o la cena in un'esperienza
                  a contatto con la natura.
                </p>
                <p>
                  Situato sulle rive del fiume Mera, offre circa 80 posti a sedere
                  immersi nel verde degli alberi e nel suono rilassante dell'acqua che scorre.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {['80 posti', 'Riva del Mera', 'Apertura estiva'].map((tag, i) => (
                  <span key={i} className="bg-white px-4 py-2 text-forest font-medium text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="title-sm text-dark">L'esperienza estiva</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Natura', desc: 'Immersi nel verde, circondati dagli alberi' },
              { title: 'Relax', desc: 'Il suono del fiume per un pranzo rilassante' },
              { title: 'Sole', desc: 'Le belle giornate della Valchiavenna' },
              { title: 'Convivialità', desc: 'Spazio perfetto per gruppi e famiglie' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="inline-flex w-12 h-12 items-center justify-center bg-forest text-cream rounded-full mb-6 font-display text-xl">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-dark mb-2">{item.title}</h3>
                <p className="text-dark/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The River */}
      <section className="section-space bg-forest text-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-subtle text-cream/60 mb-6">Il fiume Mera</p>
            <h2 className="title-md mb-8">Pranzo con vista</h2>
            <div className="divider-line mx-auto mb-10" />

            <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
              <p>
                Il Mera è il fiume che attraversa la Valchiavenna, nascendo dal lago di Como
                e risalendo verso la Svizzera. Le sue acque cristalline e il suo scorrere
                costante creano una colonna sonora naturale per il vostro pranzo.
              </p>
              <p>
                Il giardino è il luogo perfetto per celebrare occasioni speciali durante
                l'estate: compleanni, anniversari, pranzi di famiglia. Con 80 posti
                a disposizione, possiamo accogliere anche gruppi numerosi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Note */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 border-l-4 border-warm">
              <h3 className="font-display text-xl text-dark mb-4">Apertura stagionale</h3>
              <p className="text-dark/70 leading-relaxed mb-4">
                Il giardino è aperto indicativamente da maggio a settembre, in base alle
                condizioni meteorologiche. Vi consigliamo di chiamare per verificare
                la disponibilità e prenotare il vostro tavolo all'aperto.
              </p>
              <p className="text-dark/70 leading-relaxed">
                In caso di maltempo, saremo lieti di accogliervi nelle nostre sale interne
                o sul terrazzo coperto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Spaces */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <p className="text-subtle mb-6">Altri spazi</p>
            <h2 className="title-sm text-dark">Scopri anche</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/tre-sale" className="bg-cream p-10 hover:shadow-lg transition-all group">
              <h3 className="font-display text-2xl text-dark mb-4 group-hover:text-forest transition-colors">Le Tre Sale</h3>
              <p className="text-dark/60 mb-6">Gli ambienti interni del crotto, perfetti tutto l'anno.</p>
              <span className="inline-flex items-center gap-2 text-forest text-sm">
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link to="/terrazzo" className="bg-cream p-10 hover:shadow-lg transition-all group">
              <h3 className="font-display text-2xl text-dark mb-4 group-hover:text-forest transition-colors">Terrazzo Coperto</h3>
              <p className="text-dark/60 mb-6">Pranzo all'aperto protetto dalle intemperie.</p>
              <span className="inline-flex items-center gap-2 text-forest text-sm">
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-wine text-cream">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md mb-6">
              Prenota nel giardino
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              I posti nel giardino sono molto richiesti durante l'estate.
              Prenota in anticipo per assicurarti un tavolo in riva al fiume.
            </p>
            <a href="tel:+390343335889" className="btn bg-cream text-wine hover:bg-white">
              Chiama per prenotare
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

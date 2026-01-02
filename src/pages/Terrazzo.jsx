import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Terrazzo() {
  return (
    <>
      <PageHero
        title="Terrazzo Coperto"
        subtitle="All'aperto, sempre"
      />

      {/* Introduction */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-subtle mb-6">Spazio semi-esterno</p>
              <h2 className="title-md text-dark mb-8">
                Pranzo all'aria aperta
              </h2>
              <div className="divider-line mb-10" />

              <div className="space-y-6 text-lead">
                <p>
                  Il terrazzo coperto del Crotto Belvedere è lo spazio ideale per chi desidera
                  pranzare all'aperto senza rinunciare al comfort. Protetto da una copertura
                  che ripara dal sole e dalla pioggia, il terrazzo permette di godere dell'aria
                  fresca e della vista sulla valle in ogni condizione meteorologica.
                </p>
                <p>
                  È l'ambiente perfetto per le mezze stagioni, quando le giornate di primavera
                  e autunno invitano a stare fuori ma il tempo può essere imprevedibile.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  'Circa 30 posti a sedere',
                  'Protezione da sole e pioggia',
                  'Vista sul verde circostante',
                  'Aperto primavera-autunno'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-dark/70">
                    <span className="w-6 h-6 bg-forest text-cream rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-forest/10 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-display text-6xl text-forest/20 mb-2">30</p>
                <p className="text-forest/40 text-sm uppercase tracking-wide">Posti a sedere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-space bg-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-sm text-dark mb-8">L'esperienza del terrazzo</h2>
            <div className="divider-line mx-auto mb-10" />
            <p className="text-lead mb-16">
              Pranzo o cena circondati dalla natura, con l'aria fresca della valle
              e il rumore del fiume Mera in sottofondo. Sul terrazzo potrete gustare
              tutti i piatti del nostro menu.
            </p>
            <div className="grid sm:grid-cols-3 gap-12">
              {[
                { title: 'Luce Naturale', desc: 'Goditi i pasti con la luce del giorno' },
                { title: 'Aria Fresca', desc: 'L\'aria pura delle montagne' },
                { title: 'Sempre Protetti', desc: 'Copertura da sole e pioggia' },
              ].map((item, i) => (
                <div key={i}>
                  <span className="inline-flex w-12 h-12 items-center justify-center bg-forest text-cream rounded-full mb-4 font-display text-xl">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg text-dark mb-2">{item.title}</h3>
                  <p className="text-dark/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Spaces */}
      <section className="section-space bg-dark text-cream">
        <div className="container-lg">
          <div className="text-center mb-16">
            <p className="text-subtle text-warm mb-6">Altri spazi</p>
            <h2 className="title-md">Scopri anche</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/tre-sale" className="bg-cream/10 p-10 hover:bg-cream/20 transition-colors group">
              <h3 className="font-display text-2xl mb-4 group-hover:text-warm transition-colors">Le Tre Sale</h3>
              <p className="text-cream/70 mb-6">Gli ambienti interni del crotto, perfetti tutto l'anno.</p>
              <span className="inline-flex items-center gap-2 text-warm text-sm">
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link to="/giardino" className="bg-cream/10 p-10 hover:bg-cream/20 transition-colors group">
              <h3 className="font-display text-2xl mb-4 group-hover:text-warm transition-colors">Giardino Estivo</h3>
              <p className="text-cream/70 mb-6">80 posti sulle rive del fiume Mera per l'estate.</p>
              <span className="inline-flex items-center gap-2 text-warm text-sm">
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-cream">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="title-md text-dark mb-6">
              Prenota sul terrazzo
            </h2>
            <p className="text-lead mb-10">
              Per assicurarti un tavolo sul terrazzo, ti consigliamo di prenotare
              in anticipo, soprattutto nei weekend.
            </p>
            <a href="tel:+390343335889" className="btn-dark">
              Chiama per prenotare
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

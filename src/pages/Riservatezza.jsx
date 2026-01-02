import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { siteData } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-warm py-12">
        <div className="container-wide">
          <Link to="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif text-cream font-light">Privacy Policy</h1>
              <p className="text-cream/60">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-wide py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 lg:p-12 shadow-sm"
          >
            <p className="text-dark/50 text-sm mb-8">Ultimo aggiornamento: {siteData.lastPolicyUpdate}</p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">1. Titolare del Trattamento</h2>
              <p className="text-dark/70 mb-4">Il Titolare del trattamento dei dati personali è:</p>
              <div className="bg-cream/50 p-6 rounded-lg">
                <p className="font-medium text-dark">{siteData.legalName}</p>
                <p className="text-dark/70">{siteData.legalAddress.full}</p>
                <p className="text-dark/70">Email: <a href={`mailto:${siteData.email}`} className="text-gold hover:underline">{siteData.email}</a></p>
                <p className="text-dark/70">Tel: <a href={`tel:${siteData.phoneClean}`} className="text-gold hover:underline">{siteData.phone}</a></p>
                <p className="text-dark/70">P.IVA: {siteData.vatNumber}</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

              <h3 className="text-lg font-medium text-dark mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
              <p className="text-dark/70 mb-4">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
              <ul className="list-disc pl-6 text-dark/70 space-y-1 mb-4">
                <li><strong className="text-dark">Nome e Cognome</strong> - per identificare l'interessato</li>
                <li><strong className="text-dark">Indirizzo Email</strong> - per rispondere alle richieste</li>
                <li><strong className="text-dark">Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
                <li><strong className="text-dark">Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-4 mb-6">
                <p className="text-dark/70 font-medium mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
                <ul className="list-disc pl-6 text-dark/70 space-y-1">
                  <li>Rispondere alle richieste di prenotazione</li>
                  <li>Fornire informazioni sui nostri servizi</li>
                  <li>Gestire la relazione commerciale</li>
                </ul>
              </div>

              <h3 className="text-lg font-medium text-dark mb-3">2.2 Base giuridica del trattamento</h3>
              <p className="text-dark/70">
                Il trattamento è basato sul <strong className="text-dark">consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
                l'invio del modulo di contatto, e sulla <strong className="text-dark">esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">3. Modalità di Trattamento</h2>
              <p className="text-dark/70 mb-4">
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
                finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p className="text-dark/70">
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
                autorizzati, perdita, distruzione o divulgazione.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">4. Conservazione dei Dati</h2>
              <p className="text-dark/70 mb-4">I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:</p>
              <ul className="list-disc pl-6 text-dark/70 space-y-2">
                <li><strong className="text-dark">Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                <li><strong className="text-dark">Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                <li><strong className="text-dark">Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">5. Comunicazione e Diffusione dei Dati</h2>
              <p className="text-dark/70 mb-4">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
              <ul className="list-disc pl-6 text-dark/70 space-y-1 mb-6">
                <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>

              <div className="bg-rust/10 border-l-4 border-rust p-4">
                <p className="font-medium text-dark mb-2">I tuoi dati NON verranno MAI:</p>
                <ul className="list-disc pl-6 text-dark/70 space-y-1">
                  <li>Venduti a terze parti</li>
                  <li>Condivisi con scopi di marketing</li>
                  <li>Utilizzati per invio di newsletter non richieste</li>
                  <li>Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">6. Diritti dell'Interessato</h2>
              <p className="text-dark/70 mb-4">In qualità di interessato, hai il diritto di:</p>
              <ul className="list-disc pl-6 text-dark/70 space-y-2">
                <li><strong className="text-dark">Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong className="text-dark">Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong className="text-dark">Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li><strong className="text-dark">Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                <li><strong className="text-dark">Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                <li><strong className="text-dark">Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                <li><strong className="text-dark">Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-4 mt-6">
                <p className="font-medium text-dark mb-2">Come esercitare i tuoi diritti:</p>
                <p className="text-dark/70">
                  Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.email}`} className="text-gold hover:underline">{siteData.email}</a> o tramite raccomandata A/R
                  all'indirizzo: {siteData.legalAddress.full}
                </p>
                <p className="text-dark/70 mt-2">Risponderemo entro <strong className="text-dark">30 giorni</strong> dalla ricezione della richiesta.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">7. Diritto di Reclamo</h2>
              <p className="text-dark/70 mb-4">
                Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
                trattamento dei tuoi dati violi il GDPR.
              </p>
              <div className="bg-cream/50 p-4 rounded-lg">
                <p className="font-medium text-dark">Garante per la protezione dei dati personali:</p>
                <p className="text-dark/70">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.garanteprivacy.it</a></p>
                <p className="text-dark/70">Email: garante@gpdp.it</p>
                <p className="text-dark/70">PEC: protocollo@pec.gpdp.it</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
              <p className="text-dark/70">
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
                consulta la nostra <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">9. Modifiche alla Privacy Policy</h2>
              <p className="text-dark/70">
                Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
                saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
                consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">10. Contatti</h2>
              <p className="text-dark/70 mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
              <div className="bg-cream/50 p-6 rounded-lg space-y-2">
                <p className="flex items-center gap-2 text-dark/70">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${siteData.email}`} className="text-gold hover:underline">{siteData.email}</a>
                </p>
                <p className="flex items-center gap-2 text-dark/70">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${siteData.phoneClean}`} className="text-gold hover:underline">{siteData.phone}</a>
                </p>
              </div>
            </section>

            <div className="text-center text-dark/50 text-sm pt-6 border-t border-dark/10">
              <p>
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs.
                101/2018
              </p>
            </div>
          </motion.div>

          {/* Bottom buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/" className="btn-outline text-dark border-dark hover:bg-dark hover:text-cream text-center">
              Torna alla Home
            </Link>
            <Link to="/cookie-policy" className="btn-solid text-center">
              Leggi la Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

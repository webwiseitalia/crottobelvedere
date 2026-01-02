import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { siteData } from '../constants/siteData'

export default function CookiePolicy() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif text-cream font-light">Cookie Policy</h1>
              <p className="text-cream/60">Informativa sull'utilizzo dei cookie</p>
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

            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">Cosa sono i Cookie?</h2>
              <p className="text-dark/70 mb-4">
                I cookie sono piccoli file di testo che i siti visitati inviano al tuo browser e che vengono memorizzati
                sul tuo dispositivo (computer, tablet, smartphone). Servono a migliorare la navigazione e a ricordare
                le tue preferenze.
              </p>
              <p className="text-dark/70">
                I cookie non danneggiano il tuo dispositivo e non contengono virus. Possono essere temporanei
                (cookie di sessione, eliminati alla chiusura del browser) o permanenti (cookie persistenti, con una
                scadenza definita).
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">1. Titolare del Trattamento</h2>
              <div className="bg-cream/50 p-6 rounded-lg">
                <p className="font-medium text-dark">{siteData.legalName}</p>
                <p className="text-dark/70">{siteData.legalAddress.full}</p>
                <p className="text-dark/70">Email: <a href={`mailto:${siteData.email}`} className="text-gold hover:underline">{siteData.email}</a></p>
                <p className="text-dark/70">P.IVA: {siteData.vatNumber}</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">2. Cookie Utilizzati</h2>
              <p className="text-dark/70 mb-6">Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento:</p>

              <div className="space-y-6">
                <div className="border border-dark/10 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-dark mb-2">Cookie Tecnici (Necessari)</h3>
                      <p className="text-dark/70 text-sm mb-3">
                        Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                      </p>
                      <div className="bg-cream/50 p-4 rounded-lg">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left border-b border-dark/10">
                              <th className="pb-2 font-medium text-dark">Cookie</th>
                              <th className="pb-2 font-medium text-dark">Durata</th>
                              <th className="pb-2 font-medium text-dark">Finalità</th>
                            </tr>
                          </thead>
                          <tbody className="text-dark/70">
                            <tr className="border-b border-dark/5">
                              <td className="py-2 font-mono text-xs">{siteData.cookieKey}</td>
                              <td className="py-2">1 anno</td>
                              <td className="py-2">Memorizza la scelta sui cookie</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-dark/10 p-6 rounded-lg bg-cream/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-dark mb-2">Cookie di Profilazione (Non utilizzati)</h3>
                      <p className="text-dark/70 text-sm">
                        Il nostro sito <strong className="text-dark">non utilizza</strong> cookie di profilazione,
                        tracciamento pubblicitario o cookie di terze parti per finalità di marketing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-dark/10 p-6 rounded-lg bg-cream/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-dark mb-2">Cookie Analitici (Non utilizzati)</h3>
                      <p className="text-dark/70 text-sm">
                        Il nostro sito <strong className="text-dark">non utilizza</strong> Google Analytics o altri
                        strumenti di analisi che raccolgono dati personali.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">3. Gestione dei Cookie</h2>
              <p className="text-dark/70 mb-4">
                Puoi gestire le preferenze sui cookie attraverso il banner che appare alla prima visita del sito.
                Inoltre, puoi modificare le impostazioni del tuo browser per accettare o rifiutare i cookie.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-4 mb-6">
                <p className="font-medium text-dark mb-2">Come disabilitare i cookie nel browser:</p>
                <ul className="list-disc pl-6 text-dark/70 space-y-1 text-sm">
                  <li><strong className="text-dark">Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li><strong className="text-dark">Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</li>
                  <li><strong className="text-dark">Safari:</strong> Preferenze → Privacy → Cookie</li>
                  <li><strong className="text-dark">Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
                </ul>
              </div>

              <div className="bg-rust/10 border-l-4 border-rust p-4">
                <p className="font-medium text-dark mb-2">Attenzione:</p>
                <p className="text-dark/70 text-sm">
                  Disabilitando i cookie tecnici, alcune funzionalità del sito potrebbero non funzionare correttamente.
                  Raccomandiamo di mantenere attivi almeno i cookie necessari.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">4. Cookie di Terze Parti</h2>
              <p className="text-dark/70 mb-4">
                Il nostro sito potrebbe contenere collegamenti a siti esterni (es. social network, mappe). Questi siti
                hanno le proprie politiche sui cookie, indipendenti dalla nostra. Ti consigliamo di consultare le
                rispettive cookie policy:
              </p>
              <ul className="list-disc pl-6 text-dark/70 space-y-2">
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    Google Maps - Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    Facebook - Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://help.instagram.com/1896641480634370" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    Instagram - Cookie Policy
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">5. Base Giuridica</h2>
              <p className="text-dark/70">
                I cookie tecnici sono installati sulla base del <strong className="text-dark">legittimo interesse</strong> del titolare
                a garantire il corretto funzionamento del sito (Art. 6, par. 1, lett. f del GDPR). Non richiedono il
                consenso preventivo dell'utente ai sensi dell'Art. 122 del Codice Privacy e del Provvedimento del
                Garante dell'8 maggio 2014.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">6. I tuoi Diritti</h2>
              <p className="text-dark/70 mb-4">In relazione ai dati raccolti attraverso i cookie, hai diritto di:</p>
              <ul className="list-disc pl-6 text-dark/70 space-y-1 mb-6">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare dati inesatti</li>
                <li>Cancellare i tuoi dati (\"diritto all'oblio\")</li>
                <li>Opporti al trattamento</li>
                <li>Proporre reclamo all'Autorità Garante</li>
              </ul>

              <div className="bg-cream/50 p-4 rounded-lg">
                <p className="font-medium text-dark mb-2">Per esercitare i tuoi diritti:</p>
                <p className="text-dark/70">
                  Scrivi a <a href={`mailto:${siteData.email}`} className="text-gold hover:underline">{siteData.email}</a> o
                  consulta la nostra <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">7. Modifiche alla Cookie Policy</h2>
              <p className="text-dark/70">
                Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno
                pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
                consultare periodicamente questa pagina.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-dark mb-4">8. Contatti</h2>
              <p className="text-dark/70 mb-4">Per qualsiasi domanda sui cookie utilizzati da questo sito:</p>
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
                Questa Cookie Policy è conforme al Regolamento (UE) 2016/679 (GDPR), al D.Lgs. 196/2003, e alle
                Linee Guida del Garante Privacy sui cookie del 10 giugno 2021.
              </p>
            </div>
          </motion.div>

          {/* Bottom buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/" className="btn-outline text-dark border-dark hover:bg-dark hover:text-cream text-center">
              Torna alla Home
            </Link>
            <Link to="/privacy-policy" className="btn-solid text-center">
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

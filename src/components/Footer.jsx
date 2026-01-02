import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const exploreLinks = [
    { name: 'Il Crotto', path: '/crotto' },
    { name: 'La Cucina', path: '/cucina' },
    { name: 'La Cantina', path: '/cantina' },
    { name: 'Gli Spazi', path: '/tre-sale' },
  ]

  const infoLinks = [
    { name: 'StayPiuro', path: '/staypiuro' },
    { name: 'Dove Siamo', path: '/dove-siamo' },
    { name: 'Bed & Crotto', path: '/bed-and-crotto' },
    { name: 'Contatti', path: '/contatti' },
  ]

  return (
    <footer className="bg-stone text-white/90">
      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl md:text-4xl tracking-tight">
                Crotto
              </span>
              <span className="font-serif text-3xl md:text-4xl italic text-terracotta ml-2">
                Belvedere
              </span>
            </Link>
            <p className="mt-8 text-white/50 leading-relaxed max-w-md text-body">
              Un angolo di tradizione nel cuore della Valchiavenna.
              Dal 1961 vi accogliamo con i sapori autentici della nostra terra,
              dove la montagna incontra la tavola.
            </p>
            <p className="mt-8 font-serif text-2xl italic text-gold">
              "Vi prende per la gola!"
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-label text-white/40 mb-6">Esplora</h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-[0.95rem]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-white/40 mb-6">Info</h4>
            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-[0.95rem]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-label text-white/40 mb-6">Contatti</h4>
            <div className="space-y-5 text-white/60 text-[0.95rem]">
              <p className="leading-relaxed">
                Via alla Chiesa, 6<br />
                23020 Prosto di Piuro (SO)<br />
                Italia
              </p>
              <div className="space-y-2">
                <p>
                  <a href="tel:+390343335889" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="text-terracotta">Tel</span> +39 0343 33589
                  </a>
                </p>
                <p>
                  <a href="tel:+393477092022" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="text-terracotta">Cell</span> +39 347 7092022
                  </a>
                </p>
              </div>
              <p>
                <a href="mailto:info@crottobelvedere.com" className="hover:text-white transition-colors">
                  info@crottobelvedere.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              © {currentYear} Belvedere S.R.L. — P.IVA 00730640141
            </p>
            <p className="text-white/30">
              Prosto di Piuro, Valchiavenna
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

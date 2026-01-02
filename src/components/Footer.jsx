import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Il Crotto', path: '/crotto' },
    { name: 'La Cucina', path: '/cucina' },
    { name: 'La Cantina', path: '/cantina' },
    { name: 'Gli Spazi', path: '/tre-sale' },
    { name: 'StayPiuro', path: '/staypiuro' },
    { name: 'Contatti', path: '/contatti' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ]

  return (
    <footer className="bg-black text-cream/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
      <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-64 h-64 rounded-full bg-rust/5 blur-3xl" />

      {/* Main Content */}
      <div className="container-wide py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand - Large */}
          <div className="lg:col-span-6">
            <Link to="/" className="inline-block">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="font-serif text-4xl lg:text-5xl font-light text-cream">
                  Crotto
                </span>
                <span className="font-serif text-4xl lg:text-5xl italic text-gold ml-3 font-light">
                  Belvedere
                </span>
              </motion.div>
            </Link>

            <p className="mt-10 text-cream text-lg font-light max-w-md leading-relaxed">
              Un angolo di tradizione nel cuore della Valchiavenna.
              Dal 1961 vi accogliamo con i sapori autentici della nostra terra.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="tel:+390343335889"
                className="btn-line text-cream hover:text-gold"
              >
                +39 0343 33589
              </a>
              <span className="text-cream/40">·</span>
              <a
                href="mailto:info@crottobelvedere.com"
                className="btn-line text-cream hover:text-gold"
              >
                Email
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-eyebrow text-gold mb-8">Navigazione</p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream hover:text-gold transition-colors duration-300 text-lg font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-gold mb-8">Dove siamo</p>
            <address className="not-italic text-cream text-lg font-light leading-relaxed">
              Via alla Chiesa, 6<br />
              23020 Prosto di Piuro<br />
              Sondrio, Italia
            </address>

            <div className="mt-10">
              <p className="text-eyebrow text-gold mb-4">Orari</p>
              <p className="text-cream font-light">
                Mar — Dom<br />
                12:00 — 14:30<br />
                19:00 — 22:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/10">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream font-light">
              © {currentYear} Belvedere S.R.L. — P.IVA 00730640141
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.path} className="flex items-center gap-4">
                  <Link
                    to={link.path}
                    className="text-sm text-cream hover:text-gold transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-cream/40">·</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm text-cream font-light">
              Valchiavenna · Alpi italiane
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

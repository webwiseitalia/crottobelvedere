import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Il Crotto', path: '/crotto' },
    { name: 'La Cucina', path: '/cucina' },
    { name: 'La Cantina', path: '/cantina' },
    { name: 'Gli Spazi', path: '/tre-sale' },
    { name: 'StayPiuro', path: '/staypiuro' },
    { name: 'Contatti', path: '/contatti' },
  ]

  const isHomePage = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || !isHomePage
            ? 'py-4'
            : 'py-6 lg:py-8'
        }`}
        style={{
          background: isScrolled || !isHomePage
            ? 'rgba(10, 10, 10, 0.95)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
          backdropFilter: isScrolled || !isHomePage ? 'blur(20px)' : 'none',
        }}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 group">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-baseline gap-3"
              >
                <span className="font-serif text-xl lg:text-2xl tracking-tight text-cream font-light">
                  Crotto
                </span>
                <span className="font-serif text-xl lg:text-2xl italic text-gold font-light">
                  Belvedere
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-cream hover:text-gold'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="tel:+390343335889"
                  className="btn-outline py-3 px-6"
                >
                  Prenota
                </a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[60] p-3 -mr-3"
              aria-label="Menu"
            >
              <div className="w-7 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 9 : 0,
                  }}
                  className="block h-px w-full bg-cream origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scaleX: isMenuOpen ? 0 : 1,
                  }}
                  className="block h-px w-full bg-cream"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -9 : 0,
                  }}
                  className="block h-px w-full bg-cream origin-center"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Full screen cinematic */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden fixed inset-0 z-50 bg-black"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
              <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-rust/5 blur-3xl" />
            </div>

            <div className="h-full flex flex-col justify-center items-center gap-2 p-8 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="overflow-hidden"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block font-serif text-4xl md:text-5xl font-light transition-colors duration-300 py-3 ${
                        isActive ? 'text-gold' : 'text-cream/60 hover:text-cream'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="mt-12"
              >
                <a href="tel:+390343335889" className="btn-solid">
                  Prenota un tavolo
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-cream/30 text-sm mb-2">Via alla Chiesa, 6</p>
                <p className="text-cream/30 text-sm">Prosto di Piuro (SO)</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

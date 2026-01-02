import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-cream/95 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
        style={{
          boxShadow: isScrolled || !isHomePage ? '0 1px 0 rgba(44, 40, 37, 0.08)' : 'none'
        }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-baseline"
              >
                <span className={`font-serif text-2xl md:text-[1.7rem] tracking-tight transition-colors duration-300 ${
                  isScrolled || isMenuOpen || !isHomePage ? 'text-stone' : 'text-white'
                }`}>
                  Crotto
                </span>
                <span className={`font-serif text-2xl md:text-[1.7rem] italic ml-2 transition-colors duration-300 ${
                  isScrolled || isMenuOpen || !isHomePage ? 'text-terracotta' : 'text-white/80'
                }`}>
                  Belvedere
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${
                        isScrolled || !isHomePage
                          ? isActive ? 'text-stone' : 'text-stone/60 hover:text-stone'
                          : isActive ? 'text-white' : 'text-white/70 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="tel:+390343335889"
                  className={`text-[0.75rem] tracking-widest uppercase font-medium transition-all duration-300 px-6 py-3 border ${
                    isScrolled || !isHomePage
                      ? 'border-stone/20 text-stone hover:bg-stone hover:text-cream'
                      : 'border-white/30 text-white hover:bg-white hover:text-stone'
                  }`}
                >
                  Prenota
                </a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative z-[60] p-2 transition-colors ${
                isScrolled || isMenuOpen || !isHomePage ? 'text-stone' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-cream z-50"
          >
            <div className="h-full flex flex-col justify-center items-center gap-6 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-serif text-3xl md:text-4xl transition-colors duration-300 ${
                        isActive ? 'text-terracotta' : 'text-stone/50 hover:text-stone'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8"
              >
                <a href="tel:+390343335889" className="btn-primary">
                  Prenota un tavolo
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8 text-center text-sm text-stone/50"
              >
                <p>Via alla Chiesa, 6 - Prosto di Piuro (SO)</p>
                <p className="mt-1">+39 0343 33589</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

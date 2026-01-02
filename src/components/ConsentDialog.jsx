import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { siteData } from '../constants/siteData'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Policy pages where blur should NOT be applied
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(siteData.cookieKey)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieKey, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieKey, 'rejected')
    setIsVisible(false)
  }

  // Add/remove blur effect on body
  useEffect(() => {
    if (isVisible && !isPolicyPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isVisible, isPolicyPage])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Blur overlay - only on non-policy pages */}
          {!isPolicyPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] backdrop-blur-md bg-black/40"
            />
          )}

          {/* Cookie Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6"
          >
            <div className="max-w-4xl mx-auto bg-dark border border-cream/10 shadow-2xl rounded-2xl overflow-hidden">
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-cream mb-1">Utilizziamo i Cookie</h3>
                    <p className="text-cream text-sm">Per offrirti la migliore esperienza possibile</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-cream mb-6 leading-relaxed">
                  Il nostro sito utilizza esclusivamente <strong className="text-gold">cookie tecnici</strong> necessari
                  al funzionamento. Non utilizziamo cookie di profilazione o tracciamento pubblicitario.
                </p>

                {/* Links */}
                <p className="text-cream text-sm mb-8">
                  Per maggiori informazioni, consulta la nostra{' '}
                  <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>
                  {' '}e la{' '}
                  <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>.
                </p>

                {/* Buttons - same size and style */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-gold text-dark font-medium py-4 px-8 rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Accetta
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-gold text-dark font-medium py-4 px-8 rounded-lg hover:bg-gold/90 transition-colors text-center"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

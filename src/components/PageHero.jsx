import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image, dark = true }) {
  return (
    <section className={`relative ${image ? 'min-h-[60vh]' : 'pt-32 pb-20 md:pt-40 md:pb-28'} ${dark ? 'bg-stone' : 'bg-cream'} overflow-hidden`}>
      {/* Background Image */}
      {image && (
        <>
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone/90 via-stone/50 to-stone/30" />
          </div>
          <div className="relative z-10 min-h-[60vh] flex items-end pb-16 md:pb-24">
            <div className="container-custom">
              <div className="max-w-3xl">
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-label text-white/60 mb-4"
                  >
                    {subtitle}
                  </motion.p>
                )}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="heading-xl text-white"
                >
                  {title}
                </motion.h1>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Without Image */}
      {!image && (
        <div className="container-custom">
          <div className="max-w-3xl">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-label mb-4 ${dark ? 'text-terracotta' : 'text-terracotta'}`}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`heading-xl ${dark ? 'text-white' : 'text-stone'}`}
            >
              {title}
            </motion.h1>
          </div>
        </div>
      )}
    </section>
  )
}

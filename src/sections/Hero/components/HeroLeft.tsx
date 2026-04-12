import { motion } from 'motion/react'
import RotatingText from '../../../components/RotatingText'

const HeroLeft = () => {
  return (
    <div className="w-full flex items-center lg:items-start flex-col gap-3">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        Software Engineer
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-5xl font-bold block lg:hidden text-hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        Building
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-5xl font-bold flex flex-row items-start xl:items-center gap-3 text-hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="hidden lg:block">Building</span>
        <RotatingText
          texts={['Responsive', 'Secure', 'Scalable']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-custom-secondary text-hero-bg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        Web Applicaitons.
      </motion.h1>
      <motion.p
        className="text-sm lg:text-lg py-6 max-w-xl text-custom-secondary"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        Full-stack developer. MERN specialist. Lifelong learner.{' '}
      </motion.p>

      <motion.button
        className="btn bg-custom-primary text-hero-btn-text max-w-36 rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        Get In Touch
      </motion.button>
    </div>
  )
}
export default HeroLeft

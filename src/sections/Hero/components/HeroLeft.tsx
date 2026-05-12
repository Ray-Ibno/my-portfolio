import { motion } from 'motion/react'
import RotatingText from '../../../components/RotatingText'

const HeroLeft = () => {
  return (
    <motion.div
      className="w-full flex items-center lg:items-start flex-col gap-3"
      initial={{ opacity: 0.1, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 className="font-sans text-4xl md:text-5xl font-bold text-[#f0f0f0])">
        Software Engineer
      </h1>
      <h1 className="font-sans text-4xl md:text-5xl font-bold block lg:hidden text-hero-text">
        Building
      </h1>
      <h1 className="font-sans text-4xl md:text-5xl font-bold flex flex-row items-center gap-3 text-hero-text">
        <span className="hidden lg:block">Building</span>
        <RotatingText
          texts={['Responsive', 'Secure', 'Scalable']}
          mainClassName="font-sans px-2 sm:px-2 md:px-3 bg-white/30 text-hero-bg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </h1>
      <h1 className="font-sans text-4xl md:text-5xl font-bold text-hero-text">Web Applicaitons.</h1>
      <p className="text-sm lg:text-lg py-6 max-w-xl text-neutral-300">
        Full-stack developer. MERN specialist. Lifelong learner.{' '}
      </p>

      <a href="#contact-section">
        <button className="btn bg-custom-primary text-hero-btn-text max-w-36 rounded-lg border-none">
          Get In Touch
        </button>
      </a>
    </motion.div>
  )
}
export default HeroLeft

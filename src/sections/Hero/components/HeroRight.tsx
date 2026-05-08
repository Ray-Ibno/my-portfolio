import { motion, useMotionValue, useSpring } from 'motion/react'

const HeroRight = () => {
  const x = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 50, damping: 5 })

  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className="relative"
    >
      <motion.img
        fetchPriority="high"
        src="/assets/spaceship.png"
        alt="Spaceship"
        width={300}
        height={300}
        style={{ x }}
        className="max-w-sm rounded-lg"
        animate={{
          rotate: [3, -3],
          x: [-100, 100],
        }}
        transition={{
          delay: 0.8,
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.img
        fetchPriority="high"
        src="/assets/spaceshiplight.png"
        alt="Spaceship light"
        width={300}
        height={300}
        style={{ x: springX }}
        className="absolute top-34"
      />
    </motion.div>
  )
}
export default HeroRight

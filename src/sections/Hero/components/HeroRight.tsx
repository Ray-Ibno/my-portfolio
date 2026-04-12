import { motion } from 'motion/react'

const HeroRight = () => {
  return (
    <motion.img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    />
  )
}
export default HeroRight

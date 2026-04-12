import HeroLeft from './components/HeroLeft'
import HeroRight from './components/HeroRight'
import ParalaxBackground from './components/ParalaxBackground'

const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full z-10">
        <HeroRight />
        <HeroLeft />
      </div>
      <ParalaxBackground />
    </section>
  )
}
export default Hero

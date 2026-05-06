import HeroLeft from './components/HeroLeft'
import HeroRight from './components/HeroRight'
import ParalaxBackground from './components/ParalaxBackground'

const Hero = () => {
  return (
    <section id="home-section" className="hero min-h-screen sm:px-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-full z-10">
        <HeroRight />
        <HeroLeft />
      </div>
      <ParalaxBackground />
    </section>
  )
}
export default Hero

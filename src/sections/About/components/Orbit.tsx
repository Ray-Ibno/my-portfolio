import { OrbitingCircles } from '../../../components/ui/orbiting-circles'
import { Particles } from '../../../components/ui/particles'
import { skills } from '../../../constants'

const Orbit = () => {
  return (
    <div className="grid-black-color grid-5 ralative">
      <div className="z-10 w-[50%]">
        <p className="headtext">Tech Stack</p>
        <p className="subtext">
          I am a Full-Stack Developer specializing in the MERN stack. My expertise is built on
          developing production-ready applications where I prioritize React’s flexibility and the
          strict type safety of TypeScript to ensure high code quality.
        </p>
      </div>
      <div className="absolute inset-y-0 md:inset-y-9 w-full h-full inset-s-[50%] md:scale-125">
        <div className="relative flex h-60 w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles iconSize={40}>
            {skills.map((skill, index) => (
              <Icon key={index} src={`assets/logos/${skill}.webp`} />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={1.5}>
            {skills.map((skill, index) => (
              <Icon key={index} src={`assets/logos/${skill}.webp`} />
            ))}
          </OrbitingCircles>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
    </div>
  )
}

const Icon = ({ src }: { src: string }) => (
  <img src={src} alt="icon" className="rounded-sm hover:scale-100 duration-200" />
)

export default Orbit

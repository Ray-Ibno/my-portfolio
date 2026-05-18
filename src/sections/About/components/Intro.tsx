import { BorderBeam } from '../../../components/ui/border-beam'

const Intro = () => {
  return (
    <div className="flex items-end grid-default-color grid-1">
      <img
        src="assets/coding-bg.webp"
        alt="coding screen image"
        className="absolute scale-[1.75] -right-20 -top-4 md:scale-[5] md:left-5 md:inset-y-10 lg:scale-[3]"
      />
      <div className="z-10">
        <p className="headtext">Hello, I'm Alradenn Ibno</p>
        <p className="subtext">
          I am a Web Developer with 5 years of focused, self-directed study, specializing in MERN
          stack. My approach centers on technical maturity: I don't just write code that works; I
          write code that is maintainable, scalable, and follows industry-standard clean coding
          practices. I am looking to bring my disciplined work ethic and 'forever student' mindset
          to a professional team where I can contribute to high-quality codebases from day one.
        </p>
      </div>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-custom-primary to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-custom-secondary to-transparent"
      />
    </div>
  )
}
export default Intro

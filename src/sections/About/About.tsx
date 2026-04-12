const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-bg.jpg"
            alt="coding screen image"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[5] md:left-5 md:inset-y-10 lg:scale-[3]"
          />
          <div className="z-10">
            <p className="headtext">Hello, I'm Alradenn Ibno</p>
            <p className="subtext">
              I am a Web Developer with 5 years of focused, self-directed study, specializing in
              MERN stack. My approach centers on technical maturity: I don't just write code that
              works; I write code that is maintainable, scalable, and follows industry-standard
              clean coding practices. I am looking to bring my disciplined work ethic and 'forever
              student' mindset to a professional team where I can contribute to high-quality
              codebases from day one.
            </p>
          </div>
        </div>
        <div className="grid-default-color grid-2"></div>
        <div className="grid-black-color grid-3"></div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  )
}
export default About

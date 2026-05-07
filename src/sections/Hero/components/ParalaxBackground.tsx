const ParalaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <img
          src="/assets/hero-bg.jpg"
          alt="hero background"
          className="absolute inset-0 w-full h-screen z-0 object-cover object-center"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
export default ParalaxBackground

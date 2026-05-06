const ParalaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen z-0"
          style={{
            backgroundImage: 'url(/assets/hero-bg.jpg)',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </section>
  )
}
export default ParalaxBackground

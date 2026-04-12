const ParalaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* sky */}
        <div
          className="absolute inset-0 w-full h-screen z-0"
          style={{
            backgroundImage: 'url(/assets/sky.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
        {/* far mountain */}
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: 'url(/assets/mountain-3.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
        {/* planets */}
        <div
          className="absolute inset-0 z-2"
          style={{
            backgroundImage: 'url(/assets/planets.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
        {/* middle mountain */}
        <div
          className="absolute inset-0 z-2"
          style={{
            backgroundImage: 'url(/assets/mountain-2.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
        {/* closer mountain */}
        <div
          className="absolute inset-0 z-3"
          style={{
            backgroundImage: 'url(/assets/mountain-1.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </section>
  )
}
export default ParalaxBackground

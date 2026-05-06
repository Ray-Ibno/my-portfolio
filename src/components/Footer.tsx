import { socials } from '../constants'

const Footer = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-between gap-5 pb-10 text-sm text-neutral-400 section-spacing c-space">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />

      <div className="flex gap-3">
        {socials.map((social, index) => (
          <a href={social.href} target="_blank" key={index}>
            <social.icon size={24} />
          </a>
        ))}
      </div>
      <div className="flex gap-2">
        <p>contact email: alradennibno@gmail.com</p>
        <p>|</p>
        <a href="#home-section" className="text-neutral-400 underline">
          <p>back to top</p>
        </a>
      </div>
      <p>© 2026 Alradenn Ibno. All Rights Reserved.</p>
    </section>
  )
}
export default Footer

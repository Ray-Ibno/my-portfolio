import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import { EducationList } from '../../constants'
import InfoCard from './components/InfoCard'
import { RetroGrid } from '../../components/ui/retro-grid'
import { BorderBeam } from '../../components/ui/border-beam'
import { LineShadowText } from '../../components/ui/line-shadow-text'

const Education = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['end end', 'start start'] })
  return (
    <section id="education-section" className="section-spacing c-space flex scroll-mt-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-heading">My Education</h2>
        <div ref={sectionRef} className="relative p-5 h-full">
          <motion.div
            id="scroll-indicator"
            style={{
              scaleY: scrollYProgress,
              originY: 0,
            }}
            className="absolute w-px top-5 left-1.5 bottom-5 bg-white"
          />

          <ul className="w-full h-full flex flex-col justify-between">
            {EducationList.map((education, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <div className="absolute left-[0.5px] w-3 h-3 rounded-full bg-white outline-5 outline-black" />
                  <InfoCard educationInfo={education} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[50%] relative overflow-hidden hidden lg:block rounded-xl">
        <div className="absolute left-10 top-10">
          <h1 className="text-xl 2xl:text-4xl leading-none font-semibold tracking-tighter text-balance text-green-500">
            <LineShadowText className="italic" shadowColor="#ffff">
              Searching
            </LineShadowText>{' '}
            <LineShadowText className="italic" shadowColor="#ffff">
              For
            </LineShadowText>{' '}
            <LineShadowText className="italic" shadowColor="#ffff">
              Knowledge...
            </LineShadowText>
          </h1>
        </div>
        <RetroGrid darkLineColor="violet" />
        <BorderBeam duration={4} size={400} />
      </div>
    </section>
  )
}
export default Education

import { useInView } from 'react-intersection-observer'
import { DottedMap } from '../../../components/ui/dotted-map'
import { markers } from '../../../constants'

const Map = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <div ref={ref} className="grid-default-color grid-3">
      <div className="z-10 w-[50%]">
        <p className="headtext">Time Zone</p>
        <p className="subtext">
          I am based in the Philippines and open to remote work worldwide. I am comfortable
          adjusting my schedule to meet project needs
        </p>
      </div>
      <div className="absolute inset-0">{inView && <DottedMap markers={markers} pulse />}</div>
    </div>
  )
}
export default Map

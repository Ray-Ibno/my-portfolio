import { useRef } from 'react'
import { Confetti, type ConfettiRef } from '../../../components/ui/confetti'
import CopyEmailButton from './CopyEmailButton'

const CopyEmail = () => {
  const confettiRef = useRef<ConfettiRef>(null)

  return (
    <div className="grid-special-color grid-4">
      <div className="flex flex-col items-center justify-center gap-4 size-full">
        <p className="text-center headtext">Do you want to start a project together?</p>
        <CopyEmailButton callback={confettiRef} />
      </div>

      <Confetti ref={confettiRef} className="absolute top-0 left-0 z-0 size-full" />
    </div>
  )
}
export default CopyEmail

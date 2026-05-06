import { useState, type RefObject } from 'react'
import { BiCopy } from 'react-icons/bi'
import { TbCopyCheckFilled } from 'react-icons/tb'
import { RippleButton } from '../../../components/ui/ripple-button'
import type { ConfettiRef } from '../../../components/ui/confetti'

type CopyEmailButtonProps = {
  callback: RefObject<ConfettiRef>
}

const CopyEmailButton = ({ callback }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false)
  const email = 'alradennibno@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)

    callback.current?.fire({})

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <RippleButton
      rippleColor="green"
      onClick={copyToClipboard}
      className={`relative px-1 py-4 text-sm text-center rounded-full font-extralight ${copied ? 'bg-green-500' : 'bg-black'} w-48 cursor-pointer overflow-hidden text-white border-none`}
    >
      <p className="flex items-center justify-center gap-2">
        {copied ? <TbCopyCheckFilled size={20} /> : <BiCopy size={20} />}
        {copied ? 'Email Copied' : 'Copy Email Address'}
      </p>
    </RippleButton>
  )
}
export default CopyEmailButton

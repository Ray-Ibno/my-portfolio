import { BiCopy } from 'react-icons/bi'
import { TbCopyCheckFilled } from 'react-icons/tb'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

type CopyToClipboardProps = {
  text: string
}

const CopyToClipboardBtn = ({ text }: CopyToClipboardProps) => {
  const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch((error) => {
        console.error('Failed to copy!', error)
      })
  }
  return (
    <button onClick={handleCopy(text)} className="cursor-pointer">
      {copiedText ? <TbCopyCheckFilled size={20} /> : <BiCopy size={20} />}
    </button>
  )
}
export default CopyToClipboardBtn

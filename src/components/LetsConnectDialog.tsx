import { socials } from '../constants'
import CopyToClipboardBtn from './CopyToClipboardBtn'
import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const LetsConnectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button className="btn bg-custom-primary text-hero-btn-text rounded-lg border-none">
            Let's Connect
          </button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Social links</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {socials.map((social, index) => (
            <div className="flex items-center flex-1 gap-2" key={index}>
              <social.icon />
              <Label htmlFor="link">{social.name}:</Label>
              <Input id="link" defaultValue={social.href} readOnly />
              <CopyToClipboardBtn text={social.href} />
            </div>
          ))}
        </div>
        <DialogFooter className="sm:justify-start bg-custom-primary">
          <DialogClose
            render={
              <Button type="button" className={'cursor-pointer'}>
                Close
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default LetsConnectDialog


import {
  Popover as BasePopover,
  PopoverContent,
  PopoverTrigger,
} from "./base"

type BasePopoverProps = React.ComponentProps<typeof BasePopover>

interface PopoverProps extends BasePopoverProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Popover({ trigger, children, ...props }: PopoverProps) {
  return (
    <BasePopover {...props}>
      <PopoverTrigger asChild>
        {
          trigger
        }
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {
          children
        }
      </PopoverContent>
    </BasePopover>
  )
}

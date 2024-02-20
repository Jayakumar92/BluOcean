import {
    HoverCard as BaseHoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "./base"

type BaseHoverCardProps = React.ComponentProps<typeof BaseHoverCard>
type HoverCardContentProps = React.ComponentProps<typeof HoverCardContent>


interface PopoverProps extends BaseHoverCardProps {
    trigger: React.ReactNode
    children: React.ReactNode
    contentProps?: HoverCardContentProps;
}

export function HoverCard({ trigger, children, contentProps, ...props }: PopoverProps) {
    return (
        <BaseHoverCard {...props}>
            <HoverCardTrigger asChild>
                {
                    trigger
                }
            </HoverCardTrigger>
            <HoverCardContent className="w-80" {...contentProps}>
                {
                    children
                }
            </HoverCardContent>
        </BaseHoverCard>
    )
}

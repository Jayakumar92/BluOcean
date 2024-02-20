import {
    Tooltip as BaseTooltip,
    TooltipProps as BaseTooltipProps,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./base"

interface TooltipProps extends BaseTooltipProps {
    content: string
    children: React.ReactNode
}

export function Tooltip({ content, children, ...rest }: TooltipProps) {
    return (
        <TooltipProvider {...rest}>
            <BaseTooltip>
                <TooltipTrigger asChild>
                    {
                        children
                    }
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </BaseTooltip>
        </TooltipProvider>
    )
}

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import {
    DropdownMenu as BaseDropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./base"

type BaseDropdownMenuProps = React.ComponentProps<typeof BaseDropdownMenu>
type MenuItem = {
    value: string,
    item: string
}
interface DropdownMenuProps extends BaseDropdownMenuProps {
    items: MenuItem[]
}

export function DropdownMenu({ items, ...props }: DropdownMenuProps) {
    return (
        <BaseDropdownMenu {...props}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size={'icon'}>
                    <Icon name={'MoreVertical'} className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" >
                {
                    items.map(({ value, item }: MenuItem) => (
                        <DropdownMenuItem key={value}>{item}</DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </BaseDropdownMenu>
    )
}

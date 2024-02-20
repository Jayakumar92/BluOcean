import { Button } from "@/components/ui/button"
import {
    Sheet as BaseSheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "./base"

type BaseSheetProps = React.ComponentProps<typeof BaseSheet>
type SheetContentProps = React.ComponentProps<typeof SheetContent>


interface SheetProps extends BaseSheetProps, SheetContentProps {
    title: string
    description?: string
    children?: React.ReactNode
}

export function Sheet({ title, description, children, side, ...props }: SheetProps) {
    return (
        <BaseSheet {...props} >
            <SheetContent side={side}>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>{description}</SheetDescription>
                </SheetHeader>
                {
                    children
                }
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </BaseSheet>
    )
}

import { Button } from "@/components/ui/button"
import {
    Drawer as BaseDrawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./base"


type BaseDrawerProps = React.ComponentProps<typeof BaseDrawer>

type DrawerProps = {
    title: string
    description?: string
    trigger?: React.ReactNode
} & BaseDrawerProps


function Drawer({ trigger, title, description, ...props }: DrawerProps) {
    return (
        <BaseDrawer {...props}>
            <DrawerTrigger asChild>
                {trigger}
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </BaseDrawer>
    )
}

export { Drawer }

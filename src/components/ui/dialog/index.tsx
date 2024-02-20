import { Button } from "@/components/ui/button"
import {
    Dialog as BaseDialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./base"

type BaseDialogProps = React.ComponentProps<typeof BaseDialog>


interface DialogProps extends BaseDialogProps {
    trigger?: React.ReactNode
    title: string
    description?: string
}

function Dialog({ title, description, trigger, children, ...props }: DialogProps) {
    return (
        <BaseDialog {...props} >
            <DialogTrigger asChild>
                {
                    trigger
                }
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {
                    children
                }
                <DialogFooter>                    
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </BaseDialog>
    )
}


export { Dialog }
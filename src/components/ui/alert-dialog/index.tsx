import {
    AlertDialog as BaseAlertDialog,
    AlertDialogProps as BaseAlertDialogProps,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./base"

interface AlertDialogProps extends BaseAlertDialogProps {
    title: string
    description: string
    action?: string
    onCancelClick?: () => void
    onActionClick?: () => void
}

export function AlertDialog({ title, description, action = 'Continue', onCancelClick, onActionClick, ...rest }: AlertDialogProps) {
    return (
        <BaseAlertDialog  {...rest}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description} </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancelClick}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onActionClick}>{action}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </BaseAlertDialog>
    )
}

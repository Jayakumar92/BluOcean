import { Label } from "@/components/ui/label"
import { RadioGroup as BaseRadioGroup, RadioGroupItem } from "./base"

type RadioBaseGroupProps = React.ComponentProps<typeof BaseRadioGroup>


type GroupItem = {
    id: string
    value: string
    label: string
}

interface RadioGroupProps extends RadioBaseGroupProps {
    items: GroupItem[]
}

export function RadioGroup({ items, ...props }: RadioGroupProps) {
    return (
        <BaseRadioGroup  {...props}>
            {
                items.map(({ id, value, label }) => (
                    <div key={id} className="flex items-center space-x-2">
                        <RadioGroupItem value={value} id={id} />
                        <Label htmlFor={id}>{label}</Label>
                    </div>
                ))
            }
        </BaseRadioGroup>
    )
}

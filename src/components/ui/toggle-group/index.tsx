
import {
  ToggleGroup as BaseToggleGroup,
  ToggleGroupSingleProps,
  ToggleGroupMultipleProps,
  ToggleGroupItem,
} from "./base"
import { Icon } from '@/components/ui/icon'
import { icons } from 'lucide-react'
import { VariantProps } from "class-variance-authority"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleItem<T> = {
  value: string;
  item: T;
};

// Define a union type for possible variants
type ItemVariant = 'icon' | 'text';

// Define a generic type for ToggleGroupProps
type ToggleGroupProps<T> = {
  itemVariant?: ItemVariant;
  items: ToggleItem<T>[];
} & (ToggleGroupSingleProps | ToggleGroupMultipleProps) & VariantProps<typeof toggleVariants>

type IconKeyType = keyof Omit<typeof icons, "createReactComponent">;


function ToggleGroup<T>({ itemVariant = 'icon', items, ...props }: ToggleGroupProps<T>) {
  return (
    <BaseToggleGroup   {...props}>
      {
        items.map(({ value, item }: any) => {
          return (
            <ToggleGroupItem value={value} key={value}>
              <>
                {itemVariant === 'icon' && <Icon name={item} className="h-4 w-4" />}
                {itemVariant === 'text' && <small>{item}</small>}
              </>
            </ToggleGroupItem>
          )
        })
      }
    </BaseToggleGroup>
  )
}


export {
  ToggleGroup,
  type IconKeyType,
  type ToggleItem
}
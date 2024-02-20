import { SelectRoot, SelectTrigger, SelectValue, SelectContent, SelectItem, ParentSelectProps } from './base'

type Option = {
  item: string,
  value: string
}

export interface SelectProps extends ParentSelectProps {
  options: Option[],
}

function Select({ options, ...props }: SelectProps) {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {
          options.map(({ value, item }: Option) => (
            <SelectItem key={value} value={value}>{item}</SelectItem>
          ))
        }
      </SelectContent>
    </SelectRoot>
  )
}
export { Select }

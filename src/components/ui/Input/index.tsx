import * as React from "react"
import { cn } from "@/components/utils"
import { Label } from '@/components/ui/label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, className, type, label, ...props }, ref) => {

    const inputElement = (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        id={id}
        ref={ref}
        {...props}
      />
    );

    return label ? (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        {inputElement}
      </div>
    ) : inputElement;
  }
)
Input.displayName = "Input"

export { Input }

import * as React from "react"
import { Calendar as BaseCalender } from "./base"

type CalenderProps = React.ComponentProps<typeof BaseCalender>

function Calendar({ ...props }: CalenderProps) {
  return (
    <BaseCalender
      {...props}
      className="rounded-md w-fit border shadow"
    />
  )
}

export { type CalenderProps, Calendar } 
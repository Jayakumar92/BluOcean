import React from "react"
import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AccordionProps as BaseAccordionProps
} from './base'

type Item = {
    id: string
    title: string
    content: string
}

interface AccordionProps {
    items: Item[]
}
const Accordion = React.forwardRef<
    React.ElementRef<BaseAccordionProps>,
    React.ComponentPropsWithoutRef<BaseAccordionProps> & AccordionProps
>(({ items, ...props }, ref) => (
    <BaseAccordion {...props} ref={ref}>
        {
            items.map(({ id, title, content }: Item) => (
                <AccordionItem value={id} key={id}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>{content}
                    </AccordionContent>
                </AccordionItem>
            ))
        }
    </BaseAccordion>
))

export { Accordion }

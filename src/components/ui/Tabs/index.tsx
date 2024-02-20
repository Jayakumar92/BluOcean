import {
    Tabs as BaseTabs,
    TabsProps as BaseTabsProps,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./base"

type TabItem = {
    value: string;
    title: string;
    content: React.ReactNode
};

interface TabsProps extends BaseTabsProps {
    tabs: TabItem[]
}

function Tabs({ tabs, ...props }: TabsProps) {
    return (
        <BaseTabs {...props}>
            <TabsList className="grid w-full grid-cols-2">
                {
                    tabs.map(({ value, title }: TabItem) => (
                        <TabsTrigger key={value} value={value}>{title}</TabsTrigger>
                    ))
                }
            </TabsList>
            {
                tabs.map(({ content, value }: TabItem) => (
                    <TabsContent key={value} value={value}>
                        {content}
                    </TabsContent>
                ))
            }
        </BaseTabs>
    )
}

export { Tabs }
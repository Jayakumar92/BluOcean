import { icons, LucideProps } from 'lucide-react';

type IconsName = keyof Omit<typeof icons, "createReactComponent">;

interface IconProps extends LucideProps {
    name: IconsName
}

const Icon = ({ name, color, size, ...props }: IconProps) => {
    const LucideIcon = icons[name];
    return <LucideIcon color={color} size={size}  {...props} />;
};

export { Icon, type IconProps, type IconsName };
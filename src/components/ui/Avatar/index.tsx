import {
    Avatar as BaseAvatar,
    AvatarFallback,
    AvatarImage,
} from "./base"

type AvatarProps = {
    src: string
    alt: string
    fallback: string
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
    return (
        <BaseAvatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </BaseAvatar>
    )
}

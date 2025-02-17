import { Heading } from "@/components/atoms/heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image"

interface ServicePostItemProps {
    image: string;
    image_right: boolean;
    title: string;
    tags?: { tags: string }[],
    description?: string;
}

export const ServicePostItem = ({
    image,
    image_right,
    title,
    tags,
    description,
}: ServicePostItemProps) => {
    return (
        <div className={cn('flex gap-5 flex-col-reverse', image_right ? 'md:flex-row-reverse' : 'md:flex-row')}>
            <div className="md:w-1/2">
                <Image
                    src={image}
                    alt={title}
                    width={648}
                    height={340}
                    className="rounded-3xl border w-full h-full bg-cover bg-center"
                />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-start gap-y-2 md:gap-y-4 lg:p-14">
                <Heading as="h4" className="">{title}</Heading>
                {description && <p className="text-gray2 text-sm md:text-base">{description}</p>}
                {tags && tags.map((tag) => (
                    <Badge variant={'tag'} key={tag.tags}>{tag.tags}</Badge>
                ))}
            </div>
        </div>
    )
}

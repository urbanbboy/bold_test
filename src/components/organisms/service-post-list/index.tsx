import { Heading } from "@/components/atoms/heading";
import { ServicePostItem } from "@/components/molecules/service-post-item";

export interface IServicePostItem {
    image: string;
    image_right: boolean;
    title: string;
    tags?: { tags: string }[],
    description?: string;
}

interface ServicePostListProps {
    title: string;
    items: IServicePostItem[];
}

export const ServicePostList = ({
    title,
    items
}: ServicePostListProps) => {
    return (
        <div className="w-full max-w-[1920px] flex justify-center px-4 md:px-16 lg:px-32 py-5 md:py-20">
            <div className="max-w-[1280px] flex flex-col justify-center items-center gap-y-5 lg:gap-y-10">
                <Heading as="h2" className="text-primary">{title}</Heading>
                <div className="w-full flex flex-col gap-y-10 md:gap-y-24">
                    {items.map((post) => (
                        <ServicePostItem
                            key={post.title}
                            image={post.image}
                            image_right={post.image_right}
                            title={post.title}
                            description={post.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

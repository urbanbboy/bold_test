import { Heading } from "@/components/atoms/heading";
import { ServicePostItem } from "@/components/molecules/service-post-item";

export interface IServicePostItem {
    image: string;
    image_right: boolean;
    title: string;
    sub_title?: string;
    tags?: { tags: string }[],
    description?: string;
    has_button?: boolean;
}

interface ServicePostListProps {
    title: string;
    description?: string;
    items: IServicePostItem[];
}

export const ServicePostList = ({
    title,
    description,
    items
}: ServicePostListProps) => {
    return (
        <div className="w-full max-w-[1920px] flex justify-center px-4 md:px-16 lg:px-32 py-5 md:py-20">
            <div className="max-w-[1280px] flex flex-col justify-center items-center gap-y-5 lg:gap-y-10">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <Heading as="h2" className="md:col-span-5 space-y-5">{title}</Heading>
                    <p className="md:col-span-5 text-gray2 flex items-start text-sm md:text-base">{description}</p>
                </div>
                <div className="w-full flex flex-col gap-y-12 md:gap-y-24">
                    {items.map((post) => (
                        <ServicePostItem
                            key={post.title}
                            image={post.image}
                            image_right={post.image_right}
                            title={post.title}
                            sub_title={post.sub_title}
                            description={post.description}
                            tags={post.tags}
                            has_button={post.has_button}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

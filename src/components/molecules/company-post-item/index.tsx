import { Badge } from "@/components/ui/badge";
import Image from "next/image";


interface CompanyPostItemProps {
    image: string
    title: string;
    company_name: string;
    created_at: string;
    tags: { tags: string }[];
    social_media: {
        title: string;
        logo: React.ReactNode;
        subscribers: string;
    }[];
}


export const CompanyPostItem = (props: CompanyPostItemProps) => {
    const {
        title,
        image,
        company_name,
        created_at,
        tags,
        social_media,
    } = props

    return (
        <div className="p-4">
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    src={image}
                    alt={'case image'}
                    width={535}
                    height={320}
                    className="rounded-2xl w-full h-auto object-cover"
                />
                <div className="absolute top-7 left-6 flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <Badge variant={'post'} className="text-sm" key={tag.tags}>
                            {tag.tags}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="flex items-center mt-3 gap-1 flex-nowrap overflow-hidden">
                {social_media.map((social) => (
                    <Badge
                        variant={'tag'}
                        className="flex items-center gap-1 whitespace-nowrap overflow-hidden"
                        key={social.title}
                    >
                        <span>{social.logo}</span>
                        <span className="truncate">{social.subscribers} {social.title}</span>
                    </Badge>
                ))}
            </div>
            <div className="mt-3">
                <h3 className="text-xl md:text-2xl font-bold line-clamp-2">{title}</h3>
                <div className="flex items-center gap-2 mt-2 text-gray text-sm md:text-base">
                    <span className="text-sm">{company_name}</span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                    <span className="text-sm">{created_at}</span>
                </div>
            </div>
        </div>
    )
}

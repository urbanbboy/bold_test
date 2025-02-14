import { LinkButtonWithIcon } from "@/components/atoms/link-button-with-icon";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { BreadcrumbProps } from "./type";

interface PageTitleLayoutProps {
    title: string;
    sub_title?: string;
    button_text: string;
    bg_image?: string;
    breadcrumb?: BreadcrumbProps[]
}

export const PageTitleLayout = ({
    title,
    sub_title,
    button_text,
    breadcrumb
}: PageTitleLayoutProps) => {
    return (
        <div className="h-screen max-w-[1920px] flex justify-center items-center bg-black/30">
            <div className="max-w-[1280px] h-screen flex flex-col justify-center md:items-center gap-y-10 px-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumb?.map((item, idx) => (
                            <div key={idx} className="flex">
                                <BreadcrumbItem>
                                    {idx !== breadcrumb.length - 1
                                        ? <BreadcrumbLink href={item.href}>{item.text}</BreadcrumbLink>
                                        : <BreadcrumbPage>{item.text}</BreadcrumbPage>
                                    }
                                </BreadcrumbItem>
                                {idx !== breadcrumb.length - 1 && <BreadcrumbSeparator />}
                            </div>

                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-secondary text-4xl md:text-5xl lg:text-7xl font-bold md:text-center">{title}</h1>
                {sub_title && <h3 className="text-muted-foreground text-sm md:text-md lg:text-lg md:text-center">{sub_title}</h3>}
                <LinkButtonWithIcon>
                    {button_text}
                </LinkButtonWithIcon>
            </div>
        </div>
    )
}

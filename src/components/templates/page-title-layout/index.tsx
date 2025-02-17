import { ButtonWithIcon } from "@/components/atoms/button-with-icon";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { BreadcrumbProps } from "./type";
import { Heading } from "@/components/atoms/heading";

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
            <div className="max-w-[1280px] h-screen flex flex-col justify-center md:items-center gap-y-6 px-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumb?.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
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
                <Heading as="h1" className="text-secondary md:text-center">{title}</Heading>
                {sub_title && <h3 className="text-gray text-sm md:text-md lg:text-lg md:text-center">{sub_title}</h3>}
                <ButtonWithIcon className="mt-3">
                    {button_text}
                </ButtonWithIcon>
            </div>
        </div>
    )
}

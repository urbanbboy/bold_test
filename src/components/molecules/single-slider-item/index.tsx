
import { LinkButtonWithIcon } from "@/components/atoms/link-button-with-icon";
import { CarouselItem } from "@/components/ui/carousel"

interface SingleSliderProps {
    index: number;
    title: string;
    sub_title: string;
    button_text: string;
    button_href: string;
    image: string;
    is_active?: boolean;
}

export const SingleSliderItem = ({
    index,
    title,
    sub_title,
    button_href,
    button_text,
    image,
}: SingleSliderProps) => {

    return (
        <CarouselItem key={index}>
            <div
                className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20"></div>
                <div className="flex flex-col text-left gap-y-5 md:gap-y-10 z-50 pl-14 md:pl-0 md:mx-40 max-w-[1280px]">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">{title}</h1>
                    <p className="text-lg md:text-2xl text-[#BEC2CE] mt-2">{sub_title}</p>
                    <LinkButtonWithIcon
                        href={button_href}
                    >
                        {button_text}
                    </LinkButtonWithIcon>
                </div>
            </div>
        </CarouselItem>
    )
}

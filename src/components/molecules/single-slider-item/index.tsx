import { Heading } from "@/components/atoms/heading";
import { ButtonWithIcon } from "@/components/atoms/button-with-icon";
import { CarouselItem } from "@/components/ui/carousel"

interface SingleSliderProps {
    index: number;
    title: string;
    sub_title: string;
    button_text: string;
    image: string;
    is_active?: boolean;
    onScrollToFeedback: () => void;
}

export const SingleSliderItem = ({
    index,
    title,
    sub_title,
    button_text,
    image,
    onScrollToFeedback
}: SingleSliderProps) => {

    return (
        <CarouselItem key={index}>
            <div
                className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20"></div>
                <div className="flex flex-col text-left mb-3 gap-y-2 md:gap-y-10 z-50 px-5 md:pl-0 md:mx-40 max-w-[1280px]">
                    <Heading as="h1" className="font-bold text-white">{title}</Heading>
                    <p className="text-lg md:text-2xl text-gray mt-2">{sub_title}</p>
                    <ButtonWithIcon onClick={onScrollToFeedback}>
                        {button_text}
                    </ButtonWithIcon>
                </div>
            </div>
        </CarouselItem>
    )
}

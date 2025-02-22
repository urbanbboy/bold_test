import { Card, CardContent } from "@/components/ui/card"
import CardSVG from '@/assets/info-card/card.svg'
import Image from "next/image"
import { Heading } from "@/components/atoms/heading"

interface InfoCardProps {
    title: string;
    sub_title?: string;
    description: string;
    image?: string;
    video?: string;
    card_title: string;
    card_description: string;
    card_icon: React.ReactNode;
}

export const InfoCard = ({
    title,
    sub_title,
    description,
    image,
    video,
    card_title,
    card_description,
}: InfoCardProps) => {
    return (
        <section className="max-w-[1920px] flex justify-center items-center bg-background-gray">
            <div className="max-w-[1280px] flex flex-col gap-8 md:gap-16 px-5 py-8 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <div className="md:col-span-7 space-y-5">
                        <Heading as="h2" className=" text-3xl md:text-4xl lg:text-5xl">
                            {title}
                        </Heading>
                        {sub_title && <div className="text-accent uppercase text-base md:text-xl">{sub_title}</div>}
                    </div>
                    <p className="md:col-span-3 text-gray2 flex items-end text-sm md:text-base">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                    <Card className="rounded-2xl lg:h-[336px] xl:h-[404px]">
                        <CardContent className="h-full flex flex-col justify-center space-y-5 py-10 lg:py-14 px-10">
                            <CardSVG className='' />
                            <Heading as="h4">{card_title}</Heading>
                            <p className="text-gray2">
                                {card_description}
                            </p>
                        </CardContent>
                    </Card>
                    {video && <div>Если есть видео, то видео</div>}
                    {image &&
                        <Image
                            src={image}
                            alt={"Our philosophy"}
                            width={648}
                            height={404}
                            className="rounded-2xl w-full"
                        />
                    }
                </div>
            </div>
        </section>
    )
}

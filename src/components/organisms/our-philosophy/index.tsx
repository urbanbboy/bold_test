import { Card, CardContent } from "@/components/ui/card"
import CardSVG from '@/assets/our-philosophy/card.svg'
import MobileCardSVG from '@/assets/our-philosophy/mobile_card.svg'
import Image from "next/image"

export const OurPhilosophy = () => {
    return (
        <div className="max-w-[1920px] flex justify-center items-center">
            <div className="max-w-[1280px] flex flex-col gap-8 md:gap-16 px-5 py-14 lg:py-36">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <h1 className="md:col-span-7 text-3xl md:text-4xl lg:text-6xl font-bold">
                        Результаты, которые работают на ваш бизнес
                    </h1>
                    <p className="md:col-span-3 text-gray flex items-end text-sm md:text-base">
                        Мы понимаем, что для предпринимателей важны не просто идеи, а измеримые результаты - рост заявок, привлечение клиентов и увеличение прибыли.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
                    <Card className="rounded-2xl">
                        <CardContent className="h-full flex flex-col justify-center space-y-5 py-8 px-10">
                            <MobileCardSVG className='md:hidden' />
                            <CardSVG className='hidden md:flex' />
                            <h1 className="text-4xl font-bold">Наша философия</h1>
                            <p className="text-gray ">
                                Работать для вашего успеха, предлагая стратегии, которые решают именно ваши бизнес-задачи и обеспечивают конкретные достижения.
                            </p>
                        </CardContent>
                    </Card>
                    <Image
                        src={"/images/about_page/our_philosophy.webp"}
                        alt={"Our philosophy"}
                        width={648}
                        height={404}
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import AwardBgSVG from '@/assets/backgrounds/award_bg.svg';
import DiplomaBgSVG from '@/assets/backgrounds/diploma_bg.svg';

export const Award = () => {
    return (
        <div className='w-full max-w-[1920px] flex justify-center items-center px-4 mb-20 md:mb-40'>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-5 max-h-[600px] md:max-h-full text-white bg-[#0D0D0D] rounded-3xl py-14 px-6 overflow-hidden">
                <div className="flex flex-col justify-center items-center max-w-2xl xl:pl-24 z-50">
                    <Badge className="mb-6 p-2 rounded-3xl bg-transparent border border-gray-600 text-xl uppercase">Получили премию</Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">Маркетинговая компания года</h1>
                    <h3 className="text-xl lg:text-2xl text-center font-bold mt-4">на The Great Award of the Year 2023!</h3>
                </div>
                <div className="relative z-50">
                    <DiplomaBgSVG />
                    <Image className="absolute -top-20 md:top-14 left-1/4 md:hidden rounded-2xl mt-32" src={'/images/main_page/mobile_diploma.jpeg'} alt="award" width={303} height={215} />
                    <Image className="absolute top-1/4 left-14 hidden md:block rounded-2xl" src={'/images/main_page/diploma.jpeg'} alt="award" width={475} height={338} />
                </div>
                <AwardBgSVG className="absolute z-0" />
            </div>
        </div>
    )
}
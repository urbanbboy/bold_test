import { MarketingChapter } from "@/components/molecules/marketing-department-chapter"
import MarketingDepartmentBg from '@/assets/backgrounds/marketing_department.svg'
import { Heading } from "@/components/atoms/heading"

const marketingData = {
    title: "Bold Brands International ваш внешний отдел маркетинга",
    sub_title: "Мы понимаем особенности бизнеса в Центральной Азии и помогаем компаниям расти.",
    chapters: [
        {
            number: '01',
            title: "Создаём уникальные решения под ваш бизнес"
        },
        {
            number: '02',
            title: "Придаём больше прозрачности и управляемости бизнесу"
        },
        {
            number: '03',
            title: "Достигаем устойчивых финансовых результатов"
        },
    ]
}

export const MarketingDepartment = () => {
    return (
        <section aria-labelledby="marketing-department" className="relative flex justify-center p-4 md:px-16 lg:px-40">
            <MarketingDepartmentBg id='marketing-department' className="absolute top-3/4 md:top-32 left-0 -z-50 max-w-[1920px]" />
            <div className="flex flex-col gap-y-16 w-full max-w-[1280px] py-14 md:py-36">
                <div className="flex flex-col md:flex-row gap-y-5 gap-x-10">
                    <Heading as="h2">
                        {marketingData.title}
                    </Heading>
                    <p className="flex items-end text-gray2 text-lg lg:text-2xl">
                        {marketingData.sub_title}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {marketingData.chapters.map((chapter) => (
                        <MarketingChapter
                            key={chapter.number}
                            number={chapter.number}
                            title={chapter.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

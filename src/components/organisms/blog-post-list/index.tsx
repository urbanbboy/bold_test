import { Heading } from "@/components/atoms/heading"
import { BlogPostItem } from "@/components/molecules/blog-post-item"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

const data = [
    {
        id: 1,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 2,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 3,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 4,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 5,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 6,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 7,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 8,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 9,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 10,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 11,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 12,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
    {
        id: 13,
        title: 'Для жизни. Мясников пояснил, почему нельзя совсем отказываться от соли',
        description: 'В эфире программы “О самом главном” Александр Мясников рассказал о нюансах',
        date: '11.03.2024',
        image: '/images/main_page/diploma.jpg'
    },
]

export const BlogPostList = () => {
    const t = useTranslations("BlogPage")
    const pageSize = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedPosts = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="max-w-[1328px] m-auto px-5 mb-10">
            <div>
                <Heading as="h2">{t("title")}</Heading>
                <p className="text-gray2 text-sm md:text-base mt-3">{t("sub_title")}</p>
            </div>
            <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-10">
                {paginatedPosts.map((card) => (
                    <BlogPostItem
                        key={card.id}
                        {...card}
                    />
                ))}
            </article>
            {paginatedPosts.length < 1 && <div className="flex justify-center items-center min-h-[250px]">По вашему запросу ничего не найдено</div>}
            <div className="flex justify-between items-center mt-7">
                <span className="text-gray2">{t("totalPosts")} {data.length}</span>
                <div className="flex justify-end items-center gap-2">
                    <Button
                        className="bg-background-gray2 hover:bg-graphic-gray"
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft />
                    </Button>

                    <div className="text-sm whitespace-nowrap">
                        {currentPage} <span className="text-graphic-gray">/ {totalPages}</span>
                    </div>

                    <Button
                        className="bg-background-gray2 hover:bg-graphic-gray"
                        variant="ghost"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>

        </div>
    )
}
import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardItemProps {
    image: React.ReactNode;
    number: string;
    title: string;
    description: string;
}

export const ServiceCardItem = ({
    image,
    number,
    title,
    description
}: ServiceCardItemProps) => {
    return (
        <Card className="flex flex-col xl:flex-row gap-4 p-6 rounded-3xl hover:shadow-xl transition-all duration-300">
            <div className="w-20 h-20 md:w-[140px] md:h-[140px] md:m-auto">
                {image}
            </div>
            <CardContent className="flex flex-col justify-center gap-y-1 md:gap-y-3 p-0">
                <span className="text-graphic-gray2">{number}</span>
                <Heading as="h4" className="text-primary text-lg md:text-xl">{title}</Heading>
                <SubTitle>
                    {description}
                </SubTitle>
            </CardContent>
        </Card>
    )
}

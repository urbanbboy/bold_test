import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SmmTeamMemberProps {
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
}: SmmTeamMemberProps) => {
    return (
        <Card className="flex flex-col xl:flex-row rounded-3xl hover:shadow-xl transition-all duration-300">
            <CardHeader className="">
                {image}
            </CardHeader>
            <CardContent className="flex flex-col justify-center pt-6 gap-y-1">
                <span className="text-graphic-gray2">{number}</span>
                <Heading as="h4" className="text-primary text-lg md:text-xl">{title}</Heading>
                <SubTitle>
                    {description}
                </SubTitle>
            </CardContent>
        </Card>
    )
}

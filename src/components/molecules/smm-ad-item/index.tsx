import { Heading } from "@/components/atoms/heading";
import { SubTitle } from "@/components/atoms/sub-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface SmmAdItemProps {
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const SmmAdItem = ({
    image,
    icon,
    title,
    description
}: SmmAdItemProps) => {
    return (
        <Card className="rounded-2xl max-w-[421px] bg-transparent">
            <CardHeader className="relative p-0">
                <Image
                    src={image}
                    alt={title}
                    width={421}
                    height={267}
                    className="rounded-2xl"
                />
                <span className="absolute top-3 left-3 bg-rose-500 p-2 rounded-2xl">
                    {icon}
                </span>
            </CardHeader>
            <CardContent className="mt-4 space-y-3">
                <Heading as="h4" className="text-primary">{title}</Heading>
                <SubTitle>{description}</SubTitle>
            </CardContent>
        </Card>
    )
}

import Image from "next/image";

interface CaseImageItemProps {
    image: string;
    description: string;
}

export const CaseImageItem = ({
    image,
    description
}: CaseImageItemProps) => {

    return (
        <div className="flex flex-col gap-y-5">
            {image ? (
                <Image
                    src={image}
                    alt={description}
                    width={480}
                    height={400}
                    className="bg-background-gray2 rounded-md"
                    // md:h-[400px] object-cover
                />
            ) : (
                <div className="bg-background-gray2 w-[480px] h-[400px] rounded-md" />
            )}
            <p className="text-gray2 text-sm md:text-base">{description}</p>
        </div>
    )
}

import Image from "next/image";
import { FC } from "react";

interface CompanyMemberProps {
    name: string,
    position: string;
    image: string;
}

export const CompanyMember: FC<CompanyMemberProps> = ({
    name,
    position,
    image
}) => {
    return (
        <div className="p-4">
            <div className="relative border-none flex justify-center rounded-2xl grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                    src={image}
                    alt={'case image'}
                    width={308}
                    height={460}
                    className="rounded-2xl w-full h-auto object-cover"
                />
                <div className="absolute bottom-5 left-5 z-50">
                    <div className="flex flex-col gap-0.5">
                        <div className="text-white text-base">{name}</div>
                        <div className="text-white/70 text-xs">{position}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

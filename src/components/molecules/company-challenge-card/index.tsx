import { cn } from "@/lib/utils";

interface ChallengeCardProps {
    logo: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    idx: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
    logo,
    title,
    description,
    className,
    idx,
}) => {
    return (
        <div
            className={cn(
                'relative border hover:shadow-lg hover:border-transparent shadow-[#D1D7E2] hover:cursor-pointer transition-all duration-300 rounded-3xl px-4 py-10 text-center w-[335px] h-auto xl:w-[421px] lg:h-auto line-clamp-6 flex flex-col items-center justify-center gap-2 lg:gap-4',
                idx === 2 ? 'xl:mr-40' : '',
                idx === 3 ? 'xl:ml-40' : '',
                className
            )}
        >
            <div className="mb-2">{logo}</div>
            <h3 className="text-[28px] leading-[1.2] font-semibold">{title}</h3>
            <p className="text-base leading-tight font-thin text-gray overflow-hidden text-ellipsis max-h-24">{description}</p>
        </div>
    );
};

export default ChallengeCard;

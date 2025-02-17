import { cn } from "@/lib/utils";

interface StatItemProps {
    title: string;
    sub_title: string;
    icon: React.ReactNode;
    idx: number;
}

export const StatItem = ({
    title,
    sub_title,
    icon,
    idx
}: StatItemProps) => {
    return (
        <div 
            className={cn(
                'relative',
                idx === 0 ? '2xl:ml-80' : '',
                idx === 3 ? ' 2xl:mr-80' : ''
            )}
        >
            {icon}
            <div className='absolute top-1/4 left-1/4 w-64 space-y-3'>
                <h1 className="text-4xl">{title}</h1>
                <p className="text-gray text-base">{sub_title}</p>
            </div>
        </div>
    )
}

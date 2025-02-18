import { cn } from "@/lib/utils";

interface StatItemProps {
    title: string;
    sub_title: string;
    icon: React.ReactNode;
    mobile_icon: React.ReactNode;
    idx: number;
    isService?: boolean;
}

export const StatItem = ({
    title,
    sub_title,
    icon,
    mobile_icon,
    idx,
    isService
}: StatItemProps) => {
    return (
        <div
            className={cn(
                'relative',
                idx === 0 ? '2xl:ml-80' : '',
                idx === 3 ? ' 2xl:mr-80' : ''
            )}
        >
            <span className="hidden md:block">{icon}</span>
            <span className="block md:hidden">{mobile_icon}</span>
            <div className={cn(
                'absolute left-10 md:left-1/4 w-64 space-y-3 text-center md:text-start',
                isService ? 'top-32 md:top-1/3' : 'top-20 md:top-1/4'
            )}>
                {isService
                    ? <>
                        <p className="text-gray text-sm md:text-base">{sub_title}</p>
                        <h1 className="text-3xl md:text-4xl">{title}</h1>
                    </>
                    : <>
                        <h1 className="text-3xl md:text-4xl">{title}</h1>
                        <p className="text-gray text-sm md:text-base">{sub_title}</p>
                    </>
                }
            </div>
        </div>
    )
}

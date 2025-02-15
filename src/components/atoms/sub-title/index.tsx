import { cn } from "@/lib/utils";

interface SubTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SubTitle = ({
    children,
    className,
}: SubTitleProps) => {
    return (
        <div className={cn(
            'text-muted-foreground text-sm md:text-base',
            className
        )}>
            {children}
        </div>
    )
}

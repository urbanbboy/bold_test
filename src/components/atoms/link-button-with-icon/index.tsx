import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link"
import { ButtonHTMLAttributes } from "react";

interface LinkButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href: string;
    children: React.ReactNode;
}

export const LinkButtonWithIcon = ({
    href,
    children,
    className,
    ...props
}: LinkButtonWithIconProps) => {
    return (
        <Button
            asChild
            className={cn(
                'bg-rose-600 hover:bg-rose-700 text-lg px-3 py-6 rounded-2xl w-fit',
                className
            )}
            {...props}
        >
            <Link href={href}>
                {children}
                <div className="bg-white text-black p-2 rounded-lg">
                    <ChevronRight />
                </div>
            </Link>
        </Button>
    )
}

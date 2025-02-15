import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-primary-foreground font-bold", {
    variants: {
        variant: {
            h1: "text-4xl md:text-5xl lg:text-6xl",
            h2: "text-2xl md:text-4xl lg:text-5xl",
            h3: "text-xl md:text-3xl",
            h4: "text-xl md:text-2xl"
        },
    },
    defaultVariants: {
        variant: "h1",
    },
});

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4";
    className?: string;
    children: React.ReactNode;
} & VariantProps<typeof headingVariants>;

export const Heading = ({ as: Tag = "h1", className, children }: HeadingProps) => {
    return <Tag className={cn(headingVariants({ variant: Tag }), className)}>
        {children}
    </Tag>;
};

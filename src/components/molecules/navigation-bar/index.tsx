"use client"

import * as React from "react";
import Link from "next/link";
import BrandingIcon from '@/assets/dropdown/dropdown_1.svg';
import DigitalPromotionIcon from '@/assets/dropdown/dropdown_2.svg';
import VideoProductionIcon from '@/assets/dropdown/dropdown_3.svg';
import WebDevIcon from '@/assets/dropdown/dropdown_4.svg';
import MarketingPromotionIcon from '@/assets/dropdown/dropdown_5.svg';
import CRMIcon from '@/assets/dropdown/dropdown_6.svg';




import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PackageOpen } from "lucide-react";

interface ComponentsProps {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

const components: ComponentsProps[] = [
    {
        title: "Брендинг",
        href: "/services/branding",
        icon: <BrandingIcon />
    },
    {
        title: "Digital продвижение",
        href: "/services/smm",
        icon: <DigitalPromotionIcon />
    },
    {
        title: "Видеопродакшн",
        href: "/services/video-production",
        icon: <VideoProductionIcon />
    },
    {
        title: "Веб-разработка и дизайн",
        href: "/services/site-creating",
        icon: <WebDevIcon />
    },
    {
        title: "Комплексное маркетинговое продвижение",
        href: "/services/marketing-support",
        icon: <MarketingPromotionIcon />
    },
    {
        title: "Внедрение CRM системы",
        href: "/services/crm",
        icon: <CRMIcon />
    },
    {
        title: "SEO-оптимизация",
        href: "/services/seo",
        icon: <PackageOpen />
    },
]

export const NavigationBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className='hidden lg:flex'>
                <NavigationMenuItem>
                    <Link href="/home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Главная
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            О нас
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/cases" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Кейсы
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[350px] gap-2 p-3">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    icon={component.icon}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Контакты
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "flex items-center gap-2 select-none space-y- 1 rounded-md p-3 leading-normal no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {icon && <span className="w-5 h-5">{icon}</span>}
                    <div className="text-lg font-normal leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


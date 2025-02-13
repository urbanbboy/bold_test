"use client"

import * as React from "react";
import Link from "next/link";
import BrandingIcon from '@/assets/dropdown/dropdown_1.svg';
import DigitalPromotionIcon from '@/assets/dropdown/dropdown_2.svg';
import VideoProductionIcon from '@/assets/dropdown/dropdown_3.svg';
import WebDevIcon from '@/assets/dropdown/dropdown_4.svg';
import MarketingPromotionIcon from '@/assets/dropdown/dropdown_5.svg';
import CRMIcon from '@/assets/dropdown/dropdown_6.svg';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LinkProps {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

interface innerLinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    linkTitle: string,
    linkHref: string,
    linkIcon?: React.ReactNode
}

const innerLinks: LinkProps[] = [
    { title: "Брендинг", href: "/services/branding", icon: <BrandingIcon /> },
    { title: "Digital продвижение", href: "/services/digital", icon: <DigitalPromotionIcon /> },
    { title: "Видеопродакшн", href: "/docs/primitives/progress", icon: <VideoProductionIcon /> },
    { title: "Веб-разработка и дизайн", href: "/docs/primitives/scroll-area", icon: <WebDevIcon /> },
    { title: "Комплексное маркетинговое продвижение", href: "/docs/primitives/tabs", icon: <MarketingPromotionIcon /> },
    { title: "Внедрение CRM системы", href: "/docs/primitives/tooltip", icon: <CRMIcon /> },
];

const links: LinkProps[] = [
    { title: "Главная", href: "/" },
    { title: "О нас", href: "/about" },
    { title: "Кейсы", href: "/cases" },
]

export const MobileNavigationBar = () => {
    return (
        <nav className="mt-8 space-y-2 font-bold">
            {links.map((link) => (
                <LinkItem
                    className="text-lg"
                    key={link.title}
                    linkTitle={link.title}
                    linkHref={link.href}
                />
            ))}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                    <AccordionTrigger className="text-lg font-medium">Услуги</AccordionTrigger>
                    <AccordionContent className="flex flex-col space-y-1 pl-4">
                        {innerLinks.map((link) => (
                            <LinkItem
                                key={link.title}
                                linkTitle={link.title}
                                linkHref={link.href}
                                linkIcon={link.icon}
                            />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <LinkItem 
                linkTitle={"Контакты"} 
                linkHref={"/contacts"}
            />
        </nav>
    );
};

const LinkItem = ({
    linkTitle,
    linkHref,
    linkIcon,
    className
}: innerLinksProps) => {
    return (
        <Button key={linkTitle} variant={'ghost'} className={cn('flex justify-start text-base w-full rounded-none border-b-2 hover:rounded-md', className)}>
            <Link href={linkHref} className="flex items-center gap-x-2">
                {linkIcon && linkIcon}
                <span>{linkTitle}</span>
            </Link>
        </Button>
    )
}
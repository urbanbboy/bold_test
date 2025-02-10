"use client";

import { Logo } from "@/components/atoms/logo"
import { LanguageSelect } from "@/components/molecules/language-select"
import { MenuDrawer } from "@/components/molecules/menu-drawer"
import { NavigationBar } from "@/components/molecules/navigation-bar"
import { useEffect, useState } from "react"

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 w-full max-w-[1920px] m-auto z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}>
            <div className="flex justify-between items-center p-5 md:px-14 md:py-7">
                <Logo />
                <NavigationBar />
                <div className="hidden lg:flex gap-1">
                    <LanguageSelect />
                </div>
                <div className="flex lg:hidden">
                    <MenuDrawer />
                </div>
            </div>

        </div>
    )
}

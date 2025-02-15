"use client";

import { Logo } from "@/components/atoms/logo";
import { LanguageSelect } from "@/components/molecules/language-select";
import { MenuSheet } from "@/components/molecules/menu-sheet";
import { NavigationBar } from "@/components/molecules/navigation-bar";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollUpDistance, setScrollUpDistance] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const deltaY = lastScrollY - currentScrollY;

            if (deltaY > 0) {
                setScrollUpDistance(prev => prev + deltaY);
                if (scrollUpDistance + deltaY > 50) {
                    setIsVisible(true);
                }
            } else {
                setScrollUpDistance(0);
                if (currentScrollY > 50) {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, scrollUpDistance]);

    return (
        <div
            className={`fixed top-0 left-0 right-0 w-full max-w-[1920px] m-auto z-50 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } bg-black/30 backdrop-blur-md shadow-md`}
        >
            <div className="flex justify-between items-center p-5 md:px-14 md:py-7">
                <Logo />
                <NavigationBar />
                <div className="flex">
                    <LanguageSelect />
                    <div className="flex lg:hidden">
                        <MenuSheet />
                    </div>
                </div>
            </div>
        </div>
    );
};

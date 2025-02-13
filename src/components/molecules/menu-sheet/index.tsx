'use client'

import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MobileLogo } from "@/components/atoms/logo"
import { MobileNavigationBar } from "../mobile-navigation-bar"
import { LanguageSelect } from "../language-select"

export const MenuSheet = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger asChild>
                <Button variant={'ghost'} className="hover:bg-white/30">
                    <Menu size={32} style={{ width: '32px', height: "32px", color: '#FFF' }} />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-screen">
                <SheetTitle className="flex items-center">
                    <MobileLogo />
                    <LanguageSelect isMobile />
                </SheetTitle>
                <MobileNavigationBar />
            </SheetContent>
        </Sheet>
    )
}


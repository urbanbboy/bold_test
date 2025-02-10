'use client'

import { Logo } from "@/components/atoms/logo"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { MobileNavigationBar } from "../mobile-navigation-bar"

export const MenuDrawer = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}
            direction="right"
        >
            <DrawerTrigger>
                {open
                    ? <Menu size={32} className="rotate-90 text-white" />
                    : <Menu size={32} className="text-white" />
                }
            </DrawerTrigger>
            <DrawerContent className="w-full p-5">
                <DrawerHeader>
                    <DrawerTitle className="flex justify-between">
                        <Logo />
                        <DrawerClose>
                            <X />
                        </DrawerClose>
                    </DrawerTitle>
                </DrawerHeader>
                <MobileNavigationBar />
            </DrawerContent>
        </Drawer>
    )
}

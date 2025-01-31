import { Logo } from "@/components/atoms/logo"
import { LanguageSelect } from "@/components/molecules/language-select"
import { MenuDrawer } from "@/components/molecules/menu-drawer"
import { NavigationBar } from "@/components/molecules/navigation-bar"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-40 backdrop-blur-md shadow-md">
            <div className="flex justify-between items-center p-5 md:px-14 md:py-7">
                <Logo />
                <NavigationBar />
                <div className="hidden lg:flex gap-1">
                    <LanguageSelect />
                    <Button variant={'outline'} className="border-2 border-black rounded-lg">
                        Связаться
                        <ChevronRight />
                    </Button>
                </div>
                <div className="flex lg:hidden">
                    <MenuDrawer />
                </div>
            </div>

        </div>
    )
}

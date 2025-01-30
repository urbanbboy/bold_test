import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"

export const MenuDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger><Menu size={32} /></DrawerTrigger>
            <DrawerContent>
        
            </DrawerContent>
        </Drawer>
    )
}

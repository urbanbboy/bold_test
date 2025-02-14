import { FC, PropsWithChildren } from "react"
import { Toaster } from 'sonner';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Toaster
                className="toaster group"
                richColors
                position="top-center"
                duration={3000}
                visibleToasts={3}
            />
            {children}
        </>
    )
}

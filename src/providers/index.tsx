import { FC, PropsWithChildren } from "react"
import { Toaster } from 'sonner';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Toaster
                className="toaster group"
                closeButton
                richColors
                duration={3000}
                visibleToasts={20}
                toastOptions={{
                    classNames: {
                        closeButton: "border-2 w-5 h-5",
                        content: "p-1 text-sm",
                    },
                }}
            />
            {children}
        </>
    )
}

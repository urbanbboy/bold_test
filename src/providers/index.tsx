"use client";

import { FC, PropsWithChildren } from "react"
import { Toaster } from 'sonner';
import { StoreProvider } from "./redux-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StoreProvider>
            <Toaster
                className="toaster group"
                richColors
                position="top-center"
                duration={3000}
                visibleToasts={3}
            />
            {children}
        </StoreProvider>
    )
}

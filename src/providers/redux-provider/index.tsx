"use client"

import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "./config"
import LanguageInitializer from "@/i18n/languageInitializer"


export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            < LanguageInitializer />
            {children}
        </Provider>
    )
}
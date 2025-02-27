'use client';

import { useGetCompanyInfoQuery } from "@/api/Company";
import { CompanyInfoResponse } from "@/api/Company/types";
import { createContext, useContext } from "react";

interface AppContextType {
    data: CompanyInfoResponse | null;
    isLoading: boolean;
    error: unknown;
}

const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading, error } = useGetCompanyInfoQuery()

    return (
        <AppContext.Provider value={{ data: data ?? null, isLoading, error }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppData = () => {
    const context = useContext(AppContext)

    if(!context) {
        throw new Error("useAppData must be used within an AppContextProvider");
    }
    return context
}
'use client';

import { useGetBusinessTypesQuery } from "@/api/BusinessType";
import { useGetCompanyInfoQuery } from "@/api/Company";
import { CompanyInfoResponse } from "@/api/Company/types";
import { Type } from "@/api/Types/types";
import { createContext, useContext } from "react";

interface AppContextType {
    data: CompanyInfoResponse | null;
    business_types: Type[];
    isLoading: boolean;
    error: unknown;
}

const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading, error } = useGetCompanyInfoQuery()
    const { data: business_types } = useGetBusinessTypesQuery()

    return (
        <AppContext.Provider value={{ data: data ?? null, isLoading, error, business_types: business_types ?? [] }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppData = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useAppData must be used within an AppContextProvider");
    }
    return context
}
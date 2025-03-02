'use client';

import { usePathname } from "next/navigation"

export const useSlug = (): string => {
    const pathname = usePathname()
    return pathname.split('/').pop() || ''
}
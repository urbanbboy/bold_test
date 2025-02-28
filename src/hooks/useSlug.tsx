'use client';

import { usePathname } from "next/navigation"

export const useSlug = () => {
    const pathname = usePathname()
    return pathname.split('/').pop() || ''
}
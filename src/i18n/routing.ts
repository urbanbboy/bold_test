import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
    pathnames: {
        "/home": {
            en: "/home",
            ru: "/home",
            uz: "/home",
        },
        "/about": {
            en: "/about",
            ru: "/about",
            uz: "/about",
        },
        "/cases": {
            en: "/cases",
            ru: "/cases",
            uz: "/cases",
        },
        "/contacts": {
            en: "/contacts",
            ru: "/contacts",
            uz: "/contacts",
        },
        "/:path*": {
            en: "/:path*",
            ru: "/:path*",
            uz: "/:path*",
        },
    },
});

export type Locale = (typeof routing.locales)[number];

export type AppPathnames = keyof typeof routing.pathnames | (string & {});

// LanguageInitializer.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { languageActions } from "../api/LanguageSelect/index";

export default function LanguageInitializer() {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedLocale = localStorage.getItem("locale") || "ru";
        dispatch(languageActions.initLanguage(storedLocale));
    }, [dispatch]);

    return null; // This component doesn't render anything visible
}

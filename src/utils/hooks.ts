import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DEFAULT_COLOR_SCHEME, FORCE_DEFAULT_COLOR_SCHEME } from "./config";

export const useIsPathname = (href: string) => {
    const pathname = usePathname();
    return href === pathname;
}

export const usePrefersColorScheme = (): 'light' | 'dark' => {
    const [mode, setMode] = useState<'light' | 'dark'>(DEFAULT_COLOR_SCHEME);
    useEffect(() => {
        if (FORCE_DEFAULT_COLOR_SCHEME) return;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode('dark');
        }
    }, [])
    return mode;
}


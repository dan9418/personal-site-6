import { usePathname } from "next/navigation";

export const useIsPathname = (href: string) => {
    const pathname = usePathname();
    return href === pathname;
}
"use client";

import { LINK_CONTACT } from "@/data/links.data";
import { useIsPathname } from "@/utils/hooks";
import { LinkCategoriesList } from "./LinksList";

const Footer: React.FC = () => {
  const isContactPage = useIsPathname(LINK_CONTACT.href);
  return (
    <footer className="p-8 theme-nav shadow-xl">
      {!isContactPage && <LinkCategoriesList x isDark />}
      <address className="text-xs pt-8 flex flex-col justify-center items-center">
        <p>Dan Bednarczyk</p>
        <p>5/27/24</p>
        <p>v0.1.4</p>
      </address>
    </footer>
  );
};

export default Footer;

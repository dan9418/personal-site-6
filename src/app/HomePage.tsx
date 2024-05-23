import PageHeader from "@/components/PageHeader";
import Icon from "@/components/icons/Icon";
import { IconId } from "@/components/icons/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import studioHeadshot from "/public/img/photography/headshots/studio-headshot.jpg";
import professionalHeadshot from "/public/img/photography/headshots/professional-headshot.jpg";

const Row: React.FC<{
  imgSrc: StaticImageData;
  imgAlt: string;
  text: ReactNode;
  flip?: boolean;
  linkHref: string;
  linkText: string;
  title: string;
}> = ({ imgSrc, imgAlt, text, flip, linkHref, linkText, title }) => {
  return (
    <div className="mt-4 desktop:mt-8">
      <h2 className={`text-2xl font-bold pb-2 mb-4 border-b theme-l-border`}>
        {title}
      </h2>
      <div className="flex flex-col gap-4 justify-center items-center desktop:grid grid-cols-[180px_auto] gap-6">
        <div className="">
          <Image
            className="rounded m-auto desktop:m-0"
            src={imgSrc}
            alt={imgAlt}
            width={180}
            priority
          />
        </div>
        <div>
          <p className="text-sm desktop:text-base text-center desktop:text-left">
            {text}
          </p>
          <Link
            href={linkHref}
            className="flex items-center justify-center py-2 px-4 mt-4 rounded-lg focus:shadow-outline theme-bg-link"
          >
            <span className="text-lg">{linkText}</span>
            <Icon iconId={IconId.NavRight} className="h-3 w-3 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const DATA = {
  header: "Hi, I'm Dan Bednarczyk",
  subheader: "Engineer | Designer | Artist",
  location: "Pittsburgh, PA",
  rows: [
    {
      title: "Web Developer",
      linkHref: "/resume",
      linkText: "Technical Resume",
      imgSrc: professionalHeadshot,
      text: (
        <>
          I have{" "}
          <strong>
            over 8 years of professional software engineering experience
          </strong>{" "}
          delivering first-class solutions to some of the largest technology
          companies in the country. Currently, at MaxPreps, I lead the web
          frontend of a site that handles over{" "}
          <strong>30 million page views a day</strong> from a large variety of
          users and devices. My experience includes integrations for ads,
          tracking, SEO optimization, device responsivity, edge-caching,
          accessibility, and URL-rewriting schemes.
        </>
      ),
    },
    {
      title: "Multimedia Artist",
      linkHref: "/portfolio",
      linkText: "Creative Portfolio",
      imgSrc: studioHeadshot,
      text: (
        <>
          I am a multi-disciplinary musician, including work in songwriting,
          audio engineering, mixing, performance, and education. As a visual
          artist, I have applied my graphic design skills to dozens of projects
          for album covers, posters, websites, logos, t-shirts, and tattoos. I
          also work with physical media and I have an extensive portfolio
          spanning many different formats. Occasionally, I perform under the
          name "Strange Frontiers"
        </>
      ),
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <PageHeader text={DATA.header} />
      <div className="text-center theme-l-fg-2 pt-4">
        <div>{DATA.subheader}</div>
        <div className="flex align-center justify-center mt-2">
          <Icon
            iconId={IconId.Location}
            className="theme-l-fg-2 h-4 w-4 mt-1 mr-1"
          />
          <span>{DATA.location}</span>
        </div>
      </div>
      {DATA.rows.map((row) => (
        <Row {...row} imgAlt="Headshot" key={row.title} />
      ))}
    </>
  );
};

export default HomePage;

import { IconId } from "@/components/icons/icons";

export interface ILink {
  text?: string;
  caption?: string;
  href: string;
  iconId?: IconId;
}

export interface ILinkCategory {
  name: string;
  links: ILink[];
}

export const LINK_LINKED_IN: ILink = {
  text: "LinkedIn",
  caption: "Daniel Bednarczyk",
  href: "https://www.linkedin.com/in/danielbednarczyk/",
  iconId: IconId.LinkedIn,
};

export const LINK_GITHUB: ILink = {
  text: "GitHub",
  caption: "@dan9418",
  href: "https://github.com/dan9418/",
  iconId: IconId.GitHub,
};

export const LINK_INSTAGRAM: ILink = {
  text: "Instagram",
  caption: "@dan.bednarczyk",
  href: "https://www.instagram.com/dan.bednarczyk/",
  iconId: IconId.Instagram,
};

export const LINK_BANDCAMP: ILink = {
  text: "Bandcamp",
  caption: "Dan Bednarczyk",
  href: "https://danbednarczyk.bandcamp.com/",
  iconId: IconId.Bandcamp,
};

export const LINK_SPOTIFY: ILink = {
  text: "Spotify",
  caption: "Dan Bednarczyk",
  href: "https://open.spotify.com/artist/3PMMGV0yEGktq0tGQ7lO0r?si=RzMrSZoRQK2htXfe-fTs5Q",
  iconId: IconId.Spotify,
};

export const LINK_APPLE_MUSIC: ILink = {
  text: "Apple Music",
  caption: "Dan Bednarczyk",
  href: "https://music.apple.com/us/artist/dan-bednarczyk/1590781822",
  iconId: IconId.Music,
};

export const LINK_WEEKLY_BEATS: ILink = {
  text: "Weekly Beats",
  caption: "pineapple_dan",
  href: "https://weeklybeats.com/pineapple_dan",
  iconId: IconId.Music,
};

export const LINK_PLAY_WHAT: ILink = {
  text: "Play What?",
  caption: "Music Education Website",
  href: "https://www.play-what.com/",
  iconId: IconId.Music,
};

export const CONTACT_LINKS = [
  LINK_LINKED_IN,
  LINK_GITHUB,
  LINK_INSTAGRAM,
  LINK_BANDCAMP,
  LINK_SPOTIFY,
];

export const CATEGORY_LINKS: ILinkCategory[] = [
  {
    name: "Software",
    links: [LINK_LINKED_IN, LINK_GITHUB],
  },
  {
    name: "Art",
    links: [LINK_INSTAGRAM],
  },
  {
    name: "Music",
    links: [
      LINK_SPOTIFY,
      LINK_APPLE_MUSIC,
      LINK_BANDCAMP /*, LINK_WEEKLY_BEATS, LINK_PLAY_WHAT*/,
    ],
  },
];

// NAV

export const LINK_HOME: ILink = {
  text: "Home",
  href: "/",
  iconId: IconId.Home,
};

export const LINK_RESUME: ILink = {
  text: "Resume",
  href: "/resume",
  iconId: IconId.Resume,
};

export const LINK_PORTFOLIO: ILink = {
  text: "Portfolio",
  href: "/portfolio",
  iconId: IconId.Art,
};

export const LINK_CONTACT: ILink = {
  text: "Contact",
  href: "/contact",
  iconId: IconId.Calendar,
};

export const NAV_LINKS = [LINK_HOME, LINK_RESUME, LINK_PORTFOLIO, LINK_CONTACT];

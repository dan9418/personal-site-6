import { IconId } from "@/components/icons/icons"

export const LINK_SPOTIFY = "https://open.spotify.com/artist/3PMMGV0yEGktq0tGQ7lO0r?si=RzMrSZoRQK2htXfe-fTs5Q"
export const LINK_BANDCAMP = "https://strangefrontiers.bandcamp.com/"
export const LINK_APPLE_MUSIC = "https://music.apple.com/us/artist/dan-bednarczyk/1590781822"
export const LINK_WEEKLY_BEATS = "https://weeklybeats.com/pineapple_dan"
export const LINK_INSTAGRAM = "https://www.instagram.com/strangefrontiers/"
export const LINK_GITHUB = "https://github.com/dan9418/"
export const LINK_PLAY_WHAT = "https://www.play-what.com/"
export const LINK_LINKED_IN = "https://www.linkedin.com/in/danielbednarczyk/"



export const CONTACT_LINKS = [
    {
        text: 'Spotify',
        href: LINK_SPOTIFY,
        iconId: IconId.Spotify,
        isPrimary: true,
    },
    {
        text: 'Bandcamp',
        href: LINK_BANDCAMP,
        iconId: IconId.Bandcamp,
        isPrimary: true,
    },
    {
        text: 'Apple Music',
        href: LINK_APPLE_MUSIC,
        iconId: IconId.Music
    },
    {
        text: 'Weekly Beats',
        href: LINK_WEEKLY_BEATS,
        iconId: IconId.Music
    },
    {
        text: 'Instagram',
        href: LINK_INSTAGRAM,
        iconId: IconId.Instagram,
        isPrimary: true,
    },
    {
        text: 'GitHub',
        href: LINK_GITHUB,
        iconId: IconId.GitHub,
        isPrimary: true,
    },
    {
        text: 'Play What?',
        href: LINK_PLAY_WHAT,
        iconId: IconId.Music
    },
    {
        text: 'LinkedIn',
        href: LINK_LINKED_IN,
        iconId: IconId.LinkedIn,
        isPrimary: true,
    }
];


export const NAV_LINKS = [
    {
        text: 'Home',
        href: '/',
        iconId: IconId.Home
    },
    {
        text: 'Resume',
        href: '/resume',
        iconId: IconId.Resume
    },
    {
        text: 'Portfolio',
        href: '/portfolio',
        iconId: IconId.Art
    },
    {
        text: 'Contact',
        href: '/contact',
        iconId: IconId.Calendar
    }
]
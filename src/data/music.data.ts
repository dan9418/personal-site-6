import { IconId } from "@/components/icons/icons";
import { IArtist } from "@/utils/dataUtils";
import { LINK_APPLE_MUSIC, LINK_BANDCAMP, LINK_INSTAGRAM, LINK_SPOTIFY } from "./links.data";

const STRANGE_FRONTIERS: IArtist = {
  name: "Strange Frontiers",
  description: "Multimedia solo project",
  thumnbnailPath: "/img/photography/headshots/studio-square.jpg",
  links: [
    {
      iconId: IconId.Spotify,
      href: LINK_SPOTIFY.href,
    },
    {
      iconId: IconId.Music,
      href: LINK_APPLE_MUSIC.href,
    },
    {
      iconId: IconId.Bandcamp,
      href: LINK_BANDCAMP.href,
    },
    {
      iconId: IconId.Instagram,
      href: LINK_INSTAGRAM.href,
    },
    // {
    //   iconId: 'TikTok',
    //   href: LINK_TIK_TOK.href,
    // },
    {
      iconId: IconId.YouTube,
      href: "https://www.youtube.com/channel/UCyq0-Fr2jM-GrbTB-SKOSkA",
    },
  ],
  albums: [
    {
      name: "Sketches From Sacramento",
      releaseDate: "8/5/22",
      tracks: [
        { name: "Paradise" },
        { name: "It's Real" },
        { name: "Love Letters of the 21st Century" },
        { name: "Born Strangers" },
        { name: "Waiting" },
        { name: "Fortune" },
        { name: "(The View From) The Third Rock (From The Sun)" },
      ],
      links: [
        {
          iconId: IconId.Bandcamp,
          href: "https://strangefrontiers.bandcamp.com/album/sketches-from-sacramento",
        },
      ],
      artSrc:
        "/img/art/album-covers/strange-frontiers/sketches-from-sacramento/sketches-from-sacramento-front.jpg",
    },
    {
      name: "Need Not",
      releaseDate: "3/30/18",
      tracks: [
        { name: "Until Today" },
        { name: "Feel Something" },
        { name: "Nature vs Nature" },
        { name: "Small World" },
      ],
      links: [
        {
          iconId: IconId.Bandcamp,
          href: "https://strangefrontiers.bandcamp.com/album/need-not",
        },
        // {
        //   iconId: IconId.Lyrics,
        //   href: "",
        // },
      ],
      artSrc:
        "/img/art/album-covers/strange-frontiers/need-not/need-not-front.jpg",
    },
    {
      name: "Silent City",
      releaseDate: "12/15/17",
      tracks: [
        { name: "Earthquake Day" },
        { name: "Clarity" },
        { name: "Momentum" },
        { name: "America Incorporated" },
        { name: "Dysphoria" },
        { name: "Reality Cruising" },
        { name: "Amnesiac" },
        { name: "The Optimist" },
        { name: "Silent Spring" },
        { name: "Looper" },
      ],
      links: [
        {
          iconId: IconId.Bandcamp,
          href: "https://strangefrontiers.bandcamp.com/album/silent-city",
        },
        // {
        //   iconId: IconId.SoundCloud,
        //   href: "https://soundcloud.com/strangefrontiers/sets/silent-city",
        // },
        // {
        //   iconId: IconId.YouTube,
        //   href: "https://www.youtube.com/watch?v=BdZc8xkQArw&feature=youtu.be",
        // },
        // { iconId: IconId.Lyrics, href: "" },
      ],
      artSrc:
        "/img/art/album-covers/strange-frontiers/silent-city/silent-city-front.jpg",
    },
  ],
};

const JONAH: IArtist =  {
  name: "Jonah!",
  description: "Grungy slacker rock",
  thumnbnailPath: "/img/temp/jonah.jpg",
  links: [],
  albums: [
    {
      name: "Crooked Spine",
      releaseDate: "3/29/24",
      tracks: [
        { name: "Sister" },
        { name: "Airhead" },
        { name: "Get Stuck" },
        { name: "My Whole Life" },
        { name: "Rules Like Dogs" },
      ],
      links: [
        {
          iconId: IconId.Bandcamp,
          href: "https://jonahmakesmusic.bandcamp.com/album/crooked-spine",
        },
      ],
      artSrc:
        "/img/temp/crooked_spine.jpg",
    }
  ],
}

const THE_VECTORS: IArtist = {
  name: "The Vectors",
  description: "College ska with a nerdy sense of humor",
  thumnbnailPath: "/img/temp/vectors.jpg",
  links: [
    {
      iconId: IconId.SoundCloud,
      href: "https://soundcloud.com/livingfiction/",
    },
    {
      iconId: IconId.Facebook,
      href: "https://www.facebook.com/TheVectors14",
    },
    {
      iconId: IconId.YouTube,
      href: "https://www.youtube.com/channel/UCVJVbOg-thDA-qI4L_fHfdg",
    },
  ],
  albums: [
    {
      name: "Peanut Butter Jam",
      releaseDate: "1/20/17",
      tracks: [{ name: "Peanut Butter Jam" }],
      links: [
        {
          iconId: IconId.SoundCloud,
          href: "https://soundcloud.com/livingfiction/peanut-butter-jam",
        },
        { iconId: IconId.Lyrics, href: "" },
      ],
      artSrc:
        "/img/art/album-covers/the-vectors/peanut-butter-jam/peanut-butter-jam-front.jpg",
    },
    {
      name: "Songs; And How NOT To Write Them!",
      releaseDate: "1/20/15",
      tracks: [
        { name: "Revolution: Day One" },
        { name: "Bob", writer: "NOFX" },
        { name: "Revenge of the Pink Flamingo" },
        { name: "I Melt With You", writer: "Modern English" },
        { name: "No Direction" },
        { name: "tourette's", writer: "Nirvana" },
        { name: "Sell Out", writer: "Reel Big Fish" },
        { name: "Just Another" },
        { name: "Walking The Plank" },
        { name: "New Girl", writer: "The Suicide Machines" },
        { name: "Cartoon Chase Scene" },
        { name: "Blue Moon", writer: "The Marcels" },
        { name: "The Wave Equation" },
        { name: "What I Got", writer: "Sublime" },
        { name: "Requiem For Third Wave Ska" },
      ],
      links: [
        {
          iconId: IconId.SoundCloud,
          href: "https://soundcloud.com/livingfiction/sets/songs-and-how-not-to-write-them",
        },
        {
          iconId: IconId.YouTube,
          href: "https://www.youtube.com/watch?v=WDdDrvqkbOk&list=PLF0EOAvsOKeCp_HowkIF6CVeExxuDXYRm",
        },
        {
          iconId: IconId.Lyrics,
          href: "",
        },
      ],
      artSrc:
        "/img/art/album-covers/the-vectors/songs-and-how-not-to-write-them/songs-and-how-not-to-write-them-front.jpg",
    },
    {
      name: "Yellow Snow",
      releaseDate: "7/25/15",
      tracks: [
        { name: `White Christmas`, writer: "Irving Berlin + The Drifters" },
        { name: `The Year That Flying Monkeys Saved Christmas` },
        { name: `Randolph The Red-Headed Gingerbread Man` },
        { name: `The Elf Who Wanted To Be A Dentist` },
        { name: `Jingle Squeals` },
      ],
      links: [
        {
          iconId: IconId.SoundCloud,
          href: "https://soundcloud.com/livingfiction/sets/the-vectors-yellow-snow",
        },
        {
          iconId: IconId.YouTube,
          href: "https://www.youtube.com/watch?v=f2EV4bBB4E8&list=PLF0EOAvsOKeAv8CK8nJT1sRIGEK17w96s",
        },
        { iconId: IconId.Lyrics, href: "" },
      ],
      artSrc:
        "/img/art/album-covers/the-vectors/yellow-snow/yellow-snow-front.jpg",
    },
  ],
};

const OLD_PROJECTS: IArtist = {
  name: "Old Projects",
  description: "Misc projects from my early years",
  thumnbnailPath: "/img/art/album-covers/old-projects/human-architecture/human-architecture-front-alt.jpg",
  links: [],
  albums: [
    {
      name: "Human Architecture",
      releaseDate: "1/13/17",
      tracks: [
        { name: "History Begins", writer: "Temperance" },
        { name: "Collector", writer: "Lust" },
        { name: "Constellations", writer: "Patience" },
        { name: "New Idol", writer: "Averice" },
        { name: "Tremors", writer: "Envy" },
        { name: "In Valor & Venom", writer: "Wrath" },
        { name: "Gyroscope", writer: "Kindness" },
        { name: "Eyes Averted", writer: "Diligence" },
        { name: "Fiend", writer: "Gluttony" },
        { name: "Atrophy", writer: "Sloth" },
        { name: "Waking Hours", writer: "Chastity" },
        { name: "Seek Shelter", writer: "Charity" },
        { name: "Architecture", writer: "Pride" },
        { name: "Last Will", writer: "Humility" },
      ],
      links: [
        {
          iconId: IconId.SoundCloud,
          href: "https://soundcloud.com/strangefrontiers/sets/human-architecture",
        },
        {
          iconId: IconId.YouTube,
          href: "https://www.youtube.com/watch?v=vzKuYdfCpdk",
        },
        { iconId: IconId.Lyrics, href: "" },
      ],
      artSrc:
        "/img/art/album-covers/old-projects/human-architecture/human-architecture-front-alt.jpg",
    },
    {
      name: "Out Of Reach",
      releaseDate: "2011",
      tracks: [
        { name: "New Life" },
        { name: "Swift" },
        { name: "Pink Flamingo" },
        { name: "Exactly!" },
        { name: "Memento Mori" },
        { name: "In Loving Memory..." },
        { name: "Quicksand" },
        { name: "The Bullfighter" },
        { name: "Paperwork" },
        { name: "Resurrection" },
        { name: "Identity" },
        { name: "The Ballad of Billy Mays" },
        { name: "You Took Everything, An Interlude" },
        { name: "Demolition" },
        { name: "The Marrow of a Bone" },
        { name: "Frail" },
        { name: "Temptation" },
        { name: "Release" },
        { name: "Execution" },
        { name: "Extrication" },
      ],
      links: [
        {
          iconId: IconId.SoundCloud,
          href: "https://soundcloud.com/livingfiction/sets/out-of-reach",
        },
        {
          iconId: IconId.YouTube,
          href: "https://www.youtube.com/watch?v=mL2CbEXX6lo&list=PLF0EOAvsOKeDZnT4z2Z-tZaFzL0qVuk6f",
        },
        { iconId: IconId.Lyrics, href: "" },
      ],
      artSrc:
        "/img/art/album-covers/old-projects/out-of-reach/out-of-reach-front.jpg",
    },
  ],
}

const MUSIC_DATA: IArtist[] = [
  STRANGE_FRONTIERS,
  JONAH,
  THE_VECTORS,
  OLD_PROJECTS
];

export default MUSIC_DATA;

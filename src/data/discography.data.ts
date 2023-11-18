import { IconId } from "@/components/icons/icons";
import { getIdFromText } from "@/utils/stringUtils";
import { ILink } from "./links.data";


interface ITrack {
  name: string;
  writer?: string;
}

interface IAlbum {
  name: string;
  releaseDate: string;
  remasterDate?: string;
  artSrc: string;
  links: ILink[];
  tracks: ITrack[];
}

interface IArtist {
  name: string;
  links: ILink[];
  albums: IAlbum[];
}

const DISCOGRAPHY_DATA: IArtist[] = [
  {
    name: "Strange Frontiers",
    links: [
      {
        iconId: IconId.Bandcamp,
        href: "https://strangefrontiers.bandcamp.com/",
      },
      {
        iconId: IconId.Instagram,
        href: "https://www.instagram.com/strangefrontiers/",
      },
      {
        iconId: IconId.YouTube,
        href: "https://www.youtube.com/channel/UCyq0-Fr2jM-GrbTB-SKOSkA",
      },
    ],
    albums: [
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
          {
            iconId: IconId.Lyrics,
            href: "",
          },
        ],
        artSrc: "/img/albums/need_not.jpg",
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
          {
            iconId: IconId.SoundCloud,
            href: "https://soundcloud.com/strangefrontiers/sets/silent-city",
          },
          {
            iconId: IconId.YouTube,
            href: "https://www.youtube.com/watch?v=BdZc8xkQArw&feature=youtu.be",
          },
          { iconId: IconId.Lyrics, href: "" },
        ],
        artSrc: "/img/albums/silent_city.jpg",
      },
    ],
  },
  {
    name: "The Vectors",
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
        artSrc: "/img/albums/peanut_butter_jam.jpg",
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
        artSrc: "/img/albums/songs_and_how_not_to_write_them.jpg",
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
        artSrc: "/img/albums/yellow_snow.jpg",
      },
    ],
  },
  {
    name: "Other",
    links: [],
    albums: [
      {
        name: "Human Architecture",
        releaseDate: "1/17",
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
        artSrc: "/img/albums/human_architecture.jpg",
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
        artSrc: "/img/albums/out_of_reach.jpg",
      },
    ],
  },
];

export default DISCOGRAPHY_DATA;

export const ALBUM_IDS = DISCOGRAPHY_DATA.flatMap(artist => artist.albums.map(album => getIdFromText(album.name)));

export const getAlbumById = (id: string) => DISCOGRAPHY_DATA.find(artist => artist.albums.find(gallery => getIdFromText(gallery.name) === id))?.albums.find(gallery => getIdFromText(gallery.name) === id);

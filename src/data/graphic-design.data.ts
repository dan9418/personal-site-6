import { getIdFromText } from "@/utils/stringUtils";

const GRAPHIC_DESIGN_DATA = [
  {
    name: "Album Covers",
    description: "Artwork for various musical projects",
    images: [
      {
        name: "Sketches From Sacramento (Front)",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/strange-frontiers/sketches-from-sacramento/sketches-from-sacramento-front.jpg",
      },
      {
        name: "Sketches From Sacramento (Back)",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/strange-frontiers/sketches-from-sacramento/sketches-from-sacramento-back.jpg",
      },
      {
        name: "Silent City (Front)",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/strange-frontiers/silent-city/silent-city-front.jpg",
      },
      {
        name: "Silent City (Back)",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/strange-frontiers/silent-city/silent-city-back.jpg",
      },
      {
        name: "Need Not",
        year: 2018,
        caption: "",
        path: "/img/graphic-design/album-covers/strange-frontiers/need-not/need-not-front.jpg",
      },
      {
        name: "Peanut Butter Jam",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/album-covers/the-vectors/peanut-butter-jam/peanut-butter-jam-front.jpg",
      },
      {
        name: "Songs; And How NOT To Write Them! (Front)",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/album-covers/the-vectors/songs-and-how-not-to-write-them/songs-and-how-not-to-write-them-front.jpg",
      },
      {
        name: "Songs; And How NOT To Write Them! (Back)",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/album-covers/the-vectors/songs-and-how-not-to-write-them/songs-and-how-not-to-write-them-back.jpg",
      },
      {
        name: "Yellow Snow",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/album-covers/the-vectors/yellow-snow/yellow-snow-front.jpg",
      },
      {
        name: "Human Architecture",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/old-projects/human-architecture/human-architecture-front-alt.jpg",
      },
      {
        name: "Mac DeMarco Covers (Parody)",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/old-projects/mac-demarco-covers/mac-demarco-covers-front.jpg",
      },
      {
        name: "Out Of Reach",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/album-covers/old-projects/out-of-reach/out-of-reach-front.jpg",
      },
      {
        name: "String",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/album-covers/old-projects/indigo-zoo/string-acoustic-front.jpg",
      },
    ],
  },
  {
    name: "Snapchat Filters",
    description: "Some Snapchat geofilters I designed in college",
    images: [
      // 4
      {
        name: "Chesterfield Street",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/snapchat-filters/chesterfield.png",
      },
      {
        name: "WPTS Radio",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/snapchat-filters/wpts.png",
      },
      {
        name: "Ward Street",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/snapchat-filters/ward.png",
      },
      {
        name: "Pitt Residence Halls",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/snapchat-filters/res-life.jpg",
      },
    ],
  },
  {
    name: "Just For Fun",
    description: "Some fun pieces indulging my goofy sense of humor",
    images: [
      //14
      {
        name: "Angels & Demons",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/angel-demon.jpg",
      },
      {
        name: "Bobbleheads",
        year: 2013,
        caption: "",
        path: "/img/graphic-design/just-for-fun/bobbleheads.gif",
      },
      {
        name: "CEO Bednarczyk",
        year: 2013,
        caption: "",
        path: "/img/graphic-design/just-for-fun/ceo.jpg",
      },
      {
        name: "Stalemate",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/just-for-fun/chess.jpg",
      },
      {
        name: "Dolla Dolla Bill Y'all",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/dollar.jpg",
      },
      {
        name: "The Godfather Parody",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/godfather.jpg",
      },
      {
        name: "Hostage",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/hostage.jpg",
      },
      {
        name: "My Good Friend Jimmy",
        year: 2014,
        caption: "",
        path: "/img/graphic-design/just-for-fun/jimmy-fallon.jpg",
      },
      {
        name: "MiniMe",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/minime.jpg",
      },
      {
        name: "Have You Seen Me?",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/missing-fridge.jpg",
      },
      {
        name: "Multitasking",
        year: 2009,
        caption: "",
        path: "/img/graphic-design/just-for-fun/multitasking.jpg",
      },
      {
        name: "The Simpsons Parody",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/simpsons.jpg",
      },
      {
        name: "Skydiving",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/skydiving.jpg",
      },
      {
        name: "Painted (Green Day Parody)",
        year: 2011,
        caption: "",
        path: "/img/graphic-design/just-for-fun/spray-paint.jpg",
      },
      {
        name: "Digital World",
        year: 2012,
        caption: "",
        path: "/img/graphic-design/just-for-fun/tv.jpg",
      },
    ],
  },
  {
    name: "T-Shirts",
    description: "Some shirts I designed in college",
    images: [
      // 5
      {
        name: "E-Week: Harry Potter",
        year: 2014,
        caption: "",
        path: "/img/graphic-design/t-shirts/e-week-2014.png",
      },
      {
        name: "E-Week: Hunger Games",
        year: 2015,
        caption: "",
        path: "/img/graphic-design/t-shirts/e-week-2015.jpg",
      },
      {
        name: "E-Week: Freshmen Crest",
        year: 2014,
        caption: "",
        path: "/img/graphic-design/t-shirts/e-week-freshmen-2014.png",
      },
      {
        name: "E-Week: Pixar",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/t-shirts/e-week-ece-2016.jpg",
      },
      {
        name: "The Panther Pitt",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/t-shirts/the-panther-pitt.jpg",
      },
      {
        name: "Pitt Sailing",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/t-shirts/pitt-sailing.jpg",
      },
      {
        name: "Pitt Anthropology",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/t-shirts/pitt-anthropology.jpg",
      },
      {
        name: "The BANDits",
        year: 2013,
        caption: "",
        path: "/img/graphic-design/t-shirts/the-bandits.png",
      },
      {
        name: "Relay For Life",
        year: 2013,
        caption: "",
        path: "/img/graphic-design/t-shirts/relay-for-life-2013.jpg",
      },
    ],
  },
  {
    name: "Tattoos",
    description: "Some tattoos I designed",
    images: [
      // 4
      {
        name: "Globe",
        year: 2016,
        caption: "",
        path: "/img/graphic-design/tattoos/globe.png",
      },
      {
        name: "Mountains",
        year: 2017,
        caption: "",
        path: "/img/graphic-design/tattoos/mountains.jpg",
      },
      {
        name: "Harmonic Series / Binary",
        year: 2019,
        caption: "",
        path: "/img/graphic-design/tattoos/science-pair.jpg",
      },
      {
        name: "Denny",
        year: 2023,
        caption: "",
        path: "/img/graphic-design/tattoos/denny.jpg",
      },
      {
        name: "Pawprint",
        year: 2023,
        caption: "",
        path: "/img/graphic-design/tattoos/pawprint.jpg",
      },
      {
        name: "Bike",
        year: 2018,
        caption: "",
        path: "/img/graphic-design/tattoos/bike.jpg",
      },
      {
        name: "Bridges",
        year: 2022,
        caption: "",
        path: "/img/graphic-design/tattoos/bridges.jpg",
      },
    ],
  },
] as const;

export default GRAPHIC_DESIGN_DATA;

export const GALLERY_IDS = GRAPHIC_DESIGN_DATA.map((gallery) =>
  getIdFromText(gallery.name)
);

export const getGalleryById = (id: string) =>
  GRAPHIC_DESIGN_DATA.find((gallery) => getIdFromText(gallery.name) === id);

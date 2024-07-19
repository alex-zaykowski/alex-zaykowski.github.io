"use client";

import Image, { StaticImageData } from "next/image";
import EnemyRemix from "../../images/enemy.png";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Ywnky from "../../images/ywnkw.png";
import Blank from "../../images/blank.png";
import InRainbows from "../../images/inrainbows.png";
import { IconButton } from "../buttons/IconButton";
import { useState } from "react";

interface Music {
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
}

const songs: Music[] = [
  {
    title: "The Hellp - Enemy",
    description:
      "My favorite band right now, this is their first album which rocks but all of them are awesome",
    url: "https://open.spotify.com/album/0b4R5wYw27gkjd2Mt4C8AP?si=LbiHAbD9SlqAmlkDWVBSug",
    image: EnemyRemix,
  },
  {
    title: "Radiohead - In Rainbows",
    description:
      "Probably my favorite album of all time, I listen to the whole thing once a month",
    url: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=XUVG1WPCQzeKTiV92qN8cA",
    image: InRainbows,
  },
  {
    title: "Sweet Trip - YWNKW",
    description:
      "Love Sweet Trip and their influences from shibuya kei, this whole album is great",
    url: "https://open.spotify.com/album/0kmPn6M3cue7rec6Unw6BD?si=T-nmasC7SlKnuXZeDYBkwg",
    image: Ywnky,
  },
  {
    title: "Blank - .........",
    description:
      "This whole album is solid, just a generally upbeat shoegaze/jpop album",
    url: "https://open.spotify.com/album/2K5lKrTrHnXD4J5cO1IGAm?si=213flMrhRnCMaVgB_vcZoQ",
    image: Blank,
  },
];

export const SlideContainer = () => {
  const [index, setIndex] = useState<number>(0);
  const musicArrayLength = songs.length;

  return (
    <div className="z-50 flex h-[200px] w-[350px] flex-row gap-10 rounded bg-slate-50 pl-3 text-zinc-950 shadow-xl shadow-slate-400 md:h-[300px] md:w-[600px] lg:pl-5">
      <div className="flex flex-col gap-3 md:gap-6">
        <h1 className="mt-2 text-2xl font-bold lg:mt-5">Music</h1>
        <div className="flex flex-row gap-2 lg:gap-2">
          <div className="flex flex-col items-center justify-center">
            <div className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]">
              <Image
                src={songs[index].image}
                className="rounded"
                alt="Album Cover"
              />
            </div>
            <IconButton
              url={songs[index].url}
              icon={faSpotify}
              value="Spotify"
              style="me-2 mr-2 mt-2 inline-flex justify-center items-center cursor-pointer w-[80px] lg:w-[100px] bg-lime-300 items-center gap-1 rounded border border-lime-300 px-4 py-1 text-center text-xs lg:text-sm"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-medium">{songs[index].title}</h1>
              <p className="text-xs text-slate-600 md:text-sm">
                {songs[index].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center rounded-r pl-2 pr-3 transition duration-100 ease-in-out hover:cursor-pointer active:bg-lime-300 lg:duration-200 lg:hover:bg-lime-300"
        onClick={() => setIndex((index + 1) % musicArrayLength)}
      >
        <FontAwesomeIcon className="flex h-6 w-6" icon={faChevronRight} />
      </div>
    </div>
  );
};

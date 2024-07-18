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
    title: "The Hellp - yrsturly CFCF Remix",
    description:
      "I am a big fan of the SSX games for ps2, their songs remind me of those",
    url: "https://open.spotify.com/track/4NIUIDCnoIutrRS2kGYOj5?si=180dca4fd8da43e5",
    image: EnemyRemix,
  },
  {
    title: "Sweet Trip - You Will Never Know Why",
    description:
      "Love Sweet Trip and their influences from shibuya kei, this whole album is great",
    url: "https://open.spotify.com/album/0kmPn6M3cue7rec6Unw6BD?si=T-nmasC7SlKnuXZeDYBkwg",
    image: Ywnky,
  },
  {
    title: "Blank - .........",
    description:
      "This whole album is great, just a generally upbeat shoegaze/jpop album",
    url: "https://open.spotify.com/album/2K5lKrTrHnXD4J5cO1IGAm?si=213flMrhRnCMaVgB_vcZoQ",
    image: Blank,
  },
];

export const SlideContainer = () => {
  const [index, setIndex] = useState<number>(0);
  const musicArrayLength = songs.length;

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="z-50 flex h-[300px] w-[600px] flex-row gap-10 rounded bg-slate-50 pl-5 text-zinc-950 shadow-xl shadow-slate-400">
      <div className="flex flex-col gap-10">
        <h1 className="mt-5 text-2xl font-bold">Music</h1>
        <div className="flex flex-row gap-2">
          <Image
            src={songs[index].image}
            className="rounded"
            width={150}
            height={150}
            alt="Album Cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-medium">{songs[index].title}</h1>
              <p className="text-sm text-slate-600">
                {songs[index].description}
              </p>
            </div>
            <IconButton
              onClick={() => openLink(songs[index].url)}
              icon={faSpotify}
              value="Spotify"
              style="me-2 mr-2 inline-flex cursor-pointer w-[100px] bg-lime-300 items-center gap-1 rounded border border-lime-300 px-4 py-1 text-center text-sm"
            />
          </div>
        </div>
      </div>
      <div
        className="duration-400 flex items-center justify-center pl-2 pr-3 transition ease-in-out hover:cursor-pointer hover:bg-lime-300"
        onClick={() => setIndex((index + 1) % musicArrayLength)}
      >
        <FontAwesomeIcon className="flex h-6 w-6" icon={faChevronRight} />
      </div>
    </div>
  );
};

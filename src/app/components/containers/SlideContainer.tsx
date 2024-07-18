"use client";

import Image from "next/image";
import Colorado from "../../images/colorado.png";

export const SlideContainer = () => {
  return (
    <div className="z-50 flex h-[300px] w-[600px] flex-col rounded bg-slate-50 p-5 text-zinc-950 shadow-xl shadow-slate-400">
      <h1 className="text-2xl font-bold">Music</h1>
      <div className="flex flex-row gap-2">
        <Image
          src={Colorado}
          className="rounded"
          width={150}
          height={150}
          alt="Colorado - The Hellp"
        />
        <div className="flex flex-col">
          <h1>The Hellp - Colorado</h1>
          <p>Great band with a solid new release</p>
        </div>
      </div>
    </div>
  );
};

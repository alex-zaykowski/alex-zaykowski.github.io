"use client";

import { faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "./components/buttons/IconButton";
import { SlideContainer } from "./components/containers/SlideContainer";

const openLink = (url: string) => {
  window.open(url, "_blank");
};
export default function Home() {
  return (
    <div className="z-50 flex min-h-screen flex-col items-center gap-10 bg-slate-50 p-10 md:flex-row md:items-baseline md:justify-between md:gap-0">
      <div className="z-50 flex h-[300px] w-[350px] flex-col justify-between rounded bg-blue-600 p-3 text-white shadow-xl shadow-slate-400 md:w-[600px] md:p-5">
        <h1 className="text-2xl font-bold">Hi, I&apos;m Alex</h1>
        <p className="text-sm md:text-base">
          I&apos;m a Software Developer with practical experience building
          fullstack web applications along with the infrastructure to support
          them. I&apos;ve been programming since grade school and enjoy building
          software people can engage with.
        </p>
        <p className="text-sm md:text-base">
          I currently work{" "}
          <a
            className="text-sm font-bold md:text-base"
            href="https://www.dunnhumby.com/"
          >
            @dunnhumby
          </a>{" "}
          where I help to develop our platform. Feel free to browse around this
          site or connect with me!
        </p>
        <div className="flex flex-row">
          <IconButton
            value={"Email"}
            onClick={() => openLink("#")}
            icon={faEnvelope}
          />
          <IconButton
            value={"LinkedIn"}
            onClick={() => openLink("#")}
            icon={faLinkedin}
          />
          <IconButton
            value={"Resume"}
            onClick={() => openLink("#")}
            icon={faFile}
          />
        </div>
      </div>
      <SlideContainer />
    </div>
  );
}

"use client";

import { SlideContainer } from "./components/containers/SlideContainer";
import TitleContainer from "./components/containers/TitleContainer";

export default function Home() {
  return (
    <div className="z-50 flex min-h-screen flex-col items-center gap-10 bg-slate-50 p-10 lg:flex-row lg:items-baseline lg:justify-between lg:gap-3">
      <TitleContainer />
      <SlideContainer />
    </div>
  );
}

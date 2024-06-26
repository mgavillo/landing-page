"use client"

import Image from "next/image";
import Hero from "./home/Hero";
import Numbers from "./home/Numbers";
import Dare from "./home/Dare";
// import Challenge from "./home/Challenge";
import Witness from "./home/Witness";
import Friends from "./home/Friends";
import Lock from "./home/Lock";
import Commit from "./home/Commit";
import End from "./home/End";
import CTA from "./home/CTA";
import Challenge from "./home/Challenge copy 2";
// import Challenge from "./home/Challenge copy";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden w-screen">
      <header className="flex flex-row justify-between w-full fixed top-0 h-20 px-3 md:px-4 lg:px-10 xl:px-12 items-center bg-[#00001E30] backdrop-blur-lg z-50">
        <div className="flex flex-row gap-1 md:gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={60} height={60} className=" scale-75 md:scale-100" />
          <h3 className=" text-white font-semibold text-xl">Ascend.sh</h3>
        </div>
        <button className=" text-xs lg:text-base text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-3 md:px-6 py-1 md:py-2 hover:opacity-80 transition-opacity">Download app</button>

      </header>
      <div className=" w-full flex flex-col items-center gap-32 md:gap-48 lg:gap-60 xl:gap-72">
        <Hero />
        <Numbers />
        <Challenge />
        <Witness />
        <Friends />
        <Lock />
        <Commit />
        <End />
        <CTA />
      </div>
      <footer className="flex flex-row justify-between w-full h-20 px-12 items-center">
        <div>
          Ascend
        </div>
        <div className="flex flex-row gap-4">
          <p>Twitter</p>
          <p>Discord</p>
        </div>
      </footer>
    </main>
  );
}

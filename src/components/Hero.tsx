import React from "react";
import SocialMenu from "./SocialMenu";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full px-3 lg:container mx-auto flex flex-col place-content-center items-center">
        <h1 className="font-semibold text-center text-base md:text-4xl mb-4 text-gray-900 dark:text-white">
          Innovative <strong className="font-bold">ideas</strong> from a 
          <br />
          <span className="italic">unique</span> perspective.
        </h1>
        <Navigation className="mb-4" />
        <div className="p-4 w-full md:w-2/3 h-auto flex flex-row flex-nowrap justify-between items-center shadow-lg rounded-lg bg-[rgba(255, 255, 255, 0.3)] dark:bg-gray-800">
          <p className="leading-6 font-normal text-sm md:text-xl text-center">
            Croc.io is on a mission to showcase the joys of entrepreneurship from the eyes of neurodivergent individuals as well as promote and encourage all companies to adopt inclusive hiring programs.
          </p>
        </div>
        <SocialMenu />
      </div>
    </div>
  );
}

import { useState } from "react";
import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/gride";

export default function App() {
  return (
    <>
      <MobileHeader />
      <div className="topContainer">
        <div className="desktopMenu"></div>
        <DeskHeader />
        <Gride />
      </div>
    </>
  );
}

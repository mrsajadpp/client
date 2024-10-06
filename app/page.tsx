import { useState } from "react";
import Carousel from '@/components/Carousel';
import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import Header from "@/components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}

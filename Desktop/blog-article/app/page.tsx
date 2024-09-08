"use client";
import { useState } from "react";
import "@/app/globals.css";
import LandingPage from "@/pages/home-page";
import "@fontsource/poppins";
import bg from "@/assets/image/bg.jpg";
export default function App() {
  return (
    <div className="relative flex gap-6 w-full h-[100vh] justify-center items-center">
      {/* Background with Pseudo-element */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`,
          opacity: 0.4, // Opacity applied to the background image
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <LandingPage />
      </div>
    </div>
  );
}

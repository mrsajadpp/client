'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';


const Header = () => {
    return (
        <>
            <header className="mobile-header">
                <div className="left">
                    <button id="menuButton">
                        <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
                            <path
                                d="M176.15-261.08q-11.63 0-19.85-8.22-8.22-8.23-8.22-19.87 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.23 8.22 8.22 8.22 19.67 0 11.64-8.22 19.85t-19.66 8.21H176.15Zm0-191.34q-11.63 0-19.85-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.22 8.22 8.23 8.22 19.67 0 11.64-8.22 19.85-8.22 8.22-19.66 8.22H176.15Zm0-191.35q-11.63 0-19.85-8.22-8.22-8.23-8.22-19.87 0-11.45 8.22-19.66t19.85-8.21h607.89q11.44 0 19.66 8.22 8.22 8.23 8.22 19.68 0 11.64-8.22 19.85t-19.66 8.21H176.15Z" />
                        </svg>
                    </button>
                </div>
                <div className="logo">
                    <a href="/">
                        <img src={grovixLog.src} alt="CineCast" />
                    </a>
                </div>
                <div className="right">
                    {/* <button id="searchIcon">
            <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
              <path
                d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
            </svg>
          </button> */}
                </div>
            </header>
            <header className="desktop-header">
                <div className="logo">
                    <a href="/">
                        <img src={grovixLog.src} alt="Cinecast Entertainments" />
                    </a>
                </div>
                <div className="menu">
                    <div className="menuItem">
                        <a href="/">Home</a>
                    </div>
                    <div className="menuItem">
                        <a href="./trending.html">Trending</a>
                    </div>
                    <div className="menuItem">
                        <a href="./contact-us.html">Contact</a>
                    </div>
                </div>
                <div className="search">
                    <form action="/">
                        <input type="text" name="search" id="search" placeholder="Search for anime, series, etc." />
                        <button>
                            <svg xmlns="http://w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000">
                                <path
                                    d="M382.23-340.23q-100.36 0-169.74-69.43-69.37-69.42-69.37-169.5 0-100.07 69.32-169.53 69.31-69.46 169.49-69.46t169.65 69.47q69.46 69.47 69.46 169.62 0 41.91-14.08 80.75-14.08 38.85-37.58 67.26l228.35 227.81q8 7.97 8.19 19.53.19 11.56-8.4 20.06-8.6 8.5-19.87 8.5-11.27 0-19.64-8.37L529.88-391.89q-29.73 24.77-68.42 38.22-38.69 13.44-79.23 13.44Zm-.15-55.96q76.8 0 129.9-53.02 53.1-53.03 53.1-130 0-76.98-53.1-129.98-53.1-53-130-53t-129.9 53.02q-53 53.02-53 130 0 76.98 53.01 129.98 53.02 53 129.99 53Z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;

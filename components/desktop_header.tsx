'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';
import { getCookie } from 'cookies-next';

// Define the props interface
interface MobileHeaderProps {
    page: 'home' | 'search' | 'trending' | 'null';
    path: React.ReactNode;
}


const Header: React.FC<MobileHeaderProps> = ({ page, path }) => {

    const [jwt, setJwt] = useState<string | null>(null);

    useEffect(() => {
        const token = getCookie("token");

        setJwt(token ? String(token) : null);
    }, []);


    return (
        <>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
            <div className="desktop-header">
                <div className="logo-area">
                    <Link href="/">
                        <img src={grovixLog.src} alt="CineCast" />
                    </Link>
                </div>
                <div className="menu-area">
                    <div className="menu-list">
                        <div className={`menuItem ${page === "home" ? "active" : "no-active"}`}>
                            <Link href="/">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-house-blank"></i>
                                </div>
                                <div className="menuText">
                                    Home
                                </div>
                            </Link>
                        </div>
                        <div className={`menuItem ${page === "search" ? "active" : "no-active"}`}>
                            <a href="/">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-search"></i>
                                </div>
                                <div className="menuText">
                                    Search
                                </div>
                            </a>
                        </div>
                        <div className={`menuItem ${page === "trending" ? "active" : "no-active"}`}>
                            <Link href="/trending">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-arrow-trend-up"></i>
                                </div>
                                <div className="menuText">
                                    Trending
                                </div>
                            </Link>
                        </div>
                        {jwt ? (<div className="menuItem">
                            <Link href="/dashboard">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-apps"></i>
                                </div>
                                <div className="menuText">
                                    Dashboard
                                </div>
                            </Link>
                        </div>) : (<></>)}
                        <div className="menuItem">
                            <Link href={`${jwt ? "/auth/logout" : "/auth/login"}`} className='registerButton'>
                                <div className="menuIcon">
                                    <i style={{ color: "red" }} className="fi fi-rr-enter"></i>
                                </div>
                                <div style={{ color: "red" }} className="menuText">
                                    {jwt ? "Logout" : "Login"}
                                </div>
                            </Link>
                        </div>
                        {jwt ? (<div className="menuItem profileArea">
                            <Link href={`${jwt ? "/dashboard" : ""}`}>
                                <div className="menuIcon">
                                    <div className="profile">
                                        <img src="https://media.licdn.com/dms/image/v2/D5603AQFbxYf0nBc8QA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718216442374?e=1733961600&v=beta&t=sq7_Ul7B1TnCWmMOX2aadbKGvwruMbJ-kRL1pqa1d-w" alt="" />
                                    </div>
                                </div>
                                <div className="menuText">
                                    Sajad
                                </div>
                            </Link>
                        </div>) : (<></>)}
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <span>{path}</span>
            </div>
        </>
    );
};

export default Header;

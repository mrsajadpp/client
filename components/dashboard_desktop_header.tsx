'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';
import { getCookie } from 'cookies-next';

// Define the props interface
interface MobileHeaderProps {
    page: 'dashboard' | 'settings' | 'articles' | "earnings" | 'null';
    path: React.ReactNode;
}


interface Address {
    address_line_one?: string;
    addressline_two?: string;
    country?: string;
    state?: string;
    city?: string;
    zip_code?: string;
}

interface Interests {
    [key: string]: number; // Dynamic keys with numeric values
}

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    country_code: number;
    contact_no: number;
    date?: Date; // Optional, as it has a default value
    admin: boolean;
    verified: boolean;
    status: boolean;
    sex?: string;
    about?: string;
    address?: Address; // Optional
    date_of_birth?: string; // Optional
    interests?: Interests; // Optional
    profile_url?: string;
}


const Header: React.FC<MobileHeaderProps> = ({ page, path }) => {

    const [jwt, setJwt] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = getCookie("token");

        setJwt(token ? String(token) : null);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (jwt) {
                try {
                    const response = await fetch('http://192.168.1.60:3001/api/user/own/user-data', {
                        method: 'GET',
                        headers: {
                            'Authorization': `${jwt}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }

                    const data = await response.json();

                    setUser(data);
                } catch (err) {
                    console.log(err);
                }
            };
        };

        fetchUserData();
    }, [jwt]);


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
                        <div className={`menuItem ${page === "dashboard" ? "active" : "no-active"}`}>
                            <Link href="/dashboard">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-apps"></i>
                                </div>
                                <div className="menuText">
                                    Dashboard
                                </div>
                            </Link>
                        </div>
                        <div className={`menuItem ${page === "articles" ? "active" : "no-active"}`}>
                            <a href="/">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-pen-swirl"></i>
                                </div>
                                <div className="menuText">
                                    Articles
                                </div>
                            </a>
                        </div>
                        <div className={`menuItem ${page === "earnings" ? "active" : "no-active"}`}>
                            <Link href="/trending">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-money-bill-wave"></i>
                                </div>
                                <div className="menuText">
                                    Earnings
                                </div>
                            </Link>
                        </div>
                        <div className={`menuItem ${page === "settings" ? "active" : "no-active"}`}>
                            <Link href="/trending">
                                <div className="menuIcon">
                                    <i className="fi fi-rr-settings"></i>
                                </div>
                                <div className="menuText">
                                    Settings
                                </div>
                            </Link>
                        </div>
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
                                        <img src={user?.profile_url} alt="" />
                                    </div>
                                </div>
                                <div className="menuText">
                                    <span className='nametext'>{user ? `${user.first_name}` : null}</span>
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

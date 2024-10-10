'use client'
import { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@/app/css/login.css";
import grovixLog from '@/assets/image/grovix-lab.png';
import Image from 'next/image';
import Link from "next/link";
import Head from 'next/head';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function App() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                deleteCookie('token');
                location.href = "/";
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        </>
    );
}

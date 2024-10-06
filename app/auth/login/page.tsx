'use client'
import { useState } from "react";
import "@fontsource/poppins";
import "@/app/css/login.css";
import Script from 'next/script';
import grovixLog from '@/assets/image/grovix-lab.png';
import Image from 'next/image';
import Link from "next/link";

export default function App() {
    const handlePass = () => {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordInput.textContent = type === 'password' ? '👁️' : '🔒';
        } else {
            console.error('Password element not found.');
        }
    }

    return (
        <>
            <div className="container">
                <form action="/auth/login" method="post" className="regForm">
                    <div className="inputImage">
                        <img loading="lazy" decoding="async" src={grovixLog.src} alt="" />
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" value="" id="email" placeholder="Email" />
                    </div>
                    <div className="inputBox" style={{ background: "#f0f0f0" }}>
                        <input type="password" placeholder="Password" name="password" id="password" />
                        <button type="button" id="togglePassword" onClick={handlePass}
                            style={{ marginLeft: "-30px", background: "none", border: "none", cursor: "pointer" }}>
                            👁️
                        </button>
                    </div>
                    <div className="inputText hidden">
                        <span className="textMsg" style={{ color: "red" }}>Wrong paswword</span>
                    </div>
                    <div className="inputText">
                        <span>
                            <Link href="/auth/recover">Forgot password?</Link>
                        </span>
                    </div>
                    <div className="inputBox">
                        <button>
                            LogIn
                        </button>
                    </div>
                    <div className="inputText">
                        <span>Dont have an account? <Link href="/auth/signup">SignUp</Link>.</span>
                    </div>
                </form>
            </div>
        </>
    );
}
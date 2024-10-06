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
                <form action="/auth/signup" method="post" className="regForm">
                    <div className="inputImage">
                        <img loading="lazy" decoding="async" src={grovixLog.src} alt="" />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="first_name" value="" id="firts_name" placeholder="First Name" />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="last_name" id="last_name" value="" placeholder="Last Name" />
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" value="" id="email" placeholder="Email" />
                    </div>
                    <div className="inputBox">
                        <input type="number" style={{ borderRadius: "0px", width: "40px" }} name="country_code"
                            value="" id="country_code" placeholder="+91" />
                        &nbsp;
                        <input type="tel" style={{ borderRadius: "0px" }} name="phone" value="" id="phone"
                            placeholder="Phone" />
                    </div>
                    <div className="inputBox" style={{ background: "#f0f0f0" }}>
                        <input type="password" placeholder="Password" name="password" id="password" />
                        <button type="button" id="togglePassword" onClick={handlePass}
                            style={{ marginLeft: "-30px", background: "none", border: "none", cursor: "pointer" }}>
                            👁️
                        </button>
                    </div>
                    <div className="inputText">
                        <input type="checkbox" name="terms_accept" id="terms" />
                        <span>
                            By using our services, you are accepting our <Link href="/terms-of-service" target="_blank">terms
                                of service</Link>.
                        </span>
                    </div>
                    <div className="inputBox">
                        <button>
                            SignUp
                        </button>
                    </div>
                    <div className="inputText">
                        <span>Do you have a account? <Link href="/auth/login">LogIn</Link>.</span>
                    </div>
                </form>
            </div>
        </>
    );
}

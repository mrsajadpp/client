'use client'
import { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@/app/css/login.css";
import thintryLogo from '@/public/img/logo.png';
import Image from 'next/image';
import Link from "next/link";
import Head from 'next/head';
import { setCookie, getCookie } from 'cookies-next';


// export const metadata = {
//     title: "Login / Grovix Lab",
//     description: "Generated by Next.js",
// };

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // State to track password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    useEffect(() => {
        let jwt = getCookie("token");
        jwt ? (location.href = "/") : null;
        document.title = "Login / Grovix Lab";
    }, []);

    const login = async (username: string, password: string) => {
        const res = await fetch('http://192.168.1.60:3002/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: username, password }),
        });

        if (res.ok) {
            const { jwt_token } = await res.json();
            localStorage.setItem('token', jwt_token);
            setCookie('token', jwt_token);
            location.href = "/";
        } else {
            alert("Login failed");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        login(username, password); // Call login function
    };

    return (
        <>
            <Head>
                <title>Login / Grovix Lab</title>
            </Head>
            <div className="container">
                <form className="regForm" onSubmit={handleSubmit}>
                    <div className="inputImage">
                        <img src={thintryLogo.src} alt="Grovix Lab Logo" />
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" id="email" onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="inputBox" style={{ background: "#f0f0f0" }}>
                        {/* Password Input */}
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Toggle Password Visibility Button */}
                        <button
                            type="button"
                            id="togglePassword"
                            style={{ marginLeft: "-30px", background: "none", border: "none", cursor: "pointer" }}
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                // Hide Icon
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 8.56666C4.4 3.36666 11.6 3.36666 14 8.56666M8 11.3667C7.57565 11.3667 7.16869 11.1981 6.86863 10.898C6.56857 10.598 6.4 10.191 6.4 9.76666C6.4 9.34231 6.56857 8.93534 6.86863 8.63529C7.16869 8.33523 7.57565 8.16666 8 8.16666C8.42435 8.16666 8.83131 8.33523 9.13137 8.63529C9.43143 8.93534 9.6 9.34231 9.6 9.76666C9.6 10.191 9.43143 10.598 9.13137 10.898C8.83131 11.1981 8.42435 11.3667 8 11.3667Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            ) : (
                                // Show Icon
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4.66667C4.4 9.86667 11.6 9.86667 14 4.66667M11.8528 7.32107L14 10.2667M8 8.56667V11.4667M4.1472 7.32107L2 10.2667" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="inputText">
                        <span>
                            <Link href="/auth/recover">Forgot password?</Link>
                        </span>
                    </div>
                    <div className="inputBox inputButton">
                        <button type="submit">
                            LogIn
                        </button>
                    </div>
                    <div className="inputText">
                        <span>Don't have an account? <Link href="/auth/register">Register</Link>.</span>
                    </div>
                </form>
            </div>
        </>
    );
}

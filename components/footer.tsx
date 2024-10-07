'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';
import "@/app/css/gride.css";

const Gride = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__addr">
                    <img loading="lazy" decoding="async" className="footer__logo" src={grovixLog.src} alt="" />

                    <h2></h2>

                    <address>
                        Kochi, Cochin Ernakulam, Dt-Kerala State Pin - 682011.<br />
                        <a className="footer__btn" href="mailto:support@grovixlab.com">Email Us</a>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title"><strong>Social</strong></h2>
                        <ul className="nav__ul nav__ul--extra">
                            <li><a href="/auth/signup">Instagram</a></li>
                            <li><a href="/auth/login">YouTube</a></li>
                            <li><a href="/dashboard">Facebook</a></li>
                            <li><a href="/dashboard/settings/">TikTok</a></li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title"><strong>Legal</strong></h2>
                        <ul className="nav__ul">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-use">Terms of Use</a></li>
                            <li><a href="/sitemap.xml">Sitemap</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2024 <span style={{ color: "#000" }}><b>Grovix Lab</b></span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
};

export default Gride;
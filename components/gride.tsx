'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/app/css/gride.css";

const Gride = () => {
    return (
        <>
            <div className="grid-container">
                <div className="card">
                    <a href="https://example.com/solid-principles">
                        <img src="https://via.placeholder.com/400x200" alt="SOLID Principles"/>
                            <div className="card-content">
                                <h3 className="card-title">SOLID Principles</h3>
                                <p className="card-paragraph">An introduction to SOLID principles in programming and how they can improve your code structure.</p>
                            </div>
                    </a>
                </div>

                <div className="card">
                    <a href="https://example.com/skill-recommendation">
                        <img src="https://via.placeholder.com/400x200" alt="Skill Recommendation Algorithm"/>
                            <div className="card-content">
                                <h3 className="card-title">Skill Recommendation Algorithm</h3>
                                <p className="card-paragraph">How Peerlist recommends skills using collaborative filtering techniques to match your profile.</p>
                            </div>
                    </a>
                </div>

                <div className="card">
                    <a href="https://example.com/docker-mongodb">
                        <img src="https://via.placeholder.com/400x200" alt="Docker to MongoDB"/>
                            <div className="card-content">
                                <h3 className="card-title">Docker to MongoDB</h3>
                                <p className="card-paragraph">Guide on how to transfer data between Docker and a MongoDB instance securely and efficiently.</p>
                            </div>
                    </a>
                </div>

                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://via.placeholder.com/400x200" alt="Google One Tap Login"/>
                            <div className="card-content">
                                <h3 className="card-title">Google One Tap Login</h3>
                                <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                            </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://via.placeholder.com/400x200" alt="Google One Tap Login"/>
                            <div className="card-content">
                                <h3 className="card-title">Google One Tap Login</h3>
                                <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                            </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://via.placeholder.com/400x200" alt="Google One Tap Login"/>
                            <div className="card-content">
                                <h3 className="card-title">Google One Tap Login</h3>
                                <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                            </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://via.placeholder.com/400x200" alt="Google One Tap Login"/>
                            <div className="card-content">
                                <h3 className="card-title">Google One Tap Login</h3>
                                <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                            </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://via.placeholder.com/400x200" alt="Google One Tap Login"/>
                            <div className="card-content">
                                <h3 className="card-title">Google One Tap Login</h3>
                                <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                            </div>
                    </a>
                </div>
                
            </div>
        </>
    )
};

export default Gride;
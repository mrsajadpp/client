'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/app/css/gride.css";

const Gride = () => {
    return (
        <>
            <div className="grid-container t-grid-container">
                <div className="card">
                    <Link href="/article/dbhyuhehf">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/what-is-a-role-of-design-engineer.webp" alt="SOLID Principles" />
                        <div className="card-content">
                            <p className="card-title">SOLID Principles</p>
                            <p className="card-paragraph">An introduction to SOLID principles in programming and how they can improve your code structure.</p>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <a href="https://example.com/skill-recommendation">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/how-to-use-flexbox-in-tailwindcss.webp" alt="Skill Recommendation Algorithm" />
                        <div className="card-content">
                            <p className="card-title">Skill Recommendation Algorithm</p>
                            <p className="card-paragraph">How Peerlist recommends skills using collaborative filtering techniques to match your profile.</p>
                        </div>
                    </a>
                </div>

                <div className="card">
                    <a href="https://example.com/docker-mongodb">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/what-are-pick-and-omit-utility-types-in-typescript.webp" alt="Docker to MongoDB" />
                        <div className="card-content">
                            <p className="card-title">Docker to MongoDB</p>
                            <p className="card-paragraph">Guide on how to transfer data between Docker and a MongoDB instance securely and efficiently.</p>
                        </div>
                    </a>
                </div>

                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/python-features.webp" alt="Google One Tap Login" />
                        <div className="card-content">
                            <p className="card-title">Google One Tap Login</p>
                            <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/peerlist-interaction-design-challenge.webp" alt="Google One Tap Login" />
                        <div className="card-content">
                            <p className="card-title">Google One Tap Login</p>
                            <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/slack-story/story-of-slack-side-project.webp" alt="Google One Tap Login" />
                        <div className="card-content">
                            <p className="card-title">Google One Tap Login</p>
                            <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/navigating-through-layoffs-book-recommendation.webp" alt="Google One Tap Login" />
                        <div className="card-content">
                            <p className="card-title">Google One Tap Login</p>
                            <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href="https://example.com/google-one-tap">
                        <img src="https://substackcdn.com/image/fetch/w_1280,h_853,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbafa72f7-7687-4286-a87c-3a96a465387c_2400x1260.png" alt="Google One Tap Login" />
                        <div className="card-content">
                            <p className="card-title">Google One Tap Login</p>
                            <p className="card-paragraph">Learn how to implement Google One Tap login in your Next.js application for seamless authentication.</p>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
};

export default Gride;
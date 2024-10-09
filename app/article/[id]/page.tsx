'use server'
import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/intrest_gride";
import Footer from "@/components/footer";
import "@/app/css/article.css";

export default async function App() {
    return (
        <>
            <MobileHeader page={"null"}/>
            <div className="topContainer">
                <div className="desktopMenu"></div>
                <DeskHeader page={"null"} />
                <div className="mainContainer">
                    <div className="articleContainer">
                        <article className="article">
                            <h1 className="article-title">The Future of Web Development</h1>
                            <p className="article-author">By John Doe | October 7, 2024</p>
                            <img src="https://dqy38fnwh4fqs.cloudfront.net/blog/og-image/what-is-a-role-of-design-engineer.webp" alt="Web Development" className="article-image" />

                            <section className="article-content">
                                <p>Web development is an ever-evolving field, with new technologies, frameworks, and tools emerging at a rapid pace. Developers are always on the lookout for the latest trends and innovations to keep their skills sharp and their projects competitive.</p>

                                <p>From advancements in JavaScript frameworks to the rise of AI-driven development tools, the landscape of web development has never been more exciting. In this article, we'll explore some of the key trends shaping the future of the industry.</p>

                                <h2>1. JavaScript Frameworks</h2>
                                <p>JavaScript continues to dominate the world of web development. Popular frameworks like React, Vue, and Angular are constantly evolving, making it easier than ever to build powerful, scalable web applications. These frameworks provide developers with the tools they need to create dynamic, responsive interfaces with minimal effort.</p>

                                <h2>2. AI-Driven Development</h2>
                                <p>Artificial Intelligence (AI) is revolutionizing many industries, and web development is no exception. AI-powered tools can help automate various tasks, from generating code to optimizing user interfaces. This allows developers to focus more on creative problem-solving and less on repetitive, time-consuming tasks.</p>

                                <h2>3. Progressive Web Apps (PWAs)</h2>
                                <p>PWAs are web applications that offer a native app-like experience while being accessible through a web browser. They are fast, reliable, and can work offline, making them an attractive option for businesses looking to enhance the user experience without investing in native app development.</p>

                                <h2>4. Conclusion</h2>
                                <p>The future of web development is bright, with endless possibilities for innovation. Developers who stay up-to-date with the latest trends and technologies will be well-positioned to create amazing web experiences for years to come.</p>
                            </section>
                        </article>
                    </div>
                    <div className="grideGroup">
                        <Gride />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

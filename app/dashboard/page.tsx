import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/trending_gride";
import Footer from "@/components/footer";
import Link from "next/link";
import "@/app/css/article.css";
import "@/app/css/profile.css";

export const metadata = {
    title: "Trending Articles / Grovix Lab",
    description: "Start reading trending articles now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
    const path = (
        <>
            <Link href="/">Home</Link>&nbsp;&gt;&nbsp;<Link href="/dashboard">Dashboard</Link>
        </>
    );
    return (
        <>
            <MobileHeader page={"dashboard"} path={path} />
            <div className="topContainer">
                <div className="desktopMenu"></div>
                <DeskHeader page={"dashboard"} path={path} />
                <div className="mainContainer">
                    <div className="fitCo">
                        <div className="profile-container">
                            <div className="profile-area">
                                <div className="profile-image">
                                    <div className="image">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIrvLe0CF0XVFjtd7cC2STP1QZdcAWLzoZqK8W_bvEOhnQssmlh=s96-c" alt="" />
                                    </div>
                                    {/* <div className="follow-button">
                                        <button>
                                            <div className="icon">
                                                <i className="fi fi-rr-pencil"></i>
                                            </div>
                                        </button>
                                    </div> */}
                                </div>
                                <div className="profile-name">
                                    <h2>Sajad PP</h2>
                                    <span>Backend Web Developer, Founder of Grovix Lab.</span>
                                </div>
                            </div>
                            <div className="metrices">
                                <span>Other options are coming soon.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

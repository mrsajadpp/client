import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/intrest_gride";
import Footer from "@/components/footer";

export const metadata = {
    title: "Trending Articles / Grovix Lab",
    description: "Start reading trending articles now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
    return (
        <>
            <MobileHeader page={"trending"} />
            <div className="topContainer">
                <div className="desktopMenu"></div>
                <DeskHeader page={"trending"} />
                <Gride />
            </div>
            <Footer />
        </>
    );
}

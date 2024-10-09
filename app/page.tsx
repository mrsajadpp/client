import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/intrest_gride";
import Footer from "@/components/footer";

export const metadata = {
  title: "Find Your Perfect Articles, Every Time.",
  description: "Start reading now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
  return (
    <>
      <MobileHeader page={"home"} path={""} />
      <div className="topContainer">
        <div className="desktopMenu"></div>
        <DeskHeader page={"home"} path={""} />
        <div className="mainContainer">
          <div className="fitCo">
            <div className="grideGroup">
              <Gride />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeCallouts from "../components/HomeCallouts";
import Testimonials from "../components/Testimonials";
import HomeStrapline from "../components/HomeStrapline";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeCallouts />
      <Testimonials />
      <HomeStrapline />
      <Footer />
    </div>
  );
}

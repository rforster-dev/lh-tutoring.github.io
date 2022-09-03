import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Testimonials from "../components/Testimonials";
import HomeStrapline from "../components/HomeStrapline";
export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Testimonials />
      <HomeStrapline />
      <Footer />
    </div>
  );
}

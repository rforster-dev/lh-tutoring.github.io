import Header from "../components/Header";
import Footer from "../components/Footer";
import Prices from "../components/Prices";
import Testimonials from "../components/Testimonials";
import HomeStrapline from "../components/HomeStrapline";
export default function Home() {
  return (
    <div>
      <Header />
      <Prices />
      <Testimonials />
      <HomeStrapline />
      <Footer />
    </div>
  );
}

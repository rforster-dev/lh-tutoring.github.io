import Header from "../components/Header";
import Footer from "../components/Footer";
import Subjects from "../components/Subjects";
import Testimonials from "../components/Testimonials";
import HomeStrapline from "../components/HomeStrapline";
export default function Home() {
  return (
    <div>
      <Header />
      <Subjects />
      <Testimonials />
      <HomeStrapline />
      <Footer />
    </div>
  );
}

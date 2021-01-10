import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Hours from "../components/Hours";
import Map from "../components/Map";
import Signature from "../components/Signature";
import Social from "../components/Social";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mx-6">
        <About />
        <div className="mx-6">
          <Contact />
          <Hours />
          <Social />
          <Signature />
        </div>
      </div>
      <Map />
    </div>
  );
}

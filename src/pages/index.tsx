import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Hours from "../components/Hours";
import Map from "../components/Map";
import Menu from "../components/Menu";
import Signature from "../components/Signature";
import Social from "../components/Social";

export default function Home() {
  return (
    <div id={"home"}>
      <Banner />
      <div className="mx-6">
        <div id={"about"}>
          <About />
        </div>
        <div id={"hours"}>
          <Hours />
        </div>
        <div id={"menu"}>
          <Menu />
        </div>
        <div id={"contact"}>
          <Contact />
        </div>
        <Social />
        <Signature />
      </div>
      <Map />
    </div>
  );
}

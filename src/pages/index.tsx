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
        <div id={"about"} className="itemcontainer">
          <About />
        </div>
        <div id={"hours"} className="itemcontainer">
          <Hours />
        </div>
        <div id={"menu"} className="itemcontainer">
          <Menu />
        </div>
        <div id={"contact"} className="itemcontainer">
          <Contact />
        </div>
        <div className="itemcontainer">
          <Social />
        </div>
        <div className="itemcontainer">
          <Signature />
        </div>
      </div>
      <Map />
    </div>
  );
}

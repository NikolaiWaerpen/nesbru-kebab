import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Hours from "../components/Hours";
import Map from "../components/Map";
import Menu from "../components/Menu";
import Signature from "../components/Signature";
import Social from "../components/Social";
import Test from "../components/Test";

export default function Home() {
  return (
    <div id={"home"}>
      <Banner />
      <div>
        <div id={"about"} className="itemcontainer mx-6 lg:mx-16">
          <About />
        </div>
        <div id={"hours"} className="itemcontainer mx-6 lg:mx-16">
          <Hours />
        </div>
        <div id={"menu"} className="itemcontainer">
          <Menu />
        </div>
        <div className="mx-6 sm:mx-44 lg:mx-16 lg:flex lg:justify-around">
          <div id={"contact"} className="itemcontainer">
            <Contact />
          </div>
          <div id={"social"} className="itemcontainer lg:mt-12">
            <Social />
          </div>
        </div>
      </div>
      <div className="itemcontainer">
        <Signature />
      </div>
      <Map />
    </div>
  );
}

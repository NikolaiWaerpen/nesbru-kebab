import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../consts";

export default function Banner() {
  return (
    <div className="relative z-0 bg-offblack">
      <img
        src="/images/flour-big.jpg"
        alt="background flour"
        className="w-screen h-screen75 lg:h-screen object-cover opacity-25"
      />
      {/* <div className="absolute inset-0 flex justify-center top-48 z-20">
        <h1 className="text-4xl lg:text-10xl text-offwhite font-extrabold tracking-wider uppercase">
          Nesbru kebab
        </h1>
      </div> */}
      <div className="absolute inset-0 flex justify-center z-20 lg:mx-0 top-32 lg:top-32">
        <img
          src="/images/blackburger.png"
          // src="/images/nesbrukebab/nesbrukebabwhite.png"
          alt="logo picture/burger"
          className="w-full h-screen58 object-cover lg:h-screen lg:object-contain"
        />
      </div>
      <div className="absolute inset-0 flex justify-center top-3/4 z-40">
        <Link to="menu" smooth={true} duration={1000}>
          <button className="button">Meny</button>
        </Link>
      </div>
    </div>
  );
}

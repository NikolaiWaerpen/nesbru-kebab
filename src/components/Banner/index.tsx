import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../consts";

export default function Banner() {
  return (
    <div className="relative z-0 bg-offblack">
      <img
        src="/images/flour-big.jpg"
        alt="background flour"
        className="w-screen h-screen object-cover opacity-25"
      />
      <div className="absolute inset-0 flex justify-center top-1/3 z-20">
        <h1 className="text-4xl lg:text-10xl text-white font-extrabold tracking-wider uppercase">
          Nesbru Kebab
        </h1>
        <span className="text-gray-400">(temp)</span>
      </div>
      <div className="absolute inset-0 flex justify-center top-64 z-30">
        <img
          src="/images/blackburger.png"
          alt="logo picture/burger"
          className="w-max h-screen object-cover"
        />
      </div>
      <div className="absolute inset-0 flex justify-center top-3/4 z-40">
        <Link to="menu" smooth={true} duration={1000}>
          <button className="button">Se meny</button>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../consts";

export default function Banner() {
  return (
    <div className="relative z-0 bg-offblack">
      <img
        src="/images/flour-big.jpg"
        alt="logo picture/burger"
        className="w-screen h-screen object-cover opacity-25"
      />
      <div className="absolute inset-0 flex justify-center top-3/4">
        <Link to="menu" smooth={true} duration={1000}>
          <button className="button">Se meny</button>
        </Link>
      </div>
    </div>
  );
}

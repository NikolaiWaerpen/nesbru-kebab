import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../consts";

export default function Banner() {
  return (
    <div className="bg-themecolor1">
      <div className="relative">
        <img
          src="/images/flour-big.jpg"
          alt="logo picture/burger"
          className="w-screen max-h-screen object-cover"
        />
        <div className="absolute inset-0 flex justify-center top-3/4">
          <Link to="menu" smooth={true} duration={1000}>
            <button className="button">Se meny</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

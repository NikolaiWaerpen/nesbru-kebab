import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div>
      <img
        src="/images/flour-big.jpg"
        alt="logo picture/burger"
        className="w-screen max-h-screen object-cover"
      />
      <div className="bg-dropdown">
        <Link to="menu" smooth={true} duration={1000}>
          <button className="button">Se meny</button>
        </Link>
      </div>
    </div>
  );
}

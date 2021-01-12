import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <img
        src="/images/flour-big.jpg"
        alt="logo picture/burger"
        className="w-screen max-h-screen object-cover"
      />
      <div className="bg-dropdown">
        <Link href="#menu">
          <button className="button">Se meny</button>
        </Link>
      </div>
    </div>
  );
}

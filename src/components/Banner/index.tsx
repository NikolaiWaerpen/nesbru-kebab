import Image from "next/image";

export default function Banner() {
  return (
    <div className="">
      <img
        src="/images/flour-big.jpg"
        alt="logo picture/burger"
        className="w-screen max-h-screen object-cover"
      />
      <button className="uppercase">lorem</button>
    </div>
  );
}

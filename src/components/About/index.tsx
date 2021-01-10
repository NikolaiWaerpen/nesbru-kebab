export default function About() {
  return (
    <div className="mt-12">
      <h3 className="rounded-lg py-1 px-3 uppercase text-xs lg:text-sm font-semibold tracking-wider text-white bg-black inline-block">
        Om oss
      </h3>
      <h1 className="font-bold text-4xl mt-5">
        Vi leverer de beste ingrediensene til våre pålitelige matelskere
      </h1>
      <p className="text-gray-600 mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veniam iure
        aliquam id reiciendis velit praesentium voluptatem porro ipsam minus,
        earum eveniet amet odio quod dolorum inventore nobis, quos esse.
      </p>
      <img
        src="/images/flour-big.jpg"
        alt="logo picture/burger"
        className="w-screen max-h-screen object-cover rounded-3xl mt-5"
      />
    </div>
  );
}

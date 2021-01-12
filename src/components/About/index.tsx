export default function About() {
  return (
    <div>
      <h3 className="smallbadge">Om oss</h3>
      <h1 className="font-bold text-4xl itemcontent text-black">
        Vi leverer de beste ingrediensene til våre pålitelige matelskere
      </h1>
      <p className="text-secondarytextcolor mt-3">
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

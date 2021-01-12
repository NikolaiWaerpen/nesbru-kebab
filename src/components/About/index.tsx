export default function About() {
  return (
    <div>
      <h3 className="smallbadge">Om oss</h3>
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:ml-12  lg:flex lg:flex-col lg:justify-center">
          <h1 className="font-bold text-4xl itemcontent text-black">
            Vi leverer de beste ingrediensene til våre pålitelige matelskere
          </h1>
          <p className="text-secondarytextcolor mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veniam
            iure aliquam id reiciendis velit praesentium voluptatem porro ipsam
            minus, earum eveniet amet odio quod dolorum inventore nobis, quos
            esse.
          </p>
        </div>
        <img
          src="/images/flour-big.jpg"
          alt="logo picture/burger"
          className="w-screen max-h-screen lg:h-screen overflow-hidden object-cover rounded-3xl mt-5"
        />
      </div>
    </div>
  );
}

import BurgerItem from "./BurgerItem";
import { BURGERMENU, GRILLMENU, PIZZAMENU } from "../../../consts";
import PizzaItem from "./PizzaItem";
import GrillItem from "./GrillItem";

export default function Menu() {
  return (
    <div className="bg-offblack pt-6 pb-16">
      {/* <h3 className="rounded-lg py-1 px-3 uppercase text-xs lg:text-sm font-semibold tracking-wider text-white bg-black inline-block mx-6"> */}
      <h3 className="invertedsmallbadge mx-6">Meny</h3>
      <div>
        <div className="lg:flex">
          <img
            src="/images/burger.jpg"
            alt="pizza"
            className="hidden lg:block lg:w-screen/2 lg:h-screen/2 overflow-hidden object-cover itemcontent rounded-r-3xl"
          />
          <div className="lg:flex lg:flex-col lg:justify-center lg:ml-12">
            <h2 className="font-bold menutextcolorheader">Burgermeny</h2>
            {BURGERMENU.map((hamburger) => (
              <BurgerItem
                item={hamburger.name}
                size={hamburger.size}
                price={hamburger.price}
                dinnerprice={hamburger.dinnerprice}
              />
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse mt-16">
          <img
            src="/images/pizza.jpg"
            alt="pizza"
            className="hidden lg:block lg:w-screen/2 lg:max-h-full overflow-hidden object-cover itemcontent rounded-l-3xl"
          />
          <div className="lg:flex lg:flex-col lg:justify-center lg:ml-12">
            <h2 className="font-bold menutextcolorheader">Pizzameny</h2>
            {PIZZAMENU.map((pizza) => (
              <PizzaItem
                name={pizza.name}
                description={pizza.description}
                price={pizza.price}
              />
            ))}
          </div>
        </div>

        <div className="lg:flex mt-16">
          <img
            src="/images/kebab.png"
            alt="pizza"
            className="hidden lg:block lg:w-screen/2 lg:h-screen/2 overflow-hidden object-cover itemcontent rounded-r-3xl"
          />
          <div className="lg:flex lg:flex-col lg:justify-center lg:ml-12">
            <h2 className="font-bold menutextcolorheader">Grillmeny</h2>
            {GRILLMENU.map((grillitem) => (
              <GrillItem name={grillitem.name} price={grillitem.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

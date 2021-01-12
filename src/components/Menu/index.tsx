import BurgerItem from "./BurgerItem";
import { BURGERMENU, GRILLMENU, PIZZAMENU } from "../../../consts";
import PizzaItem from "./PizzaItem";
import GrillItem from "./GrillItem";

export default function Menu() {
  return (
    <div>
      <h3 className="rounded-lg py-1 px-3 uppercase text-xs lg:text-sm font-semibold tracking-wider text-white bg-black inline-block">
        Meny
      </h3>
      <div>
        <div className="flex">
          <img
            src="/images/burger.jpg"
            alt="pizza"
            className="max-w-screen-805 h-screen/2 object-cover itemcontent"
          />
          <h2 className="font-bold">Burgermeny</h2>
          {BURGERMENU.map((hamburger) => (
            <BurgerItem
              item={hamburger.name}
              size={hamburger.size}
              price={hamburger.price}
              dinnerprice={hamburger.dinnerprice}
            />
          ))}
        </div>

        <div>
          <img
            src="/images/pizza.jpg"
            alt="pizza"
            className="max-w-screen-805 h-screen/2 object-cover itemcontent"
          />
          <h2 className="font-bold">Pizzameny</h2>
          {PIZZAMENU.map((pizza) => (
            <PizzaItem
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
            />
          ))}
        </div>

        <div>
          <img
            src="/images/kebab.png"
            alt="pizza"
            className="max-w-screen-805 h-screen/2 object-cover itemcontent"
          />
          <h2 className="font-bold">Grillmeny</h2>
          {GRILLMENU.map((grillitem) => (
            <GrillItem name={grillitem.name} price={grillitem.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

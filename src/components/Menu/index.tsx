import BurgerItem from "./BurgerItem";
import { BURGERMENU, GRILLMENU, PIZZAMENU } from "../../../consts";
import PizzaItem from "./PizzaItem";
import GrillItem from "./GrillItem";

export default function Menu() {
  return (
    <div className="mt-12">
      <h3 className="rounded-lg py-1 px-3 uppercase text-xs lg:text-sm font-semibold tracking-wider text-white bg-black inline-block">
        Meny
      </h3>

      <h2 className="font-bold mt-6">Burgermeny</h2>
      {BURGERMENU.map((hamburger) => (
        <BurgerItem
          item={hamburger.name}
          size={hamburger.size}
          price={hamburger.price}
          dinnerprice={hamburger.dinnerprice}
        />
      ))}

      <h2 className="font-bold mt-12">Pizzameny</h2>
      {PIZZAMENU.map((pizza) => (
        <PizzaItem
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
        />
      ))}

      <h2 className="font-bold mt-12">Grillmeny</h2>
      {GRILLMENU.map((grillitem) => (
        <GrillItem name={grillitem.name} price={grillitem.price} />
      ))}
    </div>
  );
}

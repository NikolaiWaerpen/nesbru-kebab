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
      <div className="flex justify-end">
        <span className="mr-3">Ta med</span>
        <span>Spis her</span>
      </div>
      <div className="mt-3 flex justify-between">
        <span>Hamburger</span>
        <span>100G</span>
        <span>65,-</span>
        <span>72,-</span>
      </div>
      <div className="mt-1 flex justify-between">
        <span>Løvbiffburger</span>
        <span>120G</span>
        <span>85,-</span>
        <span>94,-</span>
      </div>

      <br />
      <br />
      <br />

      <div className="">
        <div className="grid grid-cols-4">
          <span className="bg-green-600">Hamburger</span>
          <span className="bg-red-600">100G</span>
          <span className="bg-blue-600">65,-</span>
          <span className="bg-purple-600">72,-</span>
        </div>

        <div className="grid grid-cols-4">
          <span className="bg-green-600">Løvbiffburger</span>
          <span className="bg-red-600">120G</span>
          <span className="bg-blue-600">85,-</span>
          <span className="bg-purple-600">94,-</span>
        </div>

        <div className="grid grid-cols-4">
          <span className="bg-green-600">Løvbiffburger</span>
          <span className="bg-red-600">120G</span>
          <span className="bg-blue-600">85,-</span>
          <span className="bg-purple-600">94,-</span>
        </div>
      </div>
      <h2 className="font-bold mt-12">Burgermeny</h2>
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

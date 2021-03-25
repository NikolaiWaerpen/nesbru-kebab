import {
  BURGERMENU,
  GRILLMENU,
  PIZZAMENU,
  // FASTPOPEFFECT,
} from "../../../consts";
import BurgerItem from "./BurgerItem";
import PizzaItem from "./PizzaItem";
import GrillItem from "./GrillItem";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <div className="bg-offblack pt-6 pb-6 shadow-xl">
      {/* <h3 className="rounded-lg py-1 px-3 uppercase text-xs xl:text-sm font-semibold tracking-wider text-white bg-black inline-block mx-6"> */}
      <div className="mx-12 md:mx-44">
        <h3 className="invertedsmallbadge">Meny</h3>
        <div>
          <div className="xl:flex mt-6 xl:mt-6">
            <motion.img
              src="/images/kebab.png"
              alt="pizza"
              className="itemcontentspacing xl:block xl:w-screen/2 xl:h-screen/2 xl:overflow-hidden xl:object-cover rounded-xl xl:rounded-r-3xl shadow-sm border-b-2 border-themecolor1"
              // variants={FASTPOPEFFECT}
              // initial="hidden"
              // animate="visible"
            />
            <div className="xl:flex xl:flex-col xl:justify-center xl:ml-20 xl:w-1/6 mt-6 xl:mt-0">
              <h2 className="font-bold menutextcolorheader">Grillmeny</h2>
              {GRILLMENU.map((grillitem) => (
                <GrillItem name={grillitem.name} price={grillitem.price} />
              ))}
            </div>
          </div>

          <div className="xl:flex xl:flex-row-reverse xl:mt-12">
            <motion.img
              src="/images/burger.jpg"
              alt="pizza"
              className="itemcontentspacing xl:block xl:w-screen/2 xl:h-screen/2 xl:overflow-hidden xl:object-cover rounded-xl xl:rounded-r-3xl shadow-sm border-b-2 border-themecolor1"
              // variants={FASTPOPEFFECT}
              // initial="hidden"
              // animate="visible"
            />
            <div className="xl:flex xl:flex-col xl:justify-center xl:mr-20 xl:w-1/6 mt-6 xl:mt-0">
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

          <div className="xl:flex xl:mt-12 xl:mb-6">
            <motion.img
              src="/images/pizza.jpg"
              alt="pizza"
              className="itemcontentspacing xl:block xl:max-w-screen-md xl:max-h-full xl:overflow-hidden xl:object-cover rounded-xl xl:rounded-l-3xl shadow-sm border-b-2 border-themecolor1"
              // variants={FASTPOPEFFECT}
              // initial="hidden"
              // animate="visible"
            />
            <div className="xl:flex xl:flex-col xl:justify-center xl:ml-20 xl:w-1/4 mt-6 xl:mt-0">
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
        </div>
      </div>
    </div>
  );
}

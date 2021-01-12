import type { AppProps } from "next/app";
import Link from "next/link";
import "../styles/globals.css";
import Home from ".";

import { useState } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App({ Component, pageProps }: AppProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const openNav = () => {
    if (navOpen) setNavOpen(false);
    else setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) setScrolledDown(true);
    else setScrolledDown(false);
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackground);

  return (
    <div className="relative">
      <nav
        className={`${
          scrolledDown || navOpen ? "text-black" : "text-white"
        } w-screen fixed`}
      >
        {/* Container for title and burger menu */}
        <div
          className={`
          ${scrolledDown && !navOpen ? "pt-3 bg-offwhite" : "lg:pt-10"}
          ${navOpen && !scrolledDown ? "pt-5 pb-5 bg-offwhite" : ""} 
          ${scrolledDown && navOpen ? "pt-3 bg-offwhite" : ""}
          ${!scrolledDown && !navOpen ? "pt-5 pb-5" : ""}

          flex justify-between items-center paddingx pb-3 lg:justify-center`}
        >
          {/* Title */}
          <div>
            <a
              href="/"
              className={`${scrolledDown ? "text-2xl" : "text-4xl"} font-bold`}
            >
              Jevelin
            </a>
          </div>

          {/* Burger menu */}
          <div className="lg:hidden flex w-76px justify-center">
            <button className="block" onClick={() => openNav()}>
              {navOpen ? (
                <FontAwesomeIcon icon={faTimes} className="text-3xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-3xl" />
              )}
            </button>
            <a href="#" className="block ml-5">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </a>
          </div>
        </div>

        {/* List */}
        <div
          className={`
          ${navOpen ? "block text-white bg-dropdown" : "hidden lg:block"}
          ${scrolledDown && !navOpen && "bg-offwhite"}
          ${scrolledDown && navOpen && "bg-dropdown"}`}
        >
          <ul
            className={`lg:flex lg:justify-center uppercase py-1 paddingx 
            ${navOpen ? "divide-y divide-dropdownborder" : "font-bold pb-3"}`}
          >
            <li className="navoptions">
              <Link href="#">
                <a onClick={closeNav}>Hjem</a>
              </Link>
            </li>
            <li className="navoptions">
              <Link href="#about">
                <a onClick={closeNav}>Om oss</a>
              </Link>
            </li>
            <li className="navoptions">
              <Link href="#hours">
                <a onClick={closeNav}>Åpningstider</a>
              </Link>
            </li>
            <li className="navoptions">
              <Link href={"#menu"}>
                <a onClick={closeNav}>Meny</a>
              </Link>
            </li>
            <li className="navoptions">
              <Link href="#contact">
                <a onClick={closeNav}>Kontakt oss</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* App content */}
      <Home />
    </div>
  );
}

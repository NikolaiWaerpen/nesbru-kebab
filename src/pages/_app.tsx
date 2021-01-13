import type { AppProps } from "next/app";
// import Link from "next/link";
import "../styles/globals.css";
import Home from ".";
import { Link } from "react-scroll";
import { useState } from "react";
import { SCROLL_DURATION } from "../../consts";

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
            <Link to="home" smooth={true} duration={SCROLL_DURATION}>
              <a
                className={`${
                  scrolledDown ? "text-2xl" : "text-4xl"
                } font-bold`}
              >
                Jevelin
              </a>
            </Link>
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
            <Link to="social" smooth={true} duration={SCROLL_DURATION}>
              <a className="block ml-5">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
              </a>
            </Link>
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
            <div>
              <Link to="home" smooth={true} duration={SCROLL_DURATION}>
                <li className="navoptions">
                  <a onClick={closeNav}>Hjem</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="about" smooth={true} duration={SCROLL_DURATION}>
                <li className="navoptions">
                  <a onClick={closeNav}>Om oss</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="hours" smooth={true} duration={SCROLL_DURATION}>
                <li className="navoptions">
                  <a onClick={closeNav}>Åpningstider</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="menu" smooth={true} duration={SCROLL_DURATION}>
                <li className="navoptions">
                  <a onClick={closeNav}>Meny</a>
                </li>
              </Link>
            </div>
            <div>
              <Link to="contact" smooth={true} duration={SCROLL_DURATION}>
                <li className="navoptions">
                  <a onClick={closeNav}>Kontakt oss</a>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
      {/* App content */}
      <Home />
    </div>
  );
}

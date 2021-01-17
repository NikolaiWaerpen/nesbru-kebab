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
  const [screenLarge, setScreenLarge] = useState(false);

  const openNav = () => {
    if (navOpen) setNavOpen(false);
    else setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
    console.log("fired");
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) setScrolledDown(true);
    else setScrolledDown(false);
  };

  const isScreenLarge = () => {
    if (window.innerWidth > 1023) setScreenLarge(true);
    else setScreenLarge(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", isScreenLarge);
  }

  return (
    <div>
      <nav
        className={`${
          scrolledDown || navOpen ? "text-black" : "text-white"
        } w-screen fixed z-50`}
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
                } font-bold texthovereffect`}
              >
                {scrolledDown || navOpen ? (
                  <img
                    src="/images/nesbrukebab/nesbrukebabblacktext.png"
                    alt="logo picture/burger"
                    className="max-w-xs max-h-14 lg:max-h-16 object-cover"
                  />
                ) : (
                  <img
                    src="/images/nesbrukebab/nesbrukebabwhitetext.png"
                    alt="logo picture/burger"
                    className="max-w-xs max-h-14 lg:max-h-16 object-cover"
                  />
                )}
              </a>
            </Link>
          </div>

          {/* Icons */}
          {!screenLarge && (
            <div className="flex w-76px justify-center">
              <button className="block" onClick={() => openNav()}>
                {navOpen ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-3xl texthovereffect"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-3xl texthovereffect"
                  />
                )}
              </button>
              <Link
                to="social"
                smooth={true}
                duration={SCROLL_DURATION}
                className="ml-5"
              >
                <a className="block">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-3xl texthovereffect"
                  />
                </a>
              </Link>
            </div>
          )}
        </div>

        {/* List */}
        {/* if on mobile and navOpen */}
        {/* {navOpen && !screenLarge && ( */}
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
              <Link
                to="home"
                smooth={true}
                duration={SCROLL_DURATION}
                onClick={closeNav}
              >
                <li className="navoptions">
                  <a className="texthovereffect">Til toppen</a>
                </li>
              </Link>
            </div>
            <div>
              <Link
                to="about"
                smooth={true}
                duration={SCROLL_DURATION}
                onClick={closeNav}
              >
                <li className="navoptions">
                  <a className="texthovereffect">Kebabkongen</a>
                </li>
              </Link>
            </div>
            <div>
              <Link
                to="menu"
                smooth={true}
                duration={SCROLL_DURATION}
                onClick={closeNav}
              >
                <li className="navoptions">
                  <a className="texthovereffect">Meny</a>
                </li>
              </Link>
            </div>
            <div>
              <Link
                to="hours"
                smooth={true}
                duration={SCROLL_DURATION}
                onClick={closeNav}
              >
                <li className="navoptions">
                  <a className="texthovereffect">Åpningstider</a>
                </li>
              </Link>
            </div>
            <div>
              <Link
                to="contact"
                smooth={true}
                duration={SCROLL_DURATION}
                onClick={closeNav}
              >
                <li className="navoptions">
                  <a className="texthovereffect">Finn oss</a>
                </li>
              </Link>
            </div>
          </ul>
        </div>
        {/* )} */}
      </nav>
      {/* App content */}
      <Home />
    </div>
  );
}

import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useState } from "react";
import Banner from "../components/Banner";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App({ Component, pageProps }: AppProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleClick = () => {
    if (navOpen) setNavOpen(false);
    else setNavOpen(true);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) setScrolledDown(true);
    else setScrolledDown(false);
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div>yes</div>
      <nav
        className={`${
          scrolledDown || navOpen ? "text-black" : "text-white"
        } w-screen fixed`}
      >
        {/* Container for title and burger menu */}
        <div
          className={`
          ${scrolledDown && !navOpen ? "pt-3 bg-white" : "lg:pt-10"}
          ${navOpen && !scrolledDown ? "pt-5 pb-5 bg-white" : ""} 
          ${scrolledDown && navOpen ? "pt-3 bg-white" : ""}
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
            <button className="block" onClick={() => handleClick()}>
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

        <div
          className={`
          ${navOpen ? "block text-white bg-dropdown" : "hidden lg:block"}
          ${scrolledDown && "bg-white"}`}
        >
          {/* List */}
          <ul
            className={`lg:flex lg:justify-center uppercase py-1 paddingx 
            ${navOpen ? "divide-y divide-dropdownborder" : "font-bold pb-3"}`}
          >
            <li className="navoptions">
              <a href="#">Hjem</a>
            </li>
            <li className="navoptions">
              <a href="#">Om oss</a>
            </li>
            <li className="navoptions">
              <a href="#">Tilbud</a>
            </li>
            <li className="navoptions">
              <a href="#">Meny</a>
            </li>
            <li className="navoptions">
              <a href="#">Kontakt oss</a>
            </li>
          </ul>
        </div>
      </nav>

      <Banner />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

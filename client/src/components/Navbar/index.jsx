import React from "react";
import logo from "./logo.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full h-20">
        <ul className="flex left-0 justify-start w-1/4">
          <div>
            <img className="w-20 h-20 object-cover" src={logo} alt="logo" />
          </div>
        </ul>
        <ul className="flex items-center flex-nowrap gap-4 right-0 justify-around w-3/4 object-center h-full">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Nostros</a>
          </li>
          <li>
            <a>Especialidades</a>
          </li>
          <li>
            <a>otros</a>
          </li>
          <li>
            <a>Ingresar</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

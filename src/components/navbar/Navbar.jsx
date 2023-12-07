import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assests/logo.svg";
import Menu from "./Menu";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar_links">
        <div className="gpt3__navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar_links_logo_containers">
        <Menu />
        </div>
      </div>
      <div className="gpt3__navbar_sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar_menu_containers scale-up-center">
            <div className="gpt3__navbar_menu_containers_links">
            <Menu />
              <div className="gpt3__navbar_menu_containers_links_sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

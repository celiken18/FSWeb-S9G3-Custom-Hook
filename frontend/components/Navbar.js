import React from "react";
import { useLocalStorageKullan } from "../../hooks/useLocalStorageKullan";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
    useLocalStorageKullan("geceModu", !props.geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

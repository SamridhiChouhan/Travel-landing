import { useState } from "react";
import "./Navbar.css";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";
import ToggleBtn from "./ToggleBtn";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function showNav() {
    setIsOpen(true);
  }

  function hideNav() {
    setIsOpen(false);
  }
  return (
    <div className={isOpen ? "navbar col-navbar" : "navbar"}>
      <NavStart isOpen={isOpen} />
      <NavEnd isOpen={isOpen} />
      <ToggleBtn isOpen={isOpen} showNav={showNav} hideNav={hideNav} />
    </div>
  );
}

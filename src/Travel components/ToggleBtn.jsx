import "./ToggleBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ToggleBtn({ showNav, isOpen, hideNav }) {
  return (
    <button className="toggle-btn" onClick={isOpen ? hideNav : showNav}>
      <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
    </button>
  );
}

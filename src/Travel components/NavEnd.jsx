import "./NavEnd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavEnd({ isOpen }) {
  let navInfo = {
    searchPlaceholder: "Search for a place, city or destination.",
    btn: "Book Now",
  };
  let [search, setSearch] = useState("");

  function changeValue(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={isOpen ? "col-navEnd nav-end " : "nav-end"}>
      <form className="navSearch">
        <input
          type="search"
          placeholder={navInfo.searchPlaceholder}
          value={search}
          onChange={changeValue}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <button className="book-btn">{navInfo.btn}</button>
    </div>
  );
}

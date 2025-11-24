import "./NavStart.css";

export default function NavStart({ isOpen }) {
  let navinfo = {
    brandname: "WanderGuide",
    navOptions: ["Home", "Destinations", "Packages", "Blog", "About us"],
  };
  return (
    <div className="nav-start">
      <div className="nav-brand">{navinfo.brandname}</div>
      <div className={isOpen ? "col-navStart nav-options" : "nav-options"}>
        {navinfo.navOptions.map((option, key) => {
          return (
            <a href="" key={key}>
              {option}
              {""}
            </a>
          );
        })}
      </div>
    </div>
  );
}

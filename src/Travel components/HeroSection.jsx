import "./HeroSection.css";
import travelvideo from "../assets/TravelFull.mp4";

export default function HeroSection() {
  let hero = {
    heading: "WANDER",
    description:
      "From mountains to coastlines, your dream trip is waiting. Plan smarter and explore deeper with a travel app built for true wanderers. Because every journey deserves a beautiful beginning — your dream destination is just one search away.",
    btns: [
      {
        text: "Explore us",
        class: "btn-primary",
      },
      {
        text: "Join us",
        class: "btn-outline",
      },
    ],
  };
  return (
    <div className="hero-sec">
      <video
        className="video"
        autoPlay
        loop
        muted
        playsInline
        src={travelvideo}
      ></video>
      <div className="hero-content">
        <h1>{hero.heading}</h1>
        <p>{hero.description}</p>
        <div className="hero-btns">
          {hero.btns.map((btn, i) => {
            return (
              <button className={btn.class} key={i}>
                {btn.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Background() {
  return (
    <section
      className="d-flex align-items-center justify-content-between text-white px-5"
      style={{
        backgroundImage: `url("/images/blueBackground.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <h1>Find Your Dream Job with Ease</h1>
        <p>Search, Apply, and Track Job Applications All in One Place</p>
      </div>

      <img
        src="/images/man.svg"
        alt="Businessman with a bag"
        style={{
          width: "400px",
          position: "absolute",
          right: "10%",
          bottom: "-40%",
        }}
      />
    </section>
  );
}

export default Background;

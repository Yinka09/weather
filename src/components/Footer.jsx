import React from "react";
import "../styles/Footer.css";

export default function Header() {
  return (
    <footer>
      <p>
        This project was Coded by{" "}
        <a href="https://github.com/Yinka09" target="_blank" rel="noreferrer">
          Kadiri Adeyinka
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Yinka09/weather"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href=" https://weather-p2ae.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Render
        </a>{" "}
      </p>
    </footer>
  );
}

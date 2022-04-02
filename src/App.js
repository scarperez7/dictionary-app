import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        Open Source code by{" "}
        <a
          href="https://github.com/scarperez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scarlett Perez
        </a>
      </footer>
    </div>
  );
}

import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultKeyword="leaf" />
      </header>
      <footer>
        <a
          href="https://github.com/scarperez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source code
        </a>
        {""} by Scarlett Perez
      </footer>
    </div>
  );
}

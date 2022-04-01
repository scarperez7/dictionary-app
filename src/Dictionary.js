import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, Setkeyword] = useState("");
  let [results, SetResults] = useState(null);

  function handleResponse(response) {
    SetResults(response.data[0]);
  }

  function handleWordChange(event) {
    Setkeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>

      <Results results={results} />
    </div>
  );
}

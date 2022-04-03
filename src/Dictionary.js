import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, Setkeyword] = useState(props.defaultKeyword);
  let [results, SetResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    SetResults(response.data[0]);
  }

  function handleWordChange(event) {
    Setkeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function HandleSumbit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1 className="text-center p-2 m-4 mb-0"> Search for a word </h1>
        </header>
        <section className="p-4  ms-5 me-5 mt-0">
          <form onSubmit={HandleSumbit}>
            <input type="search" className="mb-0" onChange={handleWordChange} />
          </form>
          <div className="hint">Suggested searches: hike, lawn, wine, yoga</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

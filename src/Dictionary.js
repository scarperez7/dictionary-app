import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, Setkeyword] = useState(props.defaultKeyword);
  let [results, SetResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionary(response) {
    SetResults(response.data[0]);
  }

  function handleWordChange(event) {
    Setkeyword(event.target.value);
  }

  function handlePexel(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionary);

    const pexelsApiKey =
      "563492ad6f9170000100000181b9ee3eb1ad4562976c2cc0731059dc";
    let pexelsApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApi, { headers: headers }).then(handlePexel);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

import React from "react";
import Meaning from "./Meaning";

import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section className="p-3 m-5 mt-4 mb-3">
          <h3 className="mb-0 text-capitalize"> {props.results.word}</h3>
          <div className="Phonetic">
            <p> {props.results.phonetic} </p>
            <a
              href={props.results.phonetics[0].audio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Listen{" "}
            </a>
          </div>
        </section>
        {props.results.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <section className="p-3 m-5 mt-2 mb-1">
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}{" "}
      </div>
    );
  } else {
    return null;
  }
}

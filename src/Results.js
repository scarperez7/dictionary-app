import React from "react";
import Meaning from "./Meaning";

import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section className="p-3 m-5 mb-4">
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
              <section className="p-3 m-5 mt-3 mb-3">
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

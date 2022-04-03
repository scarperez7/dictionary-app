import React from "react";
import Synonyms from "./Synonyms.js";

import "./Meaning.css";
export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h5 className="speech text-capitalize">
          <u>{props.meaning.partOfSpeech}</u>
        </h5>
        {props.meaning.definitions.map(function(definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example text-capitalize">
                <em> {definition.example}</em>
              </div>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}

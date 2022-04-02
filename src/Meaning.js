import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h6>
          <u>{props.meaning.partOfSpeech}</u>
        </h6>
        {props.meaning.definitions.map(function(definition, index) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <em>{definition.example}</em>
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

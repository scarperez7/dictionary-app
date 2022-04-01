import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <u>{props.meaning.partOfSpeech}</u>
      </h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <p key={index}>
              {definition.definition} <br />
              <em>{definition.example}</em>
            </p>
          );
        })}
      </div>
    </div>
  );
}

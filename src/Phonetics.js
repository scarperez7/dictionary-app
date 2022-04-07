import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <p> {props.phonetic.text} </p>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}

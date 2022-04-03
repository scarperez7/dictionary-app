import React from "react";

import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos p-4 m-5 mt-3 mb-2">
        <div className="row">
          {props.photos.map(function(photos, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photos.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    src={photos.src.landscape}
                    alt={photos.alt}
                    className="img-fluid "
                  />{" "}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

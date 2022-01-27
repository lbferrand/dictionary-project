import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <h5>Definition</h5>
              <div className="definition">{definition.definition}</div>
              <h5>Example</h5>
              <div className="example">{definition.example}</div>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

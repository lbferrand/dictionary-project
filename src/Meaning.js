import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
                <br />
                <strong>Examples: </strong>
                <em>{definition.example}</em>
              </p>
              <section>
                <strong>Synonyms: </strong>
                <Synonyms synonyms={definition.synonyms} />
              </section>
            </div>
          );
        })}
        <p>{props.meaning.definitions[0].definition}</p>
        <p>{props.meaning.definitions[0].example}</p>
      </section>
    </div>
  );
}

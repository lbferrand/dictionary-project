import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <section>
        <h6>Please enter a word here</h6>
        <form onSubmit={search}>
          <input
            className="input"
            type="search"
            placeholder="Enter a word.."
            onChange={handleKeywordChange}
          ></input>
        </form>
        <p className="sugestion">
          Suggest of words: love, tenderness, endearment, idolization
        </p>
      </section>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}

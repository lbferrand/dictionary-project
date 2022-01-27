import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001176704a37b574400ace23c7812a4e99d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="container">
        <div className="Dictionary">
          <h1>Dictionary</h1>
          <h4>Let's discover the meaning of..</h4>
          <section>
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                type="search"
                placeholder="Enter a word.."
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              ></input>
            </form>
            <p className="sugestion">
              Suggested words: cascade, sunset, sunflower, Kitten
            </p>
          </section>
          <div>
            <Results results={results} />
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

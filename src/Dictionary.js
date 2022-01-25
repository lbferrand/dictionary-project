import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert("Searching..");
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autofocus={true}></input>
      </form>
    </div>
  );
}

import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/stickers/30/000000/room-sound.png" />
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

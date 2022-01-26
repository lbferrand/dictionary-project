import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <section>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/stickers/30/000000/room-sound.png"
            alt="sound icon"
          />
        </a>
        <br />
        {props.phonetic.text}
      </section>
    </div>
  );
}

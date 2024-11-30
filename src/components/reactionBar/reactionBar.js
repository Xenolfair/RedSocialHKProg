import React, { useState } from "react";
import "./reactionBar.css";

const ReactionBar = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="reaction-bar">
      <button onClick={handleLike} className="reaction-button">👍 {likes}</button>
      <button className="reaction-button">💬 {randomComments}</button>
      <button className="reaction-button">📩 {randomShares}</button>
    </div>
  );
};

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomComments = generarNumeroAleatorio(3, 99);
const randomShares = generarNumeroAleatorio(0, 99);

export default ReactionBar;
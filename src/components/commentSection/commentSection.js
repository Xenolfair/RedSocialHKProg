import React, { useState } from "react";
import "./commentSection.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="commentSection">
      <ul className="commentList">
        {comments.map((comment, index) => (
          <li key={index} className="commentItem"><strong>Tú: </strong>{comment}</li>
        ))}
      </ul>

      <div className="commentSP">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Añade un comentario..."
          className="comment-input"
        />
        <button onClick={handleAddComment} className="commentButton">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path
                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
              ></path>
            </svg>
            Share
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
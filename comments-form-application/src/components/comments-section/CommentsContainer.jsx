import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentDisplay from "./CommentDisplay";
import './comment-section.css'

function CommentsContainer() {
  const [comments, setComments] = useState([]);

  const handleFormSubmit = (data) => {
    setComments((prevComments) => [...prevComments, data]);
  };

  return (
    <div className="commentsContainer">
      <h1>Comments Section</h1>
      <CommentForm onSubmit={handleFormSubmit} /> <br />
      {comments.map((comment, index) => (
        <CommentDisplay key={index} data={comment} />
      ))}
    </div>
  );
}

export default CommentsContainer;
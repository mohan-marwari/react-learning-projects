function CommentDisplay({ data }) {
  return (
    <div className="commentDisplay">
      <h3>Submitted Comment</h3>
      <div className="userRating">
        <p>
        <strong>Username:</strong> <span>@{data.username}</span>
      </p>
      <p>
        <strong>Rating:</strong> <span>{data.rating}</span>
      </p>
      </div>
      
      <p>
        <strong>Remarks:</strong> <span>{data.remarks}</span>
      </p>
    </div>
  );
}

export default CommentDisplay;

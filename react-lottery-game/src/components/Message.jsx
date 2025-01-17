function Message({ message }) {
  const isSuccess = message === "Congratulations! You won the Lottery!";
  return (
    message && (
      <p className={isSuccess ? "message success" : "message failure"}>
        {message}
      </p>
    )
  );
}

export default Message;

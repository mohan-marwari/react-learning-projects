import { useState } from "react";
import Info from "./Info";
import Ticket from "./Ticket";
import Message from "./Message";
import Button from "./Button";
import "./LotteryGame.css";

function LotteryGame() {
  const [ticket, setTicket] = useState(null);
  const [message, setMessage] = useState("");

  const generateTicket = () => {
    const digits = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 10)
    );
    const ticketNumber = digits.join("");
    const sum = digits.reduce((acc, cur) => acc + cur, 0);

    setTicket(ticketNumber);
    setMessage(
      sum === 15 ? "Congratulations! You won the Lottery!" : "Try again!"
    );
  };

  return (
    <div className="lottery-game">
      <h1>Lottery Game</h1>
      <Info />
      <Ticket ticket={ticket} />
      <Message message={message} />
      <Button onClick={generateTicket} />
    </div>
  );
}

export default LotteryGame;

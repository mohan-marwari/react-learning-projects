// Import React and necessary hooks
import React, { useState, useEffect } from "react";
import "./App.css";

// Joke component
export default function JokeApp() {
  const [joke, setJoke] = useState(""); // State to store joke
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch a joke using useEffect
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke(`${data.setup} - ${data.punchline}`); // Set fetched joke
      } catch (error) {
        console.error("Error fetching the joke:", error);
        setJoke("Failed to load a joke. Try refreshing!");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchJoke(); // Call the fetchJoke function
  }, []); // Empty dependency array ensures it runs only on initial render

  return (
    <div style={styles.container}>
      <h1>Random Joke Generator App</h1>
      {loading ? <p>Loading...</p> : <p className="quote" style={styles.joke}>{joke}</p>} <br />
      <button onClick={() => window.location.reload()}>
        Fetch Another Joke
      </button>
    </div>
  );
}

// Basic styles for the project
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  joke: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
};

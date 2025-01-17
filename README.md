# Random Joke Generator App

This project is a **Random Joke Generator App** built using **React** and the `useEffect` hook. It fetches a random joke from an external API and displays it to the user, with an option to fetch another joke by reloading the page.

---

## Features

- Fetches random jokes from the [Official Joke API](https://official-joke-api.appspot.com/random_joke).
- Uses React's `useState` and `useEffect` hooks for state management and side effects.
- Displays a loading message while fetching jokes.
- Provides a button to fetch a new joke (via page reload).

---

## Project Structure

```plaintext
src/
├── App.css         # Contains global styles for the app
├── App.js          # Main React component implementing the joke generator
└── index.js        # Entry point for the React application
```

---

## Code Walkthrough

### 1. **States**
- `joke`: Holds the fetched joke.
- `loading`: Indicates whether the joke is currently being fetched.

### 2. **useEffect Hook**
- Fetches a joke when the component mounts.
- Ensures the API call is made only once during the initial render.

### 3. **Styling**
- Inline styles are used for basic styling of the app.

---

## How to Run

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd random-joke-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

---

## Example Output

### Loading State
```
Loading...
```

### Displayed Joke
```
Why don't skeletons fight each other? - They don't have the guts.
```

---

## Dependencies

- **React**: Library for building the user interface.
- **Fetch API**: Used to fetch jokes from the external API.

---

## Future Enhancements

- Add error handling UI for failed API requests.
- Implement a button to fetch a new joke without reloading the page.
- Add more animations and styling.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

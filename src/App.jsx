import "./App.css";
import { useState } from "react";

function App() {
  const [author, setAuthor] = useState();
  const [color, setColor] = useState();
  const [quote, setQuote] = useState();
  const [visibility, setVisibility] = useState(false);

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function changeColor() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumberHex()];
    }
    setColor(hexColor);
  }
  function getRandomNumberHex() {
    return Math.floor(Math.random() * hex.length);
  }

  async function handleClick() {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random"); // https://dummyjson.com/quotes/random   more quotes
      const data = await response.json();
      setAuthor(data[0].author);
      setQuote(data[0].content);
      setVisibility(true);
      changeColor();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="body" style={{ backgroundColor: color }}>
        <h1>Let's generate a bunch of quotes!</h1>
        <h3>And some colors too!! 😊</h3>
        <main>
          <div className="author">
            <h4 style={{ color: color }}>
              <span className={`bar hidden ${visibility && "visible"}`}>-</span>
              {author}
            </h4>
          </div>
          <div
            id="quote"
            style={{ color: color }}
            className={`quote hidden ${visibility && "visible"}`}
          >
            "{quote}"
          </div>
          <div className="flex">
            <button
              onClick={handleClick}
              style={{ backgroundColor: color }}
              className="btn-hero"
              id="btn"
            >
              generate
            </button>
          </div>
        </main>
        <div className="tooltip btn fixed">
          <span className="tooltiptext">Here's the code </span>
          <a className="codeBtn" href="https://google.com" target="_blank">
            <svg
              viewBox="0 0 48 48"
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <defs></defs>
                <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import './App.css';
import { GifCycler } from "./components/GifCycler.tsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Gif Cycler
        </h1>
        <p>
          Simple webpage that cycles through gifs
        </p>
      </header>
      <GifCycler></GifCycler>
    </div>
  );
}

export default App;

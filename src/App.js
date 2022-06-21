import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <footer>
        {" "}
        This project was coded by Eu and is{" "}
        <a
          href="https://github.com/ibads8/react_weather_app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/sites/comfy-tapioca-39b8d1/overview"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

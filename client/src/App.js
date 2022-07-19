import "./App.css";
import Main from "./components/Main.js";
import { useState, useEffect } from "react";

// functions
// import { getTest } from "./functions/test";
import { getCarbon } from "./functions/carbon";

function App() {
  // const [data, setData] = useState("Hello World!");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    getCarbon()
      .then((res) => {
        setWebsite(res);
        console.log(res.stringify);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h2>asdf</h2>
      <Main />
    </div>
  );
}

export default App;

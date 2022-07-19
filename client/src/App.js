import "./App.css";
import Main from "./components/Main.js";
import { useState, useEffect } from "react";

// functions
// import { getTest } from "./functions/test";
// import { getCarbon } from "./functions/carbon";

function App() {
  // const [data, setData] = useState("Hello World!");
  const [website, setWebsite] = useState({});

  // useEffect(() => {
  //   getCarbon()
  //     .then((res) => {
  //       console.log(res);
  //       setWebsite(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("https://api.websitecarbon.com/site?url=google.com")
      .then((res) => res.json())
      .then((data) => setWebsite(data));
  }, []);

  return (
    <div className="App">
      <h1>{website.data.url}</h1>
      <h2>asdf</h2>
      <Main />
    </div>
  );
}

export default App;

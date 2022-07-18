import "./App.css";
import Main from "./components/Main.js";
import { useState, useEffect } from "react";

// functions
// import { getTest } from "./functions/test";
// import { getCarbon } from "./functions/carbon";

function App() {
  // const [data, setData] = useState("Hello World!");
  // const [website, setWebsite] = useState("");

  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.websitecarbon.com/site?url=google.com",
  //       { mode: "cors" }
  //     );
  //     const data = await response.json();
  //     console.log({ data });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   makeAPICall();
  // }, []);

  // useEffect(() => {
  //   getTest()
  //     .then((res) => {
  //       setData(res.message);
  //       console.log("asdf");
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   getCarbon()
  //     .then((res) => {
  //       setWebsite(res.message);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/site?url=google.com", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "error!";

  return (
    <div className="App">
      {/* <h1>{data.name}</h1>
      <h2>{website}</h2> */}
      <Main />
    </div>
  );
}

export default App;

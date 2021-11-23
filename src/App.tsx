import React, { useState, useCallback, useRef, useMemo } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [count, setCount] = useState<number>(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  function getLongest(data: string[]) {
    if (!data) {
      return;
    }
    console.log("computing longest word");

    let longest = "";
    data.forEach((sentence: string) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longest.length) {
          longest = word;
        }
      })
    );
    return longest;
  }

  const getter = useCallback(() => getLongest(JSON.parse(data)), [data]);

  return (
    <div className="App">
      <div>count: {count}</div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        count
      </button>
      <div>{getter}</div>
      {/* <div>{getLongest(JSON.parse(data))}</div> */}
    </div>
  );
}

export default App;

import React from "react";
import "./index.css";
import AlienIpsumGenerator from "./components/AlienIpsumGenerator";
// If you don't deploy to vercel remove the line below and the analytics tag too
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <AlienIpsumGenerator />
      <Analytics />
    </div>
  );
}

export default App;

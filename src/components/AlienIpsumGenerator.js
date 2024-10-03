import React, { useState, useRef } from "react";
import axios from "axios";

const AlienIpsumGenerator = () => {
  const [alienText, setAlienText] = useState("");
  const [paragraphs, setParagraphs] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const textRef = useRef(null);

  const generateAlienIpsum = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`
      );
      const alienizedText = response.data.map((paragraph) =>
        paragraph
          .replace(/bacon/gi, "xenomorph")
          .replace(/ham/gi, "zorgon")
          .replace(/pork/gi, "klingon")
          .replace(/sausage/gi, "tribble")
      );
      setAlienText(alienizedText.join("\n\n"));
    } catch (error) {
      console.error("Error fetching alien ipsum:", error);
      setAlienText("Failed to generate alien ipsum. Please try again.");
    }
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    if (textRef.current) {
      navigator.clipboard
        .writeText(textRef.current.innerText)
        .then(() => {
          setCopyFeedback(true);
          setTimeout(() => setCopyFeedback(false), 2000); // Hide feedback after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text: ", err));
    }
  };

  return (
    <div className="alien-ipsum-container">
      <h1>Alien Ipsum Generator</h1>
      <div className="controls">
        <label htmlFor="paragraphs">Number of paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
          min="1"
          max="10"
        />
        <button onClick={generateAlienIpsum} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate text"}
        </button>
      </div>
      <div className="alien-text" ref={textRef}>
        {alienText.split("\n\n").map((paragraph, index) => (
          <p key={`para-${index}-${paragraph.slice(0, 10)}`}>{paragraph}</p>
        ))}
      </div>
      {alienText && (
        <div className="copy-container">
          <button onClick={copyToClipboard} className="copy-button">
            {copyFeedback ? "Copied!" : "Copy Text"}
          </button>
          {copyFeedback && (
            <span className="copy-feedback">Text copied to clipboard!</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AlienIpsumGenerator;

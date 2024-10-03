import React from "react";

export const Controls = ({
  paragraphs,
  setParagraphs,
  generateAlienIpsum,
  isLoading,
}) => (
  <div className="controls">
    <label htmlFor="paragraphs">Number of paragraphs:</label>
    <input
      type="number"
      id="paragraphs"
      value={paragraphs}
      onChange={(e) =>
        setParagraphs(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))
      }
      min="1"
      max="10"
    />
    <button onClick={generateAlienIpsum} disabled={isLoading}>
      {isLoading ? "Generating..." : "Generate text"}
    </button>
  </div>
);

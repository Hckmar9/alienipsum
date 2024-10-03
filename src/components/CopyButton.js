import React from "react";

export const CopyButton = ({ text, onCopy, copyFeedback }) => (
  <div className="copy-container">
    <button onClick={() => onCopy(text)} className="copy-button">
      {copyFeedback ? "Copied!" : "Copy Text"}
    </button>
    {copyFeedback && (
      <span className="copy-feedback">Text copied to clipboard!</span>
    )}
  </div>
);

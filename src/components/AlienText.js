import React from "react";

export const AlienText = ({ text }) => (
  <div className="alien-text">
    {text.split("\n\n").map((paragraph, index) => (
      <p key={`para-${index}-${paragraph.slice(0, 10)}`}>{paragraph}</p>
    ))}
  </div>
);

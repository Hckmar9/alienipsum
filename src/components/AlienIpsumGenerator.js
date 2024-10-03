import React, { useState } from "react";
import axios from "axios";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { alienizeText } from "../utils/textTransformations";
import { Controls } from "./Controls";
import { AlienText } from "./AlienText";
import { CopyButton } from "./CopyButton";

const AlienIpsumGenerator = () => {
  const [alienText, setAlienText] = useState("");
  const [paragraphs, setParagraphs] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const { copyToClipboard, copyFeedback } = useCopyToClipboard();

  const generateAlienIpsum = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`
      );
      const alienizedText = alienizeText(response.data);
      setAlienText(alienizedText.join("\n\n"));
    } catch (error) {
      console.error("Error fetching alien ipsum:", error);
      setAlienText("Failed to generate alien ipsum. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="alien-ipsum-container">
      <h1>Alien Ipsum Generator</h1>
      <Controls
        paragraphs={paragraphs}
        setParagraphs={setParagraphs}
        generateAlienIpsum={generateAlienIpsum}
        isLoading={isLoading}
      />
      {isLoading ? (
        <div className="loading">Generating alien text...</div>
      ) : (
        <AlienText text={alienText} />
      )}
      {alienText && !isLoading && (
        <CopyButton
          text={alienText}
          onCopy={copyToClipboard}
          copyFeedback={copyFeedback}
        />
      )}
    </div>
  );
};

export default AlienIpsumGenerator;

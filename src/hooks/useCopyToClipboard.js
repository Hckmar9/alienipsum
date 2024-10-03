import { useState } from "react";

export const useCopyToClipboard = () => {
  const [copyFeedback, setCopyFeedback] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return { copyToClipboard, copyFeedback };
};

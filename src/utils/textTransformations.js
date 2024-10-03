export const alienizeText = (paragraphs) => {
  return paragraphs.map((paragraph) =>
    paragraph
      .replace(/bacon/gi, "xenomorph")
      .replace(/ham/gi, "zorgon")
      .replace(/pork/gi, "klingon")
      .replace(/sausage/gi, "tribble")
  );
};

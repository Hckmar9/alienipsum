export const alienizeText = (paragraphs) => {
  const alienWords = {
    bacon: "xenomorph",
    ham: "zorgon",
    pork: "klingon",
    sausage: "tribble",
    meat: "grok",
    beef: "bantha",
    chicken: "romulan",
    turkey: "vulcan",
  };

  return paragraphs.map((paragraph) =>
    Object.entries(alienWords).reduce(
      (text, [meat, alien]) => text.replace(new RegExp(meat, "gi"), alien),
      paragraph
    )
  );
};

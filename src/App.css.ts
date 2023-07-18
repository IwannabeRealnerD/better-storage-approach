import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});
globalStyle("html", {
  fontSize: 18,
  "@media": {
    "(max-width: 768px)": {
      fontSize: 16,
    },
  },
  minWidth: 800,

  fontFamily: "Noto Sans KR",
});
globalStyle("body", {
  padding: 0,
  margin: 0,
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const innerContainer = style({
  selectors: {
    [`${container} &`]: {},
  },
});

export const clearLocalStorageButtonContainer = style({
  display: "flex",
  gap: "0.5rem",
  alignContent: "center",
  flexDirection: "column",
});

export const actionButton = style({
  backgroundColor: "white",
  cursor: "pointer",
  border: "1px solid black",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontSize: "1rem",
});

export const highlightedText = style({
  backgroundColor: "lightgray",
  padding: "0.1rem 0.4rem",
  borderRadius: "8px",
  fontSize: "0.8rem",
  fontWeight: 500,
});

export const exampleSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

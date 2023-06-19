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

export const highlightedText = style({
  backgroundColor: "lightgray",
  padding: "0.1rem 0.4rem",
  borderRadius: "8px",
  fontSize: "0.8rem",
  fontWeight: 500,
});

export const exampleContainer = style({
  backgroundColor: "lightGray",
  padding: "0.5rem 1rem",
});

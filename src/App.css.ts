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

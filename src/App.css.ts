import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});
globalStyle("html", {
  minWidth: 800,
  fontSize: 18,
  "@media": {
    "(max-width: 768px)": {
      fontSize: 16,
    },
  },
});

export const cssObj = {
  container: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};

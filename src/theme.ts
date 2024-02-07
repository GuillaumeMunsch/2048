import { CellValue } from "./game/game";

/* DIMENSIONS */
const gameWidth = "500px";
const cellFontSize = 24;
const cellWidth = "120px";
const cellRadius = "4px";

export { gameWidth, cellFontSize, cellWidth, cellRadius };

/* COLORS */

const gameBackgroundColor = "#BBADA0";
const cellColorsMap: Record<CellValue, string> = {
  "0": "#CDC0B4",
  "2": "#EEE4DA",
  "4": "#EDE0C8",
  "8": "#F2B179",
  "16": "#F59563",
  "32": "#F67C5F",
  "64": "#F65E3B",
  "128": "#EDCF72",
  "256": "#EDCC61",
  "512": "#EDC850",
  "1028": "#EDC53F",
  "2048": "#EDC22E",
};

const below8CellFontColor = "#776D65";
const equalAndAbove8CellFontColor = "#F9F6F2";

export {
  gameBackgroundColor,
  cellColorsMap,
  below8CellFontColor,
  equalAndAbove8CellFontColor,
};

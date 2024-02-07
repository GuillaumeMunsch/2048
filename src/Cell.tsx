import { CellValue } from "./game/game";
import {
  below8CellFontColor,
  cellColorsMap,
  cellFontSize,
  cellRadius,
  cellWidth,
  equalAndAbove8CellFontColor,
} from "./theme";

type Props = {
  value: CellValue;
};

const computeFontColor = (cellValue: CellValue) =>
  cellValue <= 4 ? below8CellFontColor : equalAndAbove8CellFontColor;

const cellStyle = (cellValue: CellValue): React.CSSProperties => ({
  alignItems: "center",
  backgroundColor: cellColorsMap[cellValue],
  borderRadius: cellRadius,
  color: computeFontColor(cellValue),
  display: "inline-flex",
  fontSize: cellFontSize,
  height: cellWidth,
  justifyContent: "center",
  width: cellWidth,
});

const Cell = ({ value }: Props) => (
  <div style={cellStyle(value)}>{value !== 0 && value}</div>
);

export default Cell;

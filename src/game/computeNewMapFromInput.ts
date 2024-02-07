import computeLine from "./computeLine";
import { CellValue, Direction, GAME_SIDE_SIZE } from "./game";

const isMapCorrectSize = (map: number[][]) => {
  return (
    map.length === GAME_SIDE_SIZE &&
    map.every((row) => row.length === GAME_SIDE_SIZE)
  );
};

export const computeNewMapFromInput =
  (map: CellValue[][]) => (direction: Direction) => {
    if (!isMapCorrectSize(map)) throw new Error("Map size incorrect");

    const newMap: CellValue[][] = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    if (["RIGHT", "LEFT"].includes(direction)) {
      for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        newMap[rowIndex] = computeLine(map[rowIndex], direction === "RIGHT");
      }
    } else if (["UP", "DOWN"].includes(direction)) {
      for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        const column: CellValue[] = [];
        for (let colIndex = 0; colIndex < map[rowIndex].length; colIndex++) {
          const element = map[colIndex][rowIndex];
          column.push(element);
        }
        const newColumn = computeLine(column, direction === "DOWN");
        for (let colIndex = 0; colIndex < map[rowIndex].length; colIndex++) {
          newMap[colIndex][rowIndex] = newColumn[colIndex];
        }
      }
    }
    return newMap;
  };

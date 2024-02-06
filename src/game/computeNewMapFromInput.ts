import { Direction } from "./game";

const isMapCorrectSize = (map: number[][]) => {
  return map.length === 4 && map.every((row) => row.length === 4);
};

export const computeNewMapFromInput =
  (map: number[][]) => (direction: Direction) => {
    if (!isMapCorrectSize(map)) throw new Error("Map size incorrect");

    const newMap = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    if (direction === "RIGHT") {
      for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        // let newColIndex = 3;
        for (let colIndex = 3; colIndex >= 0; colIndex--) {
          const elem = map[rowIndex][colIndex];
          if (elem !== 0) {
            // let nextElemColIndex = 2;
            // while (nextElemColIndex >= 0) {
            //   if (map[rowIndex][nextElemColIndex] )
            // }
          }
          // if (elem === 0) continue;
          // else if (colIndex >= 0 && elem === map[rowIndex][colIndex - 1]) {
          //   for (let index = 0; index < array.length; index++) {
          //     const element = array[index];

          //   }
          //   newMap[rowIndex][newColIndex--] = elem * 2;
          //   colIndex -= 1;
          // } else if (elem !== 0) {
          //   newMap[rowIndex][newColIndex--] = elem;
          // }
        }
      }
    }
    if (direction === "LEFT") {
      for (let rowIndex = 3; rowIndex >= 0; rowIndex--) {
        let newColIndex = 0;
        for (let colIndex = 0; colIndex < map[rowIndex].length; colIndex++) {
          const elem = map[rowIndex][colIndex];
          if (elem === 0) continue;
          else if (colIndex >= 0 && elem === map[rowIndex][colIndex + 1]) {
            newMap[rowIndex][newColIndex++] = elem * 2;
            colIndex += 1;
          } else if (elem !== 0) {
            newMap[rowIndex][newColIndex++] = elem;
          }
        }
      }
    }

    if (direction === "UP") {
      for (let colIndex = 0; colIndex < map.length; colIndex++) {
        let newRowIndex = 0;
        for (let rowIndex = 3; rowIndex >= 0; rowIndex--) {
          const elem = map[rowIndex][colIndex];
          if (elem === 0) continue;
          else if (colIndex >= 0 && elem === map[rowIndex][colIndex + 1]) {
            newMap[newRowIndex++][colIndex] = elem * 2;
            rowIndex += 1;
          } else if (elem !== 0) {
            newMap[newRowIndex++][colIndex] = elem;
          }
        }
      }
    }
    return newMap;
  };

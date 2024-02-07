import getRandomNumberWithinRange from "../utils/generateRandomNumber";
import { computeNewMapFromInput } from "./computeNewMapFromInput";
import findEmptyCoordinates from "./findEmptyCoordinates";

export const GAME_SIDE_SIZE = 4;

export type CellValue =
  | 0
  | 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1028
  | 2048;

export type Direction = "UP" | "DOWN" | "RIGHT" | "LEFT";

type Coord = {
  x: number;
  y: number;
};

export type Tile = {
  coord: Coord;
  value: CellValue;
};

export type Map = CellValue[][];

export const emptyMap: Map = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const duplicateMap = (map: Map) => map.map((line) => line.slice());

export const initializeMap = () =>
  generateMapWithNewValue(generateMapWithNewValue(emptyMap));

export const generateMapWithNewValue = (map: Map) => {
  const newMap = duplicateMap(map);
  const emptyCoordinates = findEmptyCoordinates(newMap);
  const { x, y } =
    emptyCoordinates[
      getRandomNumberWithinRange(0, emptyCoordinates.length - 1)
    ];

  newMap[x][y] = (getRandomNumberWithinRange(1, 2) * 2) as CellValue;
  return newMap;
};

export const playRound = (map: Map, direction: Direction) => {
  const duplicatedMap = duplicateMap(map);
  const postInputMap = computeNewMapFromInput(duplicatedMap)(direction);
  const mapWithNewValue = generateMapWithNewValue(postInputMap);
  return mapWithNewValue;
};











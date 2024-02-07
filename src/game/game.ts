import getRandomNumberWithinRange from "../utils/generateRandomNumber";
import findEmptyCoordinates from "./findEmptyCoordinates";

export const GAME_SIDE_SIZE = 4;

type TileValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1028 | 2048;

export type Direction = "UP" | "DOWN" | "RIGHT" | "LEFT";

type Coord = {
  x: number;
  y: number;
};

export type Tile = {
  coord: Coord;
  value: TileValue;
};

export class Game {
  private map: number[][];

  constructor() {
    this.map = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.generateNewValue();
    this.generateNewValue();
  }

  getMap = () => {
    return this.map;
  };

  private generateNewValue = () => {
    const emptyCoordinates = findEmptyCoordinates(this.map);
    const { x, y } =
      emptyCoordinates[
        getRandomNumberWithinRange(0, emptyCoordinates.length - 1)
      ];

    this.map[x][y] = getRandomNumberWithinRange(1, 2) * 2;
  };
}

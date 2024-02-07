import { GAME_SIDE_SIZE } from "./game";

const computeLine = (line: number[], isReverse = false) => {
  if (line.length !== GAME_SIDE_SIZE) throw new Error("Incorrect line size");
  const epuredLine = line.slice().filter((elem) => elem !== 0);

  const correctDirectionLine = isReverse ? epuredLine.reverse() : epuredLine;

  const computedLine: number[] = [];

  for (let i = 0; i < correctDirectionLine.length; i++) {
    if (correctDirectionLine[i] === correctDirectionLine[i + 1]) {
      computedLine.push(correctDirectionLine[i] * 2);
      i++;
    } else {
      computedLine.push(correctDirectionLine[i]);
    }
  }
  for (let i = computedLine.length; i < GAME_SIDE_SIZE; i++) {
    computedLine.push(0);
  }
  return isReverse ? computedLine.reverse() : computedLine;
};

export default computeLine;

type Coord = { x: number; y: number };

const findEmptyCoordinates = (map: number[][]) => {
  const emptyCoordinates: Coord[] = [];

  for (let x = 0; x < map.length; x++) {
    const row = map[x];
    for (let y = 0; y < row.length; y++) {
      const elem = row[y];
      if (elem === 0) {
        emptyCoordinates.push({ x, y });
      }
    }
  }
  return emptyCoordinates;
};

export default findEmptyCoordinates;

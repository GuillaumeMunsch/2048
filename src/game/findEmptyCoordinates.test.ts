import findEmptyCoordinates from "./findEmptyCoordinates";

describe("findEmptyCoordinates", () => {
  it("Should find empty coordinates", () => {
    // GIVEN
    const map = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 0],
    ];

    // WHEN
    const emptyCoordinates = findEmptyCoordinates(map);

    // THEN
    expect(emptyCoordinates).toEqual([
      { x: 0, y: 0 },
      { x: 3, y: 3 },
    ]);
  });

  it("Should find same line empty coordinates", () => {
    // GIVEN
    const map = [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];

    // WHEN
    const emptyCoordinates = findEmptyCoordinates(map);

    // THEN
    expect(emptyCoordinates).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ]);
  });
});

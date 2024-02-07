import {
  emptyMap,
  generateMapWithNewValue,
  initializeMap,
  playRound,
  Map,
} from "./game";

describe("Should test the 2048 game", () => {
  it("Should initialize a map", () => {
    // GIVEN

    // WHEN
    const map = initializeMap();

    // THEN
    expect(map.flat().filter((number) => number !== 0).length).toEqual(2);
  });

  it("Should generate a new random value in map", () => {
    // GIVEN

    // WHEN
    const mapWithOneValue = generateMapWithNewValue(emptyMap);

    // THEN
    expect(
      mapWithOneValue.flat().filter((number) => number !== 0).length
    ).toEqual(1);
  });

  it("Should play a round LEFT", () => {
    // GIVEN
    const map: Map = [
      [0, 0, 8, 2],
      [2, 4, 0, 4],
      [2, 4, 0, 2],
      [0, 2, 8, 4],
    ];

    // WHEN
    const mapAfterInput = playRound(map, "LEFT");

    // THEN
    const expectedMap: Map = [
      [8, 2, 0, 0],
      [2, 8, 0, 0],
      [2, 4, 2, 0],
      [2, 8, 4, 0],
    ];
    expect(mapAfterInput.flat()).toEqual(expectedMap.flat());
  });

  it("Should play a round RIGHT", () => {
    // GIVEN
    const map: Map = [
      [0, 0, 8, 2],
      [2, 4, 0, 4],
      [2, 4, 0, 2],
      [0, 2, 8, 4],
    ];

    // WHEN
    const mapAfterInput = playRound(map, "RIGHT");

    // THEN
    const expectedMap: Map = [
      [0, 0, 8, 2],
      [0, 0, 2, 8],
      [0, 2, 4, 2],
      [0, 2, 8, 4],
    ];
    expect(mapAfterInput.flat()).toEqual(expectedMap.flat());
  });

  it("Should play a round DOWN", () => {
    // GIVEN
    const map: Map = [
      [0, 0, 8, 2],
      [2, 4, 0, 4],
      [2, 4, 0, 2],
      [0, 2, 8, 4],
    ];

    // WHEN
    const mapAfterInput = playRound(map, "DOWN");

    // THEN
    const expectedMap: Map = [
      [0, 0, 0, 2],
      [0, 0, 0, 4],
      [0, 8, 0, 2],
      [4, 2, 16, 4],
    ];
    expect(mapAfterInput.flat()).toEqual(expectedMap.flat());
  });

  it("Should play a round UP", () => {
    // GIVEN
    const map: Map = [
      [0, 0, 8, 2],
      [2, 4, 0, 4],
      [2, 4, 0, 2],
      [0, 2, 8, 4],
    ];

    // WHEN
    const mapAfterInput = playRound(map, "UP");

    // THEN
    const expectedMap: Map = [
      [4, 8, 16, 2],
      [0, 2, 0, 4],
      [0, 0, 0, 2],
      [0, 0, 0, 4],
    ];
    expect(mapAfterInput.flat()).toEqual(expectedMap.flat());
  });
});

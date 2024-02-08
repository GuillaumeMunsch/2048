import { emptyMap, generateMapWithNewValue, initializeMap } from "./game";

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
});

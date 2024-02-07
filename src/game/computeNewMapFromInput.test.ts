import { computeNewMapFromInput } from "./computeNewMapFromInput";

describe("Should test computeNewMapFromInput", () => {
  it("For the ➡", () => {
    // GIVEN
    const map = [
      [2, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 2, 0, 2],
      [2, 0, 4, 0],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("RIGHT");

    // THEN
    const expectedNewMap = [
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 4],
      [0, 0, 2, 4],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });

  it("For the ➡ additions", () => {
    // GIVEN
    const map = [
      [0, 0, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("RIGHT");

    // THEN
    const expectedNewMap = [
      [0, 0, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });

  it("For the ➡ additions", () => {
    // GIVEN
    const map = [
      [0, 0, 2, 2],
      [0, 2, 2, 0],
      [0, 4, 2, 2],
      [0, 4, 4, 8],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("RIGHT");

    // THEN
    const expectedNewMap = [
      [0, 0, 0, 4],
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 8, 8],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });

  it("For the ⬅ additions", () => {
    // GIVEN
    const map = [
      [0, 0, 2, 2],
      [0, 2, 2, 0],
      [0, 4, 2, 2],
      [0, 4, 4, 8],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("LEFT");

    // THEN
    const expectedNewMap = [
      [4, 0, 0, 0],
      [4, 0, 0, 0],
      [4, 4, 0, 0],
      [8, 8, 0, 0],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });

  it("For the ⬆ additions", () => {
    // GIVEN
    const map = [
      [4, 0, 2, 0],
      [4, 0, 0, 2],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("UP");

    // THEN
    const expectedNewMap = [
      [8, 0, 2, 2],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });

  it("For the ⬇ additions", () => {
    // GIVEN
    const map = [
      [4, 0, 2, 0],
      [4, 2, 0, 2],
      [2, 0, 2, 2],
      [2, 0, 0, 0],
    ];

    // WHEN
    const newMap = computeNewMapFromInput(map)("DOWN");

    // THEN
    const expectedNewMap = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [8, 0, 0, 0],
      [4, 2, 4, 4],
    ];
    expect(newMap).toEqual(expectedNewMap);
  });
});

import computeLine from "./computeLine";

describe("Compute line", () => {
  it("Should compute the line", () => {
    // GIVEN
    const arr = [2, 0, 2, 2];

    // WHEN
    const computedLine = computeLine(arr);

    // THEN
    expect(computedLine).toEqual([4, 2, 0, 0]);
  });

  it("Should compute the line", () => {
    // GIVEN
    const arr = [4, 0, 4, 2];

    // WHEN
    const computedLine = computeLine(arr);

    // THEN
    expect(computedLine).toEqual([8, 2, 0, 0]);
  });

  it("Should compute the reverse line", () => {
    // GIVEN
    const arr = [0, 2, 4, 4];

    // WHEN
    const computedLine = computeLine(arr, true);

    // THEN
    expect(computedLine).toEqual([0, 0, 2, 8]);
  });
});
import { Game } from "./game";

describe("Should test the 2048 game", () => {
  it("Should create an new game", () => {
    // GIVEN
    const game = new Game();

    // WHEN
    const map = game.getMap();

    // THEN
    expect(map.flat().filter((number) => number !== 0).length).toEqual(2);
  });
});

describe("Should play a round towards down", () => {
  // GIVEN
  const game = new Game();

  // WHEN
  const map = game.getMap();

  // THEN
  expect(map.flat().filter((number) => number !== 0).length).toEqual(2);
});

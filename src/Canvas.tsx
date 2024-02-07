import { useEffect, useState } from "react";
import { Direction, initializeMap, playRound } from "./game/game";
import Cell from "./Cell";
import { gameBackgroundColor, gameWidth } from "./theme";

const gameStyle: React.CSSProperties = {
  borderRadius: "4px",
  outline: `8px solid ${gameBackgroundColor}`,
  overflow: "hidden",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  width: gameWidth,
  height: gameWidth,
  gap: "8px",
  backgroundColor: gameBackgroundColor,
};

const keyPressedToDirectionMap: Partial<
  Record<KeyboardEvent["key"], Direction>
> = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
};

const Canvas = () => {
  const [gameMap, setGameMap] = useState(initializeMap());

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const direction = keyPressedToDirectionMap[event.key];
      if (direction) return setGameMap(playRound(gameMap, direction));
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [gameMap]);

  return (
    <div style={gameStyle}>
      <div style={gridStyle}>
        {gameMap.map((row) =>
          row.map((cellValue) => <Cell value={cellValue} />)
        )}
      </div>
    </div>
  );
};

export default Canvas;

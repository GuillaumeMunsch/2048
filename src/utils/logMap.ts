import { Map } from "../game/game";

const logMap = (name: string, map: Map) => {
  let mapDisplay = "";

  for (let i = 0; i < map.length; i++) {
    const element = map[i];
    mapDisplay += `${element.toString()}\n`;
  }
  console.log(`${name}\n ${mapDisplay}`);
};

export default logMap;

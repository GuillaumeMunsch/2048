import { Map } from "../game/game";

const logMap = (name: string, map: Map) => {
  console.log(name);

  for (let i = 0; i < map.length; i++) {
    const element = map[i];
    console.log("Element", element);
  }
};

export default logMap;

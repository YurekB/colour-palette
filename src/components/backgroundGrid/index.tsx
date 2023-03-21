import { useEffect, useState } from "react";
import BackgroundTile from "../backgroundTile";
import { BackgroundGridContainer } from "./styles";

const BackgroundGrid = () => {
  const [display, setDisplay] = useState<any[]>([]);

  useEffect(() => {
    for (let index = 0; index < 20; index++) {
      display.push(<BackgroundTile />);
    }
  }, []);

  return (
    <BackgroundGridContainer>
      {display.map((tile: any) => {
        return tile;
      })}
    </BackgroundGridContainer>
  );
};

export default BackgroundGrid;

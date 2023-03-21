import { useState } from "react";
import { TileContainer } from "./styles";

interface props {
  timing: number;
  rgbObj: any;
}

const Tile = ({ timing, rgbObj }: props) => {
  const [display, setDisplay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { red, green, blue } = rgbObj;

  const onMouseLeave = () => {
    clicked ? setDisplay(true) : setDisplay(false);
  };

  const clickFunc = () => {
    setClicked(!clicked);
  };

  return (
    <TileContainer
      red={red}
      blue={blue}
      green={green}
      timing={timing}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={onMouseLeave}
      onClick={clickFunc}
      display={display.toString()}
    >
      <p>{`rgb ( ${red}, ${green}, ${blue} )`}</p>
    </TileContainer>
  );
};

export default Tile;

import { useState } from "react";
import { TileContainer } from "./styles";

interface props {
  red: number;
  blue: number;
  green: number;
  timing: number;
}

const Tile = ({ red, blue, green, timing }: props) => {
  const [display, setDisplay] = useState(false);

  const [clicked, setClicked] = useState(false);

  const onMouseLeave = () => {
    if (clicked) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <TileContainer
      red={red}
      blue={blue}
      green={green}
      timing={timing}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={onMouseLeave}
      onClick={() => setClicked(!clicked)}
      display={display.toString()}
    >
      <p>{`rgb ( ${red}, ${green}, ${blue} )`}</p>
    </TileContainer>
  );
};

export default Tile;
